import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../../types';
import { ExportOptions } from '../pptxExporter';
import { DIFY_BLUE, GRAY_400, GRAY_600, parseTextToPptx, addBottomOptionToSlide } from './utils';

export function convertGenericSlide(
  slide: PptxGenJS.Slide, 
  slideData: SlideData,
  options: ExportOptions,
  slideNumber: number,
  totalSlides: number
): void {
  // For unhandled slide types, use a simple layout
  if (slideData.title) {
    slide.addText(parseTextToPptx(slideData.title), {
      x: 0.5,
      y: 0.5,
      w: 9,
      h: 0.7,
      fontSize: 32,
      bold: true,
      color: DIFY_BLUE,
    });
  }

  if (slideData.subtitle) {
    slide.addText(parseTextToPptx(slideData.subtitle), {
      x: 0.5,
      y: 1.3,
      w: 9,
      h: 0.5,
      fontSize: 18,
      color: GRAY_600,
    });
  }

  // Note about unsupported type
  slide.addText(`[${slideData.type} slide - Complex layout not fully supported in PowerPoint export]`, {
    x: 0.5,
    y: 2.5,
    w: 9,
    h: 1,
    fontSize: 14,
    color: GRAY_400,
    align: 'center',
    valign: 'middle',
    italic: true,
  });

  // === OVERLAYS (Always visible on every slide) ===
  addBottomOptionToSlide(
    slide,
    options,
    slideNumber,
    totalSlides,
    false
  );
}