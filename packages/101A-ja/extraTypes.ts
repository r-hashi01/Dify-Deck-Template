// 101A-ja デッキ専用の拡張型定義
import type {
  BaseSlideProps,
  DeckConfig,
  Slide as BaseSlide
} from '../theme-dify/types';

// ===================
// カスタムレイアウト
// ===================

// ネスト可能な詳細項目
export interface DetailItem {
  text: string;
  children?: string[];
}

// 詳細項目の型（文字列またはネスト構造）
export type DetailEntry = string | DetailItem;

// ハイライトカード
export interface HighlightItem {
  icon: string;
  title: string;
  subtitle?: string;
  features?: string[];
  color?: 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'cyan' | 'indigo' | 'gray';
}

// presenter-compact レイアウト
export interface PresenterCompactSlide extends BaseSlideProps {
  layout: 'presenter-compact';
  slideTitle?: string;
  subtitle?: string;
  name?: string;
  details?: DetailEntry[];
  description?: string;
  imageUrl?: string;
  highlights?: HighlightItem[];
}

// ===================
// 拡張 Deck 型
// ===================

// このデッキで使用するスライド型（ベース + カスタム）
export type Slide = BaseSlide | PresenterCompactSlide;

// このデッキ用の Deck 型
export interface Deck {
  config: DeckConfig;
  slides: Slide[];
}
