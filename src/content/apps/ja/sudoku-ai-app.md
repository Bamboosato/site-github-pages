---
appId: sudoku-ai-app
locale: ja
title: "Sudoku AI"
slug: sudoku-ai-app
category: visual-experimental
description: "5段階の難易度、候補メモ、論理ヒントで楽しむ数独。一時停止や途中保存、任意のGeminiアドバイスに対応。"
createdAt: "2026-10-08"
updatedAt: "2026-10-09"
status: active
tags: ["React","TypeScript","Vite","Gemini"]
featured: false
appUrl: https://sudoku-ai-app.vercel.app/
githubUrl: https://github.com/Bamboosato/sudoku-ai-app
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "数独ゲームとローカルヒントは、このアプリへの登録やGemini APIキーなしで利用できます。途中経過は『保存』で手動保存し、同じブラウザーの『マイパズル』から呼び出せます。Geminiアドバイスは任意のオンライン機能です。自分のAPIキーを使う場合、キーはブラウザーに保存され、盤面・メモなどの情報とともにGoogleのAPIへの通信に使われます。"
heroImage:
  src: /apps/sudoku-ai-app/hero.webp
  alt: "候補メモ付きの数独盤面と、行1・列5の正解を9と示す日本語の論理ヒントを再構成した図。"
  width: 1600
  height: 900
---

## 概要

入門・初級・中級・上級・エキスパートの5段階から選んで遊べる数独です。候補メモとローカルヒントを使いながら、次の一手を考えられます。

## 主な機能

- 手動の候補メモと、空きマスへの候補の自動入力
- Undo、選択マスの消去、誤入力リセット
- 唯一候補・隠れ一択のローカルヒントと、誤入力マスの特定
- 4段階から選べる任意のGeminiアドバイス
- タイマーと盤面表示の一時停止／再開
- 途中の問題をブラウザー内に保存し、「マイパズル」から再開・最初からやり直し・削除
- ライト／ダークテーマ

## 特徴

盤面生成、メモ、ローカルヒントはブラウザー内で処理します。誤入力リセットは、正解と異なる入力をまとめて消去します。Geminiアドバイスは、考え方の方向性から直接回答まで、希望する詳しさを選んで利用できます。

「保存」で現在の盤面・候補メモ・経過時間・ミス数を利用中のブラウザーに保存できます。

## 技術構成

React・TypeScript・Vite・Tailwind CSSを使用します。任意のGemini連携では、個人のAPIキーによるGoogle Generative Language APIへの直接通信に対応します。
