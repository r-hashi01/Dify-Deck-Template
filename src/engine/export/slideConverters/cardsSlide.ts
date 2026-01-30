import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import {
  DIFY_BLUE,
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

export function convertCardsSlide(
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

  // Cards
  if (slideData.items && slideData.items.length > 0) {
    const startY = currentY;
    const cardsPerRow = 2;
    const cardWidth = 4.3;
    const cardHeight = 1.3;
    const gapX = 0.4;
    const gapY = 0.3;

    slideData.items.forEach((item, index) => {
      const row = Math.floor(index / cardsPerRow);
      const col = index % cardsPerRow;
      const x = leftMargin + col * (cardWidth + gapX);
      const y = startY + row * (cardHeight + gapY);

      // Card background
      slide.addShape('rect', {
        x,
        y,
        w: cardWidth,
        h: cardHeight,
        fill: { color: WHITE },
        line: { color: GRAY_200, pt: 1 },
        shadow: {
          type: 'outer',
          blur: 15,
          offset: 3,
          angle: 90,
          color: '000000',
          opacity: 0.15,
        },
      });

      // Card title
      slide.addText(parseTextToPptx(item.title), {
        x: x + 0.2,
        y: y + 0.15,
        w: cardWidth - 0.4,
        h: 0.4,
        fontSize: 15,
        bold: true,
        color: DIFY_BLUE,
      });

      // Card description
      if (item.description) {
        slide.addText(parseTextToPptx(item.description), {
          x: x + 0.2,
          y: y + 0.6,
          w: cardWidth - 0.4,
          h: 0.5,
          fontSize: 11,
          color: GRAY_600,
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
