#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

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

// Get deck directories
function getDecks() {
  const enabledDecks = getEnabledDeckNames();
  const decks = [];
  const packages = fs.readdirSync(packagesDir);

  for (const pkg of packages) {
    const pkgPath = path.join(packagesDir, pkg);
    const slidesPath = path.join(pkgPath, 'slides.md');

    // Skip theme-dify and non-deck packages
    if (pkg === 'theme-dify' || !fs.existsSync(slidesPath)) {
      continue;
    }

    // Skip if not in enabled list
    if (enabledDecks && !enabledDecks.includes(pkg)) {
      continue;
    }

    decks.push(pkg);
  }

  return decks;
}

// Export PDF for a single deck
async function exportPdf(deckName) {
  const deckPath = path.join(packagesDir, deckName);
  const outputDir = path.join(distDir, deckName);
  const pdfPath = path.join(outputDir, 'slides.pdf');

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Exporting PDF: ${deckName}...`);

  try {
    // Run slidev export from the deck directory
    execSync(`npx slidev export --output "${pdfPath}" --timeout 120000`, {
      cwd: deckPath,
      stdio: 'inherit',
    });
    console.log(`  ✓ Generated: ${pdfPath}`);
    return true;
  } catch (error) {
    console.error(`  ✗ Failed to export ${deckName}:`, error.message);
    return false;
  }
}

// Main
async function main() {
  const decks = getDecks();
  console.log(`Found ${decks.length} deck(s) to export\n`);

  let success = 0;
  let failed = 0;

  for (const deck of decks) {
    const result = await exportPdf(deck);
    if (result) {
      success++;
    } else {
      failed++;
    }
  }

  console.log(`\nExport complete: ${success} success, ${failed} failed`);
}

main().catch(console.error);
