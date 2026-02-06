import type { Deck } from '../theme-dify/types';

export const deck: Deck = {
  config: {
    title: 'Dify 201B: 並行処理とパフォーマンス',
    theme: '../theme-dify',
    browserExporter: true,
    favicon: '/assets/icon/Dify-if.svg',
    defaults: {
      deckName: 'Dify 201B: 並行処理とパフォーマンス',
      copyright: '© 2026 LangGenius K.K. All rights reserved.',
      authorName: 'Japan FDE Team',
    },
  },
  slides: [
    // Title Slide
    {
      layout: 'title',
      slideTitle: '並行処理とパフォーマンス',
      subtitle: 'Dify エコシステムパートナー トレーニングシリーズ',
      seriesTitle: 'Dify EE 201B',
      label: 'Dify Ecosystem Partner Training',
      teamName: 'Japan FDE Team',
      tagline: 'Infrastructure for Intuitive LLM App Development',
    },
    {
      layout: 'cards',
      slideTitle: 'コースの目的',
      items: [
        {
          title: '並行処理の再考',
          description: 'LLMはレスポンス完了までの時間が長い。従来のWebアプリとは負荷の考え方が違う',
          icon: 'brain',
          color: 'blue'
        },
        {
          title: '主要な指標を知る',
          description: 'スループット、TTFE、Connectionsなど、見るべき数字を押さえる',
          icon: 'bar-chart',
          color: 'purple'
        },
        {
          title: 'チューニングの勘所',
          description: 'Dify EEで実際にどのパラメータをいじるか学ぶ',
          icon: 'settings',
          color: 'green'
        },
      ],
    },
    {
      layout: 'content',
      slideTitle: 'コース概要',
      items: [
        {
          text: '**1. 基礎知識** LLMアプリのパフォーマンスをどう測るか',
          children: [
            '従来のWebとLLMの違い',
            'Little\'s Lawの使い方'
          ]
        },
        {
          text: '**2. チューニング** Dify EEのパラメータ調整',
          children: [
            'APIとDB接続',
            'Sandboxとプラグイン',
            'スケーリング時の注意点'
          ]
        }
      ]
    },
    {
      layout: 'section',
      slideTitle: '第1章：LLMアプリのパフォーマンス指標',
    },
    {
      layout: 'split',
      slideTitle: '1.1 基本の公式',
      subtitle: 'Little\'s Law',
      items: [
        {
          text: '並行数、スループット、レスポンス時間は関係している',
        },
        {
          text: '"**> 並行数 ≈ スループット × レスポンス時間**"',
        },
        {
          text: '**LLMだと何が違う？**',
          children: [
            'レスポンス時間がミリ秒→秒〜分に',
            '同じスループットでも、並行数が跳ね上がる'
          ]
        },
      ],
      slot: `<div class="bg-gray-50 rounded-2xl p-6 w-full max-w-[24rem]">
<!-- Header -->
<div class="text-center mb-4">
<div class="text-gray-400 text-sm font-medium mb-1">Little's Law Origin</div>
<div class="text-gray-800 text-2xl font-bold">Little's Law</div>
</div>
<!-- Formula -->
<div class="flex items-center justify-center gap-3 mb-6">
<!-- L Box -->
<div class="bg-blue-100 rounded-xl px-4 py-4 text-center">
<div class="text-[#0033FF] text-4xl font-bold">L</div>
<div class="text-gray-500 text-[0.8rem] mt-1">並行数</div>
</div>
<!-- = -->
<div class="text-gray-400 text-3xl font-light">=</div>
<!-- λ Box -->
<div class="bg-green-100 rounded-xl px-4 py-4 text-center">
<div class="text-green-600 text-4xl font-bold">λ</div>
<div class="text-gray-500 text-[0.8rem] mt-1">スループット</div>
</div>
<!-- × -->
<div class="text-gray-400 text-3xl font-light">×</div>
<!-- W Box -->
<div class="bg-purple-100 rounded-xl px-4 py-4 text-center">
<div class="text-purple-600 text-4xl font-bold">W</div>
<div class="text-gray-500 text-[0.8rem] mt-1">時間</div>
</div>
</div>
<!-- Footer -->
<div class="text-center" w-full>
<div class="text-gray-600 text-[0.6rem] mb-1">Proposed by <span class="font-bold">John D. C. Little</span>.</div>
<div class="text-gray-500 text-[0.5rem]">"安定したシステムにおいて、平均顧客数 (L) = 到着率 (λ) × 平均滞在時間 (W)"</div>
</div>
</div>`,
    },
    {
      layout: 'matrix',
      slideTitle: '1.2 用語の整理',
      headers: ['指標', 'English', '意味', '注意'],
      rows: [
        ['オンライン人数', 'Online Users', 'ログイン中のユーザー', '❌ 負荷とは限らない'],
        ['同時接続ユーザー', 'Concurrent Users', '操作中のユーザー', '⚠️ 考え中かも'],
        ['リクエスト並行数', 'In-flight Requests', '処理中のリクエスト', '✅ これが本当の負荷'],
        ['スループット', 'Requests/Sec', '1秒あたりのリクエスト数', '⚠️ ストリーミングでは意味が違う'],
      ],
      matrixSize: 'medium',
    },
    {
      layout: 'split',
      slideTitle: '1.3 なぜLLMは負荷が高いのか',
      subtitle: '計算してみよう',
      items: [
        {
          text: '**スループット100を出したいとする**',
        },
        {
          text: '**普通のAPI (0.1秒で返る)**',
          children: [
            '並行数 = 100 × 0.1 = **10**',
            '余裕'
          ],
        },
        {
          text: '**LLMチャット (10秒かかる)**',
          children: [
            '並行数 = 100 × 10 = **1000**',
            '**100倍**の負荷！',
          ],
        },
      ],
      slot: `<div class="w-full max-w-[22rem] space-y-6">
<!-- Traditional Web -->
<div class="flex">
<div class="w-1 bg-[#0033FF] rounded-full mr-4"></div>
<div class="flex-1">
<div class="flex items-center gap-2 mb-2">
<svg class="w-5 h-5 text-[#0033FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>
<span class="text-gray-800 font-bold text-lg">Traditional Web</span>
</div>
<div class="h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
<div class="h-full w-1/6 bg-[#0033FF] rounded-full"></div>
</div>
<div class="text-gray-600 text-sm">短時間接続、リソースの高速解放</div>
</div>
</div>
<!-- LLM Stream -->
<div class="flex">
<div class="w-1 bg-red-400 rounded-full mr-4"></div>
<div class="flex-1">
<div class="flex items-center gap-2 mb-2">
<svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
</svg>
<span class="text-gray-800 font-bold text-lg">LLM Stream</span>
</div>
<div class="h-3 bg-red-100 rounded-full overflow-hidden mb-2 relative">
<div class="h-full w-full bg-red-300 rounded-full"></div>
<span class="absolute inset-0 flex items-center justify-center text-red-600 text-[0.6rem] font-medium">Connection Held...</span>
</div>
<div class="text-gray-600 text-sm">長時間接続、生成終了までリソースを占有</div>
</div>
</div>
</div>`,
    },
    {
      layout: 'cards',
      slideTitle: '1.4 負荷テストの2つのモデル',
      items: [
        {
          title: 'Closed Model (固定ユーザー)',
          description: 'N人のユーザーが繰り返しリクエスト。「同時に何人まで使えるか」を調べるときに使う',
          icon: 'users',
          color: 'blue'
        },
        {
          title: 'Open Model (固定レート)',
          description: '一定のスループットでリクエストを送り続ける。実際のトラフィックに近い',
          icon: 'line-chart',
          color: 'orange'
        },
      ]
    },
    {
      layout: 'content',
      slideTitle: '1.5 Dify EE 主要パフォーマンス指標',
      items: [
        {
          text: 'ベンチマークで見るべき4つの指標',
          children: [
            '1. **Event Throughput**: 1秒あたりに送れるトークン数',
            '2. **Connections**: 今まさに処理中のリクエスト数',
            '3. **TTFE (Time To First Event)**: 最初の1文字が届くまでの時間',
            '4. **Empty Workflow QPS**: LLMを除いたDify自体の処理限界'
          ]
        },
      ]
    },
    {
      layout: 'split',
      slideTitle: '1.6 Event Throughput (events/s)',
      subtitle: '1秒あたりのトークン出力数',
      items: [
        {
          text: '**定義**: ',
          children: [
            '1秒間にクライアントに送れるSSEイベントの数'
          ]
        },
        {
          text: '**ポイント**:',
          children: [
            '1イベント ≒ 1トークン（文字の塊）',
            'クラスタ全体の「出力速度」を表す',
            'ネットワークでいう帯域幅みたいなもの'
          ],
        },
      ],
      terminal: {
        title: 'Event Throughput Example',
        lines: [
          { type: 'output', text: '| Metric | Max | Avg | Min |' },
          { type: 'output', text: '|--------|-----|-----|-----|' },
          { type: 'output', text: '| Events | 200 | 112.54 | 0 |' },
          { type: 'output', text: ' ' },
          { type: 'output', text: '> System output capability' },
        ],
      }
    },
    {
      layout: 'split',
      slideTitle: '1.7 Connections (並行数)',
      subtitle: '今まさに処理中のリクエスト数',
      items: [
        {
          text: '**定義**: ',
          children: [
            '同時に開いているSSE接続の数'
          ]
        },
        {
          text: '**ポイント**:',
          children: [
            'Little\'s Lawの **L** にあたる',
            'メモリ、DB接続、Worker数に直結する',
            '**スケーリングの最重要指標**'
          ],
        },
      ],
      terminal: {
        title: 'Connections Example',
        lines: [
          { type: 'output', text: '| Metric | Value |' },
          { type: 'output', text: '|----------|--------|' },
          { type: 'output', text: '| Max Concurrent | 29 |' },
          { type: 'output', text: '| Avg Active | 18.6 |' },
          { type: 'output', text: ' ' },
          { type: 'output', text: '> Active streaming sessions' },
        ],
      }
    },
    {
      layout: 'split',
      slideTitle: '1.8 TTFE (Time To First Event)',
      subtitle: '最初の1文字が出るまでの時間',
      textSize: 'medium',
      items: [
        {
          text: '**定義**: ',
          children: [
            'リクエスト送信から最初のトークンが届くまでの時間'
          ]
        },
        {
          text: '**なぜ重要？**:',
          children: [
            'ユーザーは「何も出ない画面」に耐えられない',
            '**最初の1文字が早く出れば、体感は良くなる**',
            '全体が遅くても、TTFEが短ければOK',
            '**P95/P99**を見て、詰まっていないかチェック（次スライドで説明）'
          ],
        },
      ],
      slot: `<div class="w-full max-w-[24rem]">
<!-- Vertical Timeline -->
<div class="space-y-1">
<!-- Request -->
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
<svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
</div>
<div class="text-sm font-bold text-gray-700">Request Start</div>
</div>
<!-- TTFE Zone -->
<div class="ml-4 border-l-3 border-dashed border-red-400 pl-2 bg-red-50 rounded-r-lg">
<div class="text-xs font-bold text-red-500">⏱ TTFE (Critical Wait)</div>
<div class="text-[0.65rem] text-red-400 mt-0.5">Network + Queue + Inference</div>
</div>
<!-- First Token -->
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
<svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
</div>
<div class="text-sm font-bold text-green-600">First Token</div>
<div class="text-xs text-green-500 ml-auto">← TTFE終了</div>
</div>
<!-- Stream -->
<div class="ml-4 border-l-2 border-dotted border-gray-300 pl-4 py-1.5">
<div class="text-xs text-gray-600">Streaming... トークン順次到着</div>
</div>
<!-- Done -->
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
<svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
</div>
<div class="text-sm font-bold text-gray-600">Done</div>
</div>
</div>
<!-- Explanation -->
<div class="mt-3 bg-blue-50 rounded-lg px-2 pt-1 border border-blue-200">
<div class="text-xs text-[#0033FF] leading-relaxed">
<p class="font-bold text-[1rem]"><Icon name="line-chart" class="w-4 h-4 text-[#0033FF]" stroke-width="1.5" />なぜこれが「ユーザー体験」を決定するのか？</p>
<p>ユーザーは<span class="text-gray-600 font-medium">Done</span>までの時間は気にしないが、</p>
<p><span class="font-bold text-green-600">First Token</span>までの待機は<span class="font-bold">非常に気にする</span></p>
<p class="font-bold text-red-600 mt-2">⚠ TTFE長い = 停止と誤解 = 離脱</p>
</div>
</div>
</div>`
    },
    {
      layout: 'split',
      slideTitle: '1.9 P95/P99とは',
      subtitle: '平均じゃなくてパーセンタイルを見る',
      items: [
        {
          text: '**P95**: 100回中95回はこの時間以内',
          children: [
            '遅い方の5%を除いた最大値',
          ]
        },
        {
          text: '**P99**: 100回中99回はこの時間以内',
          children: [
            '遅い方の1%を除いた最大値',
          ]
        },
        {
          text: '**なぜ平均じゃダメ？**',
          children: [
            '平均100msでも、1%のユーザーが10秒待ちなら苦情が来る',
            '平均は外れ値に引っ張られて実態が見えない',
          ]
        },
      ],
      slot: `<div class="w-full max-w-[20rem] space-y-4">
<div class="bg-gray-50 rounded-xl p-4">
<div class="text-center text-gray-500 text-xs mb-2">レスポンス時間の分布</div>
<div class="flex items-end justify-center gap-1 h-24">
<div class="w-4 bg-green-400 rounded-t" style="height: 90%"></div>
<div class="w-4 bg-green-400 rounded-t" style="height: 95%"></div>
<div class="w-4 bg-green-400 rounded-t" style="height: 100%"></div>
<div class="w-4 bg-green-400 rounded-t" style="height: 85%"></div>
<div class="w-4 bg-green-400 rounded-t" style="height: 70%"></div>
<div class="w-4 bg-green-400 rounded-t" style="height: 50%"></div>
<div class="w-4 bg-green-300 rounded-t" style="height: 30%"></div>
<div class="w-4 bg-yellow-400 rounded-t" style="height: 20%"></div>
<div class="w-4 bg-orange-400 rounded-t" style="height: 40%"></div>
<div class="w-4 bg-red-500 rounded-t" style="height: 80%"></div>
</div>
<div class="flex justify-between text-[0.6rem] text-gray-500 mt-1">
<span>速い</span>
<span class="text-yellow-600 font-bold">← P95</span>
<span class="text-red-600 font-bold">← P99</span>
</div>
</div>
<div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
<p class="text-blue-800"><span class="font-bold">例:</span> P99が5秒なら、100人中99人は5秒以内。</p>
<p class="text-blue-800">残り1人（=1%）はそれ以上待っている。</p>
</div>
</div>`
    },
    {
      layout: 'split',
      slideTitle: '1.10 Empty Workflow QPS',
      subtitle: 'Dify自体の処理限界',
      textSize: 'medium',
      items: [
        {
          text: '**定義**: ',
          children: [
            'LLMノードなしの空ワークフローで出せる最大QPS'
          ]
        },
        {
          text: '**なぜ重要？**:',
          children: [
            'LLMの遅さを抜きにして、Dify自体の限界がわかる',
            'Python/Flask、DB、Redisの純粋な処理速度',
            '**水の量**ではなく**パイプの太さ**を測る',
          ],
        },
      ],
      slot: `<div class="w-full max-w-[16rem]">
<div class="w-[12rem] h-[18rem] bg-gray-100 items-center justify-center rounded-2xl flex flex-col mx-auto p-4">
<Icon name="gauge" class="w-12 h-12 text-[#0033FF] mb-4" stroke-width="1.5" />
<p class="text-center text-gray-700 font-bold text-[1rem]">Max QPS: 28</p>
<p class="text-center text-gray-500 font-medium text-[0.75rem]">Pure Overhead Benchmark</p>
<p class="text-center text-gray-500 font-medium text-[0.75rem]">(No LLM Latency)</p>
</div>
</div>
`
    },
    {
      layout: 'macro-focus',
      slideTitle: '第1章のまとめ',
      items: [
        'Little\'s Law: レスポンスが長いと、同じスループットでも並行数が跳ね上がる',
        '見るべき指標: Event Throughput（トークン出力速度）とConnections（並行数）',
        'ユーザー体験: TTFEが短ければ、体感は良い',
      ],
    },
    {
      layout: 'section',
      slideTitle: '第2章：Dify EE パラメータチューニング',
    },
    {
      layout: 'cards',
      slideTitle: '2.1 並行処理に影響する4つのポイント',
      cardSize: 'large',
      items: [
        {
          title: 'DB接続',
          description: 'PostgreSQLの接続数は有限。APIとWorkerで取り合いになる',
          icon: 'database',
          color: 'blue'
        },
        {
          title: 'API Workers',
          description: 'Gunicornのプロセス数とコルーチン数で、同時処理数が決まる',
          icon: 'server',
          color: 'purple'
        },
        {
          title: 'Sandbox',
          description: 'コード実行は重い。待ちやタイムアウトが起きやすい',
          icon: 'box',
          color: 'orange'
        },
        {
          title: 'プラグイン',
          description: 'デーモンのプールサイズで並行処理数が決まる',
          icon: 'zap',
          color: 'cyan'
        }
      ]
    },
    {
      layout: 'split',
      slideTitle: '2.2 APIサービス (dify-api)',
      subtitle: 'GunicornとDB接続の設定',
      textSize: 'small',
      items: [
        {
          text: '**主なパラメータ**: ',
          children: [
            '**`serverWorkerAmount`**: Gunicornプロセス数。CPUコア数に合わせる',
            '**`SERVER_WORKER_CONNECTIONS`**: 1プロセスあたりの最大コルーチン数。**300-500**推奨'
          ]
        },
        {
          text: '**DB接続プール**:',
          children: [
            '**`SQLALCHEMY_POOL_SIZE`**: 常時キープする接続数',
            '**`SQLALCHEMY_MAX_OVERFLOW`**: 足りないときに追加で張れる数'
          ],
        },
        {
          text: '**計算式**:',
          children: [
            '**Podあたり = Pool + Overflow**',
            '**合計 = Replicas × (Pool + Overflow)**'
          ],
        },
      ],
      terminal: {
        title: 'values.yaml',
        textSize: 'small',
        lines: [
          { type: 'code', text: 'api:' },
          { type: 'code', text: '  replicas: 10' },
          { type: 'code', text: '  serverWorkerAmount: 1' },
          { type: 'code', text: '  extraEnv:' },
          { type: 'code', text: '    - name: SQLALCHEMY_POOL_SIZE' },
          { type: 'code', text: '      value:"80"' },
          { type: 'code', text: '    - name: SQLALCHEMY_MAX_OVERFLOW' },
          { type: 'code', text: '      value:"80"' },
          { type: 'code', text: '    - name: SERVER_WORKER_CONNECTIONS' },
          { type: 'code', text: '      value:"400"' },
          { type: 'code', text: '  resources:' },
          { type: 'code', text: '  requests:' },
          { type: 'code', text: '  cpu:"1"' },
          { type: 'code', text: '  memory:"1Gi"' },
        ],
      }
    },
    {
      layout: 'content',
      slideTitle: '2.3 DB接続数の計算',
      subtitle: 'DBを詰まらせないために (1/2)',
      size: 'sm',
      items: [
        {
          text: '**基本**：接続プールはプロセスごとに持つ',
        },
        {
          text: '**API (Gunicorn)**：',
          children: [
            '> 接続数 = Replicas × Workers × (Pool + Overflow)'
          ]
        },
        {
          text: '**Worker (Celery)**：',
          children: [
            '> 接続数 = Replicas × (Pool + Overflow)',
            '⚠️ Geventのコルーチン数は関係ない。プロセス内で共有'
          ]
        },
        {
          text: '**Go系 (Plugin/Ent)**：',
          children: [
            '> 接続数 = Replicas × DB_MAX_OPEN_CONNS'
          ]
        },
        {
          text: '**合計**：',
          children: [
            '> Total = API + Worker + Plugin + その他'
          ]
        },
      ]
    },
    {
      layout: 'content',
      slideTitle: '2.3 DB接続数の計算',
      subtitle: '計算例 (2/2)',
      size: 'xs',
      items: [
        {
          text: '**設定値**：',
          children: [
            'Python: `POOL_SIZE=30`, `OVERFLOW=200`',
            'Go (Daemon): `DB_MAX_OPEN_CONNS=30`',
            'Go (Ent等): `DB_MAX_OPEN_CONNS=25`'
          ]
        },
        {
          text: '**計算結果 (合計 3,040)**：',
          children: [
            '**API**: 2 Reps × 4 Workers × 230 = **1,840**',
            '**Worker**: 3 Reps × 230 = **690**',
            '**Plugin Daemon**: 2 Reps × 30 = **60**',
            '**その他**: Beat + Ent + Mgr + Audit等 = **~450**'
          ]
        },
      ]
    },
    {
      layout: 'split',
      slideTitle: '2.4 Sandbox',
      subtitle: '同時実行数の制御',
      textSize: 'small',
      items: [
        {
          text: '**主なパラメータ**: ',
          children: [
            '**`MAX_WORKERS`**: 同時に実行できる数。CPUコア数に合わせる',
            '**`MAX_REQUESTS`**: これを超えると拒否。キュー = Requests - Workers'
          ]
        },
        {
          text: '**Helmデフォルト (Workers=4, Requests=50)**:',
          children: [
            '46リクエストまでキューに入る。1実行5秒なら最大230秒待ち',
            'ユーザーが結果を待っている場面では長すぎるかも'
          ],
        },
        {
          text: '**監視ポイント**:',
          children: [
            '`Queue Depth`: 0以外が続くなら処理能力不足',
            '`503 Error`: 増えたらスケールアウトが必要'
          ],
        },
      ],
      slot: `<div class="w-full max-w-[22rem] space-y-2">
<!-- 推奨: 汎用/CPUバウンド -->
<div class="border-l-3 border-blue-500 bg-blue-50 rounded-r p-1.5">
<div class="flex items-center justify-between mb-1">
<div class="flex items-center gap-1.5">
<Icon name="settings" class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" />
<span class="font-bold text-[0.7rem] text-blue-700">推奨: 汎用/CPUバウンド</span>
</div>
<span class="text-[0.5rem] bg-blue-200 text-blue-700 px-1.5 py-0.5 rounded-full font-bold">Recommended</span>
</div>
<div class="bg-white rounded p-1.5 font-mono text-[0.6rem] text-gray-800 mb-1">
<div>MAX_WORKERS = CPU_CORES</div>
<div>MAX_REQUESTS = 1.5 × WORKERS</div>
</div>
<p class="text-[0.6rem] text-blue-700">少量のキューバッファを許可し、スループットと遅延のバランスを取ります。</p>
</div>

<!-- 低遅延 (Fail Fast) -->
<div class="border-l-3 border-green-500 bg-green-50 rounded-r p-1.5">
<div class="flex items-center justify-between mb-1">
<div class="flex items-center gap-1.5">
<Icon name="zap" class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" stroke-width="2" />
<span class="font-bold text-[0.7rem] text-green-700">低遅延 (Fail Fast)</span>
</div>
<span class="text-[0.5rem] bg-green-200 text-green-700 px-1.5 py-0.5 rounded-full font-bold">User Facing</span>
</div>
<div class="bg-white rounded p-1.5 font-mono text-[0.6rem] text-gray-800 mb-1">
<div>MAX_WORKERS = CPU_CORES</div>
<div>MAX_REQUESTS ≈ WORKERS + (0~2)</div>
</div>
<p class="text-[0.6rem] text-green-700">キューは極めて短い。即座に戻るか503エラー、待機なし。</p>
</div>

<!-- 高スループット (Batch/Async) -->
<div class="border-l-3 border-purple-500 bg-purple-50 rounded-r p-1.5">
<div class="flex items-center justify-between mb-1">
<div class="flex items-center gap-1.5">
<Icon name="layers" class="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" stroke-width="2" />
<span class="font-bold text-[0.7rem] text-purple-700">高スループット (Batch/Async)</span>
</div>
<span class="text-[0.5rem] bg-purple-200 text-purple-700 px-1.5 py-0.5 rounded-full font-bold">Background</span>
</div>
<div class="bg-white rounded p-1.5 font-mono text-[0.6rem] text-gray-800 mb-1">
<div>MAX_WORKERS = CPU_CORES</div>
<div>MAX_REQUESTS = 3~5 × WORKERS</div>
</div>
<p class="text-[0.6rem] text-purple-700">長いキューでピークを平準化。キュー長を監視してスケーリング。</p>
</div>
</div>`
    },
    {
      layout: 'split',
      slideTitle: '2.5 プラグインデーモン',
      subtitle: '本番向け設定',
      textSize: 'small',
      items: [
        {
          text: '**ポイント**: ',
          children: [
            '**I/O待ちが多い**: ゲートウェイなのでコルーチンは多め (`12000`) でOK',
            '**CPU制限**: `GOMAXPROCS` = CPU Limitに合わせて安定させる',
            '**セキュリティ**: リモートインストールは本番では無効に'
          ]
        },
        {
          text: '**設定例**:',
          children: [
            '`replicas: 2` (冗長化)',
            '`limits.cpu: "4"` に合わせて `GOMAXPROCS="4"`',
            '`ROUTINE_POOL_SIZE="12000"`'
          ],
        },
      ],
      terminal: {
        title: 'values.yaml',
        textSize: 'xxs',
        lines: [
          { type: 'code', text: 'plugin_daemon:' },
          { type: 'code', text: '  # 1. HA' },
          { type: 'code', text: '  replicas: 2' },
          { type: 'code', text: '  image:' },
          { type: 'code', text: '    repository: langgenius/dify-plugin-daemon' },
          { type: 'code', text: '    tag: 0.3.3-serverless' },
          { type: 'code', text: '  # 2. Anchor for GOMAXPROCS' },
          { type: 'code', text: '  resources:' },
          { type: 'code', text: '    limits:' },
          { type: 'code', text: '      cpu:"4"' },
          { type: 'code', text: '      memory:"8Gi"' },
          { type: 'code', text: '  # 3. Tuning' },
          { type: 'code', text: '  extraEnv:' },
          { type: 'code', text: '  # High concurrency for I/O wait' },
          { type: 'code', text: '    - name: ROUTINE_POOL_SIZE' },
          { type: 'code', text: '      value:"12000"' },
          { type: 'code', text: '  # Match CPU limit strictly' },
          { type: 'code', text: '    - name: GOMAXPROCS' },
          { type: 'code', text: '      value:"4"' },
          { type: 'code', text: '  # Security' },
          { type: 'code', text: '    - name: PLUGIN_REMOTE_INSTALLING_ENABLED' },
          { type: 'code', text: '      value:"false"' },
        ],
      }
    },
    {
      layout: 'macro-focus',
      slideTitle: 'チューニングまとめ',
      items: [
        'キューに溜めない：詰まるくらいなら早く失敗させる',
        'Worker数 = CPUコア数：Python GILがあるので、これが一番安定',
        'DB接続数は事前計算：スケールアウト時にDBを落とさない',
        '平均じゃなくP99を見る：平均は良くても、遅い1%のユーザーが離脱する'
      ],
    },
    // End Slide
    {
      layout: 'end',
      subtitle: 'インタラクションと質疑応答',
      website: 'https://dify.ai',
      email: 'r.hashimoto@dify.ai',
      github: 'langgenius/dify',
    },
  ],
};
