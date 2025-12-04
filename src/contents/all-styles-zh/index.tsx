import React from 'react';
import { SlideData, SlideType } from '../../engine/types';
import { 
  Layout, MessageSquare, Zap, Shield, Globe, Database, Code, 
  User, Terminal, Server, Cloud, Lock, Layers, GitBranch,
  CheckCircle, Box, BarChart, Cpu, Users, FileText,
  BookOpen, AlertCircle, HelpCircle, Info
} from 'lucide-react';
import { AUTHOR_INFO } from '../common';

export const SLIDES: SlideData[] = [
  // 1. TITLE
  {
    id: 1,
    type: SlideType.TITLE,
    title: "Dify 模板展示",
    subtitle: "全样式演示与使用指南",
    footer: "视觉设计系统"
  },
  // 2. PRESENTER
  {
    id: 2,
    type: SlideType.PRESENTER,
    title: "讲师介绍",
    subtitle: "AI 系统专家",
    content: [
      `**${AUTHOR_INFO.name}**`,
      AUTHOR_INFO.title,
      "资深解决方案架构师",
      "10年+ 企业级软件开发经验",
      "专注于 LLM 工程化落地"
    ],
    visualContent: (
        <div className="flex flex-col items-center justify-center h-full text-slate-400">
          <div className="w-48 h-48 rounded-full bg-slate-200 flex items-center justify-center mb-6 border-4 border-white shadow-lg">
            <User size={80} className="text-slate-400"/>
          </div>
        </div>
    )
  },
  // 3. COURSE_OVERVIEW
  {
    id: 3,
    type: SlideType.COURSE_OVERVIEW,
    title: "课程概览",
    subtitle: "今天的内容涵盖",
    content: [
      "全面了解 Dify 幻灯片设计系统及其能力。",
      "帮助创作者高效构建专业、一致且视觉吸引力强的演示文稿。",
      "本模块涵盖所有 20+ 种幻灯片布局、组件使用及定制选项。"
    ]
  },
  // 4. SECTION
  {
    id: 4,
    type: SlideType.SECTION,
    title: "结构化幻灯片",
    subtitle: "构建叙事流的基石",
    footer: "第一部分"
  },
  // 5. CHAPTER_TITLE
  {
    id: 5,
    type: SlideType.CHAPTER_TITLE,
    title: "核心内容布局",
    content: [
      "基础文本内容",
      "分栏视图",
      "自适应布局"
    ]
  },
  // 6. CONTENT
  {
    id: 6,
    type: SlideType.CONTENT,
    title: "标准内容页",
    content: [
      "这是最基础的幻灯片类型，用于展示要点和文本。",
      "支持 **Markdown 风格的加粗** 以强调重点。",
      "您可以添加多个段落或列表项。",
      "1. 也支持手动输入的有序列表。",
      "2. 保持文本简洁清晰。"
    ]
  },
  // 7. SPLIT
  {
    id: 7,
    type: SlideType.SPLIT,
    title: "分栏布局",
    subtitle: "左文右图",
    content: [
      "非常适合解释图表、数据或图片。",
      "左侧放置叙述或说明文字。",
      "右侧是一个灵活的 React 容器。",
      "您可以放置代码块、SVG 或任何图片组件。"
    ],
    visualContent: (
      <div className="flex items-center justify-center h-full bg-slate-100 rounded-xl border border-slate-200 p-8">
        <div className="text-center">
          <Layout size={64} className="mx-auto text-dify-blue mb-4"/>
          <h3 className="text-xl font-bold text-slate-700">视觉区域</h3>
          <p className="text-slate-500">任意 React 节点</p>
        </div>
      </div>
    )
  },
  // 8. ADAPTIVE_CONTENT
  {
    id: 8,
    type: SlideType.ADAPTIVE_CONTENT,
    title: "自适应内容",
    subtitle: "居中布局，适合高亮声明",
    content: [
      "此布局将内容水平居中。",
      "最适合简短、有力的列表或名言。",
      "将视线集中在屏幕中央。",
      "非常适合总结点或简单步骤。"
    ]
  },
  // 9. SECTION: LISTS & GRIDS
  {
    id: 9,
    type: SlideType.SECTION,
    title: "列表与网格",
    subtitle: "组织复杂信息",
    footer: "第二部分"
  },
  // 10. CARDS
  {
    id: 10,
    type: SlideType.CARDS,
    title: "特性卡片",
    subtitle: "3-4 个关键项的网格布局",
    items: [
      {
        title: "高性能",
        description: "经过优化的引擎带来的高速处理能力。",
        icon: <Zap className="text-yellow-500"/>
      },
      {
        title: "安全性",
        description: "企业级加密与角色权限管理。",
        icon: <Shield className="text-green-500"/>
      },
      {
        title: "可扩展",
        description: "支持百万级用户的水平扩展能力。",
        icon: <Globe className="text-blue-500"/>
      },
      {
        title: "高可靠",
        description: "99.99% 的正常运行时间 SLA 保证。",
        icon: <Database className="text-purple-500"/>
      }
    ]
  },
  // 11. ACCORDION
  {
    id: 11,
    type: SlideType.ACCORDION,
    title: "手风琴列表",
    subtitle: "顺序或详细分解",
    items: [
      {
        title: "第一步：摄入",
        description: "从各种来源收集并归一化数据。",
        icon: <Box className="text-dify-blue"/>
      },
      {
        title: "第二步：处理",
        description: "LLM 分析并转换数据。",
        icon: <Cpu className="text-dify-blue"/>
      },
      {
        title: "第三步：输出",
        description: "通过 API 或 UI 交付结果。",
        icon: <Terminal className="text-dify-blue"/>
      }
    ]
  },
  // 12. FOCUS_COLS
  {
    id: 12,
    type: SlideType.FOCUS_COLS,
    title: "焦点列",
    subtitle: "突出关键指标或概念",
    content: [
      "此布局将屏幕分割。",
      "左侧用于展示大号高亮。",
      "右侧用于详细解释。"
    ],
    items: [
      {
        title: "效率",
        description: "降低 40% 的运营成本。"
      },
      {
        title: "速度",
        description: "比传统方法部署快 10 倍。"
      },
      {
        title: "质量",
        description: "保持一致的高标准。"
      }
    ],
    visualContent: (
      <div className="flex flex-col items-center justify-center h-full text-dify-blue">
        <span className="text-8xl font-bold">10倍</span>
        <span className="text-2xl uppercase tracking-widest mt-2">更快</span>
      </div>
    )
  },
  // 13. PILLARS
  {
    id: 13,
    type: SlideType.PILLARS,
    title: "战略支柱",
    subtitle: "用于核心能力的垂直列布局",
    content: ["企业架构"],
    items: [
      {
        title: "云原生",
        description: "专为 K8s 和 Docker 环境构建。",
        icon: <Cloud />,
        features: ["自动扩缩容", "容器化"]
      },
      {
        title: "安全优先",
        description: "符合 SOC2 和 GDPR 标准。",
        icon: <Lock />,
        features: ["SSO 单点登录", "审计日志"]
      },
      {
        title: "开放平台",
        description: "可扩展的 API 和插件系统。",
        icon: <GitBranch />,
        features: ["REST API", "Webhooks"]
      },
      {
        title: "数据分析",
        description: "深入洞察使用模式。",
        icon: <BarChart />,
        features: ["实时监控", "自定义报表"]
      }
    ]
  },
  // 14. MATRIX
  {
    id: 14,
    type: SlideType.MATRIX,
    title: "对比矩阵",
    subtitle: "特性对比或权限表",
    tableData: {
      headers: ["功能", "免费版", "专业版", "企业版"],
      rows: [
        ["用户数", "1", "5", "无限"],
        ["存储空间", "1GB", "10GB", "无限"],
        ["技术支持", "社区", "邮件", "7x24 专属"],
        ["SLA", "-", "99.9%", "99.99%"]
      ]
    }
  },
  // 15. SECTION: SPECIALIZED
  {
    id: 15,
    type: SlideType.SECTION,
    title: "专用页面",
    subtitle: "定价、授权、FAQ 等",
    footer: "第三部分"
  },
  // 16. DIAGRAM
  {
    id: 16,
    type: SlideType.DIAGRAM,
    title: "系统架构",
    subtitle: "可视化流程",
    content: [
      "图表页最大化了视觉区域。",
      "用于展示复杂的架构图。",
      "支持 SVG 或任何 React 组件。"
    ],
    visualContent: (
      <div className="w-full h-full bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center">
        <div className="text-slate-400 font-mono text-xl">架构图占位符</div>
      </div>
    )
  },
  // 17. PRICING
  {
    id: 17,
    type: SlideType.PRICING,
    title: "定价方案",
    subtitle: "透明的扩展选项",
    items: [
      {
        title: "入门版",
        price: "¥0",
        priceUnit: "/月",
        description: "个人使用",
        features: ["1 用户", "基础支持", "1 个项目"],
        topBarColor: "bg-gray-400"
      },
      {
        title: "专业版",
        price: "¥399",
        priceUnit: "/月",
        description: "成长型团队",
        features: ["5 用户", "优先支持", "无限项目"],
        topBarColor: "bg-dify-blue",
        badge: "最受欢迎"
      },
      {
        title: "企业版",
        price: "定制",
        priceUnit: "",
        description: "大型组织",
        features: ["无限用户", "专属客户经理", "SLA 保障"],
        topBarColor: "bg-slate-900"
      }
    ]
  },
  // 18. LICENSE
  {
    id: 18,
    type: SlideType.LICENSE,
    title: "授权模式",
    subtitle: "开源 + 商业化",
    content: ["我们采用双重授权模式以确保自由与可持续性。"],
    items: [
      {
        title: "Apache 2.0",
        description: "核心框架开源。",
        icon: <BookOpen size={40} />
      },
      {
        title: "商业授权",
        description: "企业级功能需要商业授权。",
        icon: <Lock />
      },
      {
        title: "云服务",
        description: "托管订阅服务。",
        icon: <Cloud />
      }
    ]
  },
  // 19. FAQ
  {
    id: 19,
    type: SlideType.FAQ,
    title: "常见问题",
    items: [
      {
        title: "我可以自定义颜色吗？",
        description: "是的，系统使用 Tailwind CSS，可以轻松进行主题定制。"
      },
      {
        title: "它兼容 MDX 吗？",
        description: "当前的架构使用 TypeScript 对象，但可以适配。"
      },
      {
        title: "如何添加图片？",
        description: "导入图片并将其传递给 visualContent 属性。"
      }
    ]
  },
  // 20. STORY
  {
    id: 20,
    type: SlideType.STORY,
    title: "起源故事",
    subtitle: "我们为什么构建这个",
    content: [
      "我们认为现有的演示工具对开发者来说太过僵化。",
      "我们希望能够用代码和组件来表达想法。",
      "这个模板就是这一愿景的成果，结合了 React 的强大功能与幻灯片的简洁性。"
    ],
    visualContent: (
       <div className="w-full h-full bg-slate-800 flex items-center justify-center">
         <span className="text-6xl">🚀</span>
       </div>
    )
  },
  // 21. MACRO_FOCUS
  {
    id: 21,
    type: SlideType.MACRO_FOCUS,
    title: "关键要点",
    content: [
      "使用一致的布局",
      "每页专注于一个想法",
      "视觉应辅助文本",
      "保持简单"
    ]
  },
  // 22. KEY_TAKEAWAYS
  {
    id: 22,
    type: SlideType.KEY_TAKEAWAYS,
    title: "总结",
    subtitle: "最后的思考",
    content: [
      "灵活的系统",
      "开发者友好",
      "基于组件",
      "开箱即用"
    ]
  },
  // 23. END
  {
    id: 23,
    type: SlideType.END,
    title: "问答环节",
    subtitle: "感谢观看",
    footer: "Email: hello@dify.ai | GitHub: dify"
  }
];

