# LineWatch Backend

Serverless backend service for LineWatch+ ride wait time push notifications, built with Netlify Functions and Apple Push Notification service (APNs).

## Features

- ✅ **APNs Push Notifications** - Send ride wait time alerts to iOS devices
- ✅ **Serverless Architecture** - Deployed on Netlify Functions
- ✅ **CORS Support** - Ready for iOS app integration
- ✅ **Test Endpoint** - Easy testing with device tokens

## Setup

### 1. Environment Variables

Configure these environment variables in your Netlify dashboard:

```
APNS_KEY_ID=your_10_character_key_id
APNS_TEAM_ID=your_10_character_team_id
APNS_BUNDLE_ID=com.confettisoftware.LineWatch+
APNS_KEY_P8=your_p8_key_content
NODE_ENV=production
```

### 2. APNs Key Setup

1. Download your `.p8` file from Apple Developer Portal
2. Copy the entire content of the `.p8` file (including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`)
3. Paste it as the `APNS_KEY_P8` environment variable

### 3. Deployment

1. Connect this repository to Netlify
2. Set build command to: `echo "No build required"`
3. Set publish directory to: `.`
4. Add the environment variables above

## API Endpoints

### Send Notification
**POST** `/api/send-notification`

Send a push notification to a device.

**Request Body:**
```json
{
  "deviceToken": "a1b2c3d4e5f6...",
  "title": "Ride Alert!",
  "message": "Space Mountain has a 15-minute wait!",
  "rideName": "Space Mountain",
  "waitTime": 15
}
```

**Response:**
```json
{
  "success": true,
  "message": "Notification sent successfully",
  "sent": 1,
  "failed": 0
}
```

### Test Notification
**POST** `/api/test-notification`

Send a test notification to verify your setup.

**Request Body:**
```json
{
  "deviceToken": "a1b2c3d4e5f6..."
}
```

## Usage from iOS App

```swift
// Example usage in your iOS app
func sendTestNotification() {
    guard let url = URL(string: "https://your-netlify-site.netlify.app/api/test-notification") else { return }
    
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    
    let body = [
        "deviceToken": pushService.deviceToken ?? ""
    ]
    
    request.httpBody = try? JSONSerialization.data(withJSONObject: body)
    
    URLSession.shared.dataTask(with: request) { data, response, error in
        if let data = data {
            print("Test notification response:", String(data: data, encoding: .utf8) ?? "")
        }
    }.resume()
}
```

## Testing

1. Run your LineWatch+ iOS app
2. Copy the device token from the console
3. Use the test endpoint to send a notification:

```bash
curl -X POST https://your-netlify-site.netlify.app/api/test-notification \
  -H "Content-Type: application/json" \
  -d '{"deviceToken": "your_device_token_here"}'
```

## Development

```bash
# Install dependencies
npm install

# Run locally
npx netlify dev
```

## Troubleshooting

- **Invalid Key**: Make sure your `.p8` key content includes the full PEM format
- **Bundle ID Mismatch**: Verify `APNS_BUNDLE_ID` matches your iOS app's bundle identifier
- **Device Token**: Ensure you're using the correct device token from your iOS app
- **Environment**: Set `NODE_ENV=production` for production APNs servers

## Security

- Keep your `.p8` key secure and never commit it to version control
- Use environment variables for all sensitive credentials
- The CORS policy allows all origins - restrict this in production if needed
