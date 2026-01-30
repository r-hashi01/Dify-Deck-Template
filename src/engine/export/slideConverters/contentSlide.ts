import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import {
  DIFY_BLUE,
  GRAY_200,
  GRAY_400,
  GRAY_500,
  GRAY_600,
  GRAY_800,
  addLogoToSlide,
  parseTextToPptx,
  addBottomOptionToSlide,
  LOGO_DEFAULT_PATH
} from './utils';

export function convertContentSlide(
  slide: PptxGenJS.Slide,
  slideData: SlideData,
  options: ExportOptions,
  slideNumber: number,
  totalSlides: number
): void {
  // PowerPoint 16:9 slide dimensions: 10" width x 5.625" height
  const leftMargin = 0.8;
  const rightMargin = 0.6;
  const topMargin = 0.6;
  const contentWidth = 10 - leftMargin - rightMargin;

  let currentY = topMargin;

  // Title - matches browser SlideHeader
  if (slideData.title) {
    slide.addText(parseTextToPptx(slideData.title), {
      x: leftMargin,
      y: currentY,
      w: contentWidth,
      h: 0.5,
      fontSize: 28,
      bold: true,
      color: DIFY_BLUE,
      fontFace: 'Noto Sans JP',
      align: 'left',
      valign: 'top',
    });
    currentY += 0.5;
  }

  // Subtitle with left border - matches browser SlideHeader
  if (slideData.subtitle) {
    // Left bar: 0.76cm (0.3") height, 0.1cm (0.04") width
    slide.addShape('rect', {
      x: leftMargin,
      y: currentY,
      w: 0.04,
      h: 0.3,
      fill: { color: DIFY_BLUE },
      line: { type: 'none' },
    });

    slide.addText(parseTextToPptx(slideData.subtitle), {
      x: leftMargin + 0.15,
      y: currentY,
      w: contentWidth - 0.15,
      h: 0.3,
      fontSize: 14,
      color: GRAY_600,
      fontFace: 'Noto Sans JP',
      align: 'left',
      valign: 'middle',
    });
    currentY += 0.5;
  }

  // Horizontal divider
  slide.addShape('line', {
    x: leftMargin,
    y: currentY,
    w: contentWidth,
    h: 0,
    line: { color: GRAY_200, pt: 1 },
  });
  currentY += 0.1; // Reduced spacing after divider (moved body up by ~0.2")

  // Content bullets
  if (slideData.content && slideData.content.length > 0) {
    const itemCount = slideData.content.filter(i => i.trim().length > 0).length;
    const isDense = itemCount > 6;
    const fontSize = 18;

    slideData.content
      .filter(item => item.trim().length > 0)
      .forEach(item => {
        const isSubBullet = item.startsWith('  ');
        const text = item.trim();

        const bulletX = isSubBullet ? leftMargin + 0.3 : leftMargin - 0.1;

        // Add custom bullet point in Dify Blue
        const bulletSymbol = isSubBullet ? '●' : '■';
        slide.addText(bulletSymbol, {
          x: bulletX,
          y: currentY + 0.1, // Offset bullet down slightly to align with text
          w: 0.3,
          h: 0.3,
          fontSize: isSubBullet ? 8 : 10,
          color: DIFY_BLUE, // Bullet in Dify Blue
          fontFace: 'Noto Sans JP',
          align: 'left',
          valign: 'top',
        });

        // Add text content
        const parsedText = parseTextToPptx(text);
        slide.addText(parsedText, {
          x: bulletX + 0.25,
          y: currentY,
          w: isSubBullet ? contentWidth - 0.75 : contentWidth - 0.35,
          h: 0.7, // Increased height for multi-line text
          fontSize: isSubBullet ? 16 : fontSize,
          color: isSubBullet ? GRAY_600 : GRAY_800,
          fontFace: 'Noto Sans JP',
          align: 'left',
          valign: 'top',
          lineSpacing: 28, // Reduced line spacing within paragraphs
        });

        currentY += isDense ? 0.3 : 0.4;
      });
  }

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
