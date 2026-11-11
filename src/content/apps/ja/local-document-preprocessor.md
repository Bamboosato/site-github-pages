---
appId: local-document-preprocessor
locale: ja
title: "Local Document Preprocessor"
slug: local-document-preprocessor
category: utilities
description: "文書やJSONをブラウザー内で処理し、Markdownやテキストに変換するツール。"
createdAt: "2026-08-06"
updatedAt: "2026-11-11"
status: active
tags: ["React","TypeScript","WebAssembly","PDFium"]
featured: true
appUrl: https://local-document-preprocessor.vercel.app/
githubUrl: https://github.com/Bamboosato/local-document-preprocessor
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "選択した文書・JSONと変換結果はブラウザー内で処理します。初回はネットワーク接続が必要です。アプリの読み込みと必要な静的資産のキャッシュ完了後は、オフラインでも利用できます。入力や変換結果は保存せず、再読み込みやタブを閉じると消えます。"
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

JSONはブラウザー内で解析し、Markdownまたはプレーンテキストで出力します。オフライン用のキャッシュに保存するのはアプリの静的資産で、入力文書や変換結果ではありません。入力サイズ・深さ・ノード数や出力形式ごとの上限があります。

文書処理はブラウザー内で行い、文書データを永続保存しない構成です。PDFは別の抽出処理と比較して結果を確認します。OCRや個人情報のマスキングは対象外で、スキャン画像だけのPDFには対応しません。変換結果は確認して利用してください。

## 技術構成

React・TypeScript、anydocのWebAssembly、PDFiumを使用し、文書処理をWorkerへ分離しています。
