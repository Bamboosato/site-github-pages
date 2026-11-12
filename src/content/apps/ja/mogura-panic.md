---
appId: mogura-panic
locale: ja
title: "元祖モグラパニック！"
slug: mogura-panic
category: visual-experimental
description: "レトロなモグラ叩きと、数字・色のお題に合わせて狙うルール切替モードを楽しめるゲーム。"
updatedAt: "2026-11-12"
status: active
tags: ["React", "TypeScript", "Vite", "PWA"]
featured: false
appUrl: https://mogura-panic.vercel.app/
githubUrl: https://github.com/Bamboosato/mogura_panic
access: open
usageFeatures: ["on-device-processing", "no-registration"]
usageNote: "登録せずブラウザーで遊べます。ゲーム処理は端末内で行われ、上位10件のスコアは利用中のブラウザーに保存されます。別端末との同期はありません。アプリの案内は日本語です。初回の読み込みやWebフォントの取得には通信が必要です。"
---

## 概要

3×3の穴から出るモグラをタップまたはクリックし、高得点を目指すゲームです。王道モードと、数字・色のお題が途中で切り替わる「脳トレ」モードを選べます。

## 主な機能

- 45秒のゲームと、ゆっくり・ふつう・はやいの3段階の速度
- 王道モードの金モグラ、2回叩くヘルメットモグラ、避ける爆弾
- 偶数・奇数・数字の大小・4色から選ばれる8種類のお題
- お題の変更時に内容を確認できる短い猶予ポーズ
- 得点・ヒット・ミス・最大コンボと、ブラウザー内のTop 10スコア履歴
- レトロな表示、ジオラマ風アニメーション、切り替え可能な効果音
- 対応ブラウザーでのホーム画面への追加

## 特徴

短時間のスコア挑戦や、表示されたお題を見ながら狙う遊びを楽しみたい人に向いています。速度を選び、同じ端末で自分の記録に挑戦できます。

## 技術構成

React・TypeScript・Vite・Tailwind CSSを使用。効果音はWeb Audio APIで生成し、スコア履歴はlocalStorageに保存します。
