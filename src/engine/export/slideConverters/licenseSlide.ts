import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import {
  DIFY_BLUE,
  GRAY_200,
  GRAY_300,
  GRAY_600,
  GRAY_800,
  WHITE,
  addLogoToSlide,
  parseTextToPptx,
  addBottomOptionToSlide,
  LOGO_DEFAULT_PATH
} from './utils';

export function convertLicenseSlide(
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
  currentY += 0.1;

  // === DESCRIPTION CONTENT ===
  if (slideData.content && slideData.content.length > 0) {
    const descriptionText = slideData.content.join('\n');
    slide.addText(parseTextToPptx(descriptionText), {
      x: leftMargin,
      y: currentY,
      w: contentWidth,
      h: 0.6,
      fontSize: 18,
      bold: true,
      color: GRAY_800,
      fontFace: 'Noto Sans JP',
      align: 'center',
      valign: 'middle',
      lineSpacing: 24,
    });
    currentY += 0.8;
  }

  // === LICENSE LAYOUT (Left: Base + Plus + Right: Restrictions) ===
  if (slideData.items && slideData.items.length > 0) {
    const baseLicense = slideData.items[0];
    const restrictions = slideData.items.slice(1);

    const leftCardX = leftMargin;
    const leftCardWidth = contentWidth * 0.35; // 35%
    const plusX = leftCardX + leftCardWidth + 0.3; // 0.3" gap
    const plusWidth = 0.4;
    const rightCardX = plusX + plusWidth + 0.3; // 0.3" gap
    const rightCardWidth = contentWidth - leftCardWidth - plusWidth - 0.6;

    const cardHeight = 2.2;

    // LEFT: Base License Card (Blue border)
    if (baseLicense) {
      slide.addShape('roundRect', {
        x: leftCardX,
        y: currentY,
        w: leftCardWidth,
        h: cardHeight,
        fill: { color: WHITE },
        line: { color: '3B82F6', pt: 2 }, // blue-600
        rectRadius: 0.1,
      });

      // Icon placeholder
      slide.addShape('ellipse', {
        x: leftCardX + leftCardWidth / 2 - 0.25,
        y: currentY + 0.3,
        w: 0.5,
        h: 0.5,
        fill: { color: 'DBEAFE' }, // blue-50
        line: { color: '3B82F6', pt: 2 },
      });

      // Title (blue)
      slide.addText(parseTextToPptx(baseLicense.title), {
        x: leftCardX + 0.2,
        y: currentY + 0.95,
        w: leftCardWidth - 0.4,
        h: 0.4,
        fontSize: 16,
        bold: true,
        color: '1D4ED8', // blue-700
        fontFace: 'Noto Sans JP',
        align: 'center',
        valign: 'middle',
      });

      // Description
      if (baseLicense.description) {
        slide.addText(parseTextToPptx(baseLicense.description), {
          x: leftCardX + 0.2,
          y: currentY + 1.4,
          w: leftCardWidth - 0.4,
          h: 0.6,
          fontSize: 12,
          color: GRAY_600,
          fontFace: 'Noto Sans JP',
          align: 'center',
          valign: 'top',
          lineSpacing: 16,
        });
      }
    }

    // MIDDLE: Plus Sign
    slide.addText('+', {
      x: plusX,
      y: currentY + cardHeight / 2 - 0.25,
      w: plusWidth,
      h: 0.5,
      fontSize: 48,
      bold: true,
      color: GRAY_300,
      fontFace: 'Noto Sans JP',
      align: 'center',
      valign: 'middle',
    });

    // RIGHT: Restrictions Cards (Red border)
    if (restrictions && restrictions.length > 0) {
      const restrictionGap = 0.15;
      const restrictionHeight =
        (cardHeight - restrictionGap * (restrictions.length - 1)) / restrictions.length;

      restrictions.forEach((item, index) => {
        const y = currentY + index * (restrictionHeight + restrictionGap);

        // Card background
        slide.addShape('roundRect', {
          x: rightCardX,
          y: y,
          w: rightCardWidth,
          h: restrictionHeight,
          fill: { color: WHITE },
          line: { color: 'F87171', pt: 2 }, // red-400
          rectRadius: 0.1,
        });

        // Icon circle (red background)
        slide.addShape('ellipse', {
          x: rightCardX + 0.15,
          y: y + 0.2,
          w: 0.4,
          h: 0.4,
          fill: { color: 'DC2626' }, // red-600
          line: { type: 'none' },
        });

        // Title (red)
        slide.addText(parseTextToPptx(item.title), {
          x: rightCardX + 0.55,
          y: y + 0.15,
          w: rightCardWidth - 0.7,
          h: 0.25,
          fontSize: 13,
          bold: true,
          color: 'B91C1C', // red-700
          fontFace: 'Noto Sans JP',
          align: 'left',
          valign: 'top',
        });

        // Description
        if (item.description) {
          slide.addText(parseTextToPptx(item.description), {
            x: rightCardX + 0.55,
            y: y + 0.45,
            w: rightCardWidth - 0.7,
            h: restrictionHeight - 0.55,
            fontSize: 10,
            color: GRAY_600,
            fontFace: 'Noto Sans JP',
            align: 'left',
            valign: 'top',
            lineSpacing: 14,
          });
        }
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
