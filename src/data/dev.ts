import { Project } from '../../types';

export const DEV_DATA: Project[] = [
  {
    id: 'dev1',
    common: {
      category: 'Development',
      image: '', // Placeholder
      icon: 'wind',
      figmaUrl: 'https://www.figma.com/design/7uO79qn3juVXz5lEMM0RGH/AR-APP-Slide?node-id=0-1&t=T4SfEDVYp5EqWi9a-1',
      websiteUrl: '',
      githubUrl: ''
    },
    zh: {
      title: '情绪治愈手机APP(AR)',
      subtitle: 'Unity / C#',
      description: '(本科毕业设计)包含引导式呼吸及色彩漫步两大模块，旨在提升用户日常状态，通过颜色发现生活美好细节。',
      role: '创意技术开发',
      tags: ['Unity', 'C#', 'AR'],
      roleDetail: "融合交互设计与技术实现，独立完成情绪类 AR 应用的逻辑开发与视觉表达。"
    },
    en: {
      title: 'Emotional Healing Mobile App (AR)',
      subtitle: 'Unity / C#',
      description: '(Bachelor Final Year Project) Featuring guided breath and color walk modules, designed to enhance users daily state and discover the beauty in life through colors.',
      role: 'Creative Tech Development',
      tags: ['Unity', 'C#', 'AR'],
      roleDetail: "Integrating interaction design with technical implementation, independently developed the logic and visual expression for an emotion-focused AR application."
   }
  },
    {
    id: 'dev2',
    common: {
      category: 'Development',
      image: '', // Placeholder
      icon: 'image',
      figmaUrl: '',
      websiteUrl: '',
      githubUrl: 'https://github.com/GuoZhi-233/CopyLink'
    },
    zh: {
     title: '网页图片多功能提取插件 CopyLink For Picture',
subtitle: 'JavaScript / Chrome Extension / Vibe Coding',
description: '一款轻量级浏览器插件，旨在帮助用户一键提取网页（尤其是微信公众号等懒加载页面）的所有真实图片链接，并支持按数字排序、自定义关键词筛选、批量加前后缀及一键下载功能。',
role: '产品设计与 AI 协作开发 (Vibe Coder)',
tags: ['Chrome Extension', 'Vibe Coding', 'Prompt Engineering'],
roleDetail: "基于“Vibe Coding”理念，主导产品功能定义与交互流设计。通过精准的 Prompt 与大模型结对编程，快速完成核心提取逻辑、UI 布局及下载 API 调用的代码生成与多轮迭代，以无代码/低代码体验成功构建并部署完整的扩展应用。"
    },
    en: {
      title: 'CopyLink For Picture (Browser Extension)',
subtitle: 'JavaScript / Chrome Extension / Vibe Coding',
description: 'A lightweight browser extension designed to extract real image links from webpages (especially lazy-loaded sites like WeChat articles) with one click. It features smart numerical sorting, custom keyword filtering, string formatting, and batch downloading.',
role: 'Product Designer & Vibe Coder',
tags: ['Chrome Extension', 'Vibe Coding', 'Prompt Engineering'],
roleDetail: "Driven by the 'Vibe Coding' paradigm, I led the product definition and user flow design. By collaborating with AI via precise prompt engineering, I rapidly generated, debugged, and iterated the core extraction logic, UI layout, and download API integrations, successfully delivering a fully functional extension from scratch."
   }
  }
];
