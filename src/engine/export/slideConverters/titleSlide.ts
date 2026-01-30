import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import {
  DIFY_BLUE,
  GRAY_200,
  GRAY_400,
  GRAY_500,
  GRAY_600,
  BLACK,
  addLogoToSlide,
  parseTextToPptx,
  addBottomOptionToSlide,
  LOGO_DEFAULT_PATH
} from './utils';

export function convertTitleSlide(
  slide: PptxGenJS.Slide,
  slideData: SlideData,
  options: ExportOptions,
  slideNumber: number,
  totalSlides: number
): void {
  // PowerPoint 16:9 slide dimensions: 10" width x 5.625" height

  // Top blue accent bar (full width, thin) - matches browser h-4
  slide.addShape('rect', {
    x: 0,
    y: 0,
    w: 10,
    h: 0.15,
    fill: { color: DIFY_BLUE },
    line: { type: 'none' },
  });

  // Large padding - matches browser p-20 lg:p-24 (approx 80-96px = 1.1-1.3")
  const leftMargin = 0.4;
  const topMargin = 0.7;
  const rightMargin = 0.4;
  const contentWidth = 10 - leftMargin - rightMargin;

  // Content starts from top after blue bar and padding
  let currentY = topMargin;

  // Footer label (small box) - at top
  const footerText = slideData.footer || 'Product Primer';
  const labelBoxHeight = 0.25;
  const labelBoxWidth = 3.0;
  slide.addShape('rect', {
    x: leftMargin,
    y: currentY,
    w: labelBoxWidth,
    h: labelBoxHeight,
    fill: { type: 'none' },
    line: { color: BLACK, pt: 2 },
  });
  slide.addText(footerText.toUpperCase(), {
    x: leftMargin,
    y: currentY,
    w: labelBoxWidth,
    h: labelBoxHeight,
    fontSize: 9,
    bold: true,
    color: BLACK,
    fontFace: 'Noto Sans JP',
    align: 'center',
    valign: 'middle',
    charSpacing: 2,
  });
  currentY += labelBoxHeight + 0.2;

  // Main title (very large, bold, black) - matches browser text-8xl lg:text-9xl
  // Need larger height for text to render properly
  slide.addText(slideData.title.toUpperCase(), {
    x: leftMargin,
    y: currentY,
    w: contentWidth,
    h: 1.6,
    fontSize: 66,
    bold: true,
    color: BLACK,
    fontFace: 'Noto Sans JP',
    align: 'left',
    valign: 'top',
    lineSpacing: 62,
  });
  currentY += 1.6;

  // Blue underline accent - matches browser w-24 h-2
  slide.addShape('rect', {
    x: leftMargin + 0.15,
    y: currentY + 0.1,
    w: 0.6,
    h: 0.08,
    fill: { color: DIFY_BLUE },
    line: { type: 'none' },
  });
  currentY += 0.3;

  // Subtitle - matches browser text-3xl md:text-4xl
  if (slideData.subtitle) {
    slide.addText(parseTextToPptx(slideData.subtitle), {
      x: leftMargin,
      y: currentY,
      w: contentWidth,
      h: 1.0,
      fontSize: 16,
      color: GRAY_600,
      fontFace: 'Noto Sans JP',
      align: 'left',
      valign: 'top',
      lineSpacing: 28,
    });
  }

  // Bottom section - positioned at bottom with border-top
  // Slide height is 5.625", position footer section starting at y=4.3
  // TEST: temporarily move to middle of slide for visibility test
  const footerStartY = 4.0;

  slide.addShape('line', {
    x: leftMargin,
    y: footerStartY,
    w: contentWidth,
    h: 0,
    line: { color: GRAY_200, pt: 2 },
  });

  // Footer text - from options
  const tagline = options.tagline || 'Solutions & Customer Success';
  const description = options.description || 'Infrastructure for Intuitive LLM App Development';

  slide.addText(tagline, {
    x: leftMargin,
    y: footerStartY + 0.2,
    w: 6,
    h: 0.3,
    fontSize: 14,
    bold: true,
    color: DIFY_BLUE,
    fontFace: 'Noto Sans JP',
    align: 'left',
    valign: 'top',
  });

  slide.addText(description, {
    x: leftMargin,
    y: footerStartY + 0.55,
    w: 6,
    h: 0.25,
    fontSize: 10,
    color: GRAY_500,
    fontFace: 'Noto Sans JP',
    align: 'left',
    valign: 'top',
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
