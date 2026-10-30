export class WebMonitoringDb {
  baseUrl = 'https://api.monitoring.envirodatagov.org/api/v0';

  async getPage(pageId) {
      const content = await this._fetch(`/pages/${pageId}`);
      return content.data;
  }

  async getVersion(versionId) {
      const content = await this._fetch(`/versions/${versionId}?different=false`);
      return content.data;
  }

  async _fetch(url, options = {}) {
      const response = await fetch(`${this.baseUrl}${url}`, options);
      if (response.status >= 400) {
          const text = await response.text();
          throw new Error(`HTTP ${response.status} error: ${text}`);
      }

      return await response.json();
  }
}

export function parseScannerUrl(url) {
  const parsedUrl = URL.parse(url);
  const match = parsedUrl.pathname.match(/^\/page\/([^\/.]+)\/([^\/.]+)..([^\/.]+)/);
  if (parsedUrl.hostname !== 'monitoring.envirodatagov.org' || !match) {
    throw new TypeError(`URL is not a valid Scanner comparison: "${url}"`);
  }

  return {
      pageId: match[1],
      beforeId: match[2],
      afterId: match[3],
  }
}
