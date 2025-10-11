// Verify all functions are present and valid
import fs from 'fs';
import path from 'path';

const functionsDir = './netlify/functions';
const expectedFunctions = [
  'debug-env.js',
  'fetch-wait-times.js',
  'manage-alerts.js',
  'monitor-wait-times.js',
  'register-device.js',
  'scheduled-monitor.js',
  'send-notification.js',
  'setup-database.js',
  'test-db.js',
  'test-notification.js',
  'test-supabase.js'
];

console.log('🔍 Verifying functions...');

let allPresent = true;
expectedFunctions.forEach(func => {
  const filePath = path.join(functionsDir, func);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${func}`);
  } else {
    console.log(`❌ ${func} - MISSING`);
    allPresent = false;
  }
});

if (allPresent) {
  console.log('\n🎉 All functions present and ready for deployment!');
  process.exit(0);
} else {
  console.log('\n❌ Some functions are missing!');
  process.exit(1);
}
