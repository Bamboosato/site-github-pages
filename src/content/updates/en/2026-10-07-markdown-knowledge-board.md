---
updateId: markdown-knowledge-board-2026-10-07
appId: markdown-knowledge-board
locale: en
date: "2026-10-07"
title: "Limit excessive YAML metadata expansion"
---

YAML frontmatter and Metadata expansion are now limited to 10,000 values and 1,000,000 characters across strings and keys. Circular references and expansion beyond the limits are rejected with an error. Metadata also checks the combined fields and disables Apply while an error remains. Small YAML aliases within the limits remain supported.
