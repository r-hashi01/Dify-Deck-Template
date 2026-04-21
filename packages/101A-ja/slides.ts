import type { Deck } from './extraTypes';

export const deck: Deck = {
  config: {
    title: 'Dify 101A: 製品価値と位置付け',
    theme: '../theme-dify',
    browserExporter: true,
    favicon: '/assets/icon/Dify-if.svg',
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
      slideTitle: 'Dify 製品価値と <br>導入支援ガイド',
      subtitle: 'Dify エコシステムパートナー トレーニングシリーズ',
      seriesTitle: 'Dify EE 101A',
      label: 'Dify Ecosystem Partner Training',
      teamName: 'Japan FDE Team',
      tagline: 'Infrastructure for Intuitive LLM App Development',
      notes: `
【導入：2分】
皆さん、こんにちは。本日は Dify 101A「製品価値と位置付け」についてお話しします。

このコースは Dify エコシステムパートナー向けのトレーニングシリーズの第1弾です。
約50分で、Dify の価値提案から実際のハンズオンまでを体験していただきます。

**パートナーとしての皆さんへ**
今日お伝えする内容は、お客様への提案時にそのまま使える知識です。
「Dify って何？」「なぜ LangChain や自社開発じゃなくて Dify なの？」
こうした質問に自信を持って答えられるようになることがゴールです。

**市場背景**
生成 AI 市場は急拡大しています。多くの企業が PoC を実施していますが、
「PoC は成功したけど本番化できない」という声をよく聞きます。
Dify はまさにこの「PoC から本番への壁」を解消するプラットフォームです。

この視点を持って、今日のトレーニングを受けていただければと思います。
      `,
    },

    // Course Goals
    {
      layout: 'cards',
      slideTitle: 'コースの目標',
      items: [
        { title: 'ポジショニングと価値', description: 'Dify Enterprise の価値を「技術価値」ではなく「事業価値」で説明し、決裁者と現場の両方に訴求できるようになる', icon: 'Target', color: 'blue' },
        { title: '商談設計と見極め', description: 'Workspace・App・Knowledge Base を軸に、要件ヒアリングからエディション選定、PoC→本番化の提案導線を設計できるようになる', icon: 'Settings', color: 'green' },
        { title: '再現可能なデモ力', description: 'GUI で Agent + Knowledge Base を短時間で構築し、商談の場で価値を証明する再現性の高いデモを実施できるようになる', icon: 'Shield', color: 'purple' },
      ],
      notes: `
【コース目標：3分】
本日のコースでは3つの目標を設定しています。

**1つ目：ポジショニングを「事業言語」で語る**
商談では「RAG が作れる」より「業務KPIが改善する」が重要です。
このコースでは、Dify Enterprise の価値を以下の3軸で説明できる状態を目指します。
- 速度：PoC 立ち上げ〜本番化までの期間短縮
- 品質：可観測性と評価基盤による回答品質の継続改善
- 統制：SSO / 監査ログ / 権限分離によるガバナンス

**2つ目：商談設計とエディション見極め**
単なる機能説明ではなく、要件から最適な提案導線を設計します。
具体的には以下をできるようにします。
- Community / Cloud / Premium / Enterprise の切り分け
- 「いつ Enterprise が必須になるか」の判定
- PoC 契約から本番契約へのアップセル設計

**3つ目：再現可能なデモ運営**
「その場で価値を証明できる」ことが受注率を大きく左右します。
本講座では、10〜15分で実施できる標準デモフローを扱います。
- App 作成
- KB 接続
- トレース確認
- 改善ポイント提案

**補足：101A の役割**
101A は商談前半で勝つための基礎編です。
101B 以降で、実装・運用・高度な導入設計に踏み込みます。
      `,
    },

    // Course Overview
    {
      layout: 'content',
      slideTitle: 'コース概要',
      items: [
        'Part 1：Dify の位置付け - 製品定義、エディション、ライセンス境界',
        'Part 2：なぜ Dify か - PoC 停滞の原因、差別化、Enterprise 訴求',
        'Part 3：どう設計するか - 要件を App・KB・Workspace に落とす3つの問い',
        'Part 4：どう提案するか - デモ導線、公開設計、運用支援メニュー',
        '最後に Q&A - 商談で使う確認項目の整理'
      ],
      notes: `
【コース概要：2分】
全体の流れをご説明します。

**Part 1：Dify の位置付け（約12分）**
製品定義、エディション、ライセンス境界を整理します。
ここで「どこまで Community で行けるか」「どこから Enterprise か」を明確にします。

**Part 2：なぜ Dify か（約15分）**
PoC が止まる理由を顧客課題として言語化し、
Dify がどこで効くのかを商談トークに落とします。

**Part 3：どう設計するか（約10分）**
「①何を作る ②何を参照させる ③どう統制する」の3つの問いで、
お客様要件を Dify の構造にマッピングできる状態を目指します。

**Part 4：どう提案するか（約8分）**
初期導入、本番公開、運用改善までをどう支援メニュー化するかを整理します。
単発デモではなく、継続支援の導線を作るためのパートです。

**最後に Q&A**
疑問点はここで解消してください。
実際の商談で聞かれそうな質問も歓迎です。

では早速 Part 1 に入りましょう。
      `,
    },

    // Section: What is Dify?
    {
      layout: 'section',
      slideTitle: '第1章：What is Dify?',
      notes: `
【セクション移行：1分】
それでは Part 1「What is Dify?」に入ります。

このパートでは、Dify の製品概要、提供形態と契約形態、そしてライセンスの境界について説明します。
パートナーとしてお客様に説明する際の基礎知識となる部分です。

**このパートで身につけること**
- 「Dify とは何か」を30秒で説明できる
- Cloud / Self-host の提供形態と契約形態を説明できる
- ライセンスの境界線（何が可で何が不可か）を正確に伝えられる

特にライセンス部分は、お客様が Community 版で始めて
「このまま商用利用できますか？」と聞いてくるケースが多いです。
正確な知識を持っておきましょう。
      `,
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
      highlights: [
        { icon: 'Workflow', title: 'Workflow 中心設計', subtitle: '可視化・分解・改善', features: ['ブラックボックス解消', '再現性の高い開発'], color: 'blue' },
        { icon: 'Database', title: 'RAG 統合基盤', subtitle: '検索から生成まで一気通貫', features: ['KB連携', '評価しやすい構造'], color: 'green' },
        { icon: 'Rocket', title: 'PoC→本番を短縮', subtitle: 'デモ資産を本番に接続', features: ['立ち上げ高速化', '運用への移行容易'], color: 'purple' },
      ],
      notes: `
【What is Dify?：2.5分】
まず「Dify とは何か」を一言で言うと、
「本番環境対応のオープンソース AI アプリケーション＆エージェントワークフロープラットフォーム」です。

私たちは「LLM 時代のアプリケーション層 OS」と呼んでいます。

**お客様への説明ポイント**
「OS」という表現がキーです。
Windows や macOS がアプリを動かす基盤であるように、
Dify は AI アプリを動かす基盤という位置づけです。

**特徴は3つ：**

**1. ビジュアルな Agentic Workflow**
コードを書かずに、ドラッグ＆ドロップで複雑な AI ロジックを組み立てられます。
→ お客様には「エンジニア以外も参加できる」点を強調してください

**2. RAG・ツール呼び出し・可観測性を統合**
これらを別々のツールで構築する必要がありません。
→ 「LangChain + Pinecone + LangSmith を別々に構築する必要がない」と具体的に

**3.「アイデアから本番運用まで」を高速化**
プロトタイプを作って終わりではなく、そのまま本番環境へ移行できます。
→ 「PoC で作ったものがそのまま本番になる」これが最大の価値です

**よくある質問への回答**
Q：「LangChain と何が違うの？」
A：LangChain はライブラリ、Dify はプラットフォーム。
   LangChain は部品、Dify は完成品を作る工場のようなものです。
   開発者が1から組み上げるか、GUI で組み立てるかの違いです。
      `,
    },

    // Edition Overview
    {
      layout: 'cards',
      slideTitle: '提供形態と契約形態',
      subtitle: '先に Cloud か Self-host かで切り分ける（Cloud = Dify Cloud のみ / Self-host = Community・Premium・Enterprise）',
      items: [
        { title: 'Dify Cloud（Cloud / SaaS）', description: 'SaaS 版。インフラ管理不要で素早く検証したいチーム向け', icon: 'cloud', color: 'blue' },
        { title: 'Community（Self-host / OSS）', description: 'OSS 版。Docker/K8s で顧客環境に自分でセルフホスト、シングルワークスペース構成', icon: 'git-branch', color: 'green' },
        { title: 'Premium（Self-host / OSS・AWS GUI デプロイ）', description: '中身は OSS（Community と同等）。AWS Marketplace から GUI で AWS に直接デプロイできるパッケージ', icon: 'database', color: 'orange' },
        { title: 'Enterprise（Self-host / 年間契約・上位機能）', description: 'Self-host の上位契約。マルチワークスペース、SSO、監査ログ、専用サポート付き', icon: 'building', color: 'black' },
      ],
      notes: `
【提供形態と契約形態：2.5分】
ここは「4つのエディション」と一括で話すより、
まず Cloud と Self-host を分けて説明した方が誤解が少なくなります。

**重要：分類の原則（先に明言する）**
- Cloud = Dify Cloud（SaaS）のみ
- Self-host = Community / Premium / Enterprise の3つすべて
- Premium は AWS Marketplace で発注できるものの、デプロイ先は顧客の AWS アカウント（Self-host）です。この誤解が現場で最も起きやすいため、先に明言してください。
- さらに、**Premium の中身は OSS（Community と同等）**です。「Premium = 有償の上位機能」ではなく、「OSS を AWS に GUI でデプロイできるパッケージ」と位置づけてください。上位機能は Enterprise 契約で提供されます。

重要なのは「現在の要件」と「6か月後の運用要件」を分けて聞くことです。

**Dify Cloud（SaaS）**
- インフラ管理不要で、すぐに検証を始めたいチーム向け
- 個人開発者や小規模チームの PoC に最適
- 月額課金、使った分だけ
- **提案シーン**：「まずは触ってみたい」というお客様に

**Community（OSS）**
- Docker / K8s で自社環境にデプロイ
- コア機能はすべて使えるが、シングルワークスペースのみ
- **提案シーン**：技術検証、小規模な社内ツール
- **位置づけ**：Self-host の入口

**Premium（Self-host / OSS を AWS に GUI デプロイ）**
- 中身は OSS（Community と同等、機能差分はない）
- AWS Marketplace のコンソールから GUI で AWS アカウントへ直接デプロイできる
- 運用・可用性は自己管理（Self-host なので当然）
- **提案シーン**：AWS を既に使っている顧客が、Docker/K8s の構築をスキップして最短で OSS 版を立ち上げたいケース
- **位置づけ**：OSS をセルフホストする手段の一つ（Community を手動で立てるか、Premium で GUI デプロイするか、という選び方）
- **注意**：SSO、RBAC、マルチワークスペース等の上位機能は含まれません。それらが必要な場合は Enterprise です

**Enterprise（年間契約）**
- ※ Enterprise ライセンスは Self-host 版のみで提供
- マルチワークスペースで部門・プロジェクト分離
- SSO、監査ログ、サポートSLA、専用サポート
- **提案シーン**：大企業の本番環境、コンプライアンス要件があるケース
- **位置づけ**：Self-host の本番運用向け上位契約

**パートナー向けエディション判定クイック質問**
1. 社外監査に提出可能な監査証跡が必要か
2. 部門別/顧客別でアクセス権と利用量を分離したいか
3. 社内 IdP での SSO が必須か
4. 障害時の問い合わせにサポートSLAを求めるか

この4つのうち2つ以上が YES なら、早期に Enterprise での設計を提案してください。

**提案の基本導線**
1. Cloud or Community で短期 PoC
2. 成果指標を定義して評価（回答品質、工数、利用率）
3. 本番移行時に Enterprise + 導入支援 + 運用支援をパッケージ化
      `,
    },

    // License Interpretation
    {
      layout: 'presenter-compact',
      slideTitle: 'ライセンスの原則',
      subtitle: 'Modified Apache 2.0 で先に押さえる3点',
      details: [
        {
          text: '1. 商用利用は可能',
          children: ['社内利用、受託開発、二次開発の多くは許可範囲', 'ただし利用形態によって追加制限が入る']
        },
        {
          text: '2. 禁止される提供形態がある',
          children: [
            'Dify 自体の SaaS 提供はどのライセンスでも禁止',
            'Dify で作成したアプリの外部提供はどのライセンスでも可能',
            'Community 版でのマルチテナント運営は LICENSE 上で明確に禁止',
            '迷う場合は「何を外部提供するのか」を切り分けて確認する'
          ]
        },
        {
          text: '3. 公式 UI の表示要件',
          children: [
            '公式 UI を使う場合はロゴ・著作権表示を保持',
            '独自 UI を作るなら API ベースで分離して構成する'
          ]
        }
      ],
      highlights: [
        { icon: 'check-circle', title: '商用利用は可能', subtitle: '多くの社内利用・受託開発で利用可', color: 'green' },
        { icon: 'check-circle', title: 'アプリ外部提供は可能', subtitle: '作成したアプリの提供はライセンス共通で可', color: 'green' },
        { icon: 'alert-circle', title: 'Dify自体のSaaS提供は禁止', subtitle: 'どのライセンスでも禁止', color: 'red' },
        { icon: 'alert-circle', title: 'Community版マルチテナント禁止', subtitle: 'LICENSE で明確に禁止', color: 'orange' },
        { icon: 'info', title: 'UI表示要件', subtitle: '公式 UI 利用時は表示維持', color: 'blue' },
      ],
      notes: `
【ライセンスの原則：3分】
このスライドは「何が許可され、何が禁止されるか」を先に揃えるためのものです。

Dify は Modified Apache 2.0 で、Apache 2.0 ベースに追加条項があります。
パートナーとしてまずこの3点だけを明確に伝えてください。

**1. 商用利用は可能**
社内利用、受託開発、二次開発の多くは許可範囲です。
許可範囲を正確に伝えれば、お客様の不安は解消できます。

**2. 禁止される提供形態がある**
ここは誤解が多いので、何を提供するのかを分けて説明してください。
Dify 自体の SaaS 提供はどのライセンスでも禁止です。
Dify で作成したアプリの外部提供は、どのライセンスでも可能です。
加えて、Community 版でのマルチテナント運営は LICENSE 上で明確に禁止されています。
つまり「Dify をサービスとして売る」のは不可で、
「Dify で作ったアプリを外部提供する」のは可、という整理です。

**講師への注意（重要）**
お客様から根拠を求められたら、Dify リポジトリの LICENSE ファイルの
該当部分をそのまま引用してください。商談前に最新の LICENSE 条文を確認し、
節番号と合わせて持っていくことをおすすめします（リポジトリ：langgenius/dify）。
特にマルチテナント禁止条項と「Dify 自体の再提供」に関する条項は、
バージョンによって表現が更新される可能性があります。

**3. 公式 UI には表示要件がある**
ロゴや著作権表示を消せる前提で話さないこと。
独自 UI が必要なら API ベース構成へ誘導します。

このスライドでは原則だけ伝え、次のスライドで提案時の判定に落とします。
      `,
    },

    // License Boundary
    {
      layout: 'presenter-compact',
      slideTitle: '提案時の判定フレーム',
      subtitle: '外部提供時のライセンス境界を3問で見る',
      details: [
        {
          text: '1. 何を外部提供するか？',
          children: ['Dify で作成したアプリの外部提供は可', 'Dify 自体を SaaS として提供するのは不可', 'Community 版でのマルチテナント運営は不可']
        },
        {
          text: '2. UI をどう見せるか？',
          children: [
            '公式 UI を使うなら表示要件を守る',
            '独自ブランド UI が必要なら API ベース構成を選ぶ'
          ]
        },
        {
          text: '3. どこで止まるか？',
          children: [
            '監査・SSO・部門分離・サポートSLA が出た時点で Enterprise を検討',
            'PoC の入口は Community でも、本番条件は先に確認する',
            '外部提供の議論では「アプリ提供」か「Dify提供」かを混同しない'
          ]
        }
      ],
      highlights: [
        { icon: 'check-circle', title: '進めやすい例', subtitle: '社内PoC・単一組織・作成アプリの外部提供', color: 'green' },
        { icon: 'x', title: '明確に不可な例', subtitle: 'Dify自体のSaaS提供・Community版マルチテナント・公式UI表示の削除', color: 'red' },
        { icon: 'arrow-right', title: 'Enterprise検討条件', subtitle: '統制要件・組織分離・本番運用', color: 'blue' },
      ],
      notes: `
【提案時の判定フレーム：2分】
前のスライドで原則を説明したので、ここでは提案時の判定に落とします。

**見る順番は3つです**
1. 何を外部提供するのか
2. UI をどう見せるのか
3. 本番でどの統制要件が出るのか

**進めやすい例**
- 社内PoC
- 単一組織での利用
- 技術検証や小規模社内アプリ
- Dify で作成したアプリの外部提供

**明確に不可な例**
- Dify 自体の SaaS 提供
- Community 版でのマルチテナント運営
- 公式 UI のロゴや著作権表示の削除

**Enterprise に切り替える典型条件**
- 部門 / 顧客単位の分離が必要
- SSO / 監査 / サポートSLA が調達条件に入る
- 本番運用で誰がどこまで持つかを決めておく必要がある

このスライドは「できる / できない」を感覚で答えないための判断フレームです。
曖昧ならその場で断言せず、必ず持ち帰って確認してください。
      `,
    },

    // Part 1 Q&A
    {
      layout: 'content',
      slideTitle: 'Part 1 商談前チェック',
      items: [
        '確認 1：外部提供するのは Dify 自体か、Dify で作成したアプリか',
        '確認 2：Community版マルチテナントに当たらないか',
        '確認 3：Enterprise 必須条件は何か（監査・SSO・組織分離・サポートSLA）',
        '確認 4：PoC から Enterprise へ移行する評価指標を何にするか'
      ],
      notes: `
【Part 1 Q&A：3分】
ここで少し立ち止まって、質問やディスカッションの時間を取ります。

**この Q&A の狙い**
この場で「次回商談で使う質問票」を作ることです。

**1. 何を外部提供するのかを先に確定する**
ここを曖昧にすると、ライセンス説明が崩れます。
- Dify 自体を提供するのか
- Dify で作ったアプリを提供するのか
- Community 版でマルチテナントになっていないか

**2. Enterprise 必須条件を先に確定する**
以下を最初の打ち合わせで確認してください。
- 社外監査に提出する監査ログが必要か
- 社内IdPでのSSOが必須か
- 部門/顧客単位でワークスペース分離が必要か
- 障害時のサポートSLAを調達条件に含むか

**3. ライセンス誤解を事前に潰す**
典型的な誤解は以下です。
- Dify 自体を SaaS として外部提供できる
- Community のまま複数組織を1環境で提供できる
- Dify UI のロゴ表示は自由に外せる
- Enterprise はCloudでも同じ条件で使える

提案書には必ず「利用境界」と「非対象範囲」を明記してください。

**4. PoC から本番移行の判断指標**
PoC 開始時に KPI を合意しておくと、Enterprise 提案が自然になります。
- 回答品質（正答率、再現率）
- 現場工数削減（時間/件）
- 継続利用率（WAU/MAU）
- ガバナンス充足（監査・権限・運用）

**パートナーへの実務アドバイス**
最初から価格論に入るのではなく、
要件整理 → 成果指標定義 → 本番リスク可視化 の順で進めてください。
      `,
    },

    // Enterprise Support SLA Keypoints
    {
      layout: 'sla-summary',
      slideTitle: 'Enterprise サポートSLA（要点）',
      subtitle: '誰が対象か、何が対象か、どの速度で返るか',
      applicability: [
        'Self-host Enterprise 契約顧客のみ',
        'Community は対象外',
      ],
      covered: [
        '製品機能・API・ライセンス',
        '公式提供 Workflow / Plugin / 文書',
        'アップグレード手順',
        '利用マニュアル',
      ],
      excluded: [
        '顧客 / 第三者環境',
        'Network / DB / K8s / IdP',
        '顧客カスタムコード・非公式パッケージ',
        '第三者モデル障害',
        '顧客環境起因の停止',
      ],
      responseRows: [
        { priority: 'P1', level: 'Urgent', time: '45分以内' },
        { priority: 'P2', level: 'High', time: '4時間以内' },
        { priority: 'P3', level: 'Normal', time: '1営業日' },
        { priority: 'P4', level: 'Low', time: '3営業日' },
      ],
      warningTitle: '重要な前提',
      warningText: '本SLAは **サポート応答SLA** であり、Self-host 環境そのものの稼働率保証ではありません。{{br}}契約前に非対象範囲を明記し、P1-P4 の運用定義を事前合意してください。',
      notes: `
【Enterprise サポートSLA：2分】
このスライドは契約誤解を防ぐために重要です。

**講師への注意（重要）**
表に記載の応答時間（P1=45分 / P2=4時間 / P3=1営業日 / P4=3営業日）は
Dify Enterprise 契約書・SLA 付属文書の最新版と**登壇前に必ず突き合わせ**、
差分がある場合は本スライドを更新してから使用してください。
契約書の表記が正であり、本スライドは要約です。

**必ず伝えるべき結論**
Enterprise の SLA は「サポート応答」に関する約束です。
Self-host 環境そのものの稼働率を Dify が直接保証する契約ではありません。

**提案時のチェックポイント**
1. 顧客のチケット窓口を事前に確定する
2. P1〜P4 の定義を顧客と擦り合わせる
3. 非対象範囲（顧客環境・第三者障害）を明文化する

この3点を契約前に固めると、運用フェーズの認識ズレを防げます。
      `,
    },

    // Part 1 Summary
    {
      layout: 'macro-focus',
      slideTitle: '章のまとめ（Part 1）',
      items: [
        'まず位置付け：Dify は「PoC を本番に乗せるための AI アプリ基盤」',
        '次に利用境界：Dify 自体の SaaS 提供は不可 / 作成アプリの外部提供は可 / Community 版マルチテナントは不可',
        '最後に導線：Enterprise は機能比較ではなく統制要件から提案する'
      ],
      notes: `
【Part 1 まとめ：30秒】
Part 1 のポイントを3つにまとめます。

1つ目：まず位置付け
Dify は AI 機能の単品ツールではなく、PoC を本番に乗せるための基盤です。

2つ目：次に利用境界
ライセンスの核は3点です。
- Dify 自体の SaaS 提供はどのライセンスでも禁止
- Dify で作成したアプリの外部提供はどのライセンスでも可能
- Community 版のマルチテナント運営は LICENSE 上で禁止
「何を外部提供するのか（Dify そのものか／作成したアプリか）」で切り分けてください。

3つ目：最後に導線
Enterprise は高機能版として売るのではなく、統制要件から自然に提案します。

では次の Part 2「Why Dify?」に進みましょう。
      `,
    },

    // Section: Why Dify?
    {
      layout: 'section',
      slideTitle: '第2章：Why Dify?',
      notes: `
【セクション移行：1分】
Part 2「Why Dify?」に入ります。

このパートでは、なぜ企業が Dify を選ぶべきなのか、
課題と解決策、そして競争優位性について説明します。

**このパートが商談の核心です**
お客様から「なぜ LangChain じゃダメなの？」「自社開発との違いは？」
「他の AI プラットフォームと何が違う？」と必ず聞かれます。

このパートで学ぶ内容で、これらの質問に自信を持って答えられるようになります。
競合との差別化ポイントをしっかり押さえてください。
      `,
    },

    // Innovator Challenges
    {
      layout: 'cards',
      slideTitle: 'PoC が止まる典型パターン',
      items: [
        { title: '品質が再現しない', description: '出力のブレが大きく、改善も属人的。業務品質の説明責任を果たしにくい', icon: 'line-chart', color: 'orange' },
        { title: '本番化の責任者が曖昧', description: 'デモは作れても、誰が運用し、どこまで作り込むかが決まらない', icon: 'git-branch', color: 'purple' },
        { title: '評価の仕組みがない', description: '良い回答 / 悪い回答の基準が曖昧で、改善投資の判断ができない', icon: 'search', color: 'blue' },
        { title: '資産が再利用されない', description: '部門ごとに似たフローを作り直し、プロンプトとナレッジが散在する', icon: 'bar-chart', color: 'green' },
      ],
      notes: `
【AI 開発者の課題：2.5分】
まず、AI 開発者が直面する典型的な課題を4つ挙げます。
これはお客様も同じ悩みを抱えていることが多いです。

**ヒアリングのコツ**
お客様との会話で、これらの課題を引き出してください。
「御社でも同じような悩みはありませんか？」と聞くと、話が広がります。

**1. 品質が再現しない**
LLM の出力はブレが大きく、業務が要求する安定水準（ユースケースによって基準は異なるが、金融・医療など高信頼領域では特に厳しい）に達しにくい。
同じプロンプトでも毎回異なる結果が返ってくることがあります。改善も属人的で、業務品質の説明責任を果たしにくい。

**お客様の声（実例）**：
「ChatGPT で PoC したら社長が『すごい』と言ったけど、
 2回目に見せたら全然違う回答で、信用を失った」

**2. 本番化の責任者が曖昧**
デモは作れても、誰が運用し、どこまで作り込むかが決まらない。
本番環境への進め方、バージョン管理、ナレッジ同期を誰が持つかが決まらず止まります。

**お客様の声（実例）**：
「NotebookLM でプロトタイプを作ったけど、
 これをどうやって本番システムにするか全くわからない」

**3. 評価の仕組みがない**
良い回答 / 悪い回答の基準が曖昧で、改善投資の判断ができません。
LLM はブラックボックスで、「なぜその回答になったのか」を説明しにくい。

**お客様の声（実例）**：
「品質保証部門から『どうやってテストするの？』と聞かれて答えられなかった」

**4. 資産が再利用されない**
部門ごとに似たフローを作り直し、プロンプトとナレッジが散在します。
結果として車輪の再発明が頻発し、全社で見ると投資が分散します。

**お客様の声（実例）**：
「各部門で似たような AI ツールを作っていて、全社で見ると無駄が多い」

**商談で使う深掘り質問（必須）**
1. いま最も損失が大きい業務は何か（時間・品質・機会損失）
2. PoC が止まる要因は技術か、運用か、ガバナンスか
3. 3か月後に経営層へ何を数字で報告する必要があるか

この3つの回答が揃うと、PoC の評価指標と本番化要件を定義できます。

これらの課題に対して、Dify がどうアプローチするか見ていきましょう。
      `,
    },

    // How Dify Addresses
    {
      layout: 'pillars',
      slideTitle: 'Dify が埋める実務ギャップ',
      subtitle: '課題スライドと同じ「品質 / 本番化責任 / 評価 / 資産再利用」で答える',
      items: [
        { title: '品質：分解して直せる', description: 'Workflow で処理を分解し、ノード単位で改善。ブラックボックス運用を減らす', features: ['可視化オーケストレーション', 'ロジックの分離'], icon: 'git-branch', color: 'blue' },
        { title: '本番化責任：先に切れる', description: '権限・監査・キー管理を基盤側に寄せ、「誰がどこまで持つか」を設計段階で合意できる', features: ['RBAC / 監査ログ', '運用責任の前倒し'], icon: 'shield', color: 'purple' },
        { title: '評価：データで回せる', description: 'Trace と評価機能で、改善対象を会話ではなくデータで議論できる', features: ['データループ', '継続的改善'], icon: 'line-chart', color: 'green' },
        { title: '資産再利用：部門横断で効く', description: 'テンプレート、プラグイン、ナレッジ共有で部門ごとの重複構築を防ぐ', features: ['テンプレート再利用', 'プラグイン活用'], icon: 'box', color: 'orange' },
      ],
      notes: `
【Dify のアプローチ：2.5分】
先ほどの4つの課題に対する Dify のアプローチです。
お客様の課題を引き出した後、「それに対して Dify はこうアプローチします」と
この4つの柱を説明してください。

**1. 品質：分解して直せる**
Workflow で複雑なロジックを分解し、ノード単位で最適化できます。
巨大なプロンプト1つではなく、小さなステップに分けることで、
どこで問題が起きているか特定でき、ブラックボックス運用を避けられます。

**お客様への説明例**：
「1つの長いプロンプトで全部やろうとすると、どこで問題が起きたかわかりません。
 Dify では処理を分解して、『検索』『判断』『生成』を別々のノードにします。
 どこでうまくいっていないか、すぐに特定できます。」

**2. 本番化責任：先に切れる**
RBAC・監査ログ・API Key 管理を基盤側で標準装備しているため、
「誰が運用し、どこまで作り込むか」を設計段階で合意できます。
情シスのレビューを後回しにせず、PoC の時点から組み込めるのが違いです。

**お客様への説明例**：
「デモ段階から権限設計と監査ログが入っているので、
 情シスに見せるときも『運用体制はこうです』と即答できます。
 本番化フェーズで『誰がやる問題』で止まることがなくなります。」

**3. 評価：データで回せる**
組み込みの評価機能とフルリンクトレースを提供。
入力から出力まで、どのステップでどういう処理が行われたか可視化できます。
改善議論を「感想ベース」から「データベース」に変えられます。

**お客様への説明例**：
「品質保証部門から『どうテストするの？』と聞かれても大丈夫です。
 Dify はすべての処理を記録し、なぜその回答になったか追跡できます。
 テストケースを作って、回帰テストを自動化することも可能です。」

**4. 資産再利用：部門横断で効く**
テンプレート、プラグイン、ナレッジ共有で部門間の重複構築を防ぎます。
一度作ったフローを他部門で使い回せるので、全社で AI ノウハウが蓄積します。

**お客様への説明例**：
「営業部門で作った FAQ ボットを、カスタマーサポート部門でも使い回せます。
 車輪の再発明を防ぎ、全社での AI 活用ノウハウが一箇所に貯まります。」

**まとめ**
つまり、Dify は「AI アプリを作るためのインフラ」を提供しています。
個別のツールを組み合わせるのではなく、統合されたプラットフォームで
開発から運用までをカバーする。これが Dify の価値です。

**商談トークの型（30秒）**
「御社課題は『品質 / 本番化責任 / 評価 / 資産再利用』の4点でした。
Dify はそれぞれに標準機能で対応できます。
まず短期 PoC で KPI を検証し、達成したら Enterprise 本番化へ進めましょう。」
      `,
    },

    // Why Visual Workflow Matters
    {
      layout: 'presenter-compact',
      slideTitle: 'なぜビジュアル Agentic Workflow が重要なのか？',
      subtitle: '現場・開発・情シスが同じ図で会話できる',
      details: [
        {
          text: '1. ロジックの可視化',
          children: ['複雑な Chain of Thought を明確なステップに分解', 'ルーティング・検索・ツール・生成をレイヤー分離']
        },
        {
          text: '2. リアルタイムデバッグ',
          children: [
            'ノードごとの入出力・レイテンシをその場で確認',
            '問題箇所を特定し「勘に頼るデバッグ」をなくす'
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
      imageUrl: '/assets/image/dify-workflow-trace.png',
      notes: `
【ビジュアル Workflow の重要性：2.5分】
Dify の核となる「ビジュアル Agentic Workflow」について深掘りします。
このスライドは競合との差別化で最も重要なポイントの一つです。

コンセプトは「ブラックボックス Prompt」から「可観測なホワイトボックス」への転換です。

**1. ロジックの可視化**
複雑な Chain of Thought を明確なステップに分解できます。
「検索」「判定」「生成」といった処理を個別のノードとして配置し、
データの流れを視覚的に追えます。

**競合比較（LangChain との違い）**：
- LangChain：コードベース。動作を理解するにはコードを読む必要がある
- Dify：ビジュアル。フローを見れば誰でも何をしているか理解できる

**2. リアルタイムデバッグ**
各ノードの入出力、処理時間をその場で確認できます。
「なぜこの回答になったのか」を追跡でき、
勘に頼るデバッグから抜け出せます。

**よくある質問への回答**：
Q：「デバッグって具体的にどうやるんですか？」
A：「Preview パネルで実行すると、各ノードに緑のチェックが付きます。
   クリックすると、そのノードの入力と出力が見れます。
   例えば検索ノードなら『何を検索して、何がヒットしたか』が全部見えます。」

**3. コラボレーションの促進**
ビジネス担当者はドラッグ＆ドロップでロジックを設計、
開発者はカスタムコードやプラグイン開発に集中できます。

**お客様への刺さるメッセージ**：
「エンジニアがボトルネックになりがちな AI 開発を、
 ビジネス部門も参加できる形に変えられます。
 プロンプトの調整は業務を知っている人がやる、
 複雑なロジックは開発者がやる、という分担ができます。」

**重要ポイント：ナレッジの蓄積**
ナレッジが「ドキュメント」ではなく「実行可能なフロー」として蓄積されます。
人が変わっても、フローを見れば何をしているか理解できます。

**パートナーとしての提案ポイント**：
「担当者が異動しても、フローを見れば引き継ぎができます。
 属人化を防ぎ、組織としてのノウハウ蓄積ができます。」
      `,
    },

    // Alternatives comparison — addresses LangChain / in-house / other platform questions visibly
    {
      layout: 'matrix',
      slideTitle: '代替アプローチとの違い',
      subtitle: 'LangChain / 自社開発 / 他の AI プラットフォームと並べて見る',
      headers: ['観点', 'LangChain', '自社開発', '他プラットフォーム', 'Dify'],
      rows: [
        ['開発スタイル', 'コード中心', 'フルスクラッチ', 'GUI / クラウド依存', 'Workflow GUI + コード'],
        ['統制 / 監査', '自前実装', '自前実装', 'クラウド依存', '標準装備'],
        ['クラウド / モデル', '自由（接続自前）', '自由（実装コスト大）', 'ロックイン', 'マルチ対応'],
        ['可観測性 / 評価', '自前構築', '自前構築', 'クラウド固有', 'Trace・評価・A/B 標準'],
      ],
      matrixSize: 'medium',
      notes: `
【代替アプローチとの違い：2分】
Part 2 冒頭で「LangChain との違い」「自社開発との違い」「他の AI プラットフォームとの違い」に答えると約束しました。
このスライドで、その3つに一度に答えます。speaker notes ではなく、お客様の前に出す1枚です。

**LangChain との違い**
LangChain はフレームワーク（部品）です。Dify はそれを内包するプラットフォーム（家）です。
「LangChain を捨てる」ではなく「差別化にならない部分は Dify に任せる」という説明が刺さります。
開発者向けには「カスタムコードノードで LangChain のロジックを呼び出すこともできる」と添えるとさらに好感触です。

**自社開発との違い**
自社開発は全部自由に作れますが、監査・RBAC・評価・Trace・プラグイン管理をすべて自前で作る必要があります。
本番化に2〜3年かかる機能群が Dify では標準装備です。
「差別化になる部分だけ自社開発、基盤は Dify」が合理的な切り分けです。

**他の AI プラットフォーム（Bedrock / Azure AI Studio など）との違い**
特定クラウドに縛られる / 日本語 UI が弱い / セルフホストできない、といった制約があります。
Dify は中立ポジションで、クラウド選定の自由度を残します。

**商談での使い方**
比較表の「観点」列を指でなぞりながら、「御社で重視するのはどこですか？」と聞いてください。
お客様が選んだ行で深掘りすれば、そのまま次の情シス論点に繋がります。
      `,
    },

    // Enterprise Challenges
    {
      layout: 'cards',
      slideTitle: '本番導入で情シスが止める論点',
      items: [
        { title: 'コンプライアンス', description: 'データレジデンシー、個人情報保護、監査証跡の確保', icon: 'shield', color: 'red' },
        { title: '運用責任とSLO', description: '高負荷時のレイテンシ、障害時に誰がどこまで対応するか、可用性設計を明確にする', icon: 'bar-chart', color: 'orange' },
        { title: 'エコシステム柔軟性', description: 'ベンダーロックインを避け、選択肢と交渉力を維持', icon: 'globe', color: 'blue' },
        { title: '可観測性', description: 'エンドツーエンドのトレース、A/B テスト、定量評価', icon: 'search', color: 'purple' },
        { title: 'バージョン管理', description: 'Prompt / KB / Workflow の統一的なバージョン管理', icon: 'git-branch', color: 'green' },
        { title: 'セキュリティ', description: 'キー管理、プラグイン権限境界、不正利用防止', icon: 'lock', color: 'black' },
      ],
      notes: `
【本番導入で情シスが止める論点：2分】
ここでは現場が前向きでも、情シスやセキュリティ審査で止まる論点を整理します。
このスライドは Enterprise 提案の前振りです。

**コンプライアンス**
データレジデンシー、個人情報保護、監査証跡の確保。
日本企業では特に重視されます。

**業界別のポイント**：
- 金融：FISC 安全対策基準への対応、監査ログ必須
- 医療：個人情報保護、データの国内保管要件
- 製造：知財・設計情報の漏洩防止

**運用責任とSLO**
高負荷時のレイテンシだけでなく、
障害時に誰がどこまで責任を持つかを明確にする必要があります。

**お客様の声（実例）**：
「月曜の朝はアクセスが集中する。そのときにレスポンスが遅くなると困る。」
「99.9%の可用性を約束できないと、基幹システムには組み込めない。」

**エコシステム柔軟性**
特定ベンダーにロックインされたくない。
選択肢と交渉力を維持したいというニーズがあります。

**お客様の声（実例）**：
「OpenAI に依存しすぎると、料金改定で予算が狂う。」
「Anthropic や Google に切り替えられる柔軟性がほしい。」

**可観測性**
エンドツーエンドのトレース、A/B テスト、定量評価。
「なんとなく良さそう」ではなく、数字で効果を示す必要があります。

**お客様の声（実例）**：
「経営層に効果を報告するのに、定量的なデータが必要。」
「プロンプトを変えたら良くなったのか悪くなったのか、比較したい。」

**バージョン管理**
Prompt、Knowledge Base、Workflow の統一的なバージョン管理。
「誰がいつ何を変更したか」を追跡したい。

**セキュリティ**
API キー管理、権限境界、不正利用防止。
社内で広く使うなら必須の機能です。

**パートナーとしての質問例**：
「御社では、これらのうちどの課題が最も重要ですか？」
→ 答えに応じて Enterprise の価値を説明する流れに繋げます。
      `,
    },

    // Enterprise Solutions — 1:1 mapping to the previous 論点 slide
    {
      layout: 'matrix',
      slideTitle: 'Enterprise で閉じる本番論点',
      subtitle: '前ページの6論点に対し、Dify と顧客側でどう分担するか',
      headers: ['情シス論点', 'Dify プロダクトが提供', '顧客 / パートナーが担う'],
      rows: [
        ['コンプライアンス', 'IAM / RBAC、監査ログ、ワークスペース分離、プライベートデプロイ', '業界別要件定義、ログ監査運用、データレジデンシー設計'],
        ['運用責任と SLO', 'K8s HA 構成ガイド、レプリカ戦略、サポート応答 SLA', 'インフラ運用、可用性 SLO 実現、障害対応フロー'],
        ['エコシステム柔軟性', 'マルチクラウド対応、マルチモデル互換（数百モデル）', 'クラウド選定、モデル評価と切替方針'],
        ['可観測性', 'Trace、評価、A/B テスト、ダッシュボード', 'KPI 設計、改善ループ運用'],
        ['バージョン管理', 'Prompt / KB / Workflow のライフサイクル機能', 'リリース基準、変更管理ルール'],
        ['セキュリティ', 'API Key 管理、プラグイン権限境界、RBAC', 'ネットワーク設計、鍵管理運用、監査体制'],
      ],
      matrixSize: 'small',
      notes: `
【Enterprise で閉じる本番論点：2分】
前ページの「情シスが止める論点」6項目に、そのまま1対1で答える表です。
「Enterprise = 機能追加」ではなく「本番設計の分担図」と位置付けてください。

**話し方の型**
1. 表の左端「情シス論点」列を指でなぞる
2. 各行で「Dify 側が持つのはここまで、残りは御社 / パートナーで設計します」と切る
3. お客様の反応が強い行で深掘りする

**特に注意する線引き（誤解防止）**
- 「運用責任と SLO」行は要注意です。Self-host Enterprise では、**稼働率そのものの保証は顧客側インフラチームが担う**のが前提です。
- Dify 側は HA 構成ガイド・レプリカ戦略・サポート応答 SLA を提供します。サポート SLA は応答時間の契約であり、Self-host 環境の稼働率保証ではない、と Part 1 と揃えて説明してください。
- 「月曜朝のピークでも絶対遅くならない」とは言い切らず、「高負荷を前提に設計できる」「スケールアウト前提の構成を組める」に留めます。

**コンプライアンス**
データは顧客環境に閉じます。監査ログで「誰がいつ何をしたか」を追跡。
情シス・コンプライアンス部門の要件を満たす材料が揃います。

**エコシステム柔軟性**
OpenAI → Azure OpenAI → Anthropic への切替も設定変更レベル。
ロックイン回避とベンダー交渉力を残せます。

**可観測性 / バージョン管理**
A/B テストで定量比較、プロンプト差替えをワンクリックでロールバック。
「本番で事故らない」運用材料が揃います。

**クロージングへの流れ**
「Community 版で PoC を成功させ、本番化フェーズで Enterprise に寄せる」
が定番の導線です。表のどの行で刺さったかで、見積もりの優先順位を決めてください。
      `,
    },

    // Competitive Advantage
    {
      layout: 'presenter-compact',
      slideTitle: '中立性が意思決定にもたらす価値',
      subtitle: '比較表では見えない、経営・調達・現場それぞれの効き方',
      details: [
        {
          text: '1. 経営：交渉力と投資の寿命',
          children: [
            'モデル / クラウドを切替え可能にすることで、ベンダー値上げ・終息リスクに備える',
            'ワークフロー資産は5年以上使い続けられる前提で投資設計できる'
          ]
        },
        {
          text: '2. 調達：ロックイン監査の通しやすさ',
          children: [
            'セルフホスト可、マルチクラウド可、OSS ベースという属性が調達要件を満たす',
            'Enterprise 契約でもポータビリティ（移行・切替の余地）を担保できるため、稟議を通しやすい'
          ]
        },
        {
          text: '3. 現場：新モデル採用の速度',
          children: [
            'GPT / Claude / Gemini / OSS の世代交代に、設定変更だけで追従',
            'コミュニティ（GitHub 100k+ Stars）のプラグイン・事例を即時取り込める'
          ]
        }
      ],
      highlights: [
        { icon: 'Globe', title: '交渉力', subtitle: '「他に移れる」を武器に', color: 'blue' },
        { icon: 'Cpu', title: '寿命の長い投資', subtitle: 'モデル世代交代に耐える', color: 'purple' },
      ],
      notes: `
【中立性が意思決定にもたらす価値：2分】
前ページの比較表では「Dify は中立」という"事実"を示しました。
このスライドでは、それが**誰にどう効くか**を、経営 / 調達 / 現場の3視点で言い切ります。
（比較表と二重にならないよう、ここでは"意思決定価値"に寄せて話します）

**1. 経営視点：交渉力と投資の寿命**
「もし OpenAI の料金が2倍になったらどうするか」「5年後も同じ基盤が使えるか」
という経営の問いに、Dify は「切替えられる」「残る」と答えられます。
AI 投資を5年スパンで説明できる材料になります。

**お客様への説明例**：
「2年前に作ったプロンプト資産が、モデルが変わった瞬間に使えなくなる——
 これが他のプラットフォームで起きがちな"投資の寿命問題"です。
 Dify では資産をそのままに、モデル側だけ差し替えられます。」

**2. 調達視点：ロックイン監査の通しやすさ**
大手企業の調達部門は「単一ベンダー依存」を嫌います。
OSS ベース、セルフホスト可、マルチクラウド可、という属性は
それだけで調達要件を1つ通すことになります。

**商談での使い方**：
「御社の調達規定で『複数ベンダー比較』『ロックイン回避』の項目ありませんか？
 Dify は Enterprise でもそれを前提に作っています。」

**3. 現場視点：新モデル採用の速度**
LLM の世代交代は半年〜1年に1回起きます。
現場が「新モデルを試したい」と言ったとき、設定変更だけで動かせるのは強力です。
コミュニティ（GitHub 100k+ Stars）のプラグインや事例も即時取り込めます。

**商談での使い方**：
「御社で『次の世代 LLM が出たらどうする？』という議論、ありましたか？
 Dify なら、ワークフローを作り直さずにモデルを切り替えられます。」

**締めの一言**
「中立性は機能ではなく、5年続く投資にするための前提条件です。」
これが Part 2 のクロージングメッセージです。
特定ベンダーに依存したくない企業に、「いつでも移行・切替えができる」
ポータビリティという安心感を提供できるのが Dify の強みです。
      `,
    },

    // Part 2 Talk Tracks
    {
      layout: 'cards',
      slideTitle: 'Part 2 商談トークトラック',
      subtitle: '同じ製品でも、相手ごとに刺さる言葉は変える',
      items: [
        { title: '現場責任者向け', description: '「精度が安定し、改善もしやすい」を Trace と Workflow の実画面で示す', icon: 'target', color: 'blue' },
        { title: '開発者向け', description: '「LangChain を捨てる」ではなく「差別化領域以外を基盤化する」と説明する', icon: 'code', color: 'green' },
        { title: '情シス/CIO向け', description: 'Self-host Enterprise の統制と責任の切り分けを先に示し、機能説明は後に回す', icon: 'shield', color: 'purple' },
      ],
      notes: `
【Part 2 商談トークトラック：2分】
ここでは営業現場で本当に使う言い方に落とします。

**現場責任者向け**
「回答が良いか悪いか」だけでなく、
「どこを直せば良くなるか」が見えることを強調します。

**開発者向け**
「LangChain と対立する」のではなく、
「ゼロから全部作らなくていい共通基盤」として話してください。
差別化になる部分だけ自社で作るほうが合理的です。

**情シス/CIO向け**
Self-host Enterprise の論点は、機能数ではなく統制です。
監査、SSO、権限の分け方、運用で誰が何を持つかを最初に話してください。

この3つを切り替えられると、同じ内容でも説明しやすくなります。
      `,
    },

    // Part 2 Summary
    {
      layout: 'macro-focus',
      slideTitle: '章のまとめ（Part 2）',
      items: [
        '課題起点：PoC 停滞の原因を品質・本番化責任・評価・資産再利用の4軸で特定する',
        '価値訴求：Workflow と Trace で「直せる基盤」であることを示す',
        '意思決定軸：Enterprise は統制要件と本番責任の整理で提案する'
      ],
      notes: `
【Part 2 まとめ：1分】
Part 2 のポイントを3つにまとめます。
ここまでの内容が「Why Dify?」への回答になります。

**1つ目：課題起点で話す**
製品機能から入るのではなく、
PoC 停滞の原因を「品質 / 本番化責任 / 評価 / 資産再利用」の4軸で言語化してください。
課題スライド・ギャップ解消スライド・このまとめスライド、3枚すべて同じ4軸で揃えています。

**2つ目：Trace まで見せる**
価値実証では、回答結果だけでなく「直せること」を見せるのが重要です。

**3つ目：本番論点を外さない**
Self-host Enterprise の価値は統制と本番運用設計です。
その上で中立エコシステムを添えると、意思決定が進みやすくなります。

では Part 3 に進みます。
      `,
    },

    // Section: Core Concepts
    {
      layout: 'section',
      slideTitle: '第3章：設計原則とアーキテクチャ',
      notes: `
【セクション移行：1分】
Part 3「設計原則とアーキテクチャ」に入ります。

このパートのテーマは、お客様の要望を Dify の設計図に翻訳するコツです。
決めることは3つだけ：①何を作るか（App と実行モデル）、②何を読ませるか（Knowledge Base）、③誰に使わせるか（Workspace）。
この順に聞いていけば、提案の骨組みができあがります。

**このパートのゴール**
- お客様から「こういうことがしたい」と言われたときに、
  ①→②→③の順ですぐ設計イメージを返せるようになること

**パートナーとしての価値**
- 「できます／できません」で終わらせず、
  「こう組めば実現できます」と返せると、それ自体が強みになります
- この3つの問いが身につくと、見積もりの精度も上がり、
  お客様からの信頼にもつながります

**以降ずっと使う例：保険会社A社**
このパートでは、仮想のお客様「保険会社A社」を共通の例として使います。
営業部門の提案書作成支援、CS部門の問い合わせ対応ボット、両方で使う商品マニュアル。
これを①→②→③に通して、どんな設計になるかを追っていきます。

**技術的な深掘りは 101B 以降で**
今回は、ざっくり全体像をつかむのがゴールです。
具体的な設定のやり方やベストプラクティスは、次以降のコースで扱います。
      `,
    },

    // Part 3 Framing: 3 Questions
    {
      layout: 'cards',
      slideTitle: '設計を決める3つの問い',
      subtitle: '要件を聞いたら、この順に3つだけ決める',
      items: [
        { title: '① 何を作る？', description: 'App のタイプと、中で動かす実行モデルを選ぶ（Content Generation / Chatbot / Agent / Workflow / Chatflow）', icon: 'target', color: 'blue' },
        { title: '② 何を参照させる？', description: 'Knowledge Base をどの単位で作り、どう読ませるかを決める', icon: 'database', color: 'green' },
        { title: '③ 誰が使う？', description: 'Workspace を分けて「誰が触れるか／どのデータが見えるか」を決める', icon: 'building', color: 'purple' },
      ],
      notes: `
【設計を決める3つの問い：2分】
Part 3 では、お客様の要望を Dify の設計に落とすための "3つの問い" を扱います。
商談で話を聞いたら、この順に3つ決めるだけで、提案の骨組みができあがります。

**① 何を作る？（App と実行モデル）**
ユーザーが触れるのが App、その中で動く仕組みが実行モデルです。このセットを選びます。
「1回で終わる処理なのか」「会話を続けるのか」「LLM に自分で考えて動いてもらうのか」で分かれます。
→ 次のスライドで詳しく見ます。

**② 何を参照させる？（Knowledge Base）**
App に参照させる知識をどう作るかの話です。
「App ごとに別々に持たせるか、複数 App で使える1つにまとめるか」で、あとの運用の手間が大きく変わります。
→ RAG の動きと設計のポイントを、次のスライドで扱います。

**③ 誰が使う？（Workspace）**
Workspace を分けると、"誰が触れるか" と "どのデータが見えるか" を部署ごとに切り分けられます。
全社で1つにするか、部門ごとに分けるかは、会社の規模と権限の厳しさで決めます。
※ 注意：Workspace を分けても、部門ごとに LLM 予算を絞ったり、監査ログを部門別に切り分けたりはできません（監査ログは Enterprise 全体で1本）。分ける目的は "権限とデータの見せ分け" だけ、と割り切ってください。
→ 最後に Workspace の分け方を扱います。

**これから使う共通例：保険会社A社**
次の3スライドでは、仮想のお客様「保険会社A社」を共通の例として使います。
- 営業部門：お客様向け提案書の作成を手伝ってほしい
- CS 部門：商品の問い合わせに自動で答えてくれる窓口がほしい
- 両方で同じ「商品マニュアル」を使う
- 部門ごとに権限とデータは分けたい

この話を①→②→③の順に決めていくと、どんな設計になるかを追っていきます。
      `,
    },

    // ① What to build: App types and execution model
    {
      layout: 'presenter-compact',
      slideTitle: '① 何を作る：実行モデルを選ぶ',
      subtitle: '要件をどの実行モデルに落とすか',
      details: [
        {
          text: 'Q1. 対話が必要か？',
          children: [
            'NO → 1回完結タスク（Q2へ）',
            'YES → 会話体験（Q3へ）'
          ]
        },
        {
          text: 'Q2. NO の場合（対話なし）',
          children: [
            '文章を生成するだけ → Content Generation',
            '固定手順でデータ処理・変換・分岐 → Workflow'
          ]
        },
        {
          text: 'Q3. YES の場合（対話あり）',
          children: [
            'シンプルなQ&A・RAG応答 → Chatbot',
            '会話の途中で状態・分岐を制御 → Chatflow',
            '外部ツールを LLM に自律判断で呼ばせる → Agent'
          ]
        }
      ],
      highlights: [
        { icon: 'rocket', title: '対話なし：1回完結', subtitle: 'Content Generation / Workflow', features: ['生成のみ', '固定手順'], color: 'blue' },
        { icon: 'message-circle', title: '対話あり：基本', subtitle: 'Chatbot / Chatflow', features: ['状態保持', '分岐制御'], color: 'green' },
        { icon: 'compass', title: '対話あり：高度', subtitle: 'Agent（ツール自律呼び出し）', features: ['LLM判断', '動的ツール選択'], color: 'purple' },
      ],
      notes: `
【① 何を作る：実行モデルを選ぶ：3分】
3つの問いの1つ目です。要件を「対話が必要かどうか」「どう動かすか」の2段階で切り分けて、5つの実行モデル（Content Generation / Workflow / Chatbot / Chatflow / Agent）から1つ選びます。
Agent を2カテゴリにまたがせず、1本の決定ツリーで選んでもらうのがコツです。

**Q1. 対話は必要か？**
- 不要（1回入力して終わり）→ Q2 へ
- 必要（会話を続ける）→ Q3 へ

**Q2. 対話なしの場合**
- **Content Generation**：文章を生成するだけ
  メール文面、翻訳、要約など、1つ入れて1つ返すシンプルな処理。
  **使いどころ**：レポート作成、文書要約、翻訳、メール下書き
- **Workflow**：決まった手順でデータを処理・変換・分岐させる
  承認フロー、データ変換、定型の業務処理など。
  **使いどころ**：ドキュメント自動生成、データ抽出→変換→出力

**Q3. 対話ありの場合**
- **Chatbot**：シンプルな Q&A や RAG で返す
  会話履歴を持ちながら、KB を参照してマルチターンで答えられます。
  **使いどころ**：社内 FAQ、カスタマーサポート、商品の問い合わせ
- **Chatflow**：会話の途中で状態や分岐を持たせる
  Workflow エディタを会話向けに拡張したもので、会話の途中で変数やメモリを持たせたいときに使います。
  **使いどころ**：条件分岐のある申込フロー、ヒアリング型のガイダンス
- **Agent**：LLM が自分で考えて外部ツールを呼び出す
  会話しながら API やプラグインを必要に応じて使います。
  **使いどころ**：調査業務、社内 API 連携、複数ツールの使い分け

**保険会社A社の場合（①の結論）**
- 営業部門「提案書作成支援」：入力から出力までの流れがおおむね決まっている
  → **Workflow**（Q1=不要 → Q2=決まった手順）
- CS 部門「商品問い合わせ窓口」：会話しながら商品マニュアルを参照する
  → **Chatbot**（Q1=必要 → Q3=シンプルな Q&A）
- 将来「契約照会や変更手続きまで自動化したい」と要望が出てきたら
  → **Agent**（Q1=必要 → Q3=ツールを呼ぶ）

次のスライド（②）では、この2つの App が参照する「商品マニュアル」KB をどう設計するかを扱います。

**よくある質問への答え方**：
Q：「Chatbot と Agent の違いは？」
A：「Chatbot は会話して答えるだけです。Agent はそれに加えて、自分で考えて
   外部ツールも呼び出します。例えば『天気を調べて』と言われたら、
   Agent は自分で天気 API を呼んで答えられます」
Q：「Chatflow と Workflow の違いは？」
A：「同じ Workflow エディタを使いますが、Chatflow は会話ベースの App、
   Workflow は1回で完結する処理の App です」

**補足**
Extension Plugin のような実装拡張の話は 101B 以降で扱います。
101A ではまず、実行モデルの選び方に集中してください。
      `,
    },

    // ② What to reference: Knowledge Base / RAG
    {
      layout: 'diagram',
      slideTitle: '② 何を参照させる：Knowledge Base の作り方',
      subtitle: 'KB が動く流れ（4ステップ）と、作るときのポイント（3つ）',
      slot: `
<div class="flex flex-col items-center gap-5 mt-1 w-full">

  <!-- Top: RAG Pipeline (how KB works) -->
  <div class="w-full">
    <div class="text-[0.75rem] text-slate-500 text-center mb-2 font-bold tracking-wider">KB の動き：RAG の流れ 4 ステップ</div>
    <div class="flex items-center justify-center gap-2">
      <div class="flex flex-col items-center">
        <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-1">
          <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div class="text-[0.75rem] font-bold text-slate-700">ソース</div>
      </div>

      <div class="w-6 h-px bg-slate-300"></div>

      <div class="flex flex-col items-center">
        <div class="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 flex flex-col items-center">
          <svg class="w-7 h-7 text-amber-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div class="text-[0.75rem] font-bold text-slate-700">ETL 処理</div>
          <div class="text-[0.6rem] text-slate-500">クレンジング / 分割</div>
        </div>
      </div>

      <div class="w-6 h-px bg-slate-300"></div>

      <div class="flex flex-col items-center">
        <div class="bg-purple-50 border border-purple-200 rounded-xl px-4 py-2 flex flex-col items-center">
          <svg class="w-7 h-7 text-purple-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
          <div class="text-[0.75rem] font-bold text-slate-700">インデックス</div>
          <div class="text-[0.6rem] text-slate-500">ベクトル / キーワード</div>
        </div>
      </div>

      <div class="w-6 h-px bg-slate-300"></div>

      <div class="flex flex-col items-center">
        <div class="bg-blue-50 border border-blue-200 rounded-xl px-4 py-2 flex flex-col items-center">
          <svg class="w-7 h-7 text-blue-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <div class="text-[0.75rem] font-bold text-slate-700">検索 & 生成</div>
          <div class="text-[0.6rem] text-slate-500">Recall / Rerank</div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full max-w-[55rem] h-px bg-slate-200"></div>

  <!-- Bottom: 3 Design Principles (what to do) -->
  <div class="w-full">
    <div class="text-[0.75rem] text-slate-500 text-center mb-2 font-bold tracking-wider">KB を作るときに押さえるポイント（3つ）</div>
    <div class="flex gap-3 justify-center">
      <div class="bg-blue-50 border-2 border-blue-200 rounded-xl px-3 py-2 w-[16rem]">
        <div class="flex items-center gap-1.5 mb-1">
          <div class="bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[0.65rem] font-bold flex-shrink-0">1</div>
          <div class="font-bold text-[0.85rem] text-blue-900">粒度をそろえる</div>
        </div>
        <div class="text-[0.7rem] text-slate-600 leading-snug">元のマニュアル・規程の章や節の区切り方をそろえてから取り込む</div>
      </div>

      <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl px-3 py-2 w-[16rem]">
        <div class="flex items-center gap-1.5 mb-1">
          <div class="bg-emerald-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[0.65rem] font-bold flex-shrink-0">2</div>
          <div class="font-bold text-[0.85rem] text-emerald-900">共有できる単位で作る</div>
        </div>
        <div class="text-[0.7rem] text-slate-600 leading-snug">App ごとに作らず、複数の App から読める単位で作る</div>
      </div>

      <div class="bg-purple-50 border-2 border-purple-200 rounded-xl px-3 py-2 w-[16rem]">
        <div class="flex items-center gap-1.5 mb-1">
          <div class="bg-purple-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[0.65rem] font-bold flex-shrink-0">3</div>
          <div class="font-bold text-[0.85rem] text-purple-900">Trace を見て改善</div>
        </div>
        <div class="text-[0.7rem] text-slate-600 leading-snug">検索結果の Trace を見ながら、分割サイズ・検索方式・Rerank を少しずつ調整する</div>
      </div>
    </div>
  </div>

</div>
    `.trim(),
      notes: `
【② 何を参照させる：Knowledge Base の作り方：3分】
3つの問いの2つ目です。Knowledge Base の中で何が起きているかを、ざっくり説明します。
101A では「どこを押さえれば品質が安定するか」をつかめれば十分です。

**ステップ 1：ソース**
PDF、Word、テキストファイルなどをアップロードします。
Notion や Web ページから取り込むこともできます。

**お客様への説明の仕方**：
「御社の既存ドキュメントをそのままアップロードできます。
 PDF、Word、Markdown、テキスト、いずれも対応しています。
 Notion 連携を使えば、すでにお持ちのナレッジベースをそのまま活用できます」

**ステップ 2：ETL 処理**
アップロードしたドキュメントをクレンジングして、
適切なサイズのチャンク（断片）に分割します。
ここでの分割の質が、後段の検索精度をそのまま決めます。

**ステップ 3：インデックス**
チャンクをベクトル化（Embedding）して、インデックスに格納します。
ベクトル検索とキーワード検索を組み合わせる使い方もできます。

**ステップ 4：検索＆生成**
ユーザーから質問が来たら、
1. まず関連するチャンクを検索（Recall）
2. 必要に応じて並べ替え（Rerank）
3. チャンクをコンテキストとして LLM に渡して、回答を生成

**101A で押さえるポイントは3つだけです**
1. 元データの粒度をそろえる
2. App ごとではなく、共有できる単位で KB を作る
3. 検索結果の Trace を見ながら、分割サイズ・検索方式・Rerank を調整する

**保険会社A社の場合（②の結論）**
- 営業（提案書作成 Workflow）と CS（問い合わせ Chatbot）の両方が、同じ「商品マニュアル」を参照します
- もし App ごとに KB を複製すると、商品改定のたびに両方を更新することになり、運用が回らなくなります
- → **「商品マニュアル」KB は1つだけ作り、両 App から共有参照する** のが正解
- 部門固有の資料（営業トークスクリプト・CS対応履歴など）は、それぞれ別 KB として切り出します

次のスライド（③）では、この共有 KB と2つの App を、Workspace という一番外側の仕切りにどう配置するかを扱います。

**パートナーとしての強み**：
「RAG のチューニングには経験が必要です。
 弊社がベストプラクティスをもとに設定をサポートします」
→ 導入支援サービスの価値をアピールできるポイントです。
      `,
    },

    // ③ How to govern: Workspace / App / KB structure
    {
      layout: 'diagram',
      slideTitle: '③ どう統制する：Workspace の分け方',
      subtitle: '一番外側の仕切りから順に決めていく',
      slot: `
<div class="w-full flex justify-center items-center mt-4 scale-[0.9]">
  <div class="flex gap-10 w-full max-w-[62rem] items-center">

    <!-- Left: Design Steps (Rules) -->
    <div class="flex flex-col gap-4 w-[22rem]">
      <!-- Step: Workspace -->
      <div class="bg-slate-800 text-white p-4 rounded-xl shadow-md border-l-4 border-slate-400">
        <div class="text-[0.75rem] text-slate-300 font-bold mb-0.5">誰が管理・参照できるか？</div>
        <div class="text-[1.1rem] font-bold mb-1">Workspace を組織で切る</div>
        <div class="text-[0.75rem] text-slate-400 leading-snug">一番外側の仕切り。分けると中の App と KB がまるごと別の部屋になる</div>
      </div>

      <!-- Step: App -->
      <div class="bg-[#0033FF] text-white p-4 rounded-xl shadow-md border-l-4 border-blue-300">
        <div class="text-[0.75rem] text-blue-200 font-bold mb-0.5">どんな業務に使うか？</div>
        <div class="text-[1.1rem] font-bold mb-1">App を用途ごとに分ける</div>
        <div class="text-[0.75rem] text-blue-200 leading-snug">営業用・CS用など、目的ごとに別の App として作る</div>
      </div>

      <!-- Step: KB -->
      <div class="bg-emerald-500 text-white p-4 rounded-xl shadow-md border-l-4 border-emerald-200">
        <div class="text-[0.75rem] text-emerald-100 font-bold mb-0.5">どの知識を参照するか？</div>
        <div class="text-[1.1rem] font-bold mb-1">KB は共通で使える形にまとめる</div>
        <div class="text-[0.75rem] text-emerald-100 leading-snug">複数の App から使う社内規程などは一箇所にまとめる</div>
      </div>
    </div>

    <!-- Right: Visual Architecture -->
    <div class="flex-grow flex justify-center">
      <div class="relative bg-slate-50 border-2 border-slate-300 rounded-3xl p-6 pt-10 shadow-sm w-[28rem]">        <!-- Workspace Label -->
        <div class="absolute top-0 left-0 bg-slate-700 text-white px-5 py-1.5 rounded-tl-2xl rounded-br-xl shadow-sm text-[0.8rem] font-bold">
          Workspace
        </div>

        <div class="grid grid-cols-[10rem_3rem_11rem] items-center gap-y-5 justify-center mt-2">
          <!-- App A -->
          <div class="bg-[#0033FF] text-white rounded-xl px-4 py-3 text-center shadow-md relative z-10">
            <div class="text-[1.1rem] font-bold mb-1">App A</div>
            <div class="bg-white/20 text-white text-[0.65rem] px-2 py-0.5 rounded-md inline-block">営業：Workflow</div>
          </div>

          <!-- Line 1 -->
          <div class="flex items-center">
            <div class="flex-grow h-px bg-slate-300"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          </div>

          <!-- KB -->
          <div class="row-span-2 bg-emerald-500 text-white rounded-xl px-5 py-6 text-center shadow-md ml-1 relative z-10">
            <div class="text-[1.1rem] font-bold mb-2">Knowledge Base</div>
            <div class="bg-white/20 text-white text-[0.65rem] px-3 py-1 rounded-md inline-block">商品マニュアル（共有）</div>
          </div>

          <!-- App B -->
          <div class="bg-[#0033FF] text-white rounded-xl px-4 py-3 text-center shadow-md relative z-10">
            <div class="text-[1.1rem] font-bold mb-1">App B</div>
            <div class="bg-white/20 text-white text-[0.65rem] px-2 py-0.5 rounded-md inline-block">CS：Chatbot+RAG</div>
          </div>

          <!-- Line 2 -->
          <div class="flex items-center">
            <div class="flex-grow h-px bg-slate-300"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>    `.trim(),
      notes: `
【③ どう統制する：Workspace の分け方：3分】
3つの問いの3つ目です。最後に、Workspace という一番外側の仕切りをどう分けるかを決めます。
ここが理解できていれば、お客様への設計提案の骨組みになります。

**一番外側：Workspace（ワークスペース）**
これが「テナント」に相当します。
Enterprise 版では複数の Workspace を持てます。

Workspace の中には以下が入っています：
- メンバーと権限（誰が何をできるか）
- App と Knowledge Base の置き場（どのデータが見えるか）
- モデル設定（どの LLM を使うか）

**Workspace でできないこと（重要：営業トーク時の注意）**：
- **課金の分離はできません**。Dify Enterprise は Workspace ごとに課金されず、LLM コストを部門別に上限設定する機能もありません。
- **監査ログの分離はできません**。監査ログ（誰がログインしたか、誰が App を作ったか等）は Enterprise テナント全体で1本です。Workspace 単位の監査ログは提供されません。
- 「部門ごとの予算管理」「部門別の監査ログ」というご要望は、Dify 側ではなく LLM プロバイダの請求分離や社内運用ルールで対応します。

**よくある質問への答え方**：
Q：「部門ごとに Workspace を分けるべきですか？」
A：「権限とデータを部門ごとに分けたいのであれば、Workspace を分けるのがおすすめです。
   ただし『コスト按分のため』『部門別に監査ログがほしいから』という理由だと、
   期待される機能と合いません。Workspace はあくまで "権限とデータの仕切り" です」

**Workspace の中に App と KB を置きます**

**App（アプリ）**
①で選んだ実行モデルで作成したアプリケーションです。
1つの Workspace に複数の App を作成できます。

**Knowledge Base**
②で設計した KB を、どの Workspace に置くかを考えます。
複数の App で共有する KB は、それらが入っている Workspace に置きます。

**保険会社A社の場合（③の結論）**
営業部門と CS 部門で権限とデータを分けたいので、Workspace を部門単位で分けます。

\`\`\`
Workspace: 営業部
├── App: 提案書作成アシスタント（① Workflow）
└── KB: 営業トークスクリプト

Workspace: CS部
├── App: 問い合わせ対応ボット（① Chatbot + RAG）
└── KB: CS対応履歴

共通参照 KB: 商品マニュアル（②で共有できる単位に設計）
　└ 両方の Workspace の App から参照
\`\`\`
※ Workspace をまたいで KB を共有する話は Enterprise 以上の構成パターンで、101B 以降で詳しく扱います。

**パートナーとしてのヒアリング手順**：
お客様の話を聞いたら、①→②→③の順で以下を確認します：
1. 「どんな業務に使いますか？」→ ① App の種類と実行モデル
2. 「参照するドキュメントは何ですか？／部門間で共有しますか？」→ ② KB の共有設計
3. 「誰が使いますか？／権限やデータは部門ごとに分けますか？」→ ③ Workspace の分け方

**よくある設計のアンチパターン**
- 全社で1つの Workspace にまとめてしまい、権限設計が破綻する
- App ごとに KB を作りすぎて、同じ内容を何度も更新することになる
- 本番運用が始まってから「やはり部門で分けたい」と要望が出て、作り直しが発生する

最初の設計の時点で、将来の組織の広がりを見越して構成してください。
      `,
    },

    // Requirements-to-Structure Cheatsheet
    {
      layout: 'diagram',
      slideTitle: '要件→構造マッピング チートシート',
      subtitle: 'お客様の発言を①②③に振り分けるための確認質問',
      slot: `
<div class="w-full max-w-[60rem] mx-auto mt-2">
  <table class="w-full text-[0.75rem] border-collapse shadow-sm">
    <thead>
      <tr class="bg-slate-700 text-white">
        <th class="p-2 border border-slate-600 text-center w-[3.5rem]">問い</th>
        <th class="p-2 border border-slate-600 text-left">顧客発言の例</th>
        <th class="p-2 border border-slate-600 text-left">聞くべき確認質問</th>
        <th class="p-2 border border-slate-600 text-left">マッピング先</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white hover:bg-blue-50">
        <td class="p-2 border border-slate-300 text-center">
          <div class="bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-[0.85rem] font-bold mx-auto">①</div>
        </td>
        <td class="p-2 border border-slate-300 leading-snug">「営業が顧客ごとに提案書を作りたい」「社内 FAQ に自動で答えたい」</td>
        <td class="p-2 border border-slate-300 leading-snug">・対話は必要？<br>・毎回の出力形態は固定？<br>・外部ツール呼び出しはある？</td>
        <td class="p-2 border border-slate-300 leading-snug"><strong class="text-blue-700">App と実行モデル</strong><br>Workflow / Chatbot / Chatflow / Agent / Content Gen</td>
      </tr>
      <tr class="bg-slate-50 hover:bg-emerald-50">
        <td class="p-2 border border-slate-300 text-center">
          <div class="bg-emerald-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-[0.85rem] font-bold mx-auto">②</div>
        </td>
        <td class="p-2 border border-slate-300 leading-snug">「製品マニュアルや規程を参照したい」「過去の対応履歴を検索させたい」</td>
        <td class="p-2 border border-slate-300 leading-snug">・何を参照する？<br>・複数の用途から使う？<br>・改定頻度は？</td>
        <td class="p-2 border border-slate-300 leading-snug"><strong class="text-emerald-700">Knowledge Base</strong><br>共有単位で設計、App ごとに複製しない</td>
      </tr>
      <tr class="bg-white hover:bg-purple-50">
        <td class="p-2 border border-slate-300 text-center">
          <div class="bg-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-[0.85rem] font-bold mx-auto">③</div>
        </td>
        <td class="p-2 border border-slate-300 leading-snug">「部門ごとに権限とデータを分けたい」「監査ログや SSO が必要」</td>
        <td class="p-2 border border-slate-300 leading-snug">・誰が使う？<br>・データの見せ分けは？<br>・監査・SSO 要件は？</td>
        <td class="p-2 border border-slate-300 leading-snug"><strong class="text-purple-700">Workspace の分け方</strong><br>監査や SSO が必要なら Enterprise を検討</td>
      </tr>
    </tbody>
  </table>

  <div class="mt-3 text-[0.7rem] text-slate-500 text-center">※ そのまま商談のヒアリング順として使えます</div>
</div>
    `.trim(),
      notes: `
【要件→構造マッピング チートシート：2分】
お客様から要件を聞いたら、この表の順で確認質問を投げて、回答を①②③の設計に落としていきます。

**使い方**
1. お客様の発言が①②③のどの問いに関わるかを見分ける
2. 対応する「確認質問」列を投げて、回答をもらう
3. 「マッピング先」列に従って、Dify の構造へ落とし込む

**保険会社A社の例で一通りやってみる**
- お客様「営業が提案書を作りたい」→ ①：対話なし・固定手順 → **Workflow**
- お客様「CS が問い合わせ対応したい」→ ①：対話あり・シンプルな Q&A → **Chatbot + RAG**
- お客様「商品マニュアルを両方の App から使いたい」→ ②：複数 App で共有 → **共通 KB**
- お客様「部門ごとに権限とデータを分けたい」→ ③：部門分離 → **Workspace 分割**
- お客様「監査ログと SSO が必要」→ ③：統制要件 → **Enterprise 契約へ誘導**（※監査ログは Enterprise テナント全体で1本。Workspace ごとの分離はできない）

**Workspace でできないこと（パートナー必須知識）**
「予算を分けたい」「部門別に LLM 費用の上限を設定したい」「部門ごとに監査ログを分けたい」というご要望には、Dify 側では応えられません。
- Enterprise は Workspace 単位の課金ではない
- LLM コストを部門別に制限する機能はない
- 監査ログはテナント全体で1本（誰がログインしたか／誰が App を作ったか、といった共通ログ）

このときの回答は「Dify の Workspace では権限とデータを分けられます。コスト按分や部門別の監査ログは、LLM プロバイダの請求分離や社内の運用ルールで対応してください」となります。

**このスライドはパートナーに持ち帰ってもらう想定です**
研修の後、実際の商談の前にこのページを開きながらヒアリングすることで、
①→②→③の順に漏れなく要件を引き出せます。

**アンチパターン**：
- お客様の技術用語に引きずられて「こういう機能がほしい」という言葉で考え始めると、実行モデルの選び方を間違えます
- まず「何を作るか」「何を参照させるか」「どう統制するか」に翻訳してから、Dify の構造に落とし込んでください
      `,
    },

    // Part 3 Summary
    {
      layout: 'macro-focus',
      slideTitle: '章のまとめ（Part 3）',
      items: [
        '① 何を作る：実行モデル（Content Generation / Chatbot / Agent / Workflow / Chatflow）で、体験と制御の型を決める',
        '② 何を参照させる：Knowledge Base は App ごとではなく、共有できる単位で設計する',
        '③ どう統制する：Workspace を部門・プロジェクト単位で分けて、権限とデータの仕切りを先に決める'
      ],
      notes: `
【Part 3 まとめ：1分】
Part 3 のポイントを「3つの問い」で整理します。

**① 何を作る**
実行モデルを「体験の型 × 動かし方の型」で切る判断軸を身につけました。
保険会社A社の例では、営業は Workflow、CS は Chatbot + RAG に落ちました。

**パートナーとしてのチェックポイント**：
- Workflow / Chatflow / Agent の選択基準を説明できますか？
- App タイプの選択基準を説明できますか？

**② 何を参照させる**
Knowledge Base は App ごとではなく、共有できる単位で設計します。
保険会社A社の例では「商品マニュアル」を1つの共通 KB にまとめ、両方の App から参照する形になりました。

**パートナーとしてのチェックポイント**：
- RAG の4ステップを説明できますか？
- 「KB は App ごとに作らない」理由を説明できますか？

**③ どう統制する**
Workspace は Dify の一番外側の仕切りです。これを部門単位で分ければ、中の App も KB もまるごと別の部屋になり、「誰が触れるか／どのデータが見えるか」を部門ごとに切り分けられます。
保険会社A社の例では、営業部 Workspace と CS部 Workspace に分けて、商品マニュアル KB は両方から参照できる共通の置き場としました。
※ ただし Workspace を分けても、部門別に LLM 費用を絞ったり、監査ログを部門別に切り分けたりはできません（監査ログは Enterprise 全体で1本）。

**パートナーとしてのチェックポイント**：
- Workspace を部門で分けるべき理由を説明できますか？
- 典型的な構成パターンを3つ挙げられますか？

**ここまで来られたら**
お客様の要件を聞いたら、①→②→③の順でその場で設計図が描ける状態を目指します。
「この要件なら、この構成で実現できます」と商談で即答できるようになれば、Part 3 は達成です。

**振り返り**：
上のチェックポイントに自信を持って答えられるか、振り返ってみてください。
不安なところは、あとで資料を見返して復習してください。

では最後の Part 4 に進みます。
      `,
    },

    // Section: User Journey
    {
      layout: 'section',
      slideTitle: '第4章：提案から運用までの支援導線',
      notes: `
【セクション移行：1分】
Part 4「提案から運用までの支援導線」に入ります。

このパートでは、Dify の使い方説明ではなく、
パートナーとして何をどの順で支援メニュー化するかを整理します。

**全体の見取り図（このパートで扱うフェーズ）**
- 商談デモ：10分で「本番まで見える」を伝える型
- Phase 1：PoC 支援（2週間〜1ヶ月）
- Phase 2：本番化支援（1〜2ヶ月）
- Phase 3：運用サポート（月額契約）

**このパートの目的**
- 各フェーズで何を支援するかを明確にする
- 本番公開時の論点を整理する
- 運用改善を継続契約につなげる観点を持つ

**パートナーとしての価値**
- PoC 支援で終わらず、本番化と運用まで一貫して提案できることが勝ち筋です
- このパートは、その支援パッケージの骨子です
      `,
    },

    // Demo Scenario
    {
      layout: 'presenter-compact',
      slideTitle: '商談デモ：10分で本番まで見せる型',
      subtitle: '「作れる」ではなく「本番まで見える」を伝える',
      name: '商談での見せ方',
      description: 'App を作るだけで終わらせず、Knowledge Base・Trace・本番導線まで一気に見せます',
      details: [
        '1. 業務課題を一言で置く：誰の、どの業務を、何分短縮するか',
        '2. App 作成：Chatbot または Workflow を選び、最小構成で起動',
        '3. Knowledge Base 接続：顧客業務に近い文書を読み込ませる',
        '4. 回答確認：Preview で質問し、期待値との差分を会話する',
        '5. Trace 確認：どこを直せば改善するかを可視化する',
        '6. 本番導線：権限、公開形態、運用指標まで接続する'
      ],
      imageUrl: '/assets/image/dify-quickstart.png',
      notes: `
【商談デモの標準シナリオ：4分】
ここはハンズオン説明ではなく、商談での見せ方を揃えるスライドです。
目的は「作れる」ではなく「このまま本番化できそうだ」と思ってもらうことです。

**デモの順番は固定してください**
1. 課題を一言で置く
2. App を立ち上げる
3. Knowledge Base をつなぐ
4. 回答を見る
5. Trace で改善点を示す
6. 公開形態と運用論点までつなぐ

**重要なのは Trace まで見せること**
単に答えが返るだけだと ChatGPT の延長に見えます。
「どこを直せば良くなるか」が見えるところまで出して、改善可能性を示してください。

**その場で言うべき締めの一言**
「ここまでが10分、その後に権限・公開・運用を付けると本番化の議論に入れます」

**パートナー実務のポイント**
事前に業界文書を入れた KB を1つ持っておく
業務質問を3つ準備しておく
最後に必ず API / WebApp / 権限の話へつなぐ
      `,
    },

    // User Journey 1
    {
      layout: 'presenter-compact',
      slideTitle: 'Phase 1：PoC 支援（2週間〜1ヶ月）',
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
      imageUrl: '/assets/image/dify-develop.png',
      notes: `
【Phase 1：PoC 支援：2.5分】
最初の支援フェーズは、環境を作ることではなく、
最初の業務成果を最短で出すことです。

**ステップ 1：Workspace セットアップ**
最初にモデルプロバイダーを設定します。
OpenAI、Azure OpenAI、Anthropic などの API キーを登録。
Enterprise 版ではメンバーとロールの管理もここで行います。

**パートナーとしての支援ポイント**：
- API キーの取得方法がわからないお客様が多い
- Azure OpenAI の場合、Azure 側のリソース設定も必要
- 「最初の設定」をサポートするサービスメニューがあると良い

**ステップ 2：App 作成**
「Create App」からアプリを新規作成します。
- タイプを選択（Chatbot / Agent / Workflow など）
- Prompt を設定
- 必要に応じて変数、Tools、Knowledge Base を接続

GUI で設定できるので、コードを書く必要はありません。

**パートナーとしての支援ポイント**：
- 最初の App 作成を一緒にやるワークショップが効果的
- お客様の業務に合わせたサンプル Prompt を事前に用意しておく
- 「この業界なら、こういう App が役立つ」という事例を持っておく

**ステップ 3：デバッグ & トレース**
右側の Preview パネルで実際に動かしながらデバッグします。
Tracing を有効にすると、各ノードの入出力、処理時間を確認できます。

「思った通りの回答が返ってこない」というときは、
Tracing で「どこで何が起きているか」を追跡します。
ブラックボックスではなく、可視化されているのが Dify の強みです。

**パートナーとしての支援ポイント**：
- デバッグ方法のトレーニングは継続サポートの価値を示す機会
- 「うまくいかない」ときにすぐ相談できる窓口を提供する
- チューニングのベストプラクティスを提供できると差別化になる

**提案のポイント**：
このフェーズでは「設定支援」だけでなく、
最初のユースケースを一緒に立ち上げることまでを契約範囲に入れてください。

**推奨する導入支援メニュー**
- Day 0：環境初期設定（モデル、権限、監査方針）
- Day 7：ユースケース別ワークショップ（業務部門同席）
- Day 30：PoCレビュー（KPI判定と本番化計画）
      `,
    },

    // User Journey 2
    {
      layout: 'presenter-compact',
      slideTitle: 'Phase 2：本番化支援（1〜2ヶ月）',
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
      imageUrl: '/assets/image/dify-webapp.png',
      notes: `
【Phase 2：本番化支援：2.5分】
PoC の手応えがつかめたら、本番公開の設計に入ります。
作ったものをどう届け、どんな形で使ってもらうかを決めていきます。

**公開形態は3つ：**

1. **WebApp**
   エンドユーザーが直接ブラウザでアクセスする形式。
   URL を共有するだけで使い始められます。

   **適用シーン**：社内ポータル、FAQ サイト、顧客向けサポート窓口

2. **API Endpoint**
   業務システムに統合する形式。
   REST API として呼び出せるので、既存システムに組み込めます。

   **適用シーン**：CRM 連携、社内システム組み込み、モバイルアプリ

3. **Extension**
   ブラウザ拡張としてサイドバーから呼び出す形式。
   Chrome 拡張などで、どのページからでもアクセス可能。

   **適用シーン**：営業支援、調査業務、メール作成補助

**アクセス制御は4段階：**
- 公開（誰でもアクセス可）
- パスワード保護
- メンバー限定（ログイン必須）
- API Key（プログラムからのアクセス用）

**よくある質問への回答**：
Q：「社内だけに公開したいんですが」
A：「メンバー限定に設定すれば、Dify にログインしているユーザーだけがアクセスできます。
   Enterprise 版なら SSO 連携も可能なので、社内認証基盤と繋げられます。」

Q：「既存のシステムに AI 機能を追加したいんですが」
A：「API Endpoint として公開すれば、既存システムから呼び出せます。
   REST API なので、どの言語からでも連携できます。」

**パートナーとしての支援ポイント**：
- 公開方法の選定はお客様のユースケース次第
- API 連携の場合、既存システム側の開発支援も提案できる
- SSO 連携の設定は Enterprise 導入支援の一部として提供

PoC で作ったものを本番へつなぐときは、
公開形態とアクセス制御を最初に決めると話が前に進みます。
      `,
    },

    // User Journey 3
    {
      layout: 'cards',
      slideTitle: 'Phase 3：運用サポート（月額契約）',
      items: [
        { title: '運用の視点', description: '効果・コスト・安定性をモニタリング', icon: 'users', color: 'blue' },
        { title: 'Monitor', description: 'トークン消費、レスポンス時間、エラー率を可視化', icon: 'bar-chart', color: 'green' },
        { title: 'Logs', description: '履歴照会、Good / Bad サンプルのアノテーション', icon: 'file-text', color: 'black' },
        { title: '継続的改善', description: 'データに基づき Prompt / KB を最適化、テンプレート蓄積', icon: 'recycle', color: 'purple' },
      ],
      notes: `
【Phase 3：運用サポート：2.5分】
最後のフェーズは、稼働後の定着と横展開です。

公開して終わりではありません。本番運用が始まってからが本番です。
ここが継続的なパートナー価値を発揮するポイントです。

**運用の視点**
効果、コスト、安定性の3つをモニタリングします。
「ちゃんと役に立っているか」「コストは適切か」「エラーは出ていないか」。

**お客様への説明例**：
「AI を導入したら終わりではありません。
 継続的に効果を測定し、改善していく必要があります。
 Dify はそのための仕組みを標準で提供しています。」

**Monitor 機能**
ダッシュボードでトークン消費、レスポンス時間、エラー率を可視化。
異常があればすぐに気づけます。

**パートナーとしての支援ポイント**：
- 月次レポートの作成代行サービス
- コスト最適化のアドバイス
- 異常検知時のアラート設定支援

**Logs 機能**
過去のやり取りを履歴照会できます。
Good / Bad のアノテーションを付けて、
「良い回答」「悪い回答」をマークしておけます。

**パートナーとしての支援ポイント**：
- 定期的なログレビュー会の開催
- Bad サンプルの分析と改善提案
- 品質評価レポートの作成

**継続的改善**
ログデータに基づいて Prompt や Knowledge Base を最適化。
うまくいったパターンはテンプレートとして蓄積し、
チーム全体で再利用できるようにします。

**パートナーとしての支援ポイント**：
- Prompt チューニングのサポート
- Knowledge Base の更新・メンテナンス支援
- 新しいユースケースの提案

**パートナービジネスの観点**：
この運用フェーズこそ、継続的な収益を生むポイントです。
- 月額の運用サポート契約
- 四半期ごとの改善提案サービス
- 新機能リリース時のアップデート支援

「売って終わり」ではなく、「一緒に育てていく」パートナーを目指しましょう。

**運用契約で合意すべきKPI**
- 利用率（WAU/MAU）
- 業務削減時間
- 回答品質（Good/Bad比率）
- トークン単価と総コスト推移

KPIを運用契約に入れると、改善提案の説得力が大きく上がります。
      `,
    },

    // Part 4 Summary
    {
      layout: 'macro-focus',
      slideTitle: '章のまとめ（Part 4）',
      items: [
        '商談は段階で分ける：商談デモ → PoC 支援 → 本番化支援 → 運用サポート',
        '長く効くのは後半：PoC 支援より、本番化と運用のほうが収益が続く',
        '売るのは伴走：トレーニング提供ではなく、KPI 改善に付き合う提案にする'
      ],
      notes: `
【Part 4 まとめ：1分】
Part 4 のポイントを3つにまとめます。

**1つ目：商談は段階で分ける**
商談デモ → PoC 支援 → 本番化支援 → 運用サポート、の4ステップで切り分けると、
提案が通しやすく、各フェーズで期待値を揃えやすくなります。

**2つ目：長く効くのは後半**
PoC 支援だけで終わらせず、本番化と運用まで入れ込むと、
パートナービジネスとして収益が続きやすくなります。

**パートナーサービスの構成例**：
- 商談デモ：10分で「本番まで見える」型を作る
- Phase 1：PoC 支援（2週間〜1ヶ月）
- Phase 2：本番化支援（1〜2ヶ月）
- Phase 3：運用サポート（月額契約）
- オプション：ユーザートレーニング、チューニング支援

**3つ目：売るのは伴走**
トレーニング提供ではなく、KPI 改善に付き合う提案にしてください。

**運用契約で合意すべき KPI**
- 利用率（WAU / MAU）
- 業務削減時間
- 回答品質（Good / Bad 比率）
- トークン単価と総コスト推移

KPI を運用契約に入れると、改善提案の説得力が大きく上がります。

**最終メッセージ**
受注の軸は「ライセンス販売」ではなく「成果責任の設計」です。
PoC → 本番化 → 運用の一貫支援で提案してください。

**ただし注意（期待値合わせ）**
ここでいう「成果責任」は、KPI 達成に向けた**伴走コミットメント**を指します。
契約上の成果保証（未達時の返金等）を意味するものではありません。
提案書では「成果目標」と「契約上の責任範囲」を必ず分けて明記し、
顧客と期待値を揃えてから署名してください。

以上で本日のコンテンツは終了です。
      `,
    },

    // End Slide
    {
      layout: 'end',
      subtitle: 'Thank you for watching!',
      website: 'https://dify.ai',
      email: 'r.hashimoto@dify.ai',
      github: 'langgenius/dify',
      notes: `
【クロージング：2分】
本日は Dify 101A「製品価値と位置付け」をお届けしました。

**振り返りますと：**
- **Part 1**：Dify の製品概要とライセンス
  → 「Dify とは何か」を30秒で説明できるようになった
- **Part 2**：なぜ Dify を選ぶべきか、競争優位性
  → 「なぜ Dify なのか」に自信を持って答えられるようになった
- **Part 3**：Workspace / App / KB の構造
  → お客様の要件を Dify の構造に落とし込めるようになった
- **Part 4**：ユーザージャーニー
  → 導入支援サービスの設計イメージを持てるようになった

**パートナーとしての次のステップ**：
1. 今日学んだ内容を元に、自分でデモ環境を作ってみてください
2. 101B のハンズオンコースに参加して、実践スキルを身につけてください
3. 既存のお客様に「Dify をご存知ですか？」と話題を振ってみてください

**パートナー支援について**：
- 商談同行、デモ支援が必要な場合はご連絡ください
- 技術的な質問は Slack チャンネルで随時対応します
- 四半期ごとにパートナーミーティングで最新情報をシェアします

**次回予告：Dify 101B**
次回のコースでは、実際に手を動かしてアプリを作ります。
- Agent の作成
- Knowledge Base の設定
- Workflow の構築
- デバッグとチューニング

101A の知識を元に、実践スキルを身につけましょう。

ご質問があれば、いつでもお問い合わせください。
本日はありがとうございました。
      `,
    },
  ],
};
