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
        const { deviceToken, title, message, rideName, waitTime } = body;

        // Validate required fields
        if (!deviceToken || !title || !message) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    error: 'Missing required fields: deviceToken, title, message'
                })
            };
        }

        // For now, simulate successful notification
        // TODO: Implement actual APNs push notification
        console.log('Simulated notification:', {
            deviceToken: deviceToken.substring(0, 20) + '...',
            title,
            message,
            rideName: rideName || 'Unknown Ride',
            waitTime: waitTime || 0
        });

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                success: true,
                message: 'Notification sent successfully (simulated)',
                sent: 1,
                failed: 0,
                note: 'APNs integration temporarily disabled for testing'
            })
        };
    } catch (error) {
        console.error('Error in send-notification:', error);

        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                error: 'Internal server error',
                message: error.message
            })
        };
    }
};

module.exports = { handler };
