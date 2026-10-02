# カード特徴・詳細利用条件の実装確認

確認日：2026-10-02。対象はサイトrepoの利用案内改善。公開main `88443d25dbd21780cb9ad8a4fcb65a7769a2dd59` から `codex/card-usage` で実装。今回の変更はローカルで検証済み。GitHub Pagesへの反映は未実施。

## 実装結果

カードはカテゴリ→タイトル→概要→短い特徴（最大3件）→技術→更新日→アクション。特徴は静的なリストで、技術タグを控えめな表示に変更。条件ラベルと補足は詳細の「利用条件・使い始めるには」だけに表示し、日英の共通辞書を使用する。アプリ別UI分岐はない。

省略時は `access: unknown`、特徴は空配列。空セクション・空の特徴リスト・空のカード技術リストを作らない。未知ID、重複、上限、矛盾、条件の説明欠落、日英ID・補足の翻訳欠落を検出する。

BBCafe詳細には新規利用時のLINE公式アカウント取得・管理者による登録を表示し、本文で既存アカウントのログイン・アプリ内新規登録なし・毎回の準備ではないことを説明する。新規利用条件はユーザー確認に基づく運用情報で、ソース確認と区別した。

## 全14件の表示と根拠

主要機能についてREADMEと固定commitのソースを確認した。参照パス、対象範囲、未確認事項は [app-usage-evidence.json](app-usage-evidence.json) にアプリごとに記録した。下表のREADMEだけを根拠として設定したわけではない。特にMatchupLabは古いREADMEより現在のIndexedDB・ローカル生成の実装を優先した。

| アプリ | カードの特徴 | 詳細の条件ラベル | README参照先 |
| --- | --- | --- | --- |
| App Reveal Lab | 端末内処理／登録不要／オフライン対応 | ラベルなし（主要機能はログイン不要） | [固定commitのREADME](https://github.com/Bamboosato/app-reveal-lab/blob/6f187fc4d95088636fda7a68fa877d131ca61b99/README.md) |
| Slide Puzzle Lab | 端末内処理／登録不要／オフライン対応 | ラベルなし（主要機能はログイン不要） | [固定commitのREADME](https://github.com/Bamboosato/app-slide-puzzle-lab/blob/5a40cea9d870f329b93eb8eff3d85b278762be42/README.md) |
| BBCafe App | なし | ログインが必要 | [固定commitのREADME](https://github.com/Bamboosato/bbcafe-app/blob/6bedc6abec09cf4ce0b413a5e267be0d18d6dd37/README.md) |
| Draw Lab | 端末内処理／登録不要／オフライン対応 | ラベルなし（主要機能はログイン不要） | [固定commitのREADME](https://github.com/Bamboosato/draw-lab/blob/a1ecba6afc9c68b9444072fcf15acd7bc41fc508/README.md) |
| Face Icon Maker | 端末内処理／登録不要 | ラベルなし（主要機能はログイン不要） | [固定commitのREADME](https://github.com/Bamboosato/face-icon-maker/blob/2bbc3ddfa5e416441e7556996936cd32df78def9/README.md) |
| Interactive CMYK Moiré | 端末内処理／登録不要 | ラベルなし（主要機能はログイン不要） | [固定commitのREADME](https://github.com/Bamboosato/interactive-moire-art/blob/6ed6ab0ce313d936721c8bfb10ed388c99c86065/README.md) |
| Local Document Preprocessor | 端末内処理／登録不要 | ラベルなし（主要機能はログイン不要） | [固定commitのREADME](https://github.com/Bamboosato/local-document-preprocessor/blob/b43d0d6bf3e6ab78342407956bde802ae469edb8/README.md) |
| Local PII Masker | 端末内処理／登録不要 | ラベルなし（主要機能はログイン不要） | [固定commitのREADME](https://github.com/Bamboosato/local-pii-masker/blob/716077e50c50033bea32ffb7b54f077efc412403/README.md) |
| Markdown Knowledge Board | 端末内処理／登録不要／オフライン対応 | ラベルなし（主要機能はログイン不要） | [固定commitのREADME](https://github.com/Bamboosato/markdown-knowledge-board/blob/2c2f9b5cbf4c129094e892964e125e89fcb0272e/README.md) |
| MatchupLab | 端末内処理／登録不要 | ラベルなし（主要機能はログイン不要） | [固定commitのREADME](https://github.com/Bamboosato/matchup-lab/blob/3854466c6eaf002c4bdb5d5316fde7f2589b560b/README.md) |
| RSVP Hub | なし | 役割によりログインが必要 | [固定commitのREADME](https://github.com/Bamboosato/rsvp-manager-app/blob/1436d26a50ef320af46730967c2b004f4924b4bb/README.md) |
| Tennis Matchup App | 端末内処理／登録不要 | ラベルなし（主要機能はログイン不要） | [固定commitのREADME](https://github.com/Bamboosato/tennis-matchup-app/blob/024d75b5c1d314d7ea24d438ddcda8180c30f527/README.md) |
| Tennis Organizing App | なし | ログインが必要 | [固定commitのREADME](https://github.com/Bamboosato/tennis-organizing-app/blob/ed269664ec1f175e7c8619653171b70b38133e3a/README.md) |
| Turing Pattern Lab | 端末内処理／登録不要 | ラベルなし（主要機能はログイン不要） | [固定commitのREADME](https://github.com/Bamboosato/turing-pattern-lab/blob/9662eab19b048ba5785285b09259ed3b314e6d50/README.md) |

オフラインを表示した4件は、主要処理とアプリ配信資産のキャッシュ実装を確認し、初回オンライン準備の補足を両言語で掲載した。Face Icon Makerはモデル取得と写真の端末内処理を区別し、オフライン表示を付けていない。Markdown Knowledge Boardは任意のクラウド連携が別途ログイン・通信・データ送信を伴うことを補足した。RSVP Hubは主催者のログインと招待回答者のPIN等の入力を区別した。Tennis Organizing Appのゲスト利用はFirebase匿名ログインである。

全アプリの実通信キャプチャ、各実機でのオフライン機能試験、ブラウザーごとのキャッシュ保持は未確認。オフラインチップのないアプリでは、主要機能全体のオフライン完結を確定表示していない。端末内処理は通信ゼロという意味ではない。

## 検証観点・前提

前提：Node.js 24、依存関係導入済み、Windows上のローカルAstro静的出力、14件28翻訳の公開データ。実ブラウザーは同一タブを逐次操作し、JSを必要としない静的HTMLの表示を検証した。固定commitのアプリソース確認は公開配信そのものの機能検証と区別した。

- 機能：共通カードの表示順・条件の詳細への限定・既存アクション・BBCafe準備／既存ログインの区別。
- データ：任意項目の省略、条件のみ、特徴のみ、両方、補足のみ、明示open。日英ペアと監査記録の一致。
- UI：日本語／英語、短い特徴と技術の区別、全文補足、320・390・768・1440pxでの折り返し。
- 非機能：意味のあるリスト名・見出し、静的チップ、キーボード操作、外部API・閲覧時JavaScriptを追加しない構成。

正常系は表示内容と導線、異常系は未知ID・翻訳欠落・矛盾、境界は0〜3件・4件・空文字・重複、状態遷移は一覧→詳細と同じ詳細の日英切替を対象とした。

## 結果

| 検証 | 結果・確認意図 |
| --- | --- |
| `npm run verify` | 22テスト成功。Astro checkは38ファイルでエラー・警告・ヒント0。44ページ生成、816内部リンク・資産参照の検証成功。 |
| `npm run verify:usage` | 日英それぞれ6つのメタデータ状態を実際のAstro Buildで検証。共通生成HTML検証で特徴・条件・補足の表示／非表示、ラベル、順序、空リスト、チップの非操作性を確認。fixture削除後に元の44ページを再Build・再検証。 |
| `npm run verify:bases` | rootとproject baseを順にBuild・検証。最後にGitHub Pages用baseを残した。 |
| 英語Apps・全14カード | 320・390・768・1440pxで横スクロールと特徴・アクションの領域外描画なし。BBCafeのカードは特徴・条件・補足なし。 |
| BBCafe英語詳細 | 同じ4幅で補足に横はみ出し・高さの切り詰めなし。ログイン条件、新規準備、既存ユーザー、アプリ内新規登録なしを確認。日本語詳細へ切り替え、同等の意味を確認。 |
| 代表導線 | AppsのSlide Puzzleカード→英語詳細→同じ日本語詳細が成功。Tabキーの可視アウトライン、EnterでBBCafe詳細を英語へ切替成功。 |
| 共通表示・条件 | 英語Home6カードとビジュアルカテゴリ4カードで条件・補足の漏出なし。Face Iconのモデル取得説明と2特徴を確認。RSVPの役割別条件は320pxで全文表示・横スクロールなし。 |
| ブラウザーエラー | 検証タブのエラーログなし。 |
| 範囲保持 | 28ファイルの既存frontmatterは新項目以外すべて一致。カテゴリ・URL・更新日等を保持。Updatesと公開repo一覧の変更なし。fixture残存なし。`git diff --check` 成功。 |

E2Eは今回変更した表示と導線の代表ケースを選択した。理由は共有コンポーネントと静的メタデータの変更であり、全生成ページの内容整合性はHTML検証で網羅できるため。クロスブラウザー、リンク先14アプリの全機能、実機オフライン試験、本番配信の反映確認は未実施。

## 画像証跡

画像はローカルの `artifacts/card-usage/` に保存し、Git管理対象外。以下は検証時のローカル表示で、本番反映の証拠ではない。

日本語カード（1440px）：

![日本語カード](../artifacts/card-usage/usage-ja-desktop.png)

英語カード（1440px）：

![英語カード](../artifacts/card-usage/usage-en-desktop.png)

その他：`usage-ja-mobile.png`、`usage-en-mobile.png`、`usage-bbcafe-en-mobile.png`、`usage-bbcafe-ja-desktop.png`。
