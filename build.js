import fs from 'node:fs/promises';
import path from 'node:path';
import markdownit from 'markdown-it'
import nunjucks from 'nunjucks';
import { readPublishSheet, readPages, readVersions, savePages, saveVersions } from './lib/data-cache.js';
import { WebMonitoringDb, parseScannerUrl } from './lib/web-monitoring-db.js';

const BASE_PATH = process.env.BASE_PATH || '/';

// FIXME: should probably include the palette here and write it out dynamically
// to the HTML output.
const topicCodes = [
  'climate',
  'weather',
  'energy',
  'governance',
  'assistance',
  'science',
  'educational',
  'health',
  'economy',
  'air',
  'chemicals',
  'conservation',
  'data',
  'environmental',
  'equity',
  'infrastructure',
  'remediation',
  'water',
  'administration',
];

function dateToIaTimestamp(datetime) {
  return datetime.getUTCFullYear()
    + (datetime.getUTCMonth() + 1).toString().padStart(2, '0')
    + datetime.getUTCDate().toString().padStart(2, '0')
    + datetime.getUTCHours().toString().padStart(2, '0')
    + datetime.getUTCMinutes().toString().padStart(2, '0')
    + datetime.getUTCSeconds().toString().padStart(2, '0');
}

function iaTimestamp(isoTimestamp) {
  return dateToIaTimestamp(new Date(isoTimestamp));
}

function iaComparisonUrl(versionA, versionB) {
  if (versionA.source_type === 'internet_archive' && versionB.source_type === 'internet_archive') {
    const timeA = iaTimestamp(versionA.capture_time);
    const timeB = iaTimestamp(versionB.capture_time);
    return `https://web.archive.org/web/diff/${timeA}/${timeB}/${versionA.url}`;
  }
  return null;
}

const rows = await readPublishSheet();
if (!rows.length) {
  console.error('No listings to publish. Maybe you need to run `download-publish-sheet.js` first?');
  process.exit(1);
}

const pages = await readPages();
const versions = await readVersions();
const dbClient = new WebMonitoringDb();

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  // hour: 'numeric',
  // minute: 'numeric',
  month: 'short',
  // second: 'numeric',
  year: 'numeric',
  // timeZoneName: 'short'
});

const humanTimestampFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  month: 'short',
  second: 'numeric',
  year: 'numeric',
  timeZoneName: 'short'
});

const tableRows = [];
for (const row of rows) {
  const scannerInfo = parseScannerUrl(row.last_two_side_by_side);
  let page = pages[scannerInfo.pageId];
  let versionA = versions[scannerInfo.beforeId];
  let versionB = versions[scannerInfo.afterId];

  [page, versionA, versionB] = await Promise.all([
    page || dbClient.getPage(scannerInfo.pageId),
    versionA || dbClient.getVersion(scannerInfo.beforeId),
    versionB || dbClient.getVersion(scannerInfo.afterId),
  ]);

  pages[scannerInfo.pageId] = page;
  versions[scannerInfo.beforeId] = versionA;
  versions[scannerInfo.afterId] = versionB;

  if (row.page_name !== page.title) {
    console.warn(`TITLE MISMATCH! Sheet: "${row.page_name}"`);
    console.warn(`                DB:    "${page.title}"`)
  }

  const topics = [row.topic_1, row.topic_2]
    .map((topic) => topic?.trim())
    .filter(Boolean)
    .map((topic) => ({
      name: topic,
      sortKey: topic.toLowerCase(),
      code: topicCodes.find(code => topic.toLowerCase().startsWith(code))
    }))
    .sort((a, b) => (a.sortKey <= b.sortKey ? -1 : 1));

  tableRows.push({
    dateRange: [versionA.capture_time.slice(0, 10), versionB.capture_time.slice(0, 10)],
    // dateRange: [
    //   dateFormatter.format(new Date(versionA.capture_time)),
    //   dateFormatter.format(new Date(versionB.capture_time)),
    // ],
    humanTimeRange: [
      humanTimestampFormatter.format(new Date(versionA.capture_time)),
      humanTimestampFormatter.format(new Date(versionB.capture_time)),
    ],

    // TODO: should get this from page tags or maintainers.
    agency: row.agency,

    // FIXME: make this the title if there are no mismatches.
    title: row.page_name,

    // Should this be versionA.url? Page canonical URL could change over time.
    url: row.url,
    humanUrl: row.url.replace(/^\w+:\/\/(www\.)?/, ''),

    accessChange: Number(row.access_change),
    substanceChange: Number(row.substance_change),
    topics,
    description: row.brief_description.trim(),

    links: {
      iaTimeline: `https://web.archive.org/web/*/${row.url}`,
      iaComparison: iaComparisonUrl(versionA, versionB),
      htmlA: `https://api.monitoring.envirodatagov.org/api/v0/versions/${versionA.uuid}/raw`,
      htmlB: `https://api.monitoring.envirodatagov.org/api/v0/versions/${versionB.uuid}/raw`,
    },

    page,
    versionA,
    versionB
  });
}

await savePages(pages);
await saveVersions(versions);

const templateEnv = nunjucks.configure('templates');

templateEnv.addFilter('nobreak', (text, maxLength = 25) => {
  if (text.length <= maxLength) {
    return text.replace(/\s/g, '\u00a0');
  }
  return text;
});

templateEnv.addFilter('sitePath', (urlPath) => {
  if (urlPath.startsWith('/')) urlPath = urlPath.slice(1);
  return path.join(BASE_PATH, urlPath);
});

const markdowner = markdownit({
  html: true,
  linkify: true,
  typographer: true
});
templateEnv.addFilter('markdown', (text) => {
  return new nunjucks.runtime.SafeString(markdowner.render(text));
});

const sitePages = [
  { title: '', navTitle: 'Data', path: '/', template: 'index.html' },
  { title: 'Non-Table View', path: '/non-tabular', template: 'non-tabular.html' },
  { title: 'About', path: '/about/', template: 'about.html' }
];

tableRows.sort((a, b) => {
  if (a.versionB.capture_time < b.versionB.capture_time) {
    return -1;
  } else if (a.versionB.capture_time > b.versionB.capture_time) {
    return 1;
  } else if (a.versionA.capture_time < b.versionA.capture_time) {
    return -1;
  } else if (a.versionA.capture_time > b.versionA.capture_time) {
    return 1;
  } else if (a.url <= b.url) {
    return -1;
  } else {
    return 1;
  }
}).reverse();

const pageChangeCounts = tableRows.reduce((counts, row) => {
  counts[row.page.uuid] = (counts[row.page.uuid] || 0) + 1;
  return counts;
}, {});

await fs.mkdir('site', { recursive: true });
await fs.cp('static', 'site/static', { recursive: true });

for (const page of sitePages) {
  const content = templateEnv.render(page.template, {
    BASE_PATH: process.env.BASE_PATH,
    trackerData: tableRows,
    pageChangeCounts,
    nav: sitePages,
    currentPage: page
  });
  const htmlPath = path.join('site', page.path, 'index.html');
  await fs.mkdir(path.dirname(htmlPath), { recursive: true });
  await fs.writeFile(htmlPath, content, { encoding: 'utf-8' });
}
