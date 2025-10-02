const { Handler } = require('@netlify/functions');

const handler = async (event, context) => {
    // Handle CORS preflight requests
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
        const { parkId, rideIds } = event.queryStringParameters || {};

        // Disney World Magic Kingdom park ID (example)
        const defaultParkId = parkId || '75ea578a-adc8-4116-a54d-dccb60765ef9';
        
        // Default popular rides if none specified
        const defaultRideIds = rideIds ? rideIds.split(',') : [
            '75ea578a-adc8-4116-a54d-dccb60765ef9', // Space Mountain
            '75ea578a-adc8-4116-a54d-dccb60765ef9', // Seven Dwarfs Mine Train
            '75ea578a-adc8-4116-a54d-dccb60765ef9'  // Big Thunder Mountain
        ];

        // For now, return mock data - we'll replace this with real Queue Times API calls
        const mockWaitTimes = {
            parkId: defaultParkId,
            parkName: 'Magic Kingdom',
            timestamp: new Date().toISOString(),
            rides: [
                {
                    id: 'space-mountain',
                    name: 'Space Mountain',
                    waitTime: Math.floor(Math.random() * 60) + 15, // 15-75 minutes
                    status: 'operating',
                    lastUpdate: new Date().toISOString()
                },
                {
                    id: 'seven-dwarfs-mine-train',
                    name: 'Seven Dwarfs Mine Train',
                    waitTime: Math.floor(Math.random() * 90) + 30, // 30-120 minutes
                    status: 'operating',
                    lastUpdate: new Date().toISOString()
                },
                {
                    id: 'big-thunder-mountain',
                    name: 'Big Thunder Mountain Railroad',
                    waitTime: Math.floor(Math.random() * 45) + 10, // 10-55 minutes
                    status: 'operating',
                    lastUpdate: new Date().toISOString()
                },
                {
                    id: 'haunted-mansion',
                    name: 'Haunted Mansion',
                    waitTime: Math.floor(Math.random() * 40) + 5, // 5-45 minutes
                    status: 'operating',
                    lastUpdate: new Date().toISOString()
                },
                {
                    id: 'pirates-caribbean',
                    name: 'Pirates of the Caribbean',
                    waitTime: Math.floor(Math.random() * 25) + 5, // 5-30 minutes
                    status: 'operating',
                    lastUpdate: new Date().toISOString()
                }
            ]
        };

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: true,
                data: mockWaitTimes,
                note: 'Using mock data - Queue Times API integration pending'
            })
        };

    } catch (error) {
        console.error('Error fetching wait times:', error);
        
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: false,
                error: 'Failed to fetch wait times',
                message: error.message
            })
        };
    }
};

module.exports = { handler };
