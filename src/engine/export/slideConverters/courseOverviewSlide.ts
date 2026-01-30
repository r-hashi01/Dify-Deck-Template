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
  GRAY_800,
  WHITE,
  addLogoToSlide,
  parseTextToPptx,
  addBottomOptionToSlide,
  LOGO_DEFAULT_PATH
} from './utils';

export function convertCourseOverviewSlide(
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

  // === TWO-COLUMN CARD LAYOUT ===
  if (slideData.content && slideData.content.length >= 2) {
    const cardStartY = currentY;
    const cardHeight = 2.2;
    const cardGap = 0.3;
    const leftCardX = leftMargin;
    const cardWidth = (contentWidth - cardGap) / 2;
    const rightCardX = leftCardX + cardWidth + cardGap;

    // Left: Course Objective Card
    slide.addShape('rect', {
      x: leftCardX,
      y: cardStartY,
      w: cardWidth,
      h: cardHeight,
      fill: { color: GRAY_50 },
      line: { color: GRAY_200, pt: 1 },
    });

    // Objective label with underline
    const labelPadding = 0.25;
    slide.addText('COURSE OBJECTIVE', {
      x: leftCardX + 0.16,
      y: cardStartY + labelPadding,
      w: cardWidth - labelPadding,
      h: 0.25,
      fontSize: 9,
      bold: true,
      color: DIFY_BLUE,
      fontFace: 'Noto Sans JP',
      charSpacing: 2,
    });

    // Underline for label
    slide.addShape('line', {
      x: leftCardX + labelPadding,
      y: cardStartY + labelPadding + 0.25,
      w: 1.8,
      h: 0,
      line: { color: DIFY_BLUE, pt: 2 },
    });

    // Objective text
    slide.addText(parseTextToPptx(slideData.content[0]), {
      x: leftCardX + labelPadding - 0.1,
      y: cardStartY + labelPadding + 0.45,
      w: cardWidth - labelPadding * 2,
      h: cardHeight - labelPadding - 0.45,
      fontSize: 16,
      color: GRAY_800,
      fontFace: 'Noto Sans JP',
      align: 'left',
      valign: 'top',
      lineSpacing: 24,
    });

    // Right: Core Value Card
    slide.addShape('rect', {
      x: rightCardX,
      y: cardStartY,
      w: cardWidth,
      h: cardHeight,
      fill: { color: DIFY_BLUE },
      line: { type: 'none' },
    });

    // Value label with underline
    slide.addText('CORE VALUE', {
      x: rightCardX + 0.16,
      y: cardStartY + labelPadding,
      w: cardWidth - labelPadding * 2,
      h: 0.25,
      fontSize: 9,
      bold: true,
      color: WHITE,
      fontFace: 'Noto Sans JP',
      transparency: 20,
      charSpacing: 2,
    });

    // Underline for label (white)
    slide.addShape('line', {
      x: rightCardX + labelPadding,
      y: cardStartY + labelPadding + 0.25,
      w: 1.1,
      h: 0,
      line: { color: WHITE, pt: 2 },
    });

    // Value text
    slide.addText(parseTextToPptx(slideData.content[1]), {
      x: rightCardX + labelPadding - 0.1,
      y: cardStartY + labelPadding + 0.45,
      w: cardWidth - labelPadding * 2,
      h: cardHeight - labelPadding - 0.45,
      fontSize: 16,
      color: WHITE,
      fontFace: 'Noto Sans JP',
      align: 'left',
      valign: 'top',
      lineSpacing: 24,
    });

    // === SCOPE SECTION ===
    if (slideData.content[2]) {
      const scopeY = cardStartY + cardHeight;

      // Top border line
      slide.addShape('rect', {
        x: leftMargin,
        y: scopeY + 0.05,
        w: contentWidth,
        h: 0.08,
        fill: { color: GRAY_100 },
        line: { type: 'none' },
      });

      // Left blue accent bar
      slide.addShape('rect', {
        x: leftMargin,
        y: scopeY + 0.1,
        w: 0.4,
        h: 0.05,
        fill: { color: DIFY_BLUE },
        line: { type: 'none' },
      });

      // SCOPE label
      slide.addText('SCOPE', {
        x: leftMargin - 0.1,
        y: scopeY + 0.3,
        w: 1,
        h: 0.2,
        fontSize: 9,
        bold: true,
        color: GRAY_400,
        fontFace: 'Noto Sans JP',
        charSpacing: 1,
      });

      // Scope content text
      slide.addText(parseTextToPptx(slideData.content[2]), {
        x: leftMargin + 0.6,
        y: scopeY + 0.18,
        w: contentWidth,
        h: 0.5,
        fontSize: 12,
        color: GRAY_600,
        fontFace: 'Noto Sans JP',
        align: 'left',
        valign: 'top',
        lineSpacing: 20,
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
