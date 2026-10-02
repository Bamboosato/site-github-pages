---
appId: matchup-lab
locale: ja
title: "MatchupLab"
slug: matchup-lab
category: sports-competition
description: "メンバーを端末内で管理し、練習会の組合せを作成するアプリ。"
createdAt: "2026-08-20"
updatedAt: "2026-09-14"
status: active
tags: ["Next.js","TypeScript","IndexedDB","PWA"]
featured: false
appUrl: https://matchup-lab-one.vercel.app/
githubUrl: https://github.com/Bamboosato/matchup-lab
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "アカウント登録は不要です。メンバー情報は利用中のブラウザー内に保存し、登録・編集などの管理ができます。クラウドでのメンバー共有は行いません。"
---

## 概要

練習会のメンバーを管理し、当日の参加者とコート条件から組合せを作成できます。メンバー保存と組合せ生成をブラウザー内で行う、ローカル中心のアプリです。

## おすすめのユーザー

メンバーをローカルで管理したい人におすすめです。

## 主な機能

- メンバー登録・編集・削除と参加者選択
- シングルス・ダブルスの組合せ生成と再作成
- 組合せのPDF出力とメンバーJSONの入出力

## 特徴

外部の組合せAPIを使わず、メンバーをIndexedDBに保存します。入力途中の状態や組合せ結果は永続化しません。端末変更やサイトデータ削除に備え、メンバーJSONをバックアップできます。

## 技術構成

Next.js・TypeScript、IndexedDBとブラウザー内の組合せロジックを使用し、PDFをjsPDFで出力します。
