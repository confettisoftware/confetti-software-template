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
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
            },
            body: ''
        };
    }

    try {
        console.log('Testing Supabase connection...');
        
        // Test basic connection by checking if tables exist
        const { data: alerts, error: alertsError } = await supabase
            .from('user_alerts')
            .select('count')
            .limit(1);

        if (alertsError) {
            console.error('Supabase connection error:', alertsError);
            return {
                statusCode: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    success: false,
                    error: 'Supabase connection failed',
                    details: alertsError.message
                })
            };
        }

        console.log('Supabase connection successful!');

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: true,
                message: 'Supabase connection successful!',
                supabaseUrl: supabaseUrl,
                keyExists: !!supabaseKey,
                timestamp: new Date().toISOString()
            })
        };
    } catch (error) {
        console.error('Test function error:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: false,
                error: 'Test function failed',
                details: error.message
            })
        };
    }
};
