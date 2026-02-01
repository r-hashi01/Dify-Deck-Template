import type { Deck } from './extraTypes';

export const deck: Deck = {
  config: {
    title: 'Dify 101A: 製品価値と位置付け',
    theme: '../theme-dify',
    defaults: {
      deckName: 'Dify 101A: 製品価値と位置付け',
      copyright: '© 2026 LangGenius K.K. All rights reserved.',
      authorName: 'Japan FDE Team',
    },
  },
  slides: [
    // Title Slide
    {
      layout: 'title',
      slideTitle: 'Dify 製品価値と導入支援ガイド',
      subtitle: 'Dify エコシステムパートナー トレーニングシリーズ',
      seriesTitle: 'Dify EE 101A',
      label: 'Dify Ecosystem Partner Training',
      teamName: 'Japan FDE Team',
      tagline: 'Infrastructure for Intuitive LLM App Development',
    },

    // Course Goals
    {
      layout: 'cards',
      slideTitle: 'コースの目標',
      items: [
        { title: 'ポジショニングと価値', description: 'Dify Enterprise の位置づけと企業版の価値を理解し、「なぜ企業で Dify を採用するのか？」に明確に答えられるようになる', icon: 'Target', color: 'blue' },
        { title: 'ビジネス構造の理解', description: 'Workspace・App・Knowledge Base の関係性を把握し、製品全体の構造を直感的にイメージできるようになる', icon: 'Settings', color: 'green' },
        { title: 'ハンズオン実践', description: 'GUI を使って実際にデモ可能な Agent と Knowledge Base を構築し、以降の応用実践への土台を作る', icon: 'Shield', color: 'purple' },
      ],
    },

    // Course Overview
    {
      layout: 'content',
      slideTitle: 'コース概要',
      items: [
        '製品ポジショニングと価値 - What is Dify?',
        'なぜ Dify なのか？ - コアバリューとエンタープライズソリューション',
        'コアコンセプトとアーキテクチャ - ビジネスロジックの全体像',
        'ユーザージャーニー デモ - 開発から運用までの一連の流れ',
        'Q&A - 質疑応答とディスカッション'
      ],
    },

    // Section: What is Dify?
    {
      layout: 'section',
      slideTitle: '第1章：What is Dify?',
    },

    // What is Dify?
    {
      layout: 'presenter-compact',
      slideTitle: 'What is Dify?',
      subtitle: 'Dify とは？',
      name: 'Dify は、本番環境対応のオープンソース AI アプリケーション＆エージェントワークフロープラットフォームです',
      description: '「LLM 時代のアプリケーション層 OS」',
      details: [
        'ビジュアルな Agentic Workflow でオーケストレーションを実現',
        'RAG・ツール呼び出し・可観測性機能を統合',
        '「アイデア → プロトタイプ → 本番運用」への迅速な移行を支援',
      ],
      imageUrl: 'assets/image/dify-description.png',
    },

    // Edition Overview
    {
      layout: 'cards',
      slideTitle: 'エディション紹介',
      subtitle: '用途・規模に応じた4つの提供形態',
      items: [
        { title: 'Dify Cloud', description: 'SaaS 版。インフラ管理不要で素早く検証したいチーム向け', icon: 'cloud', color: 'blue' },
        { title: 'Community', description: 'オープンソース版。セルフホスト、シングルワークスペース構成', icon: 'git-branch', color: 'green' },
        { title: 'Premium', description: 'クラウドマーケットプレイス版。運用は自己管理、WebApp ブランドカスタマイズ対応', icon: 'database', color: 'orange' },
        { title: 'Enterprise', description: 'エンタープライズ版。マルチワークスペース、SSO、監査ログ、専用サポート付き', icon: 'building', color: 'black' },
      ],
    },

    // Self-host Pricing
    {
      layout: 'pricing',
      slideTitle: 'Dify Self-host（セルフホスト）',
      subtitle: 'データセキュリティ・コンプライアンス・自社管理を重視するお客様向け',
      items: [
        {
          title: 'Community',
          price: 'Free',
          features: ['Docker/K8s でセルフデプロイ', 'コア機能をフル搭載', 'シングルワークスペース', 'Apache 2.0 ライセンス'],
          topBarColor: 'green',
        },
        {
          title: 'Premium',
          price: 'マーケットプレイス',
          features: ['AWS/Azure 等の Marketplace 経由', '可用性は自己管理', 'WebApp ブランドカスタマイズ可', '限定的なサポート'],
          topBarColor: 'orange',
        },
        {
          title: 'Enterprise',
          price: '年間サブスクリプション',
          features: ['マルチワークスペース / クォータ分離', 'SSO / SLA / 監査ログ', 'セキュリティ強化機能', '専任テクニカルサポート'],
          topBarColor: 'black',
        },
      ],
    },

    // Lab A
    {
      layout: 'presenter-compact',
      slideTitle: 'Lab A：クイックスタート',
      subtitle: '目標：GUI で App + Knowledge Base を作成しデモできる状態にする',
      name: 'ステップバイステップガイド',
      description: 'Dify GUI を使い、Agent と Knowledge Base を組み合わせたシンプルなアプリを作成します',
      details: [
        '1. Workspace 作成：サインアップし、モデルプロバイダーを設定',
        '2. App 新規作成：Chatbot または Workflow タイプを選択',
        '3. Knowledge Base 接続：KB を作成しドキュメントをアップロード',
        '4. デバッグ：Preview で質疑応答を確認',
        '5. ログ確認：「構想 → デモ」の一連の流れを体験',
        '※ Lab A はウォームアップです。ぜひ実際に手を動かしてみてください'
      ],
      imageUrl: 'assets/image/dify-quickstart.png',
    },

    // License Interpretation
    {
      layout: 'presenter-compact',
      slideTitle: 'オープンソースライセンスの解釈',
      subtitle: 'Modified Apache 2.0',
      details: [
        {
          text: 'Dify Open Source License',
          children: ['Apache 2.0 ライセンスをベースに', '商用利用に関する追加条項あり']
        },
        {
          text: '主要な条項',
          children: [
            '✅ 商用利用 OK：ほとんどのケースで二次開発・サービス提供が可能',
            '⚠️ マルチテナント SaaS は制限：OSS 版でマルチテナント SaaS を運営することは禁止',
            '⚠️ フロントエンド表示の維持：公式 UI を利用する場合はロゴ・著作権表示を保持'
          ]
        }
      ],
      imageUrl: 'assets/image/dify-community.png',
    },

    // License FAQ
    {
      layout: 'faq',
      slideTitle: 'ライセンス FAQ',
      items: [
        { title: '「テナント」とは？', description: 'Dify では 1テナント = 1ワークスペース。ワークスペース間でデータは完全に分離されます' },
        { title: '「マルチテナント」の定義は？', description: '単一デプロイで複数ワークスペースをホストする場合はマルチテナント扱い。商用ライセンスが必要です' },
        { title: '独自 UI を作る場合は？', description: 'BaaS モード（API のみ利用）ならロゴ不要。Dify の UI コンポーネントを使う場合はロゴ・著作権表示が必要' },
      ],
    },

    // License Boundary
    {
      layout: 'presenter-compact',
      slideTitle: '商用ライセンスの境界線',
      subtitle: 'OK なこと・NG なこと',
      details: [
        {
          text: '✅ OK：許可される行為',
          children: ['PoC や社内アプリでの Community 版利用', '社内向けシングルテナント商用デプロイ', 'API ベースで独自ブランド UI を構築', 'マルチテナント利用のための Enterprise 版購入']
        },
        {
          text: '⛔ NG：禁止される行為',
          children: [
            'Community 版を改造してマルチテナント SaaS を構築',
            'Dify コンソールからロゴや著作権表示を削除・隠蔽'
          ]
        }
      ],
      imageUrl: 'assets/image/dify-community-ok_ng.png',
    },

    // Part 1 Q&A
    {
      layout: 'content',
      slideTitle: 'Part 1 Q&A',
      items: [
        'ディスカッショントピック：',
        '1. あなたの組織には Cloud と Self-host のどちらが適していますか？',
        '2. Dify ライセンスに関して気になる点はありますか？',
        '3. Enterprise / 商用ライセンスを検討するタイミングはいつ頃と想定しますか？'
      ],
    },

    // Part 1 Summary
    {
      layout: 'macro-focus',
      slideTitle: '章のまとめ（Part 1）',
      items: [
        '多様な提供形態：Cloud / Self-host / Premium / Enterprise で様々なニーズに対応',
        'OSS の境界：商用利用は可能だが、マルチテナント SaaS と UI ブランディングには制限あり',
        'ビジネス設計の第一歩：ライセンスの境界を理解することが重要'
      ],
    },

    // Section: Why Dify?
    {
      layout: 'section',
      slideTitle: '第2章：Why Dify?',
    },

    // Innovator Challenges
    {
      layout: 'cards',
      slideTitle: 'AI 開発者が直面する典型的な課題',
      items: [
        { title: '出力の安定性', description: '結果のブレが大きく、業務利用に耐える精度（95%以上）に達しにくい', icon: 'line-chart', color: 'orange' },
        { title: 'エンジニアリング', description: 'デモ → 本番への道筋が不明確。バージョン管理やナレッジ同期も困難', icon: 'git-branch', color: 'purple' },
        { title: '評価・品質保証', description: 'LLM はブラックボックス。体系的な評価・監視・回帰テストの仕組みがない', icon: 'search', color: 'blue' },
        { title: 'コスト・効率', description: '試行錯誤のコストが高く、再利用しにくい。車輪の再発明が頻発', icon: 'bar-chart', color: 'green' },
      ],
    },

    // How Dify Addresses
    {
      layout: 'pillars',
      slideTitle: 'Dify のアプローチ',
      items: [
        { title: '安定性向上', description: 'Workflow で複雑なロジックを分解し、ノード単位で最適化。ブラックボックス感を低減', features: ['可視化オーケストレーション', 'ロジックの階層化'], icon: 'git-branch', color: 'blue' },
        { title: '開発効率', description: 'テンプレートとプラグインで再利用率を向上。ゼロから作る必要がない', features: ['テンプレート再利用', 'プラグインエコシステム'], icon: 'box', color: 'purple' },
        { title: '品質保証', description: '組み込みの評価機能とフルリンクトレースで、アプリ品質を体系的に担保', features: ['データループ', '継続的改善'], icon: 'line-chart', color: 'green' },
        { title: 'セキュリティ', description: 'API Key 管理、RBAC、プラグイン権限境界を標準装備', features: ['権限管理', 'セキュリティ統合'], icon: 'shield', color: 'orange' },
      ],
    },

    // Why Visual Workflow Matters
    {
      layout: 'presenter-compact',
      slideTitle: 'なぜビジュアル Agentic Workflow が重要なのか？',
      subtitle: '「ブラックボックス Prompt」から「可観測なホワイトボックス」へ',
      details: [
        {
          text: '1. ロジックの可視化',
          children: ['複雑な Chain of Thought を明確なステップに分解', 'ルーティング・検索・ツール・生成をレイヤー分離']
        },
        {
          text: '2. リアルタイムデバッグ',
          children: [
            'ノードごとの入出力・レイテンシをその場で確認',
            '問題箇所を特定し「勘に頼るデバッグ」から脱却'
          ]
        },
        {
          text: '3. コラボレーションの促進',
          children: [
            'ビジネス担当はドラッグ＆ドロップ、開発者はコードに集中',
            'ナレッジがドキュメントではなく「実行可能なフロー」として蓄積'
          ]
        }
      ],
      imageUrl: 'assets/image/dify-workflow-trace.png',
    },

    // Enterprise Challenges
    {
      layout: 'cards',
      slideTitle: '企業が直面する課題',
      items: [
        { title: 'コンプライアンス', description: 'データレジデンシー、個人情報保護、監査証跡の確保', icon: 'shield', color: 'red' },
        { title: 'パフォーマンス・SLO', description: '高負荷時のレイテンシ、スループット、可用性の担保', icon: 'bar-chart', color: 'orange' },
        { title: 'エコシステム柔軟性', description: 'ベンダーロックインを避け、選択肢と交渉力を維持', icon: 'globe', color: 'blue' },
        { title: '可観測性', description: 'エンドツーエンドのトレース、A/B テスト、定量評価', icon: 'search', color: 'purple' },
        { title: 'バージョン管理', description: 'Prompt / KB / Workflow の統一的なバージョン管理', icon: 'git-branch', color: 'green' },
        { title: 'セキュリティ', description: 'キー管理、プラグイン権限境界、不正利用防止', icon: 'lock', color: 'black' },
      ],
    },

    // Enterprise Solutions
    {
      layout: 'content',
      slideTitle: 'Dify Enterprise の対応',
      subtitle: '企業課題への体系的なソリューション',
      items: [
        '🔒 コンプライアンス：IAM/RBAC、監査ログ、プライベートデプロイ',
        '🚀 パフォーマンス：K8s HA 構成、レプリカスケーリング、SLO モニタリング',
        '🌐 エコシステム：中立ポジション、マルチクラウド対応、マルチモデル互換',
        '👀 可観測性：プラットフォームレベル評価、多層トレース、A/B テスト',
        '🔄 バージョン管理：AI ネイティブなライフサイクル管理、リリース＆ロールバック'
      ],
    },

    // Target Users
    {
      layout: 'cards',
      slideTitle: 'ターゲットユーザー',
      items: [
        { title: 'AI プロダクトマネージャー', description: '素早くプロトタイプを作り、仮説検証を回したい', icon: 'layout', color: 'purple' },
        { title: '開発者', description: 'LLM アプリの開発・運用を効率化したい', icon: 'code', color: 'blue' },
        { title: 'スタートアップ', description: '少人数で高速にプロダクトを立ち上げたい', icon: 'zap', color: 'yellow' },
        { title: '大企業 CIO / アーキテクト', description: 'ガバナンスを保ちつつ AI 活用を推進したい', icon: 'building-2', color: 'black' },
      ],
    },

    // Competitive Advantage I
    {
      layout: 'pillars',
      slideTitle: '競争優位性 I：プロダクト体験',
      items: [
        { title: 'すぐに使える', description: '自然言語 Prompt + ドラッグ＆ドロップで数分で Agent 構築', features: ['高速構築', '低い学習コスト'], icon: 'zap', color: 'blue' },
        { title: 'ビジュアル Workflow', description: 'キャンバス上でオーケストレーション。非エンジニアでも参加可能', features: ['ロジック可視化', 'コラボレーション'], icon: 'layout', color: 'purple' },
        { title: 'AI ネイティブ', description: 'RAG / Agent / 評価を統合し、開発ライフサイクル全体をカバー', features: ['オールインワン', 'フルライフサイクル'], icon: 'cpu', color: 'green' },
        { title: 'エコシステム', description: 'DSL テンプレート、豊富なプラグインマーケットで拡張', features: ['テンプレート', 'プラグイン'], icon: 'globe', color: 'orange' },
      ],
    },

    // Competitive Advantage II
    {
      layout: 'pillars',
      slideTitle: '競争優位性 II：エンタープライズ機能',
      items: [
        { title: '即座に本番化', description: 'ワンクリックで WebApp/API を公開。デモから本番へシームレス移行', features: ['ワンクリック公開', '本番対応'], icon: 'play', color: 'blue' },
        { title: 'セキュリティ準拠', description: 'IAM/RBAC 対応、ISO 27001 / SOC 2 監査クリア', features: ['コンプライアンス', 'アクセス制御'], icon: 'shield', color: 'purple' },
        { title: '高可用性', description: 'K8s アーキテクチャ、ログ・パフォーマンス監視を標準装備', features: ['K8s HA', '安定運用'], icon: 'line-chart', color: 'green' },
        { title: 'プライベートデプロイ', description: 'データ主権を確保。既存運用基盤と統合可能', features: ['データセキュリティ', '自社管理'], icon: 'server', color: 'orange' },
      ],
    },

    // Competitive Advantage III
    {
      layout: 'presenter-compact',
      slideTitle: '競争優位性 III：オープン＆中立エコシステム',
      details: [
        {
          text: '1. 中立プラットフォーム',
          children: ['マルチクラウド / セルフホストに対応', 'ベクトル DB・モデルを自由に選択可能。ロックイン回避']
        },
        {
          text: '2. マルチモデルサポート',
          children: [
            '数百の商用 / OSS LLM に対応',
            'OpenAI 互換 API、セルフホストモデルもサポート'
          ]
        },
        {
          text: '3. 活発なコミュニティ',
          children: [
            'GitHub 100k+ Stars、急成長中',
            'チュートリアル、プラグイン、事例が日々追加'
          ]
        }
      ],
      highlights: [
        { icon: 'Globe', title: '中立プラットフォーム', subtitle: 'ベンダーロックイン回避', color: 'blue' },
        { icon: 'Cpu', title: 'マルチモデル', subtitle: '数百の LLM に対応', color: 'purple' },
      ],
    },

    // Part 2 Summary
    {
      layout: 'macro-focus',
      slideTitle: '章のまとめ（Part 2）',
      items: [
        'Agentic Workflow：Dify は単なるツールではなく、ワークフロープラットフォーム',
        'エンタープライズ基盤：安定性・エンジニアリング・品質保証が企業導入の鍵',
        '競争優位性：プロダクト体験 + エンタープライズ機能 + 中立エコシステムが Dify の強み'
      ],
    },

    // Section: Core Concepts
    {
      layout: 'section',
      slideTitle: '第3章：コアコンセプトとアーキテクチャ',
    },

    // Business Hierarchy
    {
      layout: 'diagram',
      slideTitle: 'ビジネス階層関係',
      subtitle: 'Workspace → App × Knowledge Base',
      slot: `
<div class="flex flex-col items-center">
  <div class="bg-slate-800 text-white rounded-2xl px-12 py-6 text-center shadow-lg">
    <div class="text-2xl font-bold mb-2">Workspace（テナント / ワークスペース）</div>
    <div class="text-slate-300 text-base">リソースクォータ / メンバー権限 / モデル設定</div>
  </div>

  <div class="w-px h-6 bg-slate-400"></div>
  <div class="w-80 h-px bg-slate-400"></div>
  <div class="flex justify-between w-80">
    <div class="w-px h-6 bg-slate-400"></div>
    <div class="w-px h-6 bg-slate-400"></div>
  </div>

  <div class="flex gap-8">
    <div class="bg-[#0033FF] text-white rounded-2xl px-10 py-6 text-center shadow-lg min-w-56">
      <div class="text-xl font-bold mb-1">App（アプリ）</div>
      <div class="text-blue-200 text-sm mb-3">Chatbot / Workflow</div>
      <div class="bg-white/20 text-white text-sm px-4 py-1 rounded-lg inline-block">ユーザー向け</div>
    </div>
    <div class="bg-emerald-500 text-white rounded-2xl px-10 py-6 text-center shadow-lg min-w-56">
      <div class="text-xl font-bold mb-1">Knowledge Base</div>
      <div class="text-emerald-100 text-sm mb-3">RAG コンテキスト</div>
      <div class="bg-white/20 text-white text-sm px-4 py-1 rounded-lg inline-block">データ共有</div>
    </div>
  </div>
</div>
    `.trim(),
    },

    // RAG Pipeline
    {
      layout: 'diagram',
      slideTitle: 'Knowledge Base RAG パイプライン',
      subtitle: 'データから回答生成まで',
      slot: `
<div class="flex items-center justify-center gap-4">
  <div class="flex flex-col items-center">
    <div class="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-2">
      <svg class="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </div>
    <div class="text-lg font-bold text-slate-700">ソース</div>
  </div>

  <div class="w-12 h-px bg-slate-300"></div>

  <div class="flex flex-col items-center">
    <div class="bg-amber-50 border border-amber-200 rounded-2xl px-8 py-4 flex flex-col items-center">
      <svg class="w-10 h-10 text-amber-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <div class="text-lg font-bold text-slate-700">ETL 処理</div>
      <div class="text-sm text-slate-500">クレンジング / 分割</div>
    </div>
  </div>

  <div class="w-12 h-px bg-slate-300"></div>

  <div class="flex flex-col items-center">
    <div class="bg-purple-50 border border-purple-200 rounded-2xl px-8 py-4 flex flex-col items-center">
      <svg class="w-10 h-10 text-purple-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
      <div class="text-lg font-bold text-slate-700">インデックス</div>
      <div class="text-sm text-slate-500">ベクトル / キーワード</div>
    </div>
  </div>

  <div class="w-12 h-px bg-slate-300"></div>

  <div class="flex flex-col items-center">
    <div class="bg-blue-50 border border-blue-200 rounded-2xl px-8 py-4 flex flex-col items-center">
      <svg class="w-10 h-10 text-blue-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <div class="text-lg font-bold text-slate-700">検索 & 生成</div>
      <div class="text-sm text-slate-500">Recall / Rerank</div>
    </div>
  </div>
</div>
    `.trim(),
    },

    // App Types
    {
      layout: 'presenter-compact',
      slideTitle: 'アプリケーションタイプの分類',
      subtitle: '基本・オーケストレーション・拡張',
      details: [
        {
          text: '1. 基本タイプ',
          children: ['Content Generation：シンプルなコンテンツ生成', 'Chatbot：マルチターン対話ボット', 'Agent：推論 + ツール呼び出し機能付き']
        },
        {
          text: '2. オーケストレーション',
          children: [
            'Workflow：決定論的なビジネスロジック向け',
            'Chatflow：複雑なメモリ / 変数を扱う対話フロー'
          ]
        },
        {
          text: '3. 拡張',
          children: [
            'Extension Plugin：開発者向けカスタム HTTP プラグイン'
          ]
        }
      ],
      highlights: [
        { icon: 'message-circle', title: '基本タイプ', subtitle: 'Prompt IDE + RAG + 変数', features: ['Gen', 'Chatbot', 'Agent'], color: 'blue' },
        { icon: 'git-branch', title: 'オーケストレーション', subtitle: 'ロジック / ループ / 分岐', features: ['Workflow', 'Chatflow'], color: 'purple' },
        { icon: 'code', title: '拡張', subtitle: '開発者向け', features: ['Plugin'], color: 'green' },
      ],
    },

    // Part 3 Summary
    {
      layout: 'macro-focus',
      slideTitle: '章のまとめ（Part 3）',
      items: [
        'ビジネスの骨格：Workspace / App / Knowledge Base の3つの柱',
        '機能の中核：RAG パイプラインと Agentic Workflow がコア',
        'モデリング思考：顧客要件を Dify の構造にマッピングする力を養う'
      ],
    },

    // Section: User Journey
    {
      layout: 'section',
      slideTitle: '第4章：Dify EE ユーザージャーニーデモ',
    },

    // User Journey 1
    {
      layout: 'presenter-compact',
      slideTitle: '1. ユーザージャーニー：設定から開発まで',
      details: [
        {
          text: '1. Workspace セットアップ',
          children: ['モデルプロバイダー（LLM）の設定', 'メンバーとロールの管理']
        },
        {
          text: '2. App 作成',
          children: [
            'Prompt / 変数 / Tools / KB の設定',
            'Chatbot / Agent / Workflow の選択'
          ]
        },
        {
          text: '3. デバッグ & トレース',
          children: [
            'Preview パネルでインタラクティブにデバッグ',
            'Tracing でノードごとの入出力・所要時間を確認'
          ]
        }
      ],
      imageUrl: 'assets/image/dify-develop.png',
    },

    // User Journey 2
    {
      layout: 'presenter-compact',
      slideTitle: '2. 公開と利用',
      details: [
        {
          text: '1. 公開形態',
          children: ['WebApp：エンドユーザーが直接利用', 'API Endpoint：業務システムへ統合', 'Extension：ブラウザ拡張としてサイドバー呼び出し']
        },
        {
          text: '2. アクセス制御',
          children: [
            '公開 / パスワード保護 / メンバー限定 / API Key'
          ]
        },
        {
          text: '3. 典型的なシナリオ',
          children: [
            '社員が WebApp で Agent を利用',
            '業務システムが API 経由で AI バックエンドを呼び出し'
          ]
        }
      ],
      imageUrl: 'assets/image/dify-webapp.png',
    },

    // User Journey 3
    {
      layout: 'cards',
      slideTitle: '3. 監視と運用',
      items: [
        { title: '運用の視点', description: '効果・コスト・安定性をモニタリング', icon: 'users', color: 'blue' },
        { title: 'Monitor', description: 'トークン消費、レスポンス時間、エラー率を可視化', icon: 'bar-chart', color: 'green' },
        { title: 'Logs', description: '履歴照会、Good / Bad サンプルのアノテーション', icon: 'file-text', color: 'black' },
        { title: '継続的改善', description: 'データに基づき Prompt / KB を最適化、テンプレート蓄積', icon: 'recycle', color: 'purple' },
      ],
    },

    // Part 4 Summary
    {
      layout: 'macro-focus',
      slideTitle: '章のまとめ（Part 4）',
      items: [
        '完全なループ：設定 → 開発 → 公開 → 運用で PDCA サイクルを形成',
        '本番価値：デモで終わらず、長期運用可能な本番システムへ',
        'サービス設計：ジャーニーを理解し、トレーニング・納品内容を設計'
      ],
    },

    // End Slide
    {
      layout: 'end',
      subtitle: 'Thank you for watching!',
      website: 'https://dify.ai',
      email: 'r.hashimoto@dify.ai',
      github: 'langgenius/dify',
    },
  ],
};
