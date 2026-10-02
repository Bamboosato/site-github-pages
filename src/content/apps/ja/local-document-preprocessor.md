---
appId: local-document-preprocessor
locale: ja
title: "Local Document Preprocessor"
slug: local-document-preprocessor
category: utilities
description: "文書ファイルをブラウザー内で処理し、Markdownやテキストに変換するツール。"
createdAt: "2026-08-06"
updatedAt: "2026-08-14"
status: active
tags: ["React","TypeScript","WebAssembly","PDFium"]
featured: true
appUrl: https://local-document-preprocessor.vercel.app/
githubUrl: https://github.com/Bamboosato/local-document-preprocessor
---

## 概要

Word・PowerPoint・Excel・OpenDocument・RTF・EPUB・CSV・テキストを含むPDFなどを、後続作業で扱いやすいMarkdownまたはプレーンテキストへ変換します。

## 主な機能

- 複数文書のキュー処理とファイルごとの出力設定
- PDFページ・スライド・シートの範囲選択
- Markdown／テキストのダウンロードと文書メタデータ

## 特徴

文書処理はブラウザー内で行い、文書データを永続保存しない構成です。PDFは別の抽出処理と比較して結果を確認します。OCRや個人情報のマスキングは対象外で、スキャン画像だけのPDFには対応しません。変換結果は確認して利用してください。

## 技術構成

React・TypeScript、anydocのWebAssembly、PDFiumを使用し、文書処理をWorkerへ分離しています。
