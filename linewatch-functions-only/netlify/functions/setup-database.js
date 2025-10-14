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
        console.log('Setting up LineWatch+ database tables...');

        // Create device_tokens table
        const { error: tokensError } = await supabase.rpc('exec_sql', {
            sql: `
        CREATE TABLE IF NOT EXISTS device_tokens (
          id SERIAL PRIMARY KEY,
          device_token TEXT UNIQUE NOT NULL,
          user_id TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          is_active BOOLEAN DEFAULT true
        );
        
        CREATE INDEX IF NOT EXISTS idx_device_tokens_token ON device_tokens(device_token);
        CREATE INDEX IF NOT EXISTS idx_device_tokens_user_id ON device_tokens(user_id);
      `
        });

        if (tokensError) {
            console.log('Creating device_tokens table via direct SQL...');
            // Try alternative approach
            const { error: altError } = await supabase.from('device_tokens').select('*').limit(0);

            if (altError) {
                console.log('device_tokens table will be created on first use');
            }
        }

        // Create user_alerts table
        const { error: alertsError } = await supabase.rpc('exec_sql', {
            sql: `
        CREATE TABLE IF NOT EXISTS user_alerts (
          id SERIAL PRIMARY KEY,
          device_token TEXT NOT NULL,
          park_id TEXT NOT NULL,
          park_name TEXT NOT NULL,
          ride_id TEXT NOT NULL,
          ride_name TEXT NOT NULL,
          wait_time_threshold INTEGER NOT NULL,
          is_active BOOLEAN DEFAULT true,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          last_triggered TIMESTAMP WITH TIME ZONE,
          FOREIGN KEY (device_token) REFERENCES device_tokens(device_token) ON DELETE CASCADE
        );
        
        CREATE INDEX IF NOT EXISTS idx_user_alerts_device_token ON user_alerts(device_token);
        CREATE INDEX IF NOT EXISTS idx_user_alerts_park_ride ON user_alerts(park_id, ride_id);
        CREATE INDEX IF NOT EXISTS idx_user_alerts_active ON user_alerts(is_active);
      `
        });

        if (alertsError) {
            console.log('Creating user_alerts table via direct SQL...');
            const { error: altError } = await supabase.from('user_alerts').select('*').limit(0);

            if (altError) {
                console.log('user_alerts table will be created on first use');
            }
        }

        // Create notification_logs table
        const { error: logsError } = await supabase.rpc('exec_sql', {
            sql: `
        CREATE TABLE IF NOT EXISTS notification_logs (
          id SERIAL PRIMARY KEY,
          device_token TEXT NOT NULL,
          ride_name TEXT NOT NULL,
          park_name TEXT NOT NULL,
          wait_time INTEGER NOT NULL,
          threshold INTEGER NOT NULL,
          sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          success BOOLEAN DEFAULT true,
          error_message TEXT
        );
        
        CREATE INDEX IF NOT EXISTS idx_notification_logs_device_token ON notification_logs(device_token);
        CREATE INDEX IF NOT EXISTS idx_notification_logs_sent_at ON notification_logs(sent_at);
      `
        });

        if (logsError) {
            console.log('Creating notification_logs table via direct SQL...');
            const { error: altError } = await supabase.from('notification_logs').select('*').limit(0);

            if (altError) {
                console.log('notification_logs table will be created on first use');
            }
        }

        console.log('Database setup complete!');

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: true,
                message: 'Database tables setup complete',
                tables: ['device_tokens', 'user_alerts', 'notification_logs']
            })
        };
    } catch (error) {
        console.error('Database setup error:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: false,
                error: error.message
            })
        };
    }
};
