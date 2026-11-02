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

## Editing portfolio content

All website copy and personal details live in `data/portfolio.json`. Edit this one file for personal information, the profile image path and dimensions, hero/about descriptions, navigation, skill categories, projects, work experience, awards, metrics, contact links, footer, SEO metadata, and interface labels.

- Add/remove entries in `projects.items`, `experience.items`, `achievements.items`, and `skills.categories`. The project loop derives its length from the data.
- Each project includes `graphic` captions and a `scene` identifier: `applyr`, `interview`, `firstaid`, or `pramaan`. An unknown identifier uses a generic network icon.
- Skill icons: `BrainCircuit`, `Code2`, `Database`, `Cloud`, `Sparkles`. Award icons: `Award`, `Users`, `Star`, `Trophy`. Unknown icon names use a default icon.
- Keep the `github` contact-link ID for the hero GitHub link. Other links can be added or removed.
- Photo files remain in `public/`; JSON stores their paths. Colors, layouts, and animation behavior remain in the components/styles.
- JSON uses double quotes and does not allow comments or trailing commas. Keep the existing object keys when editing.

Changes reload during `npm run dev`. For production, run `npm run build` and restart/redeploy the site. The JSON is public portfolio content; do not put secrets in it.

## Blog and search metadata

- Edit `blogs` in `data/portfolio.json` to manage article titles, original Medium URLs, summaries, publication dates (`YYYY-MM-DD`), reading minutes, topics, and diagram labels. The homepage section and `/blogs` render from the same data.
- `metadata.siteUrl` is the canonical production origin: `https://pranavkrishnavadhyar.vercel.app`. Update it if you move domains, then rebuild. Local previews intentionally keep the production canonical URL.
- `/` and `/blogs` have distinct titles, descriptions, canonical links, Open Graph/Twitter metadata, and generated 1200×630 sharing images. Structured data describes the author, portfolio, blog collection, breadcrumbs, and externally published articles.
- `/sitemap.xml` lists the actual portfolio pages; section anchors and external Medium URLs are not separate sitemap entries. `/robots.txt` permits crawling and points to that sitemap.
- Article cards summarize the originals and link to Medium. No full duplicate article pages or invented publication dates are generated.

After deploying the updated build to Vercel, submit `https://pranavkrishnavadhyar.vercel.app/sitemap.xml` in Google Search Console and inspect `/` and `/blogs`. Validate structured data with Google's Rich Results Test and check social previews. These account/deployment steps are not performed by the local build, and search rankings/indexing are not guaranteed.
