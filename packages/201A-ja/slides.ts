import de from '@/dist/all-styles-en/assets/md-DBMAPjOp';
import type { Deck } from './extraTypes';

export const deck: Deck = {
  config: {
    title: 'Dify EE 201A: プロダクト入門',
    theme: '../theme-dify',
    browserExporter: true,
    favicon: '/assets/icon/Dify-if.svg',
    defaults: {
      deckName: 'Dify EE 201A: プロダクト入門',
      copyright: '© 2026 LangGenius K.K. All rights reserved.',
      authorName: 'Japan FDE Team',
    },
  },
  slides: [
    // Title Slide
    {
      layout: 'title',
      slideTitle: '製品アーキテクチャと機能の完全ガイド',
      subtitle: 'Dify エコシステムパートナー トレーニングシリーズ',
      seriesTitle: 'Dify EE 201A',
      label: 'Dify Ecosystem Partner Training',
      teamName: 'Japan FDE Team',
      tagline: 'Infrastructure for Intuitive LLM App Development',
    },
    // Course Goals
    {
      layout: 'course-overview',
      slideTitle: 'コースの目標',
      subtitle: 'Course Overview',
      objective: 'Dify Enterprise のアーキテクチャを解説し、Agentic AI プラットフォームの設計思想を理解する',
      value: '「4 層アーキテクチャ + エンタープライズ機能」を体系的に理解し、ソリューション設計力を身につける',
      scope: 'Dify EE 3.6.0 ベースで、技術基盤からエンタープライズ機能まで全体像をカバー',
    },
    {
      layout: 'section',
      part: 'Part',
      partNumber: 1,
      slideTitle: '製品アーキテクチャ\\n 詳細',
      subtitle: 'Architecture Deep Dive',
    },
    {
      layout: 'focus-cols',
      slideTitle: 'エクスペリエンス層 (Experience Layer)',
      subtitle: 'AI 成果物',
      showEmptyIconBox: true,
      items: [
        {
          title: 'エンタープライズ \\n AI アプリケーションのための統一された体験層',
          description: '最小限の労力で、最高のユーザー体験を実現',
        },
        {
          title: 'Dify Studio',
          description: 'AI アプリケーションの作成、デバッグ、管理を一元化します',
          icon: 'layout',
          color: 'blue',
        },
        {
          title: 'Built-in Templates',
          description: 'すぐに使える汎用テンプレートを標準搭載',
          icon: 'file-text',
          color: 'green',
        },
        {
          title: 'App (成果物)',
          description: 'Chatbot, Agent, Text Generator, Workflow, Chatflow',
          icon: 'box',
          color: 'orange',
        }
      ]
    },
    {
      layout: 'cards',
      slideTitle: 'エクスペリエンス層/コアコンポーネント',
      subtitle: 'Core Components',
      items: [
        {
          title: 'Dify Studio',
          description: 'AI アプリを一元管理するコンソール。視覚的にアプリを構築できます',
          icon: 'layout',
          color: 'blue',
          tags: ['Builder']
        },
        {
          title: 'Built-in Templates',
          description: '人事、開発、ライティングなど実用的なテンプレートを内蔵。ワンクリックで利用可能',
          icon: 'layout',
          color: 'purple',
          tags: ['Resource']
        },
        {
          title: 'Apps',
          description: 'Chatbot、Agent、Workflow など、\\n 様々なタイプの AI アプリを作成可能',
          icon: 'box',
          color: 'green',
          tags: ['Output']
        },
        {
          title: 'WebApp UI',
          description: 'エンドユーザー向けのモダンな UI。モバイル/PC のレスポンシブ対応',
          icon: 'eye',
          color: 'orange',
          tags: ['Frontend']
        }
      ]
    },
    {
      layout: 'cards',
      slideTitle: 'エクスペリエンス層/\\n アプリケーションタイプ詳細',
      subtitle: 'Diverse Output Forms',
      items: [
        {
          title: 'Chatbot',
          description: 'LLM ベースのマルチターン対話アプリケーション。\\n 用途：カスタマーサポート、ナレッジベース QA',
          icon: 'bot-message-square',
          color: 'blue',
          tags: ['基本アプリ']
        },
        {
          title: 'Agent',
          description: `自律的に考えるエージェント。\\n 推論と計画を自ら行います。`,
          icon: 'brain-cog',
          color: 'purple',
          tags: ['基本アプリ']
        },
        {
          title: 'Text Generator',
          description: '非対話式の単発インタラクション。\\n 用途：翻訳、文章生成、SQL 生成。',
          icon: 'file-edit',
          color: 'cyan',
          tags: ['基本アプリ']
        },
        {
          title: 'Workflow',
          description: 'プロセス指向の自動化オーケストレーション (Code, If/Else)。\\n用途：業務フロー自動化、バッチ処理。',
          icon: 'workflow',
          color: 'green',
          tags: ['ワークフローアプリ']
        },
        {
          title: 'Chatflow',
          description: 'Chatbot の対話性 + Workflow の制御ロジック。\\n用途：複雑な SOP 対応のカスタマーサポート',
          icon: 'network',
          color: 'indigo',
          tags: ['高度なアプリ']
        }
      ]
    },
    {
      layout: 'focus-cols',
      slideTitle: 'オーケストレーション層\\n (Orchestration Layer)',
      subtitle: '可視化と再利用性',
      showEmptyIconBox: true,
      items: [
        {
          title: 'AI のアイデアを\\n 実行可能なワークフローに',
          description: '視覚的なオーケストレーションで、複雑な業務ロジックを簡単に構築・再利用',
        },
        {
          title: 'Prompt IDE',
          description: 'Prompt の設計、テスト、効果の最適化を可視化',
          icon: 'layout',
          color: 'black',
        },
        {
          title: 'Agentic Workflow',
          description: '推論、計画、外部ツールの呼び出しを行う自律型エージェントを構築',
          icon: 'bot',
          color: 'blue',
        },
        {
          title: 'RAG Pipeline',
          description: 'ナレッジデータ処理フローを設計し、コンテキストを認識した高精度な検索を実現',
          icon: 'database',
          color: 'green',
        },
        {
          title: 'Dify Standard DSL',
          description: '標準化されたワークフロー記述言語。保存やチームでの共有をサポート',
          icon: 'code',
          color: 'purple',
        }
      ]
    },
    {
      layout: 'split',
      slideTitle: 'オーケストレーション層/Prompt IDE',
      subtitle: 'Development Environment',
      items: [
        {
          text: '**Development Environment**: 視覚的な Prompt 設計：WYSIWYG のプロンプト編集インターフェース',
        },
        {
          text: '**複数モデル比較**：ワンクリックでモデルを切り替え、効果の違いを素早く検証',
        },
        {
          text: '**コンテキスト管理**：System Prompt、Few-shot、変数を柔軟に設定',
        },
        {
          text: '**バージョン管理**：変更履歴を自動保存し、ロールバックと差分比較をサポート',
        }
      ],
      slot: `<div class="w-full max-w-[32rem] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
<div class="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
<div class="flex gap-1.5">
<div class="w-3 h-3 rounded-full bg-gray-300"></div>
<div class="w-3 h-3 rounded-full bg-gray-300"></div>
<div class="w-3 h-3 rounded-full bg-gray-300"></div>
</div>
<span class="ml-4 text-sm text-gray-600 font-medium">Prompt Engineering.dify</span>
</div>
<div class="flex h-[16rem]">
<div class="w-1/4 p-3 border-r border-gray-100">
<div class="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 font-medium mb-4">GPT-4o</div>
<div class="space-y-2">
<div class="h-2 bg-gray-200 rounded w-full"></div>
<div class="h-2 bg-gray-200 rounded w-3/4"></div>
</div>
<div class="mt-4 space-y-2 p-3 border border-gray-100 rounded-lg">
<div class="h-2 bg-gray-200 rounded w-full"></div>
<div class="h-2 bg-gray-200 rounded w-full"></div>
<div class="h-2 bg-gray-200 rounded w-2/3"></div>
</div>
</div>
<div class="w-2/5 p-3 border-r border-gray-100 flex flex-col">
<div class="text-xs font-bold text-gray-900 mb-3 tracking-wide">SYSTEM</div>
<div class="space-y-2 text-xs flex-1">
<p><span class="text-[#0033FF] font-semibold">Role:</span> <span class="text-gray-600">You are a helpful assistant.</span></p>
<p><span class="text-[#0033FF] font-semibold">Context:</span> <span class="text-gray-600 font-mono">｛｛context｝｝</span></p>
<p><span class="text-[#0033FF] font-semibold">Task:</span> <span class="text-gray-600">Answer user questions based on knowledge.</span></p>
</div>
<div class="mt-auto pt-3">
<div class="flex items-center gap-2 text-[#0033FF] text-xs font-medium">
<Icon name="circle-check" class="w-4 h-4" />
Optimized
</div>
</div>
</div>
<div class="w-1/3 p-3 flex flex-col">
<div class="flex gap-2 mb-3">
<div class="w-6 h-6 rounded-full bg-gray-200 shrink-0"></div>
<div class="bg-gray-100 rounded-lg px-3 py-2 text-xs text-gray-700">Hello, how can I help?</div>
</div>
<div class="flex justify-end mb-3">
<div class="bg-blue-50 rounded-lg px-3 py-2 text-xs text-[#0033FF] max-w-[80%]">Analyze this report.</div>
<div class="w-6 h-6 rounded-full bg-blue-100 shrink-0 ml-2"></div>
</div>
<div class="mt-auto">
<div class="border border-gray-200 rounded-full px-4 py-2 text-xs text-gray-400">Type a message...</div>
</div>
</div>
</div>
</div>`,
    },
    {
      layout: 'split',
      slideTitle: 'オーケストレーション層/Agentic Workflow',
      subtitle: 'Visual Orchestration',
      items: [
        {
          text: '**グラフによる可視化オーケストレーション**：ノードをドラッグ＆ドロップして複雑な業務ロジックを構築',
        },
        {
          text: '**豊富なノードライブラリ**',
          children: [
            '**LLM Node**: 推論コア',
            '**Code Node**: Python/JS スクリプト処理',
            '**Tool Node**: 検索や API などの外部ツールを呼び出し',
            '**Knowledge Retrieval**: ナレッジベースを動的にマウント'
          ]
        },
        {
          text: '**論理分岐**：**If/Else** 条件分岐と **反復ループ** をサポート',
        },
      ],
      slot: `<div class="w-full max-w-[28rem] bg-slate-50 rounded-xl shadow-xl border border-slate-200 p-3 relative overflow-hidden" style="background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);">
<div class="absolute inset-0 opacity-30" style="background-image: radial-gradient(#94a3b8 0.5px, transparent 0.5px); background-size: 12px 12px;"></div>
<div class="relative flex items-center gap-2">
<div class="bg-emerald-500 text-white rounded px-2 py-1 text-[10px] font-bold shadow flex items-center gap-1">
<div class="w-1.5 h-1.5 bg-white rounded-full"></div>
Start
</div>
<div class="w-4 h-0.5 bg-emerald-400"></div>
<div class="bg-white border border-blue-400 rounded px-2 py-1 shadow text-center">
<div class="text-[8px] text-blue-500 font-bold">KNOWLEDGE</div>
</div>
<div class="w-4 h-0.5 bg-blue-400"></div>
<div class="bg-white border border-violet-400 rounded px-2 py-1 shadow text-center">
<div class="text-[8px] text-violet-500 font-bold">LLM</div>
</div>
<div class="w-4 h-0.5 bg-violet-400"></div>
<div class="bg-white border border-amber-400 rounded px-2 py-1 shadow text-center">
<div class="text-[8px] text-amber-600 font-bold">IF/ELSE</div>
</div>
<div class="flex flex-col gap-1 ml-1">
<div class="flex items-center gap-1">
<div class="w-3 h-0.5 bg-emerald-400"></div>
<div class="bg-white border border-emerald-400 rounded px-1.5 py-0.5 shadow text-[7px] text-emerald-600 font-bold">CODE</div>
</div>
<div class="flex items-center gap-1">
<div class="w-3 h-0.5 bg-rose-400"></div>
<div class="bg-white border border-rose-400 rounded px-1.5 py-0.5 shadow text-[7px] text-rose-500 font-bold">HTTP</div>
</div>
</div>
<div class="w-3 h-0.5 bg-slate-400 ml-1"></div>
<div class="bg-rose-500 text-white rounded px-2 py-1 text-[10px] font-bold shadow flex items-center gap-1">
End
</div>
</div>
</div>`,
    },
    {
      layout: 'focus-cols',
      slideTitle: '接続層 (Connection Layer)',
      subtitle: '外部機能の統合',
      showEmptyIconBox: true,
      items: [
        {
          title: '外部エコシステムと連携し、AI アプリの機能を拡張',
          description: 'モデルやデータの連携を容易にし、AI が外部サービスと連動できるようにします',
        },
        {
          title: 'Plugins',
          description: 'モジュール化されたプラグイン機構で、外部サービスと柔軟に連携',
          icon: 'plug',
          color: 'purple',
        },
        {
          title: 'Dify Marketplace',
          description: 'Model Providers, Tools, Data Sources ',
          icon: 'globe',
          color: 'blue',
        },
        {
          title: 'MCP Server',
          description: 'MCP (Model Context Protocol) エコシステムと簡単に接続',
          icon: 'workflow',
          color: 'green',
        },
        {
          title: 'External LLMOps Tools',
          description: 'Arize、LangSmith、Langfuse など外部の監視・評価ツールと連携可能',
          icon: 'line-chart',
          color: 'orange',
        }
      ]
    },
    {
      layout: 'split',
      slideTitle: '接続層/Dify プラグイン',
      subtitle: 'Modular & Pluggable',
      items: [
        {
          text: '**モジュール化エコシステム**：Dify プラグインは、モデル・ツール・データソースをモジュール化し、柔軟に拡張できる仕組みです。',
        },
        {
          text: '**コアバリュー**',
          children: [
            '**自由な組み合わせ**：必要な AI 機能を自在に組み合わせ、ビジネスの変化に対応',
            '**迅速な統合**：標準プロトコルによる接続で、開発・連携コストを削減',
            '**オープンエコシステム**：機能を継続的に拡張でき、ベンダーロックインを回避'
          ]
        },
      ],
      slot: `<div class="w-full max-w-[20rem] flex flex-col items-center gap-3">
<div class="relative">
<div class="bg-[#4F6BF6] text-white rounded-xl px-6 py-3 text-sm font-bold italic shadow-lg">Dify Core System</div>
<div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#4F6BF6]"></div>
</div>
<div class="bg-slate-700 text-white rounded-lg px-5 py-2 text-xs font-medium mt-2 shadow">Standard Interface / Protocol</div>
<div class="flex items-center justify-center gap-4 mt-2">
<div class="flex flex-col items-center gap-2">
<div class="w-14 h-14 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center bg-white">
<Icon name="bot" class="w-7 h-7 text-slate-500" stroke-width="1.5" />
</div>
<span class="text-xs text-slate-600 font-medium">Model</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-14 h-14 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center bg-white">
<Icon name="wrench" class="w-7 h-7 text-slate-500" stroke-width="1.5" />
</div>
<span class="text-xs text-slate-600 font-medium">Tool</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-14 h-14 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center bg-white">
<Icon name="database" class="w-7 h-7 text-slate-500" stroke-width="1.5" />
</div>
<span class="text-xs text-slate-600 font-medium">Data</span>
</div>
</div>
</div>`,
    },
    {
      layout: 'split',
      slideTitle: '接続層/マーケットプレイス',
      subtitle: 'Dify Marketplace',
      items: [
        {
          text: '**主な分類**:',
          children: [
            '**Model Providers**: 主要な大規模言語モデル(LLM)プロバイダーの接続と切り替えをサポート',
            '**Tools**: 検索、計算、API などのサードパーティツールを統合し、AI 機能を拡張',
            '**Data Sources**: ファイル、Web ページ、オンラインドキュメント、クラウドストレージなど、多種多様なデータソースの同期をサポート',
            '**Agent Strategy**: Dify Agent ノード戦略により、エージェントの振る舞いを最適化',
            '**Trigger**: トリガープラグイン。サードパーティシステムのイベント駆動によるアプリ実行をサポート',
            '**Extension**: HTTP サービスを提供し、軽量な拡張機能を簡単に実現'
          ]
        },
      ],
      slot: `<div class="w-full max-w-[22rem] bg-white rounded-2xl border border-slate-200 shadow-lg p-4">
<div class="flex items-center gap-2 mb-4">
<Icon name="globe" class="w-6 h-6 text-blue-600" stroke-width="2" />
<span class="text-lg font-bold text-slate-800">Dify Marketplace</span>
</div>
<div class="grid grid-cols-2 gap-2">
<div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
<div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
<Icon name="bot" class="w-5 h-5 text-blue-600" stroke-width="1.5" />
</div>
<div>
<div class="font-bold text-sm text-slate-800">Model</div>
<div class="text-xs text-slate-600">LLM Providers</div>
</div>
</div>
<div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
<div class="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
<Icon name="wrench" class="w-5 h-5 text-indigo-600" stroke-width="1.5" />
</div>
<div>
<div class="font-bold text-sm text-slate-800">Tool</div>
<div class="text-xs text-slate-600">API Extensions</div>
</div>
</div>
<div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
<div class="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
<Icon name="database" class="w-5 h-5 text-emerald-600" stroke-width="1.5" />
</div>
<div>
<div class="font-bold text-sm text-slate-800">Data Source</div>
<div class="text-xs text-slate-500">Knowledge Sync</div>
</div>
</div>
<div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
<div class="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
<Icon name="brain" class="w-5 h-5 text-purple-600" stroke-width="1.5" />
</div>
<div>
<div class="font-bold text-sm text-slate-800">Agent Strategy</div>
<div class="text-xs text-slate-500">Thinking Logic</div>
</div>
</div>
<div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
<div class="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
<Icon name="zap" class="w-5 h-5 text-orange-500" stroke-width="1.5" />
</div>
<div>
<div class="font-bold text-sm text-slate-800">Trigger</div>
<div class="text-xs text-slate-500">Event Actions</div>
</div>
</div>
<div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
<div class="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
<Icon name="puzzle" class="w-5 h-5 text-cyan-600" stroke-width="1.5" />
</div>
<div>
<div class="font-bold text-sm text-slate-800">Extension</div>
<div class="text-xs text-slate-500">Lightweight Service</div>
</div>
</div>
</div>
</div>`,
    },
    {
      layout: 'split',
      slideTitle: '接続層/External LLMOps',
      subtitle: 'Observability & Evaluation',
      items: [
        {
          text: '**機能**：高度なログ管理、パフォーマンス監視・評価機能'
        },
        {
          text: '**サポートプラットフォーム**：',
          children: [
            '**Langfuse / LangSmith**: オープンソース LLM エンジニアリング＆開発者プラットフォーム',
            '**Arize / Phoenix**: エンタープライズおよびオープンソースの可観測性プラットフォーム',
            '**Cloud Vendors**: Aliyun, Tencent, Databricks などのクラウドベンダーのマネージドサービス'
          ]
        },
        {
          text: '**主要な指標**：トークン消費量、レイテンシ分析、回答品質の評価',
        }
      ],
      slot: `<div class="w-full max-w-[24rem] bg-slate-900 rounded-2xl p-5 relative overflow-hidden">
<div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(rgba(100,116,139,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.3) 1px, transparent 1px); background-size: 24px 24px;"></div>
<div class="relative flex items-center gap-4">
<div class="flex flex-col items-center">
<div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
<Icon name="activity" class="w-8 h-8 text-white" stroke-width="2" />
</div>
<span class="text-white font-bold text-sm mt-2 italic">Dify App</span>
</div>
<div class="flex flex-col items-center gap-1">
<div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
<span class="text-slate-400 text-xs">Tracing</span>
</div>
<div class="grid grid-cols-2 gap-2">
<div class="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
<Icon name="activity" class="w-6 h-6 text-blue-400" stroke-width="1.5" />
</div>
<div class="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
<span class="text-blue-400 font-bold text-xs">Arize</span>
</div>
<div class="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
<span class="text-blue-400 font-bold text-xs">Smith</span>
</div>
<div class="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
<Icon name="cloud" class="w-6 h-6 text-blue-400" stroke-width="1.5" />
</div>
</div>
</div>
<div class="relative flex items-center justify-center gap-6 mt-4 pt-3 border-t border-slate-700">
<div class="flex items-center gap-1.5">
<Icon name="circle-check" class="w-4 h-4 text-slate-400" />
<span class="text-slate-300 text-sm">Logs</span>
</div>
<div class="flex items-center gap-1.5">
<Icon name="circle-check" class="w-4 h-4 text-slate-400" />
<span class="text-slate-300 text-sm">Metrics</span>
</div>
<div class="flex items-center gap-1.5">
<Icon name="circle-check" class="w-4 h-4 text-slate-400" />
<span class="text-slate-300 text-sm">Evaluation</span>
</div>
</div>
</div>`,
    },
    {
      layout: 'focus-cols',
      slideTitle: 'プラットフォーム層 (Platform Layer)',
      subtitle: '本番環境レベルの基盤',
      showEmptyIconBox: true,
      items: [
        {
          title: '統一された AI 基盤サポート体制を提供',
          description: 'AI インフラをゼロから構築する必要がなく、ビジネスロジックに集中できます',
        },
        {
          title: 'Backend-as-a-Service',
          description: 'API Ready, ログ追跡, 監視管理 (Token/User)',
          icon: 'cloud',
          color: 'blue',
        },
        {
          title: 'Vector Databases',
          description: '29 種以上の主要なベクトル DB（Qdrant, Milvus, PGVector など）に対応',
          icon: 'database',
          color: 'green',
        },
        {
          title: 'Flexible Deployment',
          description: 'K8s ベースで、AWS、Azure、Aliyun などの主要なクラウド環境に対応',
          icon: 'settings',
          color: 'orange',
        },
        {
          title: 'Security and Compliance',
          description: 'エンタープライズレベルのセキュリティとコンプライアンス機能を備え、暗号化やロールベースのアクセス制御に対応',
          icon: 'shield',
          color: 'red',
        }
      ]
    },
    {
      layout: 'split',
      slideTitle: 'プラットフォーム層/Backend-as-a-Service',
      subtitle: 'API & Observability',
      items: [
        {
          text: '**API Ready**：API Key を自動生成し、標準化されたインターフェース呼び出しをサポート'
        },
        {
          text: '**ログとトレーシング**：すべての対話の実行過程とコンテキストを記録'
        },
        {
          text: '**監視指標**：',
          children: [
            '**Total Messages**: 総対話数の推移',
            '**Active Users**: アクティブユーザー数',
            '**Avg Interactions**: ユーザーとの平均やり取り回数',
            '**Token Usage**: コストとリソース消費量'
          ]
        }
      ],
      slot: `<div class="w-full max-w-[20rem] bg-white rounded-xl border border-slate-200 shadow-lg p-3">
<div class="flex items-center gap-2 mb-2">
<Icon name="key" class="w-4 h-4 text-blue-500" stroke-width="2" />
<span class="text-sm font-bold text-slate-800">API Lifecycle</span>
</div>
<div class="flex gap-1.5 mb-3">
<span class="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 rounded-full border border-slate-200">Generate Key</span>
<span class="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 rounded-full border border-slate-200">Rate Limit</span>
<span class="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 rounded-full border border-slate-200">Revoke</span>
</div>
<div class="grid grid-cols-2 gap-2">
<div class="p-2 rounded-lg border border-slate-200">
<div class="text-[10px] text-slate-500">Total Messages</div>
<div class="text-lg font-bold text-blue-500">1.2M</div>
<div class="mt-1 h-1 bg-slate-100 rounded-full overflow-hidden">
<div class="h-full w-3/4 bg-blue-500 rounded-full"></div>
</div>
</div>
<div class="p-2 rounded-lg border border-slate-200">
<div class="text-[10px] text-slate-500">Active Users</div>
<div class="text-lg font-bold text-slate-700">8.5k</div>
<div class="mt-1 h-1 bg-slate-100 rounded-full overflow-hidden">
<div class="h-full w-4/5 bg-slate-700 rounded-full"></div>
</div>
</div>
<div class="p-2 rounded-lg border border-slate-200">
<div class="text-[10px] text-slate-500">Avg Interactions</div>
<div class="text-lg font-bold text-slate-700">12.4</div>
<div class="mt-1 h-1 bg-slate-100 rounded-full overflow-hidden">
<div class="h-full w-1/2 bg-slate-700 rounded-full"></div>
</div>
</div>
<div class="p-2 rounded-lg border border-slate-200">
<div class="text-[10px] text-slate-500">Token Usage</div>
<div class="text-lg font-bold text-slate-700">$420</div>
<div class="mt-1 h-1 bg-slate-100 rounded-full overflow-hidden">
<div class="h-full w-2/3 bg-slate-700 rounded-full"></div>
</div>
</div>
</div>
</div>`,
    },
    {
      layout: 'split',
      slideTitle: 'プラットフォーム層/ベクトルデータベース',
      subtitle: 'API & Observability',
      items: [
        {
          text: '**幅広いサポート**：主要な **29 種類以上** のベクトルデータベースに対応'
        },
        {
          text: '**VDB サポート**:',
          children: [
            '**グローバル主要製品**: Qdrant, Weaviate, Milvus, Chroma, Elasticsearch',
            '**PostgreSQL**: PGVector, PGVecto.rs',
            '**クラウドベンダー**: Aliyun, Tencent, AWS, Azure, Google Cloud',
            '**データベース内蔵**: TiDB Vector, Oracle, OceanBase'
          ]
        },
      ],
      slot: `<div class="w-full max-w-[22rem] bg-white rounded-xl border border-slate-200 shadow-lg p-4 text-center">
<div class="text-xl font-bold text-slate-800 mb-1">29+ Supported Vector DBs</div>
<div class="text-xs text-slate-500 mb-4">Seamless integration with leading vector stores</div>
<div class="flex flex-wrap justify-center gap-1.5 mb-2">
<span class="px-2.5 py-1 text-[11px] font-semibold text-[#0033FF] bg-blue-100 rounded-full border border-slate-200">Qdrant</span>
<span class="px-2.5 py-1 text-[11px] font-semibold text-[#0033FF] bg-blue-100 rounded-full border border-slate-200">Weaviate</span>
<span class="px-2.5 py-1 text-[11px] font-semibold text-[#0033FF] bg-blue-100 rounded-full border border-slate-200">Chroma</span>
<span class="px-2.5 py-1 text-[11px] font-semibold text-[#0033FF] bg-blue-100 rounded-full border border-slate-200">Elastic</span>
<span class="px-2.5 py-1 text-[11px] font-semibold text-[#0033FF] bg-blue-100 rounded-full border border-slate-200">OpenSearch</span>
</div>
<div class="flex flex-wrap justify-center gap-1.5 mb-2">
<span class="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white rounded-full border border-slate-200">AWS</span>
<span class="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white rounded-full border border-slate-200">Azure</span>
<span class="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white rounded-full border border-slate-200">PGVector</span>
<span class="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white rounded-full border border-slate-200">TiDB</span>
<span class="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white rounded-full border border-slate-200">OceanBase</span>
<span class="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white rounded-full border border-slate-200">Oracle</span>
<span class="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white rounded-full border border-slate-200">MyScale</span>
</div>
</div>`,
    },
    {
      layout: 'split',
      slideTitle: 'プラットフォーム層/柔軟なデプロイメント',
      subtitle: 'Cloud Native & Hybrid',
      items: [
        {
          text: '**アーキテクチャ基盤**：Kubernetes (K8s) ベースのクラウドネイティブ設計'
        },
        {
          text: '**柔軟なデプロイ**:',
          children: [
            '**Public Cloud**: AWS, Azure, GCP, Aliyun, Tencent Cloud',
            '**On-Premises**: プライベートデプロイメント。データを完全に管理',
            '**Hybrid**: ハイブリッドクラウドデプロイモード'
          ]
        },
        {
          text: '**メリット**：ビジネスの柔軟性とデータセキュリティを両立'
        }
      ],
      slot: `<div class="w-full max-w-[16rem] max-h-[24rem] bg-slate-900 rounded-2xl p-4">
<div class="relative h-[14rem] flex items-center justify-center">
<div class="absolute w-[8rem] h-[8rem] rounded-full border-2 border-slate-600"></div>
<div class="absolute w-[13rem] h-[13rem] rounded-full border border-slate-700"></div>
<div class="absolute" style="top: 0; left: 50%; transform: translateX(-50%); margin-top: -0.25rem;">
<div class="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
<Icon name="globe" class="w-4 h-4 text-slate-400" stroke-width="1.5" />
</div>
</div>
<div class="absolute" style="top: 50%; right: 0; transform: translateY(-50%); margin-right: -0.25rem;">
<div class="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
<Icon name="server" class="w-4 h-4 text-slate-400" stroke-width="1.5" />
</div>
</div>
<div class="absolute" style="bottom: 0; left: 50%; transform: translateX(-50%); margin-bottom: -0.25rem;">
<div class="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
<Icon name="layout-grid" class="w-4 h-4 text-slate-400" stroke-width="1.5" />
</div>
</div>
<div class="absolute" style="top: 50%; left: 0; transform: translateY(-50%); margin-left: -0.25rem;">
<div class="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
<Icon name="download" class="w-4 h-4 text-slate-400" stroke-width="1.5" />
</div>
</div>
<div class="w-[6rem] h-[6rem] bg-blue-500 rounded-full flex flex-col items-center justify-center shadow-lg shadow-blue-500/40 z-10">
<Icon name="cloud-cog" class="w-[2.5rem] h-[2.5rem] text-white" stroke-width="1.5" />
<div class="text-white font-bold text-[0.8rem] mt-0.5">K8s Native</div>
<div class="text-blue-200 text-[0.6rem]">Docker / Helm</div>
</div>
</div>
<div class="text-center text-[1rem] text-slate-400 mt-1">
AWS • Azure • GCP
</div>
</div>`,
    },
    {
      layout: 'cards',
      slideTitle: '横断的機能領域 Enterprise Capability',
      subtitle: '全レイヤーを横断するガバナンスと運用',
      slot: `<div class="flex items-center gap-4 bg-slate-100 rounded-lg px-6 py-4">
<div class="bg-[#0033FF] text-white text-[0.7rem] font-bold px-3 py-1 rounded-md shrink-0">Positioning</div>
<p class="text-[1.1rem] font-bold text-slate-900 leading-snug">全レイヤーを横断するガバナンスと運用機能が、エンタープライズ品質を保証します。</p>
</div>`,
      items: [
        {
          title: 'ID とアカウント',
          description: '組織/スペース/メンバー管理。SSO/SCIM とマルチテナント分離をサポート',
          icon: 'users',
          color: 'blue',
        },
        {
          title: 'コラボレーションと成果物管理',
          description: `RBAC 権限管理、アプリバージョン管理、リリース制御`,
          icon: 'git-branch',
          color: 'purple',
        },
        {
          title: '運用効率',
          description: 'グローバルクレデンシャル管理、プラグインライフサイクル管理',
          icon: 'settings',
          color: 'green',
        },
        {
          title: 'ガバナンスとブランディング',
          description: '包括的な監査ログ、企業ブランドに合わせたホワイトラベル対応',
          icon: 'key',
          color: 'orange',
        },
      ]
    },
    {
      layout: 'story',
      slideTitle: 'Agentic AI 生産性\\n プラットフォーム',
      subtitle: 'Architecture Summary',
      content: [`単一のプラットフォームで 「**設計 → 構築 → デバッグ → リリース → 監視**」 を一貫してカバー。\\n\\n **エンタープライズ向け**のセキュリティ、ガバナンス、ブランディング機能により、**Agentic AI**アプリの大規模展開をサポートします`],
      imageUrl: '/assets/image/cycle.png',
    },
    {
      layout: 'macro-focus',
      slideTitle: 'パート 1 まとめ：フルスタックアーキテクチャ',
      items: [
        '4 層構造のアーキテクチャが堅牢な技術基盤を提供',
        '横断的なエンタープライズ機能がコンプライアンスと運用をサポート',
        'Studio + API の 2 つのモードで様々な開発ニーズに対応',
        'オープンなエコシステム層 (MCP/Tools) で柔軟な拡張が可能'
      ]
    },
    {
      layout: 'section',
      part: 'Part',
      partNumber: 2,
      slideTitle: '製品の主要コンポーネント',
      subtitle: 'Dify は、設計・統合・デバッグからデプロイ・監視まで一貫してサポートする Agentic AI アプリ構築環境です',
    },
    {
      layout: 'toc',
      slideTitle: '目次',
      subtitle: 'Part 2: Build with Dify',
      items: [
        { title: 'IAM (IDとアクセス管理)', subtitle: 'Identity & Access Management', active: true },
        { title: '構築、接続、テスト', subtitle: 'Build, Connect & Test' },
        { title: 'コラボレーション、権限、リリース', subtitle: 'Collaboration, Permissions & Release' },
        { title: '運用、コンプライアンス、ブランディング', subtitle: 'Operation, Compliance & Branding' },
      ]
    },
    {
      layout: 'diagram',
      slideTitle: 'IAM (ID とアクセス管理)',
      subtitle: 'コア目標',
      slot: `<div class="w-full flex flex-col gap-6">
<div class="flex gap-4 justify-center">
<div class="flex-1 max-w-[14rem] bg-white rounded-xl p-4 flex flex-col items-center text-center shadow-sm border border-gray-100">
<div class="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-3">
<Icon name="users" class="w-7 h-7 text-[#0033FF]" stroke-width="1.5" />
</div>
<div class="font-bold text-gray-900 text-[0.95rem] mb-1">誰がログインしていますか?</div>
<div class="text-gray-500 text-[0.75rem]">ユーザーを特定する<br />(Account System)</div>
</div>
<div class="flex-1 max-w-[14rem] bg-white rounded-xl p-4 flex flex-col items-center text-center shadow-sm border border-gray-100">
<div class="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-3">
<Icon name="shield" class="w-7 h-7 text-[#0033FF]" stroke-width="1.5" />
</div>
<div class="font-bold text-gray-900 text-[0.95rem] mb-1">誰がアカウントを管理していますか?</div>
<div class="text-gray-500 text-[0.75rem]">管理主体を決める<br />(Mgmt Plane)</div>
</div>
<div class="flex-1 max-w-[14rem] bg-white rounded-xl p-4 flex flex-col items-center text-center shadow-sm border border-gray-100">
<div class="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-3">
<Icon name="link" class="w-7 h-7 text-[#0033FF]" stroke-width="1.5" />
</div>
<div class="font-bold text-gray-900 text-[0.95rem] mb-1">パスワードはどこにありますか?</div>
<div class="text-gray-500 text-[0.75rem]">認証情報の保存先<br />(Identity Source)</div>
</div>
</div>
<div class="flex items-center justify-center gap-2 mt-2">
<div class="h-px w-16 bg-gray-300"></div>
<span class="text-[0.7rem] text-gray-400 tracking-widest">ARCHITECTURAL LOGIC</span>
<div class="h-px w-16 bg-gray-300"></div>
</div>
<div class="flex items-center justify-center gap-3">
<div class="bg-slate-800 text-white font-bold text-[0.85rem] px-4 py-2 rounded-lg">3つのアカウント体系</div>
<span class="text-gray-400 text-lg">=</span>
<div class="bg-slate-800 text-white font-bold text-[0.85rem] px-4 py-2 rounded-lg">2つの管理プレーン</div>
<span class="text-gray-400 text-lg">×</span>
<div class="bg-slate-800 text-white font-bold text-[0.85rem] px-4 py-2 rounded-lg">2つのIDソース</div>
<span class="text-[#0033FF] text-lg">→</span>
<div class="bg-[#0033FF] text-white font-bold text-[0.95rem] px-5 py-2.5 rounded-lg shadow-lg">4つのアカウント管理モード</div>
</div>
</div>`,
    },
    {
      layout: 'cards',
      slideTitle: '3 つのアカウント体系（3 つのユーザー空間に対応）',
      subtitle: 'Dify を使っているのは誰か？',
      items: [
        {
          title: 'System User\\n EE 管理パネルユーザー',
          description: '**Who**\\n Enterprise Dashboard にログインできる人\\n **What**\\n ・ライセンス / グローバル設定の管理\\n ・全ワークスペースとメンバーを管理\\n ・システムレベルのセキュリティ (SSO/SCIM) を設定',
          icon: 'settings',
          color: 'blue',
          tags: ['Admin']
        },
        {
          title: 'Members\\n EE ワークスペースユーザー',
          description: '**Who**\\n ワークスペースにアクセスする社内メンバー (PM/Dev)\\n **What**\\n ・アプリとナレッジベースの作成・編集・運用\\n ・ビジネスロジックのメンテナンス',
          icon: 'users',
          color: 'purple',
          tags: ['Builder']
        },
        {
          title: 'Web App End Users\\n EE 成果物エンドユーザー',
          description: '**Who**\\n WebApp のみを利用するビジネスユーザー / 顧客\\n **What**\\n ・公開されたアプリを使用\\n ・設定には関与しない',
          icon: 'globe',
          color: 'green',
          tags: ['User']
        },
      ]
    },
    {
      layout: 'diagram',
      slideTitle: '2 つの管理プレーン × 2 つの ID ソース',
      subtitle: '認証と管理のマトリックス',
      slot: `<div class="w-full flex flex-col gap-4">
<div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
<div class="flex gap-3">
<div class="w-[12rem] shrink-0">
<div class="flex items-center gap-2 mb-2">
<div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
<Icon name="settings" class="w-4 h-4 text-[#0033FF]" stroke-width="1.5" />
</div>
<span class="font-bold text-gray-900 text-[1rem]">管理プレーン</span>
</div>
<div class="text-[#0033FF] font-semibold text-[0.7rem] mb-1">Who Manages?</div>
<div class="text-gray-600 text-[0.7rem] leading-relaxed">ログイン可否、基本情報、権限を決定。</div>
</div>
<div class="flex-1 bg-white rounded-lg p-3 border border-gray-200 relative">
<div class="absolute top-2 right-2 w-2 h-2 bg-[#0033FF] rounded-full"></div>
<div class="font-bold text-gray-900 text-[0.9rem] mb-1">Dify EE 管理プレーン</div>
<div class="text-gray-500 text-[0.7rem]">ログイン権限、基本情報を制御。</div>
</div>
<div class="flex-1 bg-white rounded-lg p-3 border border-gray-200 relative">
<div class="absolute top-2 right-2 w-2 h-2 bg-[#0033FF] rounded-full"></div>
<div class="font-bold text-gray-900 text-[0.9rem] mb-1">IDP 管理プレーン</div>
<div class="text-gray-500 text-[0.7rem]">企業統一管理、属性同期 (SCIM)。</div>
</div>
</div>
</div>
<div class="flex items-center justify-center gap-3">
<div class="h-px flex-1 bg-gray-300"></div>
<Icon name="arrow-down" class="w-5 h-5 text-[#0033FF]" stroke-width="2" />
<div class="h-px flex-1 bg-gray-300"></div>
</div>
<div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
<div class="flex gap-3">
<div class="w-[12rem] shrink-0">
<div class="flex items-center gap-2 mb-2">
<div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
<Icon name="key" class="w-4 h-4 text-[#0033FF]" stroke-width="1.5" />
</div>
<span class="font-bold text-gray-900 text-[1rem]">IDソース</span>
</div>
<div class="text-[#0033FF] font-semibold text-[0.7rem] mb-1">Who Authenticates?</div>
<div class="text-gray-600 text-[0.7rem] leading-relaxed">「あなたは誰か」を検証し、認証情報を保存。</div>
</div>
<div class="flex-1 bg-white rounded-lg p-3 border border-gray-200 relative">
<div class="absolute top-2 right-2 w-2 h-2 bg-[#0033FF] rounded-full"></div>
<div class="font-bold text-gray-900 text-[0.9rem] mb-1">Dify IDソース</div>
<div class="text-gray-500 text-[0.7rem]">認証情報はDifyローカルデータベースに保存。</div>
</div>
<div class="flex-1 bg-white rounded-lg p-3 border border-gray-200 relative">
<div class="absolute top-2 right-2 w-2 h-2 bg-[#0033FF] rounded-full"></div>
<div class="font-bold text-gray-900 text-[0.9rem] mb-1">IDP IDソース</div>
<div class="text-gray-500 text-[0.7rem]">認証情報はIDPにあり、SSO経由でログイン。</div>
</div>
</div>
</div>
</div>`,
    },
    {
      layout: 'diagram',
      slideTitle: 'IDP ID ソースのサポート範囲',
      subtitle: 'SSO プロトコルと IDP',
      slot: `<div class="w-full flex gap-6">
<div class="flex-1">
<div class="flex items-center gap-2 mb-4">
<Icon name="lock" class="w-5 h-5 text-[#0033FF]" stroke-width="1.5" />
<span class="font-bold text-gray-900 text-[1.1rem]">サポートプロトコル</span>
</div>
<div class="flex flex-col gap-3">
<div class="bg-white rounded-xl p-4 border border-gray-200">
<div class="flex items-center justify-between mb-2">
<span class="font-bold text-gray-900 text-[1rem]">SAML 2.0</span>
<span class="bg-green-100 text-green-700 text-[0.65rem] font-bold px-2 py-0.5 rounded">Enterprise</span>
</div>
<div class="text-gray-500 text-[0.8rem]">標準的なエンタープライズ向けID連携プロトコル。</div>
</div>
<div class="bg-white rounded-xl p-4 border border-gray-200">
<div class="flex items-center justify-between mb-2">
<span class="font-bold text-gray-900 text-[1rem]">OIDC</span>
<span class="bg-blue-100 text-blue-700 text-[0.65rem] font-bold px-2 py-0.5 rounded">Modern</span>
</div>
<div class="text-gray-500 text-[0.8rem]">OAuth 2.0ベースの最新認証プロトコル。</div>
</div>
<div class="bg-white rounded-xl p-4 border border-gray-200">
<div class="flex items-center justify-between mb-2">
<span class="font-bold text-gray-900 text-[1rem]">OAuth 2.0</span>
<span class="bg-gray-100 text-gray-600 text-[0.65rem] font-bold px-2 py-0.5 rounded">Basic</span>
</div>
<div class="text-gray-500 text-[0.8rem]">認可後にEmailを一意の識別子として取得。</div>
</div>
</div>
</div>
<div class="flex-1">
<div class="flex items-center gap-2 mb-4">
<Icon name="building" class="w-5 h-5 text-[#0033FF]" stroke-width="1.5" />
<span class="font-bold text-gray-900 text-[1.1rem]">主要なIDP</span>
</div>
<div class="grid grid-cols-2 gap-3 mb-3">
<div class="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-center">
<span class="font-bold text-gray-800 text-[1rem]">Okta</span>
</div>
<div class="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-center">
<span class="font-bold text-gray-800 text-[1rem]">Azure AD</span>
</div>
<div class="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-center">
<span class="font-bold text-gray-800 text-[1rem]">Auth0</span>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 border border-dashed border-gray-300 text-center">
<span class="text-gray-500 text-[0.8rem]">And any standard OIDC / SAML provider...</span>
</div>
</div>
</div>`,
    },
    {
      layout: 'diagram',
      slideTitle: '4 つのアカウント管理モード',
      subtitle: 'SSO で認証を、SCIM でユーザー同期を管理',
      slot: `<div class="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
<div class="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] bg-slate-50 border-b border-gray-200">
<div class="p-3 text-center text-gray-600 font-semibold text-[0.8rem]">モード</div>
<div class="p-3 text-center text-gray-600 font-semibold text-[0.8rem]">SSO / <span class="font-bold">SCIM</span></div>
<div class="p-3 text-center text-gray-600 font-semibold text-[0.8rem]">IDソース</div>
<div class="p-3 text-center text-gray-600 font-semibold text-[0.8rem]">主管理プレーン</div>
<div class="p-3 text-center text-gray-600 font-semibold text-[0.8rem]">代表的なユースケース</div>
</div>
<div class="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] border-b border-gray-100">
<div class="p-3 flex items-center justify-center font-bold text-gray-900 text-[0.85rem]">ローカルアカウントモード</div>
<div class="p-3 flex items-center justify-center gap-1">
<span class="bg-gray-200 text-gray-500 text-[0.65rem] font-bold px-2 py-0.5 rounded">OFF</span>
<span class="bg-gray-200 text-gray-500 text-[0.65rem] font-bold px-2 py-0.5 rounded">OFF</span>
</div>
<div class="p-3 flex items-center justify-center text-[0.85rem]"><span class="text-[#0033FF] font-bold">Dify</span><span class="text-gray-600 ml-1">のみ</span></div>
<div class="p-3 flex items-center justify-center text-[0.85rem]"><span class="text-[#0033FF] font-bold">Dify</span><span class="text-gray-600 ml-1">のみ</span></div>
<div class="p-3 flex items-center justify-center"><span class="bg-gray-100 text-gray-700 text-[0.75rem] font-semibold px-3 py-1 rounded-full">小規模チーム / POC</span></div>
</div>
<div class="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] border-b border-gray-100">
<div class="p-3 flex items-center justify-center font-bold text-gray-900 text-[0.85rem]">IDP 認証 + Dify 管理</div>
<div class="p-3 flex items-center justify-center gap-1">
<span class="bg-green-100 text-green-700 text-[0.65rem] font-bold px-2 py-0.5 rounded">ON</span>
<span class="bg-gray-200 text-gray-500 text-[0.65rem] font-bold px-2 py-0.5 rounded">OFF</span>
</div>
<div class="p-3 flex items-center justify-center text-[0.85rem]"><span class="text-gray-600">Dify +</span><span class="text-[#0033FF] font-bold ml-1">IDP</span></div>
<div class="p-3 flex items-center justify-center text-[0.85rem]"><span class="text-[#0033FF] font-bold">Dify</span><span class="text-gray-600 ml-1">+ IDP</span></div>
<div class="p-3 flex items-center justify-center"><span class="bg-blue-50 text-[#0033FF] text-[0.75rem] font-semibold px-3 py-1 rounded-full">一般的なモード</span></div>
</div>
<div class="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] border-b border-gray-100">
<div class="p-3 flex items-center justify-center font-bold text-gray-900 text-[0.85rem] text-center">ハイブリッドIDソース +<br/>IDP主導</div>
<div class="p-3 flex items-center justify-center gap-1">
<span class="bg-green-100 text-green-700 text-[0.65rem] font-bold px-2 py-0.5 rounded">ON</span>
<span class="bg-green-100 text-green-700 text-[0.65rem] font-bold px-2 py-0.5 rounded">ON</span>
</div>
<div class="p-3 flex items-center justify-center text-[0.85rem]"><span class="text-gray-600">Dify +</span><span class="text-[#0033FF] font-bold ml-1">IDP</span></div>
<div class="p-3 flex items-center justify-center text-[0.85rem]"><span class="text-[#0033FF] font-bold">IDP 主導</span></div>
<div class="p-3 flex items-center justify-center"><span class="bg-gray-100 text-gray-700 text-[0.75rem] font-semibold px-3 py-1 rounded-full">移行過渡期</span></div>
</div>
<div class="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
<div class="p-3 flex items-center justify-center font-bold text-gray-900 text-[0.85rem]">純粋な IDP モード</div>
<div class="p-3 flex items-center justify-center gap-1">
<span class="bg-green-100 text-green-700 text-[0.65rem] font-bold px-2 py-0.5 rounded">ON</span>
<span class="bg-green-100 text-green-700 text-[0.65rem] font-bold px-2 py-0.5 rounded">ON</span>
</div>
<div class="p-3 flex items-center justify-center text-[0.85rem]"><span class="text-[#0033FF] font-bold">IDP</span><span class="text-gray-600 ml-1">のみ</span></div>
<div class="p-3 flex items-center justify-center text-[0.85rem]"><span class="text-[#0033FF] font-bold">IDP</span><span class="text-gray-600 ml-1">のみ</span></div>
<div class="p-3 flex items-center justify-center"><span class="bg-green-50 text-green-700 text-[0.75rem] font-semibold px-3 py-1 rounded-full">エンタープライズ標準</span></div>
</div>
</div>`,
    },
    {
      layout: 'diagram',
      slideTitle: 'IDP ID ソースのサポート範囲',
      subtitle: 'SSO プロトコルと IDP',
      slot: `<div class="w-full flex gap-6">
<div class="flex-1">
<div class="flex items-center gap-2 mb-4">
<Icon name="lock" class="w-5 h-5 text-[#0033FF]" stroke-width="1.5" />
<span class="font-bold text-gray-900 text-[1.1rem]">サポートプロトコル</span>
</div>
<div class="flex flex-col gap-3">
<div class="bg-white rounded-xl p-4 border border-gray-200">
<div class="flex items-center justify-between mb-2">
<span class="font-bold text-gray-900 text-[1rem]">SAML 2.0</span>
<span class="bg-green-100 text-green-700 text-[0.65rem] font-bold px-2 py-0.5 rounded">Enterprise</span>
</div>
<div class="text-gray-500 text-[0.8rem]">標準的なエンタープライズ向けID連携プロトコル。</div>
</div>
<div class="bg-white rounded-xl p-4 border border-gray-200">
<div class="flex items-center justify-between mb-2">
<span class="font-bold text-gray-900 text-[1rem]">OIDC</span>
<span class="bg-blue-100 text-blue-700 text-[0.65rem] font-bold px-2 py-0.5 rounded">Modern</span>
</div>
<div class="text-gray-500 text-[0.8rem]">OAuth 2.0ベースの最新認証プロトコル。</div>
</div>
<div class="bg-white rounded-xl p-4 border border-gray-200">
<div class="flex items-center justify-between mb-2">
<span class="font-bold text-gray-900 text-[1rem]">OAuth 2.0</span>
<span class="bg-gray-100 text-gray-600 text-[0.65rem] font-bold px-2 py-0.5 rounded">Basic</span>
</div>
<div class="text-gray-500 text-[0.8rem]">認可後にEmailを一意の識別子として取得。</div>
</div>
</div>
</div>
<div class="flex-1">
<div class="flex items-center gap-2 mb-4">
<Icon name="building" class="w-5 h-5 text-[#0033FF]" stroke-width="1.5" />
<span class="font-bold text-gray-900 text-[1.1rem]">主要なIDP</span>
</div>
<div class="grid grid-cols-2 gap-3 mb-3">
<div class="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-center">
<span class="font-bold text-gray-800 text-[1rem]">Okta</span>
</div>
<div class="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-center">
<span class="font-bold text-gray-800 text-[1rem]">Azure AD</span>
</div>
<div class="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-center">
<span class="font-bold text-gray-800 text-[1rem]">Auth0</span>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 border border-dashed border-gray-300 text-center">
<span class="text-gray-500 text-[0.8rem]">And any standard OIDC / SAML provider...</span>
</div>
</div>
</div>`,
    },
    {
      layout: 'diagram',
      slideTitle: 'モード 1/ローカルアカウントモード',
      subtitle: 'Mode 1: Local',
      slot: `<div class="w-full flex flex-col items-center">
<div class="bg-[#0033FF] text-white text-[0.8rem] font-bold px-4 py-1.5 rounded-lg mb-6">Mode 1: Local</div>
<div class="flex items-center gap-6 mb-6">
<div class="flex flex-col items-center">
<div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-2">
<Icon name="users" class="w-10 h-10 text-gray-600" stroke-width="1.5" />
</div>
<span class="text-gray-800 font-semibold text-[0.9rem]">User</span>
</div>
<div class="flex items-center">
<div class="w-16 h-0.5 bg-gray-300"></div>
<div class="bg-gray-100 border rounded-lg px-3 py-1.5 text-[0.75rem] text-gray-800 font-mono">Email / Password</div>
<div class="w-16 h-0.5 bg-gray-300 relative">
<div class="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
</div>
</div>
<div class="flex flex-col items-center">
<div class="w-20 h-20 bg-[#0033FF] rounded-xl flex items-center justify-center mb-2">
<Icon name="activity" class="w-10 h-10 text-white" stroke-width="1.5" />
</div>
<span class="text-[#0033FF] font-bold text-[0.9rem]">Dify DB</span>
</div>
</div>
<div class="text-center max-w-lg">
<h3 class="text-gray-900 font-bold text-[1.3rem] mb-3">ローカルアカウントモード</h3>
<p class="text-gray-600 text-[0.9rem] leading-relaxed mb-2">最も基本的なモード。すべてのアカウント情報（メールアドレス、パスワード）は Dify データベースに直接保存されます。</p>
<p class="text-gray-500 text-[0.8rem]">適用対象：POC 検証、個人開発者、IDP を持たない小規模チーム。</p>
</div>
</div>`,
    },
    {
      layout: 'diagram',
      slideTitle: 'モード 2/IDP 認証 + Dify 管理',
      subtitle: 'Mode 2: SSO Only',
      slot: `<div class="w-full flex flex-col items-center">
<div class="bg-[#0033FF] text-white text-[0.8rem] font-bold px-4 py-1.5 rounded-lg mb-6">Mode 2: SSO Only</div>
<div class="flex items-center gap-4 mb-6">
<div class="flex flex-col items-center">
<div class="w-18 h-18 bg-gray-100 rounded-full flex items-center justify-center mb-2 p-4">
<Icon name="users" class="w-9 h-9 text-gray-400" stroke-width="1.5" />
</div>
<span class="text-gray-700 font-semibold text-[0.85rem]">User</span>
</div>
<div class="self-center mb-5">
<Icon name="arrow-right" class="w-5 h-5 text-gray-400" stroke-width="2" />
</div>
<div class="flex flex-col items-center relative">
<div class="absolute -top-1 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 text-[0.6rem] font-bold px-2 py-0.5 rounded whitespace-nowrap">Auth Success</div>
<div class="w-18 h-18 border-2 border-dashed border-blue-300 rounded-xl flex items-center justify-center mb-2 p-4 bg-blue-50">
<Icon name="building" class="w-9 h-9 text-[#0033FF]" stroke-width="1.5" />
</div>
<span class="text-gray-700 font-semibold text-[0.85rem]">IDP (SSO)</span>
</div>
<div class="self-center mb-5 relative">
<span class="absolute -top-4 left-1/2 -translate-x-1/2 text-blue-500 text-[0.7rem] whitespace-nowrap">Token</span>
<Icon name="arrow-right" class="w-5 h-5 text-gray-400" stroke-width="2" />
</div>
<div class="flex flex-col items-center relative">
<div class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[0.5rem] font-bold">!</div>
<div class="w-18 h-18 bg-[#0033FF] rounded-xl flex items-center justify-center mb-2 p-4">
<Icon name="activity" class="w-9 h-9 text-white" stroke-width="1.5" />
</div>
<span class="text-[#0033FF] font-bold text-[0.85rem]">Dify</span>
</div>
</div>
<div class="text-center max-w-xl">
<h3 class="text-gray-900 font-bold text-[1.3rem] mb-3">IDP 認証 + Dify 管理</h3>
<p class="text-gray-600 text-[0.85rem] leading-relaxed mb-2 w-[30rem]"><span class="text-[#0033FF] font-bold">企業で最も一般的なモード。</span>ログインは企業 IDP (Okta/Azure AD) を経由する必要がありますが、Dify 管理者はアカウントの状態（例：退職時の利用停止）を手動で維持する必要があります。</p>
<p class="text-gray-500 text-[0.75rem]">JIT (Just-in-Time) によるアカウントの自動作成をサポート。</p>
</div>
</div>`,
    },
    {
      layout: 'diagram',
      slideTitle: 'モード 3/ハイブリッド ID ソース',
      subtitle: 'Mode 3: Mixed',
      slot: `<div class="w-full flex flex-col items-center">
<div class="bg-[#0033FF] text-white text-[0.8rem] font-bold px-4 py-1.5 rounded-lg mb-6">Mode 3: Mixed</div>
<div class="flex flex-col gap-4 mb-6">
<div class="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-200">
<div class="flex items-center gap-2">
<Icon name="users" class="w-6 h-6 text-gray-600" stroke-width="1.5" />
<span class="text-gray-800 font-semibold text-[0.85rem]">Old Users</span>
</div>
<div class="flex items-center flex-1">
<div class="flex-1 h-px bg-gray-400"></div>
<span class="text-gray-600 text-[0.75rem] px-3">Password</span>
<div class="flex-1 h-px bg-gray-400"></div>
</div>
<div class="w-10 h-10 border border-gray-400 rounded-lg flex items-center justify-center bg-white">
<Icon name="activity" class="w-5 h-5 text-gray-600" stroke-width="1.5" />
</div>
</div>
<div class="flex items-center gap-3 bg-blue-50 rounded-xl p-3 border border-blue-100">
<div class="flex items-center gap-2">
<Icon name="users" class="w-6 h-6 text-[#0033FF]" stroke-width="1.5" />
<span class="text-[#0033FF] font-bold text-[0.85rem]">New Users</span>
</div>
<Icon name="arrow-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
<div class="bg-white border border-[#0033FF] rounded-lg px-4 py-2">
<span class="text-[#0033FF] font-bold text-[0.85rem]">IDP (SSO)</span>
</div>
<Icon name="arrow-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
<div class="w-10 h-10 border-2 border-[#0033FF] rounded-lg flex items-center justify-center bg-white">
<Icon name="activity" class="w-5 h-5 text-[#0033FF]" stroke-width="1.5" />
</div>
</div>
</div>
<div class="text-center max-w-xl">
<h3 class="text-gray-900 font-bold text-[1.3rem] mb-3">ハイブリッドIDソースモード</h3>
<p class="text-gray-600 text-[0.85rem] leading-relaxed mb-2"><span class="text-[#0033FF] font-bold">移行期間のソリューション。</span>ローカルアカウント（旧システム）と IDP アカウント（新システム）の共存を許可します。通常、企業が従来の認証からSSOへ移行する際に使用されます。</p>
</div>
</div>`,
    },
    {
      layout: 'diagram',
      slideTitle: 'モード 4/純粋な IDP モード',
      subtitle: 'Mode 4: Pure IDP (SCIM)',
      slot: `<div class="w-full flex flex-col items-center">
<div class="flex items-center justify-between w-full max-w-lg mb-4">
<div class="bg-green-500 text-white text-[0.8rem] font-bold px-4 py-1.5 rounded-lg">Mode 4: Pure IDP</div>
<div class="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1">
<div class="w-2 h-2 bg-green-500 rounded-full"></div>
<span class="text-green-700 text-[0.75rem] font-semibold">SCIM Sync Active</span>
</div>
</div>
<div class="flex items-center gap-6 mb-6">
<div class="flex flex-col items-center">
<div class="w-24 h-24 border-2 border-green-500 rounded-xl flex items-center justify-center bg-green-50 mb-2">
<Icon name="building" class="w-12 h-12 text-green-600" stroke-width="1.5" />
</div>
<span class="text-gray-900 font-bold text-[0.9rem]">Enterprise IDP</span>
<span class="text-green-600 text-[0.75rem] font-medium">Master of Truth</span>
</div>
<div class="flex flex-col items-center">
<div class="bg-white border border-green-300 rounded-lg px-4 py-2 flex items-center gap-2">
<Icon name="refresh-cw" class="w-4 h-4 text-green-600" stroke-width="2" />
<span class="text-green-700 font-semibold text-[0.8rem]">SCIM Push</span>
</div>
</div>
<div class="flex flex-col items-center">
<div class="w-24 h-24 border border-gray-300 rounded-xl flex items-center justify-center bg-gray-50 mb-2">
<Icon name="activity" class="w-12 h-12 text-gray-400" stroke-width="1.5" />
</div>
<span class="text-gray-700 font-bold text-[0.9rem]">Dify (Read-only)</span>
<span class="text-gray-400 text-[0.75rem]">Mirror DB</span>
</div>
</div>
<div class="text-center max-w-xl">
<h3 class="text-gray-900 font-bold text-[1.3rem] mb-3">純粋な IDP モード (SCIM)</h3>
<p class="text-gray-600 text-[0.85rem] leading-relaxed"><span class="text-green-600 font-bold">エンタープライズ推奨。</span>Dify は読み取り専用のミラーになります。アカウントの作成・更新・削除は SCIM で IDP から自動同期されるため、管理者の手動作業が不要です。</p>
</div>
</div>`,
    },
    {
      layout: 'diagram',
      slideTitle: 'System User (EE 管理パネルユーザー)',
      subtitle: '誰が Enterprise Dashboard にアクセスできますか?',
      slot: `<div class="w-full flex gap-6">
<div class="w-1/3">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-[#0033FF] rounded-xl flex items-center justify-center">
<Icon name="settings" class="w-6 h-6 text-white" stroke-width="1.5" />
</div>
<div>
<div class="text-gray-900 font-bold text-[1.1rem]">System User</div>
<div class="text-gray-500 text-[0.75rem]">Enterprise 管理者</div>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 space-y-1">
<div class="flex items-center justify-between p-2 bg-white rounded-lg border-l-4 border-[#0033FF]">
<span class="text-[#0033FF] font-semibold text-[0.8rem]">管理プレーン</span>
<Icon name="chevron-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
</div>
<div class="p-2 text-gray-600 text-[0.8rem]">IDソース (Identity Source)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">管理モード (Management Mode)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">アカウント管理</div>
<div class="p-2 text-gray-600 text-[0.8rem]">パスワードポリシー</div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<div class="w-6 h-0.5 bg-[#0033FF]"></div>
<span class="text-gray-500 text-[0.75rem]">管理プレーン (Control Panel)</span>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 class="text-gray-900 font-bold text-[1.5rem] mb-3">Dify EE 管理パネル</h3>
<p class="text-gray-600 text-[0.9rem] mb-4">Enterprise Dashboard で統一管理</p>
<div class="grid grid-cols-2 gap-3">
<div class="flex items-center gap-2 bg-blue-50 rounded-lg p-2">
<Icon name="shield" class="w-4 h-4 text-[#0033FF]" stroke-width="1.5" />
<span class="text-[0.75rem] text-gray-700">SSO / SCIM 設定</span>
</div>
<div class="flex items-center gap-2 bg-blue-50 rounded-lg p-2">
<Icon name="users" class="w-4 h-4 text-[#0033FF]" stroke-width="1.5" />
<span class="text-[0.75rem] text-gray-700">全メンバー管理</span>
</div>
<div class="flex items-center gap-2 bg-blue-50 rounded-lg p-2">
<Icon name="layers" class="w-4 h-4 text-[#0033FF]" stroke-width="1.5" />
<span class="text-[0.75rem] text-gray-700">Workspace 管理</span>
</div>
<div class="flex items-center gap-2 bg-blue-50 rounded-lg p-2">
<Icon name="plug" class="w-4 h-4 text-[#0033FF]" stroke-width="1.5" />
<span class="text-[0.75rem] text-gray-700">プラグイン管理</span>
</div>
</div>
</div>
</div>
</div>`,
    },
    // System User - IDソース
    {
      layout: 'diagram',
      slideTitle: 'System User (EE 管理パネルユーザー)',
      subtitle: '誰が Enterprise Dashboard にアクセスできますか?',
      slot: `<div class="w-full flex gap-6">
<div class="w-1/3">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-[#0033FF] rounded-xl flex items-center justify-center">
<Icon name="settings" class="w-6 h-6 text-white" stroke-width="1.5" />
</div>
<div>
<div class="text-gray-900 font-bold text-[1.1rem]">System User</div>
<div class="text-gray-500 text-[0.75rem]">Enterprise 管理者</div>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 space-y-1">
<div class="p-2 text-gray-600 text-[0.8rem]">管理プレーン (Control Panel)</div>
<div class="flex items-center justify-between p-2 bg-white rounded-lg border-l-4 border-[#0033FF]">
<span class="text-[#0033FF] font-semibold text-[0.8rem]">IDソース</span>
<Icon name="chevron-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
</div>
<div class="p-2 text-gray-600 text-[0.8rem]">管理モード (Management Mode)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">アカウント管理</div>
<div class="p-2 text-gray-600 text-[0.8rem]">パスワードポリシー</div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<div class="w-6 h-0.5 bg-[#0033FF]"></div>
<span class="text-gray-500 text-[0.75rem]">IDソース (Identity Source)</span>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 class="text-gray-900 font-bold text-[1.5rem] mb-4">Dify IDソース / IDP IDソース</h3>
<div class="space-y-3">
<div class="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
<div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
<Icon name="database" class="w-4 h-4 text-[#0033FF]" stroke-width="1.5" />
</div>
<div>
<div class="font-semibold text-gray-900 text-[0.9rem]">Dify IDソース</div>
<div class="text-gray-500 text-[0.75rem]">Email + Password でローカル認証</div>
</div>
</div>
<div class="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
<div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
<Icon name="building" class="w-4 h-4 text-green-600" stroke-width="1.5" />
</div>
<div>
<div class="font-semibold text-gray-900 text-[0.9rem]">IDP IDソース</div>
<div class="text-gray-500 text-[0.75rem]">SSO (SAML/OIDC/OAuth) で外部認証</div>
</div>
</div>
</div>
</div>
</div>
</div>`,
    },
    // System User - 管理モード
    {
      layout: 'diagram',
      slideTitle: 'System User (EE 管理パネルユーザー)',
      subtitle: '誰が Enterprise Dashboard にアクセスできますか?',
      slot: `<div class="w-full flex gap-6">
<div class="w-1/3">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-[#0033FF] rounded-xl flex items-center justify-center">
<Icon name="settings" class="w-6 h-6 text-white" stroke-width="1.5" />
</div>
<div>
<div class="text-gray-900 font-bold text-[1.1rem]">System User</div>
<div class="text-gray-500 text-[0.75rem]">Enterprise 管理者</div>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 space-y-1">
<div class="p-2 text-gray-600 text-[0.8rem]">管理プレーン (Control Panel)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">IDソース (Identity Source)</div>
<div class="flex items-center justify-between p-2 bg-white rounded-lg border-l-4 border-[#0033FF]">
<span class="text-[#0033FF] font-semibold text-[0.8rem]">管理モード</span>
<Icon name="chevron-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
</div>
<div class="p-2 text-gray-600 text-[0.8rem]">アカウント管理</div>
<div class="p-2 text-gray-600 text-[0.8rem]">パスワードポリシー</div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<div class="w-6 h-0.5 bg-[#0033FF]"></div>
<span class="text-gray-500 text-[0.75rem]">管理モード (Management Mode)</span>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 class="text-gray-900 font-bold text-[1.5rem] mb-4">4つのアカウント管理モード</h3>
<div class="grid grid-cols-2 gap-2">
<div class="p-2 bg-slate-50 rounded-lg">
<div class="font-semibold text-gray-900 text-[0.8rem]">Mode 1: Local</div>
<div class="text-gray-500 text-[0.65rem]">ローカルアカウントのみ</div>
</div>
<div class="p-2 bg-blue-50 rounded-lg border border-blue-200">
<div class="font-semibold text-[#0033FF] text-[0.8rem]">Mode 2: SSO Only</div>
<div class="text-gray-500 text-[0.65rem]">IDP認証 + Dify管理（推奨）</div>
</div>
<div class="p-2 bg-slate-50 rounded-lg">
<div class="font-semibold text-gray-900 text-[0.8rem]">Mode 3: Mixed</div>
<div class="text-gray-500 text-[0.65rem]">ハイブリッド（移行期間）</div>
</div>
<div class="p-2 bg-green-50 rounded-lg border border-green-200">
<div class="font-semibold text-green-700 text-[0.8rem]">Mode 4: Pure IDP</div>
<div class="text-gray-500 text-[0.65rem]">SCIM完全同期（最高セキュリティ）</div>
</div>
</div>
</div>
</div>
</div>`,
    },
    // System User - アカウント管理
    {
      layout: 'diagram',
      slideTitle: 'System User (EE 管理パネルユーザー)',
      subtitle: '誰が Enterprise Dashboard にアクセスできますか?',
      slot: `<div class="w-full flex gap-6">
<div class="w-1/3">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-[#0033FF] rounded-xl flex items-center justify-center">
<Icon name="settings" class="w-6 h-6 text-white" stroke-width="1.5" />
</div>
<div>
<div class="text-gray-900 font-bold text-[1.1rem]">System User</div>
<div class="text-gray-500 text-[0.75rem]">Enterprise 管理者</div>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 space-y-1">
<div class="p-2 text-gray-600 text-[0.8rem]">管理プレーン (Control Panel)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">IDソース (Identity Source)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">管理モード (Management Mode)</div>
<div class="flex items-center justify-between p-2 bg-white rounded-lg border-l-4 border-[#0033FF]">
<span class="text-[#0033FF] font-semibold text-[0.8rem]">アカウント管理</span>
<Icon name="chevron-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
</div>
<div class="p-2 text-gray-600 text-[0.8rem]">パスワードポリシー</div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<div class="w-6 h-0.5 bg-[#0033FF]"></div>
<span class="text-gray-500 text-[0.75rem]">アカウント管理 (Account Management)</span>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 class="text-gray-900 font-bold text-[1.5rem] mb-4">CRUD & 状態管理</h3>
<div class="space-y-3">
<div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
<Icon name="user" class="w-5 h-5 text-[#0033FF]" stroke-width="1.5" />
<div>
<span class="font-semibold text-gray-900 text-[0.85rem]">基本情報</span>
<span class="text-gray-500 text-[0.8rem] ml-2">メール、氏名、所属</span>
</div>
</div>
<div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
<Icon name="toggle-left" class="w-5 h-5 text-green-600" stroke-width="1.5" />
<div>
<span class="font-semibold text-gray-900 text-[0.85rem]">状態管理</span>
<span class="text-gray-500 text-[0.8rem] ml-2">Active / Banned / Pending</span>
</div>
</div>
<div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
<Icon name="refresh-cw" class="w-5 h-5 text-orange-500" stroke-width="1.5" />
<div>
<span class="font-semibold text-gray-900 text-[0.85rem]">セキュリティ操作</span>
<span class="text-gray-500 text-[0.8rem] ml-2">パスワードリセット、強制ログアウト</span>
</div>
</div>
</div>
</div>
</div>
</div>`,
    },
    // System User - パスワードポリシー
    {
      layout: 'diagram',
      slideTitle: 'System User (EE 管理パネルユーザー)',
      subtitle: '誰が Enterprise Dashboard にアクセスできますか?',
      slot: `<div class="w-full flex gap-6">
<div class="w-1/3">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-[#0033FF] rounded-xl flex items-center justify-center">
<Icon name="settings" class="w-6 h-6 text-white" stroke-width="1.5" />
</div>
<div>
<div class="text-gray-900 font-bold text-[1.1rem]">System User</div>
<div class="text-gray-500 text-[0.75rem]">Enterprise 管理者</div>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 space-y-1">
<div class="p-2 text-gray-600 text-[0.8rem]">管理プレーン (Control Panel)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">IDソース (Identity Source)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">管理モード (Management Mode)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">アカウント管理</div>
<div class="flex items-center justify-between p-2 bg-white rounded-lg border-l-4 border-[#0033FF]">
<span class="text-[#0033FF] font-semibold text-[0.8rem]">パスワードポリシー</span>
<Icon name="chevron-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
</div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<div class="w-6 h-0.5 bg-[#0033FF]"></div>
<span class="text-gray-500 text-[0.75rem]">パスワードポリシー (Password Policy)</span>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 class="text-gray-900 font-bold text-[1.5rem] mb-4">セキュリティ設定</h3>
<div class="space-y-3">
<div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
<Icon name="shield" class="w-5 h-5 text-[#0033FF]" stroke-width="1.5" />
<div>
<span class="font-semibold text-gray-900 text-[0.85rem]">2FA (二要素認証)</span>
<span class="text-gray-500 text-[0.8rem] ml-2">TOTP / Email OTP</span>
</div>
</div>
<div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
<Icon name="lock" class="w-5 h-5 text-green-600" stroke-width="1.5" />
<div>
<span class="font-semibold text-gray-900 text-[0.85rem]">パスワード強度</span>
<span class="text-gray-500 text-[0.8rem] ml-2">最小文字数、複雑性要件</span>
</div>
</div>
<div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
<Icon name="clock" class="w-5 h-5 text-orange-500" stroke-width="1.5" />
<div>
<span class="font-semibold text-gray-900 text-[0.85rem]">有効期限設定</span>
<span class="text-gray-500 text-[0.8rem] ml-2">パスワード有効期間、履歴制限</span>
</div>
</div>
</div>
</div>
</div>
</div>`,
    },
    // Members - 管理プレーン
    {
      layout: 'diagram',
      slideTitle: 'Members (EE ワークスペースユーザー)',
      subtitle: '誰が Workspace にアクセスできますか?',
      slot: `<div class="w-full flex gap-6">
<div class="w-1/3">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-[#0033FF] rounded-xl flex items-center justify-center">
<Icon name="users" class="w-6 h-6 text-white" stroke-width="1.5" />
</div>
<div>
<div class="text-gray-900 font-bold text-[1.1rem]">Members</div>
<div class="text-gray-500 text-[0.75rem]">Workspace メンバー</div>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 space-y-1">
<div class="flex items-center justify-between p-2 bg-white rounded-lg border-l-4 border-[#0033FF]">
<span class="text-[#0033FF] font-semibold text-[0.8rem]">管理プレーン</span>
<Icon name="chevron-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
</div>
<div class="p-2 text-gray-600 text-[0.8rem]">IDソース (Identity Source)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">管理モード (Management Mode)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">アカウント管理</div>
<div class="p-2 text-gray-600 text-[0.8rem]">パスワードポリシー</div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<div class="w-6 h-0.5 bg-[#0033FF]"></div>
<span class="text-gray-500 text-[0.75rem]">管理プレーン (Control Panel)</span>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 class="text-gray-900 font-bold text-[1.4rem] mb-4">Dify EE 管理パネル / IDP 管理プレーン</h3>
<div class="space-y-3">
<div class="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
<div class="w-8 h-8 bg-[#0033FF] rounded-lg flex items-center justify-center shrink-0">
<Icon name="activity" class="w-4 h-4 text-white" stroke-width="1.5" />
</div>
<div>
<div class="font-semibold text-gray-900 text-[0.9rem]">ローカル / モード2</div>
<div class="text-gray-500 text-[0.75rem]">Dify EE 管理パネルで管理</div>
</div>
</div>
<div class="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
<div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
<Icon name="building" class="w-4 h-4 text-white" stroke-width="1.5" />
</div>
<div>
<div class="font-semibold text-gray-900 text-[0.9rem]">モード3 / 4</div>
<div class="text-gray-500 text-[0.75rem]">IDP 管理プレーンで管理</div>
</div>
</div>
</div>
</div>
</div>
</div>`,
    },
    // Members - IDソース
    {
      layout: 'diagram',
      slideTitle: 'Members (EE ワークスペースユーザー)',
      subtitle: '誰が Workspace にアクセスできますか?',
      slot: `<div class="w-full flex gap-6">
<div class="w-1/3">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-[#0033FF] rounded-xl flex items-center justify-center">
<Icon name="users" class="w-6 h-6 text-white" stroke-width="1.5" />
</div>
<div>
<div class="text-gray-900 font-bold text-[1.1rem]">Members</div>
<div class="text-gray-500 text-[0.75rem]">Workspace メンバー</div>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 space-y-1">
<div class="p-2 text-gray-600 text-[0.8rem]">管理プレーン (Control Panel)</div>
<div class="flex items-center justify-between p-2 bg-white rounded-lg border-l-4 border-[#0033FF]">
<span class="text-[#0033FF] font-semibold text-[0.8rem]">IDソース</span>
<Icon name="chevron-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
</div>
<div class="p-2 text-gray-600 text-[0.8rem]">管理モード (Management Mode)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">アカウント管理</div>
<div class="p-2 text-gray-600 text-[0.8rem]">パスワードポリシー</div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<div class="w-6 h-0.5 bg-[#0033FF]"></div>
<span class="text-gray-500 text-[0.75rem]">IDソース (Identity Source)</span>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 class="text-gray-900 font-bold text-[1.5rem] mb-4">Dify IDソース / IDP IDソース</h3>
<div class="space-y-3">
<div class="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
<div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
<Icon name="database" class="w-4 h-4 text-[#0033FF]" stroke-width="1.5" />
</div>
<div>
<div class="font-semibold text-gray-900 text-[0.9rem]">Dify IDソース</div>
<div class="text-gray-500 text-[0.75rem]">Email + Password でローカル認証</div>
</div>
</div>
<div class="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
<div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
<Icon name="building" class="w-4 h-4 text-green-600" stroke-width="1.5" />
</div>
<div>
<div class="font-semibold text-gray-900 text-[0.9rem]">IDP IDソース</div>
<div class="text-gray-500 text-[0.75rem]">SSO (SAML/OIDC/OAuth) で外部認証</div>
</div>
</div>
</div>
</div>
</div>
</div>`,
    },
    // Members - 管理モード
    {
      layout: 'diagram',
      slideTitle: 'Members (EE ワークスペースユーザー)',
      subtitle: '誰が Workspace にアクセスできますか?',
      slot: `<div class="w-full flex gap-6">
<div class="w-1/3">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-[#0033FF] rounded-xl flex items-center justify-center">
<Icon name="users" class="w-6 h-6 text-white" stroke-width="1.5" />
</div>
<div>
<div class="text-gray-900 font-bold text-[1.1rem]">Members</div>
<div class="text-gray-500 text-[0.75rem]">Workspace メンバー</div>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 space-y-1">
<div class="p-2 text-gray-600 text-[0.8rem]">管理プレーン (Control Panel)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">IDソース (Identity Source)</div>
<div class="flex items-center justify-between p-2 bg-white rounded-lg border-l-4 border-[#0033FF]">
<span class="text-[#0033FF] font-semibold text-[0.8rem]">管理モード</span>
<Icon name="chevron-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
</div>
<div class="p-2 text-gray-600 text-[0.8rem]">アカウント管理</div>
<div class="p-2 text-gray-600 text-[0.8rem]">パスワードポリシー</div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<div class="w-6 h-0.5 bg-[#0033FF]"></div>
<span class="text-gray-500 text-[0.75rem]">管理モード (Management Mode)</span>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 class="text-gray-900 font-bold text-[1.5rem] mb-4">4つのアカウント管理モード</h3>
<div class="space-y-2">
<div class="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
<span class="text-[0.7rem] font-bold text-gray-500 w-16">モード1</span>
<span class="text-[0.8rem] text-gray-700">ローカルアカウントモード</span>
</div>
<div class="flex items-center gap-3 p-2 bg-blue-50 rounded-lg border border-blue-200">
<span class="text-[0.7rem] font-bold text-[#0033FF] w-16">モード2</span>
<span class="text-[0.8rem] text-gray-700">IDP 認証 + Dify 管理</span>
</div>
<div class="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
<span class="text-[0.7rem] font-bold text-gray-500 w-16">モード3</span>
<span class="text-[0.8rem] text-gray-700">ハイブリッド ID ソース + IDP 主導</span>
</div>
<div class="flex items-center gap-3 p-2 bg-green-50 rounded-lg border border-green-200">
<span class="text-[0.7rem] font-bold text-green-600 w-16">モード4</span>
<span class="text-[0.8rem] text-gray-700">純粋な IDP モード</span>
</div>
</div>
</div>
</div>
</div>`,
    },
    // Members - アカウント管理
    {
      layout: 'diagram',
      slideTitle: 'Members (EE ワークスペースユーザー)',
      subtitle: '誰が Workspace にアクセスできますか?',
      slot: `<div class="w-full flex gap-6">
<div class="w-1/3">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-[#0033FF] rounded-xl flex items-center justify-center">
<Icon name="users" class="w-6 h-6 text-white" stroke-width="1.5" />
</div>
<div>
<div class="text-gray-900 font-bold text-[1.1rem]">Members</div>
<div class="text-gray-500 text-[0.75rem]">Workspace メンバー</div>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 space-y-1">
<div class="p-2 text-gray-600 text-[0.8rem]">管理プレーン (Control Panel)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">IDソース (Identity Source)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">管理モード (Management Mode)</div>
<div class="flex items-center justify-between p-2 bg-white rounded-lg border-l-4 border-[#0033FF]">
<span class="text-[#0033FF] font-semibold text-[0.8rem]">アカウント管理</span>
<Icon name="chevron-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
</div>
<div class="p-2 text-gray-600 text-[0.8rem]">パスワードポリシー</div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<div class="w-6 h-0.5 bg-[#0033FF]"></div>
<span class="text-gray-500 text-[0.75rem]">アカウント管理 (Account Management)</span>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 class="text-gray-900 font-bold text-[1.3rem] mb-4">CRUD (作成/読取/更新/削除) & SCIM同期</h3>
<div class="space-y-3">
<div class="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
<Icon name="activity" class="w-5 h-5 text-[#0033FF] shrink-0 mt-0.5" stroke-width="1.5" />
<div>
<div class="font-semibold text-gray-900 text-[0.85rem]">Dify 管理プレーン</div>
<div class="text-gray-500 text-[0.75rem]">メール、氏名、状態、パスワードリセット</div>
</div>
</div>
<div class="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
<Icon name="building" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" stroke-width="1.5" />
<div>
<div class="font-semibold text-gray-900 text-[0.85rem]">IDP 管理プレーン</div>
<div class="text-gray-500 text-[0.75rem]">企業 IDP による完全管理 (SCIM)</div>
</div>
</div>
</div>
</div>
</div>
</div>`,
    },
    // Members - パスワードポリシー
    {
      layout: 'diagram',
      slideTitle: 'Members (EE ワークスペースユーザー)',
      subtitle: '誰が Workspace にアクセスできますか?',
      slot: `<div class="w-full flex gap-6">
<div class="w-1/3">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-[#0033FF] rounded-xl flex items-center justify-center">
<Icon name="users" class="w-6 h-6 text-white" stroke-width="1.5" />
</div>
<div>
<div class="text-gray-900 font-bold text-[1.1rem]">Members</div>
<div class="text-gray-500 text-[0.75rem]">Workspace メンバー</div>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 space-y-1">
<div class="p-2 text-gray-600 text-[0.8rem]">管理プレーン (Control Panel)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">IDソース (Identity Source)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">管理モード (Management Mode)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">アカウント管理</div>
<div class="flex items-center justify-between p-2 bg-white rounded-lg border-l-4 border-[#0033FF]">
<span class="text-[#0033FF] font-semibold text-[0.8rem]">パスワードポリシー</span>
<Icon name="chevron-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
</div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<div class="w-6 h-0.5 bg-[#0033FF]"></div>
<span class="text-gray-500 text-[0.75rem]">パスワードポリシー (Password Policy)</span>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 class="text-gray-900 font-bold text-[1.5rem] mb-4">Dify セキュリティポリシー</h3>
<div class="space-y-3">
<div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
<Icon name="shield" class="w-5 h-5 text-[#0033FF]" stroke-width="1.5" />
<div>
<span class="font-semibold text-gray-900 text-[0.85rem]">パスワード強度チェック</span>
<span class="text-gray-500 text-[0.8rem] ml-2">最小文字数、複雑性要件</span>
</div>
</div>
<div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
<Icon name="clock" class="w-5 h-5 text-orange-500" stroke-width="1.5" />
<div>
<span class="font-semibold text-gray-900 text-[0.85rem]">パスワード有効期限設定</span>
<span class="text-gray-500 text-[0.8rem] ml-2">定期変更の強制</span>
</div>
</div>
</div>
</div>
</div>
</div>`,
    },
    // Web App End User - 管理プレーン
    {
      layout: 'diagram',
      slideTitle: 'Web App End User (EE 成果物エンドユーザー)',
      subtitle: '外部ビジネスユーザー',
      slot: `<div class="w-full flex gap-6">
<div class="w-1/3">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
<Icon name="globe" class="w-6 h-6 text-white" stroke-width="1.5" />
</div>
<div>
<div class="text-gray-900 font-bold text-[1.1rem]">Web App Users</div>
<div class="text-gray-500 text-[0.75rem]">誰が WebApp にアクセスしますか?</div>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 space-y-1">
<div class="flex items-center justify-between p-2 bg-white rounded-lg border-l-4 border-[#0033FF]">
<span class="text-[#0033FF] font-semibold text-[0.8rem]">管理プレーン (Control Panel)</span>
<Icon name="chevron-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
</div>
<div class="p-2 text-gray-600 text-[0.8rem]">IDソース (Identity Source)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">アカウント管理モード</div>
<div class="p-2 text-gray-600 text-[0.8rem]">アカウント管理</div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<div class="w-6 h-0.5 bg-[#0033FF]"></div>
<span class="text-gray-500 text-[0.75rem]">管理プレーン (Control Panel)</span>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 class="text-gray-900 font-bold text-[1.4rem] mb-4">Dify EE 管理プレーン / WebApp IDP 管理プレーン</h3>
<div class="space-y-3">
<div class="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
<div class="w-8 h-8 bg-[#0033FF] rounded-lg flex items-center justify-center shrink-0">
<Icon name="layout" class="w-4 h-4 text-white" stroke-width="1.5" />
</div>
<div>
<div class="font-semibold text-gray-900 text-[0.9rem]">Dify EE 管理プレーン</div>
<div class="text-gray-500 text-[0.75rem]">メンバー設定を継承して管理</div>
</div>
</div>
<div class="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
<div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
<Icon name="building" class="w-4 h-4 text-white" stroke-width="1.5" />
</div>
<div>
<div class="font-semibold text-gray-900 text-[0.9rem]">WebApp IDP 管理プレーン</div>
<div class="text-gray-500 text-[0.75rem]">独立した外部 IDP で管理</div>
</div>
</div>
</div>
</div>
</div>
</div>`,
    },
    // Web App End User - IDソース
    {
      layout: 'diagram',
      slideTitle: 'Web App End User (EE 成果物エンドユーザー)',
      subtitle: '外部ビジネスユーザー',
      slot: `<div class="w-full flex gap-6">
<div class="w-1/3">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
<Icon name="globe" class="w-6 h-6 text-white" stroke-width="1.5" />
</div>
<div>
<div class="text-gray-900 font-bold text-[1.1rem]">Web App Users</div>
<div class="text-gray-500 text-[0.75rem]">誰が WebApp にアクセスしますか?</div>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 space-y-1">
<div class="p-2 text-gray-600 text-[0.8rem]">管理プレーン (Control Panel)</div>
<div class="flex items-center justify-between p-2 bg-white rounded-lg border-l-4 border-[#0033FF]">
<span class="text-[#0033FF] font-semibold text-[0.8rem]">IDソース (Identity Source)</span>
<Icon name="chevron-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
</div>
<div class="p-2 text-gray-600 text-[0.8rem]">アカウント管理モード</div>
<div class="p-2 text-gray-600 text-[0.8rem]">アカウント管理</div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<div class="w-6 h-0.5 bg-[#0033FF]"></div>
<span class="text-gray-500 text-[0.75rem]">IDソース (Identity Source)</span>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 class="text-gray-900 font-bold text-[1.4rem] mb-4">メンバー継承 または 独立外部 IDP</h3>
<div class="space-y-3">
<div class="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
<div class="w-8 h-8 bg-[#0033FF] rounded-lg flex items-center justify-center shrink-0">
<Icon name="users" class="w-4 h-4 text-white" stroke-width="1.5" />
</div>
<div>
<div class="font-semibold text-gray-900 text-[0.9rem]">メンバーIDソース継承</div>
<div class="text-gray-500 text-[0.75rem]">ワークスペースメンバーのIDソース設定を継承</div>
</div>
</div>
<div class="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
<div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
<Icon name="key" class="w-4 h-4 text-white" stroke-width="1.5" />
</div>
<div>
<div class="font-semibold text-gray-900 text-[0.9rem]">WebApp IDP IDソース</div>
<div class="text-gray-500 text-[0.75rem]">ワークスペースから独立した外部認証</div>
</div>
</div>
</div>
</div>
</div>
</div>`,
    },
    // Web App End User - アカウント管理モード
    {
      layout: 'diagram',
      slideTitle: 'Web App End User (EE 成果物エンドユーザー)',
      subtitle: '外部ビジネスユーザー',
      slot: `<div class="w-full flex gap-6">
<div class="w-1/3">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
<Icon name="globe" class="w-6 h-6 text-white" stroke-width="1.5" />
</div>
<div>
<div class="text-gray-900 font-bold text-[1.1rem]">Web App Users</div>
<div class="text-gray-500 text-[0.75rem]">誰が WebApp にアクセスしますか?</div>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 space-y-1">
<div class="p-2 text-gray-600 text-[0.8rem]">管理プレーン (Control Panel)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">IDソース (Identity Source)</div>
<div class="flex items-center justify-between p-2 bg-white rounded-lg border-l-4 border-[#0033FF]">
<span class="text-[#0033FF] font-semibold text-[0.8rem]">アカウント管理モード</span>
<Icon name="chevron-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
</div>
<div class="p-2 text-gray-600 text-[0.8rem]">アカウント管理</div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<div class="w-6 h-0.5 bg-[#0033FF]"></div>
<span class="text-gray-500 text-[0.75rem]">アカウント管理モード (Account Mode)</span>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 class="text-gray-900 font-bold text-[1.4rem] mb-4">メンバー継承 / 純粋な IDP モード</h3>
<div class="space-y-3">
<div class="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
<div class="w-8 h-8 bg-[#0033FF] rounded-lg flex items-center justify-center shrink-0">
<Icon name="refresh-cw" class="w-4 h-4 text-white" stroke-width="1.5" />
</div>
<div>
<div class="font-semibold text-gray-900 text-[0.9rem]">メンバーアカウント管理モード継承</div>
<div class="text-gray-500 text-[0.75rem]">ワークスペースの設定をそのまま使用</div>
</div>
</div>
<div class="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
<div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
<Icon name="shield" class="w-4 h-4 text-white" stroke-width="1.5" />
</div>
<div>
<div class="font-semibold text-gray-900 text-[0.9rem]">純粋な IDP モード</div>
<div class="text-gray-500 text-[0.75rem]">WebApp IDP IDソース認証有効</div>
</div>
</div>
</div>
</div>
</div>
</div>`,
    },
    // Web App End User - アカウント管理
    {
      layout: 'diagram',
      slideTitle: 'Web App End User (EE 成果物エンドユーザー)',
      subtitle: '外部ビジネスユーザー',
      slot: `<div class="w-full flex gap-6">
<div class="w-1/3">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
<Icon name="globe" class="w-6 h-6 text-white" stroke-width="1.5" />
</div>
<div>
<div class="text-gray-900 font-bold text-[1.1rem]">Web App Users</div>
<div class="text-gray-500 text-[0.75rem]">誰が WebApp にアクセスしますか?</div>
</div>
</div>
<div class="bg-slate-50 rounded-xl p-3 space-y-1">
<div class="p-2 text-gray-600 text-[0.8rem]">管理プレーン (Control Panel)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">IDソース (Identity Source)</div>
<div class="p-2 text-gray-600 text-[0.8rem]">アカウント管理モード</div>
<div class="flex items-center justify-between p-2 bg-white rounded-lg border-l-4 border-[#0033FF]">
<span class="text-[#0033FF] font-semibold text-[0.8rem]">アカウント管理</span>
<Icon name="chevron-right" class="w-4 h-4 text-[#0033FF]" stroke-width="2" />
</div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<div class="w-6 h-0.5 bg-[#0033FF]"></div>
<span class="text-gray-500 text-[0.75rem]">アカウント管理 (Account Management)</span>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 class="text-gray-900 font-bold text-[1.4rem] mb-4">読み取り専用またはセッションレベル</h3>
<div class="space-y-3">
<div class="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
<div class="w-8 h-8 bg-[#0033FF] rounded-lg flex items-center justify-center shrink-0">
<Icon name="eye" class="w-4 h-4 text-white" stroke-width="1.5" />
</div>
<div>
<div class="font-semibold text-gray-900 text-[0.9rem]">メンバー管理機能継承</div>
<div class="text-gray-500 text-[0.75rem]">読み取り専用でワークスペースの管理機能を使用</div>
</div>
</div>
<div class="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
<div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
<Icon name="building" class="w-4 h-4 text-white" stroke-width="1.5" />
</div>
<div>
<div class="font-semibold text-gray-900 text-[0.9rem]">WebApp 外部 IDP による完全管理</div>
<div class="text-gray-500 text-[0.75rem]">外部 IDP がアカウントのライフサイクルを完全管理</div>
</div>
</div>
</div>
</div>
</div>
</div>`,
    },
    {
      layout: 'macro-focus',
      slideTitle: 'モジュールまとめ：ID とセキュリティ',
      items: [
        '基本構造：3 つのアカウント体系 = 2 つの管理プレーン × 2 つの ID ソース',
        'ユーザー空間の分離：System User (Admin) / Members (Builder) / End User が互いに独立',
        '4 つのモード：Dify ローカルから IDP 完全管理まで、幅広いニーズに対応',
        '連携のポイント：SSO で認証方法を、SCIM でユーザー同期を管理'
      ]
    },
    // TOC: 構築と設計
    {
      layout: 'toc',
      slideTitle: '目次',
      subtitle: 'Part 2: Build with Dify',
      items: [
        { title: 'IAM (IDとアクセス管理)', subtitle: 'Identity & Access Management' },
        { title: '構築、接続、テスト', subtitle: 'Build, Connect & Test', active: true },
        { title: 'コラボレーション、権限、リリース', subtitle: 'Collaboration, Permissions & Release' },
        { title: '運用、コンプライアンス、ブランディング', subtitle: 'Operation, Compliance & Branding' },
      ]
    },
    {
      layout: 'split',
      slideTitle: 'Built-in Templates',
      subtitle: 'すぐに使えるテンプレートライブラリ',
      items: [
        {
          text: '**Built-in Templates**：すぐに使えるテンプレートライブラリで、スムーズにスタートできます',
        },
        {
          text: '**ワンクリックで即活用**：人事、開発、ライティングなど、様々なユースケースに対応したテンプレートを標準搭載',
        }
      ],
      imageUrl: '/assets/image/dify-template.png',
    },
    {
      layout: 'split',
      slideTitle: 'Dify Studio',
      subtitle: 'アプリ作成・オーケストレーションの統合環境',
      items: [
        {
          text: '**Prompt IDE**：視覚的なプロンプト設計・テスト・チューニング用ツール',
        },
        {
          text: '**Visual Orchestration**：複雑なワークフローを視覚的に設計・管理',
        }
      ],
      slot: `<div class="flex flex-col items-center gap-6 py-4">
<div class="bg-[#0033FF] rounded-2xl px-6 py-4 flex items-center gap-4 shadow-lg">
<div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
<Icon name="play" class="w-6 h-6 text-white" stroke-width="2" />
</div>
<div>
<div class="text-white/80 text-[0.85rem] font-medium">Live Demo</div>
<div class="text-white font-bold text-[1.2rem]">Prompt IDE & Orchestration</div>
</div>
</div>
<div class="bg-white rounded-2xl border border-gray-200 px-8 py-6 text-center shadow-sm max-w-md">
<div class="text-[#0033FF] font-bold text-[1.1rem] mb-2">インタラクティブデモ</div>
<div class="text-gray-600 text-[0.9rem] leading-relaxed">上のボタンをクリックしてDify Cloudにアクセスし、プロンプトのデバッグやワークフロー設計を体験できます。</div>
</div>
</div>`,
    },
    {
      layout: 'split',
      slideTitle: 'Knowledge & RAG',
      subtitle: 'ワンストップのナレッジベース管理',
      items: [
        {
          text: '**Knowledge**：ワンストップのナレッジベース管理モジュール',
        },
        {
          text: '**RAG Pipeline**：構造化された知識処理と検索拡張生成（RAG）の設計環境',
        }
      ],
      slot: `<div class="flex flex-col items-center gap-6 py-4">
<img src="/assets/image/dify-knowledge.png" alt="RAG Pipeline" class="w-64 border-gray-200" />
<div class="bg-[#0033FF] rounded-2xl px-6 py-4 flex items-center gap-4 shadow-lg">
<div class="w-4 h-4 rounded-xl flex items-center justify-center">
<Icon name="play" class="w-4 h-4 text-white" stroke-width="2" />
</div>
<div class="text-white font-semibold text-[0.8rem]">Live Demo: RAG Pipeline</div>
</div>
</div>`,
    },
    {
      layout: 'split',
      slideTitle: '接続と統合 - モデル',
      subtitle: 'LLM Provider & Load Balancing',
      items: [
        {
          text: '**LLM Provider (Plugin)**：主要な LLM プロバイダー（OpenAI, Anthropic, Gemini, Llama など）を接続し、切り替え可能',
        },
        {
          text: '**Load Balancing (EE)**：複数モデルインスタンスの負荷分散に対応し、高負荷時の安定性と自動フェイルオーバーを実現',
        }
      ],
      slot: `<div class="flex flex-col items-center gap-6 py-4">
<Icon name="globe" class="w-20 h-20 text-[#0033FF]" stroke-width="2" />
<div class="bg-[#0033FF] rounded-2xl px-6 py-4 flex items-center gap-4 shadow-lg">
<div class="w-4 h-4 rounded-xl flex items-center justify-center">
<Icon name="play" class="w-4 h-4 text-white" stroke-width="2" />
</div>
<div class="text-white font-semibold text-[0.8rem]">Console Platform Apps</div>
</div>
</div>`,
    },
    {
      layout: 'split',
      slideTitle: '接続と統合 - MCP エコシステム',
      subtitle: 'Model Context Protocol',
      textSize: 'large',
      items: [
        {
          text: '**MCP Server**：複雑な設定なしで MCP エコシステムにアクセス可能',
        },
        {
          text: '**Built-in MCP**',
          children: [
            '**As MCP Server**：ワークフローの公開をサポート',
            '**As MCP Client**：外部ツールの接続をサポート',
            '**Plugin MCP**：必要に応じて MCP クライアントまたは MCP サーバーを実装'
          ]
        }
      ],
      slot: `<div class="flex flex-col items-center gap-6 py-4">
<Icon name="workflow" class="w-20 h-20 text-green-600" stroke-width="2" />
<div class="bg-[#0033FF] rounded-2xl px-6 py-4 flex items-center gap-4 shadow-lg">
<div class="w-4 h-4 rounded-xl flex items-center justify-center">
<Icon name="play" class="w-4 h-4 text-white" stroke-width="2" />
</div>
<div class="text-white font-semibold text-[0.8rem]">Live Demo: RAG Pipeline</div>
</div>
</div>`,
    },
    {
      layout: 'diagram',
      slideTitle: '接続と統合 - ツール',
      subtitle: 'Tools',
      slot: `<div class="w-full flex flex-col gap-6">
<div class="grid grid-cols-3 gap-4">
<div class="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center">
<div class="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-3">
<Icon name="plug" class="w-7 h-7 text-green-600" stroke-width="1.5" />
</div>
<div class="font-bold text-gray-900 text-[1.1rem] mb-2">Plugin Tool</div>
<div class="text-gray-500 text-[0.85rem] leading-relaxed">Dify マーケットプレイスネイティブツール<br/>すぐに使用可能、Endpoints 対応</div>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center">
<div class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
<Icon name="workflow" class="w-7 h-7 text-[#0033FF]" stroke-width="1.5" />
</div>
<div class="font-bold text-gray-900 text-[1.1rem] mb-2">Workflow Tool</div>
<div class="text-gray-500 text-[0.85rem] leading-relaxed">カプセル化されたワークフロー<br/>他のエージェントから呼び出し可能</div>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center">
<div class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
<Icon name="network" class="w-7 h-7 text-gray-700" stroke-width="1.5" />
</div>
<div class="font-bold text-gray-900 text-[1.1rem] mb-2">MCP</div>
<div class="text-gray-500 text-[0.85rem] leading-relaxed">Model Context Protocol に基づく<br/>外部エコシステムとの接続</div>
</div>
</div>
<div class="bg-white rounded-xl border border-gray-200 p-4 flex flex-col items-center text-center">
<div class="font-bold text-gray-900 text-[1rem] mb-1">Custom API Tool (Legacy)</div>
<div class="text-gray-500 text-[0.8rem]">OpenAPI/Swagger 標準 API をツールに変換（非推奨、後方互換性あり）</div>
</div>
</div>`,
    },
    {
      layout: 'split',
      slideTitle: '接続と統合 - 拡張',
      subtitle: 'Extensions',
      textSize: 'large',
      items: [
        {
          text: '**Extension Plugin**',
          children: [
            'エンドポイント機能のみを提供する軽量な拡張機能で、HTTP サービスとして実装',
            '**Built-in API Extension (Legacy) (後方互換)**',
            'external_data_tool：外部データツール (Basic App only)',
            'moderation：機密コンテンツ監査'
          ]
        },
      ],
      slot: `<div class="flex flex-col items-center gap-6 py-4">
<img src="/assets/image/dify-extension.png" alt="Extensions" class="w-200 border-gray-200" />
<div class="bg-[#0033FF] rounded-2xl px-6 py-4 flex items-center gap-4 shadow-lg">
<div class="w-4 h-4 rounded-xl flex items-center justify-center">
<Icon name="play" class="w-4 h-4 text-white" stroke-width="2" />
</div>
<div class="text-white font-semibold text-[0.8rem]">Explore Plugins</div>
</div>
</div>`,
    },
    {
      layout: 'split',
      slideTitle: '接続と統合 - データソース',
      subtitle: 'Data Source & Integration',
      textSize: 'large',
      items: [
        {
          text: '**Data Source**',
          children: [
            'ローカルファイル、Web ページ、オンラインドキュメント、クラウドストレージからナレッジデータを取り込み',
            '**External Knowledge Base**：既存システムと連携し、外部ナレッジベースへのアクセスもサポート'
          ]
        },
      ],
      slot: `<div class="flex flex-col items-center gap-6 py-4">
<img src="/assets/image/dify-connect-external-knowledge.png" alt="Extensions" class="w-200 border-gray-200" />
<div class="bg-[#0033FF] rounded-2xl px-6 py-4 flex items-center gap-4 shadow-lg">
<div class="w-4 h-4 rounded-xl flex items-center justify-center">
<Icon name="play" class="w-4 h-4 text-white" stroke-width="2" />
</div>
<div class="text-white font-semibold text-[0.8rem]">Connect Data Sources</div>
</div>
</div>`,
    },
    {
      layout: 'split',
      slideTitle: 'テストとトレーシング - デバッグ',
      subtitle: 'Debugging',
      textSize: 'large',
      items: [
        {
          text: '**Debugging**',
          children: [
            'ノード単位のデバッグとデータフローの可視化で、動作を確認'
          ]
        },
        {
          text: '**Capabilities**',
          children: [
            'ステップ実行 (Run this Step)',
            'プレビュー (Preview)',
            '変数検査 (Variable Inspect)'
          ]
        },
      ],
      slot: `<div class="flex flex-col items-center gap-6 py-4">
<img src="/assets/image/dify-debug.png" alt="Extensions" class="w-200 border-gray-200" />
<div class="bg-[#0033FF] rounded-2xl px-6 py-4 flex items-center gap-4 shadow-lg">
<div class="w-4 h-4 rounded-xl flex items-center justify-center">
<Icon name="play" class="w-4 h-4 text-white" stroke-width="2" />
</div>
<div class="text-white font-semibold text-[0.8rem]">Try Debugging</div>
</div>
</div>`,
    },
    {
      layout: 'split',
      slideTitle: 'テストとトレーシング - ログ',
      subtitle: 'Logs & Annotations',
      textSize: 'large',
      items: [
        {
          text: '**Logs Tracings**',
          children: [
            '開発とトラブルシューティングを支援する統一ログ・アノテーションシステム'
          ]
        },
        {
          text: '**Annotations**',
          children: [
            '対話内容へのアノテーション付けと品質改善をサポート'
          ]
        },
      ],
      slot: `<div class="flex flex-col items-center gap-6 py-4">
<img src="/assets/image/dify-trace.png" alt="Extensions" class="w-200 border-gray-200" />
<div class="bg-[#0033FF] rounded-2xl px-6 py-4 flex items-center gap-4 shadow-lg">
<div class="w-4 h-4 rounded-xl flex items-center justify-center">
<Icon name="play" class="w-4 h-4 text-white" stroke-width="2" />
</div>
<div class="text-white font-semibold text-[0.8rem]">View Logs</div>
</div>
</div>`,
    },
    {
      layout: 'macro-focus',
      slideTitle: 'モジュールまとめ: 構築、接続、テスト',
      items: [
        '**構築 (Build)**: Dify Studio でプロンプトから複雑なワークフローまで視覚的に設計でき、テンプレートを使えばすぐに始められます',
        '**接続 (Connect)**: モデル、ツール、データソース、プラグインを連携し、データ統合を促進',
        '**テスト (Test)**: デバッグ、ログ追跡、アノテーションの一連の機能により、エンタープライズレベルの信頼性を確保'
      ]
    },
    // TOC: コラボレーションと権限
    {
      layout: 'toc',
      slideTitle: '目次',
      subtitle: 'Part 2: Build with Dify',
      items: [
        { title: 'IAM (IDとアクセス管理)', subtitle: 'Identity & Access Management' },
        { title: '構築、接続、テスト', subtitle: 'Build, Connect & Test' },
        { title: 'コラボレーション、権限、リリース', subtitle: 'Collaboration, Permissions & Release', active: true  },
        { title: '運用、コンプライアンス、ブランディング', subtitle: 'Operation, Compliance & Branding' },
      ]
    },
    {
      layout: 'matrix',
      slideTitle: 'コラボレーションと権限 - 基本',
      subtitle: 'App Access & Editing',
      matrixSize: 'medium',
      headers: ['Role', 'Login/Use App', 'Create/Edit App'],
      rows: [
        ['Owner', 'true', 'true'],
        ['Admin', 'true', 'true'],
        ['Editor', 'true', 'true'],
        ['Knw Admin', 'false', 'false'],
        ['Normal', 'true', 'false'],
      ]
    },
    {
      layout: 'matrix',
      slideTitle: 'コラボレーションと権限 - ナレッジベース',
      subtitle: 'Knowledge Base Management',
      matrixSize: 'medium',
      headers: ['Role', 'View/Edit KB', 'Modify KB Perms', 'Delete KB'],
      rows: [
        ['Owner', 'true', 'true', 'true'],
        ['Admin', 'true', 'true', 'true'],
        ['Editor', 'true', 'true', 'true'],
        ['Knw Admin', 'true', 'false', 'false'],
        ['Normal', 'false', 'false', 'false'],
      ]
    },
    {
      layout: 'matrix',
      slideTitle: 'コラボレーションと権限 - チーム管理',
      subtitle: 'Team & Settings',
      matrixSize: 'medium',
      headers: ['Role', 'Model/Agent Config', 'Access API Settings', 'Invite Members', 'Remove Members'],
      rows: [
        ['Owner', 'true', 'true', 'true', 'true'],
        ['Admin', 'true', 'true', 'true', 'false'],
        ['Editor', 'false', 'false', 'false', 'false'],
      ]
    },
    {
      layout: 'pillars',
      slideTitle: 'メンバー割り当て - Cloud Service & Self-host',
      subtitle: 'App Deployment Channels',
      pillarSize: 'small',
      items: [
        {
          title: 'Sandbox / Free',
          description: '1 メンバー',
          features: [
            '1 メンバーまで (Cloud)',
            'シングルワークスペース'
          ],
          icon: 'users',
          color: 'blue',
        },
        {
          title: 'Professional',
          description: '3 メンバー',
          features: [
            '3 メンバーまで (Cloud)',
            'シングルワークスペース'
          ],
          icon: 'star',
          color: 'cyan',
        },
        {
          title: 'Team',
          description: '50 メンバー',
          features: [
            '50 メンバーまで (Cloud)',
            'シングルワークスペース'
          ],
          icon: 'users',
          color: 'indigo',
        },
        {
          title: 'Community',
          description: '無制限',
          features: [
            'メンバー数無制限 (Self-host)',
            'シングルワークスペース'
          ],
          icon: 'workflow',
          color: 'green',
        },
        {
          title: 'Premium',
          description: '無制限',
          features: [
            'メンバー数無制限 (Cloud)',
            'シングルワークスペース'
          ],
          icon: 'cloud',
          color: 'purple',
        },
        {
          title: 'Enterprise',
          description: 'カスタマイズ可',
          features: [
            'ライセンスに基づく',
            '最大：無制限 (Self-host)',
            'マルチワークスペース対応'
          ],
          icon: 'building',
          color: 'red',
          // tags: ['注目']
        }
      ],
    },
    {
      layout: 'cards',
      slideTitle: '公開チャネル',
      subtitle: 'Publish Channels',
      cardSize: 'large',
      items: [
        {
          title: 'Web App',
          description: 'Chat (Chatbot/Agent) & Completion (テキスト生成)',
        },
        {
          title: 'Trigger',
          description: 'イベントトリガー、スケジュール実行',
        },
        {
          title: 'Batch Run',
          description: 'バッチタスクの並列実行 (Workflow)',
        },
        {
          title: 'MCP Server',
          description: '標準 MCP エンドポイントとして公開',
        },
        {
          title: 'Embed',
          description: 'Web サイトへの埋め込み (Website & Share)',
        },
        {
          title: 'BaaS',
          description: 'ホスト型バックエンド API',
        },
      ]
    },
    {
      layout: 'macro-focus',
      slideTitle: 'モジュールのまとめ: コラボレーション、権限、リリース',
      items: [
        '**コラボレーション (Collaborate)**: きめ細かい RBAC 権限設定で、役割ごとの権限を明確に管理',
        '**リリース (Publish)**: Web App、API、MCP など 6 つの公開方法で、幅広い用途に対応',
        '**セキュリティ (Security)**: ナレッジベースとアプリの権限を分離し、重要な資産を保護'
      ],
    },
    // TOC: 運用とコンプライアンス
    {
      layout: 'toc',
      slideTitle: '目次',
      subtitle: 'Part 2: Build with Dify',
      items: [
        { title: 'IAM (IDとアクセス管理)', subtitle: 'Identity & Access Management' },
        { title: '構築、接続、テスト', subtitle: 'Build, Connect & Test' },
        { title: 'コラボレーション、権限、リリース', subtitle: 'Collaboration, Permissions & Release' },
        { title: '運用、コンプライアンス、ブランディング', subtitle: 'Operation, Compliance & Branding', active: true },
      ]
    },
    {
      layout: 'content',
      slideTitle: '運用とコンプライアンス - モニタリング',
      subtitle: 'Monitoring & Alerts',
      items: [
        {
          text: '**グローバル Workspaces 管理**',
          children: [
            '**管理範囲**: システム内のすべてのワークスペースを表示・管理',
            '**操作**: ワークスペースの作成 / 有効化 / 無効化'
          ]
        },
        {
          text: '**メンバー管理**',
          children: [
            'ワークスペースにメンバーを追加（既存メンバーのみ）',
            '役割を割り当て (Owner/Admin/Editor/Normal)'
          ]
        }
      ]
    },
    {
      layout: 'two-column',
      slideTitle: 'グローバルリソースガバナンス',
      subtitle: 'Plugins & Credentials',
      columnRatio: "1:1",
      left: {
        title: '**プラグイン** Plugins',
        items: [
          { text: 'グローバルプラグイン利用可能ソース制御' },
          { text: 'ライフサイクル：インストール、アンインストール、複数バージョン管理' },
          { text: '権限：ワークスペースアクセス管理、カスタムインストール制御' }
        ],
      },
      right: {
        title: '**クレデンシャル** Credentials',
        items: [
          { text: '範囲: ツールプラグイン、モデルプラグイン' },
          { text: '管理：インストール、アンインストール、複数バージョン' },
          { text: '権限: 接続管理、カスタムクレデンシャル制御' }
        ],
      }
    },
    {
      layout: 'content',
      slideTitle: 'Enterprise Admin APIs',
      subtitle: 'Automation',
      items: [
        {
          text: '**Workspaces**: ワークスペースの CRUD (作成/読取/更新/削除)',
        },
        {
          text: '**Members**: メンバーの CRUD (作成/読取/更新/削除)',
        },
        {
          text: '**Workspace Members**: ワークスペース内のメンバーの関連付けと役割を管理',
        },
        {
          text: '**Groups**: ユーザーグループの CRUD (作成/読取/更新/削除)',
        },
        {
          text: '**Group Members**: ユーザーグループメンバー管理',
        },
        {
          text: '社内システムとの連携や運用の自動化に活用',
        }
      ]
    },
    {
      layout: 'diagram',
      slideTitle: '監査ログ (Audit Logs)',
      subtitle: 'Log Coverage & Scope',
      slot: `<div class="flex gap-6 w-full">
<!-- Left: Logged -->
<div class="flex-1 bg-white rounded-xl border border-gray-200 overflow-hidden">
<div class="flex items-center gap-2 px-4 py-3 bg-emerald-50 border-b border-emerald-100">
<svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>
<span class="font-bold text-emerald-700">記録される内容 (Logged)</span>
</div>
<div class="p-4 space-y-4">
<div>
<div class="flex items-center gap-2 mb-1">
<div class="w-2 h-2 rounded-full bg-emerald-500"></div>
<span class="font-bold text-gray-900">バックエンド設定とリソース管理</span>
</div>
<p class="text-gray-600 text-[0.85rem] ml-4">アプリ作成/公開/DSL、API Key、ナレッジベース、メンバーロール調整。</p>
</div>
<div>
<div class="flex items-center gap-2 mb-1">
<div class="w-2 h-2 rounded-full bg-emerald-500"></div>
<span class="font-bold text-gray-900">ID とセキュリティイベント</span>
</div>
<p class="text-gray-600 text-[0.85rem] ml-4">ログイン/ログアウト (パスワード/SSO)、WebApp ログイン、2FA、SCIM 同期。</p>
</div>
<div>
<div class="flex items-center gap-2 mb-1">
<div class="w-2 h-2 rounded-full bg-emerald-500"></div>
<span class="font-bold text-gray-900">監査クエリとアーカイブ</span>
</div>
<p class="text-gray-600 text-[0.85rem] ml-4">管理者のエクスポート操作を記録、オブジェクトストレージへのアーカイブをサポート。</p>
</div>
</div>
</div>
<!-- Right: Not Logged -->
<div class="flex-1 bg-white rounded-xl border border-gray-200 overflow-hidden">
<div class="flex items-center gap-2 px-4 py-3 bg-red-50 border-b border-red-100">
<svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
<span class="font-bold text-red-700">記録されない内容 (Not Logged)</span>
</div>
<div class="p-4 space-y-4">
<div>
<div class="flex items-center gap-2 mb-1">
<div class="w-2 h-2 rounded-full bg-red-500"></div>
<span class="font-bold text-gray-900">リアルタイム Workflow/推論</span>
</div>
<p class="text-gray-600 text-[0.85rem] ml-4">Prompt 内容、モデル出力、変数変化（プライバシー保護）。</p>
</div>
<div>
<div class="flex items-center gap-2 mb-1">
<div class="w-2 h-2 rounded-full bg-red-500"></div>
<span class="font-bold text-gray-900">公開/外部 API トラフィック</span>
</div>
<p class="text-gray-600 text-[0.85rem] ml-4">非 Admin API (例: /v1/workflows/run)。</p>
</div>
<div>
<div class="flex items-center gap-2 mb-1">
<div class="w-2 h-2 rounded-full bg-red-500"></div>
<span class="font-bold text-gray-900">システム内部ジョブ</span>
</div>
<p class="text-gray-600 text-[0.85rem] ml-4">Handler なしのバックエンドインターフェース、デーモン、cron ジョブ、データ同期。</p>
</div>
</div>
</div>
</div>`,
    },
    {
      layout: 'split',
      slideTitle: 'ブランド管理',
      subtitle: 'System Branding',
      items: [
        {
          text: '企業独自のブランドイメージを反映でき、社内の一体感と外部へのプロフェッショナルな印象を高めます。',
        },
        {
          text: '**カスタマイズ可能な項目**：',
          children: [
            '**Logo**：システム左上およびロードページのロゴを差し替え。',
            '**テーマカラー**：システムのメインカラー（ブランドカラー）をカスタマイズ。',
            '**ログインページ**：ログインページの視覚要素をカスタマイズ。'
          ]
        },
      ],
      slot: `<div class="flex flex-col items-center gap-4">
<!-- Cards -->
<div class="flex gap-4">
<!-- Login Page Visual Card -->
<div class="w-44 bg-white rounded-xl border border-gray-200 flex flex-col overflow-hidden">
<div class="bg-gray-50 p-3 flex-1">
<!-- Mini Login Form Mockup -->
<div class="bg-white rounded-lg border border-gray-200 p-3 space-y-2">
<div class="flex items-center gap-1 mb-3">
<div class="w-4 h-4 bg-[#0033FF] rounded"></div>
<div class="w-12 h-2 bg-gray-300 rounded"></div>
</div>
<div class="w-full h-5 bg-gray-100 rounded border border-gray-200"></div>
<div class="w-full h-5 bg-gray-100 rounded border border-gray-200"></div>
<div class="w-full h-5 bg-[#0033FF] rounded"></div>
</div>
</div>
<div class="px-3 py-2 border-t border-gray-100 text-center">
<span class="text-xs text-gray-600 font-medium">ログインページ</span>
</div>
</div>
<!-- Logo & Theme Color Card -->
<div class="w-44 bg-white rounded-xl border border-gray-200 flex flex-col overflow-hidden">
<div class="bg-gray-50 p-3 flex-1">
<!-- Logo & Color Mockup -->
<div class="space-y-3">
<div class="flex items-center gap-2">
<div class="w-8 h-8 bg-[#0033FF] rounded-lg flex items-center justify-center text-white text-xs font-bold">D</div>
<div class="text-sm font-bold text-gray-700">Your Brand</div>
</div>
<div class="flex gap-1">
<div class="w-6 h-6 bg-[#0033FF] rounded"></div>
<div class="w-6 h-6 bg-blue-400 rounded"></div>
<div class="w-6 h-6 bg-blue-200 rounded"></div>
<div class="w-6 h-6 bg-gray-200 rounded"></div>
</div>
</div>
</div>
<div class="px-3 py-2 border-t border-gray-100 text-center">
<span class="text-xs text-gray-600 font-medium">Logo & テーマカラー</span>
</div>
</div>
</div>
<!-- Settings Path -->
<div class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg">
<svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<span class="text-sm text-gray-700">設定パス: <strong>Settings</strong> → <strong>System</strong></span>
</div>
</div>`,
    },
    {
      layout: 'macro-focus',
      slideTitle: 'モジュールまとめ：運用、ガバナンス、ブランディング',
      items: [
        'マルチテナントの一元管理',
        'プラグインやクレデンシャルへのきめ細かいアクセス制御',
        '運用自動化のための豊富な API',
        '包括的な監査ログとブランドカスタマイズ'
      ]
    },
    {
      layout: 'section',
      part: 'Part',
      partNumber: 3,
      slideTitle: 'まとめ',
      subtitle: 'Conclusion',
    },
    {
      layout: 'content',
      slideTitle: 'コア機能の振り返り',
      subtitle: 'Recap',
      items: [
        {
          text: '**Account & Identity**: 多階層 ID と SSO/SCIM',
        },
        {
          text: '**Build & Design**: 可視化オーケストレーションと RAG',
        },
        {
          text: '**Connect & Integrate**: モデル、ツール、MCP エコシステム',
        },
        {
          text: '**Test & Tracing**: デバッグとエンドツーエンドのトレーシング',
        },
        {
          text: '**Publish & Monitor**: マルチチャネル公開と LLMOps',
        },
        {
          text: '**Enterprise Ops**: 監査、コンプライアンス、グローバルガバナンス',
        }
      ]
    },
    {
      layout: 'adaptive-content',
      slideTitle: 'Dify EE 価値主張',
      subtitle: 'Value Proposition',
      slot: `<div class="space-y-8 mt-4">
<!-- 一言でまとめると -->
<div>
<h3 class="text-[1.8rem] font-bold text-[#0033FF] mb-3">一言でまとめると</h3>
<ul class="space-y-2">
<li class="flex items-start gap-2">
<span class="text-[#0033FF] mt-1">•</span>
<span class="text-[1.2rem] text-gray-800">単一のプラットフォームで<strong class="text-[#0033FF]">「設計 → 編成 → デバッグ → リリース → 監視」</strong>を一気通貫。</span>
</li>
</ul>
</div>
<!-- コアバリュー -->
<div>
<h3 class="text-[1.8rem] font-bold text-[#0033FF] mb-3">コアバリュー</h3>
<ul class="space-y-2">
<li class="flex items-start gap-2">
<span class="text-[#0033FF] mt-1">•</span>
<span class="text-[1.2rem] text-gray-800">エンタープライズレベルのID管理、ガバナンスとブランディング機能で <strong class="text-[#0033FF]">Agentic AI</strong> アプリの大規模展開を実現。</span>
</li>
</ul>
</div>
</div>`,
    },
    // End Slide
    {
      layout: 'end',
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
