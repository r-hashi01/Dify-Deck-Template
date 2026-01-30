import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import {
  DIFY_BLUE,
  GRAY_50,
  GRAY_200,
  GRAY_400,
  GRAY_500,
  GRAY_600,
  GRAY_800,
  addLogoToSlide,
  parseTextToPptx,
  captureVisualContent,
  addBottomOptionToSlide,
  LOGO_DEFAULT_PATH
} from './utils';

export async function convertSplitSlide(
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

  // Divider line
  slide.addShape('line', {
    x: leftMargin,
    y: currentY,
    w: contentWidth,
    h: 0,
    line: { color: GRAY_200, pt: 1 },
  });
  currentY += 0.3;

  // Two-column layout: Left (bullets) + Right (visual)
  const leftColX = leftMargin;
  const leftColWidth = contentWidth * 0.45; // Left column: 45%
  const rightColX = leftColX + leftColWidth + 0.3; // 0.3" gap
  const rightColWidth = contentWidth - leftColWidth - 0.3;
  const contentStartY = currentY;

  // Left: Content bullets
  if (slideData.content && slideData.content.length > 0) {
    let bulletY = contentStartY;

    slideData.content
      .filter(item => item.trim().length > 0)
      .forEach((item, index) => {
        const text = item.trim();

        // Check for **Title** pattern (bold title)
        const titleMatch = text.match(/^\*\*(.+?)\*\*$/);

        if (titleMatch && index === 0) {
          // First item as big title
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
          // Regular bullet item with Dify Blue bullet
          const bulletSymbol = '■';
          slide.addText(bulletSymbol, {
            x: leftColX,
            y: bulletY + 0.07, // Offset bullet down slightly to align with text
            w: 0.3,
            h: 0.3,
            fontSize: 10,
            color: DIFY_BLUE,
            fontFace: 'Noto Sans JP',
            align: 'left',
            valign: 'top',
          });

          const parsedText = parseTextToPptx(text);
          slide.addText(parsedText, {
            x: leftColX + 0.35,
            y: bulletY + 0.03,
            w: leftColWidth - 0.35,
            h: 0.4, // Narrower height
            fontSize: 16,
            color: GRAY_800,
            fontFace: 'Noto Sans JP',
            align: 'left',
            valign: 'top',
            lineSpacing: 18,
          });

          bulletY += 0.5; // Reduced spacing
        }
      });
  }

  // Right: Visual content area
  const hasVisual = slideData.visualContent != null;
  if (hasVisual) {
    const visualHeight = 3;
    const imageData = await captureVisualContent(slideData.id);

    if (imageData) {
      slide.addImage({
        data: imageData,
        x: rightColX,
        y: contentStartY,
        w: rightColWidth,
        h: visualHeight,
        sizing: { type: 'contain', w: rightColWidth, h: visualHeight },
      });
    } else {
      // Placeholder with border
      slide.addShape('rect', {
        x: rightColX,
        y: contentStartY,
        w: rightColWidth,
        h: visualHeight,
        fill: { color: GRAY_50 },
        line: { color: GRAY_200, pt: 1 },
      });
      slide.addText('[Visual Component Area]', {
        x: rightColX,
        y: contentStartY + visualHeight / 2 - 0.2,
        w: rightColWidth,
        h: 0.4,
        fontSize: 12,
        color: GRAY_400,
        fontFace: 'Noto Sans JP',
        align: 'center',
        valign: 'middle',
      });
    }
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
