import { Project, Category } from '../../types';

export const PHOTOGRAPHY_PROJECTS: Project[] = [
  {
    id: 'p3',
    common: {
      category: Category.PHOTO,
      image: 'https://mmbiz.qpic.cn/mmbiz_jpg/MpZIibj0bjSym38IftGicAWNwhwavzH9hRV80gsapMp0mLIYbClZ5PDhricuhzfFe62fxfB1mhT7QZN8uibibs4qCPg/640',
    },
    zh: {
      title: '摄影集 Vol.3',
      subtitle: '细节中的诗意',
      description: '探索细节与微观世界的摄影作品，挖掘日常生活的隐藏之美。',
      role: '摄影师',
      tags: ['摄影', '微观', '艺术'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Photography Collection Vol.3',
      subtitle: 'Poetry in Details',
      description: 'Exploring macro photography and hidden beauty in everyday moments.',
      role: 'Photographer',
      tags: ['Photography', 'Macro', 'Art'],
      awards: [],
      concept: "",
      roleDetail: ""
    }
  }
];
