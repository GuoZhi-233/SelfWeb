import { Project, Category } from '../../types';

export const PHOTOGRAPHY_PROJECTS: Project[] = [
  {
    id: 'p1',
    common: {
      category: Category.PHOTO,
      image: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/b9z0kbvDibr6yrpLQapJrhfafCQo28IibEW4TXjFqLvlHuJY8nvliccdGw8ONEvU2ZJpFMBAhYciaiaOVMSgQpAK0csMYM3WQQYrmmET9Mj8pjXs/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=3',
    },
    zh: {
      title: 'Vol.01 纯粹食刻',
      subtitle: '味',
      description: '无论是独自出游还是朋友小聚，总有美食伴随身旁。',
      role: '',
      tags: ['摄影', '美食'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Vol.01 Pure Gastronomy',
      subtitle: 'Taste',
      description: 'Whether traveling alone or gathering with friends, there is always delicious food by your side.',
      role: '',
      tags: ['Photography', 'Food'],
      awards: [],
      concept: "",
      roleDetail: ""
    }
  },
  {
    id: 'p2',
    common: {
      category: Category.PHOTO,
      image: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/b9z0kbvDibr5oPqcG2nPJ01Y0u4zg8rBcAfwg56PyDDnBwcZ1c0MjrXky2ACyrzC34OFXCm2FYufB0oxSdqeHYkQfcWicMsv5CtSaRx6atBW0/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=16',
    },
    zh: {
      title: 'Vol.02 山海之境',
      subtitle: '',
      description: '陆地，海洋，天空，构成了我们生活的世界，也构成了我们内心的世界。',
      role: '',
      tags: ['摄影', '自然'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Vol.02 Kingdom of Wilderness',
      subtitle: '',
      description: 'Land, sea, and sky form the world we live in, and they also shape the world within us.',
      role: '',
      tags: ['Photography', 'Nature'],
      awards: [],
      concept: "",
      roleDetail: ""
    }
  }
];
