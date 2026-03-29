import { Project } from '../../types';

export const DESIGN_DATA: Project[] = [
  {
    id: 'd1',
    common: {
      category: 'Graphics & UI',
      image: 'https://i0.hdslb.com/bfs/archive/dec44542254697305bec9d6d4275530dd37a99d3.jpg@672w_378h_1c.avif',
      figmaUrl: '', 
      bilibiliId: 'BV1R99xYgEXj',
      gallery: ['']
    },
    zh: {
      title: '2D 同人动画PV（After Effects）',
      subtitle: '视觉特效',
      description: '(VFX设计作业)使用 After Effects 制作的 2D 动画音乐视频，结合了女神异闻录3R的游戏元素和艺术概念设定。',
      role: '全个人制作',
      tags: ['特效动画', 'After Effects', '二次元'],
      awards: ["课程优秀作品","播放量30K+"],
      concept: "学习动效时正打完P3R，被剧情深深打动，围绕游戏中至关重要的时间及蓝色代表色等一系列元素，按照个人理解进行了二次创作(来顺便安利这个游戏",
      roleDetail: "独立完成从素材收集到最终动画设计。(使用了网络免费素材及游戏音乐)"
    },
    en: {
      title: 'Fan-made 2D Animated Music Video (After Effects)',
      subtitle: 'VFX',
      description: 'A VFX design project: a 2D animated music video made in After Effects, inspired by Persona 3 Reload and its visual themes.',
      role: 'Solo Production',
      tags: ['VFX', 'After Effects', 'ACG'],
      awards: ["Excellent Course Project","30K+ views"],
      concept: "While learning motion design, I was deeply moved by P3R's story. I built this piece around key motifs from the game, especially the theme of time and its iconic blue palette. It is also a personal tribute to a game that deeply inspired me.",
      roleDetail: "Handled the full pipeline independently, from sourcing assets to final animation. (Uses free online assets and in-game music.)"
    }
  },
    {
    id: 'd2',
    common: {
      category: 'Graphics & UI',
      image: 'https://i0.hdslb.com/bfs/archive/64984720b3e853382c6ec1c681bacaec78553fd8.jpg@672w_378h_1c.avif',
      figmaUrl: '', 
      bilibiliId: 'BV1EdjNzMEhN',
      gallery: ['']
    },
    zh: {
      title: '基于 Style3D 的高性能布料物理模拟实战',
      subtitle: '布料模拟',
      description: 'Style3D Atelier 布料解算与 Blender 综合渲染，模型提供者为好友白夜Tira(3D动捕软件Warudo开发者及主播)，在此感谢其提供的模型资源。',
      role: '个人制作',
      tags: ['布料模拟', 'Style3D', 'Blender'],
      concept: "布料模拟一直是我非常感兴趣的领域，Style3D Atelier 的布料解算功能为我提供了一个绝佳的机会来深入探索。在这个项目中，我使用 Style3D Atelier 进行布料模拟，并将结果导入 Blender 进行综合渲染，以实现高质量的视觉效果。",
      roleDetail: "绑定模型动作及改模，布料演算及最终渲染。(使用的模型及动作已经过作者同意)"
    },
    en: {
      title: 'High-Performance Cloth Simulation with Style3D',
      subtitle: 'Cloth Simulation',
      description: 'A cloth-simulation workflow combining Style3D Atelier with final rendering in Blender. The character model was provided by my friend Tira (developer and streamer of the 3D mocap software Warudo).',
      role: 'Solo Production',
      tags: ['Cloth Simulation', 'Style3D', 'Blender'],
      concept: "Cloth simulation has always been one of my core interests. This project let me dive deep into Style3D Atelier's solver, then move the results into Blender for look development and final output.",
      roleDetail: "Handled rig/action setup, model adjustments, cloth simulation, and final rendering. (All models and motion data used with permission.)"
    }
  },
      {
    id: 'd3',
    common: {
      category: 'Graphics & UI',
      image: 'https://i0.hdslb.com/bfs/archive/fb42389f79b0019b5e8558e30af29e237088ac86.jpg@672w_378h_1c_!web-search-common-cover.avif',
      figmaUrl: '', 
      bilibiliId: 'BV15pXVB8Ehb',
      gallery: ['']
    },
    zh: {
      title: 'Houdini 程序化环境生成与 Nuke 节点化合成',
      subtitle: '复杂系统学习与完整工作流 (Pipeline) 探索',
      description: '这是一个基于 Houdini 和 Nuke 的综合技术验证项目。重点在于跑通从程序化地形生成、基础物理解算，到多通道 (AOV) 后期合成的完整底层逻辑。受限于当时的硬件算力，最终验证视频为 480P，但核心展示了对复杂节点树的架构与统筹能力。',
      role: '个人制作 (实拍人物素材源自课程提供)',
      tags: ['逻辑拆解', '节点式工作流', 'Houdini', 'Nuke', '快速学习'],
      concept: '尽管我未来的主攻方向并非纯视觉特效，但 Houdini 极高的底层抽象维度使其成为锻炼“系统性思维”的绝佳试炼场。在这个项目中，我将重点放在了技术逻辑的攻坚上——无论是用数学节点驱动雪山的程序化生成，还是在 Nuke 中梳理错综复杂的层级合成树。这次跨软件的 Pipeline 探索，极大地验证并提升了我面对陌生、高门槛工具时的快速自学与问题拆解能力。',
      roleDetail: '负责 Houdini 节点化雪山地形 (HeightField) 的搭建与物理属性解算，制定多通道 (AOV) 渲染输出策略；并在 Nuke 中完成实拍人物抠像 (Keying)、深度信息处理、色彩匹配及复杂节点的最终合成逻辑。'
    },
    en: {
      title: 'Procedural Environment & Node-based Compositing (Houdini & Nuke)',
      subtitle: 'Pipeline Exploration & Complex Systems Learning',
      description: 'A full-pipeline technical study, from procedural terrain and dynamics in Houdini to multi-pass (AOV) compositing in Nuke. Due to hardware limits, the final output is 480p, with the focus placed on node architecture and problem solving rather than resolution.',
      role: 'Individual Project (Live-action footage provided by the course)',
      tags: ['Systems Thinking', 'Node-based Workflow', 'Houdini', 'Nuke', 'Fast Learner'],
      concept: 'Although VFX is not my only long-term focus, I used Houdini as a deliberate training ground for systems thinking. Building procedural terrain with math-driven nodes and managing a complex Nuke tree became a practical test of adaptability, rapid learning, and workflow decomposition in unfamiliar tools.',
      roleDetail: 'Built procedural snow-mountain terrain (HeightField) and dynamics in Houdini, and designed the multi-pass (AOV) render strategy. In Nuke, handled keying, depth treatment, colour matching, and final node-based compositing.'
    }
  },
      {
    id: 'd4',
    common: {
      category: 'Graphics & UI',
      image: 'https://i1.hdslb.com/bfs/archive/9af4f902da6f23bb23a0ba5c845cff7b8a609fd9.jpg@308w_174h',
      figmaUrl: '', 
      gallery: [''],
      bilibiliId: 'BV1CsX2BTEzW'
    },
    zh: {
      title: 'Mocap 全流程管线：从 Vicon Shogun 到 UE5 的数据处理与重定向',
    subtitle: '动作捕捉 (全流程验证)',
    description: '本项目完整演示了动作捕捉的工业级标准管线，涵盖从光学原始数据采集到游戏引擎最终表现的全过程。',
    role: '个人制作',
    tags: ['Vicon Shogun', 'MotionBuilder', 'UE5', 'Retargeting (重定向)', 'Data Cleanup'],
    concept: '全流程技术展示：在 Vicon Shogun 中进行原始数据提取与清理（Gap Filling）；在 MotionBuilder 中完成角色配置（Characterisation）、骨骼重映射（Skeleton Mapping）与动画烘焙（Plotting）；最终导入 Unreal Engine 5 进行 IK Retargeter 配置与效果验证。',
    roleDetail: '负责全流程实施：动捕棚现场录制、原始光学数据清理（断帧修复/标签校对）、骨骼解算与重建、动画数据烘焙、UE5 重定向管线搭建及最终动画效果实现。（原始数据源自课程/开源素材）'
    },

    en: {
      title: 'End-to-End Mocap Pipeline: Data Processing & Retargeting from Vicon Shogun to UE5',
    subtitle: 'Motion Capture (Full Pipeline)',
    description: 'A technical validation project demonstrating an industry-standard motion-capture workflow, from raw optical capture to final in-engine output.',
    role: 'Solo Project',
    tags: ['Vicon Shogun', 'MotionBuilder', 'UE5', 'Retargeting', 'Data Cleanup'],
    concept: 'End-to-end pipeline demo: raw data extraction and cleanup (gap filling) in Vicon Shogun, characterisation and animation plotting in MotionBuilder, then IK Retargeter setup and validation in Unreal Engine 5.',
    roleDetail: 'Owned the full lifecycle: on-site capture, optical-data cleanup (labelling and gap filling), skeleton solving/reconstruction, animation baking, UE5 retargeting setup, and final in-engine validation. (Raw data sourced from course and open-source materials.)',
   }
  },
    {
    id: 'd5',
    common: {
      category: 'Graphics & UI',
      image: 'https://www.figma.com/file/jJu59XIkQW5HifNfEpTNC3/thumbnail',
      figmaUrl: 'https://www.figma.com/slides/jJu59XIkQW5HifNfEpTNC3/Why-do-people-choose--Uniqlo--?t=553XDrysy7dXQZWc-6', 
      gallery: ['']
    },
    zh: {
      title: 'Slide设计01',
      subtitle: '平面设计',
      description: '优衣库品牌分析的Slide，结合极简符号与优衣库logo的红色设计。',
      role: '版式设计',
      tags: ['PPT', '品牌', 'Figma'],
      awards: ["课程汇报优秀作品"],
      concept: "优衣库作为快时尚，极简的风格与店面设计深深吸引了我。因此在设计中，我选择了极简的设计风格与品牌颜色，以匹配优衣库的品牌调性，同时突出内容的专业性。",
      roleDetail: "独立完成从资讯收集到最终排版设计。"
    },
    en: {
      title: 'Slide Design 01',
      subtitle: 'Graphic Design',
      description: 'A slide deck for a Uniqlo brand analysis, combining minimalist visual language with the brand\'s signature red.',
      role: 'Layout Design',
      tags: ['PPT', 'Brand', 'Figma'],
      awards: ["Excellent Course Presentation Award"],
      concept: "I was drawn to Uniqlo's minimalist retail language, so I built the deck around that same restraint. The layout and colour choices align with the brand identity while keeping the content clear and professional.",
      roleDetail: "Completed the full process independently, from research and content structuring to final slide layout."
    }
  },
      {
    id: 'd6',
    common: {
      category: 'Graphics & UI',
      image: 'https://www.figma.com/file/J1cgerdP56LsomJxw7Pczp/thumbnail',
      figmaUrl: 'https://www.figma.com/deck/J1cgerdP56LsomJxw7Pczp/PSE-4-Weeks-Personal-Summary---Classmates-Feedback?node-id=1-42&t=MpKpFtEQqzeMiUiT-1', 
      gallery: ['']
    },
    zh: {
      title: 'Slide设计02',
      subtitle: '平面设计',
      description: '论文写作课总结的Slide，结合极简符号与绿色护眼设计。',
      role: '版式设计',
      tags: ['PPT', '总结', 'Figma'],
      awards: ["课程汇报优秀作品"],
      concept: "因为想更深入学习英文的学术论文写作，所以加餐了这门课。总结的Slide设计上，我选择了极简的设计风格与绿色护眼配色，以突出内容的专业性，同时营造一个清新、舒适的视觉体验，帮助观众更好地吸收信息。",
      roleDetail: "总结归纳老师的分散知识点，并进行分类与排版设计。"
    },
    en: {
      title: 'Slide Design 02',
      subtitle: 'Graphic Design',
      description: 'A summary deck for an academic writing course, using minimalist structure and an eye-friendly green palette.',
      role: 'Layout Design',
      tags: ['PPT', 'Summary', 'Figma'],
      awards: ["Excellent Course Presentation Award"],
      concept: "I took this extra course to strengthen my English academic writing. For the summary deck, I used a clean minimalist layout and a soft green palette to keep the presentation professional, readable, and easy to follow.",
      roleDetail: "Synthesized scattered course points into clear categories and translated them into a structured visual layout."
    }
  },
  // Add more design projects here
];
