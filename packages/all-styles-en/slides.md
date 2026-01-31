---
theme: ../theme-dify
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: Dify Template Gallery
mdc: true
layout: title
slideTitle: Dify Template Gallery
subtitle: Showcase of All Available Slide Styles
label: Visual Design System
teamName: Solutions & Customer Success
tagline: Infrastructure for Intuitive LLM App Development
deckName: "ENGLISH GALLERY: ALL SLIDE STYLES"
copyright: Copyright © Dify Tech Inc. All Rights Reserved.
authorName: Your Name
---

---
layout: presenter
slideTitle: Your Instructor
subtitle: Expert in AI Systems
name: Your Name
details:
  - Your Job Title
  - Senior Solution Architect
  - 10+ years in Enterprise Software
  - Specialized in LLM Engineering
---

---
layout: course-overview
slideTitle: Module Overview
subtitle: What we will cover today
objective: To provide a comprehensive understanding of the Dify Slide Design System and its capabilities.
value: Enable creators to build professional, consistent, and visually engaging presentations efficiently.
scope: This module covers all 20+ slide layouts, component usage, and customization options.
---

---
layout: section
slideTitle: Structural Slides
subtitle: Building blocks for your narrative flow
part: Part 01
---

---
layout: chapter-title
slideTitle: Core Content Layouts
items:
  - Basic Text Content
  - Split Views
  - Adaptive Layouts
---

---
layout: content
slideTitle: Standard Content Slide
items:
  - This is the most basic slide type used for bullet points and text.
  - It supports **markdown-style bolding** for emphasis.
  - You can add multiple paragraphs or list items.
  - "1. Ordered lists are also supported manually."
  - "2. Keep text concise and legible."
---

---
layout: split
slideTitle: Split Layout
subtitle: Text on Left, Visual on Right
items:
  - Ideal for explaining a diagram, chart, or image.
  - The left side holds the narrative or explanation.
  - The right side is a flexible content container.
  - You can put code blocks, SVGs, or images here.
---

---
layout: adaptive-content
slideTitle: Adaptive Content
subtitle: Centered layout for high-impact statements
items:
  - This layout centers the content horizontally.
  - Best for short, punchy lists or quotes.
  - It draws focus to the middle of the screen.
  - Great for summary points or simple steps.
---

---
layout: section
slideTitle: Lists & Grids
subtitle: Organizing complex information
part: Part 02
---

---
layout: cards
slideTitle: Feature Cards
subtitle: Grid layout for 3-4 key items
items:
  - title: Performance
    description: High-speed processing with optimized engines.
    color: yellow
  - title: Security
    description: Enterprise-grade encryption and role management.
    color: green
  - title: Scalability
    description: Horizontal scaling support for millions of users.
    color: blue
  - title: Reliability
    description: 99.99% uptime SLA guaranteed.
    color: purple
---

---
layout: accordion
slideTitle: Accordion List
subtitle: Sequential or detailed breakdown
items:
  - title: "Step 1: Ingestion"
    description: Data is collected from various sources and normalized into a unified format for processing.
  - title: "Step 2: Processing"
    description: LLMs analyze and transform the data using advanced natural language understanding capabilities.
  - title: "Step 3: Validation"
    description: Quality checks ensure accuracy and consistency before final output generation.
  - title: "Step 4: Output"
    description: Results are delivered via API or UI with full traceability and logging support.
---

---
layout: focus-cols
slideTitle: Focus Columns
subtitle: Highlighting a key metric or concept
items:
  - title: "EFFICIENCY"
    description: Reduce operational costs by 40%.
    tag: POSITIONING
  - title: Speed
    description: Deploy 10x faster than traditional methods.
  - title: Quality
    description: Maintain consistent high standards across all outputs.
---

---
layout: pillars
slideTitle: Strategic Pillars
subtitle: Vertical columns for core capabilities
positioning: Enterprise Architecture
items:
  - title: Cloud Native
    description: Built for K8s and Docker environments.
    icon: cloud
    features:
      - Auto-scaling
      - Containerized
  - title: Security First
    description: SOC2 Compliant and GDPR ready.
    icon: lock
    features:
      - SSO
      - Audit Logs
  - title: Open Platform
    description: Extensible API and plugin system.
    icon: git-branch
    features:
      - REST API
      - Webhooks
  - title: Analytics
    description: Deep insights into usage patterns.
    icon: bar-chart
    features:
      - Real-time
      - Custom Reports
---

---
layout: matrix
slideTitle: Comparison Matrix
subtitle: Feature comparison across plans
headers:
  - Feature
  - Free
  - Pro
  - Enterprise
rows:
  - ["Users", "1", "5", "Unlimited"]
  - ["Storage", "1GB", "10GB", "Unlimited"]
  - ["Support", "Community", "Email", "24/7 Dedicated"]
  - ["SLA", "-", "99.9%", "99.99%"]
---

---
layout: section
slideTitle: Specialized Slides
subtitle: Pricing, Licensing, FAQ, etc.
part: Part 03
---

---
layout: diagram
slideTitle: System Architecture
subtitle: Visualizing the flow
---

---
layout: pricing
slideTitle: Pricing Plans
subtitle: Transparent scaling options
items:
  - title: Starter
    price: "$0"
    priceUnit: /mo
    description: For individuals
    features:
      - 1 User
      - Basic Support
      - 1 Project
    topBarColor: gray
  - title: Pro
    price: "$49"
    priceUnit: /mo
    description: For growing teams
    features:
      - 5 Users
      - Priority Support
      - Unlimited Projects
    topBarColor: blue
    badge: Popular
  - title: Enterprise
    price: Custom
    description: For large organizations
    features:
      - Unlimited Users
      - Dedicated Success Manager
      - SLA
    topBarColor: black
---

---
layout: license
slideTitle: Licensing Model
subtitle: Open Source + Commercial
content:
  - We use a dual-license model to ensure freedom and sustainability.
items:
  - title: Apache 2.0
    description: Core Framework is open source.
    icon: book-open
  - title: Commercial
    description: Enterprise features require a commercial license.
    icon: lock
  - title: Cloud Service
    description: Managed hosting subscription.
    icon: cloud
---

---
layout: faq
slideTitle: Frequently Asked Questions
items:
  - title: Can I customize the colors?
    description: Yes, the system uses Tailwind CSS and can be themed easily.
  - title: Is it compatible with MDX?
    description: The current architecture uses TypeScript objects, but can be adapted.
  - title: How do I add images?
    description: Import them and pass them to the visualContent prop.
  - title: Can I export to PDF?
    description: Yes, Slidev supports PDF export out of the box.
---

---
layout: story
slideTitle: The Origin Story
subtitle: Why we built this
content:
  - We believed that presentation tools were too rigid for developers.
  - We wanted to express ideas using code and components.
  - This template is the result of that vision, combining the power of Vue with the simplicity of a slide deck.
---

---
layout: macro-focus
slideTitle: Key Takeaways
items:
  - Use consistent layouts
  - Focus on one idea per slide
  - Visuals should support the text
  - Keep it simple
---

---
layout: key-takeaways
slideTitle: Summary
subtitle: Final thoughts
content:
  - Remember these key points as you build your presentations.
items:
  - title: Flexible System
    description: Adapts to various content types and layouts.
    icon: layers
  - title: Developer Friendly
    description: Built with Vue and Tailwind for easy customization.
    icon: code
  - title: Component Based
    description: Reusable components for consistent design.
    icon: box
---

---
layout: end
subtitle: Thank you for watching
website: dify.ai
email: hello@dify.ai
github: langgenius
---
