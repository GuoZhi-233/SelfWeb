import { Project } from '../../types';

export const VIDEOGRAPHY_DATA: Project[] = [
  {
    id: 'sample-1',
    common: {
      category: 'Videography',
      image: 'https://i2.hdslb.com/bfs/archive/dec44542254697305bec9d6d4275530dd37a99d3.jpg@672w_378h_1c.avif',
      bilibiliId: 'BV1R99xYgEXj' // For video
    },
    zh: {
      title: '示例项目标题',
      subtitle: '示例副标题',
      description: '项目描述占位符。',
      role: '角色',
      tags: ['标签1', '标签2'],
      awards: [],
      concept: "",
      roleDetail: ""
    },
    en: {
      title: 'Example Project Title',
      subtitle: 'Example Subtitle',
      description: 'Project description placeholder.',
      role: 'Role',
      tags: ['Tag 1', 'Tag 2'],
      awards: [],
      concept: "",
      roleDetail: ""
    }
  }
];
