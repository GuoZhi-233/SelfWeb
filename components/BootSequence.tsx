import React, { useEffect, useState } from "react";

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
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduced) {
      onFinish();
      return;
    }
    const times = [520, 1250, 2100, 2900, 3500];
    const timers = times.map((t, i) =>
      setTimeout(() => (i === 4 ? onFinish() : setStep(i + 1)), t),
    );
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") onFinish();
    };
    document.addEventListener("keydown", key);
    return () => {
      timers.forEach(clearTimeout);
      document.removeEventListener("keydown", key);
    };
  }, [onFinish, reduced]);
  const labels = [
    "INITIALIZING CREATIVE ARCHIVE",
    "DRAWING IDENTITY",
    "CONNECTING IDEAS",
    "PENG ZHOU / ACCESS GRANTED",
    "WELCOME TO MY WORLD",
  ];
  return (
    <div
      className={`boot-screen boot-step-${step}`}
      role="dialog"
      aria-modal="true"
      aria-label="作品集开场动画"
    >
      <div className="boot-top">
        <span>PZ / CREATIVE ARCHIVE</span>
        <span>EST. 2022</span>
      </div>
      <div className="boot-center">
        <div className="boot-orbit orbit-one" />
        <div className="boot-orbit orbit-two" />
        <div className="boot-orbit orbit-three" />
        <div className="boot-mark">
          <BrandMark />
        </div>
        <div className="boot-wordmark">
          PENG
          <br />
          ZHOU
        </div>
      </div>
      <div className="boot-caption">
        <span key={step}>{labels[step]}</span>
        <div className="boot-track">
          <i style={{ transform: `scaleX(${(step + 1) / 5})` }} />
        </div>
        <span className="boot-index">0{Math.min(step + 1, 5)} / 05</span>
      </div>
      <div className="boot-bottom">
        <span>IMAGES. IDEAS. INTERACTIONS.</span>
        <button onClick={onFinish} autoFocus>
          跳过开场 / SKIP ↗
        </button>
      </div>
    </div>
  );
}
