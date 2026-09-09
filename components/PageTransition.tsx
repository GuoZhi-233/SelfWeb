import React from "react";

export default function PageTransition({ phase, onCovered, onFinished }: {
  phase: "cover" | "reveal";
  onCovered: () => void;
  onFinished: () => void;
}) {
  return (
    <div className={`page-transition ${phase}`} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          className="transition-shutter"
          key={i}
          style={{ "--i": i } as React.CSSProperties}
          onAnimationEnd={i === 4 ? (event) => {
            if (event.target !== event.currentTarget) return;
            if (phase === "cover" && event.animationName === "shutter-in") onCovered();
            if (phase === "reveal" && event.animationName === "shutter-out") onFinished();
          } : undefined}
        />
      ))}
    </div>
  );
}
