import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const packagesDir = path.join(rootDir, 'packages');
const distDir = path.join(rootDir, 'dist');
const decksConfigPath = path.join(rootDir, 'decks.json');

// Load enabled decks from decks.json
function getEnabledDeckNames() {
  if (!fs.existsSync(decksConfigPath)) {
    return null;
  }
  const config = JSON.parse(fs.readFileSync(decksConfigPath, 'utf-8'));
  return config.decks || [];
}

// Get deck info from packages
function getDecks() {
  const enabledDecks = getEnabledDeckNames();
  const decks = [];
  const packages = fs.readdirSync(packagesDir);

  for (const pkg of packages) {
    const pkgPath = path.join(packagesDir, pkg);
    const slidesPath = path.join(pkgPath, 'slides.md');
    const pkgJsonPath = path.join(pkgPath, 'package.json');

    // Skip theme-dify and non-deck packages
    if (pkg === 'theme-dify' || !fs.existsSync(slidesPath)) {
      continue;
    }

    // Skip if not in enabled list
    if (enabledDecks && !enabledDecks.includes(pkg)) {
      continue;
    }

    // Read slides.md to get title and slide count
    const slidesContent = fs.readFileSync(slidesPath, 'utf-8');

    // Extract title from first slide's frontmatter
    const titleMatch = slidesContent.match(/title:\s*["']?([^"'\n]+)["']?/);
    const title = titleMatch ? titleMatch[1].trim() : pkg;

    // Count slides (separated by ---)
    const slideCount = (slidesContent.match(/^---$/gm) || []).length;

    // Read package.json for additional info
    let description = '';
    if (fs.existsSync(pkgJsonPath)) {
      const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
      description = pkgJson.description || '';
    }

    decks.push({
      id: pkg,
      title,
      description,
      slideCount: Math.floor(slideCount / 2), // Each slide has opening and closing ---
      path: `/${pkg}/`
    });
  }

  return decks;
}

// Generate HTML
function generateIndexHtml(decks, isDev = false) {
  const deckCards = decks.map(deck => `
          <a
            href="${isDev ? `http://localhost:${deck.port}` : deck.path}"
            class="deck-card"
            ${isDev ? 'target="_blank"' : ''}
          >
            <div class="deck-card-content">
              <div class="deck-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                </svg>
              </div>
              <div class="deck-info">
                <h3>${deck.title}</h3>
                <p>${deck.slideCount} slides</p>
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
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: #000;
      color: #fff;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .container {
      max-width: 640px;
      width: 100%;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .logo {
      height: 5rem;
      margin-bottom: 1.5rem;
    }

    .logo img {
      height: 100%;
      width: auto;
      filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
    }

    h1 {
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .subtitle {
      color: #9ca3af;
      font-size: 1.125rem;
    }

    .deck-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .deck-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #1f2937;
      border: 1px solid #374151;
      padding: 1.5rem;
      border-radius: 0.75rem;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
    }

    .deck-card:hover {
      background: #374151;
      border-color: #0B33F3;
      transform: translateY(-2px);
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }

    .deck-card-content {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .deck-icon {
      padding: 0.75rem;
      background: #111827;
      border-radius: 0.5rem;
      color: #9ca3af;
      transition: all 0.3s ease;
    }

    .deck-card:hover .deck-icon {
      background: rgba(11, 51, 243, 0.2);
      color: #0B33F3;
    }

    .deck-info h3 {
      font-size: 1.25rem;
      font-weight: 700;
      transition: color 0.3s ease;
    }

    .deck-card:hover .deck-info h3 {
      color: #0B33F3;
    }

    .deck-info p {
      color: #6b7280;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .chevron {
      color: #4b5563;
      transition: color 0.3s ease;
    }

    .deck-card:hover .chevron {
      color: #fff;
    }

    .dev-badge {
      display: inline-block;
      background: #0B33F3;
      color: #fff;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      margin-left: 0.5rem;
      vertical-align: middle;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">
        <img src="${isDev ? '/assets/icon/dify-logo-dark-mode.svg' : './assets/icon/dify-logo-dark-mode.svg'}" alt="Dify" />
      </div>
      <h1>Select a Presentation${isDev ? '<span class="dev-badge">DEV</span>' : ''}</h1>
      <p class="subtitle">Choose a slide deck to begin</p>
    </div>

    <div class="deck-list">
${deckCards}
    </div>
  </div>
</body>
</html>`;
}

// Main execution
function main() {
  const decks = getDecks();

  console.log(`Found ${decks.length} deck(s):`);
  decks.forEach(d => console.log(`  - ${d.id}: "${d.title}" (${d.slideCount} slides)`));

  // Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Copy assets to dist
  const publicAssetsDir = path.join(rootDir, 'public', 'assets');
  const distAssetsDir = path.join(distDir, 'assets');

  if (fs.existsSync(publicAssetsDir)) {
    copyDirRecursive(publicAssetsDir, distAssetsDir);
    console.log('Copied assets to dist/');
  }

  // Generate index.html
  const html = generateIndexHtml(decks, false);
  fs.writeFileSync(path.join(distDir, 'index.html'), html);
  console.log('Generated dist/index.html');
}

// Helper: recursive copy directory
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

main();
