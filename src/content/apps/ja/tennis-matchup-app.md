---
appId: tennis-matchup-app
locale: ja
title: "Tennis Matchup App"
slug: tennis-matchup-app
category: sports-competition
description: "テニスの参加人数やコート数から、練習用の組合せを作成するアプリ。"
createdAt: "2026-04-20"
updatedAt: "2026-05-29"
status: active
tags: ["Next.js","TypeScript","jsPDF","PWA"]
featured: false
appUrl: https://tennis-matchup-app.vercel.app/
githubUrl: https://github.com/Bamboosato/tennis-matchup-app
---

## 概要

参加者・コート・実施回数を指定して、シングルスやダブルスの組合せを作成します。休憩回数などを確認し、別のseedで組合せを作り直すこともできます。

## 主な機能

- シングルス・ダブルスの組合せ作成
- 休憩回数や組合せ結果の統計表示
- A4印刷・PDF出力とQRコードによる共有

## 特徴

当日の条件を指定して組合せを作り、結果を印刷や共有へつなげられます。PWAにも対応します。

## 技術構成

Next.js・TypeScriptを中心に、状態管理にZustand、PDFにjsPDF、共有にQRコードを使用します。
