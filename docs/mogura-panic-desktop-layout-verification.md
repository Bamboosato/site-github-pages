# Mogura Panic desktop-layout listing update — 2026-11-13

Proposal: `mogura-panic-617201aad98e-44a3037f0846-desktop-layout-guide`.
Site base: `bcdc872bfdb7be6cbca57ea404d1b6de12914b83` (published initial listing PR #31).
App source: `617201aad98e2cb41377cb2e3f3a355d3b6ad729` → `44a3037f0846c47d43c6a6cc825f14b2692d52ce`.

## Preconditions and selected checks

Confirmed the site checkout/origin, clean working tree, freshly fetched main, all remote heads, and open PRs (dependency PR #26 only). No duplicate layout proposal/update was present. AGENTS.md and content-maintenance.md were read; no repository-local `.agents/skills` was present. The current monitoring reservation matches this proposal, source and site base; monitoring state is maintained by the coordinating task and is not changed here.

- Functional/normal: changed JA/EN details and Updates, app/category dates and detail links, same-app language switching; one new Update per locale, preserving the initial Update.
- Data/abnormal: existing tests cover missing, invalid, duplicate and mismatched metadata. Compare all previous app/update content and unrelated evidence to the base; preserve category, identity, access, usage feature order and usage notes.
- Nonfunctional/boundary: sequential root/project-base builds, generated HTML metadata and links. UI: detail text at 1440px, 390px and 320px, affected lists and Updates at 390px, checking wrapping and horizontal overflow.
- State transition: JA → EN → JA; Markdown add/edit verification followed by fixture cleanup/rebuild. Build and browser operations use the same output directory sequentially.
- Content-only change: representative affected portfolio routes; no full browser matrix or application gameplay suite. `verify:usage` is not selected because usage data and display branches are unchanged. No site UI/schema/dependency/config edits.

## Evidence boundaries

Re-read pinned README.md, src/index.css, src/App.tsx, ResultScreen.tsx and HelpModal.tsx, plus the complete cumulative diff (4 commits / 9 files). CSS uses a 900px minimum width for a left playfield/right score-and-controls layout and an additional maximum-height 700px adjustment. Results use two columns at the same width and align history rows. Guide text sizes and parenthetical wrapping are adjusted. README, engine and persistence paths are absent from the diff; existing gameplay/storage/access claims and caveats remain unchanged.

Fresh GitHub PR metadata reports PR #2 merged at `2026-11-13T04:52:40Z`, and PR #3 at `2026-11-13T05:08:07Z` (one second after each supplied handoff timestamp; the content date remains 2026-11-13). No independent created date is inferred.

Production READY, canonical alias and same-SHA deployment `dpl_EjDHyRHD8F7TpfHWXfZ54Gqa3DjT`, plus HTML/JS/CSS static markers, are inherited monitoring observations. They are separate from local portfolio tests and do not establish game interaction or appearance on physical devices. No new public-app fetch, gameplay, installation or offline-restart test is performed here; no universal fit, cognitive-effect or offline guarantee is added.

## Results

Linux, Node.js v24.19.0 and npm 11.9.0 with existing project dependencies/lockfile; CI specifies Node.js 24.22.1. Playwright was installed only under `/tmp`, using existing `/usr/bin/chromium`. Project dependencies were not changed.

| Check | Result |
| --- | --- |
| `npm run verify` | Passed: 33 tests; Astro check 38 files with zero errors/warnings/hints; 54 pages and 1,106 local links/assets. |
| `npm run verify:bases` | Sequential root `/` and project `/site-github-pages` builds passed, each 54 pages and 1,106 references. |
| `npm run verify:markdown` | Bilingual add/edit checks passed; fixtures removed and original site rebuilt/validated. |
| Preservation / whitespace | Existing app content differs only in the intended Mogura date/layout bullet; all existing Updates are byte-identical. Initial usage audit and unrelated JSON/top metadata are unchanged. Only Mogura inventory's latest date/commit/commit URL and the appended update evidence change. `git diff --check` passed. |
| Local Chromium | 12 cases passed: JA/EN detail at 1440×1000, 390×844 and 320×844; JA/EN apps/category/Updates at 390px. New wording/date, both initial and new Updates, links, canonical/hreflang, usage caveats, same-app JA → EN → JA and visible keyboard skip passed. No horizontal overflow or console/page errors. |

Viewed JA/EN desktop, JA390 and EN320 screenshots; text and usage notes fit. Existing shared English UI external-link arrows show a fallback glyph in this Linux environment; UI is unchanged. Logs, six detail screenshots and `browser-results.json` are in ignored `artifacts/mogura-panic-desktop-layout/`.

These browser checks exercised the local portfolio only. Game interaction, device-specific application rendering, low-height clipping, real mouse/touch/audio/persistence, PWA installation/update/offline restart, physical devices, other browsers/OS and this unmerged portfolio content's production rendering remain unverified.

## Publication boundary

The only workflow is deploy.yml. Push targets main only; pull requests validate/build/upload artifacts. Deploy requires main and a non-pull_request event. This task stops at a new draft PR and exact-head CI verification. No merge, manual workflow dispatch, deploy, auto-merge or main push is authorized or performed.
