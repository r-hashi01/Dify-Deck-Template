import React from 'react';

export enum SlideType {
  TITLE = 'TITLE',
  SECTION = 'SECTION',
  CONTENT = 'CONTENT',
  SPLIT = 'SPLIT', // Text left, visual right
  MATRIX = 'MATRIX', // For permission tables
  DIAGRAM = 'DIAGRAM', // For architecture
  CARDS = 'CARDS', // Grid view for lists
  ACCORDION = 'ACCORDION', // Vertical expandable list with logos
  MACRO_FOCUS = 'MACRO_FOCUS', // Dark focus slide for summaries
  COURSE_OVERVIEW = 'COURSE_OVERVIEW', // Special layout for course objective & value
  PRICING = 'PRICING', // Pricing cards with top bars
  LICENSE = 'LICENSE', // License diagram
  FAQ = 'FAQ', // FAQ list
  FOCUS_COLS = 'FOCUS_COLS', // Left highlight, right list
  PILLARS = 'PILLARS', // 4 vertical columns for Enterprise capability
  KEY_TAKEAWAYS = 'KEY_TAKEAWAYS', // New summary style
  STORY = 'STORY', // Poster/Editorial style
  CHAPTER_TITLE = 'CHAPTER_TITLE', // Blue theme for Module Title
  ADAPTIVE_CONTENT = 'ADAPTIVE_CONTENT', // Full width centered content
  PRESENTER = 'PRESENTER', // Dedicated presenter slide
  END = 'END'
}

export interface SlideItem {
  title: string;
  description?: string;
  logo?: string;
  icon?: React.ReactNode; // New: For Lucide icons in cards
  tags?: string[]; // New: For categories like "Basic App"
  // New for Pricing
  price?: string;
  priceUnit?: string;
  topBarColor?: string;
  badge?: string;
  features?: string[];
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: string[]; // Supports **bold** for highlights
  items?: SlideItem[]; // For structured content like Accordion or Rich Cards
  visualContent?: React.ReactNode; 
  footer?: string;
  bottomBanner?: {
    text: string;
    type: 'info' | 'warning' | 'error';
  };
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}
