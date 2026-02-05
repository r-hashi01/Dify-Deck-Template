// Markdown Generator for Dify Deck
import type { Deck, Slide, BaseSlideProps } from './types';

function toYamlValue(value: unknown, indent = 0): string {
  const spaces = '  '.repeat(indent);

  if (value === null || value === undefined) {
    return '';
  }

  if (typeof value === 'string') {
    // Check if string needs quoting
    // * is YAML alias reference, so needs quoting
    if (value.includes('\n') || value.includes(':') || value.includes('#') ||
        value.includes("'") || value.includes('"') || value.startsWith(' ') ||
        value.includes('*')) {
      // Escape special characters for YAML double-quoted strings
      const escaped = value
        .replace(/\\/g, '\\\\')  // Escape backslashes first
        .replace(/"/g, '\\"')    // Escape double quotes
        .replace(/\n/g, '\\n')   // Escape newlines
        .replace(/\r/g, '\\r')   // Escape carriage returns
        .replace(/\t/g, '\\t');  // Escape tabs
      return `"${escaped}"`;
    }
    return value;
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';

    // Check if array of primitives or objects
    if (typeof value[0] === 'object' && value[0] !== null) {
      // Array of objects
      return '\n' + value.map(item => {
        const lines = Object.entries(item)
          .filter(([_, v]) => v !== undefined)
          .map(([k, v], i) => {
            const prefix = i === 0 ? `${spaces}  - ` : `${spaces}    `;
            if (Array.isArray(v)) {
              return `${prefix}${k}:\n${(v as string[]).map(x => `${spaces}      - ${toYamlValue(x)}`).join('\n')}`;
            }
            return `${prefix}${k}: ${toYamlValue(v)}`;
          });
        return lines.join('\n');
      }).join('\n');
    } else {
      // Array of primitives
      return '\n' + value.map(item => `${spaces}  - ${toYamlValue(item)}`).join('\n');
    }
  }

  return String(value);
}

function slideToFrontmatter(slide: Slide, defaults?: BaseSlideProps): string {
  const { slot, ...props } = slide as Slide & { slot?: string };

  // Merge with defaults, slide props take precedence
  const mergedProps = { ...defaults, ...props };

  const lines: string[] = ['---'];

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

  // Add slot content if present
  if (slot) {
    lines.push('');
    lines.push(slot);
  }

  return lines.join('\n');
}

export function generateMarkdown(deck: Deck): string {
  const parts: string[] = [];

  // Global frontmatter
  parts.push('---');
  parts.push(`theme: ${deck.config.theme || '../theme-dify'}`);
  parts.push(`title: "${deck.config.title}"`);
  parts.push('---');
  parts.push('');

  // Generate each slide
  for (const slide of deck.slides) {
    parts.push(slideToFrontmatter(slide, deck.config.defaults));
    parts.push('');
  }

  return parts.join('\n');
}

// CLI support
export async function generateFromFile(inputPath: string, outputPath: string): Promise<void> {
  const { deck } = await import(inputPath);
  const markdown = generateMarkdown(deck);

  const fs = await import('fs');
  fs.writeFileSync(outputPath, markdown);
  console.log(`Generated: ${outputPath}`);
}
