#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../out');

// German URL mappings
const pageRedirects = [
  {from: '/de/ueber', to: '/de/about'},
  {from: '/de/kontakt', to: '/de/contact'},
  {from: '/de/saeulen', to: '/de/pillars'},
  {from: '/de/wissen', to: '/de/insights'},
  {from: '/de/impressum', to: '/de/legal/imprint'},
  {from: '/de/datenschutz', to: '/de/legal/privacy'},
  {from: '/de/agb', to: '/de/legal/terms'},
  {from: '/de/widerruf', to: '/de/legal/cancellation'}
];

// Get all article slugs from de/insights directory
const getArticleSlugs = () => {
  const insightsDir = path.join(outDir, 'de/insights');
  if (!fs.existsSync(insightsDir)) return [];
  
  return fs.readdirSync(insightsDir, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
};

console.log('🔗 Generating _redirects file for Cloudflare Pages...\n');

// Build redirects file content
let redirectsContent = '# German URL redirects for multilingual site\n';
redirectsContent += '# Cloudflare Pages will handle these at the edge (fast & SEO-friendly)\n';
redirectsContent += '# Format: /source /destination [status]\n\n';

// Add page redirects
pageRedirects.forEach(({from, to}) => {
  redirectsContent += `${from} ${to} 301\n`;
  console.log(`✅ ${from} → ${to}`);
});

// Add article redirects
console.log('\n📰 Adding article redirects...\n');
const articleSlugs = getArticleSlugs();
articleSlugs.forEach(slug => {
  const from = `/de/wissen/${slug}`;
  const to = `/de/insights/${slug}`;
  redirectsContent += `${from} ${to} 301\n`;
  console.log(`✅ ${from} → ${to}`);
});

// Write _redirects file to out directory
const redirectsFile = path.join(outDir, '_redirects');
fs.writeFileSync(redirectsFile, redirectsContent);

console.log(`\n✨ Created _redirects file with ${pageRedirects.length + articleSlugs.length} redirects!`);
console.log('📄 File: out/_redirects');
console.log('\n💡 These are server-side 301 redirects (permanent, SEO-friendly, instant)');
