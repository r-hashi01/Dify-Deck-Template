# Dify Deck Template

## プロジェクト概要

Dify 製品紹介用の Slidev スライドテンプレート（モノレポ構成）

## ディレクトリ構造

```
├── packages/
│   ├── theme-dify/          # カスタムテーマ（共通）
│   │   ├── layouts/         # 21種類のスライドレイアウト（Vue）
│   │   ├── components/      # 共有コンポーネント
│   │   └── utils/icons.ts   # Lucideアイコン
│   │
│   └── all-styles-en/       # サンプルデッキ
│       ├── slides.md        # スライドコンテンツ
│       └── package.json
│
├── public/assets/           # ロゴ等の静的ファイル
├── decks.json               # 有効なデッキの管理
├── scripts/
│   ├── dev.js               # 開発サーバー（動的デッキ検出）
│   ├── create-deck.js       # 新規デッキ作成
│   └── generate-index.js    # ビルド時のインデックス生成
│
└── prompt/                  # AI用スタイルガイド
```

## 開発サーバー

```bash
pnpm run dev
```

- **http://localhost:3000/** → デッキ選択画面（動的生成）
- **http://localhost:3001/** → 各デッキ（自動検出）

## ビルド

```bash
pnpm run build   # dist/ に出力
pnpm run serve   # ビルド後にローカルで確認
```

## デザインカラー

- `dify-blue`: `#0B33F3`

---

## 新しいデッキを追加する手順

```bash
# 1. デッキを作成（ポート自動割り当て）
pnpm create-deck my-deck "My Presentation"

# 2. decks.json に追加
{
  "decks": [
    "all-styles-en",
    "my-deck"        ← 追加
  ]
}

# 3. 依存関係をインストール
pnpm install

# 4. 開発サーバー起動
pnpm run dev
```

`decks.json` に記載したデッキのみが表示・起動されます。

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
| `course-overview` | コース概要 |
| `story` | ストーリー |
| `faq` | よくある質問 |
| `license` | ライセンス |
| `key-takeaways` | 重要ポイント |
| `macro-focus` | マクロフォーカス |
| `end` | 終了スライド |
