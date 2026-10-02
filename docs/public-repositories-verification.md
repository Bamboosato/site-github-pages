# Public repo投入後の実装・検証結果

実施日：2026-10-02（Asia/Tokyo）

## 反映内容

- 指定されたサイト専用repo `Bamboosato/site-github-pages` をoriginに設定し、既存mainのREADMEコミットを保持。
- Bamboosato所有のPublic repo全14件を確認。fork・archivedは現在0件で、それらを理由とする除外条件は設けていない。
- サンプルを実アプリの紹介28Markdownと、最新の利用者向け更新28Markdownに差し替え。
- 公開README・ソース・コミットから紹介と技術を確認。MatchupLabの古いREADME記述は現在のIndexedDB保存・ローカル生成のソースで補正。
- 公開URL、作成日、更新日と根拠コミットを `docs/public-repositories.json` に記録。作成日はrepoの作成日、更新日は確認できた意味のある利用者向け変更日。
- 14件のhomepageはHTTP 200。各アプリの機能の通し検証は行っていない。
- 定期同期は導入せず、コンテンツと確認記録を手動更新する構成。

## 観点と実行範囲

データ観点はPublic一覧との掲載集合一致、翻訳・更新参照、URLと日付の根拠。機能観点は詳細・一覧・カテゴリ・言語切替。非機能観点は静的出力、metadata、root／project base。UI観点は実データの長い名称・英語文言と狭い画面での表示。

正常系は実14件の両言語掲載を確認。異常系は必須欠落・翻訳欠落・重複・不正値を既存の単体テストで検証。境界は任意URL／画像なし、空データ、320pxとroot／project base。状態遷移は言語対応とMarkdown追加・変更。処理は同一出力・ブラウザーに対して逐次実行。

## ローカル検証結果

| 対象 | 結果 |
| --- | --- |
| `npm run verify` | テスト16件成功。Astro check 34ファイル、error／warning／hintなし。Build・生成HTML検証成功 |
| コンテンツ | 紹介28件・更新28件。全Public repoの両言語集合が確認記録と一致し、サンプルなし |
| 静的出力 | 44ページ、816件のローカルリンク／資産参照を検証 |
| `npm run verify:bases` | `/` と `/site-github-pages` の両方でBuild・リンク・metadata検証成功 |
| `npm run verify:markdown` | 新規両言語ページ、任意ボタン・画像・本文リンク、本文／metadata変更を確認。一時データを除去し実14件へ復元 |
| HTTP | ローカルpreviewのAppsページはHTTP 200 |
| `git diff origin/main --check` | 成功。不要な末尾空行を除去し、Markdownの明示改行は保持。`.gitattributes` で改行をLFに統一 |

すべての生成ページについてlang、canonical、hreflang、OG、見出し、言語切替先と通常ナビゲーションを検証した。

## ブラウザー確認と未実施範囲

初期構築で同じ共有UIの主要遷移、日英切替、320／390／768／1440pxのDOM実測、キーボード、狭い画面の画像確認を行った。詳細は `docs/verification-results.md`。

今回の実データ投入後は代表的な一覧・詳細・言語切替に絞って逐次確認した。全ルートのリンク・metadataは生成HTML検証で網羅し、同じ共有UIの全ページ×全画面幅の操作は繰り返していない。

| 対象 | 結果 |
| --- | --- |
| 日本語・英語Apps | 14件、更新日降順、公開アプリリンク14件、サンプル表示なし |
| スポーツカテゴリ → MatchupLab | 対象4件に絞り込み、実アプリの詳細へ正常遷移 |
| MatchupLabの日本語 → 英語 | 同じslugを保持し、英語の概要・機能・特徴・技術構成を表示 |
| 英語詳細 → Apps → Updates → About | 英語を維持。Apps14件、Updates14件で日付順 |
| 英語Apps 320／390／768／1440px | DOM実測で横方向のはみ出しなし。Mobileは1カラム、768／1440pxは3カラム |
| 英語MatchupLab 320px | 横方向のはみ出しなし |
| 日本語Home | 実アプリのピックアップ3件と最近更新3件、サンプルなし |
| ブラウザーログ | 警告・エラーなし |
| 画像確認 | 通常のDesktop幅の日本語Home・英語Apps、390pxの英語Appsを取得し目視確認 |

証跡（Git管理外）：`artifacts/public-home-ja.png`、`artifacts/public-apps-en-desktop.png`、`artifacts/public-apps-en-mobile.png`。

既存の検証タブではブラウザー制御が `Emulation.setFocusEmulationEnabled` でタイムアウトしたが、新しいタブを作成すると操作・画像取得が成功した。同じHTTP・出力で確認できたため、既存タブの接続・表示状態の環境問題を原因候補とし、アプリの不具合とは断定しない。失敗時にはサーバー応答とタブ状態を分けて確認する。

クロスブラウザー、別OS、実スマートフォン、全画面の画像確認、各紹介アプリ内部の機能は今回の対象外。

## GitHubと公開

サイトrepo自体は確認時点でPrivate、Pages未設定。掲載対象としての「Public repoすべて」と、サイトrepoの公開設定は別の指定として扱い、repoのvisibilityを変更していない。

実公開・公開URLでの動作確認は未実施。GitHubへ反映する変更はレビュー用PRにまとめ、CI結果を別途記録する。
