
export type Language = 'zh' | 'en';

export enum Category {
  ALL = 'All',
  VIDEO = 'Videography',
  DESIGN = 'Graphics & UI',
  PHOTO = 'Photography',
  DEV = 'Development',
  ARTICLE = 'Article'
}

export enum ArticleCategory {
  DIT = 'DiT', // 数媒与课程
  LUNA = 'LUNA', // 影像相关
  TALK = '瞎叨be叨', // 杂记
  AFTER8 = 'After8', // 聊艺术
  SERENITY = '山海疗养院' // 游记
}

export interface Article {
  id: string;
  title: string;
  category: ArticleCategory;
  link: string; // WeChat Official Account Link
  coverImage?: string; // Optional, will fallback if not provided
  date?: string;
}

export interface ProjectCommon {
  category: Category | string;
  image: string;
  videoUrl?: string;
  bilibiliId?: string;
  figmaUrl?: string;
  gallery?: string[];
  externalLink?: string;
  websiteUrl?: string;
  githubUrl?: string;
  icon?: string;
}

export interface ProjectLanguage {
  title: string;
  subtitle: string;
  description: string;
  role: string;
  tags: string[];
  concept?: string;
  roleDetail?: string;
  awards?: string[];
}

export interface Project {
  id: string;
  common?: ProjectCommon;
  zh?: ProjectLanguage;
  en?: ProjectLanguage;
  
  // Legacy direct fields (for backward compatibility)
  title?: string;
  subtitle?: string;
  category?: Category;
  description?: string;
  role?: string;
  image?: string;
  videoUrl?: string;
  bilibiliId?: string;
  figmaUrl?: string;
  gallery?: string[];
  externalLink?: string;
  tags?: string[];
  concept?: string;
  roleDetail?: string;
  awards?: string[];
  bilingualTitle?: {
    zh: string;
    en: string;
  };
  websiteUrl?: string;
  githubUrl?: string;
  icon?: string;
}

export interface Experience {
  id: string;
  year: string;
  title: string;
  institution: string;
  description: string;
  type: 'education' | 'work';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface CompetitionGroup {
  level: string;
  awards: string[];
}

export interface HonorsData {
  scholarships: string[];
  titles: string[];
  competitions: CompetitionGroup[];
}
