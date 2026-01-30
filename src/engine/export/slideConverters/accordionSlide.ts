import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import {
  DIFY_BLUE,
  GRAY_50,
  GRAY_100,
  GRAY_200,
  GRAY_400,
  GRAY_500,
  GRAY_600,
  WHITE,
  addLogoToSlide,
  parseTextToPptx,
  addBottomOptionToSlide,
  LOGO_DEFAULT_PATH
} from './utils';

export function convertAccordionSlide(
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
  currentY += 0.3;

  // === ACCORDION ITEMS ===
  if (slideData.items && slideData.items.length > 0) {
    const itemGap = 0.15;
    const maxItemHeight = 0.95; // Maximum height per item
    const availableHeight = 5.625 - currentY - 0.5; // Leave space for overlays
    const calculatedItemHeight = Math.min(
      (availableHeight - itemGap * (slideData.items.length - 1)) / slideData.items.length,
      maxItemHeight
    );

    slideData.items.forEach((item, index) => {
      const y = currentY + index * (calculatedItemHeight + itemGap);

      // Card background with shadow
      slide.addShape('rect', {
        x: leftMargin,
        y: y,
        w: contentWidth,
        h: calculatedItemHeight,
        fill: { color: WHITE },
        line: { color: GRAY_100, pt: 1 },
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

      // Logo placeholder (left side) - matches browser 56px (approx 0.58")
      slide.addShape('rect', {
        x: leftMargin + cardPadding,
        y: y + cardPadding,
        w: 0.45,
        h: 0.45,
        fill: { color: GRAY_50 },
        line: { color: GRAY_100, pt: 1 },
      });

      // Initial letter as placeholder
      slide.addText(item.title.charAt(0).toUpperCase(), {
        x: leftMargin + cardPadding,
        y: y + cardPadding,
        w: 0.45,
        h: 0.45,
        fontSize: 20,
        bold: true,
        color: GRAY_400,
        fontFace: 'Noto Sans JP',
        align: 'center',
        valign: 'middle',
      });

      // Title (right of logo)
      slide.addText(parseTextToPptx(item.title), {
        x: leftMargin + cardPadding + 0.6,
        y: y + cardPadding,
        w: contentWidth - 0.6 - cardPadding * 2,
        h: 0.25,
        fontSize: 15,
        bold: true,
        color: DIFY_BLUE,
        fontFace: 'Noto Sans JP',
        align: 'left',
        valign: 'top',
      });

      // Description with left blue border (expanded state)
      if (item.description) {
        const descY = y + cardPadding + 0.4;
        const descHeight = calculatedItemHeight - cardPadding * 2 - 0.3;

        // Left blue border
        slide.addShape('rect', {
          x: leftMargin + cardPadding + 0.7,
          y: descY,
          w: 0.04,
          h: descHeight,
          fill: { color: DIFY_BLUE },
          line: { type: 'none' },
        });

        // Description text
        slide.addText(parseTextToPptx(item.description), {
          x: leftMargin + cardPadding + 0.8,
          y: descY - 0.06,
          w: contentWidth - 0.8 - cardPadding * 2,
          h: descHeight,
          fontSize: 12,
          color: GRAY_600,
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
