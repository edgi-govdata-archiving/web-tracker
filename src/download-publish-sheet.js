import { savePublishSheet } from './lib/data-cache.js';
import { BasicGoogleSheetClient } from './lib/sheets.js';

const publishSheetId = process.env.PUBLISH_SHEET;
const publishRange = process.env.PUBLISH_SHEET_RANGE || 'Publishing!A:ZZ';

if (!publishSheetId) {
  console.error('You must provide a Google Sheet ID in the `PUBLISH_SHEET` environment variable!');
  process.exit(1);
}

console.error('Loading Google sheet...');
const sheets = new BasicGoogleSheetClient();
const rows = await sheets.readAsObjects({
  spreadsheetId: publishSheetId,
  range: publishRange,
});

console.error(`Writing to data cache...`);
await savePublishSheet(rows);

console.error('Done.');
