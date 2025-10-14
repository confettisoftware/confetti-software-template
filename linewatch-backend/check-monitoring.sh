#!/bin/bash

# Check if automatic monitoring is working

echo "🔍 LineWatch+ Monitoring Status Check"
echo "======================================"
echo ""
echo "📅 Current time: $(date)"
echo ""
echo "⏰ Cron job schedule:"
crontab -l | grep linewatch
echo ""
echo "📊 Recent monitoring activity (last 15 lines):"
echo "--------------------------------------"
tail -15 /tmp/linewatch-monitor.log 2>/dev/null || echo "No logs yet. Waiting for first run..."
echo ""
echo "💡 The monitoring script runs every 5 minutes (00, 05, 10, 15, etc.)"
echo "💡 Watch the log file: tail -f /tmp/linewatch-monitor.log"

