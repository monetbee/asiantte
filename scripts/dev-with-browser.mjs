import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';

const port = 4321;
const url = `http://localhost:${port}/`;

function waitForServer() {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const maxWaitMs = 30000;

    const check = () => {
      if (Date.now() - start > maxWaitMs) {
        reject(new Error(`Timed out waiting for Astro dev server on ${url}`));
        return;
      }

      const child = spawn('curl', ['-fsS', url], { stdio: 'ignore' });
      child.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          setTimeout(check, 250);
        }
      });
      child.on('error', () => {
        setTimeout(check, 250);
      });
    };

    check();
  });
}

function openBrowser() {
  return new Promise((resolve, reject) => {
    const child = spawn('open', [url], { stdio: 'inherit' });
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Failed to open browser for ${url}`));
      }
    });
    child.on('error', (error) => {
      reject(error);
    });
  });
}

async function main() {
  const dev = spawn('astro', ['dev'], {
    stdio: 'inherit',
    shell: true,
  });

  try {
    await waitForServer();
    await openBrowser();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    dev.kill('SIGTERM');
    process.exit(1);
  }

  dev.on('exit', (code) => {
    process.exit(code ?? 0);
  });
}

main();
