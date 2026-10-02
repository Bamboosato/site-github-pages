# カテゴリ分け 改善指示書

作成日：2026-10-02  
対象repository：https://github.com/Bamboosato/site-github-pages  
公開サイト：https://bamboosato.github.io/site-github-pages/apps/  
確認したmain：`88443d25dbd21780cb9ad8a4fcb65a7769a2dd59`

## 1. 目的と確定方針

掲載アプリの数が少ない現段階では、カテゴリを細分化せず、利用者が内容を想像しやすい4カテゴリにまとめる。

ユーザーとの合意事項：

- 現時点では4〜5カテゴリ程度に留める。
- 今回は4カテゴリで実装する。
- 「ビジュアル・あそび」の名称は採用せず、ユーザー提案の「ビジュアル・ホビー」を使用する。
- ゲーム・画像制作・模様実験を独立カテゴリに分割しない。
- 将来アプリが増えた場合に5つ目を検討できる構造を維持する。

今回の指示はカテゴリについての最新方針である。以前のレビューにある6分類案、および利用条件・特徴の改善指示書にある「カテゴリ変更は保留」という記述より、本書を優先する。

## 2. 採用するカテゴリ

カテゴリの表示順は以下の順で統一する。

| 順序 | 日本語名称 | 英語名称 | 今回使用する既存ID | 掲載件数 |
| --- | --- | --- | --- | --- |
| 1 | スポーツ・対戦運営 | Sports & Match Management | `sports-competition` | 4 |
| 2 | ビジュアル・ホビー | Visual & Hobbies | `visual-experimental` | 5 |
| 3 | 文書・情報整理 | Documents & Information | `utilities` | 3 |
| 4 | 予定・連絡管理 | Events & Communication | `productivity` | 2 |

合計14件。カテゴリ名称は日本語／英語で対応させ、Home・Apps・カテゴリ別一覧・カード・詳細のすべてで統一する。

### 分類の意味

| カテゴリ | 対象とするアプリ |
| --- | --- |
| スポーツ・対戦運営 | 大会表の作成、対戦組合せ、スポーツの参加者・メンバー管理 |
| ビジュアル・ホビー | 画像や映像の制作、模様や視覚効果の実験、写真を使ったパズルなど |
| 文書・情報整理 | ノート整理、文書変換、文章中の情報の確認・加工 |
| 予定・連絡管理 | イベントの出欠、予定や招待、メッセージ・お知らせの管理 |

利用場面や主目的を基準にし、React・WebGL等の採用技術を理由にカテゴリを決めない。

「ビジュアル・ホビー」は制作と体験の両方を含む広いカテゴリとする。Slide Puzzle Labは写真を使った趣味のアプリとしてこのカテゴリに含める。ゲームが1件だけである現段階では、専用カテゴリを設けない。

## 3. 全14アプリの確定配置

以下のアプリを、日本語／英語の両Markdownで指定したIDへ配置する。

| アプリ名 | appId／ファイル名の識別子 | 新しい表示カテゴリ | frontmatterのcategory |
| --- | --- | --- | --- |
| Draw Lab | `draw-lab` | スポーツ・対戦運営 | `sports-competition` |
| MatchupLab | `matchup-lab` | スポーツ・対戦運営 | `sports-competition` |
| Tennis Matchup App | `tennis-matchup-app` | スポーツ・対戦運営 | `sports-competition` |
| Tennis Organizing App | `tennis-organizing-app` | スポーツ・対戦運営 | `sports-competition` |
| Face Icon Maker | `face-icon-maker` | ビジュアル・ホビー | `visual-experimental` |
| App Reveal Lab | `app-reveal-lab` | ビジュアル・ホビー | `visual-experimental` |
| Interactive CMYK Moiré | `interactive-moire-art` | ビジュアル・ホビー | `visual-experimental` |
| Turing Pattern Lab | `turing-pattern-lab` | ビジュアル・ホビー | `visual-experimental` |
| Slide Puzzle Lab | `app-slide-puzzle-lab` | ビジュアル・ホビー | `visual-experimental` |
| Markdown Knowledge Board | `markdown-knowledge-board` | 文書・情報整理 | `utilities` |
| Local Document Preprocessor | `local-document-preprocessor` | 文書・情報整理 | `utilities` |
| Local PII Masker | `local-pii-masker` | 文書・情報整理 | `utilities` |
| RSVP Hub | `rsvp-manager-app` | 予定・連絡管理 | `productivity` |
| BBCafe App | `bbcafe-app` | 予定・連絡管理 | `productivity` |

確認したmainからの所属変更は2アプリのみ。

1. Face Icon Maker：`utilities` → `visual-experimental`
2. Markdown Knowledge Board：`productivity` → `utilities`

残り12アプリのcategory値はそのまま、共通辞書の表示名変更によって新名称を表示する。

## 4. IDと既存URLの扱い

今回、カテゴリIDとカテゴリURLは維持し、表示名と所属を変更する。

現在はカテゴリIDをURLに直接使用しているため、名称に合わせてIDも変更すると既存のブックマークや共有リンクが切れる。この作業では新IDへの移行やredirectの追加は行わない。

既存IDの`utilities`、`productivity`、`visual-experimental`は互換性のために残す識別子であり、画面に表示する名称や今後の分類基準とは区別する。この対応をREADMEと運用ドキュメントに明記する。

### 維持する日本語カテゴリパス

```text
/apps/category/sports-competition/
/apps/category/visual-experimental/
/apps/category/utilities/
/apps/category/productivity/
```

英語版は上記に`/en`を付けたパスを維持する。GitHub Pagesでは既存のbase `/site-github-pages`を適用する。アプリ詳細のslugとURLも変更しない。

`other`は将来用の予約IDとして残してよいが、今回の14件には割り当てず、空の「その他」カテゴリをナビゲーションに表示しない。分類に迷った新アプリを自動的に「その他」へ入れる運用は採用しない。

## 5. カテゴリ説明と表示

カテゴリ別一覧の冒頭では、全カテゴリ共通の説明よりも、そのカテゴリに含まれる内容が分かる短い説明を使う。

| カテゴリ | 日本語説明 | 英語説明 |
| --- | --- | --- |
| スポーツ・対戦運営 | 大会表や対戦組合せを作り、参加者やメンバーを管理するアプリ。 | Apps for tournament draws, match schedules, and participant or member management. |
| ビジュアル・ホビー | 画像や映像をつくる、模様を試す、パズルを楽しむアプリ。 | Apps for creating images and videos, exploring patterns, and enjoying puzzles. |
| 文書・情報整理 | メモを整理し、文書を変換し、文章中の情報を確認・加工するアプリ。 | Apps for organizing notes, converting documents, and reviewing or processing text. |
| 予定・連絡管理 | イベントの出欠や招待、メッセージやお知らせを管理するアプリ。 | Apps for event invitations and RSVPs, messages, and announcements. |

カテゴリ説明も共通のデータまたは言語辞書で管理する。既存の`categories`は`{ ja, en }`を参照する箇所があるため、型と参照に整合する形で追加する。必要なら説明を別辞書へ分けてよい。

カテゴリ説明はカテゴリページの冒頭に1回表示すればよい。カード内や各フィルターボタンへ説明文を追加し、情報量を増やす必要はない。

表示対象：

- Homeの「カテゴリから探す」：新名称と指定順
- Apps一覧のカテゴリナビゲーション：新名称と指定順
- カテゴリ別一覧：新名称、短い説明、正しい所属アプリと件数
- アプリカード・詳細：新名称
- カテゴリページのtitle・description・Open Graph：新名称とカテゴリ説明

現在の更新日順ソートは維持する。カテゴリ名の変更を理由にアプリの最終更新日や更新順を変更しない。

## 6. 実装対象

現在の構成を確認してから、必要な範囲を変更する。

- `src/i18n/ui.ts`：4カテゴリの表示名と説明、表示順
- `src/content/apps/ja/face-icon-maker.md` と英語版：所属変更
- `src/content/apps/ja/markdown-knowledge-board.md` と英語版：所属変更
- `src/components/PortfolioPage.astro`：カテゴリページの説明とmetadataへの適用
- `src/components/AppCard.astro`／`AppDetail.astro`：共通辞書から新名称が表示されることの確認
- `src/pages/apps/category/[category].astro`と英語版：既存パスの維持と出力確認
- README、`docs/content-maintenance.md`、必要に応じてAGENTS.md：分類基準、IDと表示名の対応
- 既存テスト：所属集合、言語ペア、件数等の必要な更新

一覧と詳細にカテゴリ名を個別ハードコードしない。1アプリの所属変更は両言語Markdownのcategory変更だけで反映できる構造を維持する。

カードの利用者向け特徴や、詳細ページの利用条件は別の改善指示書に従う。すでに実装済みの場合は今回のカテゴリ変更と整合させる。今回のカテゴリ作業に、新しい特徴タグやBBCafe Appの登録説明等を追加する作業を混在させる必要はない。

カテゴリ整理は紹介サイト側の変更である。アプリ自体の`updatedAt`を進めず、アプリのユーザー向け変更として`src/content/updates/`へエントリを追加しない。

## 7. 検証観点と受入条件

### データ

- 日本語14件・英語14件の掲載集合を維持する。
- 各言語のカテゴリ件数が順に4・5・3・2、合計14件になる。
- 第3節の所属集合と完全に一致する。件数だけの一致で完了扱いにしない。
- 1アプリは1カテゴリに所属し、一覧の重複や欠落がない。
- 日英のcategory値が一致する。
- 未知のカテゴリIDは既存の検証で検出する。

### 正常系と状態遷移

- Homeから4カテゴリへ遷移できる。
- Appsのカテゴリナビゲーションに4カテゴリと「すべて」が表示される。
- Face Icon Makerはビジュアル・ホビーで表示され、文書・情報整理には表示されない。
- Markdown Knowledge Boardは文書・情報整理で表示され、予定・連絡管理には表示されない。
- カテゴリページ → アプリ詳細 → 英語切替で、同じアプリと新カテゴリ名を維持する。
- カテゴリページ自体の日英切替でも同じカテゴリのURLを維持する。
- 「すべて」に戻ると14件が元の更新日順で表示される。

### 境界・UI・非機能

- 空の「その他」を表示しない。
- 日本語／英語の長いカテゴリ名が320px・390px・768px・Desktopで崩れない。
- フィルターリンクは折り返しを許可し、横方向にはみ出さない。
- 選択中カテゴリの表示、キーボード操作、visible focusを維持する。
- 既存カテゴリURL、アプリ詳細URL、base付きリンクを維持する。
- title・description・OGに新しい名称と説明を反映する。
- カテゴリの表示変更のために外部APIや閲覧時JavaScriptを追加しない。

実行する検証：

```bash
npm run verify
npm run verify:bases
```

代表的な日英カテゴリページと、所属変更した2アプリのカード・詳細をブラウザーで確認する。静的出力で全カテゴリの所属・件数・リンク・metadataを確認し、全アプリ内部の機能操作は今回の対象にしない。

## 8. 今後の分類ルール

- 当面は今回の4カテゴリを基本とする。
- 新しいアプリは主目的に最も合う1カテゴリへ配置する。
- カテゴリ内の違いは短い概要や詳細説明で補い、1件のアプリのためにカテゴリを細分化しない。
- 画像・動画制作、視覚効果の実験、パズルは現時点ではビジュアル・ホビーにまとめる。
- 既存カテゴリに収まりにくいアプリが増えた場合、5つ目をユーザーと検討する。
- 将来の分割例として「ゲーム・パズル」を検討できるが、件数による自動分割や追加を実装しない。
- カテゴリの追加・大きな再分類は自動判断で行わない。

## 9. 実装担当への完了報告

以下を報告する。

1. 日本語／英語の新カテゴリ名称
2. 全14アプリの所属とカテゴリ件数
3. 所属変更した2アプリ
4. カテゴリIDと既存URLが維持されていること
5. 実行した検証と結果、未確認範囲
6. 代表的な日英カテゴリ画面の画像

本書は実装担当へ渡す指示書であり、カテゴリ変更の実装・公開が完了したことを示すものではない。
