---
appId: rsvp-manager-app
locale: ja
title: "RSVP Hub"
slug: rsvp-manager-app
category: productivity
description: "予定やイベントの招待と出欠回答をまとめて管理するアプリ。"
createdAt: "2026-06-01"
updatedAt: "2026-06-13"
status: active
tags: ["Next.js","TypeScript","Firebase","PWA"]
featured: false
appUrl: https://rsvp-manager-app.vercel.app/
githubUrl: https://github.com/Bamboosato/rsvp-manager-app
access: role-dependent
usageFeatures: []
usageNote: "主催者はアカウントでログインします。回答者は招待リンクから入り、案内に従ってニックネーム・PIN等を入力します。回答者に主催者用アカウントの作成は不要ですが、通信が必要です。"
---

## 概要

主催者が予定やイベントを作成し、招待された人が出欠を回答できます。主催者向けの管理画面で回答状況を確認し、招待リンクを共有します。

## 主な機能

- 予定・イベントの作成と回答状況の管理
- 招待リンクからの回答とPIN再設定
- 回答更新の通知とPWA対応

## 特徴

主催者のログインとデータ保存にFirebaseを使用します。招待する人と回答する人の導線を分け、イベントの参加状況を共有できます。

## 技術構成

Next.js・TypeScript、Firebase Authentication、Firestore、Firebase Cloud Messagingを使用します。
