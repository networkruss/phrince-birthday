# Google Sheets Database Setup (5 Minutes)

Follow these easy steps to connect Phrince's RSVP form to your Google Sheet.

## 1. Create your Google Sheet
1. Open [Google Sheets](https://sheets.new) and create a new blank sheet.
2. In the first row, add your column headers exactly like this:
   - `Timestamp`
   - `Name`
   - `Attendees`
   - `Message`

## 2. Add the Apps Script
1. In your Google Sheet, go to **Extensions** > **Apps Script**.
2. Delete any existing code and paste the following:

```javascript
// Google Apps Script for Phrince's RSVP (v2 - with Messages)
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append the row: [Timestamp, Name, Attendees, Message]
    sheet.appendRow([
      new Date(), 
      data.name, 
      data.attendees,
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "message": error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. Deploy as a Web App (IMPORTANT)
1. Click the blue **Deploy** button (top right) > **New deployment**.
2. Select type: **Web app**.
3. **Execute as**: Me.
4. **Who has access**: Anyone. (This is essential so the website can talk to the sheet).
5. Click **Deploy**. You may need to "Authorize Access".
6. **Copy the Web App URL** (e.g., `https://script.google.com/macros/s/ABC.../exec`).

## 4. Plug it into your Website
1. Open the file `.env.local` in this project.
2. Paste your URL like this:
   ```env
   NEXT_PUBLIC_RSVP_SCRIPT_URL=YOUR_COPIED_URL_HERE
   ```
3. Restart your development server (`npm run dev`).

---
> [!TIP]
> Make sure "Who has access" is set to "Anyone", otherwise the form will fail to submit.
