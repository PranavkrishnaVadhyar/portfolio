# Pranavkrishna — neural portfolio

## Run

Use Node.js 20 or newer. Install with `npm ci`, then run `npm run dev`. For production, run `npm run build` and `npm start`. npm and `package-lock.json` are authoritative for this redesign.

## Stack and architecture

- Next.js App Router, React 19, TypeScript, Tailwind CSS.
- React Three Fiber 9, drei, and React Three Postprocessing for a single hero canvas.
- Framer Motion for section depth transitions, word reveals, cursor interpolation, and magnetic links.
- Lenis for desktop smooth scrolling; native touch scrolling is retained.
- react-parallax-tilt for layered portrait and project cards.

The hero is dynamically imported with `ssr: false`. It contains a five-layer neural graph, pointer-responsive nodes, edge pulses, and background particles. Desktop has 65 nodes and 1,500 dust particles; mobile has 40 nodes and 450 particles. Pixel ratio is capped at 1.5. Bloom is omitted on mobile and disabled if frame times remain slow. The canvas stops continuous rendering outside the hero and in hidden tabs.

Other sections use CSS 3D and HTML/SVG rather than additional WebGL contexts: a draggable skill sphere, layered project diagrams, an experience pipeline, a medal and reversible award cards, and a wireframe globe marking Kochi. All visual assets are procedural apart from the existing profile photograph. No project screenshots, external textures, GLB models, or hosted font service are required.

The global motion control, reduced-motion preferences, and static hero fallback keep the site usable on constrained devices. Touch and keyboard users can select skills and toggle achievement details explicitly. The system cursor is retained alongside a decorative pointer halo.

## Content

Gen-O-Sys is replaced by PramaanSetu. Its project description and stack come from https://github.com/PranavkrishnaVadhyar/PramaanSetu/blob/main/README.md. The portfolio retains its synthetic-document educational scope and does not claim real Aadhaar e-KYC or UIDAI integration.

## Validation

`npm run build` validates TypeScript. Local browser checks and screenshots are kept in `.qa/` (Git-ignored). Safari and Firefox require separate device/browser verification.
