import React, { useEffect, useState } from "react";
import { ForestSilhouette, FOREST_INTRO_MS, FOREST_REVEAL_MS } from "./ForestTransition";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="290 135 440 755"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="logo-top"
        fill="currentColor"
        d="M709.6 551.91H314.39V327.23c94.18 0 170.52-76.35 170.52-170.52H709.6Z"
      />
      <path
        fill="#b6d22e"
        d="M709.6 866.53H314.39V641.85c94.18 0 170.52-76.35 170.52-170.52H709.6Z"
      />
    </svg>
  );
}
export default function BootSequence({
  onFinish,
  reduced,
}: {
  onFinish: () => void;
  reduced: boolean;
}) {
  const [revealing, setRevealing] = useState(false);
  useEffect(() => {
    if (reduced) {
      onFinish();
      return;
    }
    const timers = [
      setTimeout(() => setRevealing(true), FOREST_INTRO_MS),
      setTimeout(onFinish, FOREST_INTRO_MS + FOREST_REVEAL_MS),
    ];
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") onFinish();
    };
    document.addEventListener("keydown", key);
    return () => {
      timers.forEach(clearTimeout);
      document.removeEventListener("keydown", key);
    };
  }, [onFinish, reduced]);
  return (
    <div
      className={`boot-screen forest-intro ${revealing ? "reveal" : ""}`}
      style={{ "--forest-reveal-time": `${FOREST_REVEAL_MS}ms` } as React.CSSProperties}
      role="dialog"
      aria-modal="true"
      aria-label="作品集开场动画"
    >
      <ForestSilhouette slow />
      <div className="boot-bottom">
        <button onClick={onFinish} autoFocus>
          跳过开场 / SKIP ↗
        </button>
      </div>
    </div>
  );
}
