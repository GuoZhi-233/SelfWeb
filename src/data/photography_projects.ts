import { Project, Category } from '../../types';

export const PHOTOGRAPHY_PROJECTS: Project[] = [
  {
    id: 'p1',
    common: {
      category: Category.PHOTO,
      image: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/b9z0kbvDibr7Z6MrttQiaoR6KwO8YZXloDL8rrprLaicaDCeG4xxJtkVeAB7guLCNiaMic51drX0IToND3MLxicbVJaorSUkBh6tyfFQKslVE7IqY/0?from=appmsg&wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1',
    },
    zh: {
      title: '摄影集 Vol.1',
      subtitle: '细节中的诗意',
      description: '探索细节与微观世界的摄影作品，挖掘日常生活的隐藏之美。',
      role: '摄影师',
      tags: ['摄影', '微观', '艺术'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Photography Collection Vol.1',
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
