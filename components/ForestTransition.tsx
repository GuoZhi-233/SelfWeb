import React from "react";
import { TreeDeciduous, TreePine } from "lucide-react";

export const FOREST_COVER_MS = 900;
export const FOREST_REVEAL_MS = 450;
export const FOREST_INTRO_MS = 1800;

// Solid icon silhouettes share a ground line and grow from their trunks.
const trees = [
  { x: 6, size: 76, delay: 4, back: true },
  { x: 30, size: 90, delay: 2, back: true },
  { x: 72, size: 84, delay: 3, back: true },
  { x: 96, size: 72, delay: 5, back: true },
  { x: 17, size: 68, delay: 5, back: false },
  { x: 49, size: 110, delay: 0, back: false },
  { x: 82, size: 78, delay: 6, back: false },
];

export function ForestSilhouette({ slow = false }: { slow?: boolean }) {
  return (
    <div className={`forest-scene ${slow ? "forest-slow" : ""}`} aria-hidden="true">
      {trees.map((tree, i) => {
        const Tree = i % 2 === 0 ? TreePine : TreeDeciduous;
        return (
          <div
            key={i}
            className={`forest-tree ${tree.back ? "forest-tree-back" : ""}`}
            style={{
              "--tree-x": `${tree.x}%`,
              "--tree-size": `${tree.size}vmax`,
              "--tree-delay": tree.delay,
            } as React.CSSProperties}
          >
            <Tree fill="currentColor" strokeWidth={0.8} />
          </div>
        );
      })}
      <div className="forest-canopy" />
    </div>
  );
}

export default function ForestTransition({ phase }: { phase: "cover" | "reveal" }) {
  return (
    <div
      className={`page-transition ${phase}`}
      style={{ "--forest-reveal-time": `${FOREST_REVEAL_MS}ms` } as React.CSSProperties}
      aria-hidden="true"
    >
      <ForestSilhouette />
    </div>
  );
}
