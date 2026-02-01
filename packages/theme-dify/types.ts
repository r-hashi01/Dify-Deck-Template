// Dify Deck Slide Type Definitions

export type LogoVariant = 'default' | 'white' | 'black' | 'dark-mode' | 'on-blue';

// Common props for all slides
export interface BaseSlideProps {
  deckName?: string;
  copyright?: string;
  authorName?: string;
  logoVariant?: LogoVariant;
  notes?: string; // Speaker notes for presenter mode
}

// ===================
// Item Types
// ===================

export interface AccordionItem {
  title: string;
  description: string;
  icon?: string;
}

export interface CardItem {
  title: string;
  description: string;
  icon?: string;
  color?: string;
}

export interface FAQItem {
  title: string;
  description?: string;
}

export interface FocusItem {
  title: string;
  description?: string;
  tag?: string;
  icon?: string;
}

export interface TakeawayItem {
  title: string;
  description?: string;
  icon?: string;
}

export interface LicenseItem {
  title: string;
  description?: string;
  icon?: string;
}

export interface PillarItem {
  title: string;
  description?: string;
  icon?: string;
  features?: string[];
}

export interface PricingItem {
  title: string;
  price?: string;
  priceUnit?: string;
  description?: string;
  features?: string[];
  topBarColor?: string;
  badge?: string;
  icon?: string;
}

// ===================
// Slide Types
// ===================

export interface TitleSlide extends BaseSlideProps {
  layout: 'title';
  slideTitle?: string;
  subtitle?: string;
  seriesTitle?: string;
  label?: string;
  teamName?: string;
  tagline?: string;
}

export interface SectionSlide extends BaseSlideProps {
  layout: 'section';
  slideTitle?: string;
  subtitle?: string;
  part?: string;
  partNumber?: string | number;
}

export interface ChapterTitleSlide extends BaseSlideProps {
  layout: 'chapter-title';
  slideTitle?: string;
  items?: string[];
}

export interface ContentSlide extends BaseSlideProps {
  layout: 'content';
  slideTitle?: string;
  subtitle?: string;
  items?: string[];
}

export interface SplitSlide extends BaseSlideProps {
  layout: 'split';
  slideTitle?: string;
  subtitle?: string;
  items?: string[];
  imageUrl?: string;
  imageAlt?: string;
  imageClass?: string;
  slot?: string; // HTML content for right side
}

export interface AdaptiveContentSlide extends BaseSlideProps {
  layout: 'adaptive-content';
  slideTitle?: string;
  subtitle?: string;
  items?: string[];
}

export interface CardsSlide extends BaseSlideProps {
  layout: 'cards';
  slideTitle?: string;
  subtitle?: string;
  items?: CardItem[];
}

export interface AccordionSlide extends BaseSlideProps {
  layout: 'accordion';
  slideTitle?: string;
  subtitle?: string;
  items?: AccordionItem[];
}

export interface FocusColsSlide extends BaseSlideProps {
  layout: 'focus-cols';
  slideTitle?: string;
  subtitle?: string;
  items?: FocusItem[];
}

export interface PillarsSlide extends BaseSlideProps {
  layout: 'pillars';
  slideTitle?: string;
  subtitle?: string;
  positioning?: string;
  items?: PillarItem[];
}

export interface MatrixSlide extends BaseSlideProps {
  layout: 'matrix';
  slideTitle?: string;
  subtitle?: string;
  headers?: string[];
  rows?: string[][];
}

export interface DiagramSlide extends BaseSlideProps {
  layout: 'diagram';
  slideTitle?: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageClass?: string;
  slot?: string; // HTML content for diagram
}

export interface PricingSlide extends BaseSlideProps {
  layout: 'pricing';
  slideTitle?: string;
  subtitle?: string;
  items?: PricingItem[];
  bottomBanner?: string;
  footerNote?: string;
}

export interface PresenterSlide extends BaseSlideProps {
  layout: 'presenter';
  slideTitle?: string;
  subtitle?: string;
  name?: string;
  role?: string;
  details?: string[];
  imageUrl?: string;
}

export interface CourseOverviewSlide extends BaseSlideProps {
  layout: 'course-overview';
  slideTitle?: string;
  subtitle?: string;
  objective?: string;
  value?: string;
  scope?: string;
}

export interface StorySlide extends BaseSlideProps {
  layout: 'story';
  slideTitle?: string;
  subtitle?: string;
  content?: string[];
  slot?: string; // HTML content for image
}

export interface FAQSlide extends BaseSlideProps {
  layout: 'faq';
  slideTitle?: string;
  subtitle?: string;
  items?: FAQItem[];
}

export interface LicenseSlide extends BaseSlideProps {
  layout: 'license';
  slideTitle?: string;
  subtitle?: string;
  content?: string[];
  items?: LicenseItem[];
}

export interface KeyTakeawaysSlide extends BaseSlideProps {
  layout: 'key-takeaways';
  slideTitle?: string;
  subtitle?: string;
  content?: string[];
  items?: TakeawayItem[];
}

export interface MacroFocusSlide extends BaseSlideProps {
  layout: 'macro-focus';
  slideTitle?: string;
  items?: string[];
}

export interface EndSlide extends BaseSlideProps {
  layout: 'end';
  subtitle?: string;
  website?: string;
  email?: string;
  github?: string;
  imageUrl?: string;
}

// Union type of all slides
export type Slide =
  | TitleSlide
  | SectionSlide
  | ChapterTitleSlide
  | ContentSlide
  | SplitSlide
  | AdaptiveContentSlide
  | CardsSlide
  | AccordionSlide
  | FocusColsSlide
  | PillarsSlide
  | MatrixSlide
  | DiagramSlide
  | PricingSlide
  | PresenterSlide
  | CourseOverviewSlide
  | StorySlide
  | FAQSlide
  | LicenseSlide
  | KeyTakeawaysSlide
  | MacroFocusSlide
  | EndSlide;

// Deck configuration
export interface DeckConfig {
  title: string;
  theme?: string;
  defaults?: BaseSlideProps;
  browserExporter?: boolean;
}

// Full deck definition
export interface Deck {
  config: DeckConfig;
  slides: Slide[];
}
