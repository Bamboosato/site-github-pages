# 初期構築の実装・検証結果

実施日：2026-10-02（Asia/Tokyo）

この文書はサンプル3件による初期構築時の記録です。実Public repo14件への差し替え後の結果は `docs/public-repositories-verification.md` を参照してください。

## 完了範囲

第43節の推奨範囲に沿って、ローカル実装・Build・主要操作のブラウザー確認・公開workflowと運用手順の整備まで実施しました。GitHubへのpush・実公開・実際の掲載対象repo投入は未実施です。

- Home、Apps、詳細、Updates、Aboutを日本語／英語で静的生成。
- カテゴリ別一覧も静的生成。全件一覧は更新順、カテゴリ切替は通常リンク。
- サンプル3件、各アプリの両言語更新履歴。架空の公開URLを掲載せず、サンプル表示を明示。
- Content Collections、翻訳ペア／データ整合性のBuild前検証、言語別metadata。
- 任意URL・画像、Markdown本文内のリンク・画像もbaseに対応。
- 独立したGit管理を `C:\work_codex\site_github-pages` に作成。remote未設定、親Gitのremote・既存ファイルを変更していない。

## 主要ファイルと設計

| ファイル／ディレクトリ | 役割 |
| --- | --- |
| `src/config/site.ts` | サイト名・作者・GitHubリンク・公開先仮設定の集約 |
| `src/content.config.ts`、`src/lib/schema.ts` | Content Collections、必須項目・日付・任意URL／画像の定義 |
| `src/content/apps/{ja,en}/` | 1アプリ×1言語＝1Markdown |
| `src/content/updates/{ja,en}/` | 共通updateIdを持つ言語別更新エントリ |
| `src/i18n/ui.ts` | UI・カテゴリ・状態の翻訳と日付表示 |
| `src/components/`、`src/layouts/Layout.astro` | 両言語で共有するページ構成、カード、更新履歴、metadata |
| `scripts/`、`tests/` | データ・生成HTML・base・Markdown追加／変更の検証 |
| `.github/workflows/deploy.yml` | PR検証とmainへの反映後のPages公開 |
| `README.md`、`AGENTS.md`、`docs/content-maintenance.md` | 起動・公開・アプリ追加・翻訳ペア更新の手順 |

URL用slugとCollection IDを分離し、内部IDは言語ディレクトリを含むファイルパスから生成します。ページ追加のためにUIファイルを編集する必要はありません。表示言語はURLで決まり、ブラウザ言語や保存設定によるredirectは行いません。

## コマンド検証

| コマンド | 結果 |
| --- | --- |
| `npm install` | 依存関係・lockfileを作成。インストール時のaudit：脆弱性0件 |
| `npm run verify` | 単体テスト15件成功、型チェックエラー／警告／hintなし、Build・生成HTML検証成功 |
| `npm run verify:bases` | root `/` とproject `/site-github-pages` で各20ページ・各350件のローカルリンク／資産参照を検証 |
| `npm run verify:markdown` | UI無変更で日英の新規詳細を生成、本文・metadataの変更を反映。任意URLボタン・frontmatter画像・Markdown画像／内部リンクを検証。テストデータを除去し、サンプル3件に復元 |
| `git diff --check` | 成功 |

必須データ不足、翻訳欠落、appId／slug重複、共通項目不一致、更新履歴の参照切れ、実在しない日付、不正URLを単体テストで検証しました。空コレクション・タグ0件・任意URL／画像なし・うるう日も対象にしています。

全生成ページのlang、canonical、hreflang、OG、見出し階層、ローカルリンク／画像、fragment、言語切替先、通常ナビゲーションの言語維持を自動検証しました。

## 実ブラウザーの範囲と結果

環境：Windows、Codexアプリ内ブラウザー、ローカルのBuild済み静的サイト。操作は逐次実行しました。

E2E範囲は共有部品と代表的な主要遷移に絞りました。全ルートのリンク・metadataは生成HTML検証で網羅し、全ページ×全画面幅の実操作は行っていません。

| 対象 | 結果 |
| --- | --- |
| 日本語Home → Apps | 正常遷移、サンプルA／B／Cが更新日降順 |
| カテゴリ → 詳細 | ビジュアルカテゴリでAだけ表示、詳細へ正常遷移 |
| 詳細の日本語 → 英語 → 日本語 | 同じアプリを保持、本文見出しと表示言語が対応 |
| 英語詳細 → Apps → Updates → About | 英語を維持、更新履歴3件が日付降順 |
| Aboutの英語 → 日本語 | 対応するAboutへ移動 |
| 320px / 390px | Home、About、詳細、一覧、更新履歴の代表ページで横方向のはみ出しなし。言語切替リンクが表示され、操作可能 |
| 768px | 両言語Homeと英語一覧の横方向のはみ出しなし |
| 1440px | 日本語Homeと英語一覧の横方向のはみ出しなし。英語一覧の3カラムを確認 |
| キーボード | Tabで本文移動リンクにvisible focus、Enterでmainへ移動 |
| ブラウザーログ | 確認時点で警告・エラーなし |

画面幅の検証はDOMの実測を含みます。通常の狭い画面でHome／英語詳細の画像を取得し、目視確認しました。指定viewportやfull-pageのスクリーンショット取得は失敗したため、Desktop／Tablet全体の画像による目視確認は未実施です。

証跡（Git管理対象外）：`artifacts/home-ja.png`、`artifacts/detail-en.png`。

## 検出した問題と再発防止

| 分類・優先度 | 検出理由と修正 |
| --- | --- |
| 実装問題・重大：両言語slugの内部ID衝突 | Build自体は成功したが、生成HTMLの必須ルート・相互言語リンク検証で日本語詳細の欠落を検出。内部IDを言語付きパスから生成するよう変更 |
| 実装問題・重大：YAML日付の読み取り差 | 実Markdown追加テストで、引用符なしの日付をAstroがDateとして読むことを検出。schemaで日付を共通文字列へ正規化し、元データのカレンダー妥当性は事前検証で保証 |
| 実装問題：Astro 7のMarkdown設定／CLI配置 | 初回のcheck／base検証で検出。公式processor設定へ移行し、CLIの場所はpackage.jsonのbinから取得 |
| 環境問題：画面幅切替直後のブラウザー操作 | viewportを戻した直後に1回クリックが失敗。現在のDOMを再確認後、同じ通常リンク操作で成功。画面幅を変えた直後の座標・描画同期を原因候補とし、アプリ不具合とは断定しない |

まず防ぐべき問題は、翻訳・内部ID・公開baseの取り違えによる紹介ページや言語切替の欠落です。単体検証に加え、実際の生成HTMLとMarkdown追加／変更の検証を用意しました。

## 未実施・残事項

- 掲載対象repoの確定と実データ投入。
- 公開先リポジトリ名・公開範囲の確定、remote設定、GitHubへのpush。
- GitHub Actions／GitHub Pagesでの実行・実Deploy・公開URLでの確認。workflow参照先のactionタグは存在を確認しましたが、CIそのものは未実行です。
- クロスブラウザー、別OS、実スマートフォン、通信条件・負荷の差を含む確認。
- 全画面の視覚チェック、スクリーンリーダーによる読み上げ、JavaScript無効設定での実操作。生成HTMLと通常リンクはJavaScript不要の構成です。

公開先確定後はREADMEの手順で `site`／`base` を設定し、PagesのSourceをGitHub Actionsにして、実Deployと両言語の公開サイト動作を確認してください。
