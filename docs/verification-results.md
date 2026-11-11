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

## 2026-11-07：3D RainScape の地点検索・視点共有の紹介更新

対象proposalId：`3d-rain-viewer-a273745c67c7-544546f3da6f-search-sharing-domain`。サイト基準は `bef5a89110d86ac91fcf3fbdfc2625520244b247`、アプリ差分は `a273745c67c7bc53737d1f708e87a875e7dc8f0c` → `544546f3da6f9da33a040f746bf81d2c3097872a`。日英紹介・Updates・このアプリの根拠記録のみを更新し、初回掲載と他アプリの記録を維持した。

前提：Linux、Node.js v24.19.0、npm 11.9.0、既存lockfileと依存。CIのNode.js指定は24.22.1。機能は詳細・一覧・カテゴリ・Updatesと言語遷移、非機能は静的HTML・metadata・base・focus、データは翻訳・日付・既存根拠の保持、UIは長い利用条件の折り返しを対象とした。正常系は今回の内容、異常系は既存テストの必須欠落・重複・不正値、境界はroot/project baseと320px、状態遷移は日→英→日とMarkdown追加・変更を確認。Buildとブラウザー操作は逐次実行した。

| 検証 | 結果 |
| --- | --- |
| `npm run verify` | 33テスト成功、Astro check 38ファイルでerror／warning／hintなし。52ページ、1,052件のローカルリンク／資産参照を検証 |
| `npm run verify:bases` | `/` と `/site-github-pages` で各52ページ・1,052参照のBuild／リンク検証成功 |
| `npm run verify:markdown` | 日英の追加・変更反映に成功。一時fixtureを除去し元のサイトを再Build／検証 |
| JSONの意味比較・`git diff --check` | 他アプリとトップレベルmetadataの保持、差分の空白検証に成功 |
| ローカルChromium | 日英詳細1440×1000／390×844／320×844、日英一覧・カテゴリ・Updatesを390pxで確認。計12ケース、カード→詳細、日→英→日、Tabのvisible focusと本文skip成功。横はみ出し・console/page errorなし |

日英Desktop、日本語390px、英語320pxの画像を目視確認し、本文・利用条件・更新履歴が収まることを確認した。英語ページの共有UIの外部リンク矢印はこの環境で代替字形になっている（初回掲載時にも記録済み）。UI変更は含めていない。証跡はGit管理外の `artifacts/rainscape-search-sharing/` にログ、`browser-results.json`、`detail-{ja,en}-{1440,390,320}.png` を保存。

初回verifyは根拠JSON更新前の途中状態でURL不一致を検出し、同アプリの根拠更新後の再実行で成功した。ブラウザー初回は検証スクリプトの誤ったカテゴリパスで404となり、既存の `/apps/category/visual-experimental/` に修正後、全対象で成功した。アプリやサイト実装の修正は不要だった。表示分岐を変えていないため `verify:usage` は対象外。

公開アプリのREADY／HTTP／bundle証拠は親タスクから引き継いだ静的配信証拠であり、今回のCloudでの公開アプリ対話試験とは区別する。実検索と精度、clipboard／native share、共有時刻再現、PWA起動、実機・他ブラウザー、オフライン、未マージ紹介内容の公開表示は未検証。詳細は `docs/app-usage-evidence.json` の当該アプリ `searchSharingUpdate`。PRでは検証とartifact生成のみで、Deploy jobはmainかつ非PRを要求する。Merge／Deploy／auto-merge／mainへの直接pushは行わない。

## 2026-11-10：3D RainScape のお気に入りバックアップ・引き継ぎ紹介の追記

既存draft PR #29と作業branch `content/3d-rainscape-search-sharing-20261107` を継続。新proposalIdは `3d-rain-viewer-544546f3da6f-dda9efc2de21-favorites-backup-transfer`。旧proposalId `3d-rain-viewer-a273745c67c7-544546f3da6f-search-sharing-domain` と11月7日のUpdates・根拠は保持した。編集前にmain `bef5a89110d86ac91fcf3fbdfc2625520244b247`、PR head `00f067eec36c502f3dc4e6e08c46b03d32f53b23`、全remote headsとopen PR全ページを照合し、PR29と依存PR26以外の重複なしを確認。

機能根拠はアプリ `544546f3da6f9da33a040f746bf81d2c3097872a` → `dda9efc2de216ca9f93efcee7418034db6c10ac4`。固定commitの10ソースを読み、JSON保存・復元、QR／URL手動引き継ぎ、プレビューと取り消し、距離表示と位置情報の条件、縦型スケール、欠測・保存済みカタログの案内を確認した。`updatedAt` と新Updatesは機能変更日2026-11-09。後続 `260c1fef7b201f5c130e216e611348d339fb0ae1`（2026-11-10 JST）はキャッシュ保守として別記し、削除された内部地図キャッシュ警告や速度保証を紹介せず、日付を進めていない。お気に入り新規上限は実装で100件であり、READMEの500件は採用していない。

前提は既存依存・lockfile、Linux、Node.js v24.19.0、npm 11.9.0。CIのNode.js指定は24.22.1。機能は日英詳細・一覧・カテゴリ・Updatesと言語遷移、データは正常な翻訳・日付一致と既存記録保持、異常系は既存テストの不正／欠落／重複検出、非機能と境界はmetadata・root/project base・320px表示を選定した。共有UIの変更がないため対象ページに絞り、同じ出力・ブラウザーで逐次実行した。

| 検証 | 結果 |
| --- | --- |
| `npm run verify` | 33テスト成功。Astro check 38ファイル、error／warning／hintなし。52ページ・1,056件のローカルリンク／資産参照を検証 |
| `npm run verify:bases` | root `/` と `/site-github-pages` の各52ページ・1,056参照で成功 |
| `npm run verify:markdown` | 日英追加・変更の反映、一時fixture除去、元サイトの再Build／検証に成功 |
| 意味比較・`git diff --check` | 他アプリとトップレベルJSON metadata、旧 `searchSharingUpdate` を保持。11月7日の両Updatesはbyte一致。空白検証成功 |
| ローカルChromium | 日英詳細1440×1000／390×844／320×844、一覧・カテゴリ・Updatesを390pxで確認（12ケース）。各カード・Updates→詳細、日→英→日、キーボード本文skipとvisible focus、更新日順11/9→11/7→11/6に成功。横はみ出し・console/page errorなし |

日英Desktop、日本語390px、英語320pxの画像を目視確認し、長い利用条件・本文・更新履歴の折り返しを確認した。英語UIの既存外部リンク矢印の代替字形はこの環境でも見られる。UI修正は含めていない。ログ・`browser-results.json`・`detail-{ja,en}-{1440,390,320}.png` はGit管理外の `artifacts/rainscape-favorites-transfer/`。一時Playwrightは `/tmp` のみに導入し、サイト依存を変更していない。表示分岐無変更のため `verify:usage` は対象外。

公開証拠は監視workerの2026-11-09T21:07–21:09Zの両ドメインHTTP200と静的bundle照合を引き継いだもの。後の公開HTTP再取得は監視側の許可審査で拒否され結果不明と連絡されており、本Cloudでは別手段も含め再試行していない。固定ソース確認と静的配信証拠は、exact commitのbuild同一性や公開アプリ対話試験を証明しない。実JSON／QR移行・復元・取り消し、clipboard／native share、実検索と距離精度、位置許可、PWA・オフライン、実機・他ブラウザー、性能、未マージ紹介の公開表示は未検証。根拠JSONの `favoritesTransferUpdate` に範囲を記録した。workflowを再確認し、作業branch／PRは検証のみ、Deployはmainかつ非PRに限定される。Merge・Deploy・auto-mergeは実施しない。

## 2026-11-11: RainScape categories/JMA chart and LDP JSON/offline content

Scope: paired JA/EN app introductions and 2026-11-11 Updates, app-specific entries in the two evidence JSON files, and this verification record. Existing app IDs, slugs, categories, URLs, access and usageFeatures are preserved. Existing Updates are byte-identical; unrelated JSON entries and top-level metadata are semantically unchanged. No UI/schema/dependency/configuration/workflow or application implementation change.

Preparation: saved Cloud environment checkout `/workspace/site-github-pages`, remote `https://github.com/Bamboosato/site-github-pages.git`. Latest main fetched as `f526175b360400e9b3d610c73b0d637b35490ec9`. Open PR search returned dependency PR26 only. PR29 is merged at that main SHA; its branch was not reused. New branch: `content/rainscape-ldp-20261111`.

Validation plan, before execution:
- Functional/normal: both affected JA/EN details and their feature/usage text, app/category lists and Updates; same-app language switching.
- Data/abnormal: existing tests cover missing translations, invalid IDs, duplicate IDs and dates, dangling references, invalid usage values. Preserve all unrelated entries, prior published proposal records, existing Updates, stable frontmatter and unrelated dates.
- Nonfunctional/boundary: static metadata/links/assets, sequential root `/` and project `/site-github-pages` builds, widths 1440×1000, 390×844 and 320×844, visible keyboard focus and horizontal overflow.
- State transitions: JA→EN→JA for both apps; Markdown fixture add→edit→cleanup→original-site rebuild. No shared display branches changed, so `verify:usage` was not selected.
- E2E selection: representative affected portfolio routes only; application interaction and a full device/browser matrix are outside this content-only task.

Results:
- `npm run verify`: passed, 33 tests; Astro check 38 files with zero errors/warnings/hints; 52 generated pages and 1,064 local links/assets.
- `npm run verify:bases`: passed sequential `/` and `/site-github-pages` builds, each 52 pages and 1,064 local references.
- `npm run verify:markdown`: bilingual fixture addition and editing passed; fixtures removed and original site rebuilt/validated.
- `git diff --check`: passed. Parsed frontmatter preservation and unrelated JSON/prior-proposal comparison passed. All previously existing Updates remained byte-identical.
- Browser: Linux headless Chromium against local built project-base portfolio, 20 page/viewport cases: two apps × two languages × three detail widths (12), plus JA/EN apps, two affected categories and Updates at 390px (8). Correct locale, new features/usage notes, 2026-11-11 detail metadata, exactly one of each new Update, keyboard focus and no horizontal overflow passed. Two same-app language round trips passed. Zero console/page errors.
- Viewed screenshots: RainScape JA desktop and EN320, LDP JA390 and EN desktop; added content fits. Existing English shared external-link arrow fallback glyph remains in this environment. No UI change was made.
- Environment: Node.js v24.19.0, npm 11.9.0; CI specifies Node.js 24.22.1. Existing dependencies/lockfile retained. Temporary Playwright installed only under `/tmp/site-browser` with cache under `/tmp/site-npm-cache`; initial default-cache attempt failed because the home cache was unavailable, then installation with writable temporary cache succeeded.
- Initial browser assertion selected `.detail-heading` for the date; corrected the test to existing `.detail-meta time[datetime]`. Final browser run passed; no implementation fix required.
- Ignored artifacts: `artifacts/rainscape-ldp-20261111/` (12 detail screenshots and browser-results.json); command logs copied there. Browser traffic was limited to the local portfolio.

Public application evidence is separate from portfolio validation:
- RainScape source `260c1fef7b201f5c130e216e611348d339fb0ae1`→`1647467fbde201f19d27067adcc45933efb361c7`; GitHub success status and exact-SHA production READY/alias metadata supplied by monitoring task. These establish deployment association, not interactive success or exact rendered bytes. No public HTTP re-fetch or alternate fetch method was attempted. JMA chart values are tile color-class representatives; GSMaP zero fallback is not advertised as measured time series. WebGL2, privacy/manual transfer and weather/offline caveats retained.
- LDP analysis `37ec3d3b09624a7efe53e8faa3ba4fa2560bac27`→`12cf9d4c440fbc070329cf2c147eb62475791b01`; project records 2026-11-11 production release of `db29c664aa1f95bf7bded28d1356c652e43480e3` and source CI success. Monitoring task independently fetched HTML/SW and three assets, distinct from project-recorded JSON/export/PWA/offline/recovery interaction tests. All-474-resource matching is a project claim, not independently performed here. Existing JSON/PWA proposal reused; exact exported metadata-key/consumer compatibility remains unverified. E-01 provenance remains unresolved; no license-compliance conclusion.
- No application interaction was independently rerun. Physical-device acceptance, OS clipboard/install, screenreader/zoom/touch, maximum load, untested browsers and exact exported-key compatibility remain unverified.
- Portfolio production rendering is unverified until an authorized future publication. This work stops at a draft PR. Workflow push trigger targets main only; PR builds validate/build/upload artifacts, while deploy requires `github.ref == 'refs/heads/main' && github.event_name != 'pull_request'`. No manual dispatch, merge, deploy, auto-merge or main push.
