---
appId: app-stroop-route
locale: ja
title: "Stroop Route"
slug: app-stroop-route
category: visual-experimental
description: "文字の意味とインク色をつなぎ、反転ゲートでルールが切り替わる一筆書きパズル。"
updatedAt: "2026-10-27"
status: active
tags: ["Next.js","React","TypeScript"]
featured: false
appUrl: https://stroop-route.vercel.app/
githubUrl: https://github.com/Bamboosato/app-stroop-route
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "登録せずブラウザーで遊べます。ゲーム処理は端末内で行われ、表示・音量などの設定は利用中のブラウザーに保存されます。日本語と英語の色名を使うパズルです。初回の読み込みには通信が必要です。"
heroImage:
  src: /apps/app-stroop-route/hero.webp
  alt: "4×4の色名パズルを進む経路と、反転ゲートの前後で文字とインク色の対応が切り替わる様子を示した図案。"
  width: 1600
  height: 900
---

## 概要

文字の意味とインク色の対応を考えながら、上下左右の隣接マスをつないでゴールを目指すパズルです。反転ゲートを通ると対応ルールが切り替わります。

## 主な機能

- 7つのステージ、日替わりチャレンジ、4×4〜10×10のランダム迷宮
- タッチ・マウス・キーボードでの操作
- 進めるマスのアシスト、インク色名の表示
- 通過済みのマスをタップ・クリックして、その地点まで経路を巻き戻す操作
- 3回のミスでゲームオーバーになるライフ制。時間・手数・残りライフをまとめて表示
- ミスしたマス・盤面・ライフ表示を強調し、残りライフを通知。漢字の色名も大きく表示
- クリア後にタイム・手数・経路を含む結果テキストをコピー

## 特徴

ひらがな・カタカナ・漢字・英語の色名を使い、文字の意味とインク色を見分けながら経路を考えます。英語のみのStage 6と、4表記が混在するStage 7も遊べます。アシストやインク色名の表示は設定で切り替えられます。

## 技術構成

Next.js・React・TypeScriptを使用しています。
