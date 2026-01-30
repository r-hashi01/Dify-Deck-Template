import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import {
  DIFY_BLUE,
  GRAY_200,
  GRAY_400,
  GRAY_500,
  GRAY_600,
  addLogoToSlide,
  parseTextToPptx,
  addBottomOptionToSlide,
  LOGO_DEFAULT_PATH
} from './utils';

export function convertFAQSlide(
  slide: PptxGenJS.Slide,
  slideData: SlideData,
  options: ExportOptions,
  slideNumber: number,
  totalSlides: number
): void {
  // PowerPoint 16:9 slide dimensions: 10" width x 5.625" height
  const leftMargin = 0.8;
  const rightMargin = 0.8;
  const topMargin = 0.6;
  const contentWidth = 10 - leftMargin - rightMargin;

  let currentY = topMargin;

  // Title - matches browser SlideHeader
  if (slideData.title) {
    slide.addShape('rect', {
      x: leftMargin,
      y: currentY,
      w: 0.08,
      h: 0.4,
      fill: { color: DIFY_BLUE },
      line: { type: 'none' },
    });
    slide.addText(parseTextToPptx(slideData.title), {
      x: leftMargin + 0.1,
      y: currentY - 0.05,
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
  currentY += 0.3;

  // === FAQ ITEMS (2-column grid) ===
  if (slideData.items && slideData.items.length > 0) {
    const columnGap = 0.6;
    const columnWidth = (contentWidth - columnGap) / 2;
    const leftColX = leftMargin;
    const rightColX = leftMargin + columnWidth + columnGap;

    // Calculate items per column
    const totalItems = slideData.items.length;
    const itemsPerColumn = Math.ceil(totalItems / 2);

    // Calculate available height and item spacing
    const availableHeight = 5.625 - currentY - 0.5;
    const itemGap = 0.3;
    const itemHeight = Math.min(
      (availableHeight - itemGap * (itemsPerColumn - 1)) / itemsPerColumn,
      1.2
    );

    slideData.items.forEach((item, index) => {
      const columnIndex = Math.floor(index / itemsPerColumn);
      const rowIndex = index % itemsPerColumn;
      const x = columnIndex === 0 ? leftColX : rightColX;
      const y = currentY + rowIndex * (itemHeight + itemGap);

      // Left blue bar (vertical accent)
      slide.addShape('rect', {
        x: x,
        y: y,
        w: 0.08,
        h: itemHeight,
        fill: { color: '2563EB' }, // blue-600
        line: { type: 'none' },
      });

      const contentX = x + 0.2;
      const contentWidth = columnWidth - 0.2;

      // Question (bold, blue-800)
      slide.addText(parseTextToPptx(item.title), {
        x: contentX,
        y: y,
        w: contentWidth,
        h: 0.3,
        fontSize: 14,
        bold: true,
        color: '1E40AF', // blue-800
        fontFace: 'Noto Sans JP',
        align: 'left',
        valign: 'top',
      });

      // Answer (normal, gray-700)
      if (item.description) {
        slide.addText(parseTextToPptx(item.description), {
          x: contentX,
          y: y + 0.35,
          w: contentWidth,
          h: itemHeight - 0.4,
          fontSize: 12,
          color: '374151', // gray-700
          fontFace: 'Noto Sans JP',
          align: 'left',
          valign: 'top',
          lineSpacing: 18,
        });
      }
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
