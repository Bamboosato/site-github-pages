# Mogura Panic initial listing — 2026-11-12

Proposal: `mogura-panic-initial-617201aad98e-public-listing`.
Site base: `e77cf91b224f73c1f96015653b33dbff47042f87`.
Application source: `Bamboosato/mogura_panic` at `617201aad98e2cb41377cb2e3f3a355d3b6ad729`.

## Preconditions and selected checks

- Confirmed checkout/origin, freshly fetched main, all remote heads, and open PRs (dependency PR #26 only). No existing Mogura listing or branch. No repository-local `.agents/skills` was present.
- Monitoring state reservation and proposal were re-read before changes and matched the delegated implementation. Monitoring state is maintained by the coordinating task; this change does not edit it.
- Functional: JA/EN details, app lists, visual/hobbies category and Updates link to the new app; language switching stays on the same app.
- Data: shared metadata/date/IDs/URLs and usage IDs agree; one initial Update per locale. Existing tests exercise missing/invalid/duplicate data. Compare all previous content and unrelated JSON records against the site base.
- Nonfunctional/boundary: root and project base builds, generated HTML metadata and local references, desktop and narrow/mobile widths. UI: text wrapping and no horizontal overflow. State transitions: JA → EN → JA and Markdown add/edit verification.
- Content-only scope: use existing image-free app layout. No new display branches, dependencies, schema or settings. `verify:usage` is not selected because usage display branches are unchanged. No full cross-browser or application gameplay suite.
- Build and browser checks run sequentially against the same generated site; Node.js v24.19.0 and npm 11.9.0. CI specifies Node.js 24.22.1.

## Source and delivery boundaries

Re-read pinned README and runtime sources for engine duration/speeds/modes/rules, local top 10 persistence, pointer controls, results, sound, Japanese UI, PWA manifest, Google Fonts, and safe-area CSS. Application PR #1 is merged at `2026-11-12T07:35:22Z` into the fixed SHA, establishing the meaningful app date. Created date is omitted. iOS changes are included in the initial listing, with no separate Update.

The monitoring task supplied HTTP 200 and Vercel production READY/exact-SHA/canonical-alias evidence plus static JS and service-worker checks. These are inherited delivery observations, not new Cloud HTTP or gameplay tests. PWA installation support does not establish offline restart. No `offline-after-setup`, cognitive improvement, or clinical efficacy claim is added.

## Results

| Check | Result |
| --- | --- |
| `npm run verify` | Passed: 33 tests; Astro check 38 files, zero errors/warnings/hints; 54 pages and 1,102 local links/assets. |
| `npm run verify:bases` | Passed sequential `/` and `/site-github-pages` builds, each 54 pages and 1,102 local references. |
| `npm run verify:markdown` | Passed bilingual add/edit checks; temporary fixtures removed and original site rebuilt/validated. |
| Preservation and whitespace | Every pre-existing content file is byte-identical to the site base. Removing the single new Mogura record from each JSON yields the original parsed document, including top-level historical dates and unrelated evidence. `git diff --check` passed. |
| Local Chromium | 12 cases passed: JA/EN detail at 1440×1000, 390×844 and 320×844; JA/EN apps/category/Updates at 390px. New entries occur once, use the correct date, and link to the matching locale's detail. Canonical/hreflang, app/GitHub URLs, no-image layout and usage caveats passed. JA → EN → JA and visible keyboard skip focus passed. No horizontal overflow or console/page errors. |

Viewed JA/EN desktop, JA390 and EN320 screenshots. Text and usage notes fit. The shared English UI's external-link arrow uses a fallback glyph in this Linux environment, as recorded in previous verification; UI is unchanged. Logs, `browser-results.json` and six detail screenshots are in ignored `artifacts/mogura-panic/`. Playwright was installed only under `/tmp`, using the existing `/usr/bin/chromium`; project dependencies and lockfile are unchanged. Its first temporary install failed because the default npm cache path was unavailable; specifying a writable `/tmp` cache succeeded.

Application gameplay, real touch/mouse and audio behavior, PWA installation/update, offline restart, physical iOS devices, other browsers/OS and production rendering of this unmerged portfolio change remain unverified. This is local portfolio rendering verification, distinct from the inherited production-app static/deployment evidence.

## Publication boundary

Only `.github/workflows/deploy.yml` exists. Push trigger targets main only; pull requests build/validate/upload artifacts. Deploy requires `github.ref == 'refs/heads/main' && github.event_name != 'pull_request'`. This task stops at a draft PR and exact-head CI verification. No merge, manual dispatch, deploy, auto-merge or main push.
