#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../out');

// German URL mappings
// German URL mappings for pages
const pageRedirects = [
  {from: 'de/ueber', to: 'de/about'},
  {from: 'de/kontakt', to: 'de/contact'},
  {from: 'de/saeulen', to: 'de/pillars'},
  {from: 'de/impressum', to: 'de/legal/imprint'},
  {from: 'de/datenschutz', to: 'de/legal/privacy'},
  {from: 'de/agb', to: 'de/legal/terms'},
  {from: 'de/widerruf', to: 'de/legal/cancellation'}
];

// Also redirect /de/wissen to /de/insights (main page)
const insightsRedirect = {from: 'de/wissen', to: 'de/insights'};

// Get all article slugs from de/insights directory
const getArticleSlugs = () => {
  const insightsDir = path.join(outDir, 'de/insights');
  if (!fs.existsSync(insightsDir)) return [];
  
  return fs.readdirSync(insightsDir, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
};

const redirects = [...pageRedirects, insightsRedirect];

const createRedirectHTML = (destination) => `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0;url=/${destination}/">
  <link rel="canonical" href="/${destination}/">
  <title>Redirecting...</title>
  <script>window.location.href="/${destination}/"</script>
</head>
<body>
  <p>Redirecting to <a href="/${destination}/">/${destination}/</a>...</p>
</body>
</html>`;

console.log('🔗 Generating redirect pages for German URLs...\n');

// Create page redirects
redirects.forEach(({from, to}) => {
  const redirectDir = path.join(outDir, from);
  const redirectFile = path.join(redirectDir, 'index.html');
  
  // Create directory if it doesn't exist
  fs.mkdirSync(redirectDir, {recursive: true});
  
  // Write redirect HTML
  fs.writeFileSync(redirectFile, createRedirectHTML(to));
  
  console.log(`✅ Created redirect: /${from}/ → /${to}/`);
});

// Create article redirects (/de/wissen/[slug] → /de/insights/[slug])
console.log('\n📰 Generating article redirects...\n');

const articleSlugs = getArticleSlugs();
articleSlugs.forEach(slug => {
  const from = `de/wissen/${slug}`;
  const to = `de/insights/${slug}`;
  const redirectDir = path.join(outDir, from);
  const redirectFile = path.join(redirectDir, 'index.html');
  
  fs.mkdirSync(redirectDir, {recursive: true});
  fs.writeFileSync(redirectFile, createRedirectHTML(to));
  
  console.log(`✅ Created redirect: /${from}/ → /${to}/`);
});

console.log(`\n✨ All redirects created successfully! (${redirects.length + articleSlugs.length} total)`);
