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
      notes: `
【導入：2分】
皆さん、こんにちは。本日は Dify 101B「技術基礎とデプロイ演習」についてお話しします。

101A では製品の価値と位置付けを学びました。
101B では、実際にシステムを構築・運用するための技術的な基礎知識を習得します。

**対象者**
このコースは、Dify EE の導入支援やテクニカルサポートを担当される方向けです。
お客様の環境でのデプロイ支援、トラブルシューティング、
アップグレード作業などを自信を持って行えるようになることがゴールです。

**なぜ技術基礎が重要か**
- お客様の「動かない」「遅い」「エラーが出る」に対応できる
- 適切な構成を提案し、過剰/過小なリソース見積もりを避けられる
- L1/L2 の問題を自力で解決し、公式サポートへのエスカレーションを減らせる

**本日の進め方**
座学とハンズオンを組み合わせて進めます。
実際に手を動かすパートもありますので、環境の準備をお願いします。
      `,
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
      notes: `
【コース目標：3分】
本日のコースでは3つの目標を設定しています。

**1つ目：コアアーキテクチャの理解**
Dify EE がどのようなサービスで構成されているか、
リクエストがどのように流れるかを理解します。

これが分かると：
- 障害発生時に「どのサービスを調べるべきか」が分かる
- リソース見積もり時に「何がボトルネックになりやすいか」が分かる
- お客様からの「この構成で大丈夫？」に答えられる

**2つ目：最小デプロイの習得**
実際に Helm を使って Dify EE をデプロイします。
「最小限の使用可能な環境」を自力で構築できるようになることが目標です。

ポイントは「最小限」です。
本番環境のフル構成ではなく、まず動く環境を作れることが重要です。
ここができれば、本番構成への拡張は設定の追加だけです。

**3つ目：技術サービス能力**
トラブルシューティングとサポートのノウハウを学びます。
- 問題の切り分け方法
- ログの読み方
- お客様への説明の仕方

この3つを身につければ、パートナーとして自信を持って
技術支援ができるようになります。
      `,
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
      notes: `
【コース概要：2分】
全体の流れをご説明します。約90分のコースです。

**第1章：アーキテクチャとモジュール（約30分）**
Dify EE を構成するサービス群を一つ一つ解説します。
Gateway、API、Worker、Enterprise、Sandbox、Plugin など、
それぞれの役割と相互関係を理解します。

ここは座学中心ですが、最も重要なパートです。
トラブルシューティングの基礎となる知識です。

**第2章：データ構造（約15分）**
データベースのスキーマとビジネスロジックの対応を学びます。
「このデータはどこに保存されている？」が分かるようになります。

**第3章：デプロイ実習（約30分）**
実際に手を動かして Dify EE をインストールします。
values.yaml の作成からビジネス検証まで、一連の流れを体験します。
※事前に環境準備が必要です

**第4章：技術サービス（約15分）**
パートナーとしてお客様をサポートする際のガイドラインです。
責任範囲の明確化、デバッグツール、アップグレード手順を学びます。

では、第1章から始めましょう。
      `,
    },
    // Section: What is Dify?
    {
      layout: 'section',
      slideTitle: '第1章：アーキテクチャとモジュールの概要',
      notes: `
【セクション移行：1分】
それでは第1章「アーキテクチャとモジュールの概要」に入ります。

このパートでは、Dify EE を構成する全サービスを俯瞰します。

**このパートで身につけること**
- Dify EE の全体像を図解で説明できる
- 各サービスの役割とポートを把握する
- トラフィックの流れを追跡できる

**なぜこれが重要か**
お客様の環境で問題が発生したとき、
「どのサービスを調べるべきか」が即座に判断できるようになります。

例えば：
- 「画面が表示されない」→ Gateway, Web を確認
- 「APIが遅い」→ API, Worker, DB を確認
- 「ファイルがアップロードできない」→ API, S3 を確認

このような切り分けができることが、技術支援の第一歩です。
      `,
    },
    // What is Dify?
    {
      layout: 'diagram',
      slideTitle: '1.1 Dify エディションとデプロイ方法',
      subtitle: '用途に応じた選択肢',
      imageUrl: '/assets/image/dify-deploy.png',
      notes: `
【エディションとデプロイ：3分】
まず、Dify のエディション構成とデプロイ方法を整理します。

**エディション構成**
- **Community**：OSS 版、個人・小規模チーム向け
- **Cloud**：SaaS 版、すぐに使いたい方向け
- **Enterprise Self-hosted**：オンプレミス/プライベートクラウド向け
- **Enterprise Cloud**：専用テナント型 SaaS

**デプロイ方法の選択基準**
お客様の要件に応じて最適な形態を提案します：

1. **データを外に出せない** → Enterprise Self-hosted
2. **運用負荷を減らしたい** → Cloud または Enterprise Cloud
3. **まず試したい** → Cloud の無料プラン
4. **大規模・高可用性** → Enterprise Self-hosted (K8s)

**よくある質問**
Q：「Community 版で商用利用できますか？」
A：可能ですが、Enterprise 機能（SSO, RBAC, 監査ログ等）は使えません。
   また、サポートもコミュニティベースとなります。

Q：「Cloud と Self-hosted の機能差は？」
A：機能は同等です。違いはデータの保管場所と運用責任の所在です。
      `,
    },
    // Edition Overview
    {
      layout: 'presenter-compact',
      slideTitle: '1.2 Dify EE アーキテクチャ全体像',
      subtitle: 'マイクロサービス構成と通信経路',
      details: [
        {
          text: 'クリティカルパス',
          children: [
            '1. 通信の入口: Ingress → Gateway (Nginx/Caddy)', 
            '2. コアアプリ: API / Web / Enterprise がビジネスロジックを処理', 
            '3. 非同期処理: Redis Queue → Worker がタスクを実行', 
            '4. 永続化: Postgres (ビジネスデータ) + Redis (キャッシュ) + VectorDB', 
            '5. 外部依存: S3 (ファイル) + LLM Providers'
          ]
        }
      ],
      imageUrl: '/assets/image/dify-gateway.png',
      notes: `
【アーキテクチャ全体像：4分】
Dify EE の全体アーキテクチャを見ていきましょう。
この図は非常に重要なので、しっかり頭に入れてください。

**クリティカルパス（リクエストの流れ）**

**1. 通信の入口**
すべてのリクエストは Gateway (Nginx/Caddy) を通ります。
ここでルーティング、CORS 処理、静的ファイルの配信が行われます。

**2. コアアプリケーション**
- **API**：バックエンドのメインサービス。ビジネスロジックの中枢
- **Web**：フロントエンド。React ベースの SPA
- **Enterprise**：エンタープライズ機能（SSO, RBAC 等）を提供

**3. 非同期処理**
- **Worker**：Redis Queue からタスクを取り出して実行
- 重い処理（RAG インデックス作成、ファイル解析等）はここで処理

**4. 永続化**
- **Postgres**：ビジネスデータ
- **Redis**：キャッシュとキュー
- **VectorDB**：埋め込みベクトル（Qdrant, Weaviate 等）

**5. 外部依存**
- **S3**：ファイルストレージ
- **LLM Providers**：OpenAI, Claude 等

**覚えておくべきこと**
「Gateway → API → Worker」これが基本の三角形です。
問題が起きたら、まずこの3つを確認してください。
      `,
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
      ],
      notes: `
【サービス分類：3分】
Dify EE のサービスを6つの層に分類して整理します。

**1. エントリ層 - Gateway**
すべてのトラフィックの入口です。
Nginx または Caddy ベースのリバースプロキシ。

**2. アプリ層 - API, Web, Enterprise**
ビジネスロジックを処理するコアサービス群。
- API：バックエンド（Python/Flask）
- Web：フロントエンド（React）
- Enterprise：エンタープライズ機能
- Enterprise-Frontend：管理画面

**3. 非同期層 - Worker, Worker Beat**
バックグラウンド処理を担当。
- Worker：タスク実行（スケールアウト可能）
- Beat：定期タスクのスケジューリング（シングルトン必須）

**4. 監査層 - Enterprise Audit**
操作ログを記録するサービス。
コンプライアンス要件がある場合に重要。

**5. 補助層 - Sandbox, SSRF Proxy, Unstructured**
セキュリティと機能拡張を担当。

**6. プラグイン層**
プラグインのライフサイクル管理と実行環境。

**ポイント**
すべてのサービスを覚える必要はありません。
まずは「アプリ層」と「非同期層」を理解してください。
ここが Dify の心臓部です。
      `,
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
      notes: `
【Gateway & API：4分】
コアサービスの中でも最も重要な2つを詳しく見ていきます。

**Gateway（エントリゲートウェイ）**
- ベース：Caddy または Nginx
- ポート：80 (HTTP) / 443 (HTTPS)
- 役割：
  - リバースプロキシ（バックエンドへの振り分け）
  - CORS 処理
  - 静的リソースのキャッシュ
  - TLS 終端

**トラブルシューティング時の確認ポイント**
- 「502 Bad Gateway」→ バックエンド（API/Web）が起動していない
- 「504 Gateway Timeout」→ バックエンドの応答が遅い
- 「CORS エラー」→ Gateway の設定を確認

**API Service（コアバックエンド）**
- 言語：Python / Flask
- ポート：5001
- 役割：
  - 認証・認可
  - モデル呼び出し
  - ワークフローオーケストレーション
- 依存：Postgres, Redis, VectorDB

**ログの見方**
画面に表示しているターミナル出力は Gateway のアクセスログ例です。
- upstream_connect_time：バックエンドへの接続時間
- upstream_response_time：バックエンドの応答時間

この値が大きい場合、API 側の処理に問題がある可能性があります。
      `,
    },
    {
      layout: 'presenter-compact',
      slideTitle: '1.5 非同期処理/Worker & Beat',
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
【Worker & Beat：4分】
Dify のバックグラウンド処理を担う重要なサービスです。

**Worker（タスク実行者）**
- 仕組み：Redis Queue から Celery タスクを取得して実行
- ポート：なし（Redis へのクライアントとして動作）
- 処理内容：
  - RAG インデックス作成
  - ファイル解析（PDF, Word など）
  - メール送信
  - 長時間実行ワークフロー

**重要ポイント**
Worker は水平スケーリング可能です。
処理が追いつかない場合は、Pod の数を増やして対応します。
HPA（Horizontal Pod Autoscaler）の設定も可能です。

**Worker Beat（スケジューラ）**
- 役割：定期タスク（Crontab）を生成
- 重要：**必ずシングルトン（1 Pod）で運用**

**なぜ Beat はシングルトンか？**
複数の Beat が動くと、同じ定期タスクが重複して生成されます。
例：クリーンアップタスクが2回実行される → データ不整合の原因に

**トラブルシューティング**
- 「タスクが実行されない」→ Worker の Pod 状態を確認
- 「タスクが重複実行される」→ Beat が複数起動していないか確認
- 「キューが溜まっている」→ Worker をスケールアウト
      `,
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
            '監査データベース (`audit`) に接続、コンプライアンス監査に対応',
          ]
        }
      ],
      imageUrl: '/assets/image/dify-enterprise.png',
      notes: `
【エンタープライズサービス：3分】
Enterprise 版でのみ利用可能なサービス群です。

**Enterprise Backend**
- ポート：8082 (HTTP) / 9000 (gRPC)
- 提供機能：
  - SSO 連携（SAML, OIDC）
  - RBAC（ロールベースアクセス制御）
  - チーム管理
  - ライセンス管理
- データベース：メインの Postgres を共有

**Enterprise Audit**
- ポート：8083
- 役割：操作ログの記録と保存
- データベース：独立した audit DB に接続
- 用途：コンプライアンス要件への対応

**なぜ Audit は独立しているか**
監査ログは「改ざん不可」「長期保存」が求められます。
ビジネスデータと分離することで：
- 誤ってビジネスデータと一緒に削除されることを防ぐ
- 監査ログだけを別のストレージポリシーで管理できる
- パフォーマンスへの影響を最小化

**お客様への説明ポイント**
Enterprise 版を選ぶ主な理由の一つが、この監査機能です。
「いつ、誰が、何をしたか」を追跡できることは、
大企業のセキュリティ要件を満たすために必須です。
      `,
    },
    {
      layout: 'presenter-compact',
      slideTitle: '1.7.1 コードサンドボックス (Sandbox)',
      subtitle: '隔離された安全な実行環境',
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
      notes: `
【コードサンドボックス：4分】
Dify ではユーザーが Python/JavaScript コードを実行できます。
これを安全に行うための仕組みが Sandbox です。

**なぜ Sandbox が必要か**
ユーザーが悪意のあるコードを実行する可能性があります：
- ファイルシステムへのアクセス
- ネットワーク経由での攻撃
- リソースの過剰消費

**3つの防御メカニズム**

**1. Seccomp（System Call 制限）**
許可されたシステムコールのみ実行可能。
ネットワークアクセスもデフォルトで禁止。

**2. Chroot（ファイルシステム制限）**
アクセスできるディレクトリを限定。
ホストシステムのファイルにはアクセス不可。

**3. Privilege Drop（権限降格）**
setuid/setgid で権限を落とし、
SetNoNewPrivs で権限昇格を防止。

**処理フロー**
1. API がコードを Sandbox (Port 8194) に送信
2. Sandbox が子プロセスを起動
3. 子プロセスで Seccomp → Chroot → 権限降格 を適用
4. 隔離された環境でコードを実行

**お客様への説明**
「ユーザーが書いたコードが安全に実行される」
これは多くのプラットフォームで実現が難しい機能です。
      `,
    },
    {
      layout: 'presenter-compact',
      slideTitle: '1.7.2 なぜ Sandbox に Root が必要なのか？',
      subtitle: '親プロセスによる監視と子プロセスの権限制御',
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
      notes: `
【Sandbox と Root 権限：3分】
「なぜ Sandbox は Root 権限で動くのか？」
セキュリティ意識の高いお客様から必ず聞かれる質問です。

**結論から言うと**
メインプロセスは Root で起動しますが、
ユーザーコードは権限降格された子プロセスで実行されます。

**Fork モデルの仕組み**

**1. Service Start（起動時・1回のみ）**
- UID 0 (Root) でメインプロセスを起動
- Sandbox ユーザー (UID 65537) を準備
- Port 8194 でリッスン開始

**2. Request Loop（リクエストごと）**
- コード実行リクエストを受信
- 子プロセスを Fork
- メインプロセス：Root 権限を保持してリッスン継続
- 子プロセス：権限降格してコードを実行

**3. Child Isolation（子プロセスの隔離）**
- Chroot, Seccomp, SetNoNewPrivs を適用
- UID を 65537 に切り替え
- ユーザーコードを実行

**なぜこの設計か**
Chroot や Seccomp を適用するには Root 権限が必要です。
しかし、コード実行自体は最小権限で行います。
これが「最小権限の原則」を守りながら隔離を実現する方法です。

**お客様への説明**
「Root で動いているのは制御プロセスだけです。
実際のコード実行は完全に隔離された低権限環境で行われます。」
      `,
    },
    {
      layout: 'presenter-compact',
      slideTitle: '1.7.3 SSRF 保護プロキシ',
      subtitle: '内部ネットワークへの不正アクセスを防止',
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
      notes: `
【SSRF 保護プロキシ：3分】
SSRF（Server-Side Request Forgery）対策のための重要なコンポーネントです。

**SSRF とは何か**
ユーザーが API ツールで URL を指定したとき、
サーバーがその URL にリクエストを送ります。

悪意のあるユーザーが内部 URL を指定すると：
- http://192.168.1.1/admin → 社内システムにアクセス
- http://169.254.169.254/ → AWS メタデータにアクセス
- http://localhost:6379/ → 内部の Redis にアクセス

これがイントラネット侵入の脆弱性です。

**保護メカニズム**

**1. Squid Proxy 経由**
すべての外部 HTTP リクエストを Proxy (Port 3128) 経由にします。

**2. DNS 解決**
Proxy がターゲットドメインの IP アドレスを解決します。

**3. ACL フィルタリング**
プライベート IP 範囲をブロック：
- 10.0.0.0/8
- 172.16.0.0/12
- 192.168.0.0/16
- 127.0.0.1

**4. パブリック IP のみ許可**
上記以外の IP へのアクセスのみ許可します。

**お客様への説明**
「Dify はユーザー入力の URL を直接リクエストしません。
すべて Proxy 経由でフィルタリングされるため、
内部ネットワークへの不正アクセスを防ぎます。」
      `,
    },
    {
      layout: 'cards',
      slideTitle: '1.7.4 その他の補助サービス',
      items: [
        { title: 'Unstructured ETL', description: '非構造化ドキュメント解析サービス (Port 8000)。PDF/PPT/HTML などの複雑なフォーマットを処理し、RAG 用にテキストを抽出', icon: 'file-text', color: 'black' }
      ],
      notes: `
【その他の補助サービス：1分】
残りの補助サービスを簡単に紹介します。

**Unstructured ETL**
- ポート：8000
- 役割：非構造化ドキュメントの解析
- 対応フォーマット：PDF, PPT, HTML, Word など
- 用途：RAG のためのテキスト抽出

**なぜ専用サービスか**
PDF などの複雑なフォーマットを解析するには
専門的なライブラリと処理能力が必要です。
API サービスに組み込むと重くなるため、分離しています。

**お客様への影響**
RAG でドキュメントをアップロードする際の処理品質に直結します。
表やレイアウトの複雑なドキュメントも適切に処理できます。
      `,
    },
    {
      layout: 'section',
      slideTitle: '1.8 プラグインエコシステムアーキテクチャ',
      notes: `
【セクション移行：30秒】
ここからプラグインエコシステムについて説明します。

Dify のプラグインシステムは、機能拡張の要です。
LLM プロバイダー、ツール、埋め込みモデルなどを
プラグインとして追加できます。
      `,
    },
    {
      layout: 'presenter-compact',
      slideTitle: 'プラグインサービスコンポーネント',
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
【プラグインサービス：3分】
プラグインエコシステムを支える3つのコンポーネントです。

**Plugin Manager**
- ポート：8084 (HTTP) / 9084 (gRPC)
- 役割：
  - プラグインマーケットプレイスのバックエンド
  - プラグインメタデータの管理
  - インストール権限の制御

**Plugin Daemon**
- ポート：5002
- 役割：
  - プラグインのランタイムデーモン
  - ライフサイクル管理（起動、停止、再起動）
  - API/Worker からの dispatch リクエストを処理

**Plugin Connector & Runtime**
- Connector：K8s/Lambda でプラグイン Pod を管理
- Runtime：実際にプラグインコードを実行する Pod

**プラグインの呼び出しフロー**
1. ユーザーがワークフローでプラグインツールを使用
2. API が Plugin Daemon に dispatch
3. Daemon が対応する Runtime にリクエスト転送
4. Runtime がプラグインコードを実行
5. 結果を API に返却

**お客様への説明**
「プラグインは独立したコンテナで実行されるため、
メインアプリケーションに影響を与えません。
セキュリティとスケーラビリティを両立しています。」
      `,
    },
    {
      layout: 'content',
      slideTitle: '1.9 デプロイ側の重要な注意事項',
      items: [
        '⚠️ **Beat Singleton**: `workerBeat.enabled` は1つの Pod でのみ有効にし、決して複数レプリカにしないでください',
        '🔒 **外部アクセス**: デフォルトは ClusterIP。外部アクセスには Ingress または LoadBalancer を構成します',
        '💾 **永続化**: 本番環境では、Chart 組み込みの StatefulSet ではなく、マネージド RDS/Redis/S3 を強く推奨します',
        '🛡️ **セキュリティ**: デフォルトのパスワードを変更し、TLS 証明書を構成し、SSRF Proxy を有効にしてください'
      ],
      notes: `
【デプロイ注意事項：3分】
本番環境にデプロイする際の重要ポイントをまとめます。

**⚠️ Beat Singleton**
最も重要な注意事項です。
Worker Beat は必ず1つの Pod でのみ有効にしてください。

間違い例：
\`\`\`yaml
workerBeat:
  replicaCount: 2  # ❌ これはダメ
\`\`\`

複数の Beat が動くと、定期タスクが重複生成されます。

**🔒 外部アクセス**
デフォルトは ClusterIP（クラスタ内部のみ）です。
外部からアクセスするには：
- Ingress を設定する
- LoadBalancer タイプに変更する
- NodePort を使用する（開発環境向け）

**💾 永続化**
本番環境では、Chart 組み込みの StatefulSet ではなく
マネージド RDS/Redis/S3 を強く推奨します。

理由：
- バックアップ・リストアが容易
- スケーリングが柔軟
- 運用負荷の軽減

**🛡️ セキュリティ**
必ず対応すべき項目：
- デフォルトパスワードの変更
- TLS 証明書の設定
- SSRF Proxy の有効化
      `,
    },
    // Part 1 Summary
    {
      layout: 'macro-focus',
      slideTitle: '第1章のまとめ',
      items: [
        'コアリンク: Gateway → API → Worker が基本的なリクエスト処理の流れ',
        'エンタープライズ機能: Enterprise + Audit は、ビジネスから独立した管理層を提供します',
        'プラグインシステム: 拡張機能を管理する独立したサービス群',
        '本番環境のアドバイス: 状態データ (DB) の分離とステートレスサービス (App) の拡張に焦点を当ててください'
      ],
      notes: `
【第1章まとめ：2分】
第1章の内容を振り返ります。

**コアリンク：Gateway → API → Worker**
これが Dify の基本的なトラフィックフローです。
問題が起きたら、まずこの3つを確認してください。

**エンタープライズ機能**
Enterprise + Audit サービスは、ビジネスロジックから独立しています。
SSO、RBAC、監査ログなど、大企業向けの機能を提供します。

**プラグインシステム**
拡張機能は独立したマイクロサービスグループで管理されます。
メインアプリケーションに影響を与えずに機能を追加できます。

**本番環境のアドバイス**
- 状態データ（DB）：マネージドサービスに分離
- ステートレスサービス（App）：スケールアウトで対応

**覚えておいてほしいこと**
完璧に覚える必要はありません。
「どのサービスが何をしているか」の全体像を把握してください。
問題が起きたときに「どこを調べるか」が分かればOKです。
      `,
    },
    // Section: Why Dify?
    {
      layout: 'section',
      slideTitle: '第2章：Dify EE データ構造',
      notes: `
【セクション移行：1分】
第2章「Dify EE データ構造」に入ります。

このパートでは、Dify がデータをどのように保存しているかを学びます。

**なぜデータ構造を理解するのか**
- トラブルシューティング時に「どのテーブルを見るか」が分かる
- お客様のデータ移行や統合の相談に対応できる
- パフォーマンス問題の原因特定に役立つ

**このパートで身につけること**
- 4つのデータベースの役割分担
- 主要テーブルの構造と関連
- トラブルシューティングのポイント
      `,
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
      notes: `
【テナントとアカウント：3分】
まず、メインデータベース（dify）の中核となるテーブルを見ていきます。

**データベース名：dify**
これがビジネスデータを格納するメインのデータベースです。

**Identity & Auth グループ**
「誰が」「どこで」「何をするか」を記録するテーブル群です。

**tenants テーブル**
- ワークスペースを表すテーブル
- マルチテナントのデータ分離の境界
- 1つの企業 = 1つのテナント が基本

**accounts テーブル**
- 登録ユーザーの情報
- メールアドレス、パスワードハッシュなど
- テナントとは多対多の関係

**tenant_account_joins テーブル**
- tenants と accounts の関連テーブル
- ロール（owner, admin, member）を定義
- 1ユーザーが複数テナントに所属可能

**account_integrates テーブル**
- サードパーティログイン（OAuth）の情報
- Google, GitHub などとの連携情報

**トラブルシューティング時**
「ログインできない」「権限がない」という問題は
このテーブル群を確認します。
      `,
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
      notes: `
【アプリとワークフロー：3分】
Dify のコア機能である「アプリケーション」のデータ構造です。

**App 定義**

**apps テーブル**
- アプリのメタデータ（名前、アイコン、モード）
- モード：chatbot, agent, workflow, completion
- tenant_id で所属テナントと紐付け

**app_model_configs テーブル**
- アプリごとのモデル設定
- 使用するLLM、パラメータ、Prompt テンプレート
- JSON 形式で柔軟に設定を保存

**Workflow 定義**

**workflows テーブル**
- ワークフローの DSL（グラフ構造）を保存
- バージョン管理機能あり
- draft と published の2つの状態

**workflow_runs テーブル**
- ワークフローの実行インスタンス
- ステータス（running, succeeded, failed）
- 実行時間、入力、出力を記録

**workflow_node_executions テーブル**
- ノードレベルの実行詳細
- 各ノードの入出力、実行時間、エラー情報

**トラブルシューティング時**
「ワークフローが失敗した」→ workflow_runs を確認
「特定のノードで止まる」→ workflow_node_executions を確認
      `,
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
      notes: `
【ナレッジベース (RAG)：3分】
RAG（Retrieval-Augmented Generation）のデータ構造です。

**データ階層（3層構造）**

**1. datasets テーブル**
- ナレッジベースのコンテナ
- 名前、説明、設定を保存
- tenant_id で所属テナントと紐付け

**2. documents テーブル**
- アップロードされたファイル/データソース
- ファイル名、タイプ、ステータス
- 処理状態（indexing, completed, error）

**3. document_segments テーブル**
- 分割されたテキストチャンク
- チャンクごとのテキスト内容
- ベクトル検索で使用されるデータ

**主要な関連付け**

**dataset_collection_bindings**
- VectorDB の Collection と紐付け
- Qdrant, Weaviate などの外部ストレージと連携

**embeddings**
- Embedding 結果をキャッシュ
- ハッシュ対応で重複計算を回避

**トラブルシューティング時**
「検索結果が出ない」→ document_segments を確認
「インデックスが終わらない」→ documents のステータスを確認
「リコール精度が低い」→ チャンク設定とセグメント内容を確認
      `,
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
      notes: `
【プラグインエコシステム DB：2分】
プラグインのライフサイクルを管理するテーブル群です。

**コアテーブル構造**

**plugins テーブル**
- プラグインパッケージのメタデータ
- 名前、タグ、作成者情報
- マーケットプレイスに公開される情報

**plugin_declarations テーブル**
- manifest.yaml を解析した設定情報
- プラグインの機能宣言
- 入出力のスキーマ定義

**plugin_installations テーブル**
- テナントごとのインストール記録
- どのテナントがどのプラグインを使っているか
- 有効/無効の状態管理

**ランタイムテーブル**

**serverless_runtimes**
- Serverless 関数のエンドポイント情報
- Lambda/Cloud Functions との連携

**tool/model_installations**
- 特定機能のインスタンス化記録
- API キーなどの設定情報

**トラブルシューティング時**
「プラグインが動かない」→ plugin_installations を確認
「特定テナントだけ使えない」→ インストール状態を確認
      `,
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
      notes: `
【その他のデータベース：2分】
メインDB 以外の重要なデータベースを紹介します。

**Audit DB（audit）**
- テーブル：audit_logs
- 用途：すべての操作ログを記録
- 特徴：
  - コンプライアンス要件に対応
  - 不変性を保証するため独立保存
  - 長期保存ポリシーを適用可能

**Enterprise DB（enterprise）**
- sys_users：システム管理者アカウント
- licenses：ライセンス情報
- member_groups：RBAC のグループ定義
- 用途：Enterprise 版固有の管理機能

**なぜ分離されているか**
- 監査ログ：改ざん防止と長期保存のため
- Enterprise DB：ビジネスデータと管理データの分離

**お客様への説明**
「データベースが分離されているため、
監査ログの誤削除や、ビジネスデータへの影響を防げます。
コンプライアンス要件の厳しい業界でも安心して使えます。」
      `,
    },
    {
      layout: 'macro-focus',
      slideTitle: '第2章のまとめ',
      items: [
        'マルチDBアーキテクチャ: ビジネス(dify)、監査(audit)、プラグイン(plugin)、エンタープライズ(enterprise) の4つのDB分離',
        'トラブルシューティングの鍵: 問題は通常 `workflow_runs` (実行失敗) または `document_segments` (リコール失敗) にあります',
        'データ分離: Tenant ID は、すべてのビジネステーブルに共通する重要なフィールドです'
      ],
      notes: `
【第2章まとめ：2分】
第2章の内容を振り返ります。

**マルチDBアーキテクチャ**
4つのデータベースが役割分担しています：
- dify：ビジネスデータ
- audit：監査ログ
- plugin：プラグイン管理（場合による）
- enterprise：エンタープライズ管理

**トラブルシューティングの鍵**
問題が起きたときに見るべきテーブル：
- 実行失敗 → workflow_runs
- リコール失敗 → document_segments
- 認証問題 → accounts, tenant_account_joins

**データ分離の仕組み**
tenant_id がすべてのビジネステーブルに共通して存在しています。
これにより、マルチテナントでもデータが混在しません。

**覚えておいてほしいこと**
すべてのテーブルを覚える必要はありません。
「どの種類のデータがどこにあるか」の地図を持っておけば、
問題が起きたときに適切な場所を調べられます。
      `,
    },
    {
      layout: 'section',
      slideTitle: '第3章：ハンズオンラボ',
      notes: `
【セクション移行：1分】
ここから第3章「ハンズオンラボ」に入ります。

座学から実践へ移ります。
実際に手を動かして Dify EE をデプロイします。

**このパートの目標**
- Helm を使って Dify EE をインストールできる
- 基本的なトラブルシューティングができる
- ビジネスフローの検証ができる

**環境の確認**
このパートを進めるには、以下が必要です：
- Kubernetes クラスタ（Minikube, Kind, Docker Desktop など）
- kubectl, helm コマンド
- 4 Core CPU、8GB RAM 以上のリソース

準備ができていない方は、デモを見ていただく形でも大丈夫です。
後日、自分の環境で試してみてください。
      `,
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
      notes: `
【ラボの前提条件：2分】
ハンズオンを始める前に、環境を確認しましょう。

**✅ 環境準備**
- Linux または macOS（Windows は WSL2 推奨）
- Docker Desktop、Minikube、または Kind
- インターネット接続（イメージのダウンロード用）

**✅ ツールチェーン**
以下のコマンドが使えることを確認：
\`\`\`bash
kubectl version
helm version
git version
\`\`\`

**⭕ リソース要件**
最小構成でも以下が必要：
- CPU：4 Core 以上
- メモリ：8GB 以上
- ディスク：20GB 以上の空き

**確認方法**
\`\`\`bash
kubectl get nodes
# Ready 状態のノードがあることを確認
\`\`\`

**準備ができていない方へ**
今日はデモを見ていただき、
後日、自分の環境で試してみてください。
手順書は後ほど共有します。
      `,
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
【Lab A：values.yaml の作成：5分】
Helm Chart の設定ファイルを作成します。

**目標**
ローカル環境に適した最小構成の values.yaml を作成します。

**コア設定の選択**

**1. global.mode**
- api：バックエンドのみ（既存フロントエンドと連携）
- standard：フルスタック（通常はこちら）

**2. service.type**
- NodePort：ローカル開発向け（ポート指定でアクセス）
- ClusterIP：本番環境向け（Ingress 経由でアクセス）

**3. external（外部DB使用時）**
ホストマシンの DB を使う場合、IP アドレスを正しく設定。
⚠️ localhost や 127.0.0.1 は使えません（K8s 内から見えない）

**なぜツールを使うのか**
公式 Chart には 500 以上の設定項目があります。
手書きは間違いやすく、バージョンアップ時の追従も大変。

**推奨ツール**
- Helm Values Generator：モジュール式設定生成
- Helm Watchdog：設定ドリフト検出

これらを使うと、設定の漏れや不整合を防げます。
      `,
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
      },
      notes: `
【Lab B：インストール実行：8分】
実際に Helm を使って Dify EE をインストールします。

**インストール手順**

\`\`\`bash
# 1. Helm リポジトリを追加
helm repo add dify https://langgenius.github.io/dify-helm
helm repo update

# 2. インストール実行
helm upgrade -i dify dify/dify -f values.yaml

# 3. Pod の状態を確認
kubectl get pods -w
\`\`\`

**検証手順**

**1. Pod ステータス確認**
すべての Pod が Running になるまで待ちます。
通常、2〜5分程度かかります。

**2. ログ確認**
\`\`\`bash
kubectl logs -f deploy/dify-api
\`\`\`
エラーがないことを確認します。

**3. 画面アクセス**
http://console.dify.local（または NodePort のアドレス）
にアクセスし、ログイン画面を確認します。

**よくある問題と対処**

**ImagePullBackOff**
→ ネットワーク/プロキシを確認
→ イメージレジストリへのアクセスを確認

**CrashLoopBackOff**
→ \`kubectl logs <pod>\` でエラーを確認
→ DB 接続情報（パスワード、ホスト）を確認
      `,
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
      notes: `
【Lab C/D/E：ビジネス検証：10分】
インストールが完了したら、実際のビジネスフローを検証します。

**Lab C：プラグインインストール**

1. 管理画面でプラグインマーケットを開く
2. Jina（Embedding）をインストール
3. OpenAI（LLM）をインストール
4. API Key を設定
5. 接続テストを実行

**確認ポイント**
- プラグインが正常にインストールされるか
- API Key が正しく設定できるか
- 接続テストが成功するか

**Lab D：ナレッジベース作成**

1. 新しいナレッジベースを作成
2. PDF ドキュメントをアップロード
3. ETL 処理の進行を観察
4. インデックス作成の完了を確認

**確認ポイント**
- ファイルが正常にアップロードされるか
- ETL 処理が完了するか
- セグメント（チャンク）が作成されるか

**Lab E：Chatflow オーケストレーション**

1. 新しい Chatflow を作成
2. ノードを配置：Start → Retriever → LLM → End
3. Retriever にナレッジベースを接続
4. Debug を実行
5. Trace ビューで実行時間を確認

**確認ポイント**
- ワークフローが正常に実行されるか
- 検索結果が LLM に渡されるか
- 回答が生成されるか
      `,
    },
    {
      layout: 'macro-focus',
      slideTitle: '第3章のまとめ',
      items: [
        '基本の流れ: Env -> Helm -> Install -> Verify',
        '検証のポイント: Pod ステータスが正常であることは第一歩に過ぎず、ビジネスフローがスムーズであることがゴールです',
        '実践の価値: 自ら遭遇したすべてのエラーは、将来顧客の問題を解決するための経験になります'
      ],
      notes: `
【第3章まとめ：2分】
ハンズオンラボの振り返りです。

**基本の流れ**
Env → Helm → Install → Verify
この流れを一度体験することが重要です。

**検証のポイント**
Pod が Running になることは第一歩に過ぎません。
本当のゴールは、ビジネスフローがスムーズに動くことです。

Lab C/D/E のようなエンドツーエンドの検証を必ず行ってください。

**実践の価値**
今日遭遇したエラー、つまづいたポイント、
これらすべてが将来の資産になります。

お客様の環境で同じ問題が起きたとき、
「あ、これ知ってる」と言えることが、パートナーの価値です。

**次のステップ**
- 今日の手順を自分の環境で再現する
- 意図的にエラーを起こして対処法を学ぶ
- 異なる設定パターンを試す

経験を積むほど、トラブルシューティングが速くなります。
      `,
    },
    {
      layout: 'section',
      slideTitle: '第4章：顧客技術サービスガイド',
      notes: `
【セクション移行：1分】
最後の第4章「顧客技術サービスガイド」に入ります。

このパートでは、パートナーとしてお客様をサポートする際の
ガイドラインとベストプラクティスを学びます。

**このパートで身につけること**
- 責任範囲の明確な理解（L1/L2/L3）
- トラブルシューティングの方法論
- アップグレード・ロールバックの手順

技術力だけでなく、「どこまでやるか」「どう伝えるか」も
プロフェッショナルなサポートには重要です。
      `,
    },
    {
      layout: 'presenter-compact',
      slideTitle: '4.1 責任の合意 (SLA)',
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
          text: 'Partner の価値',
          children: [
            'Partner は販売だけでなく技術サービスの最前線。L1/L2 を自力で解決できると、お客様対応がスムーズになります'
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
【責任の合意 (SLA)：4分】
パートナーとして最も重要な概念の一つ、責任範囲の明確化です。

**なぜ階層化が必要か**

**効率化**
問題の 80% は設定や使用方法に起因します。
これらはフロントライン（パートナー）で解決すべきです。

**リソース集中**
公式 R&D チームは、コアコードの難題に集中すべきです。
すべての問い合わせが公式に来ると、対応が遅くなります。

**3つの階層**

**L1：使用に関する問い合わせ（Partner 担当）**
- 「アプリの作成方法は？」
- 「Prompt の効果が悪い」
- 「この機能はどう使う？」
→ ドキュメント案内、使い方のアドバイス

**L2：環境運用（Partner 担当）**
- 「K8s デプロイでエラー」
- 「証明書が期限切れ」
- 「ネットワークが繋がらない」
→ 設定確認、環境構築支援

**L3：製品の欠陥（Dify Official 担当）**
- 「コアコードにバグがある」
- 「セキュリティ脆弱性の発見」
- 「仕様と異なる動作」
→ 公式チームにエスカレーション

**Partner の価値**
L1/L2 を独自に解決できることが、
Advanced Partner への重要な指標です。
      `,
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
【Vibe-Debugging：4分】
AI を活用したトラブルシューティング手法を紹介します。

**Vibe-Debugging とは**
AI コーディングアシスタントを使って、
コードベースを「理解」しながらデバッグする手法です。

**セットアップ手順**

**1. コンテキスト構築**
Dify のコアリポジトリをローカルにクローン：
- langgenius/dify（Core App）
- langgenius/dify-sandbox（Code Sandbox）
- langgenius/dify-plugin-daemon（Plugin Runtime）
- langgenius/dify-official-plugins（Plugins）

**2. AI アシスタントにインポート**
Cursor, Claude Code, GitHub Copilot などに
これらのリポジトリをコンテキストとして読み込ませます。

**3. 正確なプロンプト**
良い質問例：
- 「この設定項目は具体的に何をしますか？」
- 「このエラーログはどのコードに対応しますか？」
- 「リトライポリシーを変更するには？」

**目標**
AI にすべてを修正させることではありません。
調査範囲を絞り込み、コードコンテキストを補完することです。

**効果**
ドキュメントにない情報も、
コードを読むことで理解できるようになります。
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
      notes: `
【アップグレードとロールバック：4分】
本番環境でのアップグレード手順とロールバック方法です。

**必ず守るべき原則**
アップグレード前のバックアップは絶対に省略しないでください。

**4ステップの手順**

**1. バックアップ (Backup)**
- Postgres のフルバックアップ
- VectorDB のバックアップ（可能であれば）
- values.yaml のバージョン管理

\`\`\`bash
pg_dump dify > dify_backup_$(date +%Y%m%d).sql
\`\`\`

**2. アップグレード (Upgrade)**
- Image Tag を新バージョンに変更
- helm upgrade を実行

\`\`\`bash
helm upgrade dify dify/dify -f values.yaml
\`\`\`

**3. 検証 (Verify)**
- Pod の起動を確認
- Migration ログを確認
- エンドツーエンドのテスト

\`\`\`bash
kubectl logs -f deploy/dify-api | grep -i migration
\`\`\`

**4. ロールバック (Rollback)**
問題が発生した場合：
1. DB バックアップを復元
2. Image Tag を元に戻す
3. helm upgrade を再実行

**重要な注意事項**
Migration が実行された後のロールバックは、
DB の復元も必要になります。
Image だけ戻しても動きません。
      `,
    },
    {
      layout: 'macro-focus',
      slideTitle: '第4章のまとめ',
      items: [
        '境界の明確化：L1/L2/L3 の境界を明確にし、双方のリソースを保護する',
        'ツールの活用：トラブルシューティングに AI を活用し、設定比較に Helm Watchdog を使用する',
        'セキュリティの基本：データバックアップはすべての変更操作の生命線です'
      ],
      notes: `
【第4章まとめ：2分】
最後のパートの振り返りです。

**境界をはっきりさせる**
L1/L2/L3 の境界を明確にすることで、
双方のリソースを保護できます。

パートナーは L1/L2 に集中し、
公式チームは L3（コアの問題）に集中する。
この役割分担で、全体の効率が上がります。

**ツールの活用**
- トラブルシューティング：AI + コードベース
- 設定管理：Helm Watchdog

ツールを使いこなすことで、
対応速度と品質が向上します。

**セキュリティの基本**
データバックアップは、すべての変更操作の生命線です。

「バックアップを取る時間がなかった」は言い訳になりません。
バックアップなしでのアップグレードは、
お客様のビジネスを危険にさらす行為です。

**パートナーとしての心構え**
技術力だけでなく、責任感とプロ意識を持って
お客様をサポートしてください。
      `,
    },
    // End Slide
    {
      layout: 'end',
      subtitle: 'インタラクションと質疑応答',
      website: 'https://dify.ai',
      email: 'r.hashimoto@dify.ai',
      github: 'langgenius/dify',
      notes: `
【クロージング：5分】
お疲れ様でした。これで 101B「技術基礎とデプロイ演習」は終了です。

**本日学んだこと**
1. Dify EE のアーキテクチャとサービス構成
2. データベース構造とトラブルシューティングのポイント
3. Helm を使ったデプロイの実践
4. 顧客サポートのガイドラインとベストプラクティス

**次のステップ**
- 今日のハンズオンを自分の環境で再現する
- 公式ドキュメントを読み込む
- 実際のお客様案件で経験を積む

**リソース**
- 公式ドキュメント：docs.dify.ai
- GitHub：github.com/langgenius/dify
- コミュニティ：Discord / GitHub Discussions

**質疑応答**
ここからは Q&A の時間です。
今日の内容に関する質問、
実際のお客様案件で困っていること、
何でも聞いてください。

技術的な質問だけでなく、
「こういうケースはどう対応する？」という
実践的な質問も歓迎です。
      `,
    }
  ],
};
