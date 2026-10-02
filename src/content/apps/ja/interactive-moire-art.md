---
appId: interactive-moire-art
locale: ja
title: "Interactive CMYK Moiré"
slug: interactive-moire-art
category: visual-experimental
description: "CMYKのレイヤーを重ね、モアレ模様を動かして楽しむビジュアル実験。"
createdAt: "2026-08-25"
updatedAt: "2026-08-27"
status: active
tags: ["React","TypeScript","WebGL2","GLSL"]
featured: false
appUrl: https://interactive-moire-art.vercel.app/
githubUrl: https://github.com/Bamboosato/interactive-moire-art
---

## 概要

4つのCMYKレイヤーを独立して調整し、重なりから生まれる模様を楽しめます。Flowline・ドット・混合の描画を切り替え、操作に合わせて変化するアートを作成します。

## 主な機能

- レイヤーごとのパラメータと描画モード調整
- ポインター・タッチ・ペン・キーボード操作
- 再生／停止、ランダム設定、PNG出力とプリセット保存

## 特徴

名前付きプリセットはIndexedDBに最大100件保存できます。フルスクリーンとPWAに対応し、アプリ本体の表示文言は英語です。

## 技術構成

React・TypeScriptとWebGL2／GLSLで描画し、プリセットをIndexedDBに保存します。

