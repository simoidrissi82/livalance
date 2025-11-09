import {spawn} from 'node:child_process';
import process from 'node:process';

const forwardedArgs = process.argv.slice(2).filter(Boolean);

if (forwardedArgs.length > 0) {
  console.warn(
    `[build-cloudflare] Ignoring unexpected npm arguments: ${forwardedArgs.join(' ')}`
  );
}

const npmExecCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const child = spawn(npmExecCommand, ['@cloudflare/next-on-pages', 'build'], {
  stdio: 'inherit'
});

child.on('close', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});

child.on('error', (error) => {
  console.error('[build-cloudflare] Failed to start Cloudflare build:', error);
  process.exit(1);
});
