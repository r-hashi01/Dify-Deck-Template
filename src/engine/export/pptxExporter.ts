import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../types';
import { convertSlide } from './slideConverters';

export interface ExportOptions {
  title: string;
  author?: string;
  company?: string;
  tagline?: string;
  description?: string;
}

export async function exportToPowerPoint(
  slides: SlideData[],
  options: ExportOptions
): Promise<void> {
  const pptx = new PptxGenJS();

  // Set presentation properties
  pptx.author = options.author || 'Dify Deck';
  pptx.company = options.company || 'Dify Tech Inc.';
  pptx.title = options.title;
  pptx.subject = 'Presentation generated from Dify Deck';

  // Set default layout to 16:9
  pptx.layout = 'LAYOUT_16x9';

  // Convert each slide
  for (let i = 0; i < slides.length; i++) {
    await convertSlide(pptx, slides[i], options, i + 1, slides.length);
  }

  // Save the presentation
  const filename = `${options.title.replace(/[^a-z0-9]/gi, '_')}_${new Date().getTime()}.pptx`;
  await pptx.writeFile({ fileName: filename });
}
