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
      tags: ['摄影', '美食', '质感'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Vol.01 Pure Gastronomy',
      subtitle: 'Taste',
      description: 'Whether traveling alone or gathering with friends, there is always delicious food by your side.',
      role: '',
      tags: ['Photography', 'Food', 'Texture'],
      awards: [],
      concept: "",
      roleDetail: ""
    }
  }
];
