---
appId: tennis-organizing-app
locale: ja
title: "Tennis Organizing App"
slug: tennis-organizing-app
category: sports-competition
description: "テニスのメンバーと参加者を管理し、練習会の組合せを作成するアプリ。"
createdAt: "2026-05-08"
updatedAt: "2026-05-29"
status: active
tags: ["Next.js","TypeScript","Firebase","jsPDF"]
featured: false
appUrl: https://tennis-organizing-app.vercel.app/
githubUrl: https://github.com/Bamboosato/tennis-organizing-app
---

## 概要

登録済みメンバーから当日の参加者を選び、コート条件を指定して組合せを作成します。ログインやゲスト利用の導線と、クラウド上のメンバー管理を備えます。

## 主な機能

- メンバーの登録・編集・非表示化
- 参加者選択とシングルス・ダブルスの条件設定
- 通常・同性・混合のダブルス設定とPDF出力

## 特徴

メンバー情報をFirebase／Firestoreに保存し、組合せ生成APIと連携します。組合せとPDFの出力までを一連の操作で行えます。

## 技術構成

Next.js・TypeScript、Firebase／Firestore、組合せ生成API、jsPDFを使用します。
