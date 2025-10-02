const { Handler } = require('@netlify/functions');

const handler = async (event, context) => {
    // Handle CORS preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: ''
        };
    }

    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parse request body
        const body = JSON.parse(event.body || '{}');
        const { deviceToken, preferences } = body;

        // Validate required fields
        if (!deviceToken || !preferences || !Array.isArray(preferences)) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    error: 'Missing required fields: deviceToken, preferences'
                })
            };
        }

        // Fetch current wait times
        const waitTimesResponse = await fetch(`${process.env.URL || 'https://linewatch-backend.netlify.app'}/api/fetch-wait-times`);
        const waitTimesData = await waitTimesResponse.json();

        if (!waitTimesData.success) {
            throw new Error('Failed to fetch wait times');
        }

        const notifications = [];
        const { rides } = waitTimesData.data;

        // Check each user preference against current wait times
        for (const preference of preferences) {
            const { rideId, maxWaitTime } = preference;

            // Find the ride in current wait times
            const ride = rides.find((r) => r.id === rideId);
            if (!ride) continue;

            // Check if wait time is below threshold
            if (ride.waitTime <= maxWaitTime) {
                notifications.push({
                    deviceToken,
                    title: '🎢 Ride Alert!',
                    message: `${ride.name} has a ${ride.waitTime}-minute wait!`,
                    rideName: ride.name,
                    waitTime: ride.waitTime,
                    maxWaitTime
                });
            }
        }

        // Send notifications for rides that meet criteria
        const results = [];
        for (const notification of notifications) {
            try {
                const sendResponse = await fetch(`${process.env.URL || 'https://linewatch-backend.netlify.app'}/api/send-notification`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(notification)
                });

                const sendResult = await sendResponse.json();
                results.push({
                    rideName: notification.rideName,
                    waitTime: notification.waitTime,
                    success: sendResult.success,
                    message: sendResult.message
                });
            } catch (error) {
                results.push({
                    rideName: notification.rideName,
                    waitTime: notification.waitTime,
                    success: false,
                    error: error.message
                });
            }
        }

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                success: true,
                message: `Checked ${preferences.length} preferences, sent ${notifications.length} notifications`,
                notificationsSent: notifications.length,
                results
            })
        };
    } catch (error) {
        console.error('Error monitoring wait times:', error);

        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                success: false,
                error: 'Failed to monitor wait times',
                message: error.message
            })
        };
    }
};

module.exports = { handler };
