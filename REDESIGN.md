# Portfolio redesign

The existing React + Vite project and all portfolio data remain in place. Work titles, descriptions, links, awards, roles and photography galleries are read from the original `src/data` modules. `cover-cache.json` points to exact downloaded copies of existing covers; it does not replace the original source URLs.

## Experience

- The introduction draws the original identity, runs concentric scans and opens the portfolio. Escape, Enter or Skip dismiss it. Reduced-motion preferences bypass it.
- The homepage plays the complete 72.68-second showreel, muted and inline. Playback pauses outside the viewport or in a hidden tab. Sound, pause, fullscreen and manual-play fallback controls remain available.
- Scrolling reveals selected projects. Dedicated hash routes provide all work, categories, details, photography lightboxes, experience and contact information. Browser back/forward navigates between routes.
- The 3D logo is rendered in Three.js from the original two Bézier paths, with charcoal and lime glass, beveled extrusion and an environment map. It loads near the viewport and stops animating offscreen. No botanical decoration or stock plant images are used.
- The original background music remains available from the soundtrack control. Lossless source audio remains in the repository; smaller MP3 playback copies ship to the website.

## Development and publishing

`npm ci` installs the locked dependencies. `npm run dev` serves the preview. `npx tsc --noEmit` validates types.

`npm run build` builds for the existing `/SelfWeb/` GitHub Pages path. Set `SITE_BASE=/` to build the same source for a root-level host. `scripts/finalize-static.mjs` excludes original FLAC files from **build output only**, keeping the web MP3 copies. `.openai/hosting.json` identifies the private Sites preview. The original GitHub remote and Pages workflow remain intact.

External Bilibili/Figma content and original gallery image hosts remain subject to their own availability. Project detail pages always retain direct links to the original work.

## Reference

Motion direction inspired by [RhineLabUI](https://github.com/LBEILC/RhineLabUI): drawn identity, concentric scanning, layered archive motion, staggered transitions and controlled easing. The implementation uses this portfolio's own mark and content; no Rhine Lab brand or model assets are included.
