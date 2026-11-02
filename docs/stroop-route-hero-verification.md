# Stroop Route hero illustration

Proposal ID: `site-stroop-route-hero-20261023`  
Base: `b5a4108f0a16ae0bc1668d860a6917bbb1bc6f39`  
Scope: the explicitly approved Stroop Route hero only. The original illustration uses the existing optional `heroImage` mechanism; it is not an application screenshot or evidence of cognitive benefits.

## Image and source evidence

- Editable source: `public/apps/app-stroop-route/hero.svg` (1600×900, 10,743 bytes; SHA256 `ea9b80bb93189f2581291e44c546bb14a7dec16dcb592babdc1daa601e5498a1`).
- Delivered asset: `public/apps/app-stroop-route/hero.webp` (1600×900, 49,264 bytes; SHA256 `599cbe6a5325d424af83c84016547bc312a9617a0af865244b4300359e995ebb`).
- Cream background, muted green/copper accents, geometric panels and Noto Sans CJK JP follow the existing Slide Puzzle Lab, App Reveal Lab and Face Icon Maker SVG/WebP illustrations. The source SVGs and rendered WebPs were inspected before authoring.
- The SVG was rendered with the repository's already-installed Sharp using WebP quality 92, effort 6. No dependency or runtime versions changed. Japanese labels are rasterized into the shared WebP, so site visitors do not need the rendering font installed.
- The board uses the exact Stage 2 cell data and notation from [fixed stages.ts](https://github.com/Bamboosato/app-stroop-route/blob/1d4e12172a570284a3ae756897639eff431d2e9b/src/lib/stages.ts). The subdued ink palette is illustrative rather than an exact UI color reproduction.
- Rules follow [fixed gameLogic.ts](https://github.com/Bamboosato/app-stroop-route/blob/1d4e12172a570284a3ae756897639eff431d2e9b/src/lib/gameLogic.ts); Japanese color words follow [fixed constants.ts](https://github.com/Bamboosato/app-stroop-route/blob/1d4e12172a570284a3ae756897639eff431d2e9b/src/lib/constants.ts). Public metadata and main HEAD were rechecked before using these sources.
- The illustrated route, in zero-based `(row,column)` coordinates, is `(0,0) → (1,0) → (2,0) → (2,1) → (1,1) → (1,2) → (1,3) → (2,3) → (3,3)`. All eight moves are adjacent and satisfy the active matching rule; no cell repeats. The gate at `(2,1)` changes the rule for subsequent moves, and the last cell is GOAL.
- Right-side examples show normal matching from the word「あお」to blue ink, then reversed matching from purple ink at the gate to the word「むらさき」. Arrow direction matches the board route. No outcome scores, medical claims or unsupported application features appear in the illustration.

## Translation and invariants

Both app Markdown files reference `/apps/app-stroop-route/hero.webp` with width 1600 and height 900. Japanese alt: 「4×4の色名パズルを進む経路と、反転ゲートの前後で文字とインク色の対応が切り替わる様子を示した図案。」 English alt: “Illustration of a route through a 4×4 color-word puzzle, showing how word and ink-color matching reverses at a gate.”

Removing only the added `heroImage` block reproduces each base Markdown byte for byte. All prose, descriptions, conditions, IDs, categories and metadata remain unchanged; `updatedAt` stays `2026-10-22` and `createdAt` remains omitted. Every Updates file, existing evidence JSON and every other application's asset remains unchanged. No new Update was created.

## Validation

Data checks cover source arrangement, route legality, translation metadata, preserved content/dates and image dimensions. Functional checks cover image loading and language transitions. UI checks cover Japanese glyphs, complete image bounds and responsive aspect ratio. Nonfunctional checks cover root/project bases, static output and internal references. Existing tests cover invalid/missing metadata and translation pairs; optional hero rendering is exercised with the real image. The illustration has descriptive alt and adds no interactive control.

| Check | Result |
| --- | --- |
| `npm run verify` | 30 tests passed; Astro check 38 files with zero errors, warnings or hints; 32 app translations and 46 update translations; 48 pages and 952 local references validated. |
| `npm run verify:bases` | Root and `/site-github-pages` builds and reference checks passed. |
| `npm run verify:markdown` | Addition/modification checks passed; temporary fixtures removed and real site rebuilt. |
| Full-size image | Rendered WebP inspected at its original 1600×900 size: complete composition, readable Japanese glyphs and no clipping. |
| Local Chromium details | JA/EN at 1440, 768, 390 and 320px: image loaded with natural size 1600×900, correct base/alt, eager/high-priority attributes, preserved aspect ratio and no horizontal overflow. |
| Listings and transitions | JA/EN Apps and visual category at 1440/390px: 16/7 cards, no image added to the Stroop card, no overflow. JA → EN → JA detail navigation retains the shared image and switches alt. |
| Browser diagnostics | 16 page checks; no page or console errors. Representative desktop/mobile screenshots inspected. |
| Scope | Existing hero rendering code, UI, schema, runtime, dependencies, workflows and settings unchanged. |

Local-only evidence is retained under `artifacts/stroop-route-hero/` (Git-ignored): `browser-results.json`, `image-metadata.json`, JA/EN `detail-{1440,768,390,320}.png`, JA/EN `apps-{1440,390}.png`, and verification logs. These paths refer to the saved Cloud environment; screenshots are local preview evidence, not deployed-site evidence.

The unchanged sole workflow `.github/workflows/deploy.yml` permits deployment only when `github.ref == 'refs/heads/main' && github.event_name != 'pull_request'`. This branch is for draft-PR validation only. Exact-head CI results are recorded in the PR body after completion.

## Limits

No deployment, public application gameplay, offline/PWA tests, physical-device or cross-browser validation was performed for this illustration. The small image labels scale with the existing responsive hero layout; the localized alt and unchanged page prose supply its meaning independently of those labels.
