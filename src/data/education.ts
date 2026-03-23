import { Language, Experience, HonorsData } from '../../types';

export interface EducationPageContent {
  title: string;
  about: string;
  openToWork: string;
  viewHonorsLabel: string;
  honorsTitle: string;
  competitionsTitle: string;
  scholarshipsLabel: string;
  titlesLabel: string;
  experiences: Experience[];
  honors: HonorsData;
}

export const EDUCATION_DATA: Record<Language, EducationPageContent> = {
  zh: {
    title: "教育经历",
    about: "我是一名即将毕业于朴茨茅斯大学创意媒体技术专业的学生，预计2026年夏季毕业。我对技术精确性和创意叙事的交汇点充满热情，专注于通过AI辅助工作流程、动作捕捉管道和交互式原型设计来桥接艺术愿景与技术执行之间的差距。除了技术方面，我还是ACG（动画、漫画和游戏）文化的忠实创造者和消费者，曾制作的视频内容累计观看次数超过5万次。我热衷于优化生产流程，并在创意项目中寻找有目的的工作流，无论是通过微调动作捕捉设备还是系统化复杂的技术文档。",
    openToWork: "边学边做+等待实习",
    viewHonorsLabel: "查看在校荣誉",
    honorsTitle: "在校荣誉",
    competitionsTitle: "竞赛与证书",
    scholarshipsLabel: "奖学金",
    titlesLabel: "荣誉担任职务",
    experiences: [
      {
        id: '1',
        year: '预计2026年夏季毕业',
        title: '学士 / 创意媒体技术',
        institution: '朴茨茅斯大学',
        description: '一个以动作捕捉、动画、视觉特效和交互系统为核心的多学科项目。技术基础：掌握了游戏编程（Python、C#）以及在Unity和Unreal Engine中构建资产的能力。设计与沟通：培养了UI设计和沟通设计方面的技能，专注于以用户为中心的交互式应用程序。',
        type: 'education'
      }
    ],
    honors: {
      scholarships: ["校优秀奖学金", "校国际奖学金"],
      titles: ["舞台监督 | 朴茨茅斯新春晚会","导演 | 动作捕捉工作室","视频制作负责人 | Volta Management Co.","项目协调员 | Infinity Flow Technology Co.", "主办方 | 配音比赛", "制作成员 | 大学技术工作室"],
      competitions: [
        {
          level: "省级",
          awards: ["二等奖 | 职业技能大赛视频创作与运营", "铜奖 | 大学生创新创业大赛"]
        }
      ]
    }
  },
  en: {
    title: "Education",
    about: "I am a final-year Creative Media Technologies student at the University of Portsmouth (graduating 2026), driven by the intersection of technical precision and creative storytelling. My expertise lies in bridging the gap between artistic vision and technical execution, particularly through AI-assisted workflows, motion capture pipelines, and interactive prototyping.Beyond the technicalities, I am a dedicated creator and consumer of ACG (Anime, Comic, and Games) culture, having produced video content that has reached over 50,000 views. I am passionate about optimizing production pipelines and finding the purposeful flow in creative projects, whether that’s through fine-tuning a mocap rig or systematizing complex technical documentation.",
    openToWork: "Learning by Doing + Seeking Internship",
    viewHonorsLabel: "View Honors & Awards",
    honorsTitle: "Honors & Awards",
    competitionsTitle: "Competition & Certificates",
    scholarshipsLabel: "Scholarships",
    titlesLabel: "Leadership Titles",
    experiences: [
      {
        id: '1',
        year: 'Graduate in summer 2026',
        title: 'Bachelor / BSc (Hons) Creative Media Technologies',
        institution: 'University of Portsmouth',
        description: 'A multidisciplinary program centered on Motion Capture, Animation, VFX, and Interactive Systems.Technical Foundations: Gained proficiency in Game Programming (Python, C#) and building assets within Unity and Unreal Engine.Design & Communication: Developed skills in UI Design and Communication Design, focusing on user-centric interactive applications.',
        type: 'education'
      }
    ],
    honors: {
      scholarships: ["University Excellence Scholarship", "International Student Scholarship"],
      titles: ["Stage Manager | Portsmouth Spring Festival Gala","Director | Motion Capture Studio","Video Production Leader | Volta Management Co.","Project Coordinator | Infinity Flow Technology Co.", "Lead Organizer | Voice Acting Competition", "Production Member | University Technical Studio"],
      competitions: [
        {
          level: "National",
          awards: ["Second Prize | Video Creation & Operation in Skills Competition", "Third Prize | National College Innovation & Entrepreneurship Competition"]
        }
      ]
    }
  }
};