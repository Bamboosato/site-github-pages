---
appId: app-rule-shifter
locale: ja
title: "Rule Shifter"
slug: app-rule-shifter
category: visual-experimental
description: "色・形・数・模様から隠れた移動ルールを推理し、途中のルール変更に対応する迷路パズル。"
updatedAt: "2026-10-30"
status: active
tags: ["Next.js", "React", "TypeScript"]
featured: false
appUrl: https://rule-shifter.vercel.app/
githubUrl: https://github.com/Bamboosato/app-rule_shifter
access: open
usageFeatures: ["on-device-processing", "no-registration"]
usageNote: "登録せずブラウザーで遊べます。ゲーム処理は端末内で行われ、表示・音の設定は利用中のブラウザーに保存されます。アプリの案内は主に日本語です。初回の読み込みには通信が必要です。"
---

## 概要

色・形・数・模様を持つマスを上下左右につなぎ、ゴールを目指す迷路パズルです。進めたかどうかを手掛かりに移動ルールを推理し、渦巻きマスで切り替わるルールに対応します。

## 主な機能

- 8つの通常ステージと7×7の日替わりチャレンジ
- 4×4〜10×10の盤面。大きな迷路は表示範囲をスクロール
- タッチ・マウス・キーボードでの操作
- 通過済みのマスを選び、その地点まで経路を巻き戻す操作
- 3回のミスでゲームオーバーになるライフ制と、時間・手数の表示
- 現在の一致ルールの属性を示すガイド、色名略号の表示、効果音の切り替え
- クリア後に時間・手数・残りライフなどの結果テキストをコピー

## 特徴

色・形・数・模様の単一属性を合わせるステージから、2つの属性を同時に合わせるステージまで遊べます。正解属性ガイドは設定で切り替えられ、初期状態では非表示です。

## 技術構成

Next.js・React・TypeScriptを使用しています。
