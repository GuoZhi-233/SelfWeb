import { Project, Category } from '../../types';

export const PHOTOGRAPHY_PROJECTS: Project[] = [
  {
    id: 'p1',
    common: {
      category: Category.PHOTO,
      image: 'https://mmbiz.qpic.cn/mmbiz_jpg/MpZIibj0bjSym38IftGicAWNwhwavzH9hRqulRYy4XYt210iaN4wRicELqA79ywY3mmgyictP5C5NAJb5B9VhavibtMg/640',
    },
    zh: {
      title: '摄影集 Vol.1',
      subtitle: '记录生活中的瞬间',
      description: '一系列精心拍摄的摄影作品，捕捉光影与色彩的交融。',
      role: '摄影师',
      tags: ['摄影', '人像', '风景'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Photography Collection Vol.1',
      subtitle: 'Capturing Moments in Life',
      description: 'A curated collection of photographs exploring light, shadow, and color.',
      role: 'Photographer',
      tags: ['Photography', 'Portrait', 'Landscape'],
      awards: [],
      concept: "",
      roleDetail: ""
    }
  },
  {
    id: 'p2',
    common: {
      category: Category.PHOTO,
      image: 'https://mmbiz.qpic.cn/mmbiz_jpg/MpZIibj0bjSym38IftGicAWNwhwavzH9hRgvdQJgKabZhibUocGw2GDWajE7wxSgibibdNsycDWy53Abgqx5s7Q0lww/640',
    },
    zh: {
      title: '摄影集 Vol.2',
      subtitle: '在旅途中发现美',
      description: '旅行中的影像记录，展现不同地域的风土人情与自然美景。',
      role: '摄影师',
      tags: ['摄影', '旅行', '纪实'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Photography Collection Vol.2',
      subtitle: 'Beauty Found in Travel',
      description: 'Travel photography documenting diverse landscapes and cultural moments.',
      role: 'Photographer',
      tags: ['Photography', 'Travel', 'Documentary'],
      awards: [],
      concept: "",
      roleDetail: ""
    }
  },
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
