import { Language } from '../../types';

export interface SocialLinks {
  wechat: string;
  xiaohongshu: string;
  bilibili: string;
  linkedin: string;
}

export interface ContactContent {
  baseLabel: string;
  locationValue: string;
  contactLabel: string;
  emailMeLabel: string;
  email: string;
  hello: string;
  intro: string;
  socials: SocialLinks;
  tooltip?: string;
  githubLabel: string;
  footerDesign: string;
}

export const CONTACT_DATA: Record<Language, ContactContent> = {
  zh: {
    baseLabel: "BASE",
    locationValue: "上海/广州, 中国",
    contactLabel: "取得联系",
    emailMeLabel: "邮箱",
    email: "zhoupeng.media@outlook.com",
    hello: "你好 ^o^",
    intro: "欢迎探讨与合作。",
    socials: {
      wechat: "_guozhi_",
      xiaohongshu: "@果之",
      bilibili: "@果之_Hatte",
      linkedin: "Peng Zhou"
    },
    githubLabel: "GitHub",
    footerDesign: "Powered by Gemini 3 Pro"
  },
  en: {
    baseLabel: "BASE",
    locationValue: "Portsmouth, UK",
    contactLabel: "Get in touch",
    emailMeLabel: "Email Me",
    email: "zhoupeng.media\n@outlook.com",
    hello: "Hello ;-)",
    intro: "Welcome to discuss & cooperate.",
    socials: {
      wechat: "_guozhi_",
      xiaohongshu: "@果之",
      bilibili: "@果之_Hatte",
      linkedin: "Peng Zhou"
    },
    githubLabel: "GitHub",
    footerDesign: "Powered by Gemini 3 Pro"
  }
};
