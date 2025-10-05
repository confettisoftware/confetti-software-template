const { Handler } = require('@netlify/functions');
const apn = require('apn');

// Initialize APN provider
const createAPNProvider = () => {
    // Debug environment variables
    console.log('APNS_KEY_ID:', process.env.APNS_KEY_ID ? 'Set' : 'Not set');
    console.log('APNS_TEAM_ID:', process.env.APNS_TEAM_ID ? 'Set' : 'Not set');
    console.log('APNS_BUNDLE_ID:', process.env.APNS_BUNDLE_ID ? 'Set' : 'Not set');
    console.log('APNS_KEY_P8 length:', process.env.APNS_KEY_P8 ? process.env.APNS_KEY_P8.length : 'Not set');
    console.log('NODE_ENV:', process.env.NODE_ENV);

    // Ensure the key is properly formatted
    let key = process.env.APNS_KEY_P8;
    if (!key.includes('BEGIN PRIVATE KEY')) {
        key = `-----BEGIN PRIVATE KEY-----\n${key}\n-----END PRIVATE KEY-----`;
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

        // Create notification
        const notification = new apn.Notification();
        notification.topic = process.env.APNS_BUNDLE_ID || 'com.confettisoftware.LineWatch';
        notification.alert = {
            title: title,
            body: message
        };
        notification.badge = 1;
        notification.sound = 'default';

        // Add custom payload for LineWatch
        notification.payload = {
            rideName: rideName || 'Unknown Ride',
            waitTime: waitTime || 0,
            timestamp: new Date().toISOString()
        };

        // Send notification
        const provider = createAPNProvider();
        const result = await provider.send(notification, deviceToken);

        console.log('Push notification result:', result);

        // Check if notification was sent successfully
        if (result.sent && result.sent.length > 0) {
            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    success: true,
                    message: 'Notification sent successfully',
                    sent: result.sent.length,
                    failed: result.failed ? result.failed.length : 0
                })
            };
        } else {
            return {
                statusCode: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    error: 'Failed to send notification',
                    details: result.failed || 'Unknown error'
                })
            };
        }
    } catch (error) {
        console.error('Error sending push notification:', error);

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
