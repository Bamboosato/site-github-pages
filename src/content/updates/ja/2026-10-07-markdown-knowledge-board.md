---
updateId: markdown-knowledge-board-2026-10-07
appId: markdown-knowledge-board
locale: ja
date: "2026-10-07"
title: "YAMLメタデータの過剰な展開を制限"
---

YAMLフロントマターとMetadataの展開に、要素数10,000、文字列とキーの合計1,000,000文字の上限を設けました。循環参照や上限を超える展開はエラーとして拒否します。Metadataでは複数フィールドの合計も検査し、問題がある間はApplyできません。上限内の小さなYAMLエイリアスは引き続き利用できます。
