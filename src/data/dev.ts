import { Project } from '../../types';

export const DEV_DATA: Project[] = [
  {
    id: 'dev1',
    common: {
      category: 'Development',
      image: '', // Placeholder
      icon: 'wind',
      websiteUrl: 'https://www.figma.com/design/7uO79qn3juVXz5lEMM0RGH/AR-APP-Slide?node-id=0-1&t=T4SfEDVYp5EqWi9a-1',
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
  }
];
