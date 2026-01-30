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

export function convertMatrixSlide(
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

  // === TABLE ===
  if (slideData.tableData) {
    const { headers, rows } = slideData.tableData;

    // Table with shadow container
    const tableStartY = currentY;
    const tableHeight = 5.625 - tableStartY - 0.5; // Leave space for overlays

    // Background container with shadow
    slide.addShape('rect', {
      x: leftMargin,
      y: tableStartY,
      w: contentWidth,
      h: tableHeight,
      fill: { color: WHITE },
      line: { color: GRAY_200, pt: 1 },
    });

    // Table data with proper formatting
    const tableData: any[] = [
      // Header row - matches browser bg-gray-50 border-b-2 border-dify-blue
      headers.map(h => ({
        text: h.toUpperCase(),
        options: {
          bold: true,
          color: DIFY_BLUE,
          fontSize: 14,
          fill: { color: GRAY_50 },
          align: 'left',
          valign: 'middle',
          lineSpacing: 14,
          charSpacing: 1,
          border: [
            { pt: 0, color: GRAY_100 }, // top
            { pt: 1, color: GRAY_100 }, // right
            { pt: 2, color: DIFY_BLUE }, // bottom - thick blue line
            { pt: 1, color: GRAY_100 }, // left
          ],
        },
      })),
      // Data rows
      ...rows.map(row =>
        row.map(cell => {
          let text = cell;
          let textColor = GRAY_800;

          // Convert checkmarks - matches browser behavior
          if (cell === '✅') {
            text = '✓ Yes';
            textColor = DIFY_BLUE;
          } else if (cell === '✖️' || cell === '❌') {
            text = '✗ -';
            textColor = GRAY_400;
          }

          return {
            text,
            options: {
              fontSize: 12,
              color: textColor,
              align: 'left',
              valign: 'middle',
              charSpacing: 0.3,
            },
          };
        })
      ),
    ];

    // Add table
    slide.addTable(tableData, {
      x: leftMargin,
      y: tableStartY,
      w: contentWidth,
      h: tableHeight,
      border: { pt: 1, color: GRAY_100 },
      colW: Array(headers.length).fill(contentWidth / headers.length),
      rowH: Array(rows.length + 1).fill(tableHeight / (rows.length + 1)),
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
