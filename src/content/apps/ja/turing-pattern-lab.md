---
appId: turing-pattern-lab
locale: ja
title: "Turing Pattern Lab"
slug: turing-pattern-lab
category: visual-experimental
description: "反応拡散のパラメータを調整し、生まれる模様をリアルタイムに楽しむ実験。"
createdAt: "2026-06-18"
updatedAt: "2026-08-26"
status: active
tags: ["React","TypeScript","Canvas","MediaPipe"]
featured: false
appUrl: https://turing-pattern-lab.vercel.app/
githubUrl: https://github.com/Bamboosato/turing-pattern-lab
---

## 概要

Feed・Killなどのパラメータを変更し、反応拡散から生まれる模様を観察できます。色やスケールを調整し、画面への入力で模様を変化させます。

## 主な機能

- リアルタイム描画とパラメータ・色・スケールの調整
- タッチでの描画、seedのランダム化、再生／停止
- PNG保存とローカルプリセット、対応環境での動き・音・顔による操作

## 特徴

手動調整に加え、対応する端末ではセンサーや音、顔の動きを入力にできます。これらの入力は任意で、ブラウザーの対応と権限の許可に依存します。

## 技術構成

React・TypeScriptとCanvasで構成し、顔を使う操作にはMediaPipe Face Landmarkerを使用します。
