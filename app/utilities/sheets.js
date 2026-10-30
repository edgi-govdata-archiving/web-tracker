import sheets from '@googleapis/sheets';

export class BasicGoogleSheetClient {
  constructor (credentials = null) {
    if (!credentials) {
      try {
        credentials = JSON.parse(atob(process.env.GOOGLE_SERVICE_KEY));
      } catch {
        throw new Error('Could not load credentials from GOOGLE_SERVICE_KEY env var. Set it to a base64-encoded version of the JSON credentials.');
      }
    }

    this.auth = new sheets.auth.GoogleAuth({
      credentials: JSON.parse(atob(process.env.GOOGLE_SERVICE_KEY)),
      // keyFilename: 'tracker-google-key.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
    });
  }

  async getClient() {
    if (!this._client) {
      this._client = await sheets.sheets({
        version: 'v4',
        auth: await this.auth.getClient()
      });
    }
    return this._client;
  }

  async readAsObjects({ spreadsheetId, range, simplifyName = true, parseCell = (k, v) => v }) {
    // TODO: if range specifies a starting row and that row is not row 1; issue
    // a batch get for the first row + requested range:
    // https://developers.google.com/workspace/sheets/api/guides/values#read_multiple_ranges
    const client = await this.getClient();
    const raw = await client.spreadsheets.values.get({ spreadsheetId, range });
    const header = raw.data.values[0];
    return raw
      .data
      .values
      .slice(1)
      .map((cells) => {
        const row = {};
        for (let i = 0; i < header.length; i++) {
          let name = header[i].trim();
          if (simplifyName) {
            name = name.toLowerCase().replace(/[\s\-]+/g, '_');
          }
          row[name] = parseCell(name, cells[i]);
        }
        return row;
      });
  }
}
