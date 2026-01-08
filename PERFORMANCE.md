Performance Audit & Action Plan

Summary (high-level findings)

- Heavy 3D model: `public/models/robot.glb` is ~8.7 MB and is a large payload to fetch and decode. It is lazy-loaded, but still causes long load / decode when displayed.
- Particle background (`react-tsparticles`) was rendered eagerly and configured with 180 particles which can be CPU intensive and lower frame rates on mobile/low-end devices.
- Many components were client components (`"use client"`) even though they do not need client APIs, increasing JS shipped to the client.
- MUI components (Drawer/MenuIcon) were imported statically in a header that loads on every page, increasing bundle size.
- CSS had multiple infinite animations (SVG stroke, gradients, blurs) which can increase GPU/CPU usage, especially on low-end devices.

Immediate changes applied (high-impact, low-risk)

1. Converted non-interactive components into server components by removing `"use client"` where not necessary: `ui/Text.tsx`, `ui/Card.tsx`, `Services.tsx`, `Solutions.tsx`, `Process.tsx`, `Contact.tsx`.
2. Lazy-loaded `react-tsparticles` via `next/dynamic` and throttled it: reduced particle count to 40, added `fpsLimit: 30`, and only render when section is visible and `prefers-reduced-motion` is not set.
3. Rewrote animated counters to use `requestAnimationFrame` (smooth, single-rAF loop) instead of multiple `setInterval`s (less main-thread churn).
4. Dynamically imported heavy MUI pieces in `Header.tsx` (`Drawer` and `MenuIcon`) to avoid shipping them to the initial bundle.
5. Introduced `@media (prefers-reduced-motion: reduce)` to disable animations and hide particles for users who reduce motion.
6. Added `will-change` hints for animated SVG strokes and reduced filter/blur impact where applicable.
7. Added `reactStrictMode: true` and `swcMinify: true` to `next.config.ts` and enabled modern image formats (AVIF/WebP) for optimization in supported browsers.

Recommended next steps (priority order)

1. Compress the GLB model (Draco, glTF compression, or replace with low-poly/progressive model) and provide a static poster or low-res image fallback; consider user-initiated play for heavy animations.
2. Replace or reduce `react-tsparticles` on mobile or provide a CSS/canvas-simplified background for small screens; add an option to pause on tab hidden/low battery.
3. Audit the rest of the codebase for unnecessary client components and convert them to server components (helps reduce hydration cost and JS payload).
4. Add a bundle analyzer (webpack-bundle-analyzer or next-plugin) and Lighthouse CI in CI with budgets for LCP, TBT, and CLS to prevent regressions.
5. Add image optimization (use `next/image`), preload critical images, and prefer AVIF/WebP for large assets.
6. Consider replacing MUI with a lighter header implementation if bundle remains large, or further code-split MUI-only parts.

How to measure and validate

- Build: `pnpm build` (or `npm run build`)
- Run locally: `pnpm start` and open `http://localhost:3000` and run Lighthouse in Chrome devtools (Desktop & Mobile) to capture LCP, TBT, CLS, and FPS.
- Add `webpack-bundle-analyzer` or the Next plugin to get bundle composition and identify large modules.

If you want, I can:

- Add a `script` and configuration for bundle analyzer + a `lhci` setup for CI (automated budgets).
- Create a smaller/Draco-compressed glTF and swap it in, add a poster image, and lazy-load the model only after user interaction.
