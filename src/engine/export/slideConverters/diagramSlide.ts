import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import {
  DIFY_BLUE,
  GRAY_100,
  GRAY_200,
  GRAY_400,
  GRAY_500,
  GRAY_600,
  addLogoToSlide,
  parseTextToPptx,
  addBottomOptionToSlide,
  LOGO_DEFAULT_PATH
} from './utils';

export function convertDiagramSlide(
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

  // Large centered placeholder for diagram/visual content
  const placeholderHeight = 5.625 - currentY - 0.5; // Leave space for overlays
  const placeholderWidth = contentWidth;

  slide.addShape('rect', {
    x: leftMargin,
    y: currentY,
    w: placeholderWidth,
    h: placeholderHeight,
    fill: { color: GRAY_100 },
    line: { color: GRAY_200, pt: 1 },
  });

  slide.addText('[Diagram / Visual Content]', {
    x: leftMargin,
    y: currentY + placeholderHeight / 2 - 0.3,
    w: placeholderWidth,
    h: 0.6,
    fontSize: 16,
    color: GRAY_400,
    fontFace: 'Noto Sans JP',
    align: 'center',
    valign: 'middle',
  });

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
