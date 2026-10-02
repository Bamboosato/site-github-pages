---
appId: draw-lab
locale: ja
title: "Draw Lab"
slug: draw-lab
category: sports-competition
description: "大会のトーナメントとリーグを作成し、参加者管理から印刷まで行う運営ツール。"
createdAt: "2026-07-02"
updatedAt: "2026-09-14"
status: active
tags: ["React","TypeScript","IndexedDB","PWA"]
featured: true
appUrl: https://draw-lab-rho.vercel.app/
githubUrl: https://github.com/Bamboosato/draw-lab
---

## 概要

シングルス・ダブルス・団体戦の大会運営を支援します。参加者を登録し、シードや所属のバランスを考慮したトーナメント表を作成できます。リーグ管理とトーナメントへの連携も提供します。

## 主な機能

- シード・BYE・所属を考慮したトーナメント表の作成
- CSVや貼り付けによる参加者入力、リーグと結果の管理
- SVGプレビュー、印刷・PDF、JSONバックアップ

## 特徴

大会データをIndexedDBに保存するローカル中心の構成です。PWAにも対応し、作成した表はブラウザーの印刷機能を使って出力できます。

## 技術構成

React・TypeScript、IndexedDB、SVGを使用し、画面遷移はReact Routerで構成しています。
