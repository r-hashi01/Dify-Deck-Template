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
  GRAY_100,
  LOGO_DEFAULT_PATH
} from './utils';
import { features } from 'process';

export function convertPillarsSlide(
  slide: PptxGenJS.Slide,
  slideData: SlideData,
  options: ExportOptions,
  slideNumber: number,
  totalSlides: number
): void {
  // Light gray background - matches browser bg-slate-50
  slide.background = { color: GRAY_50 };

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
  currentY += 0.3;

  // === POSITIONING HERO ===
  if (slideData.content && slideData.content.length > 0) {
    // POSITIONING label with blue background
    slide.addShape('roundRect', {
      x: leftMargin,
      y: currentY,
      w: 1.4,
      h: 0.28,
      fill: { color: DIFY_BLUE },
      line: { type: 'none' },
    });

    slide.addText('POSITIONING', {
      x: leftMargin - 0.2,
      y: currentY,
      w: 1.8,
      h: 0.28,
      fontSize: 9,
      bold: true,
      color: WHITE,
      fontFace: 'Noto Sans JP',
      align: 'center',
      valign: 'middle',
      charSpacing: 2,
    });

    // Positioning text (large, bold)
    slide.addText(parseTextToPptx(slideData.content[0]), {
      x: leftMargin + 1.5,
      y: currentY - 0.05,
      w: contentWidth - 2,
      h: 0.4,
      fontSize: 20,
      bold: true,
      color: GRAY_800,
      fontFace: 'Noto Sans JP',
      align: 'left',
      valign: 'middle',
    });

    currentY += 0.6;
  }

  // === PILLAR CARDS (bottom-aligned) ===
  if (slideData.items && slideData.items.length > 0) {
    const cardGap = 0.2;
    const cardWidth = (contentWidth - cardGap * (slideData.items.length - 1)) / slideData.items.length;
    const cardHeight = 2.2; // Fixed height for pillars
    const cardStartY = 2.8; // Bottom-aligned with space for overlays

    const colors = [DIFY_BLUE, '6366F1', '10B981', 'F59E0B', 'EF4444'];

    slideData.items.forEach((item, index) => {
      const x = leftMargin + index * (cardWidth + cardGap);
      const color = colors[index % colors.length];

      // Card background with shadow
      slide.addShape('rect', {
        x,
        y: cardStartY,
        w: cardWidth,
        h: cardHeight,
        fill: { color: WHITE },
        line: { color: GRAY_200, pt: 1 },
        shadow: {
          type: 'outer',
          blur: 8,
          offset: 2,
          angle: 90,
          color: '000000',
          opacity: 0.08,
        },
      });

      // Top colored bar (thicker) - matches browser h-1.5
      slide.addShape('rect', {
        x,
        y: cardStartY,
        w: cardWidth,
        h: 0.08,
        fill: { color: color },
        line: { type: 'none' },
      });

      const cardPadding = 0.2;

      // Title (bold, colored)
      slide.addText(parseTextToPptx(item.title), {
        x: x + cardPadding,
        y: cardStartY + 1.0,
        w: cardWidth - cardPadding * 2,
        h: 0.4,
        fontSize: 13,
        bold: true,
        color: color,
        fontFace: 'Noto Sans JP',
        align: 'center',
        valign: 'top',
      });

      // Description
      if (item.description) {
        slide.addText(parseTextToPptx(item.description), {
          x: x + cardPadding - 0.1,
          y: cardStartY + 1.4,
          w: cardWidth - cardPadding,
          h: cardHeight - 1.4 - cardPadding,
          fontSize: 10,
          color: GRAY_600,
          fontFace: 'Noto Sans JP',
          align: 'center',
          valign: 'top',
          lineSpacing: 14,
        });
      }

      if (item.features && item.features.length > 0) {
        item.features.forEach((feature: string, featIndex: number) => {
          slide.addShape('roundRect', {
            x: x + cardPadding,
            y: currentY + 2.1,
            w: 1.4,
            h: 0.25,
            fill: { color: GRAY_100 },
            line: { type: 'none' },
          });
          slide.addShape('ellipse', {
            x: x + cardPadding + 0.05,
            y: currentY + 2.17,
            w: 0.08,
            h: 0.08,
            fill: { color: color },
            line: { type: 'none' },
          });
          slide.addText(parseTextToPptx(feature), {
            x: x + cardPadding,
            y: currentY + 2.11,
            w: 1.2,
            h: 0.2,
            fontSize: 9,
            color: GRAY_800,
            fontFace: 'Noto Sans JP',
            align: 'center',
            valign: 'middle',
            lineSpacing: 12,
          });
        })
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
