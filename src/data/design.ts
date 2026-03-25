import { Project } from '../../types';

export const DESIGN_DATA: Project[] = [
  {
    id: 'd1',
    common: {
      category: 'Graphics & UI',
      image: "picture/cover/uniqlo.jpg",
      figmaUrl: 'https://www.figma.com/slides/jJu59XIkQW5HifNfEpTNC3/Why-do-people-choose--Uniqlo--?t=553XDrysy7dXQZWc-6', 
      gallery: ['']
    },
    zh: {
      title: 'Slide设计',
      subtitle: '平面设计',
      description: '优衣库品牌分析的Slide，结合极简符号与优衣库logo的红色设计。',
      role: '版式设计',
      tags: ['PPT', '品牌', 'Figma'],
      awards: ["课程汇报优秀作品"],
      concept: "优衣库作为快时尚，极简的风格与店面设计深深吸引了我。因此在设计中，我选择了极简的设计风格与品牌颜色，以匹配优衣库的品牌调性，同时突出内容的专业性。",
      roleDetail: "独立完成从资讯收集到最终排版设计。"
    },
    en: {
      title: 'Slide Design',
      subtitle: 'Graphic Design',
      description: 'Slide design for Uniqlo brand analysis, combining minimalist symbols with the brand\'s red logo.',
      role: 'Layout Design',
      tags: ['PPT', 'Brand', 'Figma'],
      awards: ["Excellent Course Presentation Award"],
      concept: "Uniqlo, as a fast-fashion brand, has a minimalist style and store design that deeply attracted me. Therefore, in the design, I chose a minimalist design style and brand colors to match Uniqlo's brand identity while highlighting the professionalism of the content.",
      roleDetail: "Independently completed the entire process from information gathering to final layout design."
    }
  },
  // Add more design projects here
];
