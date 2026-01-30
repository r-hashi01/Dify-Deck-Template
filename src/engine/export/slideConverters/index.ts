import PptxGenJS from 'pptxgenjs';
import { SlideData, SlideType } from '../../types';
import { ExportOptions } from '../pptxExporter';

// Import all slide converters
import { convertTitleSlide } from './titleSlide';
import { convertSectionSlide } from './sectionSlide';
import { convertChapterTitleSlide } from './chapterTitleSlide';
import { convertContentSlide } from './contentSlide';
import { convertSplitSlide } from './splitSlide';
import { convertMatrixSlide } from './matrixSlide';
import { convertCardsSlide } from './cardsSlide';
import { convertPricingSlide } from './pricingSlide';
import { convertFAQSlide } from './faqSlide';
import { convertMacroFocusSlide } from './macroFocusSlide';
import { convertEndSlide } from './endSlide';
import { convertAccordionSlide } from './accordionSlide';
import { convertPillarsSlide } from './pillarsSlide';
import { convertKeyTakeawaysSlide } from './keyTakeawaysSlide';
import { convertFocusColsSlide } from './focusColsSlide';
import { convertPresenterSlide } from './presenterSlide';
import { convertCourseOverviewSlide } from './courseOverviewSlide';
import { convertDiagramSlide } from './diagramSlide';
import { convertLicenseSlide } from './licenseSlide';
import { convertStorySlide } from './storySlide';
import { convertGenericSlide } from './genericSlide';

// Export utilities
export * from './utils';

// Main conversion function
export async function convertSlide(
  pptx: PptxGenJS,
  slideData: SlideData,
  options: ExportOptions,
  slideNumber: number,
  totalSlides: number
): Promise<void> {
  const slide = pptx.addSlide();

  switch (slideData.type) {
    case SlideType.TITLE:
      convertTitleSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.SECTION:
      convertSectionSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.CHAPTER_TITLE:
      convertChapterTitleSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.CONTENT:
      convertContentSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.SPLIT:
      await convertSplitSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.MATRIX:
      convertMatrixSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.CARDS:
      convertCardsSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.PRICING:
      convertPricingSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.FAQ:
      convertFAQSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.MACRO_FOCUS:
      convertMacroFocusSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.END:
      convertEndSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.ACCORDION:
      convertAccordionSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.PILLARS:
      convertPillarsSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.KEY_TAKEAWAYS:
      convertKeyTakeawaysSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.FOCUS_COLS:
      convertFocusColsSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.PRESENTER:
      await convertPresenterSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.COURSE_OVERVIEW:
      convertCourseOverviewSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.DIAGRAM:
    case SlideType.ADAPTIVE_CONTENT:
      convertDiagramSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.LICENSE:
      convertLicenseSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    case SlideType.STORY:
      await convertStorySlide(slide, slideData, options, slideNumber, totalSlides);
      break;
    default:
      // For other types, use a generic content layout
      convertGenericSlide(slide, slideData, options, slideNumber, totalSlides);
      break;
  }
}
