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
      description: '(VFX design project) A 2D animated music video created using After Effects, incorporating elements from Persona 3 Reload and artistic concepts.',
      role: 'Solo Production',
      tags: ['VFX', 'After Effects', 'AGC'],
      awards: ["Excellent Course Project","30K+ views"],
      concept: "I was deeply moved by the storyline of P3R while learning motion effects. I created this video based on my personal understanding of a series of elements in the game, such as the crucial concept of time and the representative color blue (also, highly recommend this game).",
      roleDetail: "Independently completed the entire process from material collection to final animation design. (Used free online materials and game music)"
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
      description: 'Style3D Atelier Cloth Solver and Blender Integrated Rendering. The model was provided by my friend Tira (developer and streamer of the 3D motion capture software ‘Warudo’), and I would like to thank him for providing the model resources.',
      role: 'Solo Production',
      tags: ['Cloth Simulation', 'Style3D', 'Blender'],
      concept: "Cloth simulation has always been a field of great interest to me. The cloth solver feature of Style3D Atelier provided an excellent opportunity for me to explore it in depth. In this project, I used Style3D Atelier for cloth simulation and imported the results into Blender for integrated rendering to achieve high-quality visual effects.",
      roleDetail: "Binding model actions and modifying models, cloth simulation, and final rendering. (Used models and actions with the author's permission)"
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
      description: 'A comprehensive technical practice focusing on a complete CGI pipeline—from procedural terrain generation and dynamics in Houdini to multi-pass (AOV) compositing in Nuke. Due to hardware rendering constraints, the final output is 480P, emphasizing the underlying node architecture and logical problem-solving over high-res visual fidelity.',
      role: 'Individual Project (Live-action footage provided by the course)',
      tags: ['Systems Thinking', 'Node-based Workflow', 'Houdini', 'Nuke', 'Fast Learner'],
      concept: 'Although my primary career focus is not purely in Visual Effects (VFX), I tackled Houdini—known for its steep learning curve—as a rigorous exercise in systems thinking and logic structure. By driving procedural generation with mathematical nodes and managing a highly complex compositing tree in Nuke, I treated this project as a test of my adaptability. It stands as strong proof of my ability to rapidly learn highly technical tools, deconstruct complex workflows, and solve problems within an unfamiliar software ecosystem.',
      roleDetail: 'Responsible for procedural snow mountain generation (HeightField) and dynamic simulations in Houdini; configured multi-pass (AOV) rendering strategies. In Nuke, executed live-action keying, depth-of-field processing, color grading, and managed the overarching node-based compositing logic.'
    }
  },
      {
    id: 'd4',
    common: {
      category: 'Graphics & UI',
      image: 'https://i1.hdslb.com/bfs/archive/46bd081e277692fbcdc40f9fa21171e45c74d61c.jpg@256w_144h_1c.avif',
      figmaUrl: '', 
      gallery: [''],
      bilibiliId: 'BV19mX5BwE2R'
    },
    zh: {
      title: 'MotionBuilder 动捕数据配置与 UE5 动画重定向管线',
       subtitle: '动作捕捉',
       description: '这是一个基于 MotionBuilder 和 Unreal Engine 5 的简短动捕动画管线验证项目。',
       role: '个人制作',
       tags:[ 'MotionBuilder', 'UE5', 'Retargeting (重定向)'],
       concept: '完整流程择日放出，Shogun数据提取-清理→导出.fbx至mobu整理-配置character-将UE的人物导出至mobu，在mobu中重新绑定骨骼并渲染动画→导入进UE5',
       roleDetail: '动捕棚录制-数据清理-骨骼重建-动画烘焙-UE5重定向配置-最终动画效果实现。(动捕原始数据源自课程/开源素材)'
    },
    en: {
      title: 'MotionBuilder Motion Capture Data Configuration & UE5 Animation Retargeting Pipeline',
      subtitle: 'Mocap',
      description: 'A concise motion capture animation pipeline validation project based on MotionBuilder and Unreal Engine 5.',
      role: 'Individual Project',
      tags: ['MotionBuilder', 'UE5', 'Retargeting'],
      concept: 'The complete process will be released at a later date. It involves extracting and cleaning motion capture data using Shogun, exporting it as .fbx to MotionBuilder for organization and character configuration, re-binding the skeleton in MotionBuilder and rendering the animation, and finally importing it into UE5 for retargeting.',
      roleDetail: 'Motion capture recording, data cleaning, skeleton reconstruction, animation baking, UE5 retargeting configuration, and final animation implementation. (Original motion capture data sourced from the course/open-source materials)'
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
      description: 'Slide design for Uniqlo brand analysis, combining minimalist symbols with the brand\'s red logo.',
      role: 'Layout Design',
      tags: ['PPT', 'Brand', 'Figma'],
      awards: ["Excellent Course Presentation Award"],
      concept: "Uniqlo, as a fast-fashion brand, has a minimalist style and store design that deeply attracted me. Therefore, in the design, I chose a minimalist design style and brand colors to match Uniqlo's brand identity while highlighting the professionalism of the content.",
      roleDetail: "Independently completed the entire process from information gathering to final layout design."
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
      description: 'Slide design for a course summary on academic writing, combining minimalist symbols with eye-friendly green design.',
      role: 'Layout Design',
      tags: ['PPT', 'Summary', 'Figma'],
      awards: ["Excellent Course Presentation Award"],
      concept: "To further study English academic writing, I took this additional course. In the slide design for the summary, I chose a minimalist design style with eye-friendly green colors to highlight the professionalism of the content while creating a fresh and comfortable visual experience, helping the audience better absorb the information.",
      roleDetail: "Summarized and categorized the teacher's scattered knowledge points, and designed the layout accordingly."
    }
  },
  // Add more design projects here
];
