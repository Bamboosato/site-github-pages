---
appId: tennis-matchup-app
locale: ja
title: "Tennis Matchup App"
slug: tennis-matchup-app
category: sports-competition
description: "メンバー管理なしで組合せを作成。ラウンド追加や参加人数の調整にも対応。"
createdAt: "2026-04-20"
updatedAt: "2026-05-29"
status: active
tags: ["Next.js","TypeScript","jsPDF","PWA"]
featured: false
appUrl: https://tennis-matchup-app.vercel.app/
githubUrl: https://github.com/Bamboosato/tennis-matchup-app
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "アカウント登録は不要です。メンバー情報を保存・管理する機能はなく、当日の参加人数などの条件から組合せを作成します。"
heroImage:
  src: /apps/tennis-matchup-app/hero.webp
  alt: "架空の6人で1コート・3ラウンドのダブルス組合せと休憩者を表す図案。各人2回出場し1回休憩、ペアの重複なし。"
  width: 1600
  height: 900
---

## 概要

参加者・コート・実施回数を指定して、シングルスやダブルスの組合せを作成します。休憩回数などを確認し、別のseedで組合せを作り直すこともできます。

## おすすめのユーザー

メンバー管理までは必要なく、その場の参加人数に合わせて組合せを作りたい人におすすめです。

## 主な機能

- シングルス・ダブルスの組合せ作成
- 作成後のラウンド追加・参加人数調整
- 休憩回数や組合せ結果の統計表示
- A4印刷・PDF出力とQRコードによる共有

## 当日の変更への対応

組合せを作成した後からラウンドを追加し、参加人数を調整できます。

## 特徴

当日の条件を指定して組合せを作り、結果を印刷や共有へつなげられます。PWAにも対応します。外部向けAPIの管理・利用条件は、画面上での組合せ作成とは異なります。

## 技術構成

Next.js・TypeScriptを中心に、状態管理にZustand、PDFにjsPDF、共有にQRコードを使用します。
