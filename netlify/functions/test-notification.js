const { Handler } = require('@netlify/functions');

const handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
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
        },
        body: JSON.stringify({ error: 'deviceToken is required' }),
      };
    }

    // Import the send-notification function
    const { handler: sendNotification } = require('./send-notification.js');
    
    // Create a test event
    const testEvent = {
      httpMethod: 'POST',
      body: JSON.stringify({
        deviceToken: deviceToken,
        title: 'LineWatch Test',
        message: 'This is a test notification from LineWatch! 🎢',
        rideName: 'Test Ride',
        waitTime: 15
      })
    };

    // Call the send-notification function
    const result = await sendNotification(testEvent, context);
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: true,
        message: 'Test notification sent',
        result: JSON.parse(result.body)
      }),
    };

  } catch (error) {
    console.error('Error in test notification:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        error: 'Test failed',
        message: error.message 
      }),
    };
  }
};

module.exports = { handler };
