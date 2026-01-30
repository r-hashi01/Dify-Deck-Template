import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import {
  DIFY_BLUE,
  GRAY_100,
  GRAY_200,
  GRAY_400,
  GRAY_500,
  GRAY_600,
  GRAY_800,
  WHITE,
  addLogoToSlide,
  parseTextToPptx,
  addBottomOptionToSlide,
  LOGO_DEFAULT_PATH
} from './utils';

export async function convertPresenterSlide(
  slide: PptxGenJS.Slide,
  slideData: SlideData,
  options: ExportOptions,
  slideNumber: number,
  totalSlides: number
): Promise<void> {
  // PowerPoint 16:9 slide dimensions: 10" width x 5.625" height
  const leftMargin = 0.8;
  const rightMargin = 0.8;
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
    currentY += 0.6;
  }

  // Subtitle with left border - matches browser SlideHeader
  if (slideData.subtitle) {
    // Left bar: 0.76cm (0.3") height, 0.1cm (0.04") width
    slide.addShape('rect', {
      x: leftMargin,
      y: currentY,
      w: 0.04, // 0.1cm
      h: 0.3,  // 0.76cm
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

  // Divider line
  slide.addShape('line', {
    x: leftMargin,
    y: currentY,
    w: contentWidth,
    h: 0,
    line: { color: GRAY_200, pt: 1 },
  });
  currentY += 0.3;

  // Two-column layout: Left (5/12) + Right (7/12)
  const leftColX = leftMargin;
  const leftColWidth = contentWidth * 0.35; // Left column: 35%
  const rightColX = leftColX + leftColWidth + 0.2; // 0.2" gap
  const rightColWidth = contentWidth - leftColWidth - 0.2; // Right column: wider
  const contentStartY = currentY;

  // Left: Bio bullets
  if (slideData.content && slideData.content.length > 0) {
    let bulletY = contentStartY;

    slideData.content
      .filter(item => item.trim().length > 0)
      .forEach((item, index) => {
        const text = item.trim();

        // Check for **Title** pattern (bold title with no description)
        const titleMatch = text.match(/^\*\*(.+?)\*\*$/);

        if (titleMatch && index === 0) {
          // First item as big title (like **Your Name**)
          slide.addText(titleMatch[1], {
            x: leftColX,
            y: bulletY,
            w: leftColWidth,
            h: 0.5,
            fontSize: 20,
            bold: true,
            color: GRAY_800,
            fontFace: 'Noto Sans JP',
            align: 'left',
            valign: 'top',
            lineSpacing: 26,
          });
          bulletY += 0.6;
        } else {
          // Regular bullet item
          const parsedText = parseTextToPptx(text);

          const bulletSymbol = '■';
          slide.addText(bulletSymbol, {
            x: leftColX,
            y: bulletY, // Offset bullet down slightly to align with text
            w: 0.3,
            h: 0.3,
            fontSize: 8,
            color: DIFY_BLUE,
            fontFace: 'Noto Sans JP',
            align: 'left',
            valign: 'top',
          });

          slide.addText(parsedText, {
            x: leftColX + 0.2,
            y: bulletY - 0.07,
            w: leftColWidth,
            h: 0.35,
            fontSize: 13,
            color: GRAY_800,
            fontFace: 'Noto Sans JP',
            lineSpacing: 20,
          });
          bulletY += 0.4;
        }
      });
  }

  // Right: Contact card with shadow and rounded corners effect
  const cardY = contentStartY;
  const cardHeight = 3.0; // Reduced height to avoid footer overlap

  // Card background with shadow for depth
  slide.addShape('rect', {
    x: rightColX,
    y: cardY,
    w: rightColWidth,
    h: cardHeight,
    fill: { color: WHITE },
    line: { color: GRAY_100, pt: 1 },
    shadow: {
      type: 'outer',
      blur: 15,
      offset: 3,
      angle: 90,
      color: '000000',
      opacity: 0.15,
    },
  });

  // Card header - small text at top left
  slide.addText('Contact Information', {
    x: rightColX + 0.3,
    y: cardY + 0.3,
    w: rightColWidth - 0.6,
    h: 0.25,
    fontSize: 11,
    bold: true,
    color: GRAY_600,
    fontFace: 'Noto Sans JP',
    align: 'left',
    valign: 'top',
  });

  // Card content placeholder
  slide.addText('[Details from visualContent]', {
    x: rightColX + 0.3,
    y: cardY + 0.7,
    w: rightColWidth - 0.6,
    h: 2.0,
    fontSize: 11,
    color: GRAY_500,
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
