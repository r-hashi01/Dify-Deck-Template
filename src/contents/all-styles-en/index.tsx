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
    title: "Dify Template Gallery",
    subtitle: "Showcase of All Available Slide Styles",
    footer: "Visual Design System"
  },
  // 2. PRESENTER
  {
    id: 2,
    type: SlideType.PRESENTER,
    title: "Your Instructor",
    subtitle: "Expert in AI Systems",
    content: [
      `**${AUTHOR_INFO.name}**`,
      AUTHOR_INFO.title,
      "Senior Solution Architect",
      "10+ years in Enterprise Software",
      "Specialized in LLM Engineering"
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
    title: "Module Overview",
    subtitle: "What we will cover today",
    content: [
      "To provide a comprehensive understanding of the Dify Slide Design System and its capabilities.",
      "Enable creators to build professional, consistent, and visually engaging presentations efficiently.",
      "This module covers all 20+ slide layouts, component usage, and customization options."
    ]
  },
  // 4. SECTION
  {
    id: 4,
    type: SlideType.SECTION,
    title: "Structural Slides",
    subtitle: "Building blocks for your narrative flow",
    footer: "Part 01"
  },
  // 5. CHAPTER_TITLE
  {
    id: 5,
    type: SlideType.CHAPTER_TITLE,
    title: "Core Content Layouts",
    content: [
      "Basic Text Content",
      "Split Views",
      "Adaptive Layouts"
    ]
  },
  // 6. CONTENT
  {
    id: 6,
    type: SlideType.CONTENT,
    title: "Standard Content Slide",
    content: [
      "This is the most basic slide type used for bullet points and text.",
      "It supports **markdown-style bolding** for emphasis.",
      "You can add multiple paragraphs or list items.",
      "1. Ordered lists are also supported manually.",
      "2. Keep text concise and legible."
    ]
  },
  // 7. SPLIT
  {
    id: 7,
    type: SlideType.SPLIT,
    title: "Split Layout",
    subtitle: "Text on Left, Visual on Right",
    content: [
      "Ideal for explaining a diagram, chart, or image.",
      "The left side holds the narrative or explanation.",
      "The right side is a flexible React container.",
      "You can put code blocks, SVGs, or images here."
    ],
    visualContent: (
      <div className="flex items-center justify-center h-full bg-slate-100 rounded-xl border border-slate-200 p-8">
        <div className="text-center">
          <Layout size={64} className="mx-auto text-dify-blue mb-4"/>
          <h3 className="text-xl font-bold text-slate-700">Visual Area</h3>
          <p className="text-slate-500">Any React Node</p>
        </div>
      </div>
    )
  },
  // 8. ADAPTIVE_CONTENT
  {
    id: 8,
    type: SlideType.ADAPTIVE_CONTENT,
    title: "Adaptive Content",
    subtitle: "Centered layout for high-impact statements",
    content: [
      "This layout centers the content horizontally.",
      "Best for short, punchy lists or quotes.",
      "It draws focus to the middle of the screen.",
      "Great for summary points or simple steps."
    ]
  },
  // 9. SECTION: LISTS & GRIDS
  {
    id: 9,
    type: SlideType.SECTION,
    title: "Lists & Grids",
    subtitle: "Organizing complex information",
    footer: "Part 02"
  },
  // 10. CARDS
  {
    id: 10,
    type: SlideType.CARDS,
    title: "Feature Cards",
    subtitle: "Grid layout for 3-4 key items",
    items: [
      {
        title: "Performance",
        description: "High-speed processing with optimized engines.",
        icon: <Zap className="text-yellow-500"/>
      },
      {
        title: "Security",
        description: "Enterprise-grade encryption and role management.",
        icon: <Shield className="text-green-500"/>
      },
      {
        title: "Scalability",
        description: "Horizontal scaling support for millions of users.",
        icon: <Globe className="text-blue-500"/>
      },
      {
        title: "Reliability",
        description: "99.99% uptime SLA guaranteed.",
        icon: <Database className="text-purple-500"/>
      }
    ]
  },
  // 11. ACCORDION
  {
    id: 11,
    type: SlideType.ACCORDION,
    title: "Accordion List",
    subtitle: "Sequential or detailed breakdown",
    items: [
      {
        title: "Step 1: Ingestion",
        description: "Data is collected from various sources and normalized.",
        icon: <Box className="text-dify-blue"/>
      },
      {
        title: "Step 2: Processing",
        description: "LLMs analyze and transform the data.",
        icon: <Cpu className="text-dify-blue"/>
      },
      {
        title: "Step 3: Output",
        description: "Results are delivered via API or UI.",
        icon: <Terminal className="text-dify-blue"/>
      }
    ]
  },
  // 12. FOCUS_COLS
  {
    id: 12,
    type: SlideType.FOCUS_COLS,
    title: "Focus Columns",
    subtitle: "Highlighting a key metric or concept",
    content: [
      "This layout splits the screen.",
      "Left side is for a large highlight.",
      "Right side is for detailed explanation."
    ],
    items: [
      {
        title: "Efficiency",
        description: "Reduce operational costs by 40%."
      },
      {
        title: "Speed",
        description: "Deploy 10x faster than traditional methods."
      },
      {
        title: "Quality",
        description: "Maintain consistent high standards."
      }
    ],
    visualContent: (
      <div className="flex flex-col items-center justify-center h-full text-dify-blue">
        <span className="text-8xl font-bold">10x</span>
        <span className="text-2xl uppercase tracking-widest mt-2">Faster</span>
      </div>
    )
  },
  // 13. PILLARS
  {
    id: 13,
    type: SlideType.PILLARS,
    title: "Strategic Pillars",
    subtitle: "Vertical columns for core capabilities",
    content: ["Enterprise Architecture"],
    items: [
      {
        title: "Cloud Native",
        description: "Built for K8s and Docker environments.",
        icon: <Cloud />,
        features: ["Auto-scaling", "Containerized"]
      },
      {
        title: "Security First",
        description: "SOC2 Compliant and GDPR ready.",
        icon: <Lock />,
        features: ["SSO", "Audit Logs"]
      },
      {
        title: "Open Platform",
        description: "Extensible API and plugin system.",
        icon: <GitBranch />,
        features: ["REST API", "Webhooks"]
      },
      {
        title: "Analytics",
        description: "Deep insights into usage patterns.",
        icon: <BarChart />,
        features: ["Real-time", "Custom Reports"]
      }
    ]
  },
  // 14. MATRIX
  {
    id: 14,
    type: SlideType.MATRIX,
    title: "Comparison Matrix",
    subtitle: "Feature comparison or Permission table",
    tableData: {
      headers: ["Feature", "Free", "Pro", "Enterprise"],
      rows: [
        ["Users", "1", "5", "Unlimited"],
        ["Storage", "1GB", "10GB", "Unlimited"],
        ["Support", "Community", "Email", "24/7 Dedicated"],
        ["SLA", "-", "99.9%", "99.99%"]
      ]
    }
  },
  // 15. SECTION: SPECIALIZED
  {
    id: 15,
    type: SlideType.SECTION,
    title: "Specialized Slides",
    subtitle: "Pricing, Licensing, FAQ, etc.",
    footer: "Part 03"
  },
  // 16. DIAGRAM
  {
    id: 16,
    type: SlideType.DIAGRAM,
    title: "System Architecture",
    subtitle: "Visualizing the flow",
    content: [
      "The diagram slide maximizes the visual area.",
      "Use it for complex architecture drawings.",
      "Supports SVG or any React component."
    ],
    visualContent: (
      <div className="w-full h-full bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center">
        <div className="text-slate-400 font-mono text-xl">Architecture Diagram Placeholder</div>
      </div>
    )
  },
  // 17. PRICING
  {
    id: 17,
    type: SlideType.PRICING,
    title: "Pricing Plans",
    subtitle: "Transparent scaling options",
    items: [
      {
        title: "Starter",
        price: "$0",
        priceUnit: "/mo",
        description: "For individuals",
        features: ["1 User", "Basic Support", "1 Project"],
        topBarColor: "bg-gray-400"
      },
      {
        title: "Pro",
        price: "$49",
        priceUnit: "/mo",
        description: "For growing teams",
        features: ["5 Users", "Priority Support", "Unlimited Projects"],
        topBarColor: "bg-dify-blue",
        badge: "Popular"
      },
      {
        title: "Enterprise",
        price: "Custom",
        priceUnit: "",
        description: "For large organizations",
        features: ["Unlimited Users", "Dedicated Success Manager", "SLA"],
        topBarColor: "bg-slate-900"
      }
    ]
  },
  // 18. LICENSE
  {
    id: 18,
    type: SlideType.LICENSE,
    title: "Licensing Model",
    subtitle: "Open Source + Commercial",
    content: ["We use a dual-license model to ensure freedom and sustainability."],
    items: [
      {
        title: "Apache 2.0",
        description: "Core Framework is open source.",
        icon: <BookOpen size={40} />
      },
      {
        title: "Commercial",
        description: "Enterprise features require a commercial license.",
        icon: <Lock />
      },
      {
        title: "Cloud Service",
        description: "Managed hosting subscription.",
        icon: <Cloud />
      }
    ]
  },
  // 19. FAQ
  {
    id: 19,
    type: SlideType.FAQ,
    title: "Frequently Asked Questions",
    items: [
      {
        title: "Can I customize the colors?",
        description: "Yes, the system uses Tailwind CSS and can be themed easily."
      },
      {
        title: "Is it compatible with MDX?",
        description: "The current architecture uses TypeScript objects, but can be adapted."
      },
      {
        title: "How do I add images?",
        description: "Import them and pass them to the visualContent prop."
      }
    ]
  },
  // 20. STORY
  {
    id: 20,
    type: SlideType.STORY,
    title: "The Origin Story",
    subtitle: "Why we built this",
    content: [
      "We believed that presentation tools were too rigid for developers.",
      "We wanted to express ideas using code and components.",
      "This template is the result of that vision, combining the power of React with the simplicity of a slide deck."
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
    title: "Key Takeaways",
    content: [
      "Use consistent layouts",
      "Focus on one idea per slide",
      "Visuals should support the text",
      "Keep it simple"
    ]
  },
  // 22. KEY_TAKEAWAYS
  {
    id: 22,
    type: SlideType.KEY_TAKEAWAYS,
    title: "Summary",
    subtitle: "Final thoughts",
    content: [
      "Flexible System",
      "Developer Friendly",
      "Component Based",
      "Ready to Use"
    ]
  },
  // 23. END
  {
    id: 23,
    type: SlideType.END,
    title: "Q&A",
    subtitle: "Thank you for watching",
    footer: "Email: hello@dify.ai | GitHub: dify"
  }
];

