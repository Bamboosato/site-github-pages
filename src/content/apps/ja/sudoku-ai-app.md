---
appId: sudoku-ai-app
locale: ja
title: "Sudoku AI"
slug: sudoku-ai-app
category: visual-experimental
description: "5段階の難易度、候補メモ、2段階ヒントで楽しむ数独。一時停止と再開に対応。"
createdAt: "2026-10-08"
updatedAt: "2026-10-15"
status: active
tags: ["React","TypeScript","Vite","Gemini"]
featured: false
appUrl: https://sudoku-ai-app.vercel.app/
githubUrl: https://github.com/Bamboosato/sudoku-ai-app
access: open
usageFeatures: ["on-device-processing","no-registration"]
usageNote: "数独ゲームと2段階ヒントは、このアプリへの登録やGemini APIキーなしで利用できます。設定したAPIキーはブラウザーに保存されます。GoogleのAPIへ画像を送信する操作には、インターネット接続と自分のGemini APIキーが必要です。"
heroImage:
  src: /apps/sudoku-ai-app/hero.webp
  alt: "候補メモ付きの数独盤面と、行1・列5の正解を9と示す日本語の論理ヒントを再構成した図。"
  width: 1600
  height: 900
---

## 概要

入門・初級・中級・上級・達人の5段階から選んで遊べる数独です。候補メモと2段階のローカルヒントを使いながら、次の一手を考えられます。

## 主な機能

- 「新規」から5段階の難易度を選んでゲームを開始
- 手動の候補メモ
- Undo、選択マスの消去、誤入力リセット
- 「ヒントを見る」で注目するエリアを案内し、「さらに詳しく」で対象マスと手がかりを表示する2段階ヒント
- 唯一候補・隠れ一択のローカルヒントと、誤入力マスの特定
- タイマーと盤面表示の一時停止／再開
- マスを選ぶと開く3×3の数字パレットと、メニューの「入力方式」で切り替える下部テンキー
- 数字パレットで入力済みの数字をもう一度選んで消去。残り0個の数字も、選択マスの数字やメモから消去可能
- 下部テンキーを選んだ場合、スマートフォンでは数字キーを2段に配置。盤面の数字と候補メモは大きく表示
- 新しいバージョンを検知した際の通知と、通知の「更新」ボタンからの更新
- ライト／ダークテーマ

## 特徴

盤面生成、メモ、2段階ヒントはブラウザー内で処理します。まず注目するエリアを見て考え、必要に応じて対象マスと手がかりへ進めます。誤入力リセットは、正解と異なる入力をまとめて消去します。操作画面のボタンやメニューは日本語で表示されます。

入力方式は初期状態ではポップアップで、切り替えた設定は同じブラウザーに保存されます。

## 技術構成

React・TypeScript・Vite・Tailwind CSSを使用します。
