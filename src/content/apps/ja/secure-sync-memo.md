---
appId: secure-sync-memo
locale: ja
title: "Secure Sync Memo"
slug: secure-sync-memo
category: utilities
description: "Googleログインとパスフレーズで使う、本文をブラウザーで暗号化してFirebaseに保存する個人用Markdownメモ。"
createdAt: "2026-11-27"
updatedAt: "2026-11-27"
status: active
tags: ["React","TypeScript","Firebase","PWA"]
featured: false
appUrl: https://sync-memo-366f4.web.app/
githubUrl: https://github.com/Bamboosato/secure-sync-memo
access: login-required
usageFeatures: []
usageNote: "Googleアカウントでログインし、パスフレーズで開く個人用のMarkdownメモです。本文はブラウザーで暗号化してからFirebaseに保存され、タイトル・タグ・日時などは暗号化されません。本人の複数端末で使う設計で、メモの共有機能はありません。初回利用と同期には通信が必要です。"
---

## 概要

自分の端末間で個人用のMarkdownメモを整理するアプリです。Googleアカウントでログインし、パスフレーズでメモを開きます。

## 主な機能

- Markdownの編集とプレビュー
- タイトル・タグによる検索と絞り込み
- ピン留めと、ピン留め済み・その他のメモそれぞれのグループ内での並べ替え

## 特徴

メモ本文は端末のブラウザーで暗号化してからFirebaseに保存します。タイトル・タグ・日時などのメタデータは暗号化されません。本人の複数端末で使う設計で、メモを他の人と共有する機能はありません。

初回利用と同期には通信が必要です。

## 技術構成

React・TypeScript・Firebaseを使用し、PWAの仕組みとブラウザーのWeb Crypto APIを備えています。
