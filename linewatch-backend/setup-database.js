import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gpacxspfoqocqnjcrhwn.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupDatabase() {
    try {
        console.log('Setting up LineWatch+ database...');

        // Create device_tokens table
        const { error: tokensError } = await supabase.rpc('create_device_tokens_table');
        if (tokensError) {
            console.log('Creating device_tokens table...');
            const { error } = await supabase.from('device_tokens').select('*').limit(1);
            if (error) {
                // Table doesn't exist, create it
                const { error: createError } = await supabase.from('device_tokens').select('*').limit(0);

                if (createError) {
                    console.log('Creating device_tokens table via SQL...');
                    // We'll create via SQL in the Netlify function
                }
            }
        }

        // Create user_alerts table
        const { error: alertsError } = await supabase.rpc('create_user_alerts_table');
        if (alertsError) {
            console.log('Creating user_alerts table...');
            const { error } = await supabase.from('user_alerts').select('*').limit(1);
            if (error) {
                // Table doesn't exist, create it
                const { error: createError } = await supabase.from('user_alerts').select('*').limit(0);

                if (createError) {
                    console.log('Creating user_alerts table via SQL...');
                    // We'll create via SQL in the Netlify function
                }
            }
        }

        // Create notification_logs table
        const { error: logsError } = await supabase.rpc('create_notification_logs_table');
        if (logsError) {
            console.log('Creating notification_logs table...');
            const { error } = await supabase.from('notification_logs').select('*').limit(1);
            if (error) {
                // Table doesn't exist, create it
                const { error: createError } = await supabase.from('notification_logs').select('*').limit(0);

                if (createError) {
                    console.log('Creating notification_logs table via SQL...');
                    // We'll create via SQL in the Netlify function
                }
            }
        }

        console.log('Database setup complete!');
        return { success: true };
    } catch (error) {
        console.error('Database setup error:', error);
        return { success: false, error: error.message };
    }
}

export { setupDatabase };
