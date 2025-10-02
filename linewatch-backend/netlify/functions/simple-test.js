const { Handler } = require('@netlify/functions');

const handler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            success: true,
            message: 'Simple test function works!',
            timestamp: new Date().toISOString()
        })
    };
};

module.exports = { handler };
