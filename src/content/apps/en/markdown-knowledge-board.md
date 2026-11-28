---
appId: markdown-knowledge-board
locale: en
title: "Markdown Knowledge Board"
slug: markdown-knowledge-board
category: utilities
description: "Organize Markdown notes with search, editing, previews, and export."
createdAt: "2026-07-09"
updatedAt: "2026-11-27"
status: active
tags: ["React","TypeScript","IndexedDB","Markdown"]
featured: true
appUrl: https://markdown-knowledge-board.vercel.app/
githubUrl: https://github.com/Bamboosato/markdown-knowledge-board
access: open
usageFeatures: ["on-device-processing","no-registration","offline-after-setup"]
usageNote: "To edit and save offline, complete the app's offline preparation during your first online use. Optional GitHub and Google Drive integrations require authentication with the relevant account and a network connection. Cloud backups are encrypted in the browser before upload. Markdown export to Google Drive uploads an unencrypted .md file."
heroImage:
  src: /apps/markdown-knowledge-board/hero.webp
  alt: "Illustration of fictional notes with tags and a selected Markdown note preview containing headings and a checklist."
  width: 1600
  height: 900
---

## Overview

Import Markdown files and organize them with tags and search. Edit notes stored in the browser, preview them, and use them in print, PDF, or slide workflows.

## Key features

- Multiple Markdown imports/exports, title/body search, and tags
- CodeMirror editing, task checkboxes, Mermaid, and Marp rendering
- JSON backups and print/PDF output
- Optional encrypted cloud backup and restore with GitHub or Google Drive
- Markdown export of the current note to a selected Google Drive folder

## Reorder notes with a long press

Long-press and drag a note card to reorder it within either the pinned or other notes group. The order is stored in the browser and can be restored from a JSON backup or an encrypted cloud backup. Reordering does not change the note’s modification time.

## Selection after import

When Markdown or text files are imported as new notes, the first note saved successfully is selected automatically. This happens only if there are no unsaved changes or unfinished tag input, and no save is in progress, both when the import starts and when it finishes. Selecting, editing, or saving a note during import takes priority and prevents automatic selection.

The Edit/Preview view and search/tag filters stay unchanged. If the selected note does not match the filters, its card stays hidden until the filters are cleared.

## Loading and editing metadata

YAML frontmatter and Metadata processing are limited to 10,000 expanded values and 1,000,000 characters across strings and keys. Circular references and expansion beyond these limits are rejected with an error. Metadata also checks the combined fields and disables Apply while an error remains. Small YAML aliases within the limits remain supported.

## Printing and saving PDFs

In-app printing and PDF output wrap long code and URLs and adjust page breaks for tables and large blocks. Styled output offers A4 or Letter paper, portrait or landscape orientation, an optional cover page, and a table of contents. When a document contains Mermaid diagrams, you can choose diagrams or source code before printing; diagrams are fitted to the printable area while preserving their aspect ratio. Tall images are split for printing when needed. PDF saving uses the browser or operating system print dialog, so check text readability and page settings in the preview before saving.

## Local MCP integration

Optional Local MCP integration lets Codex save new Markdown notes after setup on your PC and an explicit connection in the app. Enabling “Allow reading and updating notes” under Local MCP → Note access also lets Codex search, retrieve, and update existing notes. Retrieved note bodies are passed to Codex. This is separate from automatic synchronization between PCs.

On Windows, you can optionally register a Chrome or Edge profile as the save destination under Local MCP → Use this profile for saves. Set up a compatible Windows runtime, enter the first-time connection code, choose a browser profile with “Find profiles”, and select “Register save destination”. With auto-launch enabled, an explicit save request to the agent can open that destination. Changing the destination does not move existing notes or synchronize profiles.

With permission to read and update existing notes, Custom metadata on matching notes can be changed in a batch after previewing the targets and changes. Add inserts missing keys only, Update changes existing keys only, Upsert updates existing keys or adds missing ones, and Remove deletes keys and their values. Remove does not delete the notes themselves. Removal requires support in both the local MCP service and the app. See [Windows Setup v1.5.0](https://github.com/Bamboosato/markdown-knowledge-board/releases/tag/mkb-windows-setup-v1.5.0) and the [setup instructions](https://github.com/Bamboosato/markdown-knowledge-board/blob/6b8f4f25f1b3bb7931195db6614a4a5e672a16f2/tools/local-mcp/windows/README.md); after upgrading, restart Codex, update the app, and reconnect.

## Design and usage

Notes are stored in IndexedDB, with PWA support for offline use after initial preparation. Google Drive backup, restore, and Markdown export are manual operations. For Google Drive integration, use the [public app on the custom domain](https://mkb.bamboosato.com/).

## Technologies

React, TypeScript, CodeMirror, IndexedDB, Mermaid, and Marp support the app.
