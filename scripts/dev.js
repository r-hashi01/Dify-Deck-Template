#!/usr/bin/env node
import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const packagesDir = path.join(rootDir, 'packages');
const publicDir = path.join(rootDir, 'public');
const decksConfigPath = path.join(rootDir, 'decks.json');

// Load enabled decks from decks.json
function getEnabledDeckNames() {
  if (!fs.existsSync(decksConfigPath)) {
    return null; // No config = show all
  }
  const config = JSON.parse(fs.readFileSync(decksConfigPath, 'utf-8'));
  return config.decks || [];
}

// Ensure assets symlink exists for a deck
function ensureAssetsSymlink(deckName) {
  const deckPublicDir = path.join(packagesDir, deckName, 'public');
  const assetsLink = path.join(deckPublicDir, 'assets');
  const targetPath = '../../../public/assets';

  // Create public directory if it doesn't exist
  if (!fs.existsSync(deckPublicDir)) {
    fs.mkdirSync(deckPublicDir, { recursive: true });
  }

  // Create symlink if it doesn't exist
  if (!fs.existsSync(assetsLink)) {
    fs.symlinkSync(targetPath, assetsLink);
    console.log(`  Created symlink: ${deckName}/public/assets`);
  }
}

// Scan packages directory and find decks
function getDecks() {
  const enabledDecks = getEnabledDeckNames();
  const decks = [];
  const packages = fs.readdirSync(packagesDir);

  for (const pkg of packages) {
    const pkgJsonPath = path.join(packagesDir, pkg, 'package.json');
    const slidesPath = path.join(packagesDir, pkg, 'slides.md');

    if (pkg === 'theme-dify' || !fs.existsSync(slidesPath)) {
      continue;
    }

    // Skip if not in enabled list
    if (enabledDecks && !enabledDecks.includes(pkg)) {
      continue;
    }

    if (fs.existsSync(pkgJsonPath)) {
      const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
      const devScript = pkgJson.scripts?.dev || '';
      const portMatch = devScript.match(/--port\s+(\d+)/);
      const port = portMatch ? portMatch[1] : '3030';

      // Get title from slides.md
      const slidesContent = fs.readFileSync(slidesPath, 'utf-8');
      const titleMatch = slidesContent.match(/title:\s*["']?([^"'\n]+)["']?/);
      const title = titleMatch ? titleMatch[1].trim() : pkg;

      // Ensure assets symlink exists
      ensureAssetsSymlink(pkg);

      decks.push({
        name: pkg,
        title,
        port,
        shortName: pkg.replace(/-/g, '').slice(0, 8)
      });
    }
  }

  return decks;
}

// Generate index HTML dynamically
function generateIndexHtml(decks) {
  const deckCards = decks.map(deck => `
      <a href="http://localhost:${deck.port}" class="deck-card">
        <div class="deck-card-content">
          <div class="deck-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
          </div>
          <div class="deck-info">
            <h3>${deck.title}</h3>
            <p>${deck.name} <span class="port-badge">:${deck.port}</span></p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </a>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dify Deck - Select Presentation</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: #000; color: #fff;
      min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem;
    }
    .container { max-width: 640px; width: 100%; }
    .header { text-align: center; margin-bottom: 3rem; }
    .logo { height: 5rem; margin-bottom: 1.5rem; }
    .logo img { height: 100%; width: auto; filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)); }
    h1 { font-size: 2.25rem; font-weight: 700; margin-bottom: 1rem; }
    .subtitle { color: #9ca3af; font-size: 1.125rem; }
    .dev-badge {
      display: inline-block; background: #0033FF; color: #fff;
      font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.5rem;
      border-radius: 0.25rem; margin-left: 0.5rem; vertical-align: middle;
    }
    .deck-list { display: flex; flex-direction: column; gap: 1rem; }
    .deck-card {
      display: flex; align-items: center; justify-content: space-between;
      background: #1f2937; border: 1px solid #374151; padding: 1.5rem;
      border-radius: 0.75rem; text-decoration: none; color: inherit;
      transition: all 0.3s ease;
    }
    .deck-card:hover {
      background: #374151; border-color: #0033FF; transform: translateY(-2px);
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
    }
    .deck-card-content { display: flex; align-items: center; gap: 1rem; }
    .deck-icon {
      padding: 0.75rem; background: #111827; border-radius: 0.5rem;
      color: #9ca3af; transition: all 0.3s ease;
    }
    .deck-card:hover .deck-icon { background: rgba(11, 51, 243, 0.2); color: #0033FF; }
    .deck-info h3 { font-size: 1.25rem; font-weight: 700; transition: color 0.3s ease; }
    .deck-card:hover .deck-info h3 { color: #0033FF; }
    .deck-info p { color: #6b7280; font-size: 0.875rem; margin-top: 0.25rem; }
    .port-badge {
      display: inline-block; background: #374151; color: #9ca3af;
      font-size: 0.75rem; font-weight: 500; padding: 0.125rem 0.375rem;
      border-radius: 0.25rem; margin-left: 0.5rem; font-family: monospace;
    }
    .chevron { color: #4b5563; transition: color 0.3s ease; }
    .deck-card:hover .chevron { color: #fff; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">
        <img src="/assets/icon/dify-logo-dark-mode.svg" alt="Dify" />
      </div>
      <h1>Select a Presentation<span class="dev-badge">DEV</span></h1>
      <p class="subtitle">Choose a slide deck to begin</p>
    </div>
    <div class="deck-list">
${deckCards}
    </div>
  </div>
</body>
</html>`;
}

// MIME types for static files
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const decks = getDecks();
const colors = ['blue', 'green', 'magenta', 'cyan', 'red', 'white'];

console.log('\n  Dify Deck Development Server');
console.log('  ────────────────────────────\n');
console.log('  Index:       http://localhost:3000/\n');
decks.forEach((d, i) => {
  console.log(`  ${d.title}:`);
  console.log(`    http://localhost:${d.port}/\n`);
});

// Start index server on port 3000
const indexServer = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost:3000');
  let pathname = url.pathname;

  if (pathname === '/' || pathname === '/index.html') {
    const html = generateIndexHtml(decks);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
    return;
  }

  // Serve static files from public
  const filePath = path.join(publicDir, pathname);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

indexServer.listen(3000);

// Start deck servers using concurrently
let childProcess = null;

if (decks.length > 0) {
  const names = decks.map(d => d.shortName).join(',');
  const colorList = decks.map((_, i) => colors[i % colors.length]).join(',');
  const commands = decks.map(d => `"pnpm --filter ${d.name} dev"`).join(' ');

  const cmd = `npx concurrently -n ${names} -c ${colorList} ${commands}`;

  childProcess = spawn(cmd, [], {
    stdio: 'inherit',
    cwd: rootDir,
    shell: true
  });
}

// Cleanup on exit
function cleanup() {
  console.log('\n  Shutting down...');
  indexServer.close();
  if (childProcess) {
    childProcess.kill('SIGTERM');
  }
  process.exit(0);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
