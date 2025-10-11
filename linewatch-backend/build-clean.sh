#!/bin/bash

echo "🧹 Cleaning and preparing for deployment..."

# Clean everything
rm -rf node_modules package-lock.json .netlify

# Reinstall dependencies
echo "📦 Installing dependencies..."
npm install

# Verify functions
echo "🔍 Verifying functions..."
node verify-functions.js

echo "✅ Build preparation complete!"
echo "Functions ready for deployment:"
ls -la netlify/functions/
