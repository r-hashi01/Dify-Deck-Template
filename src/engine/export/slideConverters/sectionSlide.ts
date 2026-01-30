import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import { DIFY_BLUE, WHITE, addLogoToSlide, parseTextToPptx, addBottomOptionToSlide, LOGO_WHITE_PATH } from './utils';

export function convertSectionSlide(
  slide: PptxGenJS.Slide, 
  slideData: SlideData,
  options: ExportOptions,
  slideNumber: number,
  totalSlides: number
): void {
  // Blue background
  slide.background = { color: DIFY_BLUE };

  // Watermark number (large, semi-transparent) - positioned bottom-right
  const sectionNumber = slideData.footer?.replace('Part 0', '').replace('Part ', '') ||
                        Math.floor(slideData.id / 5).toString();
  slide.addText(sectionNumber, {
    x: 6.8,
    y: 3.5,
    w: 3.5,
    h: 3,
    fontSize: 230,
    bold: true,
    color: WHITE,
    fontFace: 'Noto Sans JP',
    align: 'right',
    valign: 'bottom',
    transparency: 90,
  });

  // Content positioned vertically centered (justify-center in browser)
  const leftMargin = 0.8;
  const contentStartY = 2.0; // Adjusted for vertical centering

  // Section label with horizontal line
  slide.addShape('line', {
    x: leftMargin,
    y: contentStartY,
    w: 0.4,
    h: 0,
    line: { color: WHITE, pt: 2 },
  });

  const partLabel = slideData.footer || `Part ${Math.floor(slideData.id / 5)}`;
  slide.addText(partLabel.toUpperCase(), {
    x: leftMargin + 0.5,
    y: contentStartY - 0.1,
    w: 3,
    h: 0.25,
    fontSize: 13,
    bold: true,
    color: WHITE,
    fontFace: 'Noto Sans JP',
    align: 'left',
    valign: 'middle',
    transparency: 10,
    charSpacing: 3,
  });

  // Main title (large, bold) - matches browser text-6xl~9xl
  slide.addText(parseTextToPptx(slideData.title), {
    x: leftMargin,
    y: contentStartY + 0.5,
    w: 10,
    h: 1.8,
    fontSize: 72,
    bold: true,
    color: WHITE,
    fontFace: 'Noto Sans JP',
    align: 'left',
    valign: 'top',
    lineSpacing: 60,
  });

  // Subtitle with left border - matches browser text-2xl~4xl
  if (slideData.subtitle) {
    const subtitleY = contentStartY + 1.5;

    // Left border
    slide.addShape('rect', {
      x: leftMargin,
      y: subtitleY,
      w: 0.05,
      h: 0.4,
      fill: { color: WHITE },
      line: { type: 'none' },
    });

    slide.addText(parseTextToPptx(slideData.subtitle), {
      x: leftMargin + 0.2,
      y: subtitleY - 0.1,
      w: 6,
      h: 0.8,
      fontSize: 20,
      color: WHITE,
      fontFace: 'Noto Sans JP',
      align: 'left',
      valign: 'top',
      transparency: 10,
      lineSpacing: 32,
    });
  }

  // Add bottom overlay options
  addBottomOptionToSlide(
    slide,
    options,
    slideNumber,
    totalSlides,
    true
  );

  // Add logo to top-right
  addLogoToSlide(slide, LOGO_WHITE_PATH); // Dark background (blue)
}
