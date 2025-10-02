const { Handler } = require('@netlify/functions');

// Real Queue Times API endpoints
const QUEUE_TIMES_API = {
    parks: 'https://queue-times.com/parks.json',
    waitTimes: (parkId) => `https://queue-times.com/parks/${parkId}/queue_times.json`
};

// Function to fetch real data from Queue Times API
async function fetchRealWaitTimes(parkId) {
    try {
        const response = await fetch(QUEUE_TIMES_API.waitTimes(parkId));
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Transform Queue Times format to our format
        const rides = [];
        if (data.lands) {
            data.lands.forEach(land => {
                if (land.rides) {
                    land.rides.forEach(ride => {
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

// Function to get list of available parks
async function fetchAvailableParks() {
    try {
        const response = await fetch(QUEUE_TIMES_API.parks);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching parks:', error);
        return null;
    }
}

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
        const { parkId, rideIds, useRealApi } = event.queryStringParameters || {};

        // If requesting parks list
        if (event.path === '/api/fetch-wait-times/parks') {
            const parks = await fetchAvailableParks();
            if (parks) {
                return {
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        success: true,
                        message: 'Available parks fetched successfully',
                        data: parks,
                        attribution: 'Powered by Queue-Times.com'
                    })
                };
            }
        }

        // Try to use real API if requested and parkId is provided
        if (useRealApi === 'true' && parkId) {
            const realData = await fetchRealWaitTimes(parkId);
            if (realData) {
                // Filter rides if specific rideIds requested
                if (rideIds) {
                    const requestedRideIds = rideIds.split(',');
                    realData.rides = realData.rides.filter(ride => requestedRideIds.includes(ride.id));
                }

                return {
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        success: true,
                        data: realData,
                        attribution: 'Powered by Queue-Times.com'
                    })
                };
            }
        }

        // Fallback to mock data
        const mockWaitTimes = {
            parkId: parkId || 'mock-park',
            parkName: 'Magic Kingdom (Mock Data)',
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
            ],
            source: 'Mock data'
        };

        // Filter rides if specific rideIds requested
        if (rideIds) {
            const requestedRideIds = rideIds.split(',');
            mockWaitTimes.rides = mockWaitTimes.rides.filter(ride => requestedRideIds.includes(ride.id));
        }

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: true,
                data: mockWaitTimes,
                note: 'Using mock data - add ?useRealApi=true&parkId=<id> for real data',
                attribution: 'Powered by Queue-Times.com'
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
