# Bamboosato Apps

個人開発アプリの機能、特徴、技術構成、更新履歴を紹介する静的ポートフォリオです。日本語が既定で、英語版は `/en/` 配下に生成します。Bamboosato所有のPublic repo（サイトrepo自体はユーザー指定により除外、2026-10-02確認時点で14件）を両言語で掲載しています。

## 技術構成

- Astro 7 / TypeScript / Markdown / Content Collections（公式Markdown processorで本文パスを処理）
- ZodとYAMLによるBuild前のデータ検証
- Node.js標準テストランナー、生成HTMLのリンク検証
- GitHub Actions / GitHub Pages

外部DB、閲覧時の翻訳API、認証、管理画面は使用しません。ブラウザ上のJavaScriptなしでページ閲覧・言語切替ができます。

## ローカル実行

Node.js 24 LTSを使用してください。依存関係はlockfileに固定しています。

```sh
npm ci
npm run dev
```

ローカルURL：`http://localhost:4321/site-github-pages/`

```sh
npm run verify
npm run verify:bases
npm run preview -- --host 127.0.0.1
```

`verify`は単体テスト、型チェック、コンテンツ検証、Build、生成ページ検証を順に実行します。`verify:bases`はroot `/` とproject `/site-github-pages` を順番にBuildし、両言語のリンク・画像パス・canonical・hreflangを検証します。最後にproject baseの出力を残します。

`npm run build`でも必ずコンテンツ検証が先に実行されます。出力先は `dist/` です。

`npm run verify:usage` は任意の利用条件・特徴・補足の表示を、日英の6つのデータ状態でBuildして確認します。通常の生成ページ検証でも、Home・一覧・カテゴリのカードと全アプリ詳細の表示分担・文言・順序・リスト名を検証します。

## サイト設定

`src/config/site.ts` にサイト名、作者、GitHubリンク、公開origin、baseを集約しています。カテゴリ／状態の翻訳とUI文言は `src/i18n/ui.ts` で管理します。

公開先は `Bamboosato/site-github-pages`、Pages用URLは `https://bamboosato.github.io/site-github-pages/` です。ローカルのGitはこのフォルダー内で独立し、指定されたremoteの既存main履歴を保持しています。サイトrepoのPublic化とPages公開は2026-10-02に承認されました。サイトrepo自体はPublicになっても紹介に掲載しません。

掲載の根拠と確認日、公開URL、利用者向け更新コミットは `docs/public-repositories.json` に記録しています。紹介文はPublic repoのREADME・ソース・変更記録に基づきます。全14件のhomepageは確認時点でHTTP 200でしたが、各アプリの機能を通しで検証したことは意味しません。GitHubの一覧を自動同期する構成ではありません。

Build時の `SITE_URL` と `SITE_BASE` 環境変数でURL設定を上書きできます。例（PowerShell）：

```powershell
$env:SITE_BASE = '/'
npm run build
npm run validate:links
Remove-Item Env:SITE_BASE
```

root siteは `base: '/'`、project siteは `base: '/repo-name'` に設定します。独自ドメインの場合は `site` を変更し、GitHub Pagesのドメイン設定も行ってください。

## Adding a new app

1. `src/content/apps/ja/<slug>.md` と `src/content/apps/en/<slug>.md` を追加します。
2. 共通の `appId` と `slug`、言語ごとの `locale`、説明と本文を記入します。
3. 両言語の更新エントリを必要に応じて追加します。
4. Public repoであることと更新の根拠を確認し、`docs/public-repositories.json` に確認記録を追加します。
5. `npm run verify` を実行します。

UIやルーティングを編集する必要はありません。Markdownの追加だけで詳細ページ・一覧・Homeの対象になります。

Apps一覧は全件を更新順で表示します。カテゴリ別一覧も `/apps/category/<category>/` と `/en/apps/category/<category>/` に自動生成し、JavaScript不要のリンクで絞り込めます。

```yaml
---
appId: my-app
locale: ja
title: My App
slug: my-app
category: utilities
description: 利用者向けの短い説明。
updatedAt: "2026-10-02"
status: active
tags: [TypeScript]
featured: false
sample: false
---
```

本文には概要、主な機能、特徴、技術構成をH2から記載します。英語ファイルは `locale: en` にし、説明と本文を翻訳します。共通項目は一致させます。

`appUrl`、`githubUrl`、`createdAt`、`thumbnail`、`screenshots`、`version`、`license` は任意です。存在しないURLは省略してください。アプリ名・技術タグは共通表記で構いません。

`access`、`usageFeatures`、`usageNote` も任意です。カードには短い特徴だけ、詳細には利用条件と準備の補足も表示します。設定ID・翻訳・矛盾の検証ルールは `docs/content-maintenance.md`、全14件の確認根拠と未確認事項は `docs/app-usage-evidence.json` を参照してください。

カテゴリは主目的・利用場面に基づき、次の順序で表示します。IDは既存カテゴリURLを維持するための識別子で、表示名とは別です。

| ID | 日本語 | English |
| --- | --- | --- |
| `sports-competition` | スポーツ・対戦運営 | Sports & Match Management |
| `visual-experimental` | ビジュアル・ホビー | Visual & Hobbies |
| `utilities` | 文書・情報整理 | Documents & Information |
| `productivity` | 予定・連絡管理 | Events & Communication |

画像・動画制作、模様の実験、写真パズルはビジュアル・ホビー、ノート・文書・テキスト処理は文書・情報整理にまとめます。1アプリは主目的に合う1カテゴリへ配置し、技術名で分類しません。表示名・説明は `src/i18n/ui.ts`、所属は両言語Markdownで管理します。カテゴリページは専用説明を本文冒頭・description・Open Graphへ反映します。

`other` は将来用の予約IDです。空のカテゴリは表示せず、分類に迷ったアプリを自動的に割り当てません。当面は4カテゴリとし、収まりにくいアプリが増えた場合に5つ目をユーザーと検討します。カテゴリ整理だけではアプリの更新日やUpdatesを変更しません。

## アプリ更新とUpdate追加

利用者向けの変更であることを確認し、両言語の本文、必要なメタデータ、`updatedAt`を更新します。

更新履歴は `src/content/updates/{ja,en}/<date>-<appId>.md` に保存します。

```yaml
---
updateId: my-app-new-feature
appId: my-app
locale: ja
date: "2026-10-02"
title: 新しい機能を追加
---
```

本文は利用者に分かる変更内容を記載してください。両言語で同じ `updateId`、`appId`、`date` を持たせます。翻訳修正だけではアプリ更新日を進めません。

## 画像と本文リンク

画像は `public/apps/<slug>/` に置きます。画像がなくてもカード・詳細ページを表示できます。

```yaml
thumbnail:
  src: /apps/my-app/hero.webp
  alt: アプリのメイン画面
screenshots:
  - src: /apps/my-app/screenshot-01.webp
    alt: 設定画面
```

パスには公開baseを含めません。本文のサイト内リンク・画像も `/apps/...` などbaseなしのパスで書きます。Build時にbaseを付与します。英語本文からは `/en/apps/...` のように英語ページを指定してください。altは言語別に翻訳し、画像自体は共有できます。

## Deploy手順

1. サイトrepoをPublicに設定します（2026-10-02承認済み）。紹介の掲載対象からは除外します。
2. `src/config/site.ts` の公開設定を確認します。GitHub repository variablesの `SITE_URL` / `SITE_BASE` で上書きする場合は設定値を揃えます。
3. サイト専用remoteのPRでレビューした変更をmainへ反映します。
4. GitHubのSettings → Pages → Sourceで「GitHub Actions」を選択します。
5. `.github/workflows/deploy.yml` のBuild／Deploy成功を確認します。
6. 公開サイトの日本語・英語、詳細の言語切替、ナビゲーション、画像を確認します。

PRでは検証とartifact生成まで、mainへの反映またはmain上での手動実行では検証後にDeployします。検証／Build失敗時はDeployしません。repository variablesが未指定／空の場合は `src/config/site.ts` の設定を使います。root baseは空文字ではなく `/` を指定してください。

運用ルール：[`docs/content-maintenance.md`](docs/content-maintenance.md)

検証観点：[`docs/test-plan.md`](docs/test-plan.md)

初期構築の検証結果：[`docs/verification-results.md`](docs/verification-results.md)

Public repo投入後の検証結果：[`docs/public-repositories-verification.md`](docs/public-repositories-verification.md)
