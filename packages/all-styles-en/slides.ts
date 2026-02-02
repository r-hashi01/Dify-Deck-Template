import type { Deck } from '../theme-dify/types';

export const deck: Deck = {
  config: {
    title: 'Dify Template Gallery',
    theme: '../theme-dify',
    browserExporter: true,
    favicon: '/assets/icon/Dify-if.svg',
    defaults: {
      deckName: 'Dify Deck',
      copyright: '© 2026 Dify. All rights reserved.',
      authorName: 'Dify Team',
    },
  },
  slides: [
    // Title Slide
    {
      layout: 'title',
      slideTitle: 'Dify Template Gallery',
      subtitle: 'A showcase of all available slide layouts',
      label: 'Template',
      teamName: 'Dify Team',
      tagline: 'Build AI apps faster',
    },

    // Presenter Slide
    {
      layout: 'presenter',
      slideTitle: 'About the Presenter',
      subtitle: 'Template Author',
      name: 'Dify Team',
      role: 'AI Platform Developer',
      details: [
        'Building the future of AI applications',
        'Open source enthusiast',
        'Community driven development',
      ],
      imageUrl: '/assets/icon/dify-logo.svg',
    },

    // Course Overview
    {
      layout: 'course-overview',
      slideTitle: 'Course Overview',
      subtitle: 'What you will learn',
      objective: 'Master all Dify Deck slide layouts and create stunning presentations',
      value: 'Save time with pre-built, professionally designed templates',
      scope: 'All 21 layouts with examples and best practices',
    },

    // Section Slide
    {
      layout: 'section',
      part: 'Part',
      partNumber: 1,
      slideTitle: 'Content Layouts',
      subtitle: 'Basic building blocks',
    },

    // Content Slide
    {
      layout: 'content',
      slideTitle: 'Content Layout',
      subtitle: 'Standard bullet points',
      items: [
        'First point with **bold** text',
        'Second point with details',
        '  Sub-item with indentation',
        '  Another sub-item',
        'Third main point',
      ],
    },

    // Adaptive Content
    {
      layout: 'adaptive-content',
      slideTitle: 'Adaptive Content',
      subtitle: 'Centered layout',
      items: [
        'Centered content for focus',
        'Great for key messages',
        'Scales based on content amount',
      ],
    },

    // Chapter Title
    {
      layout: 'chapter-title',
      slideTitle: 'Chapter: Advanced Layouts',
      items: [
        'Cards and grids',
        'Data visualization',
        'Interactive elements',
      ],
    },

    // Cards Slide
    {
      layout: 'cards',
      slideTitle: 'Cards Layout',
      subtitle: 'Feature showcase',
      items: [
        { title: 'Easy Setup', description: 'Get started in minutes', icon: 'Zap', color: 'yellow' },
        { title: 'Customizable', description: 'Adapt to your brand', icon: 'Settings', color: 'blue' },
        { title: 'Responsive', description: 'Works on all devices', icon: 'Layout', color: 'green' },
        { title: 'Fast', description: 'Optimized performance', icon: 'Rocket', color: 'purple' },
      ],
    },

    // Accordion Slide
    {
      layout: 'accordion',
      slideTitle: 'Accordion Layout',
      subtitle: 'Expandable sections',
      items: [
        { title: 'What is Dify?', description: 'An open-source LLM app development platform', icon: 'HelpCircle' },
        { title: 'Key Features', description: 'Visual workflow builder, RAG pipeline, model management', icon: 'Star' },
        { title: 'Use Cases', description: 'Chatbots, content generation, data analysis', icon: 'Target' },
      ],
    },

    // Focus Cols
    {
      layout: 'focus-cols',
      slideTitle: 'Focus Columns',
      subtitle: 'Highlight key points',
      items: [
        { title: 'Design', description: 'Beautiful and clean', tag: '01', icon: 'Layout' },
        { title: 'Develop', description: 'Type-safe and fast', tag: '02', icon: 'Code' },
        { title: 'Deploy', description: 'One-click publish', tag: '03', icon: 'Rocket' },
      ],
    },

    // Pillars
    {
      layout: 'pillars',
      slideTitle: 'Pillars Layout',
      subtitle: 'Core principles',
      positioning: 'Built on solid foundations',
      items: [
        { title: 'Quality', description: 'Excellence in every detail', icon: 'Award', features: ['Tested', 'Reviewed', 'Polished'] },
        { title: 'Speed', description: 'Fast development cycle', icon: 'Zap', features: ['Quick setup', 'Hot reload', 'Instant deploy'] },
        { title: 'Scale', description: 'Grow without limits', icon: 'TrendingUp', features: ['Modular', 'Extensible', 'Enterprise-ready'] },
      ],
    },

    // Matrix
    {
      layout: 'matrix',
      slideTitle: 'Comparison Matrix',
      subtitle: 'Feature comparison',
      headers: ['Feature', 'Free', 'Pro', 'Enterprise'],
      rows: [
        ['Slides', '10', '100', 'Unlimited'],
        ['Themes', '1', '5', 'Custom'],
        ['Export', '❌', '✅', '✅'],
        ['Support', 'Community', 'Email', '24/7'],
      ],
    },

    // Pricing
    {
      layout: 'pricing',
      slideTitle: 'Pricing Plans',
      subtitle: 'Choose your plan',
      items: [
        {
          title: 'Starter',
          price: '$0',
          priceUnit: '/month',
          description: 'For individuals',
          features: ['5 presentations', 'Basic themes', 'Community support'],
          topBarColor: 'gray',
        },
        {
          title: 'Pro',
          price: '$19',
          priceUnit: '/month',
          description: 'For professionals',
          features: ['Unlimited presentations', 'All themes', 'Priority support', 'Custom branding'],
          topBarColor: 'blue',
          badge: 'Popular',
        },
        {
          title: 'Enterprise',
          price: 'Custom',
          description: 'For teams',
          features: ['Everything in Pro', 'SSO', 'Dedicated support', 'SLA'],
          topBarColor: 'purple',
        },
      ],
      footerNote: 'All plans include a 14-day free trial',
    },

    // FAQ
    {
      layout: 'faq',
      slideTitle: 'FAQ',
      subtitle: 'Common questions',
      items: [
        { title: 'How do I get started?', description: 'Run pnpm create-deck and start editing' },
        { title: 'Can I customize themes?', description: 'Yes, all styles are customizable' },
        { title: 'Is it open source?', description: 'Yes, MIT licensed' },
        { title: 'Need help?', description: 'Join our community Discord' },
      ],
    },

    // Key Takeaways
    {
      layout: 'key-takeaways',
      slideTitle: 'Key Takeaways',
      subtitle: 'Remember these points',
      items: [
        { title: 'Type-Safe', description: 'Full TypeScript support', icon: 'Shield' },
        { title: 'Beautiful', description: 'Professional designs', icon: 'Star' },
        { title: 'Fast', description: 'Quick development', icon: 'Zap' },
      ],
    },

    // Macro Focus
    {
      layout: 'macro-focus',
      slideTitle: 'The Big Picture',
      items: [
        'Build presentations faster',
        'Focus on content, not design',
        'Ship with confidence',
      ],
    },

    // License
    {
      layout: 'license',
      slideTitle: 'License',
      subtitle: 'Usage terms',
      content: [
        'MIT License - Free for commercial use',
      ],
      items: [
        { title: 'Attribution', description: 'Credit appreciated but not required', icon: 'Heart' },
        { title: 'Modification', description: 'Customize freely', icon: 'Edit' },
        { title: 'Distribution', description: 'Share with others', icon: 'Share' },
      ],
    },

    // End Slide
    {
      layout: 'end',
      subtitle: 'Thank you for watching!',
      website: 'https://dify.ai',
      email: 'hello@dify.ai',
      github: 'langgenius/dify',
    },
  ],
};
