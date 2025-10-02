const { Handler } = require('@netlify/functions');

const handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const envVars = {
      APNS_KEY_ID: process.env.APNS_KEY_ID ? 'Set (' + process.env.APNS_KEY_ID.length + ' chars)' : 'Not set',
      APNS_TEAM_ID: process.env.APNS_TEAM_ID ? 'Set (' + process.env.APNS_TEAM_ID.length + ' chars)' : 'Not set',
      APNS_BUNDLE_ID: process.env.APNS_BUNDLE_ID ? 'Set (' + process.env.APNS_BUNDLE_ID + ')' : 'Not set',
      APNS_KEY_P8: process.env.APNS_KEY_P8 ? 'Set (' + process.env.APNS_KEY_P8.length + ' chars)' : 'Not set',
      NODE_ENV: process.env.NODE_ENV || 'Not set',
      KEY_STARTS_WITH: process.env.APNS_KEY_P8 ? process.env.APNS_KEY_P8.substring(0, 50) + '...' : 'N/A'
    };

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(envVars),
    };

  } catch (error) {
    console.error('Error in debug-env:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        error: 'Debug failed',
        message: error.message 
      }),
    };
  }
};

module.exports = { handler };
