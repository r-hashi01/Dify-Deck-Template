import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import {
  DIFY_BLUE,
  GRAY_200,
  GRAY_600,
  GRAY_800,
  WHITE,
  addLogoToSlide,
  parseTextToPptx,
  addBottomOptionToSlide,
  LOGO_DEFAULT_PATH
} from './utils';

export function convertKeyTakeawaysSlide(
  slide: PptxGenJS.Slide,
  slideData: SlideData,
  options: ExportOptions,
  slideNumber: number,
  totalSlides: number
): void {
  // PowerPoint 16:9 slide dimensions: 10" width x 5.625" height
  const leftMargin = 0.8;
  const rightMargin = 0.8;
  const topMargin = 0.4;
  const contentWidth = 10 - leftMargin - rightMargin;

  let currentY = topMargin;

  // === HEADER SECTION ===
  // Title - matches browser SlideHeader
  if (slideData.title) {
    slide.addText(parseTextToPptx(slideData.title), {
      x: leftMargin,
      y: currentY,
      w: contentWidth,
      h: 0.6,
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
      w: 0.08,
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

  // === INTRO TEXT with left border ===
  if (slideData.content && slideData.content.length > 0) {
    const contents = slideData.content
    // Left blue border (vertical)
    slide.addShape('rect', {
      x: leftMargin,
      y: currentY,
      w: 0.04,
      h: 0.4 * contents.length * 0.75,
      fill: { color: DIFY_BLUE },
      line: { type: 'none' },
    });

    contents.forEach((text, index) => {
      slide.addText(parseTextToPptx(text), {
        x: leftMargin + 0.1,
        y: currentY,
        w: contentWidth - 0.2,
        h: 0.4,
        fontSize: 14,
        color: GRAY_600,
        fontFace: 'Noto Sans JP',
        align: 'left',
        valign: 'top',
        lineSpacing: 14,
      });
      currentY += 0.3;
    })
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
