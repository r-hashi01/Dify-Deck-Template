---
name: browser-screenshot
description: Take screenshots of web pages at specified URLs. Use when comparing designs, debugging layouts, or capturing visual state of local development servers.
allowed-tools: Bash(node *), Bash(npx *)
---

# Browser Screenshot

Take screenshots of web pages using Puppeteer.

## Usage

To capture a screenshot of a URL:

```bash
node ~/.claude/skills/browser-screenshot/scripts/screenshot.js <url> [output-path]
```

### Examples

```bash
# Single screenshot
node ~/.claude/skills/browser-screenshot/scripts/screenshot.js http://localhost:3000 screenshot.png

# Compare two pages side by side
node ~/.claude/skills/browser-screenshot/scripts/screenshot.js http://localhost:3000 react-version.png
node ~/.claude/skills/browser-screenshot/scripts/screenshot.js http://localhost:3030 slidev-version.png
```

## First-time Setup

If puppeteer is not installed globally, install it first:

```bash
npm install -g puppeteer
```

## Output

Screenshots are saved as PNG files. Default output path is `screenshot.png` in the current directory.

After capturing, use the Read tool to view the screenshot image.
