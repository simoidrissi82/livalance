import { spawn } from 'node:child_process';

const isWindows = process.platform === 'win32';
const npmCmd = isWindows ? 'npm.cmd' : 'npm';
const npxCmd = isWindows ? 'npx.cmd' : 'npx';

async function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      ...options,
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        const error = new Error(`Command \"${command} ${args.join(' ')}\" exited with code ${code}`);
        error.code = code;
        reject(error);
      }
    });

    child.on('error', reject);
  });
}

try {
  if (process.env.VERCEL === '1') {
    await run(npmCmd, ['run', 'build:next'], { env: process.env });
  } else {
    const env = {
      ...process.env,
      VERCEL_BUILD_COMMAND: 'npm run build:next',
    };

    await run(npxCmd, ['@cloudflare/next-on-pages'], { env });
  }
} catch (error) {
  if (error && typeof error.code === 'number') {
    process.exitCode = error.code;
  } else {
    console.error(error);
    process.exitCode = 1;
  }
}
