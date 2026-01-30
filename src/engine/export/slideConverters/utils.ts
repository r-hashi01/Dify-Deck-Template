import PptxGenJS from 'pptxgenjs';
import { toPng } from 'html-to-image';
import { ExportOptions } from '../pptxExporter';

// Brand colors
export const DIFY_BLUE = '0033FF';
export const GRAY_50 = 'F9FAFB';
export const GRAY_100 = 'F3F4F6';
export const GRAY_200 = 'E5E7EB';
export const GRAY_300 = 'D8D8D8';
export const GRAY_400 = '9CA3AF';
export const GRAY_500 = '6B7280';
export const GRAY_600 = '4B5563';
export const GRAY_800 = '1F2937';
export const WHITE = 'FFFFFF';
export const BLACK = '000000';
export const RED = 'FF0000';

export const LOGO_DEFAULT_PATH='/assets/icon/dify-logo.svg';
export const LOGO_WHITE_PATH='/assets/icon/dify-logo-white.svg';
export const LOGO_BLACK_PATH='/assets/icon/dify-logo-black.svg';
export const LOGO_DARK_PATH='/assets/icon/dify-logo-dark-mode.svg';
export const LOGO_BLUE_PATH='/assets/icon/dify-logo-on-blue.svg';

// Helper function to add Dify logo to top-right corner
export function addLogoToSlide(slide: PptxGenJS.Slide, logoPath: string): void {
  const logoHeight = 0.3;
  const logoWidth = 0.7;
  const logoX = 9.9 - logoWidth; // Right margin 0.5"
  const logoY = 0.2;

  slide.addImage({
    path: logoPath,
    x: logoX,
    y: logoY,
    w: logoWidth,
    h: logoHeight,
  });
}

export function addBottomOptionToSlide(
  slide: PptxGenJS.Slide,
  options: ExportOptions,
  slideNumber: Number,
  totalSlides: Number,
  isDarkBackgroud: boolean = false,
): void {
  // === OVERLAYS (Always visible on every slide) ===
  const overlayY = 5.625 - 0.35; // Bottom of slide
  const edgeTextColor = isDarkBackgroud ? GRAY_200 : GRAY_500;
  const centerTextColor = isDarkBackgroud ? GRAY_300 : GRAY_400;
  const pageTextColor = isDarkBackgroud ? GRAY_200 : DIFY_BLUE;

  // BOTTOM LEFT: Deck Info
  slide.addText(options.title?.toUpperCase() || '', {
    x: 0.2,
    y: overlayY,
    w: 4,
    h: 0.2,
    fontSize: 9,
    bold: true,
    color: edgeTextColor,
    fontFace: 'Noto Sans JP',
    align: 'left',
    valign: 'middle',
    charSpacing: 0.3,
  });

  // BOTTOM CENTER: Copyright
  slide.addText(options.company ? `Copyright © ${options.company}. All Rights Reserved.` : '', {
    x: 3.5,
    y: overlayY,
    w: 3,
    h: 0.2,
    fontSize: 8,
    color: centerTextColor,
    fontFace: 'Noto Sans JP',
    align: 'center',
    valign: 'middle',
  });

  // BOTTOM RIGHT: Year | Author | Page number
  const currentYear = new Date().getFullYear();
  let currentX = 7;
  slide.addText(`${currentYear}`, {
    x: currentX,
    y: overlayY,
    w: 1.2,
    h: 0.2,
    fontSize: 9,
    color: edgeTextColor,
    fontFace: 'Noto Sans JP',
    align: 'center',
    valign: 'middle',
  });
  currentX += 0.8;

  slide.addText(`|`, {
    x: currentX,
    y: overlayY,
    w: 0.3,
    h: 0.2,
    fontSize: 9,
    color: edgeTextColor,
    fontFace: 'Noto Sans JP',
    align: 'center',
    valign: 'middle',
  });
  currentX += 0.1;

  slide.addText(`${options.author || ''}`, {
    x: currentX,
    y: overlayY,
    w: 1.2,
    h: 0.2,
    fontSize: 9,
    color: edgeTextColor,
    fontFace: 'Noto Sans JP',
    align: 'center',
    valign: 'middle',
  });
  currentX += 1.0;

  slide.addText(`|`, {
    x: currentX,
    y: overlayY,
    w: 0.3,
    h: 0.2,
    fontSize: 9,
    color: edgeTextColor,
    fontFace: 'Noto Sans JP',
    align: 'center',
    valign: 'middle',
  });
  currentX += 0.1;

  slide.addText(`${slideNumber} / ${totalSlides}`, {
    x: currentX,
    y: overlayY,
    w: 1.0,
    h: 0.2,
    fontSize: 10.5,
    color: pageTextColor,
    fontFace: 'Noto Sans JP',
    align: 'center',
    valign: 'middle',
    bold: true,
  });
}

// Helper function to parse markdown-style bold text
export function parseTextToPptx(text: string): Array<{ text: string; options?: { bold?: boolean; color?: string } }> {
  const parts: Array<{ text: string; options?: { bold?: boolean; color?: string } }> = [];
  const boldRegex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = boldRegex.exec(text)) !== null) {
    // Add text before bold
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index) });
    }
    // Add bold text in Dify blue
    parts.push({ text: match[1], options: { bold: true, color: DIFY_BLUE } });
    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex) });
  }

  return parts.length > 0 ? parts : [{ text }];
}

// Helper to capture visual content as image
export async function captureVisualContent(slideId: number): Promise<string | null> {
  try {
    const slideElement = document.querySelector(`[data-slide-id="${slideId}"]`);
    if (!slideElement) return null;

    const visualElement = slideElement.querySelector('[data-visual-content]');
    if (!visualElement) return null;

    const dataUrl = await toPng(visualElement as HTMLElement, {
      quality: 1,
      pixelRatio: 2,
    });

    return dataUrl;
  } catch (error) {
    console.warn('Failed to capture visual content:', error);
    return null;
  }
}
