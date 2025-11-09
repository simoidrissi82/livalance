#!/usr/bin/env node
import { spawnSync } from 'node:child_process';

const extraArgs = process.argv.slice(2);
if (extraArgs.length > 0) {
  console.warn(
    `[@cloudflare/next-on-pages] ignoring unexpected arguments: ${extraArgs.join(' ')}`
  );
}

const env = { ...process.env };
const npmArgvKey = 'npm_config_argv';
const lifecycleEvent = process.env.npm_lifecycle_event ?? 'build';

if (env[npmArgvKey]) {
  try {
    const parsed = JSON.parse(env[npmArgvKey]);
    const remain = Array.isArray(parsed?.remain) ? parsed.remain : [];
    if (remain.length > 0) {
      console.warn(
        `[@cloudflare/next-on-pages] removing unexpected npm run arguments: ${remain.join(' ')}`
      );
    }
  } catch (error) {
    console.warn('[@cloudflare/next-on-pages] unable to parse npm_config_argv; resetting.');
  }

  env[npmArgvKey] = JSON.stringify({
    remain: [],
    cooked: ['run', lifecycleEvent],
    original: ['run', lifecycleEvent],
  });
}

const result = spawnSync('npx', ['@cloudflare/next-on-pages', 'build'], {
  stdio: 'inherit',
  env,
  shell: process.platform === 'win32',
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status ?? 0);
