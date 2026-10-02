---
appId: markdown-knowledge-board
locale: ja
title: "Markdown Knowledge Board"
slug: markdown-knowledge-board
category: productivity
description: "Markdownのメモを整理し、検索・編集・プレビュー・出力まで行うノートアプリ。"
createdAt: "2026-07-09"
updatedAt: "2026-10-01"
status: active
tags: ["React","TypeScript","IndexedDB","Markdown"]
featured: true
appUrl: https://markdown-knowledge-board.vercel.app/
githubUrl: https://github.com/Bamboosato/markdown-knowledge-board
---

## 概要

Markdownファイルを取り込み、タグや検索で整理しながら編集できます。ブラウザーに保存したノートをプレビューし、印刷・PDFやスライドとして利用できます。

## 主な機能

- 複数Markdownの入出力、本文・タイトル検索、タグ管理
- CodeMirror編集、タスクチェック、MermaidとMarpの表示
- JSONバックアップ、印刷／PDF、GitHub連携のクラウドバックアップ

## 特徴

通常のノートはIndexedDBに保存し、PWAのオフライン利用にも対応します。GitHub連携のクラウドバックアップを使う場合は認証とネットワーク接続が必要です。

## 技術構成

React・TypeScript、CodeMirror、IndexedDB、Mermaid、Marpを使用します。
