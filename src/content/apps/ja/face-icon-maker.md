---
appId: face-icon-maker
locale: ja
title: "Face Icon Maker"
slug: face-icon-maker
category: visual-experimental
description: "写真から顔を選び、加工や動物エフェクトを加えてアイコンを作るツール。"
createdAt: "2026-06-21"
updatedAt: "2026-09-07"
status: active
tags: ["React","TypeScript","MediaPipe","Canvas"]
featured: false
appUrl: https://face-icon-maker.vercel.app/
githubUrl: https://github.com/Bamboosato/face-icon-maker
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "写真は端末内で処理します。顔検出・背景除去等の初回利用時には、処理用モデルや実行環境の取得にネットワーク接続が必要です。"
heroImage:
  src: /apps/face-icon-maker/hero.webp
  alt: "架空人物の集合図から1人の顔を選び、円形の512×512 PNGアイコンへ切り抜く流れを表す図案。"
  width: 1600
  height: 900
---

## 概要

JPEG・PNGの写真から顔を検出し、選んだ顔をアイコンにできます。集合写真でも対象を選択し、切り抜きや背景、加工スタイルを調整します。

## 主な機能

- 顔の検出・選択と、正方形／円形の切り抜き
- ピクセル・コミック・ペイント加工、動物の顔エフェクト
- 背景の透明化・単色化、512×512 PNGの保存と共有

## 特徴

任意で4倍の超解像処理を利用できます。モデルの取得や共有機能は、利用環境やブラウザーの対応状況に依存します。

## 技術構成

React・TypeScript、MediaPipe、Canvasに加え、LiteRTの超解像モデルを使用しています。
