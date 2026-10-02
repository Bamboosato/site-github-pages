# GitHub Pages ポートフォリオサイト 初期構築指示書

作成日：2026-10-02  
改訂：日本語／英語切替要件と実装担当の確認事項を追加  
掲載対象repository：未確定（後から指定する）

## 1. 目的

GitHub Pages上に、自分が作成・公開しているWebアプリ／プロジェクトを紹介するポートフォリオサイトを構築する。

単なるリンク集ではなく、各アプリについて以下を分かりやすく紹介する。

- アプリの概要
- 何ができるか
- 主な機能
- 特徴
- 技術構成
- 公開URL
- GitHub repository
- 最終更新日
- 更新履歴

将来的にはAIエージェント（dot等）がGitHub repositoryの追加・更新を検知し、サイト内容を継続的に更新する運用を想定する。そのため、初期構築段階から「人間にもAIにも更新しやすい構造」を重視する。

## 2. 基本方針

### 2.1 サイト方式

静的サイトとして構築する。推奨構成は以下とする。

- Astro
- TypeScript
- Markdown / MDX
- GitHub Pages
- GitHub Actionsによる自動Build / Deploy

原則としてサーバーサイド処理や外部DBは使用しない。サイト表示に必要な情報はrepository内で完結させる。

### 2.2 日本語／英語対応

初期実装から日本語と英語の表示切替に対応する。日本語を既定言語とする。具体的な構造・切替動作・検証は第42節に従う。既存の単一言語の例と第42節が競合する場合は、第42節を優先する。

## 3. 重要な設計方針

### 3.1 コンテンツとUIを分離する

アプリ紹介情報をAstroコンポーネントやHTMLへ直接埋め込まない。各アプリの情報はMarkdown / MDXとAstro Content Collections等を利用して管理する。

構成例：

```text
src/
├── components/
├── content/
│   ├── apps/
│   │   ├── example-app-1.md
│   │   ├── example-app-2.md
│   │   └── ...
│   └── updates/
│       └── ...
├── layouts/
├── pages/
└── styles/
```

将来的にAIエージェントが個々のアプリ情報だけを安全に更新できる構成とする。

## 4. アプリデータモデル

Astro Content Collections等を利用し、最低限以下のメタデータを持たせる。

frontmatter例：

```yaml
---
title: "Example App"
slug: "example-app"
category: "Visual / Experimental"
description: "アプリの短い説明"
appUrl: "https://example.com/"
githubUrl: "https://github.com/..."
updatedAt: "2026-10-02"
status: "active"
tags:
  - WebGL
  - TypeScript
  - PWA
featured: false
---
```

必要に応じて以下の項目を追加してよい。

```yaml
createdAt:
repository:
version:
license:
thumbnail:
screenshots:
platforms:
```

ただし、初期段階では必要以上にスキーマを複雑化しない。`appUrl`や画像など、存在しない場合が想定される項目は省略可能にする。例示のURLを実際のリンクとして無条件に掲載しない。

## 5. アプリ詳細ページ

各アプリには個別詳細ページを生成する。

URL例：

```text
/apps/moire-lab/
/apps/draw-lab/
/apps/matchup-lab/
```

上記はURL構造の例であり、掲載対象の指定ではない。

ページには原則として以下を表示する。

### 概要

利用者向けに、このアプリが何をするものなのかを説明する。READMEの冒頭をそのまま転載するのではなく、一般利用者にも理解しやすい文章にする。

### 主な機能

主要機能を列挙する。

例：

- 複数パターンの生成
- パラメータのリアルタイム変更
- オフライン利用
- PNG保存

### 特徴

他の類似アプリとの差異や、設計上特徴的な点を記載する。

### 技術構成

技術の例：Astro、React、TypeScript、WebGL、GLSL、IndexedDB、PWA。

単なるライブラリ一覧ではなく、必要に応じて主要技術の用途も簡潔に説明する。

### Links

- Open App
- GitHub

`appUrl`が存在しない場合はOpen Appを表示しない。

### 更新情報

- 最終更新日
- 最近の主な変更

以上を表示できる構成にする。

## 6. アプリ一覧

`/apps/`に全アプリ一覧を表示する。単なるrepository一覧ではなく、ジャンル別に分類する。

現段階ではカテゴリは仮設定とし、掲載対象repo確定後に調整する。

初期候補：

- Sports / Competition
- Visual / Experimental
- Utilities
- Productivity
- Other

カテゴリ名称は実装時に固定しすぎない。将来的にカテゴリの追加・名称変更が容易な構造にする。

## 7. Home

トップページでは、サイトの目的と主要アプリがすぐ理解できるようにする。

想定構成：

1. Hero
2. サイト概要
3. Featured Apps
4. Categories
5. Recently Updated
6. About

大量のアプリをすべてトップページに並べない。Featured AppsまたはRecent Appsを中心とする。具体的な初期配置は第33節を基本とする。

## 8. 更新履歴

`/updates/`を作成する。ここにはサイト自体の変更ではなく、基本的に各アプリのユーザー向け変更を掲載する。

表示例（形式の例であり、実際の変更履歴として掲載しない）：

```text
2026-10-01

Moiré Lab
- Auto Rotateを改善
- 新しい表示モードを追加

2026-09-24

Slide Puzzle Lab
- 最短手数計算機能を追加
```

以下のような変更は原則掲載しない。

- dependency update
- formatting
- lint修正
- CI修正
- typo修正

ただし、利用者への影響がある場合は掲載対象とする。

## 9. 更新履歴データの持ち方

更新履歴はHTMLへ直接記載しない。推奨構造は以下とする。

```text
src/content/updates/
├── 2026-10-01-example-app-a.md
└── 2026-09-24-example-app-b.md
```

または、アプリMarkdown内部に更新履歴を持たせてもよい。ただし、以下が容易な方式を選択する。

- 一覧ページ生成
- 日付順ソート
- アプリ別抽出

更新エントリは対象アプリ、日付、変更内容を識別できる構造にする。

## 10. 日付管理

最低限、以下を区別する。

- `createdAt`
- `updatedAt`

`updatedAt`はサイトファイルの更新日時ではなく、「アプリに利用者向けの意味のある変更が最後に行われた日」として扱うことを基本とする。

単純なdependency更新などでは`updatedAt`を変更しない運用を想定する。

## 11. Repositoryとの関係

将来的にGitHub repositoryをAIエージェントが監視する。

想定フロー：

```text
GitHub repository
  ↓
新規repo / 更新検知
  ↓
変更内容を分析
  ↓
サイト更新が必要か判定
  ↓
該当アプリMarkdown更新
  ↓
Updates更新
  ↓
PR
  ↓
Merge
  ↓
GitHub Actions
  ↓
GitHub Pages
```

1つのアプリ変更で複数のUIファイルを直接修正する必要がない構成とする。

理想的には「Markdown 1ファイル変更」または「アプリMarkdown＋Update entry」だけで済むようにする。

## 12. 掲載対象Repository

現時点では掲載対象repositoryを確定しない。

初期実装ではサンプルデータを2〜3件用意して動作確認を行う。実際のGitHub repository一覧を勝手にすべて掲載しない。掲載対象は後から指定する。

## 13. Repository除外ルール

将来的には以下を基本ルールとする予定。

- Public repository
- 自作アプリ／公開プロジェクト

上記を満たすものを掲載対象候補とする。ただし詳細条件は後で確定する。

以下は原則除外候補。

- fork
- archived
- 検証用repository
- 一時repository
- ライブラリ検証用
- private repository

現時点ではコード上に過度な判定ロジックを実装しない。

## 14. デザイン方針

個人開発アプリのポートフォリオとして、以下を重視する。

- シンプル
- 技術的
- 落ち着いたデザイン
- 情報を探しやすい
- アプリ自体が主役
- 過剰なアニメーションを避ける
- PC / Tablet / Mobile対応

カードUIを基本としてよい。ただし、カードを過度に装飾しない。

## 15. App Card

アプリ一覧カードには最低限以下を表示する。

- アプリ名
- 短い概要
- Category
- Tags
- Last updated
- Open App（公開URLがある場合）
- Details
- GitHub

情報量が多すぎる場合、Open AppとDetailsを主要アクションとし、GitHubは詳細ページ側だけでもよい。

## 16. スクリーンショット

将来的に各アプリのスクリーンショットを掲載できる構造にする。

例：

```text
public/
└── apps/
    └── example-app/
        ├── hero.webp
        └── screenshot-01.webp
```

Markdown frontmatter例：

```yaml
thumbnail: "/apps/example-app/hero.webp"
```

初期実装では画像は必須としない。画像が無いアプリでもレイアウトが崩れないこと。

## 17. SEO / Metadata

各アプリページについて最低限以下を設定する。

- title
- description
- canonical
- Open Graph

トップページ、Apps、Updatesについても適切なmetadataを設定する。

## 18. Accessibility

最低限以下を満たす。

- Semantic HTML
- キーボード操作
- visible focus
- aria-labelの適切な利用
- 適切なHeading構造
- 色だけに依存した状態表現を避ける
- 十分なコントラスト
- タップターゲットを小さくしすぎない

## 19. Responsive Design

Mobile、Tablet、Desktopで確認する。

特に以下が狭い画面で破綻しないこと。

- アプリ一覧
- ナビゲーション
- カード
- タグ
- GitHub / Open Appボタン

## 20. GitHub Pages

GitHub PagesへのDeployをGitHub Actionsで行う。

main branchにMergeされた場合、以下を実行する。

1. install
2. test（プロジェクトに用意した検証）
3. build
4. deploy

Astro公式のGitHub Pages推奨構成を優先する。

## 21. GitHub Actions

最低限以下を用意する。

```text
.github/workflows/deploy.yml
```

必要に応じて以下をDeploy前に実施する。

- typecheck
- lint
- test
- build

Build失敗時はDeployしない。

## 22. Base URL

GitHub Pagesには以下の形式がある。

```text
https://<username>.github.io/
https://<username>.github.io/<repo>/
```

どちらでも対応しやすい構成とする。Astroの`site`と`base`設定を明示する。公開repository名確定後に最終設定する。

内部リンクと画像パスも`base`に対応させる。

## 23. カスタムドメイン

将来的に独自ドメインを利用する可能性がある。そのため、URLをコード内に大量にハードコードしない。

URL設定は可能な限りAstro設定等へ集約する。

## 24. PWA

今回はPWA対応を必須としない。静的なポートフォリオサイトのため、まずは以下を優先する。

- 表示速度
- SEO
- 可読性
- 保守性

必要になれば後から追加できる設計にする。

## 25. 検索

初期MVPでは全文検索は不要。

アプリ数が増加した場合、以下を追加できる構造にする。

- Category filter
- Tag filter
- Keyword search

## 26. ソート

Apps一覧は最低限、最近更新された順で表示できるようにする。

将来的に以下などのソートを追加可能な設計とする。

- Name
- Created
- Updated
- Category

## 27. Status

アプリには状態を持たせられるようにする。

例：

```yaml
status: active
```

候補：

- active
- experimental
- maintenance
- archived

ただし初期UIでは状態を強調しすぎない。

## 28. 自動更新を考慮した重要事項

将来的にAIエージェントがファイルを編集するため、以下を避ける。

- 巨大な単一JSON
- 巨大な単一Markdown
- 全アプリ情報を1ファイルで管理
- HTMLへの直接埋め込み
- 複雑な相互参照

推奨：

- 1アプリ×1言語＝1ファイル（第42節）
- 1更新×1言語＝1エントリ（共通IDで対応付ける）
- 明確なFrontmatter
- 単純なディレクトリ構造

Git diffを見たときに変更内容がすぐ分かることを重視する。

## 29. README

このportfolio repository自体のREADMEも作成する。

READMEには以下を含める。

- サイト概要
- 技術構成
- ローカル実行方法
- Build方法
- Deploy方法
- アプリ追加方法
- アプリ更新方法
- Update追加方法

特に「Adding a new app」として、`src/content/apps/`へMarkdownを追加するだけでページが生成される手順を記載する。

## 30. AIエージェント向け運用ドキュメント

将来的な自動更新のため、`docs/content-maintenance.md`または`AGENTS.md`を作成する。

最低限以下を記載する。

### 新しいアプリを追加する場合

1. apps配下へMarkdown追加
2. frontmatter記入
3. 紹介文作成
4. 必要なら画像追加
5. update entry追加

### アプリ更新時

1. ユーザー向け変更か判断
2. 詳細説明を更新
3. updatedAt更新
4. Update entry追加

### 更新しない例

- dependency update
- CI変更
- 内部refactoring
- formatting

ただし、利用者に影響する場合は変更内容に基づき判断する。

## 31. テスト

最低限以下を確認する。

### Build

```bash
npm run build
```

上記が成功すること。

### Link

内部リンクが壊れていないこと。

### Content

必須frontmatter不足をBuild時に検出すること。

### Responsive

代表的なmobile / desktop幅で確認すること。

## 32. 初期ページ

最低限以下を実装する。

| URL | ページ |
| --- | --- |
| `/` | Home |
| `/apps/` | Apps一覧 |
| `/apps/[slug]/` | アプリ詳細 |
| `/updates/` | 更新履歴 |
| `/about/` | About |

必要に応じて404ページも追加する。

## 33. Homeの初期構成

以下を基本とする。

1. Header
2. Hero
3. Featured Apps
4. Recently Updated
5. Categories
6. About summary
7. Footer

Headerには以下を置く。

- Apps
- Updates
- About
- GitHub

## 34. About

Aboutページでは、個人開発プロジェクト群を紹介するサイトであることを簡潔に説明する。

過度に個人情報を掲載しない。内容は後から変更できるようにする。

## 35. Footer

最低限、GitHubとCopyright程度に留める。不要なSNSリンク等を仮で追加しない。

## 36. 初期データ

掲載対象repoはまだ確定していない。初回実装では以下、または明確にサンプルと分かる仮データを使用する。

- Example App A
- Example App B
- Example App C

実repoを勝手に大量取得して掲載しない。ただし、実データへ置換しやすいことを確認する。

## 37. 今回実施しないこと

以下は今回のスコープ外。

- GitHub APIによる自動repo取得
- dot連携
- Codex自動起動
- 自動PR作成
- repo更新監視
- 自動カテゴリ分類
- 自動更新履歴生成
- 自動スクリーンショット取得
- アクセス解析
- CMS
- 認証
- 管理画面

これらは初期サイト完成後に別フェーズで検討する。

## 38. 将来フェーズ

初期サイト完成後、以下を順次検討する。

| フェーズ | 内容 |
| --- | --- |
| Phase 2 | 掲載対象repoを確定して実データ投入 |
| Phase 3 | GitHub repository更新検知 |
| Phase 4 | AIによる変更内容分析 |
| Phase 5 | portfolioコンテンツ自動更新 |
| Phase 6 | PR自動作成 |
| Phase 7 | dotによる継続運用 |

想定フロー：

```text
repo更新
  ↓
dot検知
  ↓
更新要否判定
  ↓
Codex task
  ↓
portfolio更新
  ↓
PR
  ↓
人間が確認
  ↓
Merge
  ↓
GitHub Pages
```

将来連携の具体的な実現方法は、そのフェーズで利用可能な機能を確認して決定する。

## 39. 実装時の優先順位

以下の順で進める。

1. Astroプロジェクト基本構成
2. Content Collection設計
3. App詳細ページ
4. Apps一覧
5. Home
6. Updates
7. About
8. Responsive対応
9. Accessibility
10. GitHub Actions
11. GitHub Pages Deploy確認
12. README / AGENTS.md
13. 最終Build確認

## 40. 完了条件

以下をすべて満たしたら初期実装完了とする。

- [ ] Astroで正常Buildできる
- [ ] GitHub PagesへDeployできる
- [ ] Homeが表示される
- [ ] Apps一覧が表示される
- [ ] Category別に表示できる
- [ ] App詳細ページが自動生成される
- [ ] Updatesページが表示される
- [ ] updatedAtが表示される
- [ ] Markdown追加だけで新しいアプリを追加できる
- [ ] Markdown変更だけでアプリ情報を更新できる
- [ ] Mobile / Desktopでレイアウトが破綻しない
- [ ] READMEに運用方法が記載されている
- [ ] AIエージェント向け更新ルールが記載されている
- [ ] 実際の掲載対象repoに依存しない状態で初期構築が完了している
- [ ] 日本語／英語の全初期ページが生成される
- [ ] 各ページから対応する別言語のページへ切り替えられる
- [ ] UI、紹介本文、更新履歴、metadataが表示言語に対応する
- [ ] 翻訳ペア・言語別内部リンク・base付きURLの検証が成功する

公開repository名や公開設定が未確定で実Deploy確認ができない場合は、実装・Build検証の完了とDeploy未確認を区別して報告する。未確認の項目を完了扱いにしない。

## 41. Codexへの作業上の注意

既存repositoryに実装する場合は、最初に現在の構成を確認する。新規repositoryの場合は、最小構成から開始する。

不要なライブラリを追加しない。UIライブラリは必須ではない。

実装後は以下等、実際のプロジェクトに存在する検証コマンドを実行する。

```bash
npm install
npm run build
```

問題がある場合は回避せず原因を修正する。

最後に以下を報告する。

- 実装内容
- 主要ファイル
- 設計上の判断
- 実行したテスト
- テスト結果
- 残課題
- GitHub Pages公開に必要な追加設定

初期構築では「1アプリ×1言語＝1コンテンツファイル」「更新履歴も構造化」「UIとコンテンツ分離」を特に重視する。掲載対象repoを確定した段階では、Phase 2の追加指示によって実データ投入を進められる構成とする。

## 42. 日本語／英語切替の実装要件

### 42.1 対応範囲

Home、Apps一覧、アプリ詳細、Updates、Aboutを日本語／英語で提供する。

ナビゲーション、見出し、ボタン、カテゴリ名、状態表示、説明文、画像代替テキスト、更新履歴、title / description / Open Graphも言語別に管理する。アプリ固有名や技術名は必要に応じて共通表記でよい。

本要件は紹介サイトの言語切替である。リンク先アプリの言語対応とは独立して扱い、紹介サイトが英語対応していることを理由に、リンク先アプリも英語対応しているとは記載しない。

### 42.2 URL構成

日本語は言語プレフィックスなし、英語は`/en/`を付ける。

| 日本語 | 英語 |
| --- | --- |
| `/` | `/en/` |
| `/apps/` | `/en/apps/` |
| `/apps/example-app/` | `/en/apps/example-app/` |
| `/updates/` | `/en/updates/` |
| `/about/` | `/en/about/` |

上記はサイトのbaseを除いたパス。GitHub Pagesのproject siteでは、すべての内部リンク・言語切替リンク・画像にbaseを適用する。root baseとproject baseの両方で検証する。

Astroのi18n設定で`locales: ['ja', 'en']`、`defaultLocale: 'ja'`、`routing.prefixDefaultLocale: false`を基本とする。全ページを静的生成し、サーバー実行時の言語判定やredirectに依存しない。

### 42.3 言語切替UIと動作

- Headerに「日本語 / English」を表示する。
- 現在の言語を文字と視覚表現で判別できるようにする。
- 切替先は通常のリンクとし、JavaScript無効でも使えるようにする。
- 詳細ページでは同じアプリの別言語ページへ移動する。常にトップへ戻す実装にしない。
- 切替後の内部ナビゲーションは選択した言語を維持する。
- 初期MVPではブラウザ言語による自動切替や保存済み言語による強制redirectは行わない。アクセスしたURLを表示言語の基準とする。
- スマートフォンでも切替UIが隠れず、キーボード操作とvisible focusに対応する。

### 42.4 コンテンツ構造

第3節・第9節の構成例を、言語別ディレクトリへ拡張する。

```text
src/content/apps/ja/example-app.md
src/content/apps/en/example-app.md
src/content/updates/ja/2026-10-02-example-app.md
src/content/updates/en/2026-10-02-example-app.md
src/i18n/ui.ts
```

1アプリ×1言語＝1ファイルとする。日本語／英語で共通の`appId`と`slug`を持ち、ファイルパス由来のContent Collection IDとは区別する。詳細ページや更新履歴との関連付けは`appId`を使う。

アプリfrontmatter例（日本語、サンプル）：

```yaml
---
appId: "example-app"
locale: "ja"
title: "Example App"
slug: "example-app"
category: "visual-experimental"
description: "視覚表現を試せるサンプルアプリです。"
updatedAt: "2026-10-02"
status: "experimental"
tags:
  - WebGL
featured: false
---
```

英語ファイルでは`locale: "en"`とし、`description`と本文等を英語にする。

`appId`、`slug`、カテゴリID、公開URL、GitHub URL、アプリ更新日、status、技術タグ、featuredは原則として両言語で一致させる。カテゴリは第4節の表示名ではなく安定したIDを格納し、表示名は言語辞書に集約する。本文とUI辞書を分離し、巨大な翻訳ファイルに全アプリ本文を詰め込まない。

更新エントリには共通の`updateId`、対象の`appId`、`date`、`locale`を持たせる。日本語／英語で同じ変更を記載し、各言語のUpdates一覧には該当言語のエントリだけを表示する。

画像は言語ごとに複製する必要はない。画像内の文字が言語に依存する場合は言語別画像を指定できるようにする。

### 42.5 翻訳と運用

- 初期サンプル2〜3件は日本語／英語を必ず対で用意する。
- 翻訳本文はビルド前にrepositoryへ保存する。閲覧時の外部翻訳APIは使用しない。
- 新規掲載アプリと更新履歴は両言語の追加を基本とする。
- 翻訳だけの修正ではアプリの`updatedAt`を変更しない。
- 日本語にしか存在しない機能や変更を、英語側で誤って追加・省略しない。
- 公開対象の翻訳が欠ける場合はBuild前の検証で失敗させる。英語URLに日本語本文を黙って表示するfallbackは初期MVPでは採用しない。
- READMEとAIエージェント向け運用ドキュメントに、翻訳ペアの追加・更新方法を記載する。

### 42.6 Metadataと検証

- HTMLの`lang`を`ja`または`en`に設定する。
- 各ページに自身の言語版URLをcanonicalとして設定する。
- 対応するページ同士へ`hreflang="ja"`、`hreflang="en"`を設定する。
- 日付は同じ元データを使い、表示形式を言語に合わせる。
- 同一言語内の`appId`／slug重複、翻訳ペア欠落、共通項目不一致、存在しないアプリへの更新エントリ参照を検出する。
- 両言語の一覧・詳細・更新履歴に重複や言語混在がないことを確認する。
- root / project baseの両設定で言語切替と内部リンクを検証する。
- Mobile / Desktopで英語の長い文やボタンによるレイアウト崩れを確認する。

参照：Astro公式のInternationalization (i18n) Routing

https://docs.astro.build/en/guides/internationalization/

## 43. 実装担当からの確認事項と推奨案

以下はユーザーが最終確定する前の推奨案である。実装担当から報告されたWindows側のGit状態は、この指示書の作成環境では直接確認していない。

### 43.1 サイト専用repositoryと公開先

サイト専用の独立したrepositoryを用意する方針を推奨する。

- repository名の候補：`Bamboosato/site-github-pages`
- 公開URLの候補：`https://bamboosato.github.io/site-github-pages/`
- `site`の候補：`https://bamboosato.github.io`
- `base`の候補：`/site-github-pages`

repository名と公開URLは未確定。確定前でも設定を集約してローカル実装は進められる。

報告された`C:\work_codex\site_github-pages`が親の`Bamboosato/moire-lab`を参照する状態では、サイト変更を親repositoryへcommit / pushしない。専用作業ディレクトリに独立したGit管理を用意し、作業前に`git rev-parse --show-toplevel`と`git remote -v`で作業先を確認する。親の`.git`削除やremote変更によって対応しない。

### 43.2 今回の完了範囲

まずは以下まで進める案を推奨する。

1. 日本語／英語を含めた実装
2. サンプルデータ投入
3. Build・コンテンツ・リンク検証
4. Mobile / Desktop表示検証
5. GitHub Pages用workflowと公開手順の整備

実公開はrepositoryと公開範囲の確定後に行う案とする。これは推奨案であり、ユーザーが実公開まで指示した場合はその指定に従う。第39節・第40節のDeploy確認は、未実施の場合に未確認として報告する。

### 43.3 サイト表示情報の仮設定

以下を仮設定として提案する。

| 項目 | 仮設定案 |
| --- | --- |
| サイト名 | Bamboosato Apps |
| 作者表示名 | Bamboosato |
| Header / FooterのGitHubリンク | https://github.com/Bamboosato |

表示名等は1つの設定ファイルへ集約し、後から変更できるようにする。日本語／英語で必要な説明文は言語辞書またはコンテンツとして管理する。repository名・今回の完了範囲・表示情報の最終指定があれば、この節の仮設定より優先する。
