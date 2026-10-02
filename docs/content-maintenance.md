# コンテンツ更新ルール

## 基本単位

1アプリ×1言語＝1Markdown、1更新×1言語＝1Markdownです。共有の `appId`／`updateId` と `slug` で対応付け、Content Collectionのパス由来IDと混同しないでください。本文とUI文言は別に管理します。

## 新しいアプリ

1. 掲載対象はBamboosato所有のPublic repoすべてです。ただしユーザー指定によりサイトrepo `site-github-pages` は除外します。fork・archived・検証用という理由だけで除外しません。Private repoの情報は掲載しません。
2. `src/content/apps/ja/` と `en/` にファイルを追加します。
3. 必須frontmatterと、概要・機能・特徴・技術構成を両言語で記入します。
4. 存在する公開URL・GitHub URLだけを記載します。サンプルは `sample: true` とします。
5. 必要なら `public/apps/<slug>/` に画像を追加し、翻訳したaltを設定します。
6. 両言語の更新履歴を必要に応じて追加して検証します。`docs/public-repositories.json` にPublic確認日とURL・更新コミットの根拠を記録し、両言語の掲載集合を一致させます。

## アプリの更新

利用者への影響を先に判定します。機能追加、利用者に影響する修正、操作改善などは本文と `updatedAt` を更新し、両言語のUpdate entryを追加します。実コードや変更記録から確認できたことを書き、READMEを無条件に転記しないでください。

dependency更新、CI変更、内部refactoring、formattingだけなら原則としてアプリ更新日・更新履歴を変更しません。ただし利用者への影響が確認できた場合は変更内容に基づき判断します。サイトの翻訳修正だけでもアプリ更新日は進めません。

## カテゴリ分類

カテゴリは利用場面・主目的によって1アプリ1分類とします。画面では次の順序・名称を共通辞書から表示します。従来のIDはURL互換性のため残しており、表示名とは区別してください。

| 既存ID | 日本語名称 | English | 現在の所属 |
| --- | --- | --- | --- |
| `sports-competition` | スポーツ・対戦運営 | Sports & Match Management | Draw Lab、MatchupLab、Tennis Matchup App、Tennis Organizing App |
| `visual-experimental` | ビジュアル・ホビー | Visual & Hobbies | Face Icon Maker、App Reveal Lab、Interactive CMYK Moiré、Turing Pattern Lab、Slide Puzzle Lab |
| `utilities` | 文書・情報整理 | Documents & Information | Markdown Knowledge Board、Local Document Preprocessor、Local PII Masker |
| `productivity` | 予定・連絡管理 | Events & Communication | RSVP Hub、BBCafe App |

画像・動画制作、視覚効果、写真パズルは現段階では分割しません。ReactやWebGLなどの技術名は分類の理由にしません。所属変更は日英Markdownの `category` を同時に変更するだけで反映します。名称とカテゴリページ専用説明は `src/i18n/ui.ts` に集約します。

当面は4カテゴリを基本とします。`other` は予約IDとして残しますが、空のカテゴリを表示せず、分類に迷ったアプリの自動割当先にもしません。5つ目や大きな再分類はユーザーと検討し、自動追加・件数による自動分割を行いません。カテゴリの名称・所属変更だけでは `updatedAt` やUpdatesを変更しません。

## 利用条件と特徴

任意のfrontmatterとして `access`（省略時 `unknown`）、`usageFeatures`（省略時 `[]`）、`usageNote`（言語別の空でない補足）を指定します。カードは特徴だけ、詳細は条件・特徴・補足を表示します。条件・特徴がない場合は空の枠やリストを表示しません。

- `access`: `open` / `login-required` / `role-dependent` / `unknown`。`open`と`unknown`は条件ラベルを表示しません。未確認を`open`に置き換えません。
- `usageFeatures`: `on-device-processing` / `no-registration` / `offline-after-setup`。重複なし・最大3件です。端末内処理は通信ゼロを意味しません。
- `login-required`・`role-dependent`と無条件の`no-registration`は併用できません。役割による条件には対象を説明する補足が必要です。
- オフライン対応には初回オンライン準備の説明を `usageNote` に必ず書きます。PWA・キャッシュ・IndexedDBという技術名だけでは設定しません。
- 日英の条件IDと特徴配列は同じ順序で一致させ、補足は両言語で翻訳します。特徴ラベルは共通辞書を使います。

根拠は `docs/app-usage-evidence.json` に公開repoの固定commit・参照パス・確認日・対象範囲・未確認事項を記録します。実通信・オフライン試験を行ったかをソース確認と区別します。BBCafeの新規利用条件は2026-10-02のユーザーによる運用条件確認です。サイトの説明補足だけではアプリの `updatedAt` とUpdatesを変更しません。

変更後は `npm run verify`、表示分岐の変更時は `npm run verify:usage` を実行します。`verify:usage` は予約したfixtureが存在すれば停止し、日英の6つの表示状態を実際のAstro Buildで確認した後、fixtureを削除して元のサイトを再Buildします。

### テニス系3アプリの紹介根拠

2026-10-02、ユーザー確認：アカウント条件・メンバー管理・おすすめユーザー・Tennis Matchup Appのラウンド追加と人数調整。指示の原本は `docs/site-github-pages-tennis-app-comparison-instructions.md`、アプリ別の記録は `docs/app-usage-evidence.json` の `operationalConfirmation` です。この確認日からアプリのcommitやリリース日を推測せず、紹介補足では `updatedAt` とUpdatesを変更しません。

MatchupLabは登録不要でブラウザー内のメンバー管理、Tennis Organizing Appは登録したアカウントによるクラウド管理・複数端末利用、Tennis Matchup Appは登録不要でメンバー管理を行わず参加人数に応じた組合せ作成を紹介します。おすすめユーザーは概要の直後にH2で記載し、アカウント条件とメンバー管理範囲は既存の `usageNote` に集約します。

Tennis Organizing Appの限定的なゲスト利用は固定commit `ed269664ec1f175e7c8619653171b70b38133e3a` の `src/app/AppClientShell.tsx` でも確認しました。匿名ユーザーのメンバー取得・編集を禁止する分岐（269、673、706行）、メンバー画面の登録要求（831行）、人数からゲスト参加者を構成する分岐（567行）に基づき、人数指定の組合せ作成とメンバー管理を区別します。実アカウントや実データによる操作確認はしていません。

## 翻訳ペア

- 新規アプリ・更新履歴は日本語と英語を同時に追加します。
- `appId`、`slug`、カテゴリID、URL、日付、status、技術タグ、featured等は両言語で一致させます。
- 紹介本文、説明、更新タイトル・本文、画像altは翻訳します。機能の追加・省略を翻訳時に行いません。
- カテゴリ・状態・UI文言は `src/i18n/ui.ts` の両言語辞書で管理します。
- 翻訳欠落のままBuildしません。日本語本文を英語URLで代用しません。
- 紹介サイトの言語対応とリンク先アプリの対応言語を区別します。

## URLと日付

内部リンク・画像はbaseなしのサイト相対パスを指定し、英語ページからは英語URLへリンクします。ブラウザー言語・保存済み設定によるredirectは導入しません。表示言語はアクセスURLで決まります。

日付は実在する `YYYY-MM-DD` を使います。`createdAt` は作成日、`updatedAt` は利用者向けの意味のあるアプリ変更日です。ファイル更新日時で置き換えません。

## 検証とレビュー

`npm run verify` と、必要に応じて `npm run verify:bases` を実行します。翻訳欠落、重複、共通項目不一致、参照不整合、リンク切れは修正してからレビューへ進めます。ログ・画面幅・再現手順を記録し、失敗をデータ／環境／実装／観点不足で切り分けます。

Markdown追加／変更だけで紹介情報を更新できる構造を保ってください。Public repoの一覧は2026-10-02時点の確認記録であり、自動同期ではありません。READMEが古い場合は現在のソースを確認します。今回のMatchupLabはその確認を行い、ローカル保存・生成の実装に基づいて記載しました。

サイト専用repoは `Bamboosato/site-github-pages` です。2026-10-02にPublic化とPages公開が承認されました。サイトrepo自体は、Publicになっても掲載対象から除外するユーザー指定です。確認記録の `excludedRepositories` とテストでこの条件を保持します。
