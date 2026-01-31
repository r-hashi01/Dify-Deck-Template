#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Parse arguments
const args = process.argv.slice(2);
if (args.length < 1) {
  console.log(`
Usage: pnpm create-deck <deck-name> [title]

Example:
  pnpm create-deck my-deck "My Presentation"
  pnpm create-deck product-intro
`);
  process.exit(1);
}

const deckName = args[0];
const title = args[1] || deckName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

// Find next available port
function getNextPort() {
  const packagesDir = path.join(rootDir, 'packages');
  const packages = fs.readdirSync(packagesDir);
  let maxPort = 3000;

  for (const pkg of packages) {
    const pkgJsonPath = path.join(packagesDir, pkg, 'package.json');
    if (fs.existsSync(pkgJsonPath)) {
      const content = fs.readFileSync(pkgJsonPath, 'utf-8');
      const portMatch = content.match(/--port\s+(\d+)/);
      if (portMatch) {
        maxPort = Math.max(maxPort, parseInt(portMatch[1]));
      }
    }
  }

  return maxPort + 1;
}

const port = getNextPort();
const deckDir = path.join(rootDir, 'packages', deckName);

// Check if deck already exists
if (fs.existsSync(deckDir)) {
  console.error(`Error: Deck "${deckName}" already exists`);
  process.exit(1);
}

console.log(`\nCreating deck: ${deckName}`);
console.log(`  Title: ${title}`);
console.log(`  Port:  ${port}\n`);

// 1. Create directory
fs.mkdirSync(deckDir, { recursive: true });

// 2. Create package.json
const packageJson = {
  name: deckName,
  version: "1.0.0",
  private: true,
  scripts: {
    dev: `slidev --port ${port}`,
    build: `slidev build --base /${deckName}/ --out ../../dist/${deckName}`,
    export: "slidev export"
  }
};
fs.writeFileSync(
  path.join(deckDir, 'package.json'),
  JSON.stringify(packageJson, null, 2) + '\n'
);
console.log(`  Created: packages/${deckName}/package.json`);

// 3. Create slides.md
const slidesMd = `---
theme: ../theme-dify
title: "${title}"
---

---
layout: title
slideTitle: "${title}"
subtitle: Your subtitle here
---

---
layout: content
slideTitle: First Slide
items:
  - Point 1
  - Point 2
  - Point 3
---

---
layout: end
slideTitle: Thank You
subtitle: Questions?
---
`;
fs.writeFileSync(path.join(deckDir, 'slides.md'), slidesMd);
console.log(`  Created: packages/${deckName}/slides.md`);

// 4. Create public directory with symlink to assets
const publicDir = path.join(deckDir, 'public');
fs.mkdirSync(publicDir, { recursive: true });
fs.symlinkSync('../../../public/assets', path.join(publicDir, 'assets'));
console.log(`  Created: packages/${deckName}/public/assets -> ../../../public/assets`);

console.log(`
Done! Next steps:
  1. pnpm install
  2. pnpm run dev
  3. Open http://localhost:3000/
`);
