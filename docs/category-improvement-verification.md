# カテゴリ改善の実装・検証結果

確認日：2026-10-02。指示書：`docs/site-github-pages-category-improvement-instructions.md`。

ローカルの `codex/card-usage` 作業ツリーで実装・検証済み。直前の利用条件・特徴改善を含む状態でカテゴリとの整合性も確認した。今回の変更のGitHub Pages公開は未実施。

## 新名称・表示順・全14件の所属

日英とも下表の順序・所属で表示する。所属は両言語Markdown、名称とカテゴリ専用説明は共通辞書に集約した。

| 順序 | 既存ID | 日本語名称 | English | 件数 | 所属アプリ |
| --- | --- | --- | --- | --- | --- |
| 1 | `sports-competition` | スポーツ・対戦運営 | Sports & Match Management | 4 | Draw Lab、MatchupLab、Tennis Matchup App、Tennis Organizing App |
| 2 | `visual-experimental` | ビジュアル・ホビー | Visual & Hobbies | 5 | Face Icon Maker、App Reveal Lab、Interactive CMYK Moiré、Turing Pattern Lab、Slide Puzzle Lab |
| 3 | `utilities` | 文書・情報整理 | Documents & Information | 3 | Markdown Knowledge Board、Local Document Preprocessor、Local PII Masker |
| 4 | `productivity` | 予定・連絡管理 | Events & Communication | 2 | RSVP Hub、BBCafe App |

合計14件。各カテゴリ内と「すべて」は従来の更新日降順・同日appId順を維持する。

所属変更は以下の2件だけで、両言語に適用した。

- Face Icon Maker：`utilities` → `visual-experimental`
- Markdown Knowledge Board：`productivity` → `utilities`

Home・Apps・カテゴリ別一覧・カード・詳細で新名称を表示する。カテゴリページの冒頭説明、title、description、Open Graphも共通辞書から生成する。予約ID `other` は残し、空のカテゴリは表示せず自動割当も行わない。

## 互換性と変更範囲

日本語のカテゴリURLは `/apps/category/sports-competition/`、`/apps/category/visual-experimental/`、`/apps/category/utilities/`、`/apps/category/productivity/` を維持した。英語は `/en` 配下で同じIDを使い、公開base `/site-github-pages` を適用する。

全28Markdownについて、公開mainから既存frontmatterを比較し、category以外の既存値が一致することを確認した。アプリ詳細slug・公開先URL・作成日・更新日等を維持している。Updatesと `docs/public-repositories.json` に変更はなく、サイトrepoの除外も継続する。前段で追加した特徴・利用条件も既存テストと生成ページ検証で整合性を確認した。

未知カテゴリの検証は辞書自身のキーに限定した。`constructor` のような継承キーを未知IDとして拒否する境界ケースも追加した。

README・コンテンツ運用ルール・AGENTS.mdには、主目的による分類、IDと表示名の区別、4カテゴリを基本とし5つ目や大きな再分類はユーザーと検討する方針を記載した。

## テスト観点と前提

前提はNode.js 24、Windows、導入済みの依存関係、ローカルAstro静的出力、日英28アプリデータ。同一ブラウザーの操作を逐次実行した。

- データ：14件の所属集合を完全一致で検証し、日英一致・4/5/3/2件・重複／欠落なしを確認。
- 機能：Homeからカテゴリ、カテゴリから詳細、同じページの日英切替、「すべて」への復帰。
- UI：長いカテゴリ名、リンクの折り返し、選択中表示、カード・詳細の新名称。
- 非機能：URL互換性、base、metadata、キーボードフォーカス、閲覧時JavaScriptと外部APIを増やさない構成。

正常系は表示・所属・導線、異常系は未知IDと言語不一致、境界は空カテゴリと継承キー、状態遷移は一覧・詳細・言語切替を対象とした。

## 実行結果

| 検証 | 結果 |
| --- | --- |
| `npm run verify` | 25テスト成功。Astro checkは39ファイルでエラー・警告・ヒント0。44ページのBuildと816内部リンク・資産参照の検証成功。 |
| `npm run verify:bases` | rootとproject baseを順番にBuild・検証して成功。最後に `/site-github-pages` の出力を残した。 |
| 静的出力 | 日英8カテゴリページの所属・件数・更新日順・title・description・OGを検証。Homeのカテゴリ順、Appsの「すべて」＋4リンク、カード／詳細の名称、選択中の `aria-current` も確認。44ページのscript要素は0。 |
| 4画面幅 | 320・390・768・1440pxで、日本語ビジュアル・ホビー、英語Sports & Match Management、英語Documents & Informationを確認。ページ・ナビゲーション・カードカテゴリ名・見出しの横はみ出しなし。 |
| Home | 日本語Homeの4リンクを順にクリックし、それぞれ4・5・3・2件のカテゴリへ遷移成功。 |
| Face Icon Maker | 日本語ビジュアル・ホビー→Face Icon Maker詳細→英語で同じアプリと新カテゴリを維持。カテゴリページ自体の日英切替も同じ `visual-experimental` パスを維持。 |
| Markdown Knowledge Board | 英語Documents & Informationに3件を表示し、Face Icon Makerが含まれないことを確認。Markdown Knowledge Board詳細→日本語で同じアプリと文書・情報整理を維持。 |
| キーボード | 文書・情報整理リンクからTabで予定・連絡管理へ移動し、可視アウトラインを確認。Enterで2件のカテゴリへ遷移し、選択中表示も一致。 |
| 全件に復帰 | 「すべて」への復帰で14件と従来の更新日順を確認。 |
| 実行環境・差分 | 検証タブのエラーログなし。`git diff --check` 成功。 |

E2Eはカテゴリ表示と変更した2アプリの代表導線に限定した。全カテゴリの所属・件数・リンク・metadataは静的HTML検証で網羅し、ブラウザーでは表示幅と言語・リンク・キーボード操作を確認した。クロスブラウザー、リンク先アプリ内部の全機能、本番反映の確認は未実施。

## 代表画面

画像はローカルの `artifacts/category-improvement/` に保存し、Git管理対象外。ローカル表示の証跡であり、本番反映の証拠ではない。

日本語ビジュアル・ホビー（1440px）：

![日本語カテゴリ画面](../artifacts/category-improvement/category-ja-desktop.png)

英語Visual & Hobbies（1440px）：

![英語カテゴリ画面](../artifacts/category-improvement/category-en-desktop.png)

その他：`category-documents-en-desktop.png`、`category-ja-mobile.png`、`category-en-mobile.png`。
