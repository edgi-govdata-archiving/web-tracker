import fs from 'node:fs/promises';
import path from 'node:path';

export const dataPath = path.resolve(import.meta.dirname, '../data-cache');

const publishSheetPath = path.join(dataPath, 'publish-sheet.json');
const pagesPath = path.join(dataPath, 'pages.json');
const versionsPath = path.join(dataPath, 'versions.json');

export async function readPublishSheet() {
  let raw = '';
  try {
    raw = await fs.readFile(publishSheetPath, { encoding: 'utf-8' });
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }

    throw error;
  }

  return JSON.parse(raw).rows;
}

export async function savePublishSheet(rows) {
  await fs.mkdir(dataPath, { recursive: true });
  await fs.writeFile(publishSheetPath, JSON.stringify({ rows }), { encoding: 'utf-8' });
}

export async function readPages() {
  let raw = '';
  try {
    raw = await fs.readFile(pagesPath, { encoding: 'utf-8' });
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {};
    }

    throw error;
  }

  return JSON.parse(raw);
}

export async function savePages(data) {
  await fs.mkdir(dataPath, { recursive: true });
  await fs.writeFile(pagesPath, JSON.stringify(data), { encoding: 'utf-8' });
}

export async function readVersions() {
  let raw = '';
  try {
    raw = await fs.readFile(versionsPath, { encoding: 'utf-8' });
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {};
    }

    throw error;
  }

  return JSON.parse(raw);
}

export async function saveVersions(data) {
  await fs.mkdir(dataPath, { recursive: true });
  await fs.writeFile(versionsPath, JSON.stringify(data), { encoding: 'utf-8' });
}
