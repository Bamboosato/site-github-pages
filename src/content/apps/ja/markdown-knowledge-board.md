---
appId: markdown-knowledge-board
locale: ja
title: "Markdown Knowledge Board"
slug: markdown-knowledge-board
category: utilities
description: "Markdownのメモを整理し、検索・編集・プレビュー・出力まで行うノートアプリ。"
createdAt: "2026-07-09"
updatedAt: "2026-10-07"
status: active
tags: ["React","TypeScript","IndexedDB","Markdown"]
featured: true
appUrl: https://markdown-knowledge-board.vercel.app/
githubUrl: https://github.com/Bamboosato/markdown-knowledge-board
access: open
usageFeatures: ["on-device-processing","no-registration","offline-after-setup"]
usageNote: "オフラインで編集・保存を使うには、初回オンライン利用時にアプリ内のオフライン準備を完了してください。任意のGitHub・Google Drive連携には、対応するアカウントでの認証と通信が必要です。クラウドバックアップはブラウザーで暗号化して送信します。Google DriveへのMarkdown出力は、暗号化されていない.mdファイルとして送信します。"
heroImage:
  src: /apps/markdown-knowledge-board/hero.webp
  alt: "架空のノート一覧とタグ、選択中のMarkdownノートの見出し・チェックリストのプレビューを表す図案。"
  width: 1600
  height: 900
---

## 概要

Markdownファイルを取り込み、タグや検索で整理しながら編集できます。ブラウザーに保存したノートをプレビューし、印刷・PDFやスライドとして利用できます。

## 主な機能

- 複数Markdownの入出力、本文・タイトル検索、タグ管理
- CodeMirror編集、タスクチェック、MermaidとMarpの表示
- JSONバックアップ、印刷／PDF
- 任意のGitHub・Google Drive連携による暗号化クラウドバックアップ・復元
- 選択中ノートをGoogle Driveで選んだフォルダーへMarkdown出力

## 取り込み後の選択

Markdown／テキストを新規ノートとして取り込むと、最初に保存に成功したノートが自動で選択されます。自動選択は、取り込みの開始時と完了時の両方で、未保存の変更や入力途中のタグがなく、保存処理中でもない場合に限ります。取り込み中にノートの選択・編集・保存を行った場合は、その操作を優先して自動選択しません。

Edit／Previewの表示や検索・タグの絞り込みは維持されます。選択されたノートが絞り込み条件に合わない場合、そのカードは絞り込みを解除するまで一覧に表示されません。

## メタデータの読み込みと編集

YAMLフロントマターとMetadataの処理に、展開後の要素数10,000、文字列とキーの合計1,000,000文字の上限を設けています。循環参照や上限を超える展開はエラーとして拒否します。Metadataでは複数フィールドの合計も検査し、問題がある間はApplyできません。上限内の小さなYAMLエイリアスは利用できます。

## 特徴

通常のノートはIndexedDBに保存し、初回準備後はPWAのオフライン利用にも対応します。Google Drive連携では、バックアップ・復元とMarkdown出力を手動で行います。Google Drive連携には[独自ドメインのアプリ](https://mkb.bamboosato.com/)をご利用ください。

## 技術構成

React・TypeScript、CodeMirror、IndexedDB、Mermaid、Marpを使用します。
