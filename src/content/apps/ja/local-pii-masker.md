---
appId: local-pii-masker
locale: ja
title: "Local PII Masker"
slug: local-pii-masker
category: utilities
description: "日本語テキストの個人情報候補を確認し、ブラウザー内でマスキングするツール。"
createdAt: "2026-07-10"
updatedAt: "2026-08-13"
status: active
tags: ["React","TypeScript","CodeMirror","ONNX"]
featured: false
appUrl: https://local-pii-masker.vercel.app/
githubUrl: https://github.com/Bamboosato/local-pii-masker
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "原文の検出・マスキング・復元はブラウザー内で行います。初回の自動検出モデル取得には通信が必要です。対応表は保存操作時だけ暗号化して端末内に保存します。結果は人が確認してください。"
---

## 概要

日本語テキストから個人情報の候補を検出し、人が確認してマスキングと復元を行います。原文を編集しながら候補を調整でき、同じ文字列の出現箇所をまとめて扱えます。

## 主な機能

- 個人情報候補の検出と手動確認・調整
- マスキングと復元、長い一致を優先した置換
- 明示操作による暗号化済み対応表のローカル保存

## 特徴

通常はメモリ内で処理し、保存操作では原文セッションではなく対応表を扱います。Windows・macOSのデスクトップChromeを主な対象としています。自動検出ですべての個人情報が見つかることは保証されないため、結果を人が確認します。

## 技術構成

React・TypeScript、CodeMirror、Transformers.js／ONNXと、対応表保存用のOPFSを使用します。
