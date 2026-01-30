import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import { DIFY_BLUE, WHITE, BLACK, addLogoToSlide, parseTextToPptx, addBottomOptionToSlide, LOGO_DARK_PATH } from './utils';

export function convertMacroFocusSlide(
  slide: PptxGenJS.Slide, 
  slideData: SlideData,
  options: ExportOptions,
  slideNumber: number,
  totalSlides: number
): void {
  // Black background - matches browser bg-black
  slide.background = { color: BLACK };

  // Content positioned vertically centered
  const contentStartY = 0.5;

  // Blue accent line (centered, above title) - matches browser w-24 h-1
  slide.addShape('rect', {
    x: 4.4,
    y: contentStartY,
    w: 1.2,
    h: 0.04,
    fill: { color: DIFY_BLUE },
    line: { type: 'none' },
  });

  // Main title (large, bold, centered) - matches browser text-4xl~7xl
  slide.addText(parseTextToPptx(slideData.title), {
    x: 1,
    y: contentStartY + 0.1,
    w: 8,
    h: 1.2,
    fontSize: 44,
    bold: true,
    color: WHITE,
    fontFace: 'Noto Sans JP',
    align: 'center',
    valign: 'middle',
    lineSpacing: 48,
  });

  // Content boxes with checkmarks - matches browser grid
  if (slideData.content && slideData.content.length > 0) {
    const startY = contentStartY + 1.5;
    const boxHeight = 0.65;
    const gap = 0.18;
    const boxWidth = 7;
    const boxX = (10 - boxWidth) / 2; // Center horizontally

    slideData.content.forEach((item, index) => {
      const y = startY + index * (boxHeight + gap);

      // Box background (semi-transparent white)
      slide.addShape('rect', {
        x: boxX,
        y: y,
        w: boxWidth,
        h: boxHeight,
        fill: { color: WHITE, transparency: 95 },
        line: { type: 'none' },
      });

      // Left blue border
      slide.addShape('line', {
        x: boxX,
        y: y,
        w: 0,
        h: boxHeight,
        line: { color: DIFY_BLUE, pt: 4 },
      });

      // Checkmark (using ✓ symbol)
      slide.addText('✓', {
        x: boxX + 0.2,
        y: y + 0.08,
        w: 0.4,
        h: 0.45,
        fontSize: 20,
        bold: true,
        color: DIFY_BLUE,
        fontFace: 'Noto Sans JP',
        align: 'center',
        valign: 'middle',
      });

      // Text content
      slide.addText(parseTextToPptx(item), {
        x: boxX + 0.7,
        y: y + 0.08,
        w: boxWidth - 0.9,
        h: 0.5,
        fontSize: 15,
        color: WHITE,
        fontFace: 'Noto Sans JP',
        align: 'left',
        valign: 'middle',
        transparency: 10,
        lineSpacing: 20,
      });
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

  // Add logo to top-right (white version for dark background)
  addLogoToSlide(slide, LOGO_DARK_PATH);
}
