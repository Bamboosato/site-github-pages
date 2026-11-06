---
appId: 3d-rain-viewer
locale: ja
title: "3D RainScape"
slug: 3d-rain-viewer
category: visual-experimental
description: "気象庁・JAXAの雨雲データを3D山岳地形に重ね、日本百名山やお気に入り地点の周辺を確認できる地図ビューア。"
updatedAt: "2026-11-06"
status: active
tags: ["React", "TypeScript", "Vite", "MapLibre GL JS", "WebGL2"]
featured: false
appUrl: https://3d-rain-viewer.vercel.app/
githubUrl: https://github.com/Bamboosato/3d-rain-viewer
access: open
usageFeatures: ["no-registration"]
usageNote: "登録せずブラウザーで利用できます。お気に入りは利用中のブラウザーに保存されます。地図・地形・気象データの取得には外部サービスとの通信が必要です。起動時と現在地ボタン使用時に、ブラウザーの位置情報許可を求める場合があります。"
---

## 概要

気象庁の雨雲データとJAXAの衛星降水データを、山の起伏と重ねて見られる地図ビューアです。日本百名山や任意の地点を選び、視点や時刻を変えながら地形と雨の分布を確認できます。

## 主な機能

- 気象庁の過去2時間の実況と、配信されている予測データを切り替えるタイムライン
- JAXA GSMaPのカタログ最新時刻を基準とした24時間分の衛星降水データ表示
- タイムラインの再生・コマ送り・時刻選択と、1倍・2倍の再生速度
- 日本百名山100座の地域・都道府県による絞り込みと、山名・よみがな検索
- 地点名・座標とズーム・傾き・方角を保存するお気に入り
- 地図上の地点の標高・降雨強度の表示と、現在地への移動
- 地形の高さ強調、雨雲の濃さ、標準地図・起伏陰影・航空写真の切り替え

## 特徴と利用上の注意

地形と雨の分布を視覚的に見比べるためのアプリです。地図表示はWebGL2を使用しています。画面の案内は主に日本語です。

気象庁データから表示する降雨強度は、タイルの色分けに対応する代表値です。地点での厳密な観測値ではありません。表示時刻やデータの提供範囲を確認し、気象情報の正確性や登山の安全を保証するものとして利用しないでください。

PWA用の設定と一部のキャッシュがありますが、新しい気象データや未取得の地図・地形には通信が必要です。完全なオフライン利用には対応していません。

## 技術構成

React・TypeScript・Vite・MapLibre GL JSを使用しています。地形はJAXA AW3D30、降水は気象庁とJAXA GSMaP、背景地図はOpenStreetMap・国土地理院・Esriのデータを利用します。
