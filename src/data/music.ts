
export interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string; // 本地路径，如 "/music/covers/cover1.jpg"
  audio: string; // 本地路径，如 "/music/audio/song1.mp3"
}

/**
 * 🎵 全本地音乐数据库配置说明 / Local Music Database Guide:
 * 
 * 1. 文件存放 (File Storage):
 *    - 请将音频文件放入: /public/music/audio/
 *    - 请将封面图片放入: /public/music/covers/
 * 
 * 2. 引用方式 (Referencing):
 *    - 必须使用以 "/" 开头的绝对路径（相对于 public 目录）
 */
export const MUSIC_PLAYLIST: Song[] = [
  {
    id: "local-01",
    title: "ハレナハレ",
    artist: "清塚信也,NAOTO",
    cover: "/music/covers/haru.jpg", // 确保文件名对应
    audio: "/music/audio/清塚信也,NAOTO - ハレナハレ.flac"     // 确保文件名对应
  },
  {
    id: "local-02",
    title: "Guangzhou_Toys",
    artist: "Mixed Artists",
    cover: "/music/covers/Guangzhou.jpg", 
    audio: "/music/audio/Guangzhou_Toys.mp3"
  },
  {
    id: "local-03",
    title: "美术练习(Remix)",
    artist: "HOW",
    cover: "/music/covers/Art.jpg", 
    audio: "/music/audio/HOW - 美术练习(Remix).mp3"
  },
  {
    id: "local-04",
    title: "Surges",
    artist: "Akuya",
    cover: "/music/covers/surges.jpg",
    audio: "/music/audio/Akuya - Surges.flac"     
  },
    {
    id: "local-05",
    title: "Blue",
    artist: "YOASOBI",
    cover: "/music/covers/blue.jpg",
    audio: "/music/audio/YOASOBI - BLUE.mp3"     
  },
    {
    id: "local-06",
    title: "Summer Ghost",
    artist: "小瀬村晶",
    cover: "/music/covers/summer.jpg",
    audio: "/music/audio/小瀬村晶 - Summer Ghost.flac"     
  },
    {
    id: "local-07",
    title: "Paradise",
    artist: "NiziU",
    cover: "/music/covers/paradise.jpg",
    audio: "/music/audio/NiziU - Paradise -Instrumental-.flac"     
  },
];
