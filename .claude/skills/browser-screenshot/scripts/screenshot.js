#!/usr/bin/env node

const puppeteer = require('puppeteer');
const path = require('path');

async function takeScreenshot(url, outputPath = 'screenshot.png') {
  console.log(`Capturing screenshot of: ${url}`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // Set viewport to common presentation size
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2
    });

    // Navigate to URL with timeout
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Wait a bit for any animations to settle
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Take screenshot
    const absolutePath = path.resolve(outputPath);
    await page.screenshot({
      path: absolutePath,
      fullPage: false
    });

    console.log(`Screenshot saved to: ${absolutePath}`);
    return absolutePath;

  } finally {
    await browser.close();
  }
}

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: screenshot.js <url> [output-path]');
  console.log('Example: screenshot.js http://localhost:3000 screenshot.png');
  process.exit(1);
}

const url = args[0];
const outputPath = args[1] || 'screenshot.png';

takeScreenshot(url, outputPath)
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
  });
