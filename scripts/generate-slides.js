#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const packagesDir = path.join(rootDir, 'packages');

// YAML value formatter
function toYamlValue(value, indent = 0) {
  const spaces = '  '.repeat(indent);

  if (value === null || value === undefined) {
    return '';
  }

  if (typeof value === 'string') {
    if (value.includes('\n') || value.includes(':') || value.includes('#') ||
        value.includes("'") || value.includes('"') || value.startsWith(' ') ||
        value.match(/^[\d.]+$/) || value === 'true' || value === 'false') {
      return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
    }
    return value;
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';

    // Check if any item is an object (mixed arrays supported)
    const hasObjects = value.some(item => typeof item === 'object' && item !== null);

    if (hasObjects) {
      return '\n' + value.map(item => {
        // Handle string items in mixed arrays
        if (typeof item === 'string') {
          return `${spaces}  - ${toYamlValue(item)}`;
        }
        // Handle object items
        const entries = Object.entries(item).filter(([_, v]) => v !== undefined);
        const lines = entries.map(([k, v], i) => {
          const prefix = i === 0 ? `${spaces}  - ` : `${spaces}    `;
          if (Array.isArray(v)) {
            // Recursively handle nested arrays (e.g., children in BulletItem)
            const nestedYaml = toYamlValue(v, indent + 2);
            if (nestedYaml.startsWith('\n')) {
              return `${prefix}${k}:${nestedYaml}`;
            }
            return `${prefix}${k}: ${nestedYaml}`;
          }
          const nestedValue = toYamlValue(v, indent + 2);
          if (nestedValue.startsWith('\n')) {
            return `${prefix}${k}:${nestedValue}`;
          }
          return `${prefix}${k}: ${nestedValue}`;
        });
        return lines.join('\n');
      }).join('\n');
    } else {
      return '\n' + value.map(item => `${spaces}  - ${toYamlValue(item, indent + 1)}`).join('\n');
    }
  }

  // Handle plain objects (not arrays)
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value).filter(([_, v]) => v !== undefined);
    if (entries.length === 0) return '{}';
    return '\n' + entries.map(([k, v]) => {
      const nestedValue = toYamlValue(v, indent + 1);
      if (nestedValue.startsWith('\n')) {
        return `${spaces}  ${k}:${nestedValue}`;
      }
      return `${spaces}  ${k}: ${nestedValue}`;
    }).join('\n');
  }

  return String(value);
}

// Convert slide to frontmatter
function slideToFrontmatter(slide, defaults = {}) {
  const { slot, notes, ...props } = slide;
  const mergedProps = { ...defaults, ...props };

  // Remove notes from defaults if present (notes should be per-slide only)
  delete mergedProps.notes;

  // Auto-add title from slideTitle for Slidev's slide search
  if (mergedProps.slideTitle && !mergedProps.title) {
    mergedProps.title = mergedProps.slideTitle;
  }

  const lines = ['---'];

  for (const [key, value] of Object.entries(mergedProps)) {
    if (value === undefined) continue;

    const yamlValue = toYamlValue(value);
    if (yamlValue.startsWith('\n')) {
      lines.push(`${key}:${yamlValue}`);
    } else {
      lines.push(`${key}: ${yamlValue}`);
    }
  }

  lines.push('---');

  if (slot) {
    lines.push('');
    lines.push(slot);
  }

  // Add speaker notes as HTML comment
  if (notes) {
    lines.push('');
    lines.push('<!--');
    lines.push(notes.trim());
    lines.push('-->');
  }

  return lines.join('\n');
}

// Generate markdown from deck
function generateMarkdown(deck) {
  const parts = [];

  // First slide is merged with headmatter
  const firstSlide = deck.slides[0];
  const { slot: firstSlot, notes: firstNotes, ...firstProps } = firstSlide;
  const firstMerged = { ...deck.config.defaults, ...firstProps };

  // Don't add title from slideTitle for first slide (deck title is used instead)
  // Remove notes from merged props (will be added as HTML comment)
  delete firstMerged.notes;

  parts.push('---');
  parts.push(`theme: ${deck.config.theme || '../theme-dify'}`);
  parts.push(`title: "${deck.config.title}"`);

  // Add additional config properties (browserExporter, etc.)
  const configExclude = ['theme', 'title', 'defaults'];
  for (const [key, value] of Object.entries(deck.config)) {
    if (configExclude.includes(key) || value === undefined) continue;
    const yamlValue = toYamlValue(value);
    if (yamlValue.startsWith('\n')) {
      parts.push(`${key}:${yamlValue}`);
    } else {
      parts.push(`${key}: ${yamlValue}`);
    }
  }

  // Add first slide props to headmatter
  for (const [key, value] of Object.entries(firstMerged)) {
    if (value === undefined) continue;
    const yamlValue = toYamlValue(value);
    if (yamlValue.startsWith('\n')) {
      parts.push(`${key}:${yamlValue}`);
    } else {
      parts.push(`${key}: ${yamlValue}`);
    }
  }
  parts.push('---');

  // Add first slide slot content if present
  if (firstSlot) {
    parts.push('');
    parts.push(firstSlot);
  }

  // Add first slide speaker notes
  if (firstNotes) {
    parts.push('');
    parts.push('<!--');
    parts.push(firstNotes.trim());
    parts.push('-->');
  }

  // Remaining slides
  for (let i = 1; i < deck.slides.length; i++) {
    parts.push('');
    parts.push(slideToFrontmatter(deck.slides[i], deck.config.defaults));
  }

  parts.push('');
  return parts.join('\n');
}

// Process a single deck
async function processDeck(deckPath) {
  const slidesTs = path.join(deckPath, 'slides.ts');
  const slidesMd = path.join(deckPath, 'slides.md');

  if (!fs.existsSync(slidesTs)) {
    return false;
  }

  // Dynamic import of TypeScript file (requires tsx or similar)
  const module = await import(slidesTs);
  const deck = module.deck;

  const markdown = generateMarkdown(deck);
  fs.writeFileSync(slidesMd, markdown);

  return true;
}

// Main
async function main() {
  const args = process.argv.slice(2);

  if (args.length > 0) {
    // Process specific deck
    const deckName = args[0];
    const deckPath = path.join(packagesDir, deckName);

    if (!fs.existsSync(deckPath)) {
      console.error(`Deck not found: ${deckName}`);
      process.exit(1);
    }

    const processed = await processDeck(deckPath);
    if (processed) {
      console.log(`Generated: packages/${deckName}/slides.md`);
    } else {
      console.log(`No slides.ts found in: ${deckName}`);
    }
  } else {
    // Process all decks
    const packages = fs.readdirSync(packagesDir);
    let count = 0;

    for (const pkg of packages) {
      if (pkg === 'theme-dify') continue;

      const deckPath = path.join(packagesDir, pkg);
      if (!fs.statSync(deckPath).isDirectory()) continue;

      const processed = await processDeck(deckPath);
      if (processed) {
        console.log(`Generated: packages/${pkg}/slides.md`);
        count++;
      }
    }

    console.log(`\nProcessed ${count} deck(s)`);
  }
}

main().catch(console.error);
