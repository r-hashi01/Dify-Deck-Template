import React from 'react';
import { SlideData, SlideType } from '../types';

import { TitleSlide, SectionSlide, CourseOverviewSlide, MacroFocusSlide, ChapterTitleSlide, EndSlide } from './slides/VisualSlides';
import { ContentSlide } from './slides/ContentSlide';
import { CardSlide } from './slides/CardSlide';
import { AccordionSlide } from './slides/AccordionSlide';
import { SplitSlide, DiagramSlide, MatrixSlide, AdaptiveContentSlide } from './slides/StructureSlides';
import { PricingCardSlide } from './slides/PricingCardSlide';
import { LicenseSlide } from './slides/LicenseSlide';
import { FAQSlide } from './slides/FAQSlide';
import { FocusColsSlide } from './slides/FocusColsSlide';
import { PillarsSlide } from './slides/PillarsSlide';
import { KeyTakeawaysSlide } from './slides/KeyTakeawaysSlide';
import { StorySlide } from './slides/StorySlide';
import { PresenterSlide } from './slides/PresenterSlide';

interface SlideRendererProps {
  slide: SlideData;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  switch (slide.type) {
    case SlideType.TITLE:
      return <TitleSlide slide={slide} />;
    case SlideType.SECTION:
      return <SectionSlide slide={slide} />;
    case SlideType.COURSE_OVERVIEW:
      return <CourseOverviewSlide slide={slide} />;
    case SlideType.MACRO_FOCUS:
      return <MacroFocusSlide slide={slide} />;
    case SlideType.CHAPTER_TITLE:
      return <ChapterTitleSlide slide={slide} />;
    case SlideType.CONTENT:
      return <ContentSlide slide={slide} />;
    case SlideType.CARDS:
      return <CardSlide slide={slide} />;
    case SlideType.ACCORDION:
      return <AccordionSlide slide={slide} />;
    case SlideType.SPLIT:
      return <SplitSlide slide={slide} />;
    case SlideType.DIAGRAM:
      return <DiagramSlide slide={slide} />;
    case SlideType.MATRIX:
      return <MatrixSlide slide={slide} />;
    case SlideType.ADAPTIVE_CONTENT:
      return <AdaptiveContentSlide slide={slide} />;
    case SlideType.PRICING:
      return <PricingCardSlide slide={slide} />;
    case SlideType.LICENSE:
      return <LicenseSlide slide={slide} />;
    case SlideType.FAQ:
      return <FAQSlide slide={slide} />;
    case SlideType.FOCUS_COLS:
      return <FocusColsSlide slide={slide} />;
    case SlideType.PILLARS:
      return <PillarsSlide slide={slide} />;
    case SlideType.KEY_TAKEAWAYS:
      return <KeyTakeawaysSlide slide={slide} />;
    case SlideType.STORY:
      return <StorySlide slide={slide} />;
    case SlideType.PRESENTER:
      return <PresenterSlide slide={slide} />;
    case SlideType.END:
      return <EndSlide slide={slide} />;
    default:
      return <div className="p-20 text-red-500 font-bold text-3xl">Unknown Slide Type: {slide.type}</div>;
  }
};
