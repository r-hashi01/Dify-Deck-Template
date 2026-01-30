import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import {
  DIFY_BLUE,
  GRAY_100,
  GRAY_600,
  GRAY_800,
  BLACK,
  WHITE,
  addLogoToSlide,
  parseTextToPptx,
  captureVisualContent,
  addBottomOptionToSlide,
  LOGO_DEFAULT_PATH
} from './utils';

export async function convertStorySlide(
  slide: PptxGenJS.Slide,
  slideData: SlideData,
  options: ExportOptions,
  slideNumber: number,
  totalSlides: number
): Promise<void> {
  // PowerPoint 16:9 slide dimensions: 10" width x 5.625" height
  // Split layout: Left 50% (visual) + Right 50% (text)

  const leftWidth = 5; // 50% of 10"
  const rightWidth = 5; // 50% of 10"
  const rightX = 5;

  // === LEFT: VISUAL AREA ===
  // Gray background
  slide.addShape('rect', {
    x: 0,
    y: 0,
    w: leftWidth,
    h: 5.625,
    fill: { color: GRAY_100 },
    line: { color: GRAY_100, pt: 1 },
  });

  // Visual content if available
  const hasVisual = slideData.visualContent != null;
  if (hasVisual) {
    const imageData = await captureVisualContent(slideData.id);
    if (imageData) {
      slide.addImage({
        data: imageData,
        x: 0,
        y: 0,
        w: leftWidth,
        h: 5.625,
        sizing: { type: 'cover', w: leftWidth, h: 5.625 },
      });
    }
  }

  // === RIGHT: TEXT AREA ===
  // White background
  slide.addShape('rect', {
    x: rightX,
    y: 0,
    w: rightWidth,
    h: 5.625,
    fill: { color: WHITE },
    line: { type: 'none' },
  });

  const textPadding = 0.2;
  const textX = rightX + textPadding;
  const textWidth = rightWidth - textPadding;
  let textY = 1.0; // Vertically centered start

  // Title (Large, bold, Dify Blue)
  if (slideData.title) {
    slide.addText(parseTextToPptx(slideData.title), {
      x: textX,
      y: textY,
      w: textWidth,
      h: 0.8,
      fontSize: 40,
      bold: true,
      color: DIFY_BLUE,
      fontFace: 'Noto Sans JP',
      align: 'left',
      valign: 'top',
      lineSpacing: 44,
    });
    textY += 0.9;
  }

  // Subtitle (Medium, bold, gray-900)
  if (slideData.subtitle) {
    slide.addText(parseTextToPptx(slideData.subtitle), {
      x: textX,
      y: textY,
      w: textWidth,
      h: 0.6,
      fontSize: 20,
      bold: true,
      color: GRAY_800,
      fontFace: 'Noto Sans JP',
      align: 'left',
      valign: 'top',
      lineSpacing: 26,
    });
    textY += 0.7;
  }

  // Black horizontal line (decorative accent)
  slide.addShape('rect', {
    x: textX + 0.1,
    y: textY,
    w: 1.2,
    h: 0.08,
    fill: { color: BLACK },
    line: { type: 'none' },
  });
  textY += 0.3;

  // Content paragraphs (Serif style, gray-600)
  if (slideData.content && slideData.content.length > 0) {
    slideData.content.forEach((paragraph, idx) => {
      const parsedText = parseTextToPptx(paragraph);
      slide.addText(parsedText, {
        x: textX,
        y: textY,
        w: textWidth,
        h: 0.5,
        fontSize: 12,
        color: GRAY_600,
        fontFace: 'Georgia', // Serif font for story feel
        align: 'left',
        valign: 'top',
        lineSpacing: 22,
      });
      textY += 0.6;
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
