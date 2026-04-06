import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_SITE_URL = 'https://virenscent.vercel.app';
const DIST_DIR = path.resolve('dist');
const INDEX_FILE = path.join(DIST_DIR, 'index.html');
const ROBOTS_FILE = path.join(DIST_DIR, 'robots.txt');
const SITEMAP_FILE = path.join(DIST_DIR, 'sitemap.xml');

function normalizeSiteUrl(value) {
  const input = (value || '').trim();

  if (!input) {
    return DEFAULT_SITE_URL;
  }

  const withProtocol = /^https?:\/\//i.test(input) ? input : `https://${input}`;

  return withProtocol.replace(/\/+$/, '');
}

function getSiteUrl() {
  return normalizeSiteUrl(
    process.env.VITE_SITE_URL ||
      process.env.SITE_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL,
  );
}

function buildRobots(siteUrl) {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

function buildSitemap(siteUrl) {
  const lastmod = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
}

function injectCanonical(indexHtml, siteUrl) {
  const canonicalTag = `<link rel="canonical" href="${siteUrl}/" />`;
  const ogUrlTag = `<meta property="og:url" content="${siteUrl}/" />`;

  let output = indexHtml.replace(
    /<link rel="canonical"[^>]*>/i,
    canonicalTag,
  );

  if (output === indexHtml) {
    output = output.replace('</head>', `    ${canonicalTag}\n  </head>`);
  }

  const beforeOgUrl = output;

  output = output.replace(
    /<meta property="og:url"[^>]*>/i,
    ogUrlTag,
  );

  if (output === beforeOgUrl) {
    output = output.replace('</head>', `    ${ogUrlTag}\n  </head>`);
  }

  return output;
}

async function main() {
  const siteUrl = getSiteUrl();

  await mkdir(DIST_DIR, { recursive: true });

  const [indexHtml] = await Promise.all([
    readFile(INDEX_FILE, 'utf8'),
    writeFile(ROBOTS_FILE, buildRobots(siteUrl), 'utf8'),
    writeFile(SITEMAP_FILE, buildSitemap(siteUrl), 'utf8'),
  ]);

  await writeFile(INDEX_FILE, injectCanonical(indexHtml, siteUrl), 'utf8');

  console.log(`SEO files generated for ${siteUrl}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
