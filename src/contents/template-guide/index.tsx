import React from 'react';
import { SlideData, SlideType } from '../../engine/types';
import { 
  Layout, MessageSquare, Zap, Shield, Globe, Database, Code
} from 'lucide-react';
import { AUTHOR_INFO } from '../common';

export const SLIDES: SlideData[] = [
  // 1. Cover
  {
    id: 1,
    type: SlideType.TITLE,
    title: "Template: How to Create a Deck",
    subtitle: "Dify Training Content Starter Kit",
    footer: "Internal Training Template"
  },
  // 2. Presenter
  {
    id: 2,
    type: SlideType.PRESENTER,
    title: "About the Speaker",
    subtitle: "Introduction",
    content: [
      `**${AUTHOR_INFO.name}**`,
      AUTHOR_INFO.title,
      AUTHOR_INFO.role,
      ...AUTHOR_INFO.expertise
    ],
    visualContent: (
      <div className="flex flex-col items-center justify-center h-full text-slate-400">
        <div className="w-32 h-32 rounded-full bg-slate-200 flex items-center justify-center mb-4">
          <span className="text-4xl">👤</span>
        </div>
        <p>Replace with your photo or visual</p>
      </div>
    )
  },
  // 3. Content Example
  {
    id: 3,
    type: SlideType.CONTENT,
    title: "How to use this template",
    content: [
      "1. **Fork/Branch**: Create a new branch from `template/markdown-starter`.",
      "2. **Draft Content**: Use `TEMPLATE.md` to write your content outline.",
      "3. **Implement**: Copy `src/contents/template-guide` to your new folder.",
      "4. **Register**: Add your new deck to `src/contents/registry.ts`.",
      "5. **Run**: Start the dev server and verify your slides."
    ]
  },
  // 4. Split Layout Example
  {
    id: 4,
    type: SlideType.SPLIT,
    title: "Split Layout Example",
    subtitle: "Left Text, Right Visual",
    content: [
      "**Use this layout for:**",
      "- Explaining a diagram",
      "- Showing code alongside explanation",
      "- contrasting ideas",
      "",
      "You can put any React component in the visual area."
    ],
    visualContent: (
      <div className="flex items-center justify-center h-full bg-slate-100 rounded-xl border border-slate-200">
        <div className="text-center">
          <Layout size={48} className="mx-auto text-blue-500 mb-4"/>
          <h3 className="text-lg font-bold text-slate-700">Visual Component Area</h3>
          <p className="text-slate-500">Render diagrams, charts, or images here</p>
        </div>
      </div>
    )
  },
  // 5. Cards Example
  {
    id: 5,
    type: SlideType.CARDS,
    title: "Feature Cards Example",
    subtitle: "Grid layout for lists",
    items: [
      {
        title: "Concept A",
        description: "Brief description of concept A.",
        icon: <Zap className="text-yellow-500"/>
      },
      {
        title: "Concept B",
        description: "Brief description of concept B.",
        icon: <Shield className="text-green-500"/>
      },
      {
        title: "Concept C",
        description: "Brief description of concept C.",
        icon: <Database className="text-blue-500"/>
      },
      {
        title: "Concept D",
        description: "Brief description of concept D.",
        icon: <Globe className="text-purple-500"/>
      }
    ]
  },
  // 6. End
  {
    id: 6,
    type: SlideType.END,
    title: "Q&A",
    subtitle: "Thank you for watching",
    content: [
      "Any questions about creating content?",
      "Check the `src/engine/types.ts` for all available SlideTypes."
    ],
    footer: `Email: ${AUTHOR_INFO.email} | GitHub: ${AUTHOR_INFO.social.github}`
  }
];

