---
appId: markdown-knowledge-board
locale: ja
title: "Markdown Knowledge Board"
slug: markdown-knowledge-board
category: utilities
description: "Markdownのメモを整理し、検索・編集・プレビュー・出力まで行うノートアプリ。"
createdAt: "2026-07-09"
updatedAt: "2026-10-02"
status: active
tags: ["React","TypeScript","IndexedDB","Markdown"]
featured: true
appUrl: https://markdown-knowledge-board.vercel.app/
githubUrl: https://github.com/Bamboosato/markdown-knowledge-board
access: open
usageFeatures: ["on-device-processing","no-registration","offline-after-setup"]
usageNote: "オフラインで編集・保存を使うには、初回オンライン利用時にアプリ内のオフライン準備を完了してください。任意のクラウドバックアップには、対応するアカウントでのログインと通信が必要で、バックアップデータをクラウドへ送信します。"
---

## 概要

Markdownファイルを取り込み、タグや検索で整理しながら編集できます。ブラウザーに保存したノートをプレビューし、印刷・PDFやスライドとして利用できます。

## 主な機能

- 複数Markdownの入出力、本文・タイトル検索、タグ管理
- CodeMirror編集、タスクチェック、MermaidとMarpの表示
- JSONバックアップ、印刷／PDF、GitHub連携のクラウドバックアップ

## 取り込み後の選択

Markdown／テキストを新規ノートとして取り込むと、最初に保存に成功したノートが自動で選択されます。自動選択は、取り込みの開始時と完了時の両方で、未保存の変更や入力途中のタグがなく、保存処理中でもない場合に限ります。取り込み中にノートの選択・編集・保存を行った場合は、その操作を優先して自動選択しません。

Edit／Previewの表示や検索・タグの絞り込みは維持されます。選択されたノートが絞り込み条件に合わない場合、そのカードは絞り込みを解除するまで一覧に表示されません。

## 特徴

通常のノートはIndexedDBに保存し、PWAのオフライン利用にも対応します。GitHub連携のクラウドバックアップを使う場合は認証とネットワーク接続が必要です。

## 技術構成

React・TypeScript、CodeMirror、IndexedDB、Mermaid、Marpを使用します。
