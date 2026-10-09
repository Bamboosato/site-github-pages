---
appId: tennis-organizing-app
locale: ja
title: "Tennis Organizing App"
slug: tennis-organizing-app
category: sports-competition
description: "メンバーをクラウドで管理し、複数端末から利用できる練習会運営アプリ。"
createdAt: "2026-05-08"
updatedAt: "2026-05-29"
status: active
tags: ["Next.js","TypeScript","Firebase","jsPDF"]
featured: false
appUrl: https://tennis-organizing-app.vercel.app/
githubUrl: https://github.com/Bamboosato/tennis-organizing-app
access: login-required
usageFeatures: []
usageNote: "メンバーをクラウドで管理するには、アカウント登録が必要です。保存したメンバー情報は複数の端末・ブラウザーから利用できます。ゲストログインでは人数指定による組合せ作成を利用できますが、メンバー管理はできません。通信が必要です。"
heroImage:
  src: /apps/tennis-organizing-app/hero.webp
  alt: "架空の登録メンバー4人を参加者として選択し、ニックネームと性別表示付きのダブルス対戦表へつなぐ流れを表す図案。"
  width: 1600
  height: 900
---

## 概要

クラウド上で管理しているメンバーから当日の参加者を選び、コート条件を指定して組合せを作成します。

## おすすめのユーザー

メンバーを複数の端末・ブラウザーで共有して管理したい人におすすめです。

## 主な機能

- メンバーの登録・編集・非表示化
- 参加者選択とシングルス・ダブルスの条件設定
- 通常・同性・混合のダブルス設定とPDF出力

## 特徴

メンバー情報をFirebase／Firestoreに保存し、組合せ生成APIと連携します。組合せとPDFの出力までを一連の操作で行えます。

## 技術構成

Next.js・TypeScript、Firebase／Firestore、組合せ生成API、jsPDFを使用します。
