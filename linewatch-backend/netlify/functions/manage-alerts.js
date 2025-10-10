import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gpacxspfoqocqnjcrhwn.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export const handler = async (event, context) => {
    // Enable CORS
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
            },
            body: ''
        };
    }

    try {
        const body = JSON.parse(event.body || '{}');
        const { deviceToken } = body;

        if (!deviceToken) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ error: 'Device token is required' })
            };
        }

        if (event.httpMethod === 'GET') {
            // Get all alerts for a device
            const { data, error } = await supabase
                .from('user_alerts')
                .select('*')
                .eq('device_token', deviceToken)
                .eq('is_active', true)
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching alerts:', error);
                return {
                    statusCode: 500,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        success: false,
                        error: 'Failed to fetch alerts'
                    })
                };
            }

            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    success: true,
                    alerts: data || []
                })
            };
        }

        if (event.httpMethod === 'POST') {
            // Create new alert
            const { parkId, parkName, rideId, rideName, waitTimeThreshold } = body;

            if (!parkId || !parkName || !rideId || !rideName || !waitTimeThreshold) {
                return {
                    statusCode: 400,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        error: 'Missing required fields: parkId, parkName, rideId, rideName, waitTimeThreshold'
                    })
                };
            }

            // Check if alert already exists
            const { data: existing } = await supabase
                .from('user_alerts')
                .select('id')
                .eq('device_token', deviceToken)
                .eq('park_id', parkId)
                .eq('ride_id', rideId)
                .eq('is_active', true);

            if (existing && existing.length > 0) {
                return {
                    statusCode: 409,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        success: false,
                        error: 'Alert already exists for this ride'
                    })
                };
            }

            const { data, error } = await supabase
                .from('user_alerts')
                .insert({
                    device_token: deviceToken,
                    park_id: parkId,
                    park_name: parkName,
                    ride_id: rideId,
                    ride_name: rideName,
                    wait_time_threshold: parseInt(waitTimeThreshold),
                    is_active: true
                })
                .select();

            if (error) {
                console.error('Error creating alert:', error);
                return {
                    statusCode: 500,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        success: false,
                        error: 'Failed to create alert'
                    })
                };
            }

            return {
                statusCode: 201,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    success: true,
                    message: 'Alert created successfully',
                    alert: data[0]
                })
            };
        }

        if (event.httpMethod === 'DELETE') {
            // Delete alert
            const { alertId } = body;

            if (!alertId) {
                return {
                    statusCode: 400,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ error: 'Alert ID is required' })
                };
            }

            const { error } = await supabase.from('user_alerts').update({ is_active: false }).eq('id', alertId).eq('device_token', deviceToken);

            if (error) {
                console.error('Error deleting alert:', error);
                return {
                    statusCode: 500,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        success: false,
                        error: 'Failed to delete alert'
                    })
                };
            }

            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    success: true,
                    message: 'Alert deleted successfully'
                })
            };
        }

        return {
            statusCode: 405,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    } catch (error) {
        console.error('Error in manage-alerts:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: false,
                error: 'Internal server error'
            })
        };
    }
};
