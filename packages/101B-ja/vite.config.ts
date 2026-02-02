import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // ルートのpublicフォルダを直接使用（シンボリンク不要）
  publicDir: resolve(__dirname, '../../public'),
  server: {
    fs: {
      // プロジェクトルート全体へのアクセスを許可
      allow: [
        resolve(__dirname, '../..'),
      ],
    },
  },
  resolve: {
    // シンボリンクを実際のパスに解決
    preserveSymlinks: false,
  },
})
