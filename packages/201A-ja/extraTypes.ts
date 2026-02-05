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

// ポップアップの機能項目
export interface PopupFeature {
  title: string;
  description: string;
}

// ポップアップ設定
export interface PopupConfig {
  title?: string;
  description?: string;
  features?: PopupFeature[];
  hint?: string;
  linkText?: string;
}

// ハイライトカード
export interface HighlightItem {
  icon: string;
  title: string;
  subtitle?: string;
  features?: string[];
  color?: 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'cyan' | 'indigo' | 'gray';
  badge?: string;  // タイトル横のバッジ
  badgeColor?: string;  // バッジの色 ('dark'で黒)
  link?: string;
  popup?: PopupConfig;
}

// ターミナル行の型
export interface TerminalLine {
  type: 'command' | 'output';
  text: string;
}

// ターミナル設定の型
export interface TerminalConfig {
  title?: string;
  lines: TerminalLine[];
}

// split レイアウト（拡張版）
export interface SplitSlide extends BaseSlideProps {
  layout: 'split';
  slideTitle?: string;
  subtitle?: string;
  items?: DetailEntry[];
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageClass?: string;
  highlights?: HighlightItem[];
  terminal?: TerminalConfig;
  textSize?: 'small' | 'medium' | 'large';
}

// ===================
// 拡張 Deck 型
// ===================

// このデッキで使用するスライド型（ベース + カスタム）
export type Slide = BaseSlide | SplitSlide;

// このデッキ用の Deck 型
export interface Deck {
  config: DeckConfig;
  slides: Slide[];
}
