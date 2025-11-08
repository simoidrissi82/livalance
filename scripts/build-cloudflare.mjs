#!/usr/bin/env node
import { spawnSync } from 'node:child_process';

const extraArgs = process.argv.slice(2);
if (extraArgs.length > 0) {
  console.warn(
    `[@cloudflare/next-on-pages] ignoring unexpected arguments: ${extraArgs.join(' ')}`
  );
}

const result = spawnSync('npx', ['@cloudflare/next-on-pages', 'build'], {
  stdio: 'inherit',
  env: process.env,
  shell: process.platform === 'win32',
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status ?? 0);
