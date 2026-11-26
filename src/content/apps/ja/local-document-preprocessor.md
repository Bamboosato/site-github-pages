---
appId: local-document-preprocessor
locale: ja
title: "Local Document Preprocessor"
slug: local-document-preprocessor
category: utilities
description: "文書やJSONをブラウザー内で処理し、Markdownやテキストに変換するツール。"
createdAt: "2026-08-06"
updatedAt: "2026-11-26"
status: active
tags: ["React","TypeScript","WebAssembly","PDFium"]
featured: true
appUrl: https://local-document-preprocessor.vercel.app/
githubUrl: https://github.com/Bamboosato/local-document-preprocessor
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "通常のWeb利用では、選択した文書・JSONと変換結果はブラウザー内で処理します。初回はネットワーク接続が必要です。アプリの読み込みと必要な静的資産のキャッシュ完了後は、オフラインでも利用できます。入力や変換結果は保存せず、再読み込みやタブを閉じると消えます。任意のWindows Local MCP連携は別途セットアップが必要で、接続済みのMarkdown Knowledge Boardへの明示的な保存依頼に対応します。"
heroImage:
  src: /apps/local-document-preprocessor/hero.webp
  alt: "架空のDOCX準備メモの見出し・本文・箇条書きをMarkdownとプレーンテキストへ整える流れを表す図案。"
  width: 1600
  height: 900
---

## 概要

Word・PowerPoint・Excel・OpenDocument・RTF・EPUB・CSV・テキストを含むPDFなどを、後続作業で扱いやすいMarkdownまたはプレーンテキストへ変換します。

## 主な機能

- 複数文書のキュー処理とファイルごとの出力設定
- PDFページ・スライド・シートの範囲選択
- Markdown／テキストのダウンロードと文書メタデータ
- JSON全体または一つの配列・オブジェクトを選び、項目表・一覧表・Mermaid形式へ変換

## 特徴

JSON配列の直下から必要な要素だけを選んで変換できます。表やMermaid構造図では元の順序と配列内の位置が保たれます。Mermaid構造図は上下（既定）と左右から選べ、Markdownとプレーンテキストの出力にも反映されます。

JSONはブラウザー内で解析し、Markdownまたはプレーンテキストで出力します。オフライン用のキャッシュに保存するのはアプリの静的資産で、入力文書や変換結果ではありません。入力サイズ・深さ・ノード数や出力形式ごとの上限があります。

通常のWeb利用では文書処理をブラウザー内で行い、文書データを永続保存しない構成です。PDFは別の抽出処理と比較して結果を確認します。OCRや個人情報のマスキングは対象外で、スキャン画像だけのPDFには対応しません。変換結果は確認して利用してください。

## Windowsのローカルエージェントから利用

任意のLocal MCP連携を設定すると、同じWindows PCのエージェントから、選択した文書をMarkdownへ変換できます。たとえば、テキストを含むPDFの指定ページを変換し、品質注記とともに新しいノートへまとめられます。OCRは対象外です。

Markdown Knowledge Boardへの保存を明示的に依頼する場合は、同じPCでMKBを開き、普段使うブラウザープロファイルのLocal MCPを接続しておく必要があります。LDPがMKBを自動接続するものではありません。準備にはNode.js 24やローカルのビルド済み資産などが必要です。[Aboutページ](https://ldp.bamboosato.com/?page=about)から導入・登録手順をMarkdownでダウンロードできます。

PWAの更新では、過去に取得した静的ファイルが新しい版の検証条件に一致するときに再利用します。入力文書や変換結果をキャッシュする機能ではなく、更新速度や通信量を保証するものでもありません。

## 技術構成

React・TypeScript、anydocのWebAssembly、PDFiumを使用し、文書処理をWorkerへ分離しています。
