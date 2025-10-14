import { createClient } from '@supabase/supabase-js';
import apn from 'apn';

const supabaseUrl = 'https://gpacxspfoqocqnjcrhwn.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// APNs setup
const createAPNProvider = () => {
    let key = process.env.APNS_KEY_P8;
    if (!key.includes('BEGIN PRIVATE KEY')) {
        key = `-----BEGIN PRIVATE KEY-----\n${key}\n-----END PRIVATE KEY-----`;
    } else if (!key.includes('\n')) {
        key = key.replace('-----BEGIN PRIVATE KEY----- ', '-----BEGIN PRIVATE KEY-----\n');
        key = key.replace(' -----END PRIVATE KEY-----', '\n-----END PRIVATE KEY-----');
    }
    const options = {
        token: {
            key: key,
            keyId: process.env.APNS_KEY_ID,
            teamId: process.env.APNS_TEAM_ID
        },
        production: process.env.NODE_ENV === 'production'
    };
    return new apn.Provider(options);
};

// Queue-Times API configuration
const QUEUE_TIMES_API = {
    waitTimes: (parkId) => `https://queue-times.com/parks/${parkId}/queue_times.json`
};

// Make API request with retry logic
async function makeRequest(url, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            }
            throw new Error(`HTTP ${response.status}`);
        } catch (error) {
            console.log(`Attempt ${attempt}/${maxRetries} failed:`, error.message);
            if (attempt === maxRetries) throw error;
            await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
        }
    }
}

// Fetch wait times for a specific park
async function fetchRealWaitTimes(parkId) {
    try {
        const data = await makeRequest(QUEUE_TIMES_API.waitTimes(parkId));
        const rides = [];

        // Handle US parks structure (rides nested in lands)
        if (data.lands) {
            data.lands.forEach((land) => {
                if (land.rides) {
                    land.rides.forEach((ride) => {
                        rides.push({
                            id: ride.id.toString(),
                            name: ride.name,
                            waitTime: ride.wait_time || 0,
                            status: ride.is_open ? 'operating' : 'closed',
                            lastUpdate: ride.last_updated
                        });
                    });
                }
            });
        }

        // Handle international parks structure (rides directly in top-level array)
        if (data.rides) {
            data.rides.forEach((ride) => {
                rides.push({
                    id: ride.id.toString(),
                    name: ride.name,
                    waitTime: ride.wait_time || 0,
                    status: ride.is_open ? 'operating' : 'closed',
                    lastUpdate: ride.last_updated
                });
            });
        }

        return {
            parkId: parkId,
            parkName: `Park ${parkId}`,
            timestamp: new Date().toISOString(),
            rides: rides,
            source: 'Queue Times API'
        };
    } catch (error) {
        console.error('Error fetching real wait times:', error);
        return null;
    }
}

export const handler = async (event, context) => {
    // Enable CORS
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
            },
            body: ''
        };
    }

    try {
        console.log('Starting scheduled monitoring for all users...');

        // Get all active alerts from Supabase
        const { data: alerts, error: alertsError } = await supabase.from('user_alerts').select('*').eq('is_active', true);

        if (alertsError) {
            console.error('Error fetching alerts:', alertsError);
            throw new Error('Failed to fetch user alerts');
        }

        if (!alerts || alerts.length === 0) {
            console.log('No active alerts found');
            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    success: true,
                    message: 'No active alerts to monitor',
                    alertsChecked: 0,
                    notificationsSent: 0
                })
            };
        }

        console.log(`Found ${alerts.length} active alerts to monitor`);

        // Group alerts by park for efficient API calls
        const alertsByPark = {};
        alerts.forEach((alert) => {
            if (!alertsByPark[alert.park_id]) {
                alertsByPark[alert.park_id] = [];
            }
            alertsByPark[alert.park_id].push(alert);
        });

        const parkIds = Object.keys(alertsByPark);
        console.log(`Monitoring ${parkIds.length} parks: ${parkIds.join(', ')}`);

        let totalNotificationsSent = 0;
        const results = [];

        // Process each park
        for (const parkId of parkIds) {
            try {
                console.log(`Fetching wait times for park ${parkId}...`);
                const parkData = await fetchRealWaitTimes(parkId);

                if (!parkData || !parkData.rides) {
                    console.log(`No ride data for park ${parkId}`);
                    continue;
                }

                const parkAlerts = alertsByPark[parkId];
                console.log(`Checking ${parkAlerts.length} alerts for park ${parkId}`);

                // Check each alert against current wait times
                for (const alert of parkAlerts) {
                    const ride = parkData.rides.find((r) => r.id === alert.ride_id);

                    if (!ride) {
                        console.log(`Ride ${alert.ride_id} not found in park ${parkId}`);
                        continue;
                    }

                    // Check if wait time meets threshold and ride is operating
                    if (ride.status === 'operating' && ride.waitTime <= alert.wait_time_threshold) {
                        console.log(`Alert triggered: ${ride.name} has ${ride.waitTime} min wait (threshold: ${alert.wait_time_threshold})`);

                        // Check if we've already sent a notification recently (prevent spam)
                        const recentNotification = await supabase
                            .from('notification_logs')
                            .select('id')
                            .eq('device_token', alert.device_token)
                            .eq('ride_name', ride.name)
                            .gte('sent_at', new Date(Date.now() - 30 * 60 * 1000).toISOString()) // 30 minutes ago
                            .limit(1);

                        if (recentNotification.data && recentNotification.data.length > 0) {
                            console.log(`Skipping notification - already sent recently for ${ride.name}`);
                            continue;
                        }

                        // Send notification
                        try {
                            const notification = new apn.Notification();
                            notification.topic = process.env.APNS_BUNDLE_ID || 'com.confettisoftware.LineWatch';
                            notification.alert = {
                                title: '🎢 Ride Alert!',
                                body: `${ride.name} has a ${ride.waitTime}-minute wait!`
                            };
                            notification.badge = 1;
                            notification.sound = 'default';
                            notification.payload = {
                                rideName: ride.name,
                                parkName: alert.park_name,
                                waitTime: ride.waitTime,
                                threshold: alert.wait_time_threshold,
                                timestamp: new Date().toISOString()
                            };

                            const provider = createAPNProvider();
                            const result = await provider.send(notification, alert.device_token);

                            if (result.sent && result.sent.length > 0) {
                                console.log(`✅ Notification sent successfully for ${ride.name}`);
                                totalNotificationsSent++;

                                // Log the notification
                                await supabase.from('notification_logs').insert({
                                    device_token: alert.device_token,
                                    ride_name: ride.name,
                                    park_name: alert.park_name,
                                    wait_time: ride.waitTime,
                                    threshold: alert.wait_time_threshold,
                                    success: true
                                });

                                // Update last triggered time
                                await supabase.from('user_alerts').update({ last_triggered: new Date().toISOString() }).eq('id', alert.id);

                                results.push({
                                    rideName: ride.name,
                                    parkName: alert.park_name,
                                    waitTime: ride.waitTime,
                                    threshold: alert.wait_time_threshold,
                                    success: true
                                });
                            } else {
                                console.log(`❌ Failed to send notification for ${ride.name}`);
                                results.push({
                                    rideName: ride.name,
                                    parkName: alert.park_name,
                                    waitTime: ride.waitTime,
                                    threshold: alert.wait_time_threshold,
                                    success: false,
                                    error: 'APNs delivery failed'
                                });
                            }
                        } catch (error) {
                            console.error(`Error sending notification for ${ride.name}:`, error);

                            // Log the failed notification
                            await supabase.from('notification_logs').insert({
                                device_token: alert.device_token,
                                ride_name: ride.name,
                                park_name: alert.park_name,
                                wait_time: ride.waitTime,
                                threshold: alert.wait_time_threshold,
                                success: false,
                                error_message: error.message
                            });

                            results.push({
                                rideName: ride.name,
                                parkName: alert.park_name,
                                waitTime: ride.waitTime,
                                threshold: alert.wait_time_threshold,
                                success: false,
                                error: error.message
                            });
                        }
                    }
                }
            } catch (error) {
                console.error(`Error processing park ${parkId}:`, error);
                results.push({
                    parkId: parkId,
                    success: false,
                    error: error.message
                });
            }
        }

        console.log(`Monitoring complete: ${totalNotificationsSent} notifications sent`);

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: true,
                message: `Monitoring complete for ${alerts.length} alerts`,
                alertsChecked: alerts.length,
                notificationsSent: totalNotificationsSent,
                parksMonitored: parkIds.length,
                results: results
            })
        };
    } catch (error) {
        console.error('Error in monitor-wait-times:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: false,
                error: 'Failed to monitor wait times',
                message: error.message
            })
        };
    }
};
