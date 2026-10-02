---
appId: bbcafe-app
locale: ja
title: "BBCafe App"
slug: bbcafe-app
category: productivity
description: "LINEで受信したメッセージを確認し、日々のお知らせを管理するWebアプリ。"
createdAt: "2026-05-26"
updatedAt: "2026-09-11"
status: active
tags: ["Next.js","TypeScript","Firebase","LINE"]
featured: false
appUrl: https://bbcafe-app.vercel.app/
githubUrl: https://github.com/Bamboosato/bbcafe-app
access: login-required
usageFeatures: []
usageNote: "新規利用には、LINE公式アカウントの取得と、アプリ管理者によるアカウント登録が必要です。"
---

## 概要

LINEのWebhookで受信したテキストを保存し、ログイン後の画面で一覧・詳細を確認できます。日々のお知らせに天気やケアに関する情報を組み合わせる機能も備えます。

## 主な機能

- 個人・グループから受信したLINEテキストの保存と閲覧
- ログイン、パスワード再設定、管理者によるメッセージ削除
- 新着メッセージのWeb Push通知と日々のお知らせ

## 特徴

LINEとWeb画面をつなぐ構成です。受信内容の確認や通知管理には認証とネットワーク接続を使用します。

既存利用者は登録済みアカウントでログインします。アプリ内に新規登録画面はありません。LINE公式アカウントの取得とアプリ管理者によるアカウント登録は、新規利用時の準備であり、ログインのたびに必要な作業ではありません。

## 技術構成

Next.js・ReactとFirebaseを中心に、LINE WebhookとWeb Pushを連携しています。
