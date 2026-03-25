import { Language, Category } from '../../types';

export interface HeroItem {
  text: string;
  annotation: string;
  category: Category | null;
}

export interface HomeContent {
  heroItems: HeroItem[];
  intro: string;
  selectedWorks: string;
  years: string;
}

export const HOME_DATA: Record<Language, HomeContent> = {
  zh: {
    heroItems: [
      { text: "摄影摄像", annotation: "（日常生活）", category: Category.VIDEO }, // category is kept as VIDEO but UI will split
      { text: "艺术设计", annotation: "（当前主攻）", category: Category.DESIGN },
      { text: "应用开发", annotation: "（vibe builder）", category: Category.DEV },
      { text: "炒面炒饭", annotation: "（还有甜品）", category: null }
    ],
    intro: "人生如逆旅，我亦是行人。",
    selectedWorks: "精选作品",
    years: "[ 2022 — 2026 ]"
  },
  en: {
    heroItems: [
      { text: "Photo & Video", annotation: "(Daily Life)", category: Category.VIDEO },
      { text: "Creative Design", annotation: "(Main Focus)", category: Category.DESIGN },
      { text: "Development", annotation: "(Vibe Coder)", category: Category.DEV },
      { text: "Cooking", annotation: "(And Baking)", category: null }
    ],
    intro: "And miles to go before I sleep.",
    selectedWorks: "Selected Works",
    years: "[ 2022 — 2026 ]"
  }
};
