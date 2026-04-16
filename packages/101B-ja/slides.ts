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
    // ===== イントロ (3枚) =====
    // Slide 1: Title
    {
      layout: 'title',
      slideTitle: '技術基礎とデプロイ演習',
      subtitle: 'Dify エコシステムパートナー トレーニングシリーズ',
      seriesTitle: 'Dify EE 101B',
      label: 'Dify Ecosystem Partner Training',
      teamName: 'Japan FDE Team',
      tagline: 'Infrastructure for Intuitive LLM App Development',
      notes: `
【導入：2分】
「Dify のアーキテクチャ？ 正直ブラックボックスだった」――そんな経験はありませんか？

101A では製品の価値と位置付けを学びました。
101B では視点を変えます。「中身を知っていれば、あのとき慌てなかった」を合言葉に、
技術基礎を Before/After 形式で体験していきます。

座学とハンズオンを組み合わせて進めます。
実際に手を動かすパートもありますので、環境の準備をお願いします。
      `,
    },
    // Slide 2: Course Goals (cards, Before→After descriptions)
    {
      layout: 'cards',
      slideTitle: 'コースの目標',
      items: [
        { title: 'コアアーキテクチャ', description: 'Before：サービス構成が分からず障害時に手探り → After：トラフィック経路を図解で説明でき、調査対象を即判断', icon: 'layers', color: 'blue' },
        { title: '最小デプロイ', description: 'Before：500 項目の values.yaml に圧倒 → After：ツールで安全に生成し、最小構成を自力で構築', icon: 'server', color: 'purple' },
        { title: '技術サービス', description: 'Before：エラーが出たら即エスカレーション → After：L1/L2 を自力で切り分け、的確にサポート', icon: 'line-chart', color: 'green' },
      ],
      notes: `
【コース目標：2分】
3つの目標を Before/After で示します。

1つ目：コアアーキテクチャ。障害時に「どのサービスを見ればいいか分からない」状態から、
トラフィック経路を説明できるレベルに引き上げます。

2つ目：最小デプロイ。Helm Chart の設定項目の多さに圧倒される状態から、
ツールを使って安全に環境を構築できるようになります。

3つ目：技術サービス。エラーが出たらすぐ公式に聞く状態から、
L1/L2 を自力で解決できるレベルへ。

この3つが身につけば、技術支援に自信を持てるようになります。
では、全体の流れを確認しましょう。
      `,
    },
    // Slide 3: Course Overview
    {
      layout: 'content',
      slideTitle: 'コース概要',
      items: [
        '1. [アーキテクチャとモジュール] コアサービスの分解と通信リンク',
        '2. [データ構造] データベーススキーマとビジネスの対応付け',
        '3. [デプロイ実習] Hands-on Labs (K8s/Helm)',
        '4. [技術サービス] トラブルシューティングガイドとベストプラクティス',
      ],
      notes: `
【コース概要：1分】
全4章、約90分のコースです。

第1章でアーキテクチャの全体像を掴み、第2章でデータ構造を理解。
第3章で実際にデプロイし、第4章でサポートのベストプラクティスを学びます。

各章で Before（従来の困りごと）と After（知識を得た後の世界）を対比しながら進めます。
では、第1章から始めましょう。
      `,
    },

    // ===== Part 1: アーキテクチャとモジュール (10枚) =====
    // Part1-1: Section
    {
      layout: 'section',
      slideTitle: '第1章：アーキテクチャとモジュールの概要',
      notes: `
【セクション移行：30秒】
第1章「アーキテクチャとモジュール」に入ります。

Before：「画面が表示されない」と言われても、どこを見ればいいか分からない。
After：Gateway → API → Worker の流れを知っていれば、調査対象を即座に絞れる。

このギャップを埋めるのがこの章の目的です。
      `,
    },
    // Part1-2: Before→After エディション選択 (旧1.1)
    {
      layout: 'diagram',
      slideTitle: 'Before → After：エディションの選び方',
      subtitle: '用途に応じた選択肢',
      imageUrl: '/assets/image/dify-deploy.png',
      notes: `
【エディション選択：3分】
Before：「Community と Enterprise、何が違うの？」とお客様に聞かれて即答できない。
After：要件に応じた選択基準を持っていれば、最適な提案ができる。

エディション構成を整理します。
- Community：OSS 版、個人・小規模チーム向け
- Cloud：SaaS 版、すぐに使いたい方向け
- Enterprise Self-hosted：オンプレミス/プライベートクラウド向け
- Enterprise Cloud：専用テナント型 SaaS

お客様の要件に応じた選択基準はシンプルです。
- データを外に出せない → Enterprise Self-hosted
- 運用負荷を減らしたい → Cloud または Enterprise Cloud
- まず試したい → Cloud の無料プラン
- 大規模・高可用性 → Enterprise Self-hosted (K8s)

これが分かると、最初の打ち合わせで的確な提案ができます。
次に、全体アーキテクチャの中身を見ていきましょう。
      `,
    },
    // Part1-3: Before→After 全体像+サービス分類 (旧1.2+1.3 統合)
    {
      layout: 'presenter-compact',
      slideTitle: 'Before → After：ブラックボックスからマイクロサービスマップへ',
      subtitle: 'アーキテクチャ全体像とサービス分類',
      details: [
        {
          text: 'クリティカルパス',
          children: [
            '1. エントリ層: Ingress → Gateway (Nginx/Caddy) — 統一リバースプロキシ',
            '2. アプリ層: API / Web / Enterprise がビジネスロジック、Enterprise-Frontend が管理ダッシュボード',
            '3. 非同期層: Redis Queue → Worker がタスクを実行、Beat がスケジューリング',
            '4. 永続化: Postgres + Redis + VectorDB + S3 (ファイル)',
            '5. 外部依存 + 補助層: LLM Providers, Sandbox, SSRF Proxy, Plugin Daemon 等'
          ]
        }
      ],
      imageUrl: '/assets/image/dify-gateway.png',
      notes: `
【全体像 + サービス分類：4分】
Before：Dify がどんなサービスで構成されているか分からない。障害が起きても手探り。
After：5つの層でサービスを整理でき、問題の切り分けが即座にできる。

クリティカルパスを押さえましょう。

1. エントリ層 — Gateway（Nginx/Caddy）がすべてのリクエストを受ける
2. アプリ層 — API（Python/Flask）、Web（React）、Enterprise がビジネスロジック。Enterprise-Frontend は管理ダッシュボード UI
3. 非同期層 — Worker が Redis Queue からタスクを実行、Beat が定期タスクをスケジューリング
4. 永続化 — Postgres（ビジネスデータ）、Redis（キャッシュ/キュー）、VectorDB（埋め込み）、S3（ファイル）
5. 外部依存 + 補助層 — LLM Providers（OpenAI, Claude 等）、Sandbox、SSRF Proxy、Plugin 系サービス

覚えるべきは「Gateway → API → Worker」の三角形。
問題が起きたら、まずこの3つを確認してください。

では、各サービスを詳しく見ていきます。
      `,
    },
    // Part1-4: Gateway & API (旧1.4)
    {
      layout: 'presenter-compact',
      slideTitle: 'Gateway & API',
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
      notes: `
【Gateway & API：3分】
コアサービスの2つを詳しく見ます。

Gateway はすべての通信の入口です。502 なら API が落ちている、504 なら応答遅延。
このパターンを知っているだけで、初動が速くなります。

API は Python/Flask のバックエンド。認証、モデル呼び出し、ワークフロー実行の中枢です。
ポート 5001 で動作し、Postgres・Redis・VectorDB に依存します。

画面のターミナルは Gateway のアクセスログ例です。
upstream_response_time が大きければ、API 側の処理にボトルネックがあります。

次は非同期処理を担う Worker を見ましょう。
      `,
    },
    // Part1-5: Worker & Beat (旧1.5)
    {
      layout: 'presenter-compact',
      slideTitle: 'Worker & Beat',
      subtitle: 'バックグラウンド処理の仕組み',
      details: [
        {
          text: 'Worker (タスク実行者)',
          children: [
            'Redis Queue から Celery タスクを取得して実行',
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
            '役割: クリーンアップ、監視、同期などの定期処理をトリガー',
          ]
        }
      ],
      imageUrl: '/assets/image/dify-worker-beat.png',
      notes: `
【Worker & Beat：3分】
バックグラウンド処理を担う重要なサービスです。

Worker は Redis Queue から Celery タスクを取得して実行します。
RAG インデックス作成、ファイル解析、長時間ワークフローなど重い処理を担当。
処理が追いつかなければ Pod を増やせます（HPA 対応）。

Beat は定期タスクのスケジューラ。必ずシングルトン（1 Pod）で運用してください。
複数起動するとタスクが重複生成され、データ不整合の原因になります。

トラブルシューティングの定石：
- タスクが実行されない → Worker の Pod 状態を確認
- タスクが重複実行 → Beat が複数起動していないか確認
- キューが溜まる → Worker をスケールアウト

次はエンタープライズ固有のサービスです。
      `,
    },
    // Part1-6: エンタープライズサービス (旧1.6)
    {
      layout: 'presenter-compact',
      slideTitle: 'エンタープライズサービス',
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
            '監査データベース (`audit`) に接続、コンプライアンス監査に対応',
          ]
        }
      ],
      imageUrl: '/assets/image/dify-enterprise.png',
      notes: `
【エンタープライズサービス：2分】
Enterprise 版でのみ利用可能なサービス群です。

Enterprise Backend（ポート 8082/9000）は SSO・RBAC・チーム管理を提供。
メインの Postgres を共有しています。

Enterprise Audit（ポート 8083）は操作ログを独立した audit DB に記録します。
監査ログは改ざん不可・長期保存が求められるため、ビジネスデータと分離しています。

Enterprise 版を選ぶ主な理由の一つがこの監査機能です。
「いつ、誰が、何をしたか」の追跡は、大企業のセキュリティ要件を満たすために必須です。

次はセキュリティ隔離の仕組みを見ましょう。
      `,
    },
    // Part1-7: Before→After セキュリティ隔離 (旧1.7.1+1.7.2+1.7.3+1.7.4 統合)
    {
      layout: 'presenter-compact',
      slideTitle: 'Before → After：セキュリティ隔離',
      subtitle: 'Sandbox・SSRF Proxy・Unstructured を一枚で',
      details: [
        {
          text: 'Sandbox (コードサンドボックス)',
          children: [
            'Seccomp + Chroot + 権限降格 の3層防御',
            'Root は制御プロセスのみ。ユーザーコードは UID 65537 の隔離環境で実行',
            'ポート: `8194`'
          ]
        },
        {
          text: 'SSRF 保護プロキシ',
          children: [
            'Squid Proxy (Port 3128) でプライベート IP をブロック',
            'ユーザー入力 URL がイントラネットにアクセスするのを防止'
          ]
        },
        {
          text: 'Unstructured ETL',
          children: [
            'PDF/PPT/HTML 等のドキュメント解析サービス (Port 8000)',
            'RAG 用テキスト抽出に特化'
          ]
        }
      ],
      imageUrl: '/assets/image/dify-sandbox-process.png',
      notes: `
【セキュリティ隔離：4分】
Before：「Sandbox が Root で動いてる」「SSRF って何？」とお客様に聞かれて困る。
After：3つの補助サービスの役割と防御メカニズムを説明できる。

Sandbox はユーザーコードを安全に実行する仕組みです。
実行フロー：API がコードを送信 → Port 8194 で受信 → 子プロセスを Fork →
InitSeccomp（syscall 制限）→ Chroot（FS 制限）→ SetNoNewPrivs → UID 65537 でコード実行。
Root で動いているのは制御プロセスだけ。実際のコード実行は最小権限の子プロセスで行われます。

SSRF 保護プロキシは、ユーザーが API ツールで入力した URL が内部ネットワークにアクセスするのを防ぎます。
すべての外部 HTTP リクエストを Squid Proxy (Port 3128) 経由にし、以下のプライベート IP 範囲をブロック：
- 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, 127.0.0.1
攻撃例：http://169.254.169.254/（AWS メタデータ）、http://localhost:6379/（内部 Redis）

Unstructured ETL は PDF/PPT/HTML/Word 等の複雑なフォーマットを解析する専門サービスです。
API に組み込むと重くなるため分離されています。

これら3つをまとめて「セキュリティ補助サービス」と覚えておけば十分です。
次はプラグインエコシステムです。
      `,
    },
    // Part1-8: プラグインエコシステム (旧1.8セクション+コンポーネント 統合)
    {
      layout: 'presenter-compact',
      slideTitle: 'プラグインエコシステム',
      details: [
        {
          text: 'Plugin Manager',
          children: [
            'プラグインのバックエンド。メタデータと権限を管理',
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
      notes: `
【プラグインエコシステム：3分】
Dify の機能拡張を支えるプラグインシステムです。

Plugin Manager（ポート 8084/9084）がメタデータと権限を管理。
Plugin Daemon（ポート 5002）がライフサイクルと呼び出しを担当。
Connector & Runtime が実際のプラグインコードを隔離されたコンテナで実行します。

呼び出しフロー：
ユーザー操作 → API が Daemon に dispatch → Runtime でコード実行 → 結果を返却

プラグインは独立コンテナで動くため、メインアプリに影響を与えません。
セキュリティとスケーラビリティを両立した設計です。

次はデプロイ時の注意事項をまとめます。
      `,
    },
    // Part1-9: デプロイ注意事項 (旧1.9)
    {
      layout: 'content',
      slideTitle: 'デプロイ側の重要な注意事項',
      items: [
        '⚠️ **Beat Singleton**: `workerBeat.enabled` は1つの Pod でのみ有効にし、決して複数レプリカにしないでください',
        '🔒 **外部アクセス**: デフォルトは ClusterIP。外部アクセスには Ingress または LoadBalancer を構成します',
        '💾 **永続化**: 本番環境では、Chart 組み込みの StatefulSet ではなく、マネージド RDS/Redis/S3 を強く推奨します',
        '🛡️ **セキュリティ**: デフォルトのパスワードを変更し、TLS 証明書を構成し、SSRF Proxy を有効にしてください'
      ],
      notes: `
【デプロイ注意事項：2分】
本番デプロイで必ず確認すべき4点です。

Beat は必ず1 Pod。複数起動するとタスクが重複します。
外部アクセスは Ingress か LoadBalancer を設定。デフォルトは ClusterIP で外から見えません。
永続化はマネージド RDS/Redis/S3 を強く推奨。バックアップとスケーリングが格段に楽になります。
セキュリティはデフォルトパスワードの変更、TLS 設定、SSRF Proxy の有効化を忘れずに。

この4点をチェックリストとして使ってください。
では、第1章のまとめです。
      `,
    },
    // Part1-10: 第1章まとめ
    {
      layout: 'macro-focus',
      slideTitle: '第1章のまとめ',
      items: [
        'Before：サービス構成がブラックボックス → After：Gateway → API → Worker の流れで障害箇所を即特定',
        'Before：Enterprise 版の違いが説明できない → After：SSO/RBAC/Audit の管理層を理解し提案可能',
        'Before：セキュリティの質問に答えられない → After：Sandbox・SSRF Proxy・プラグイン隔離の仕組みを説明可能'
      ],
      notes: `
【第1章まとめ：1分】
Before：サービス構成が分からず障害時に手探り。
After：5つの層でサービスを整理し、Gateway → API → Worker の三角形で即切り分け。

完璧に覚える必要はありません。
「どのサービスが何をしているか」の地図を持っておけば、問題発生時に適切な場所を調べられます。

次は第2章、データ構造に入ります。
      `,
    },

    // ===== Part 2: データ構造 (6枚) =====
    // Part2-1: Section
    {
      layout: 'section',
      slideTitle: '第2章：Dify EE データ構造',
      notes: `
【セクション移行：30秒】
第2章「データ構造」に入ります。

Before：テーブル名も DB 名も知らない。問題が起きてもどこを見ればいいか分からない。
After：問題の種類に応じて、見るべきテーブルに直行できる。

このギャップを埋めていきましょう。
      `,
    },
    // Part2-2: テナントとアカウント
    {
      layout: 'presenter-compact',
      slideTitle: 'テナントとアカウント',
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
      notes: `
【テナントとアカウント：3分】
Before：「ログインできない」と言われても、原因が特定できない。
After：tenants / accounts / tenant_account_joins を見れば即座に切り分けられる。

メインデータベース（dify）の中核テーブルです。

tenants はワークスペースを表し、マルチテナントのデータ分離の境界。
accounts は登録ユーザー。tenants とは多対多の関係です。
tenant_account_joins がその関連テーブルで、ロール（owner, admin, member）を定義。
account_integrates は OAuth 連携情報。

「ログインできない」「権限がない」→ このテーブル群を確認。
次は、アプリとワークフローのデータ構造です。
      `,
    },
    // Part2-3: アプリとワークフロー
    {
      layout: 'presenter-compact',
      slideTitle: 'アプリとワークフロー',
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
      notes: `
【アプリとワークフロー：3分】
Before：ワークフローが失敗してもお手上げ。
After：workflow_runs と workflow_node_executions で原因を特定できる。

apps テーブルがアプリのメタデータ（名前、モード、アイコン）を保存。
app_model_configs が LLM やパラメータ、Prompt テンプレートの設定。

workflows テーブルが DSL（グラフ構造）を保持し、draft/published の2状態を管理。
workflow_runs が実行インスタンスで、ステータス・実行時間・入出力を記録。
workflow_node_executions がノードレベルの実行詳細。

トラブルシューティングの定石：
- 「ワークフローが失敗した」→ workflow_runs を確認
- 「特定のノードで止まる」→ workflow_node_executions を確認

次は RAG のデータ構造です。
      `,
    },
    // Part2-4: ナレッジベース (RAG)
    {
      layout: 'presenter-compact',
      slideTitle: 'ナレッジベース (RAG)',
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
      notes: `
【ナレッジベース (RAG)：3分】
Before：「検索結果が出ない」と言われても原因不明。
After：datasets → documents → document_segments の3層構造を知っていれば即調査。

datasets がナレッジベースのコンテナ。
documents がアップロードされたファイル（処理状態を保持）。
document_segments が分割されたテキストチャンク。

dataset_collection_bindings が VectorDB の Collection と紐付け、
embeddings が Embedding 結果をハッシュ対応でキャッシュ。

トラブルシューティング：
- 「検索結果が出ない」→ document_segments を確認
- 「インデックスが終わらない」→ documents のステータスを確認

次は残りのデータベースをまとめて紹介します。
      `,
    },
    // Part2-5: プラグイン・Audit・Enterprise DB (旧2.4+2.5 統合)
    {
      layout: 'cards',
      slideTitle: 'プラグイン・Audit・Enterprise DB',
      items: [
        {
          title: 'Plugin DB',
          description: 'plugins / plugin_declarations / plugin_installations でライフサイクルを管理。serverless_runtimes で実行エンドポイントを記録',
          icon: 'puzzle',
          color: 'blue'
        },
        {
          title: 'Audit DB',
          description: 'DB: `audit`。audit_logs にすべての操作を記録。コンプライアンスの不変性要件のため独立保存',
          icon: 'file-text',
          color: 'black'
        },
        {
          title: 'Enterprise DB',
          description: 'DB: `enterprise`。sys_users (管理者)、licenses、member_groups (RBAC) を保存',
          icon: 'shield',
          color: 'purple'
        },
        {
          title: 'VectorDB / Redis',
          description: 'VectorDB は Embedding ベクトルを格納。Redis はキャッシュ・キュー・セッションを管理',
          icon: 'database',
          color: 'green'
        }
      ],
      notes: `
【プラグイン・Audit・Enterprise DB：2分】
メインDB 以外の重要なデータストアを4つまとめます。

Plugin DB はプラグインのメタデータ、インストール記録、ランタイム情報を管理。
（スキーマ図：dify-db-plugin.png 参照）
「プラグインが動かない」→ plugin_installations を確認。

Audit DB は操作ログを独立保存。改ざん防止と長期保存のためビジネスデータと分離。
Enterprise DB は管理者アカウント、ライセンス、RBAC グループを管理。

VectorDB は Embedding ベクトル、Redis はキャッシュとキューを担当。

「どのデータがどこにあるか」の地図を持っておくことが重要です。
では、第2章のまとめです。
      `,
    },
    // Part2-6: 第2章まとめ
    {
      layout: 'macro-focus',
      slideTitle: '第2章のまとめ',
      items: [
        'Before：テーブル名も知らず問題の調査に時間がかかる → After：問題の種類から見るべきテーブルに直行',
        'トラブルシューティングの鍵: 実行失敗は `workflow_runs`、リコール失敗は `document_segments`、認証問題は `accounts`',
        'データ分離: Tenant ID がすべてのビジネステーブルに共通し、マルチテナントのデータ境界を保証'
      ],
      notes: `
【第2章まとめ：1分】
Before：テーブル名も DB 名も知らず、問題調査に時間がかかる。
After：問題の種類に応じて見るべきテーブルに直行できる。

すべてのテーブルを覚える必要はありません。
「どの種類のデータがどこにあるか」の地図を持っておけば十分です。

次は第3章、実際に手を動かすハンズオンラボです。
      `,
    },

    // ===== Part 3: ハンズオンラボ (6枚: セクション+前提+LabA+LabB+LabCDE+まとめ) =====
    // Part3-1: Section
    {
      layout: 'section',
      slideTitle: '第3章：ハンズオンラボ',
      notes: `
【セクション移行：30秒】
第3章「ハンズオンラボ」に入ります。

Before：手順書を読むだけで、実際にデプロイした経験がない。
After：自分の手で構築し、エラーにも対処できるようになる。

座学から実践へ切り替えましょう。
      `,
    },
    // Part3-2: 前提条件
    {
      layout: 'cards',
      slideTitle: 'ラボの前提条件',
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
      notes: `
【前提条件：1分】
ハンズオンに必要な環境を確認します。

OS は Linux/macOS（Windows は WSL2 推奨）。Docker Desktop か Minikube/Kind が必要です。
kubectl, helm, git がインストール済みであること。
リソースは最低 4 Core CPU、8GB RAM。

準備ができていない方はデモを見ていただき、後日自分の環境で試してください。
では Lab A から始めます。
      `,
    },
    // Part3-3: Lab A
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
          subtitle: 'Dify EE の設定ファイルを対話形式で生成するツール',
          color: 'blue',
          link: 'https://github.com/langgenius/dify-ee-helm-chart-values-generator',
          popup: {
            title: 'Dify Helm Values Generator',
            description: 'Dify Enterprise 版の Helm Chart 設定を簡単に生成できるツールです。',
            features: [
              { title: 'カテゴリ別設定', description: 'グローバル、インフラ、ネットワークなど、カテゴリごとに設定を整理。' },
              { title: '依存関係の自動処理', description: 'コンポーネント間の依存や排他関係を自動で処理。' },
              { title: 'シークレット自動生成', description: 'パスワードや暗号化キーを安全に自動生成。' },
            ],
            hint: 'Python スクリプトとして提供。ローカルで実行してください。',
            linkText: 'GitHub で見る'
          }
        },
        {
          icon: 'git-branch',
          title: 'Helm Watchdog',
          subtitle: '手元の values.yaml と最新 Chart を比較して差分を検出',
          color: 'purple',
          link: 'https://dify-helm-watchdog.vercel.app/',
          popup: {
            title: 'Helm Watchdog Utility',
            description: '設定ファイルのバージョン差分を Web 上で確認できるツールです。',
            features: [
              { title: 'ブラウザで比較', description: 'values.yaml をアップロードして最新 Chart と差分を確認' },
              { title: '廃止項目の検出', description: '古い設定項目を見つけてアップグレード失敗を防止' },
              { title: '新機能の発見', description: '新バージョンで追加された設定項目をハイライト' },
            ],
            hint: 'インストール不要。ブラウザからすぐに使えます。',
            linkText: 'ツールを開く'
          }
        }
      ],
      notes: `
【Lab A：values.yaml：4分】
Before：500 項目以上の設定ファイルを手書きし、漏れやミスに悩まされる。
After：Helm Values Generator で安全に生成し、Watchdog でドリフトを検出。

最小構成で押さえるべきは3つ。
global.mode（standard がフルスタック）、service.type（ローカルは NodePort）、
external（ホスト DB を使う場合は IP を正しく設定、localhost は不可）。

ツールを使えば、HA とシングルの差異も自動処理されます。
次は実際にインストールします。
      `,
    },
    // Part3-4: Lab B
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
      },
      notes: `
【Lab B：インストール：5分】
Before：エラーが出るとパニックになる。
After：ImagePullBackOff や CrashLoopBackOff の対処パターンが分かっている。

手順：
\`\`\`bash
helm repo add dify https://langgenius.github.io/dify-helm
helm repo update
helm upgrade -i dify dify/dify -f values.yaml
kubectl get pods -w
\`\`\`

検証は3段階で行います。
1. \`kubectl get pods\` — すべて Running を確認
2. \`kubectl logs -f deploy/dify-api\` — エラーがないことを確認
3. http://console.dify.local にアクセスし、ログイン画面を確認

よくある問題と対処：
- ImagePullBackOff → ネットワーク/プロキシ/レジストリアクセスを確認
- CrashLoopBackOff → \`kubectl logs <pod>\` でエラーを確認、DB 接続情報を見直す

エラーに出会うこと自体が学びです。
次はビジネスフローの検証に進みます。
      `,
    },
    // Part3-5: Lab C/D/E
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
      notes: `
【Lab C/D/E：ビジネス検証：8分】
インストールが完了したら、エンドツーエンドのビジネスフローを検証します。

Lab C：プラグインマーケットで Jina と OpenAI をインストールし、API Key を設定して接続テスト。
Lab D：ナレッジベースを作成し、PDF をアップロードして ETL とインデックス作成を観察。
Lab E：Start → Retriever → LLM → End の RAG Flow を作成し、Debug で動作確認。

Pod が Running になるだけでは不十分。ビジネスフローが通ることがゴールです。
では、第3章のまとめです。
      `,
    },
    // Part3-6: 第3章まとめ
    {
      layout: 'macro-focus',
      slideTitle: '第3章のまとめ',
      items: [
        'Before：手順書を読むだけ → After：自分の手でデプロイし、エラー対処パターンを体得',
        '検証のゴール: Pod が Running は第一歩。ビジネスフロー（プラグイン→RAG→Chatflow）が通ることが真のゴール',
        '経験の価値: 今日遭遇したエラーは、将来お客様の問題を解決する資産になる'
      ],
      notes: `
【第3章まとめ：1分】
Before：手順書を読むだけで実際にデプロイした経験がない。
After：自力で構築し、エラーパターンも把握している。

今日遭遇したエラーすべてが将来の資産です。
自分の環境で再現し、意図的にエラーを起こして対処法を学んでください。

ここからは、ハンズオン用の簡易デプロイ手順に移ります。
      `,
    },

    // ===== kubedify ハンズオン (5枚) =====
    // kubedify-1: セクション
    {
      layout: 'section',
      slideTitle: 'ハンズオン：kubedify で簡易デプロイ',
      notes: `
【kubedify 導入：1分】
ここまで Helm Chart を使った本番向けデプロイの流れを解説しました。
ただ、ハンズオンとしてはステップが多く、限られた時間では大変です。

そこで今回は kubedify というツールを使います。
VM 1台に Docker ベースで K8s + Dify の全サービスを構築でき、
kubectl get pods で第1章のアーキテクチャを実際に確認できます。

⚠️ 重要：kubedify はあくまでテスト・学習用です。本番環境には使わないでください。
本番デプロイは、先ほど説明した Helm Chart + マネージドサービスの構成で行います。
      `,
    },
    // kubedify-2: VM 作成
    {
      layout: 'cards',
      slideTitle: 'Step 1：クラウド VM の作成',
      items: [
        {
          title: 'AWS (EC2)',
          description: 'Ubuntu 22.04 / t3.xlarge (4 vCPU, 16GB RAM) / SG: 22, 30000-32767 を開放',
          icon: 'server',
          color: 'orange'
        },
        {
          title: 'Azure (VM)',
          description: 'Ubuntu 22.04 / Standard_D4s_v3 (4 vCPU, 16GB RAM) / NSG: 22, 30000-32767 を開放',
          icon: 'server',
          color: 'blue'
        },
        {
          title: 'GCP (GCE)',
          description: 'Ubuntu 22.04 / e2-standard-4 (4 vCPU, 16GB RAM) / Firewall: 22, 30000-32767 を開放',
          icon: 'server',
          color: 'green'
        }
      ],
      notes: `
【VM 作成：3分】
お使いのクラウドに合わせて VM を1台作成します。

共通スペック：
- OS：Ubuntu 22.04 LTS
- CPU：4 vCPU 以上
- RAM：16GB 以上
- ディスク：30GB 以上推奨

セキュリティグループ / NSG / Firewall で以下を開放：
- SSH（22）
- NodePort 範囲（30000-32767）— Dify へのブラウザアクセスに必要

各クラウドの具体的なインスタンスタイプ：
- AWS：t3.xlarge
- Azure：Standard_D4s_v3
- GCP：e2-standard-4

VM が起動したら SSH で接続し、次のステップに進みます。
      `,
    },
    // kubedify-3: 環境セットアップ
    {
      layout: 'presenter-compact',
      slideTitle: 'Step 2：環境セットアップ',
      subtitle: '必要なツールを一括インストール（Ubuntu）',
      details: [
        {
          text: 'インストールするもの',
          children: [
            'Docker — コンテナランタイム',
            'Node.js (v24) — kubedify の実行に必要',
            'Go + Kind — Kubernetes in Docker',
            'kubectl — K8s クラスタ操作',
            'Helm — Chart デプロイ'
          ]
        },
        {
          text: '注意事項',
          children: [
            'Docker インストール後に `sudo usermod -aG docker ubuntu` でグループ追加',
            'セッションを再接続（または `newgrp docker`）して反映'
          ]
        }
      ],
      terminal: {
        title: 'Terminal',
        lines: [
          { type: 'command', text: '# Docker インストール' },
          { type: 'command', text: 'sudo apt -y update && sudo apt install -y docker-ce docker-ce-cli containerd.io' },
          { type: 'command', text: 'sudo usermod -aG docker ubuntu' },
          { type: 'command', text: '# Node.js (n-install 経由)' },
          { type: 'command', text: 'curl -fsSL https://raw.githubusercontent.com/mklement0/n-install/stable/bin/n-install | bash -s 24' },
          { type: 'command', text: '# Kind (Go 経由)' },
          { type: 'command', text: 'go install sigs.k8s.io/kind@v0.30.0' },
          { type: 'command', text: '# kubectl + Helm' },
          { type: 'command', text: 'curl -LO "https://dl.k8s.io/release/$(curl -sL https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"' },
          { type: 'command', text: 'curl -fsSL https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash' },
        ]
      },
      notes: `
【環境セットアップ：5分】
VM に SSH 接続したら、必要なツールをインストールします。

以下のスクリプトを一括実行するのが最も簡単です：

\`\`\`bash
# 基本パッケージ
sudo apt -y update
sudo apt install -y wget git make golang ca-certificates curl gnupg jq

# Docker
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo $VERSION_CODENAME) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update -y
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker ubuntu

# Node.js v24
curl -fsSL https://raw.githubusercontent.com/mklement0/n-install/stable/bin/n-install | bash -s 24
source ~/.bashrc

# Kind
go install sigs.k8s.io/kind@v0.30.0
echo 'export PATH=$(go env GOPATH)/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# kubectl
curl -LO "https://dl.k8s.io/release/$(curl -sL https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Helm
curl -fsSL https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
\`\`\`

Docker グループ追加後はセッションを再接続するか \`newgrp docker\` を実行してください。
次は kubedify でデプロイします。
      `,
    },
    // kubedify-4: kubedify install
    {
      layout: 'presenter-compact',
      slideTitle: 'Step 3：kubedify でデプロイ',
      details: [
        {
          text: 'kubedify とは',
          children: [
            'Kind（Kubernetes in Docker）上に Dify 全サービスを自動構築するツール',
            'すべてのコンテナが Kind ノード内で動作',
            '⚠️ テスト・学習専用。本番環境には使用しないでください'
          ]
        },
        {
          text: 'インストール後の確認',
          children: [
            '`kubectl get pods` で全 Pod が Running であることを確認',
            '第1章で学んだサービス（API, Worker, Gateway, Sandbox 等）が Pod として見える'
          ]
        }
      ],
      terminal: {
        title: 'Terminal',
        lines: [
          { type: 'command', text: 'npm install -g kubedify' },
          { type: 'command', text: 'kubedify install' },
          { type: 'output', text: '...(数分かかります)...' },
          { type: 'command', text: 'kubectl get pods' },
          { type: 'output', text: 'NAME                          READY   STATUS    RESTARTS' },
          { type: 'output', text: 'dify-api-xxxx                  1/1     Running   0' },
          { type: 'output', text: 'dify-web-xxxx                  1/1     Running   0' },
          { type: 'output', text: 'dify-worker-xxxx               1/1     Running   0' },
          { type: 'output', text: 'dify-gateway-xxxx              1/1     Running   0' },
          { type: 'output', text: 'dify-sandbox-xxxx              1/1     Running   0' },
        ]
      },
      notes: `
【kubedify デプロイ：5分】
kubedify をインストールして実行します。

\`\`\`bash
npm install -g kubedify
kubedify install
\`\`\`

数分で Kind クラスタ上に Dify の全サービスがデプロイされます。

\`kubectl get pods\` を実行すると、第1章で学んだサービスが実際の Pod として確認できます。
API、Worker、Gateway、Sandbox、Enterprise など、アーキテクチャ図のサービスと1対1で対応しています。

繰り返しますが、kubedify はテスト・学習目的のツールです。
本番環境では、先ほど解説した Helm Chart + マネージドサービス（RDS, ElastiCache 等）の構成を使ってください。

次のステップでブラウザからアクセスします。
      `,
    },
    // kubedify-5: アクセス確認
    {
      layout: 'presenter-compact',
      slideTitle: 'Step 4：ブラウザでアクセス確認',
      subtitle: 'ライセンス設定画面がゴール',
      details: [
        {
          text: 'アクセス方法',
          children: [
            'Gateway の NodePort を確認: `kubectl get svc | grep gateway`',
            'ブラウザで `http://<VM の Public IP>:<NodePort>` にアクセス',
          ]
        },
        {
          text: 'ゴール',
          children: [
            'ライセンス設定画面が表示されれば成功',
            'ここまで来れば Dify EE の全サービスが正常に稼働している'
          ]
        },
        {
          text: 'トラブルシューティング',
          children: [
            'アクセスできない → セキュリティグループで NodePort 範囲（30000-32767）が開放されているか確認',
            'Pod が起動しない → `kubectl describe pod <pod名>` でイベントを確認'
          ]
        }
      ],
      terminal: {
        title: 'Terminal',
        lines: [
          { type: 'command', text: 'kubectl get svc | grep gateway' },
          { type: 'output', text: 'dify-gateway   NodePort   10.96.x.x   <none>   80:31234/TCP' },
          { type: 'command', text: '# ブラウザで http://<Public IP>:31234 にアクセス' },
        ]
      },
      notes: `
【アクセス確認：3分】
最後のステップです。

まず Gateway の NodePort を確認します：
\`\`\`bash
kubectl get svc | grep gateway
\`\`\`

表示された NodePort（例：31234）を使って、ブラウザから
http://<VM の Public IP>:<NodePort> にアクセスしてください。

ライセンス設定画面が表示されれば成功です。
ここまで来れば、Dify EE の全サービスが正常に動いています。

アクセスできない場合のチェックリスト：
- セキュリティグループ / NSG / Firewall で NodePort 範囲が開放されているか
- VM の Public IP が正しいか
- \`kubectl get pods\` で全 Pod が Running か

お疲れ様でした。これでハンズオンは完了です。
次は最終章、技術サービスガイドに進みます。
      `,
    },

    // ===== Part 4: 技術サービス (6枚: セクション+SLA+Vibe+Upgrade+まとめ) =====
    // Part4-1: Section
    {
      layout: 'section',
      slideTitle: '第4章：顧客技術サービスガイド',
      notes: `
【セクション移行：30秒】
最終章「顧客技術サービスガイド」に入ります。

Before：問題が起きたら全部公式に聞く。
After：L1/L2 を自力で解決し、L3 のみ的確にエスカレーション。

このギャップを埋めましょう。
      `,
    },
    // Part4-2: 責任の合意 (SLA)
    {
      layout: 'presenter-compact',
      slideTitle: '責任の合意 (SLA)',
      subtitle: '階層型サービスモデル',
      details: [
        {
          text: 'なぜ階層化が必要か？',
          children: [
            '効率化: 問題の 80% は設定や使い方の問題。現場で解決できる',
            'リソース集中: 公式チームは 20% のコアコードの難題に集中'
          ]
        },
        {
          text: 'Before → After',
          children: [
            'Before: すべての問い合わせを公式に転送 → 対応が遅延し顧客満足度が低下',
            'After: L1/L2 を自力で解決 → 迅速な対応で信頼を獲得'
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
      notes: `
【責任の合意：3分】
Before：すべての問い合わせを公式に転送し、対応が遅延。
After：L1/L2 を自力解決し、迅速な対応で顧客の信頼を獲得。

問題の 80% は設定や使い方に起因します。これが L1/L2 です。

L1（使い方の質問）と L2（環境・運用の問題）はパートナーが対応。
L3（コアコードのバグ・脆弱性）のみ公式にエスカレーション。

この役割分担で、全体の対応速度が上がります。
次は AI を活用したデバッグ手法です。
      `,
    },
    // Part4-3: Vibe-Debugging
    {
      layout: 'presenter-compact',
      slideTitle: 'Vibe-Debugging',
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
      notes: `
【Vibe-Debugging：3分】
Before：エラーが出たらググって、ドキュメントを探して、時間を浪費。
After：AI にコードベースを読み込ませ、調査範囲を素早く絞り込む。

セットアップは簡単。Dify のコアリポジトリをクローンし、
Cursor や Claude Code などの AI アシスタントにインポートするだけ。

「この設定項目は何をする？」「このエラーログはどのコードに対応する？」
こうした質問で、ドキュメントにない情報もコードから直接理解できます。

目標は AI にすべてを修正させることではなく、調査範囲の絞り込みです。
次はアップグレードの手順です。
      `,
    },
    // Part4-4: アップグレードとロールバック
    {
      layout: 'cards',
      slideTitle: 'アップグレードとロールバック SOP',
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
      notes: `
【アップグレードとロールバック：3分】
Before：祈りながらアップデートし、失敗したら途方に暮れる。
After：SOP に従って安全にアップグレードし、問題があれば確実にロールバック。

4ステップの手順です。

1. バックアップ — 絶対に省略しない
\`\`\`bash
pg_dump dify > dify_backup_$(date +%Y%m%d).sql
\`\`\`

2. アップグレード — Image Tag を変更して実行
\`\`\`bash
helm upgrade dify dify/dify -f values.yaml
\`\`\`

3. 検証 — Migration ログを確認
\`\`\`bash
kubectl logs -f deploy/dify-api | grep -i migration
\`\`\`

4. ロールバック — 問題があれば DB 復元 → Image Tag を戻す → helm upgrade

重要：Migration 実行後は Image だけ戻しても動きません。DB 復元も必須です。

では、第4章のまとめです。
      `,
    },
    // Part4-5: 第4章まとめ
    {
      layout: 'macro-focus',
      slideTitle: '第4章のまとめ',
      items: [
        'Before：問題が起きたら全部公式に聞く → After：L1/L2 を自力で解決し、L3 のみ的確にエスカレーション',
        'Before：エラーでググって時間を浪費 → After：AI + コードベースで調査範囲を即絞り込み',
        'Before：祈りながらアップデート → After：Backup → Upgrade → Verify → Rollback の SOP で安全に実行'
      ],
      notes: `
【第4章まとめ：1分】
Before：全部公式に聞く、エラーでググる、祈りながらアップデート。
After：L1/L2 自力解決、AI デバッグ、SOP に従った安全なアップグレード。

技術力だけでなく、責任感とプロ意識を持ってお客様をサポートしてください。
それでは、Q&A に移ります。
      `,
    },

    // ===== End Slide =====
    {
      layout: 'end',
      subtitle: 'インタラクションと質疑応答',
      website: 'https://dify.ai',
      email: 'r.hashimoto@dify.ai',
      github: 'langgenius/dify',
      notes: `
【クロージング：5分】
お疲れ様でした。101B「技術基礎とデプロイ演習」は終了です。

本日の Before → After を振り返ります。
1. アーキテクチャがブラックボックス → サービスマップで即切り分け
2. テーブル名を知らない → 問題の種類から直行
3. 手順書を読むだけ → 自分の手でデプロイ
4. 全部公式に聞く → L1/L2 自力解決

ここからは Q&A の時間です。
今日の内容に関する質問、実際のお客様案件で困っていること、何でも聞いてください。
      `,
    }
  ],
};
