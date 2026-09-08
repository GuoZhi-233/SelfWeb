import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Maximize,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Language } from "../types";
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
export default function Showreel({
  language,
  reduced,
  enabled,
  onExplore,
}: {
  language: Language;
  reduced: boolean;
  enabled: boolean;
  onExplore: () => void;
}) {
  const video = useRef<HTMLVideoElement>(null),
    stage = useRef<HTMLElement>(null),
    manuallyPaused = useRef(false),
    inView = useRef(true);
  const [muted, setMuted] = useState(true),
    [playing, setPlaying] = useState(false),
    [blocked, setBlocked] = useState(false),
    [failed, setFailed] = useState(false),
    [progress, setProgress] = useState(0);
  const zh = language === "zh";
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    const sync = () => {
      if (
        enabled &&
        inView.current &&
        !document.hidden &&
        !manuallyPaused.current &&
        !reduced
      )
        void v.play().catch(() => setBlocked(true));
      else v.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        sync();
      },
      { threshold: 0.1 },
    );
    if (stage.current) observer.observe(stage.current);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      v.pause();
    };
  }, [enabled, reduced]);
  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      manuallyPaused.current = false;
      void v
        .play()
        .then(() => setBlocked(false))
        .catch(() => setBlocked(true));
    } else {
      manuallyPaused.current = true;
      v.pause();
    }
  };
  const sound = () => {
    setMuted(!muted);
    if (muted) window.dispatchEvent(new Event("showreel-sound"));
  };
  return (
    <>
      <section
        className="reel-stage"
        ref={stage}
        aria-label={zh ? "个人宣传片" : "Personal showreel"}
      >
        <video
          ref={video}
          src={asset("media/showreel.mp4")}
          poster={asset("media/showreel-poster.jpg")}
          autoPlay={!reduced && enabled}
          muted={muted}
          loop
          playsInline
          preload="auto"
          onPlay={() => {
            setPlaying(true);
            setBlocked(false);
          }}
          onPause={() => setPlaying(false)}
          onError={() => setFailed(true)}
          onTimeUpdate={() => {
            const v = video.current;
            if (v && v.duration) setProgress(v.currentTime / v.duration);
          }}
        />
        <div className="reel-shade" />
        <div className="reel-topline">
          <span>
            <i /> PENG ZHOU / SELECTED MOMENTS
          </span>
          <span>SHOWREEL — 01:13</span>
        </div>
        <div className="reel-caption">
          <p>
            {zh
              ? "摄影摄像 / 艺术设计 / 应用开发"
              : "PHOTOGRAPHY / DESIGN / DEVELOPMENT"}
          </p>
          <h1>
            {zh ? (
              <>
                让想象，
                <br />
                成为<span>现实。</span>
              </>
            ) : (
              <>
                Ideas into
                <br />
                <span>motion.</span>
              </>
            )}
          </h1>
          <button className="explore" onClick={onExplore}>
            {zh ? "进入作品集" : "Explore my work"} <ArrowUpRight size={22} />
          </button>
        </div>
        {(blocked || failed) && (
          <div className="video-notice">
            {failed ? (
              <a
                href="https://www.bilibili.com/video/BV1ozRPBCEBJ/"
                target="_blank"
                rel="noreferrer"
              >
                {zh
                  ? "视频暂时无法播放 · 在哔哩哔哩观看 ↗"
                  : "Watch the film on Bilibili ↗"}
              </a>
            ) : (
              <button onClick={toggle}>
                <Play size={17} />
                {zh ? "点击播放宣传片" : "Play showreel"}
              </button>
            )}
          </div>
        )}
        <div className="reel-controls">
          <span>{muted ? "SOUND OFF" : "SOUND ON"}</span>
          <button
            className="round-button"
            onClick={toggle}
            aria-label={
              playing
                ? zh
                  ? "暂停视频"
                  : "Pause video"
                : zh
                  ? "播放视频"
                  : "Play video"
            }
          >
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button
            className="round-button"
            onClick={sound}
            aria-label={
              muted ? (zh ? "开启声音" : "Enable sound") : zh ? "静音" : "Mute"
            }
            aria-pressed={!muted}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <button
            className="round-button fullscreen"
            onClick={() => {
              void video.current?.requestFullscreen?.().catch(() => {});
            }}
            aria-label={zh ? "全屏视频" : "Fullscreen video"}
          >
            <Maximize size={17} />
          </button>
        </div>
        <div className="reel-progress">
          <i style={{ transform: `scaleX(${progress})` }} />
        </div>
      </section>
      <div className="reel-footer">
        <span>
          {zh ? "人生如逆旅，我亦是行人。" : "And miles to go before I sleep."}
        </span>
        <button onClick={onExplore}>
          SCROLL TO EXPLORE <ArrowDown size={17} />
        </button>
        <span>
          {zh ? "上海 / 广州 / 伦敦" : "SHANGHAI / GUANGZHOU / LONDON"}
        </span>
      </div>
    </>
  );
}
