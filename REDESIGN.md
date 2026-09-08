# Portfolio redesign

The existing React + Vite project and all portfolio data remain in place. Work titles, descriptions, links, awards, roles and photography galleries are read from the original `src/data` modules. `cover-cache.json` points to exact downloaded copies of existing covers; it does not replace the original source URLs.

## Experience

- The introduction and route transitions grow layered solid tree silhouettes from small to large. An opaque forest canopy covers the old route before the new one fades into view. Neither animation displays a personal logo or name. Escape, Enter or Skip dismiss the introduction; reduced-motion preferences bypass both animations.
- The homepage plays the complete 72.68-second showreel, muted and inline. Playback pauses outside the viewport or in a hidden tab. Sound, pause, fullscreen and manual-play fallback controls remain available.
- Scrolling reveals selected projects. Dedicated hash routes provide all work, categories, details, photography lightboxes, experience and contact information. Browser back/forward navigates between routes.
- The 3D logo is rendered in Three.js from the original two Bézier paths, with charcoal and lime glass, beveled extrusion and an environment map. It loads near the viewport and stops animating offscreen. Tree transitions use filled Lucide icons; no stock plant photographs are used.
- The original background music remains available from the soundtrack control. Lossless source audio remains in the repository; smaller MP3 playback copies ship to the website.

## Development and publishing

`npm ci` installs the locked dependencies. `npm run dev` serves the preview. `npx tsc --noEmit` validates types.

`npm run build` builds for the existing `/SelfWeb/` GitHub Pages path. Set `SITE_BASE=/` to build the same source for a root-level host. `scripts/finalize-static.mjs` excludes original FLAC files from **build output only**, keeping the web MP3 copies. `.openai/hosting.json` identifies the private Sites preview. The original GitHub remote and Pages workflow remain intact.

External Bilibili/Figma content and original gallery image hosts remain subject to their own availability. Project detail pages always retain direct links to the original work.

## Reference

Archive motion and controlled easing were inspired by [RhineLabUI](https://github.com/LBEILC/RhineLabUI). The opening and page transitions now follow a growing forest silhouette direction. No Rhine Lab brand or model assets are included.
