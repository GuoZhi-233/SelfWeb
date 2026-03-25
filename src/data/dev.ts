import { Project } from '../../types';

export const DEV_DATA: Project[] = [
  {
    id: 'dev1',
    common: {
      category: 'Development',
      image: '', // Placeholder
      icon: 'message-circle',
      websiteUrl: 'https://wechat-msganalysis-krgkfhfdcxwmtwst4jc4bw.streamlit.app/',
      githubUrl: 'https://github.com/LuN3cy/WeChat-MsgAnalysis'
    },
    zh: {
      title: '微信聊天记录数据分析',
      subtitle: 'Python / Streamlit',
      description: '对json格式的聊天记录进行完整的分析，包含时段、内容和互动模式。',
      role: '全栈开发',
      tags: ['Python', 'Streamlit', '数据分析'],
      roleDetail: "独立完成后端数据处理逻辑与前端可视化界面开发。"
    },
    en: {
      title: 'WeChat Msg Analysis',
      subtitle: 'Python / Streamlit',
      description: 'Comprehensive analysis of JSON chat records, including time slots, content, and interaction patterns.',
      role: 'Full Stack Developer',
      tags: ['Python', 'Streamlit', 'Data Analysis'],
      roleDetail: "Independently completed backend data processing logic and frontend visualization interface development."
    }
   }
];
