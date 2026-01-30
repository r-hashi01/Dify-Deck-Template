---
name: browser-test
description: Verify UI implementation and user flows using agent-browser. Use when testing frontend changes, validating game flow (create → lobby → play), checking responsive design, or verifying visual elements match the vintage design system.
allowed-tools: Task, Bash, Read
context: fork
agent: general-purpose
user-invocable: true
---

# Browser Testing with Agent-Browser

このスキルは、agent-browserを使用してUIの動作確認とPPTX/PDF出力の検証を行います。

## 使用タイミング

- 新しいコンポーネントやページを実装した後
- バグ修正後の動作確認

## 前提条件

### 開発サーバーの起動確認

```bash
# ポート3000が使用されているか確認
lsof -ti:3000

# 起動していない場合は起動
pnpm dev
```

開発サーバーは http://localhost:3000 で起動します。
