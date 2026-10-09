---
appId: app-reveal-lab
locale: ja
title: "App Reveal Lab"
slug: app-reveal-lab
category: visual-experimental
description: "写真にリビール効果を加え、動画やGIFとして書き出すビジュアルツール。"
createdAt: "2026-09-17"
updatedAt: "2026-09-17"
status: active
tags: ["TypeScript","WebGL2","GLSL"]
featured: false
appUrl: https://app-reveal-lab.vercel.app/
githubUrl: https://github.com/Bamboosato/app-reveal-lab
access: open
usageFeatures: ["on-device-processing","no-registration","offline-after-setup"]
usageNote: "オフラインで画像の描画・動画出力を使うには、対応ブラウザーで初回のオンライン読み込みを完了してください。出力形式はブラウザーの対応状況によって異なります。"
heroImage:
  src: /apps/app-reveal-lab/hero.webp
  alt: "同じ風景図案が粗いモザイクから細かなモザイク、元の図案へ段階的に現れる演出を表す3コマ。"
  width: 1600
  height: 900
---

## 概要

アップロードした画像にシェーダーによる演出を加え、動きのあるビジュアルを作成できます。SNS向けの比率やタイムラインを調整し、結果を書き出します。

## 主な機能

- 6種類のGLSLシェーダーによるリビール効果
- SNS向けのアスペクト比とタイムライン調整
- 動画・GIFの書き出し、プリセットの保存とJSON入出力

## 特徴

画像の選択から演出の調整、書き出しまでをブラウザーで行えます。キーボードショートカットと、iOSでの疑似フルスクリーン表示にも対応します。

## 技術構成

WebGL2とtwgl.jsでシェーダーを描画し、mediabunnyとgifencで動画・GIFを書き出します。
