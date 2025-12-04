import { SlideData } from '../engine/types';
import { SLIDES as templateGuide } from './template-guide';

export interface DeckConfig {
  id: string;
  title: string;
  slides: SlideData[];
}

export const decks: Record<string, DeckConfig> = {
  'template': {
    id: 'template',
    title: 'Template Guide: How to Create Content',
    slides: templateGuide
  }
};

export const getDeck = (id: string): DeckConfig | undefined => {
  return decks[id];
};
