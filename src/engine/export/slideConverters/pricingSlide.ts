import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import {
  RED,
  DIFY_BLUE,
  GRAY_200,
  GRAY_400,
  GRAY_500,
  GRAY_600,
  GRAY_800,
  WHITE,
  BLACK,
  addLogoToSlide,
  parseTextToPptx,
  addBottomOptionToSlide,
  LOGO_DEFAULT_PATH
} from './utils';

export function convertPricingSlide(
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
    slide.addText(parseTextToPptx(slideData.subtitle), {
      x: leftMargin + 3.0,
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

  // === PRICING CARDS ===
  if (slideData.items && slideData.items.length > 0) {
    const cardGap = 0.2;
    const cardWidth = (contentWidth - 2.0 - cardGap * (slideData.items.length - 1)) / slideData.items.length;
    const cardHeight = 2.0;
    const cardStartY = currentY;

    slideData.items.forEach((item, index) => {
      const x = leftMargin + index * (cardWidth + cardGap);

      // Card background with shadow (added first to be behind)
      slide.addShape('roundRect', {
        x,
        y: cardStartY,
        w: cardWidth,
        h: cardHeight,
        fill: { color: WHITE },
        line: { color: GRAY_200, pt: 1 },
        rectRadius: 0.06,
        shadow: {
          type: 'outer',
          blur: 8,
          offset: 2,
          angle: 90,
          color: '000000',
          opacity: 0.08,
        },
      });

      // Top colored bar (added second to be in front)
      slide.addShape('roundRect', {
        x,
        y: cardStartY,
        w: cardWidth,
        h: 0.08,
        fill: { color: item.topBarColor || DIFY_BLUE },
        line: { type: 'none' },
        rectRadius: 0.1
      });

      let itemY = cardStartY + 0.25;
      const cardPadding = 0.05;

      let titleX = x - cardWidth / 4;

      // Badge
      if (item.badge) {
        slide.addShape('roundRect', {
          x: titleX + cardWidth - 0.2,
          y: cardStartY - 0.1,
          w: 0.7,
          h: 0.2,
          fill: { color: RED },
          rectRadius: 0.06,
          rotate: 10
        });

        slide.addText(item.badge, {
          x: titleX + cardWidth - 0.3,
          y: cardStartY - 0.1,
          w: 1.0,
          h: 0.2,
          fontSize: 8,
          bold: true,
          color: WHITE,
          fontFace: 'Noto Sans JP',
          align: 'center',
          valign: 'middle',
          rotate: 10
        });
        titleX += 0.0;
      }

      // Title
      slide.addText(parseTextToPptx(item.title), {
        x: titleX,
        y: itemY,
        w: cardWidth - cardPadding * 2,
        h: 0.35,
        fontSize: 14,
        bold: true,
        color: DIFY_BLUE,
        fontFace: 'Noto Sans JP',
        align: 'center',
        valign: 'middle',
      });
      itemY += 0.45;

      // Price
      if (item.price) {
        slide.addText(item.price, {
          x: titleX,
          y: itemY,
          w: cardWidth - cardPadding * 2,
          h: 0.45,
          fontSize: 18,
          bold: true,
          color: BLACK,
          fontFace: 'Noto Sans JP',
          align: 'center',
          valign: 'middle',
        });
        slide.addText((item.priceUnit || ''), {
          x: titleX + cardWidth / 5,
          y: itemY,
          w: cardWidth - cardPadding * 2,
          h: 0.45,
          fontSize: 10,
          bold: true,
          color: GRAY_500,
          fontFace: 'Noto Sans JP',
          align: 'center',
          valign: 'middle',
        });
        itemY += 0.3;
      }

      // Features with checkmarks
      if (item.features && item.features.length > 0) {
        const featureX = titleX + cardWidth / slideData.items.length;
        let featureY = itemY + 0.2
        item.features.forEach(f => {
          slide.addShape('ellipse', {
            x: featureX,
            y: featureY,
            w: 0.08,
            h: 0.08,
            fill: { color: GRAY_800 },
            line: { type: 'none' },
          });

          slide.addText(f, {
            x: featureX + 0.1,
            y: featureY - 0.07,
            w: cardWidth - cardPadding * 2 - 0.1,
            h: cardHeight - (itemY - cardStartY) - cardPadding,
            fontSize: 9,
            color: GRAY_600,
            fontFace: 'Noto Sans JP',
            align: 'left',
            valign: 'top',
            lineSpacing: 8,
          });
          featureY += 0.3;
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
