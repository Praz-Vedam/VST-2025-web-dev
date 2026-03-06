# Google Apps Script Setup Instructions

This guide will help you set up Google Sheets to automatically collect student submissions.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it something like "Student Submissions" or "Array Methods Practice Reports"
4. Keep this sheet open - you'll need it in the next steps

## Step 2: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** → **Apps Script**
2. A new tab will open with a code editor
3. Delete any existing code in the editor
4. Copy and paste the following code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Check if this student has already submitted (prevent duplicate submissions)
    var studentId = data.id || '';
    var studentName = data.name || '';
    
    if (studentId) {
      var lastRow = sheet.getLastRow();
      if (lastRow >= 11) {
        // Check all existing student IDs (column C, starting from row 11)
        var studentIdRange = sheet.getRange(11, 3, lastRow - 10, 1).getValues();
        for (var i = 0; i < studentIdRange.length; i++) {
          if (studentIdRange[i][0] === studentId) {
            return ContentService.createTextOutput('Error: Student ID "' + studentId + '" has already submitted. Only one submission per student is allowed.').setMimeType(ContentService.MimeType.TEXT);
          }
        }
      }
    }
    
    // Check if headers exist - if not, create statistics section and headers
    var headerRow = sheet.getRange(10, 1).getValue();
    if (headerRow !== 'Timestamp') {
      // Add statistics section at the top
      sheet.getRange(1, 1, 1, 2).merge();
      sheet.getRange(1, 1).setValue('📊 STATISTICS').setFontWeight('bold').setFontSize(12);
      sheet.getRange(1, 1).setBackground('#4285f4').setFontColor('#ffffff');
      
      sheet.getRange(2, 1).setValue('Total Students:');
      sheet.getRange(2, 2).setFormula('=COUNTA(B11:B)');
      sheet.getRange(2, 2).setFontWeight('bold');
      
      sheet.getRange(3, 1).setValue('Students with All Correct (10/10):');
      sheet.getRange(3, 2).setFormula('=COUNTIF(O11:O, "10/10")');
      sheet.getRange(3, 2).setFontWeight('bold').setFontColor('#0f9d58');
      
      sheet.getRange(4, 1).setValue('Students with Some Wrong:');
      sheet.getRange(4, 2).setFormula('=COUNTA(B11:B)-COUNTIF(O11:O, "10/10")');
      sheet.getRange(4, 2).setFontWeight('bold').setFontColor('#ea4335');
      
      sheet.getRange(5, 1).setValue('Percentage with Perfect Score:');
      sheet.getRange(5, 2).setFormula('=IF(COUNTA(B11:B)>0, ROUND((COUNTIF(O11:O, "10/10")/COUNTA(B11:B))*100, 1), 0) & "%"');
      sheet.getRange(5, 2).setFontWeight('bold').setFontSize(11);
      
      sheet.getRange(6, 1).setValue('Percentage with Some Wrong:');
      sheet.getRange(6, 2).setFormula('=IF(COUNTA(B11:B)>0, ROUND(((COUNTA(B11:B)-COUNTIF(O11:O, "10/10"))/COUNTA(B11:B))*100, 1), 0) & "%"');
      sheet.getRange(6, 2).setFontWeight('bold').setFontSize(11);
      
      // Add spacing
      sheet.getRange(7, 1).setValue('');
      sheet.getRange(8, 1).setValue('');
      
      // Add section header for submissions
      sheet.getRange(9, 1, 1, 15).merge();
      sheet.getRange(9, 1).setValue('📝 STUDENT SUBMISSIONS').setFontWeight('bold').setFontSize(12);
      sheet.getRange(9, 1).setBackground('#34a853').setFontColor('#ffffff');
      
      // Add column headers
      sheet.getRange(10, 1, 1, 15).setValues([[
        'Timestamp',
        'Student Name',
        'Student ID',
        'Problem 1 (forEach)',
        'Problem 2 (forEach)',
        'Problem 3 (forEach)',
        'Problem 4 (map)',
        'Problem 5 (map)',
        'Problem 6 (map)',
        'Problem 7 (filter)',
        'Problem 8 (filter)',
        'Problem 9 (filter)',
        'Problem 10 (reduce)',
        'Total Completed',
        'Total Correct'
      ]]);
      
      // Format header row
      var headerRange = sheet.getRange(10, 1, 1, 15);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#f1f3f4');
      headerRange.setBorder(true, true, true, true, true, true);
      
      // Freeze header rows
      sheet.setFrozenRows(10);
    }
    
    // Extract answer status for each problem
    var answers = data.answers || {};
    var problemStatus = {
      '1': answers['1'] ? (answers['1'].isCorrect ? '✓ Correct' : '✗ Incorrect') : 'Not attempted',
      '1b': answers['1b'] ? (answers['1b'].isCorrect ? '✓ Correct' : '✗ Incorrect') : 'Not attempted',
      '1c': answers['1c'] ? (answers['1c'].isCorrect ? '✓ Correct' : '✗ Incorrect') : 'Not attempted',
      '2': answers['2'] ? (answers['2'].isCorrect ? '✓ Correct' : '✗ Incorrect') : 'Not attempted',
      '2b': answers['2b'] ? (answers['2b'].isCorrect ? '✓ Correct' : '✗ Incorrect') : 'Not attempted',
      '2c': answers['2c'] ? (answers['2c'].isCorrect ? '✓ Correct' : '✗ Incorrect') : 'Not attempted',
      '3': answers['3'] ? (answers['3'].isCorrect ? '✓ Correct' : '✗ Incorrect') : 'Not attempted',
      '3b': answers['3b'] ? (answers['3b'].isCorrect ? '✓ Correct' : '✗ Incorrect') : 'Not attempted',
      '3c': answers['3c'] ? (answers['3c'].isCorrect ? '✓ Correct' : '✗ Incorrect') : 'Not attempted',
      '4': answers['4'] ? (answers['4'].isCorrect ? '✓ Correct' : '✗ Incorrect') : 'Not attempted'
    };
    
    // Count completed and correct answers
    var totalCompleted = 0;
    var totalCorrect = 0;
    for (var key in problemStatus) {
      if (problemStatus[key] !== 'Not attempted') {
        totalCompleted++;
        if (problemStatus[key].includes('✓')) {
          totalCorrect++;
        }
      }
    }
    
    // Add student submission row (starting from row 11, after headers)
    var lastRow = sheet.getLastRow();
    var nextRow = (lastRow < 10) ? 11 : lastRow + 1;
    var row = [
      new Date(),
      data.name || 'Unknown',
      data.id || 'Unknown',
      problemStatus['1'],
      problemStatus['1b'],
      problemStatus['1c'],
      problemStatus['2'],
      problemStatus['2b'],
      problemStatus['2c'],
      problemStatus['3'],
      problemStatus['3b'],
      problemStatus['3c'],
      problemStatus['4'],
      totalCompleted + '/10',
      totalCorrect + '/10'
    ];
    
    sheet.getRange(nextRow, 1, 1, 15).setValues([row]);
    
    // Format the new row
    var newRowRange = sheet.getRange(nextRow, 1, 1, 15);
    newRowRange.setBorder(true, false, false, false, false, false);
    
    // Highlight perfect scores
    if (totalCorrect === 10 && totalCompleted === 10) {
      newRowRange.setBackground('#e8f5e9');
    }
    
    return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return ContentService.createTextOutput('Error: ' + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Submit endpoint ready').setMimeType(ContentService.MimeType.TEXT);
}
```

5. Click **Save** (or press Ctrl+S / Cmd+S)
6. Give your project a name (e.g., "Student Submission Handler")

## Step 3: Deploy as Web App

1. Click on **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "Student submission handler" (optional)
   - **Execute as**: **Me** (your Google account)
   - **Who has access**: **Anyone** (this allows students to submit without signing in)
4. Click **Deploy**
5. You may be asked to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
6. Copy the **Web App URL** that appears (it will look like: `https://script.google.com/macros/s/...`)

## Step 4: Update Your HTML File

1. Open `index.html` in a text editor
2. Find this line in the JavaScript section:
   ```javascript
   var GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace `YOUR_GOOGLE_SCRIPT_URL_HERE` with the Web App URL you copied in Step 3
4. Save the file

## Step 5: Test the Setup

1. Open `index.html` in a web browser
2. Enter a test student name and ID
3. Complete at least one problem and click "Save"
4. Click "Submit All Answers"
5. Check your Google Sheet - you should see a new row with the submission data

## Troubleshooting

### Students can't submit
- Make sure "Who has access" is set to **Anyone** in the deployment settings
- Verify the Web App URL is correct in `index.html`
- Check the browser console (F12) for error messages

### Data not appearing in sheet
- Make sure you're looking at the correct Google Sheet
- Check the Apps Script execution log: **Executions** tab in Apps Script editor
- Verify the script is deployed (not just saved)

### Need to update the script
- After making changes to the script, you need to create a **New deployment** (not just save)
- Or update the existing deployment: **Deploy** → **Manage deployments** → Click the pencil icon

## Viewing Submissions

Your Google Sheet will automatically show:

### Statistics Section (Top of Sheet)
- **Total Students**: Count of all students who have submitted
- **Students with All Correct (10/10)**: Number of students who got all 10 questions correct
- **Students with Some Wrong**: Number of students who got at least one question wrong
- **Percentage with Perfect Score**: Percentage of students who got all questions correct
- **Percentage with Some Wrong**: Percentage of students who got at least one question wrong

### Student Submissions Section
- Timestamp of submission
- Student name and ID
- Status for each of the 10 problems (✓ Correct, ✗ Incorrect, or Not attempted)
- Total completed problems
- Total correct answers
- Rows with perfect scores (10/10) are highlighted in light green

The statistics update automatically as new submissions come in. You can sort, filter, and export this data as needed for grading!

## Important: One Submission Per Student

The system is configured to allow only **one submission per student ID**. This is enforced in two ways:

1. **Client-side**: The browser remembers if a student has already submitted (using localStorage) and disables the submit button
2. **Server-side**: The Google Script checks if the student ID already exists in the sheet and rejects duplicate submissions

If a student tries to submit again with the same ID, they will see an error message and the submission will be rejected.

## Updating an Existing Script

If you already have a deployed script and want to add the statistics feature and submission restrictions:

1. Open your Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Replace the entire `doPost` function with the new code from Step 2 above
4. Click **Save**
5. Go to **Deploy** → **Manage deployments**
6. Click the pencil icon (✏️) next to your existing deployment
7. Under "Version", select **New version**
8. Click **Deploy**
9. The statistics section will appear when the next student submits (or you can manually trigger it by making a test submission)

