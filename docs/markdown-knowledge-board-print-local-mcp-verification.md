# Markdown Knowledge Board print and Local MCP listing — 2026-11-16

Site base: `a6bc5b793a57da49fcaa91a69a0159fc46d4ce4f`.
App source: `88adadfef26f64b917807fd67228b6ecd8c9cb6f` → `5fd916285d81d8aed09455ccaf96c000ed6b59e0` ([comparison](https://github.com/Bamboosato/markdown-knowledge-board/compare/88adadfef26f64b917807fd67228b6ecd8c9cb6f...5fd916285d81d8aed09455ccaf96c000ed6b59e0): 10 commits / 61 changed files).

## Preconditions and selected checks

Read AGENTS.md, content-maintenance.md, schema.ts, existing bilingual descriptions/Updates and both evidence inventories. No repository-local or workspace `.agents/skills` files were present. Confirmed the site origin, clean checkout, current main and open PRs (dependency PR #26 only). The coordinating task's reservation still matched the proposal and seven-file scope immediately before editing. Its records and three existing held items are not changed here.

- Functional/normal: revised print and new Local MCP paragraphs on both detail pages, one new Update per locale, dates and links on apps/category/Updates, and same-app language switching.
- Data/abnormal: existing tests check invalid/missing/duplicate/mismatched metadata. Preserve descriptions, identifiers, URLs, categories/order, usage features and notes, import/YAML/Drive/offline content, existing Updates and unrelated JSON entries.
- Nonfunctional/boundary: sequential root/project-base builds and generated links/metadata. UI: JA/EN detail at 1440×1000, 390×844 and 320×844; JA/EN apps/category/Updates at 390×844. Check long-text wrapping and horizontal overflow.
- State transition: JA → EN → JA; Markdown add/edit verification with fixture cleanup and final rebuild. Builds and browser operations run sequentially against shared output.
- Content-only scope: representative affected portfolio routes; no full browser matrix or application operation suite. Usage display branches and conditions do not change, so `verify:usage` is not selected. No UI, schema, dependency, workflow or permission changes.

## Evidence and limits

Re-read 15 pinned files: README.md; tools/local-mcp/README.md and windows/README.md; LocalMcpPanel.tsx; localMcpConnection.ts; localMcpNote.ts; db.ts; StyledExportView.tsx; StyledDocument.tsx; styledExport/printLayout.ts, markdown.ts and document.css; MermaidPrintDialog.tsx; mermaidPrint.ts; MermaidBlock.tsx. Exact paths and fixed source URLs are in `docs/app-usage-evidence.json` under `printLocalMcpEvidence`.

Styled layout exposes A4/Letter, orientation, cover and TOC. The TOC contains heading links without page numbers; browser print settings can override paper/orientation. Mermaid uses a print-time diagram/source choice and aspect-ratio-preserving fit, with small-text warnings. Invalid geometry/rendering failures retain source fallback. Downloaded HTML does not receive the print-time Mermaid choice. The existing historical 2026-11-05 Update and Phase 1 evidence remain as dated records; the current app paragraph describes the new behavior.

Local MCP requires PC setup and an explicit app connection. The panel receives save jobs, validates the input and calls the create-only IndexedDB path. Identical retries can reuse a note; conflicting content is rejected without overwriting. This integration neither lists/edits existing notes nor automatically synchronizes PCs. Windows prerequisites are PowerShell 5.1, Node.js 24+, npm, Codex and Chrome MKB PWA; the app paragraph links to the fixed setup instructions. No setup commands or connections were executed here. README reports of earlier production/PWA tests are upstream reports, not tests performed in this task.

Independently rechecked both upstream CI runs against the exact source SHA: [CI 43838012365](https://github.com/Bamboosato/markdown-knowledge-board/actions/runs/43838012365) (Verify, Dependency audit, Browser smoke, PWA) and [Windows MCP setup 43838012483](https://github.com/Bamboosato/markdown-knowledge-board/actions/runs/43838012483) all succeeded. These statuses do not establish second-PC or physical-device acceptance.

Production evidence is inherited from the coordinating audit: deployment `dpl_F9pewbykx1KNfB8osv6hh8YFiupQ`, exact source SHA, READY production at 2026-11-16 09:15:54 UTC; both aliases serve HTML referencing `index-Bj4BYecC.js`; main-bundle print/Mermaid/Local MCP markers and HTTP 200 for `LocalMcpPanel-B5Ar410Q.js` with connection UI were observed. These deployment/asset observations were not remeasured here and are separate from local portfolio display checks.

## Results

Linux, Node.js v24.19.0 and npm 11.9.0 with the existing project dependencies and lockfile; CI specifies Node.js 24.22.1. Playwright was installed only under `/tmp` and used `/usr/bin/chromium`. Project dependencies were not changed. The initial temporary Playwright installation failed because the default npm cache directory was unavailable; using `/tmp/mkb-npm-cache` resolved that environment issue.

| Check | Result |
| --- | --- |
| `npm run verify` | Passed: 33 tests; Astro check 38 files, zero errors/warnings/hints; 54 pages and 1,110 local links/assets. |
| `npm run verify:bases` | Root `/` and project `/site-github-pages` builds passed sequentially: 54 pages and 1,110 references each. |
| `npm run verify:markdown` | Bilingual add/edit checks passed; fixtures removed and original site rebuilt/validated. |
| Preservation / whitespace | JSON top metadata and other apps are unchanged. MKB inventory changes only its latest date/commit/commit URL and appends evidence; usage inventory preserves all existing records and appends evidence. App frontmatter differs only in updatedAt; import/YAML/Drive/offline sections and every existing Update are unchanged. `git diff --check` passed. |
| Local Chromium | 12 page/viewport cases passed: JA/EN detail at 1440×1000, 390×844 and 320×844; JA/EN apps, apps/category/utilities and Updates at 390×844. New text/date, setup link, current and previous Updates, internal links, canonical/hreflang, usage caveats, same-app JA → EN → JA and keyboard skip focus passed. No horizontal overflow or console/page errors. |

The first browser pass used an incorrect category URL in the temporary harness and received 404. After correcting it to the existing `apps/category/utilities/` route, all 12 cases passed; no site code changed. Viewed JA desktop detail, JA390 print text, EN320 detail, JA390 Updates and EN390 category screenshots. Text and long setup links fit. Existing shared English UI external-link arrows show a fallback glyph in this Linux environment; UI is unchanged. Logs, screenshots and `browser-results.json` are in ignored `artifacts/mkb-print-local-mcp/`. These checks exercise the local portfolio only, not application printing or MCP operations.

## Publication boundary

The existing workflow triggers on main push, pull_request and workflow_dispatch. Deploy requires main and a non-pull_request event, so manual dispatch on main can deploy too. The coordinator corrected the initial shorthand after this condition was reported. Workflow files remain unchanged. A push to this content branch does not trigger this workflow; its PR event builds/validates but skips deploy. No main push, merge, auto-merge, workflow dispatch or publication is performed.

The changed portfolio content is unmerged and unpublished. Physical print preview/PDF readability and pagination, native Codex pairing/save, existing PWA acceptance, second-PC setup, real cloud/offline behavior and other browsers/OS/devices remain unverified here.
