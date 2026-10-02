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
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "模様の生成と保存は端末内で行います。WebGL 2に対応したブラウザーを使用してください。"
---

## 概要

4つのCMYKレイヤーの表示を個別に切り替え、重なりから生まれる模様を楽しめます。線間隔やノイズなどの共通パラメータを調整し、Flowline・ドット・混合の描画を切り替えられます。

## 主な機能

- レイヤーごとの表示切替と、共通パラメータ・描画モードの調整
- ポインター・タッチ・ペン・キーボード操作
- 再生／停止、ランダム設定、PNG出力とプリセット保存

## 特徴

名前付きプリセットはIndexedDBに最大100件保存できます。フルスクリーンとPWAに対応し、アプリ本体の表示文言は英語です。

## 技術構成

React・TypeScriptとWebGL2／GLSLで描画し、プリセットをIndexedDBに保存します。
