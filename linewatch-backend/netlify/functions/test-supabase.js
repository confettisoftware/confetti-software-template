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
        console.log('Supabase URL:', supabaseUrl);
        console.log('Supabase Key exists:', !!supabaseKey);
        console.log('Supabase Key starts with:', supabaseKey ? supabaseKey.substring(0, 20) + '...' : 'Not set');

        // Test basic connection by trying to list tables
        const { data, error } = await supabase.from('information_schema.tables').select('table_name').eq('table_schema', 'public').limit(5);

        if (error) {
            console.error('Supabase connection error:', error);
            return {
                statusCode: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    success: false,
                    error: 'Supabase connection failed',
                    details: error.message
                })
            };
        }

        console.log('Supabase connection successful!');
        console.log('Available tables:', data);

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
                keyPrefix: supabaseKey ? supabaseKey.substring(0, 20) + '...' : 'Not set',
                availableTables: data?.map((t) => t.table_name) || [],
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
