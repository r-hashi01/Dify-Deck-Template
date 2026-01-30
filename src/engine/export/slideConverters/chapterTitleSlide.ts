import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import { DIFY_BLUE, WHITE, addLogoToSlide, parseTextToPptx, addBottomOptionToSlide, LOGO_WHITE_PATH } from './utils';

export function convertChapterTitleSlide(
  slide: PptxGenJS.Slide, 
  slideData: SlideData,
  options: ExportOptions,
  slideNumber: number,
  totalSlides: number
): void {
  // Blue background
  slide.background = { color: DIFY_BLUE };

  // Content positioned vertically centered (justify-center in browser)
  const contentStartY = 0.8;

  // White accent line (centered, above title) - matches browser mb-8 mx-auto w-24 h-1
  slide.addShape('rect', {
    x: 4.4,
    y: contentStartY,
    w: 1.2,
    h: 0.04,
    fill: { color: WHITE },
    line: { type: 'none' },
  });

  // Main title (large, bold, centered) - matches browser text-5xl~8xl
  const titleY = contentStartY + 0.1;
  slide.addText(parseTextToPptx(slideData.title), {
    x: 1,
    y: titleY,
    w: 8,
    h: 2.2,
    fontSize: 60,
    bold: true,
    color: WHITE,
    fontFace: 'Noto Sans JP',
    align: 'center',
    valign: 'middle',
    lineSpacing: 56,
  });

  // Content items (if any) - with bottom borders
  if (slideData.content && slideData.content.length > 0) {
    const startY = titleY + 2.0;
    const itemWidth = 6;
    const itemX = (10 - itemWidth) / 2; // Center horizontally

    slideData.content.forEach((item, index) => {
      const y = startY + index * 0.75;

      // Bottom border for each item - matches browser border-b border-white/30
      slide.addShape('line', {
        x: itemX,
        y: y + 0.55,
        w: itemWidth,
        h: 0,
        line: { color: WHITE, pt: 1, transparency: 70 },
      });

      // Text content
      slide.addText(parseTextToPptx(item), {
        x: itemX,
        y: y,
        w: itemWidth,
        h: 0.5,
        fontSize: 20,
        color: WHITE,
        fontFace: 'Noto Sans JP',
        align: 'left',
        valign: 'middle',
      });
    });
  }

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
