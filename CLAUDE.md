# Dify Deck Template

## プロジェクト概要

Dify 製品紹介用の Slidev スライドテンプレート（モノレポ構成）

## スライド作成の仕組み

デッキには2つの形式がある:

- **`slides.ts`（推奨）**: TypeScript オブジェクトでスライドを定義。`pnpm generate` で `slides.md` に変換される
- **`slides.md`（直書き）**: `all-styles-en` のようにMarkdownを直接記述（見本用）

`slides.ts` を持つデッキでは **`slides.md` を直接編集しない**（`generate` で上書きされる）。

## コマンド

```bash
pnpm run dev          # generate → 開発サーバー起動
pnpm run build        # generate → 各デッキbuild → index生成 → PDF出力
pnpm run serve        # build → localhost:3000 で確認
pnpm run generate     # slides.ts → slides.md 変換のみ
pnpm run export-pdfs  # PDF エクスポートのみ
pnpm create-deck <name> "<title>"  # 新規デッキ作成
```

- **http://localhost:3000/** → デッキ選択画面（動的生成）
- **http://localhost:3001+/** → 各デッキ（ポート自動割り当て）

## デザインカラー

- `dify-blue`: `#0033FF`

---

## 新しいデッキを追加する手順

```bash
# 1. デッキを作成（ポート自動割り当て）
pnpm create-deck my-deck "My Presentation"

# 2. decks.json に追加
{
  "decks": [
    "101A-ja",
    "my-deck"        ← 追加
  ]
}

# 3. 依存関係をインストール
pnpm install

# 4. 開発サーバー起動
pnpm run dev
```

`decks.json` に記載したデッキのみがビルド・表示対象になる。`all-styles-en` はレイアウト見本用で通常は含めない。

---

## レイアウト一覧

| レイアウト | 用途 |
|-----------|------|
| `title` | タイトルスライド |
| `section` | セクション区切り |
| `chapter-title` | 章タイトル |
| `content` | 基本コンテンツ |
| `split` | 左右分割 |
| `adaptive-content` | 中央寄せコンテンツ |
| `cards` | カードグリッド |
| `accordion` | アコーディオンリスト |
| `focus-cols` | フォーカスカラム |
| `pillars` | ピラーレイアウト |
| `matrix` | 比較表 |
| `diagram` | 図解 |
| `pricing` | 料金プラン |
| `presenter` | 講師紹介 |
| `presenter-compact` | 講師紹介（コンパクト） |
| `course-overview` | コース概要 |
| `story` | ストーリー |
| `faq` | よくある質問 |
| `license` | ライセンス |
| `key-takeaways` | 重要ポイント |
| `macro-focus` | マクロフォーカス |
| `end` | 終了スライド |
