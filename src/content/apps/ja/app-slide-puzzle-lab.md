---
appId: app-slide-puzzle-lab
locale: ja
title: "Slide Puzzle Lab"
slug: app-slide-puzzle-lab
category: visual-experimental
description: "好きな写真をスライドパズルにして、記録やリプレイで遊び方を振り返るアプリ。"
createdAt: "2026-09-24"
updatedAt: "2026-10-02"
status: active
tags: ["React","TypeScript","Canvas","PWA"]
featured: false
appUrl: https://app-slide-puzzle-lab.vercel.app/
githubUrl: https://github.com/Bamboosato/app-slide-puzzle-lab
---

## 概要

写真を正方形に切り抜き、3×3から6×6までのスライドパズルとして遊べます。手数や時間を確認しながら、配置を元の画像に戻していきます。

## 主な機能

- 3×3・4×4・5×5・6×6の盤面と難易度設定
- タップ・スワイプ・矢印キーでの操作
- プレイ記録・ランキング・リプレイ、最短手数の根拠表示

## 特徴

画像はCanvasで処理します。解ける配置にシャッフルし、タブが非表示になるとタイマーを停止します。最短手数は探索で確定した値と参考評価を区別し、大きな盤面や探索時間の上限では参考値を使用します。初回のオンライン準備後はPWAのオフライン機能を利用できます。

## 技術構成

React・TypeScriptとCanvasを使用し、手数の探索はWeb Workerで処理します。

