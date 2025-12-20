# Google Apps Script Integration for Newsletter Signup

This document explains how to set up the Google Apps Script integration that handles newsletter signups and stores them in a Google Sheet.

## Overview

The newsletter component sends email addresses to a Google Apps Script Web App endpoint, which then appends them to a Google Sheet. This provides a simple, serverless solution for collecting newsletter subscriptions without requiring a backend.

## Setup Instructions

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name the first sheet tab `Sheet1` (or update the `SHEET_NAME` constant in the script)
4. Add headers in row 1 (optional, but recommended):
   - Column A: `Date`
   - Column B: `Email`

### 2. Create the Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any default code in the editor
3. Paste the following script:

```javascript
const SHEET_NAME = 'Sheet1'; // Name of your sheet tab

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const params = e.parameter;
    
    const email = params.email;
    const date = new Date();

    sheet.appendRow([date, email]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', email: email }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

### 3. Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "Newsletter signup handler" (optional)
   - **Execute as**: "Me" (your account)
   - **Who has access**: "Anyone" (important for public form submissions)
4. Click **Deploy**
5. **Copy the Web App URL** - you'll need this for the environment variable
6. Click **Authorize access** and grant the necessary permissions

### 4. Configure Environment Variable

Add the Web App URL to your `.env.local` file:

```bash
NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual ID from your deployment URL.

### 5. Test the Integration

1. Start your Next.js development server
2. Navigate to the newsletter section on your landing page
3. Submit a test email address
4. Check your Google Sheet - the email should appear with a timestamp

## How It Works

### Frontend (Newsletter Component)

The `Newsletter` component (`components/sections/newsletter.tsx`) sends a POST request using `FormData`:

- Uses `FormData` instead of JSON to avoid CORS preflight issues
- Sends email and timestamp as form parameters
- Uses `mode: 'no-cors'` to prevent CORS errors (note: this means we can't read the response status)
- Handles success/error states based on whether the request completes

### Backend (Google Apps Script)

The script handles incoming POST requests:

- Uses `LockService` to prevent concurrent write conflicts
- Extracts the email from form parameters
- Appends a new row with timestamp and email to the sheet
- Returns a JSON response (though frontend can't read it due to no-cors mode)

## Important Notes

- **CORS Handling**: The frontend uses `mode: 'no-cors'` which means we can't read the response. Success is assumed if the request doesn't throw an error.
- **Lock Service**: The script uses a lock to prevent race conditions when multiple requests arrive simultaneously.
- **Sheet Name**: Make sure the `SHEET_NAME` constant matches your actual sheet tab name.
- **Permissions**: The Web App must be deployed with "Anyone" access for public form submissions to work.
- **Security**: This is a public endpoint. Consider adding rate limiting or validation if needed.

## Troubleshooting

### Emails not appearing in sheet
- Verify the sheet tab name matches `SHEET_NAME`
- Check that the Web App is deployed with "Anyone" access
- Verify the environment variable is set correctly
- Check the Apps Script execution logs (View → Execution log)

### CORS errors
- Ensure `mode: 'no-cors'` is set in the fetch request
- Verify the Web App URL is correct

### Permission errors
- Re-authorize the script if permissions were revoked
- Ensure "Execute as" is set to "Me" and "Who has access" is "Anyone"
