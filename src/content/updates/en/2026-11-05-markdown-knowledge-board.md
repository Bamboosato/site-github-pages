---
updateId: markdown-knowledge-board-2026-11-05
appId: markdown-knowledge-board
locale: en
date: "2026-11-05"
title: "Improved printing and PDF output for long content"
---

In-app print/PDF output now wraps long code and URLs and improves pagination for tables and large blocks. Tall images are split for printing when needed, and Mermaid diagrams that may not fit use a source-code fallback with a warning.

Printing waits for fonts, diagrams, and images to be ready and does not start if preparation fails or times out. In Styled Export, use “Retry preparation” to retry document preparation after an error. Save PDFs through your browser or OS print dialog, and check the print preview before saving.
