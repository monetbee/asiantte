import { execSync } from 'node:child_process';
import path from 'node:path';

const projectRoot = path.resolve(process.cwd());
const port = 4321;

function getListeningPids() {
  try {
    const output = execSync(`lsof -nP -iTCP:${port} -sTCP:LISTEN -t`, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    return output
      .split(/\s+/)
      .map((value) => Number(value.trim()))
      .filter((value) => Number.isFinite(value) && value > 0);
  } catch {
    return [];
  }
}

function getProcessInfo(pid) {
  try {
    const output = execSync(`ps -p ${pid} -o pid=,ppid=,comm=,args=`, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return output.trim();
  } catch {
    return '';
  }
}

function isProjectAstroProcess(pid) {
  const info = getProcessInfo(pid);
  if (!info) return false;

  const args = info
    .replace(/^\s*\d+\s+\d+\s+\S+\s+/, '')
    .trim();

  if (!args) return false;

  const normalized = args.replace(/\s+/g, ' ');
  if (normalized.includes('scripts/clear-astro-dev-port.mjs')) {
    return false;
  }

  return (
    normalized.includes(projectRoot) ||
    (normalized.includes('node_modules/.bin/astro') && normalized.includes('astro dev'))
  );
}

function stopProcess(pid) {
  try {
    execSync(`kill -TERM ${pid}`, { stdio: 'ignore' });
  } catch {
    return false;
  }

  for (let attempt = 0; attempt < 10; attempt += 1) {
    const info = getProcessInfo(pid);
    if (!info) {
      return true;
    }
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 150);
  }

  try {
    execSync(`kill -KILL ${pid}`, { stdio: 'ignore' });
  } catch {
    // best-effort cleanup
  }

  return !getProcessInfo(pid);
}

const stalePids = [...new Set(getListeningPids().filter((pid) => isProjectAstroProcess(pid)))];

if (stalePids.length === 0) {
  console.log(`No stale Astro dev process found for this project on port ${port}.`);
  process.exit(0);
}

for (const pid of stalePids) {
  console.log(`Stopping stale Astro dev process for this project on port ${port}: pid ${pid}`);
  stopProcess(pid);
}

console.log(`Cleared stale Astro process(es) for this project on port ${port}.`);
