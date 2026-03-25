import { Project } from '../../types';

export const VIDEOGRAPHY_DATA: Project[] = [
  {
    id: 'sample-1',
    common: {
      category: 'Videography',
      image: 'https://i0.hdslb.com/bfs/archive/bc00538b71641d24ec6836ba8a0da18ac4dff0d6.jpg@672w_378h_1c.avif',
      bilibiliId: 'BV14r421b7aE' // For video
    },
    zh: {
      title: '新加坡日本旅游记',
      subtitle: '猫meme怎能不算是一种纪实',
      description: '学习时间空余剪辑的猫meme旅游视频。',
      role: '个人项目',
      tags: ['猫meme', '游记','剪辑'],
      awards: ['综合播放量20K+'],
      concept: "",
      roleDetail: "脚本构思、素材收集与视频剪辑，独立完成从内容创意到后期制作的全流程。"
    },
    en: {
      title: 'Singapore & Japan Travelogue',
      subtitle: 'Cat memes could be a form of documentary LoL',
      description: 'A cat meme travel video edited during my free time.',
      role: 'Personal Project',
      tags: ['Cat Memes', 'Travelogue', 'Editing'],
      awards: ['20K+ total views' ],
      concept: "",
      roleDetail: "From script ideation and material gathering to video editing, I independently handled the entire process from content creation to post-production."
    }
  }
];
