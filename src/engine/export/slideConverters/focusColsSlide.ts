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
  WHITE,
  addLogoToSlide,
  parseTextToPptx,
  addBottomOptionToSlide,
  LOGO_DEFAULT_PATH
} from './utils';

export function convertFocusColsSlide(
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

  // === HEADER SECTION ===
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
  currentY += 0.5;

  // === TWO-COLUMN LAYOUT ===
  if (slideData.items && slideData.items.length > 0) {
    const heroItem = slideData.items[0];
    const listItems = slideData.items.slice(1);

    const leftColX = leftMargin;
    const leftColWidth = contentWidth * 0.42; // Left: 42%
    const rightColX = leftColX + leftColWidth + 0.4; // 0.4" gap
    const rightColWidth = contentWidth - leftColWidth - 0.4;

    // LEFT: Hero/Positioning
    let leftY = currentY;

    slide.addShape('ellipse', {
      x: leftColX + 0.1,
      y: leftY + 0.05,
      w: 0.15,
      h: 0.15,
      fill: { color: DIFY_BLUE }, // Light blue (sky-100)
      line: { type: 'none' },
    });

    // POSITIONING label 
    slide.addText('POSITIONING', {
      x: leftColX,
      y: leftY,
      w: 1.8,
      h: 0.3,
      fontSize: 9,
      bold: true,
      color: DIFY_BLUE,
      fontFace: 'Noto Sans JP',
      align: 'center',
      valign: 'middle',
      charSpacing: 2,
    });

    leftY += 0.5;

    // Hero title (large, bold)
    slide.addText(parseTextToPptx(heroItem.title), {
      x: leftColX,
      y: leftY,
      w: leftColWidth,
      h: 1.2,
      fontSize: 24,
      bold: true,
      color: GRAY_800,
      fontFace: 'Noto Sans JP',
      align: 'left',
      valign: 'top',
      lineSpacing: 28,
    });

    leftY += 0.5;

    // Hero description
    if (heroItem.description) {
      slide.addText(parseTextToPptx(heroItem.description), {
        x: leftColX,
        y: leftY,
        w: leftColWidth,
        h: 0.8,
        fontSize: 14,
        color: GRAY_600,
        fontFace: 'Noto Sans JP',
        align: 'left',
        valign: 'top',
        lineSpacing: 20,
      });
    }

    // RIGHT: List items (detail cards)
    let rightY = currentY;
    const itemGap = 0.2;
    const availableHeight = 5.625 - rightY - 0.5;
    const itemHeight = listItems.length > 0
      ? Math.min((availableHeight - itemGap * (listItems.length - 1)) / listItems.length, 0.85)
      : 0.85;

    listItems.forEach((item, index) => {
      const y = rightY + index * (itemHeight + itemGap);

      // Card background with rounded corners
      slide.addShape('roundRect', {
        x: rightColX,
        y: y,
        w: rightColWidth,
        h: itemHeight,
        fill: { color: WHITE },
        line: { color: DIFY_BLUE, pt: 1 },
        shadow: {
          type: 'outer',
          blur: 8,
          offset: 2,
          angle: 90,
          color: '000000',
          opacity: 0.08,
        },
      });

      const cardPadding = 0.2;

      // Icon placeholder (left side) - light blue circle
      slide.addShape('ellipse', {
        x: rightColX + cardPadding,
        y: y + cardPadding,
        w: 0.2,
        h: 0.2,
        fill: { color: 'E0F2FE' }, // Light blue (sky-100)
        line: { type: 'none' },
      });

      // Title
      slide.addText(parseTextToPptx(item.title), {
        x: rightColX + cardPadding + 0.2,
        y: y + 0.15,
        w: rightColWidth - cardPadding - 0.45,
        h: 0.25,
        fontSize: 14,
        bold: true,
        color: DIFY_BLUE,
        fontFace: 'Noto Sans JP',
        align: 'left',
        valign: 'top',
      });

      // Description
      if (item.description) {
        slide.addText(parseTextToPptx(item.description), {
          x: rightColX + cardPadding + 0.2,
          y: y + cardPadding + 0.2,
          w: rightColWidth - cardPadding - 0.45,
          h: itemHeight - cardPadding * 2 - 0.3,
          fontSize: 12,
          color: GRAY_600,
          fontFace: 'Noto Sans JP',
          align: 'left',
          valign: 'top',
          lineSpacing: 16,
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
