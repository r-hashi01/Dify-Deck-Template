import type { Deck } from './extraTypes';

export const deck: Deck = {
  config: {
    title: 'Dify 101B: 技術基礎',
    theme: '../theme-dify',
    browserExporter: true,
    favicon: '/assets/icon/Dify-if.svg',
    defaults: {
      deckName: 'Dify 101B: 技術基礎',
      copyright: '© 2026 LangGenius K.K. All rights reserved.',
      authorName: 'Japan FDE Team',
    },
  },
  slides: [
    // Title Slide
    {
      layout: 'title',
      slideTitle: '技術基礎とデプロイ演習',
      subtitle: 'Dify エコシステムパートナー トレーニングシリーズ',
      seriesTitle: 'Dify EE 101B',
      label: 'Dify Ecosystem Partner Training',
      teamName: 'Japan FDE Team',
      tagline: 'Infrastructure for Intuitive LLM App Development',
    },
    // Course Goals
    {
      layout: 'cards',
      slideTitle: 'コースの目標',
      items: [
        { title: 'コアアーキテクチャ', description: 'Dify EE のコアサービス構成、トラフィック経路、実行モデルを理解する。', icon: 'layers', color: 'blue' },
        { title: '最小デプロイ', description: 'K8s/Helm デプロイスキルを習得し、「最小限の使用可能な環境」を独自に構築できるようにする。', icon: 'server', color: 'purple' },
        { title: '技術サービス', description: '基本的なセキュリティと可観測性の知識を備え、トラブルシューティングと技術サポートの方法を習得する。', icon: 'line-chart', color: 'green' },
      ],
    },
    // Course Overview
    {
      layout: 'content',
      slideTitle: 'コース概要',
      items: [
        '1. [アーキテクチャとモジュール] コアサービスの分解と通信リンク',
        '2. [データ構造] データベーススキーマとビジネスの対応付け',
        '3. [デプロイ実習] Hands-on Labs (K8s/Helm)',
        '4. [技術サービス] トラブルシューティングガイドとベストプラクティス',
      ],
    },
    // Section: What is Dify?
    {
      layout: 'section',
      slideTitle: '第1章：アーキテクチャとモジュールの概要',
    },
    // What is Dify?
    {
      layout: 'diagram',
      slideTitle: '1.1 Dify エディションとデプロイ方法',
      subtitle: 'シナリオが形態を決定する',
      imageUrl: '/assets/image/dify-deploy.png',
    },
    // Edition Overview
    {
      layout: 'presenter-compact',
      slideTitle: '1.2 Dify EE アーキテクチャ総覧',
      subtitle: 'マイクロサービスアーキテクチャとトラフィックエントリ',
      details: [
        {
          text: 'クリティカルパス',
          children: [
            '1. トラフィックエントリ: Ingress -> Gateway (Nginx/Caddy)', 
            '2. コアアプリ: API / Web / Enterprise がビジネスロジックを処理', 
            '3. 非同期処理: Redis Queue -> Worker がタスクを消費', 
            '4. 永続化: Postgres (ビジネスデータ) + Redis (キャッシュ) + VectorDB', 
            '5. 外部依存: S3 (ファイル) + LLM Providers'
          ]
        }
      ],
      imageUrl: '/assets/image/dify-gateway.png',
    },
    // Self-host Pricing
    {
      layout: 'content',
      slideTitle: '1.3 サービス分類 (Service Taxonomy)',
      items: [
        '**1. エントリ層**: Gateway (統一リバースプロキシ)',
        '**2. アプリ層**: API, Web, Enterprise, Enterprise-Frontend',
        '**3. 非同期層**: Worker (タスク実行), Worker Beat (タスクスケジューリング)',
        '**4. 監査層**: Enterprise Audit (ログ記録)',
        '**5. 補助層**: Sandbox (コードサンドボックス), SSRF Proxy, Unstructured',
        '**6. プラグイン層**: Plugin Daemon/Manager/Connector/Controller'
      ]
    },
    // Lab A
    {
      layout: 'presenter-compact',
      slideTitle: '1.4 コアサービス/Gateway & API',
      details: [
        {
          text: 'Gateway (エントリゲートウェイ)',
          children: [
            'Caddy/Nginx ベース、統一ルーティング', 
            'ポート: `80` (HTTP) / `443` (HTTPS)',
            '役割: リバースプロキシ、CORS、静的リソースキャッシュ'
          ]
        },
        {
          text: 'API Service (コアバックエンド)',
          children: [
            'Python/Flask アプリ、ビジネスロジックの中枢',
            'ポート: `5001`',
            '役割: 認証、モデル呼び出し、ワークフローオーケストレーション',
            '依存: Postgres, Redis, VectorDB'
          ]
        }
      ],
      terminal: {
        title: 'Terminal',
        lines: [
          { type: 'output', text: '10.0.1.5 - - [30/Nov/2025]"POST /v1/chat-messages HTTP/1.1"200 1420' },
          { type: 'output', text: '10.0.1.5 - - [30/Nov/2025]"GET /v1/conversations HTTP/1.1"200 540' },
          { type: 'output', text: 'upstream_connect_time="0.045"upstream_response_time="1.200"' }
        ]
      },
    },
    {
      layout: 'presenter-compact',
      slideTitle: '1.5 非同期処理/Worker & Beat',
      subtitle: 'Dify の心臓と脈拍',
      details: [
        {
          text: 'Worker (タスク実行者)',
          children: [
            'Redis Queue から Celery タスクを消費', 
            'Service ポートなし、Redis へのクライアントとして動作',
            '処理: RAG インデックス、ファイル解析、メール送信、長時間ワークフロー',
            '水平スケーリング可能 (HPA)'
          ]
        },
        {
          text: 'Worker Beat (スケジューラ)',
          children: [
            '定期タスク (Crontab) を生成',
            'シングルトン必須 (Replicas=1)、タスク重複防止',
            '役割: クリーンアップ、監視、同期などの周期的動作のトリガー',
          ]
        }
      ],
      imageUrl: '/assets/image/dify-worker-beat.png',
    },
    {
      layout: 'presenter-compact',
      slideTitle: '1.6 エンタープライズサービス (Enterprise)',
      details: [
        {
          text: 'Enterprise Backend',
          children: [
            'ポート: `8082` (HTTP) / `9000` (gRPC)', 
            'SSO、RBAC、Team Management などのエンタープライズ機能を提供',
            'API Service とメインデータベースを共有'
          ]
        },
        {
          text: 'Enterprise Audit',
          children: [
            'ポート: `8083`',
            '独立した監査サービス、操作ログを記録',
            '監査データベース (`audit`) に接続、コンプライアンスクエリをサポート',
          ]
        }
      ],
      imageUrl: '/assets/image/dify-enterprise.png',
    },
    {
      layout: 'presenter-compact',
      slideTitle: '1.7.1 コードサンドボックス (Sandbox)',
      subtitle: '分離された安全な実行環境',
      details: [
        {
          text: 'コアメカニズム (dify-sandbox)',
          children: [
            'Seccomp: システムコール (Syscall) を制限、ネットワークアクセス制御を含む (非独立 NetNS)', 
            'Chroot: ファイルシステムアクセス範囲を制限',
            'Privilege: setuid/setgid 権限降格 + SetNoNewPrivs 権限昇格防止'
          ]
        },
        {
          text: 'フロー',
          children: [
            '1. API がコードを送信 -> Sandbox SVC (Port 8194)',
            '2. 子プロセス起動 -> InitSeccomp -> Chroot -> SetNoNewPrivs',
            '3. 実行制限: ホワイトリスト内のシステムコールのみ許可、デフォルトでネットワークなし',
          ]
        }
      ],
      imageUrl: '/assets/image/dify-sandbox.png',
    },
    {
      layout: 'presenter-compact',
      slideTitle: '1.7.2 なぜ Sandbox に Root が必要なのか？',
      subtitle: 'メインプロセスリスナー & 子プロセス権限降格モデル',
      details: [
        {
          text: 'Service Start (One-time)',
          children: [
            'UID 0 (Root) でメインプロセスを起動', 
            'Sandbox ユーザー (UID 65537) を準備、ポート 8194 をリッスン'
          ]
        },
        {
          text: 'Request Loop (Fork Model)',
          children: [
            '1. コード実行リクエスト受信 -> 子プロセスを Fork',
            '2. Main Process: リッスンを継続、Root 権限を保持',
            '3. Child Process: 権限降格とコード実行を行う',
          ]
        },
        {
          text: 'Child Isolation',
          children: [
            'Chroot & Seccomp & SetNoNewPrivs',
            'Setuid -> 65537: 最終的にユーザー ID を切り替えてユーザーコードを実行'
          ]
        }
      ],
      imageUrl: '/assets/image/dify-sandbox-process.png',
    },
    {
      layout: 'presenter-compact',
      slideTitle: '1.7.3 SSRF 保護プロキシ',
      subtitle: 'イントラネット侵入を防ぐ重要な防衛線',
      details: [
        {
          text: 'SSRF リスク',
          children: [
            'ユーザーが API ツールでイントラネット URL (例: `http://192.168.1.1/admin`) を入力', 
            'サーバーが直接リクエストすると、イントラネットの機密情報が漏洩する'
          ]
        },
        {
          text: '保護メカニズム',
          children: [
            '1. すべての外部 HTTP リクエストを Squid Proxy (Port 3128) 経由にする',
            '2. Proxy がターゲットドメイン IP を解決',
            '3. ACL フィルタリング: `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`, `127.0.0.1` などのプライベート範囲をブロック',
            '4. パブリック IP トラフィックのみ許可'
          ]
        },
      ],
      imageUrl: '/assets/image/dify-sandbox-process.png',
    },
    {
      layout: 'cards',
      slideTitle: '1.7.4 その他の補助サービス',
      items: [
        { title: 'Unstructured ETL', description: '非構造化ドキュメント解析サービス (Port 8000)。PDF/PPT/HTML などの複雑なフォーマットを処理し、RAG 用にテキストを抽出', icon: 'file-text', color: 'black' }
      ],
    },
    {
      layout: 'section',
      slideTitle: '1.8 プラグインエコシステムアーキテクチャ',
    },
    {
      layout: 'presenter-compact',
      slideTitle: 'プラグインサービスコンポーネント',
      details: [
        {
          text: 'Plugin Manager',
          children: [
            'プラグインマーケットプレイスバックエンド、プラグインメタデータと権限を管理', 
            'ポート: `8084` (HTTP) / `9084` (gRPC)'
          ]
        },
        {
          text: 'Plugin Daemon',
          children: [
            'ランタイムデーモン、プラグインのライフサイクルと呼び出しを担当',
            'API/Worker からの`dispatch`リクエストを受信',
            'ポート: `5002` (API)'
          ]
        },
        {
          text: 'Plugin Connector & Runtime',
          children: [
            'Connector: SRI プロトコル実装、K8s/Lambda で Pod を管理',
            'Runtime: 実際にプラグインコードを実行する Pod、Sidecar 経由で外部と通信'
          ]
        },
      ],
      imageUrl: '/assets/image/dify-plugin-service.png',
    },
    {
      layout: 'content',
      slideTitle: '1.9 デプロイ側の重要な注意事項',
      items: [
        '⚠️ **Beat Singleton**: `workerBeat.enabled` は1つの Pod でのみ有効にし、決して複数レプリカにしないでください',
        '🔒 **外部アクセス**: デフォルトは ClusterIP。外部アクセスには Ingress または LoadBalancer を構成します',
        '💾 **永続化**: 本番環境では、Chart 組み込みの StatefulSet ではなく、マネージド RDS/Redis/S3 を強く推奨します',
        '🛡️ **セキュリティ**: デフォルトのパスワードを変更し、TLS 証明書を構成し、SSRF Proxy を有効にしてください'
      ]
    },
    // Part 1 Summary
    {
      layout: 'macro-focus',
      slideTitle: '第1章のまとめ',
      items: [
        'コアリンク: Gateway -> API -> Worker は最も基本的なビジネスの三角形です',
        'エンタープライズ機能: Enterprise + Audit は、ビジネスから独立した管理層を提供します',
        'プラグインシステム: 拡張機能の動的ロードを担当する独立したマイクロサービスグループ',
        '本番環境のアドバイス: 状態データ (DB) の分離とステートレスサービス (App) の拡張に焦点を当ててください'
      ],
    },
    // Section: Why Dify?
    {
      layout: 'section',
      slideTitle: '第2章：Dify EE データ構造',
    },
    {
      layout: 'presenter-compact',
      slideTitle: '2.1 メインデータベース/テナントとアカウント',
      subtitle: 'Table Group: Identity & Auth',
      details: [
        {
          text: 'DB名: `dify`',
        },
        {
          text: '最も中心的な基本データ。「誰」が「どこ」で「何」をするかを記録',
          children: [
            'tenants: テナント/ワークスペース、データ分離の境界',
            'accounts: 登録ユーザー、テナントと多対多で関連付け',
            'tenant_account_joins: 関連テーブル、ロール (Role) を定義',
            'account_integrates: サードパーティログイン (OAuth)'
          ]
        },
      ],
      imageUrl: '/assets/image/dify-db-tenant-account.png',
    },
    {
      layout: 'presenter-compact',
      slideTitle: '2.2 メインデータベース/アプリとワークフロー',
      subtitle: 'Table Group: Application Logic',
      details: [
        {
          text: 'App 定義',
          children: [
            'apps: アプリメタデータ (Name, Mode, Icon)',
            'app_model_configs: アプリモデル、パラメータ、および Prompt 設定'
          ]
        },
        {
          text: 'Workflow 定義',
          children: [
            'workflows: DSL バージョン管理とグラフ構造定義',
            'workflow_runs: 実行インスタンス、ステータスと所要時間を記録',
            'workflow_node_executions: ノードレベルの実行詳細'
          ]
        },
      ],
      imageUrl: '/assets/image/dify-db-app-logic.png',
    },
    {
      layout: 'presenter-compact',
      slideTitle: '2.3 メインデータベース/ナレッジベース (RAG)',
      subtitle: 'Table Group: Dataset & Document',
      details: [
        {
          text: 'データ階層',
          children: [
            '1. datasets: ナレッジベースコンテナ',
            '2. documents: アップロードされたファイル/データソース',
            '3. document_segments: 分割されたテキストチャンク (Chunk)'
          ]
        },
        {
          text: '主要な関連付け',
          children: [
            'dataset_collection_bindings: VectorDB Collection を関連付け',
            'embeddings: Embedding 結果をキャッシュ (Hash 対応)'
          ]
        },
      ],
      imageUrl: '/assets/image/dify-db-rag.png',
    },
    {
      layout: 'presenter-compact',
      slideTitle: '2.4 メインデータベース/プラグインエコシステム',
      subtitle: 'Table Group: Lifecycle & Runtime',
      details: [
        {
          text: 'プラグインのライフサイクル、インストール記録、実行時ステータスを管理'
        },
        {
          text: 'コアテーブル構造',
          children: [
            'plugins: プラグインパッケージメタデータ (Name, Tag, Author)',
            'plugin_declarations: `manifest.yaml` 解析後の設定',
            'plugin_installations: テナントインストール記録 (Tenant -> Plugin)'
          ]
        },
        {
          text: 'ランタイムテーブル',
          children: [
            'serverless_runtimes: 対応する Serverless 関数のエンドポイント',
            'tool/model_installations: 特定の機能のインスタンス化記録'
          ]
        },
      ],
      imageUrl: '/assets/image/dify-db-plugin.png',
    },
    {
      layout: 'cards',
      slideTitle: '2.5 その他の重要なデータベース',
      items: [
        { 
          title: 'Audit DB', 
          description: 'DB: `audit`で、`audit_logs` を保存し、すべての操作動作を記録。コンプライアンスの不変性要件を満たすために独立して保存', 
          icon: 'file-text', 
          color: 'black' 
        },
        { 
          title: 'Enterprise DB', 
          description: 'DB: `enterprise`で、`sys_users` (管理者)、`licenses`、`member_groups` (RBAC) を保存', 
          icon: 'shield', 
          color: 'purple' 
        }
      ],
    },
    {
      layout: 'macro-focus',
      slideTitle: '第2章のまとめ',
      items: [
        'マルチDBアーキテクチャ: ビジネス(dify)、監査(audit)、プラグイン(plugin)、エンタープライズ(enterprise) の4つのDB分離',
        'トラブルシューティングの鍵: 問題は通常 `workflow_runs` (実行失敗) または `document_segments` (リコール失敗) にあります',
        'データ分離: Tenant ID は、すべてのビジネステーブルを貫通するコアフィールドです'
      ],
    },
    {
      layout: 'section',
      slideTitle: '第3章：ハンズオンラボ',
    },
    {
      layout: 'cards',
      slideTitle: '3.1 ラボの前提条件',
      items: [
        { 
          title: '✅ 環境準備', 
          description: 'Linux/macOS, Docker Desktop または Minikube/Kind', 
          icon: 'code', 
          color: 'green' 
        },
        { 
          title: '✅ ツールチェーン', 
          description: 'kubectl, helm, git がインストールされ、パスが設定されていること', 
          icon: 'settings', 
          color: 'green' 
        },
        { 
          title: '⭕ リソース要件', 
          description: '少なくとも 4 Core CPU、8GB RAM (K8s + DB 実行用) を推奨', 
          icon: 'cpu', 
          color: 'orange' 
        }
      ],
    },
    {
      layout: 'presenter-compact',
      slideTitle: 'Lab A/ values.yaml の作成',
      details: [
        {
          text: '目標: ローカルに適した最小構成を作成する'
        },
        {
          text: 'コア設定',
          children: [
            '1. `global.mode`: `api` (バックエンドのみ) または `standard` (フルスタック) を選択',
            '2. `service.type`: ローカル開発は `NodePort` 推奨、本番環境は `ClusterIP`',
            '3. `external`: ホストマシンの DB を再利用する場合、ホスト IP を正しく設定する (localhost 不可)'
          ]
        },
        {
          text: 'なぜ補助ツールを使用するのか',
          children: [
            '公式 Chart には 500 以上の設定項目があり、手書きは間違いやすい',
            'バージョンアップグレード時に、古い設定ファイルに新しい重要なフィールドが欠けている可能性がある',
            'ツールは HA (高可用性) とシングルモードのパラメータの違いを自動的に処理する'
          ]
        },
      ],
      highlights: [
        {
          icon: 'Settings',
          title: 'Helm Values Generator',
          subtitle: 'Dify EE 設定ジェネレーター。モジュール式設定と自動スイッチカスケード設定をサポートし、標準 YAML をエクスポート。',
          color: 'blue',
          link: 'https://github.com/langgenius/dify-ee-helm-chart-values-generator',
          popup: {
            title: 'Dify Helm Values Generator',
            description: 'Dify Enterprise Helm Chart Values Generator は、Dify Enterprise 版向けに設計された設定生成ツールです。',
            features: [
              { title: 'モジュール式設定', description: '複雑な values.yamlをグローバル、インフラ、ネットワーク、メール、プラグインモジュールに分割します。' },
              { title: 'スマートな依存関係処理', description: 'コンポーネント間の排他と依存関係を自動処理します。' },
              { title: 'キー自動生成', description: 'OpenSSLジェネレーターを内蔵し、セキュリティ基準に準拠したランダムキーを自動生成します。' },
            ],
            hint: 'ヒント：このツールは現在 Python スクリプト形式で提供されています。ローカル環境で実行することをお勧めします。',
            linkText: 'Visit Project'
          }
        },
        {
          icon: 'git-branch',
          title: 'Helm Watchdog',
          subtitle: '設定ドリフト検出ツール。「ローカル values.yaml」と「公式最新 Chart」を比較し、欠落している新しいフィールドや廃止された古いフィールドを強調表示します。',
          color: 'purple',
          link: 'https://dify-helm-watchdog.vercel.app/',
          popup: {
            title: 'Helm Watchdog Utility',
            description: 'Helm Watchdog は、長期的なメンテナンスプロセスにおけるバージョン差異の問題を解決するために設計された、可視化された設定ドリフト検出 Web ツールです',
            features: [
              { title: 'オンライン比較', description: 'ブラウザでローカル values.yaml を直接アップロードし、公式最新 Chart と Diff を行います' },
              { title: '廃止警告', description: '廃止された設定項目を自動検出し警告することで、アップグレードの失敗を防ぎます' },
              { title: '新規発見', description: '新しいバージョンで導入された主要な機能スイッチ (Feature Flags) を強調表示します' },
            ],
            hint: 'ローカルツールをインストールする必要はなく、Web ページを開くだけで使用できます',
            linkText: 'Visit Project'
          }
        }
      ],
    },
    {
      layout: 'presenter-compact',
      slideTitle: 'Lab B/ Dify EE のインストール',
      details: [
        {
          text: 'インストール実行'
        },
        {
          text: '検証手順',
          children: [
            '1. `kubectl get pods` すべての Pod が Running であることを確認',
            '2. `kubectl logs -f deploy/dify-api` エラーがないことを確認',
            '3. `http://console.dify.local` にアクセスし、ログインページを確認'
          ]
        },
        {
          text: 'よくある問題',
          children: [
            'イメージプル失敗 (ImagePullBackOff) -> ネットワーク/プロキシを確認',
            'DB 接続失敗 (CrashLoopBackOff) -> パスワード/Host を確認'
          ]
        },
      ],
      terminal: {
        title: 'Terminal',
        lines: [
          { type: 'command', text: 'helm repo add dify https://langgenius.github.io/dify-helm' },
          { type: 'command', text: 'helm upgrade -i dify dify/dify -f values.yaml' },
          { type: 'output', text: 'Release "dify" has been upgraded. Happy Helming!' },
          { type: 'command', text: 'kubectl get pods' },
          { type: 'output', text: 'NAME                      READY   STATUS    RESTARTS' },
          { type: 'output', text: 'dify-api-7b8c9d-abcde     1/1     Running   0' },
          { type: 'output', text: 'dify-web-6f5a4b-12345     1/1     Running   0' },
          { type: 'output', text: 'dify-worker-8g7h6j-zxywv  1/1     Running   0' },
        ]
      }
    },
    {
      layout: 'content',
      slideTitle: 'Lab C/D/E/ ビジネス検証',
      items: [
        {
          text: 'Lab C: プラグインインストール',
          children: [
            'Plugin マーケットで`Jina` (Embedding) と`OpenAI` (LLM) をインストール',
            'API Key を設定し、接続をテスト'
          ]
        },
        {
          text: 'Lab D: ナレッジベース作成',
          children: [
            'PDF ドキュメントをアップロードし、ETL とインデックス作成プロセスを観察'
          ]
        },
        {
          text: 'Lab E: Chatflow オーケストレーション',
          children: [
            '単純な RAG Flow を作成: `Start -> Retriever -> LLM -> End`',
            'Debug を実行し、Trace ビューでノードの所要時間を観察'
          ]
        },
      ],
    },
    {
      layout: 'macro-focus',
      slideTitle: '第3章のまとめ',
      items: [
        '最小ループ: Env -> Helm -> Install -> Verify',
        '検証の核心: Pod ステータスが正常であることは第一歩に過ぎず、ビジネスフローがスムーズであることがゴールです',
        '実践の価値: 自ら遭遇したすべてのエラーは、将来顧客の問題を解決するための経験になります'
      ],
    },
    {
      layout: 'section',
      slideTitle: '第4章：顧客技術サービスガイド',
    },
    {
      layout: 'presenter-compact',
      slideTitle: '4.1 責任の合意 (SLA)',
      subtitle: '階層型サービスモデル',
      details: [
        {
          text: 'なぜ階層化が必要か？',
          children: [
            '効率最大化: 問題の 80% は設定や使用層に属し、フロントエンドで解決すべき',
            'リソース集中: 公式チームは 20% のコアコードの難題に集中'
          ]
        },
        {
          text: 'Partner の価値',
          children: [
            'Partner は単なる販売チャネルではなく、技術サービスの第一防衛線です。L1/L2 問題を独自に解決できる能力は、Advanced Partner になるための重要な指標です'
          ]
        }
      ],
      highlights: [
        {
          icon: 'message-circle',
          title: 'L1: 使用に関する問い合わせ',
          subtitle: '"アプリの作成方法は？Prompt の効果が悪い？"',
          features: ['Response: ビジネスコンサルタント / デリバリーチーム'],
          color: 'green',
          badge: 'Partner',
        },
        {
          icon: 'server',
          title: 'L2: 環境運用',
          subtitle: '"K8s デプロイエラー、証明書期限切れ、ネットワーク不通"',
          features: ['Response: 運用エンジニア / アーキテクト'],
          color: 'blue',
          badge: 'Partner',
        },
        {
          icon: 'alert-circle',
          title: 'L3: 製品の欠陥',
          subtitle: '"コアコードのバグ、セキュリティ脆弱性、論理エラー"',
          features: ['Response: Dify コア R&D チーム'],
          color: 'red',
          badge: 'Dify Official',
          badgeColor: 'dark',
        },
      ],
    },
    {
      layout: 'presenter-compact',
      slideTitle: '4.2 デバッグツール/Vibe-Debugging',
      subtitle: 'AI をトラブルシューティングに活用',
      details: [
        {
          text: '1. コンテキスト構築: Dify コアリポジトリをローカルに一括クローンし、AI コーディングアシスタント (Cursor / Antigravity / Claude Code) にインポート',
        },
        {
          text: '2. 正確なプロンプト',
          children: [
            '"この設定項目は具体的に何をしますか？"',
            '"エラーログはどのコードセグメントに対応しますか？"',
            '"リトライポリシーを変更するには？"'
          ]
        },
        {
          text: 'Goal: 目標は AI にすべてを修正させることではなく、調査範囲を絞り込み、「コードコンテキスト」を迅速に補完することです'
        }
      ],
      slot: `
<div class="w-full bg-gradient-to-br from-slate-50 to-purple-50/30 rounded-2xl border border-slate-200 p-4">
  <!-- Header -->
  <div class="flex items-start gap-3 mb-4 pb-3 border-b border-slate-200">
    <div class="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
      <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    </div>
    <div>
      <h3 class="font-bold text-base text-slate-800">コアリポジトリリスト (Context Sources)</h3>
      <p class="text-xs text-slate-500">AI ナレッジベースとして同じディレクトリに Clone することを推奨</p>
    </div>
  </div>
  <!-- Repository List -->
  <div class="space-y-2">
    <div class="flex items-center justify-between py-1.5">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
        <span class="font-semibold text-sm text-slate-700">langgenius/dify</span>
      </div>
      <span class="text-xs px-2 py-0.5 rounded border border-slate-300 text-slate-600">Core App</span>
    </div>
    <div class="flex items-center justify-between py-1.5">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        <span class="font-semibold text-sm text-slate-700">langgenius/dify-helm</span>
      </div>
      <span class="text-xs px-2 py-0.5 rounded border border-slate-300 text-slate-600">K8s Charts</span>
    </div>
    <div class="flex items-center justify-between py-1.5">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
        <span class="font-semibold text-sm text-slate-700">langgenius/dify-sandbox</span>
      </div>
      <span class="text-xs px-2 py-0.5 rounded border border-slate-300 text-slate-600">Code Sandbox</span>
    </div>
    <div class="flex items-center justify-between py-1.5">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        <span class="font-semibold text-sm text-slate-700">langgenius/dify-plugin-daemon</span>
      </div>
      <span class="text-xs px-2 py-0.5 rounded border border-slate-300 text-slate-600">Plugin Runtime</span>
    </div>
    <div class="flex items-center justify-between py-1.5">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
        <span class="font-semibold text-sm text-slate-700">langgenius/dify-official-plugins</span>
      </div>
      <span class="text-xs px-2 py-0.5 rounded border border-slate-300 text-slate-600">Plugins</span>
    </div>
  </div>
</div>
      `,
    },
    {
      layout: 'cards',
      slideTitle: '4.3 アップグレードとロールバック SOP',
      items: [
        { 
          title: '1. バックアップ (Backup)', 
          description: 'アップグレード前に必ず DB と VectorDB を完全バックアップする', 
          icon: 'database', 
          color: 'blue' 
        },
        { 
          title: '2. アップグレード (Upgrade)', 
          description: 'Image Tag を変更し、helm upgrade を実行する', 
          icon: 'git-branch', 
          color: 'purple' 
        },
        { 
          title: '3. 検証 (Verify)', 
          description: 'データベース Migration ログを確認し、エラーがないことを確認する', 
          icon: 'check', 
          color: 'green' 
        },
        { 
          title: '4. ロールバック (Rollback)', 
          description: '失敗した場合：DB バックアップを復元 -> Image Tag をダウングレード', 
          icon: 'refresh-cw', 
          color: 'orange' 
        }
      ],
    },
    {
      layout: 'macro-focus',
      slideTitle: '第4章のまとめ',
      items: [
        '境界の明確化：L1/L2/L3 の境界を明確にし、双方のリソースを保護する',
        'ツールの活用：トラブルシューティングに AI を活用し、設定比較に Helm Watchdog を使用する',
        'セキュリティのボトムライン：データバックアップはすべての変更操作の生命線です'
      ],
    },
    // End Slide
    {
      layout: 'end',
      subtitle: 'インタラクションと質疑応答',
      website: 'https://dify.ai',
      email: 'r.hashimoto@dify.ai',
      github: 'langgenius/dify',
    }
  ],
};
