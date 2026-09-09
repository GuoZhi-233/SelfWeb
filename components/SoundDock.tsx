import React, { useEffect, useRef, useState } from "react";
import { Music2, Pause, Play, SkipBack, SkipForward, X } from "lucide-react";
import { MUSIC_PLAYLIST } from "../src/data/music";
import { Language } from "../types";
import MediaVolume from "./MediaVolume";
export default function SoundDock({ language }: { language: Language }) {
  const [open, setOpen] = useState(false),
    [index, setIndex] = useState(0),
    [playing, setPlaying] = useState(false),
    [error, setError] = useState(false);
  const [volume, setVolume] = useState(.4);
  const volumeValue = useRef(.4);
  const volumeControl = useRef<MediaVolume | null>(null);
  const audio = useRef<HTMLAudioElement>(null),
    autoplay = useRef(false);
  const song = MUSIC_PLAYLIST[index],
    zh = language === "zh";
  const resolve = (p: string) =>
    `${import.meta.env.BASE_URL}${p.replace(/^\//, "").replace(/\.flac$/i, ".mp3")}`;
  useEffect(() => {
    const pause = () => {
      audio.current?.pause();
      autoplay.current = false;
    };
    window.addEventListener("showreel-sound", pause);
    return () => window.removeEventListener("showreel-sound", pause);
  }, []);
  useEffect(() => () => {
    audio.current?.pause();
    volumeControl.current?.dispose();
    volumeControl.current = null;
  }, []);
  const controller = () => {
    if (!audio.current) return null;
    volumeControl.current ??= new MediaVolume(audio.current, volumeValue.current);
    return volumeControl.current;
  };
  const play = () => {
    // Start both operations in the user gesture, before awaiting either on iOS.
    const resumed = controller()?.resume();
    const started = audio.current?.play();
    return Promise.all([resumed, started]);
  };
  useEffect(() => {
    let cancelled = false;
    setError(false);
    if (autoplay.current)
      void play().catch(() => {
        if (cancelled) return;
        setPlaying(false);
        setError(true);
      });
    return () => { cancelled = true; };
  }, [index]);
  const select = (n: number) => {
    autoplay.current = playing;
    setIndex((n + MUSIC_PLAYLIST.length) % MUSIC_PLAYLIST.length);
  };
  const toggle = () => {
    setError(false);
    if (audio.current?.paused)
      void play().catch(() => setError(true));
    else audio.current?.pause();
  };
  return (
    <aside className="sound-dock">
      <audio
        ref={audio}
        src={resolve(song.audio)}
        preload="none"
        onLoadedMetadata={() => {
          if (volumeControl.current) volumeControl.current.setVolume(volumeValue.current);
          else if (audio.current) audio.current.volume = volumeValue.current;
        }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          autoplay.current = true;
          setIndex((index + 1) % MUSIC_PLAYLIST.length);
        }}
        onError={() => {
          setError(true);
          setPlaying(false);
        }}
      />
      {open && (
        <div className="sound-panel">
          <div className="sound-title">
            <span>LISTEN / {zh ? "背景音乐" : "SOUNDTRACK"}</span>
            <button
              onClick={() => setOpen(false)}
              aria-label={zh ? "关闭播放器" : "Close player"}
            >
              <X size={18} />
            </button>
          </div>
          <p>{song.title}</p>
          <small>{song.artist}</small>
          <div className="sound-actions">
            <button
              onClick={() => select(index - 1)}
              aria-label={zh ? "上一首" : "Previous track"}
            >
              <SkipBack size={18} />
            </button>
            <button
              className="round-button"
              onClick={toggle}
              aria-label={
                playing
                  ? zh
                    ? "暂停音乐"
                    : "Pause music"
                  : zh
                    ? "播放音乐"
                    : "Play music"
              }
            >
              {playing ? <Pause size={19} /> : <Play size={19} />}
            </button>
            <button
              onClick={() => select(index + 1)}
              aria-label={zh ? "下一首" : "Next track"}
            >
              <SkipForward size={18} />
            </button>
          </div>
          <label>
            {zh ? "音量" : "Volume"}
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              aria-valuetext={`${Math.round(volume * 100)}%`}
              onChange={(e) => {
                const next = Number(e.target.value);
                volumeValue.current = next;
                setVolume(next);
                const control = controller();
                control?.setVolume(next);
                void control?.resume().catch(() => setError(true));
              }}
            />
          </label>
          <label className="track-select">
            {zh ? "曲目" : "Track"}
            <select
              value={index}
              onChange={(e) => select(Number(e.target.value))}
            >
              {MUSIC_PLAYLIST.map((s, i) => (
                <option value={i} key={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </label>
          {error && (
            <p role="status">
              {zh
                ? "暂时无法播放，请切换曲目或重试。"
                : "Unable to play. Try another track."}
            </p>
          )}
        </div>
      )}
      <button
        className={`sound-toggle ${playing ? "is-playing" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label={zh ? "打开音乐播放器" : "Open music player"}
        aria-expanded={open}
      >
        <Music2 size={18} />
        <span>{playing ? "PLAYING" : "SOUNDTRACK"}</span>
      </button>
    </aside>
  );
}
