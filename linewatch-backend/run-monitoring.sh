#!/bin/bash

# LineWatch+ Manual Monitoring Script
# This script can be run manually or set up as a cron job

# Add Node.js to PATH for cron
export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"

echo "🎢 Starting LineWatch+ monitoring..."
echo "Time: $(date)"

# Set environment variables from Netlify (copy from your Netlify dashboard)
export SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwYWN4c3Bmb3FvY3FuamNyaHduIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDEwNDQ1MiwiZXhwIjoyMDc1NjgwNDUyfQ.rczA7rYQTpzRgFMxpRvOAozqFsvdCkoxX0w_j9LRB4I"
export APNS_KEY_P8="-----BEGIN PRIVATE KEY-----
MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgHxCLQyCYpwCxEworb1p8poPYJD0dPx1ZhP+4vgOXVyegCgYIKoZIzj0DAQehRANCAASLaVekU03AVmY9daMQUcsczAcDokJaBRgfKqKg2DzeVyjoxgyyyW4iVxwHGj0pvRcTumbi2w94/Rwxn9a8oZws
-----END PRIVATE KEY-----"
export APNS_KEY_ID="X5X59GZ6M8"
export APNS_TEAM_ID="62W7SG8R4S"
export APNS_BUNDLE_ID="com.confettisoftware.LineWatch"
export NODE_ENV="development"

# Run the monitoring script
node manual-monitor.js

echo "✅ Monitoring complete at $(date)"
