---
name: agent-browser
description: Browser automation for taking screenshots, comparing web pages, and visual testing. Use when comparing designs between localhost servers, debugging layouts, capturing visual state, or testing UI changes.
allowed-tools: Bash(agent-browser *)
---

# Agent Browser

Browser automation CLI for taking screenshots and comparing web pages.

## Quick Start

```bash
# Open a URL
agent-browser open http://localhost:3000/?deck=all-styles-en

# Take a screenshot
agent-browser screenshot screenshot.png

# Close browser
agent-browser close
```

## Common Workflows

### Compare Two Local Servers

```bash
# Capture React version (localhost:3000)
agent-browser open http://localhost:3000
agent-browser screenshot react-version.png
agent-browser close

# Capture Slidev version (localhost:3030)
agent-browser open http://localhost:3030
agent-browser screenshot slidev-version.png
agent-browser close
```

### Full Page Screenshot

```bash
agent-browser open http://localhost:3000
agent-browser screenshot --full fullpage.png
agent-browser close
```

### Set Custom Viewport

```bash
agent-browser open http://localhost:3000
agent-browser set viewport 1920 1080
agent-browser screenshot hd-screenshot.png
agent-browser close
```

### Navigate Between Slides

```bash
agent-browser open http://localhost:3030
agent-browser screenshot slide1.png
agent-browser press ArrowRight
agent-browser screenshot slide2.png
agent-browser close
```

## Commands Reference

| Command | Description |
|---------|-------------|
| `open <url>` | Navigate to URL |
| `screenshot [path]` | Take screenshot (default: temp file) |
| `screenshot --full [path]` | Full page screenshot |
| `set viewport <width> <height>` | Set browser viewport |
| `press <key>` | Press keyboard key (ArrowRight, ArrowLeft, etc.) |
| `click <selector>` | Click element |
| `snapshot` | Get accessibility tree with element refs |
| `close` | Close browser |

## After Capturing

Use the Read tool to view the captured PNG images and compare designs.
