import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import {
  DIFY_BLUE,
  GRAY_50,
  GRAY_400,
  GRAY_500,
  WHITE,
  BLACK,
  addLogoToSlide,
  parseTextToPptx,
  addBottomOptionToSlide,
  LOGO_DEFAULT_PATH
} from './utils';

export function convertEndSlide(
  slide: PptxGenJS.Slide,
  slideData: SlideData,
  options: ExportOptions,
  slideNumber: number,
  totalSlides: number
): void {
  // Left side background (61.8%)
  slide.addShape('rect', {
    x: 0,
    y: 0,
    w: 6.18,
    h: 5.63,
    fill: { color: WHITE },
    line: { type: 'none' },
  });

  // Right side background (38.2%)
  slide.addShape('rect', {
    x: 6.18,
    y: 0,
    w: 3.82,
    h: 5.63,
    fill: { color: GRAY_50 },
    line: { type: 'none' },
  });

  // THANK YOU text
  slide.addText('THANK\nYOU', {
    x: 0.3,
    y: 1.4,
    w: 6,
    h: 2.5,
    fontSize: 115,
    bold: true,
    color: BLACK,
    fontFace: 'Noto Sans JP',
    align: 'left',
    valign: 'top',
    lineSpacing: 90,
  });

  // Blue accent bar - positioned under "YOU" with same width as "YOU"
  // Approximating "YOU" width at 115pt font size
  const youWidth = 1.1; // Width of "YOU" at 115pt
  slide.addShape('rect', {
    x: 0.4,
    y: 3.8, // Under "YOU"
    w: youWidth,
    h: 0.1,
    fill: { color: DIFY_BLUE },
    line: { type: 'none' },
  });

  // Subtitle
  if (slideData.subtitle) {
    slide.addText(parseTextToPptx(slideData.subtitle), {
      x: 0.3,
      y: 4.0,
      w: 5,
      h: 0.6,
      fontSize: 18,
      color: GRAY_500,
      fontFace: 'Noto Sans JP',
      align: 'left',
      valign: 'top',
    });
  }

  // Contact info on right side
  const footerParts = slideData.footer ? slideData.footer.split('|').map(s => s.trim()) : [];
  const emailPart = footerParts.find(p => p.toLowerCase().includes('email'));
  const githubPart = footerParts.find(p => p.toLowerCase().includes('github'));

  let contactY = 1.2;

  // Website
  slide.addText('WEBSITE', {
    x: 6.5,
    y: contactY,
    w: 3,
    h: 0.2,
    fontSize: 8,
    bold: true,
    color: GRAY_400,
    fontFace: 'Noto Sans JP',
  });
  slide.addText('dify.ai', {
    x: 6.5,
    y: contactY + 0.25,
    w: 3,
    h: 0.3,
    fontSize: 16,
    bold: true,
    color: BLACK,
    fontFace: 'Noto Sans JP',
  });
  contactY += 0.8;

  // Email
  if (emailPart) {
    const email = emailPart.split(':')[1]?.trim() || 'your.email@dify.ai';
    slide.addText('EMAIL', {
      x: 6.5,
      y: contactY,
      w: 3,
      h: 0.2,
      fontSize: 8,
      bold: true,
      color: GRAY_400,
      fontFace: 'Noto Sans JP',
    });
    slide.addText(email, {
      x: 6.5,
      y: contactY + 0.25,
      w: 3,
      h: 0.3,
      fontSize: 16,
      bold: true,
      color: BLACK,
      fontFace: 'Noto Sans JP',
    });
    contactY += 0.8;
  }

  // GitHub
  if (githubPart) {
    const github = githubPart.split(':')[1]?.trim() || 'YourGitHub';
    slide.addText('GITHUB', {
      x: 6.5,
      y: contactY,
      w: 3,
      h: 0.2,
      fontSize: 8,
      bold: true,
      color: GRAY_400,
      fontFace: 'Noto Sans JP',
    });
    slide.addText(github, {
      x: 6.5,
      y: contactY + 0.25,
      w: 3,
      h: 0.3,
      fontSize: 16,
      bold: true,
      color: BLACK,
      fontFace: 'Noto Sans JP',
    });
    contactY += 0.8;
  }

  // QR Code Placeholder
  const qrSize = 1.5;
  slide.addShape('rect', {
    x: 6.5,
    y: contactY,
    w: qrSize,
    h: qrSize,
    fill: { color: WHITE },
    line: { color: GRAY_400, pt: 1 },
  });

  // Inner placeholder box
  slide.addShape('rect', {
    x: 6.5 + 0.08,
    y: contactY + 0.08,
    w: qrSize - 0.16,
    h: qrSize - 0.16,
    fill: { color: GRAY_50 },
    line: { type: 'none' },
  });

  // "QR Code" text
  slide.addText('QR Code', {
    x: 6.5,
    y: contactY + qrSize / 2 - 0.1,
    w: qrSize,
    h: 0.2,
    fontSize: 10,
    color: GRAY_400,
    fontFace: 'Noto Sans JP',
    align: 'center',
    valign: 'middle',
  });

  // === OVERLAYS (Always visible on every slide) ===
  addBottomOptionToSlide(
    slide,
    options,
    slideNumber,
    totalSlides,
    false
  );

  // Add logo to top-right
  addLogoToSlide(slide, LOGO_DEFAULT_PATH);
}
