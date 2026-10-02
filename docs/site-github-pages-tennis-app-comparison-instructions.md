# テニス系3アプリの使い分け 紹介改善指示書

作成日：2026-10-02  
対象repository：https://github.com/Bamboosato/site-github-pages  
確認したmain：`88443d25dbd21780cb9ad8a4fcb65a7769a2dd59`

## 1. 目的と作業範囲

MatchupLab、Tennis Organizing App、Tennis Matchup Appの違いを、利用者が選びやすい紹介文に反映する。

主な判断軸は「メンバー管理が必要か」「メンバーをローカルで管理したいか、複数端末で共有したいか」とする。

今回変更するのは、紹介サイトのカード説明と3アプリの詳細本文。日本語／英語の両方に反映する。リンク先アプリの機能・認証・保存処理を変更する作業ではない。

カードはシンプルに保つ。短い概要と、別指示で実装されている場合は短い特徴チップを使う。おすすめユーザー、アカウント登録条件、保存先の説明はアプリ詳細ページへ記載する。

## 2. ユーザー確認済みの特徴とおすすめユーザー

以下は2026-10-02にユーザーが指定した内容であり、紹介内容の基準とする。

| 項目 | MatchupLab | Tennis Organizing App | Tennis Matchup App |
| --- | --- | --- | --- |
| アカウント登録 | 不要 | 必要 | 不要 |
| メンバー管理 | できる | できる | できない |
| メンバーの保存・管理 | ローカルのみ | クラウド | 管理機能なし |
| 複数端末・ブラウザーでのメンバー共有 | クラウドでの自動共有は行わない | できる | メンバー管理機能なし |
| 後からのラウンド追加・参加人数調整 | 本指示では有無を判断しない | 本指示では有無を判断しない | できる |
| おすすめのユーザー | メンバーをローカルで管理したい人 | メンバーを複数端末で管理したい人 | メンバー管理までは必要のない人 |

「メンバー管理」は、繰り返し利用するメンバー情報を保存し、登録・編集等を行う機能を指す。「参加人数の指定・調整」とは区別する。

### 表現上の注意

- アカウント登録とメンバー管理を混同しない。
- 「メンバー登録なし」だけではアカウント登録の話に見えるため、Tennis Matchup Appの紹介は「メンバー管理なし」または「メンバー管理は不要」と明示する。
- MatchupLabのローカル管理を、クラウド同期や複数端末での自動共有ができるように紹介しない。既存のJSONバックアップの説明は維持してよい。
- Tennis Organizing Appは、クラウドのメンバー情報を複数端末・ブラウザーで共有できることを伝える。リアルタイム同期や同時編集、他ユーザーとの共有権限は本指示から推測して追加しない。
- Tennis Matchup Appだけについてラウンド追加・参加人数調整が確認されている。他2アプリが対応していないとは記載しない。
- 優劣、旧版／後継、廃止予定を推測して表示しない。3つの利用目的の違いとして紹介する。

## 3. カードの短い説明

frontmatterの`description`を次の文面へ更新する。

| アプリ | 日本語description | 英語description |
| --- | --- | --- |
| MatchupLab | メンバーを端末内で管理し、練習会の組合せを作成するアプリ。 | Manage members locally in your browser and create practice match schedules. |
| Tennis Organizing App | メンバーをクラウドで管理し、複数端末から利用できる練習会運営アプリ。 | Manage members in the cloud and organize practice sessions across devices and browsers. |
| Tennis Matchup App | メンバー管理なしで組合せを作成。ラウンド追加や参加人数の調整にも対応。 | Create match schedules without managing a member list, then add rounds or adjust the participant count. |

これらは既存の共通カードと詳細見出し、metadataに反映される想定。アプリ名やIDによる条件分岐をUIコンポーネントへ追加しない。

カードに新たな比較表、おすすめユーザーの長文、登録手順、ログイン条件の案内枠を追加しない。既存の「アプリを開く」「詳しく見る」は維持する。

## 4. 詳細ページへ追加・更新する説明

現在の概要・主な機能・特徴・技術構成を保ちつつ、以下の情報を整理する。「おすすめのユーザー」は概要の近くに置き、選ぶ理由をすぐ読めるようにする。

### 4.1 MatchupLab

日本語の追加・更新文面：

```markdown
## おすすめのユーザー

メンバーをローカルで管理したい人におすすめです。

## 利用条件・メンバー管理

アカウント登録は不要です。メンバー情報は利用中のブラウザー内に保存し、登録・編集などの管理ができます。クラウドでのメンバー共有は行いません。
```

英語の対応文面：

```markdown
## Who this app is for

Recommended for people who want to manage members locally.

## Account requirements and member management

No account registration is required. Member information is stored in the browser you use, where you can add and edit members. Members are not shared through the cloud.
```

既存のメンバーJSONバックアップについての説明を維持し、「別端末へデータを移すことが一切できない」といった過度な表現にしない。組合せ結果や入力途中の状態の保存については、既存の確認済み説明を維持する。

### 4.2 Tennis Organizing App

日本語の追加・更新文面：

```markdown
## おすすめのユーザー

メンバーを複数の端末・ブラウザーで共有して管理したい人におすすめです。

## 利用条件・メンバー管理

メンバーをクラウドで管理するには、アカウント登録が必要です。保存したメンバー情報は複数の端末・ブラウザーから利用できます。
```

英語の対応文面：

```markdown
## Who this app is for

Recommended for people who want to access and manage their members across devices and browsers.

## Account requirements and member management

Account registration is required to manage members in the cloud. Saved member information can be accessed from multiple devices and browsers.
```

確認したサイト本文には「ログインやゲスト利用の導線」という説明がある。主に紹介するクラウドのメンバー管理については、ユーザー指定のアカウント登録必要という条件を明確にする。既存のゲスト利用の記述が、登録なしで同じメンバー管理・共有ができると読める場合は説明を整理する。

現在のソースに限定的なゲスト利用が実際に存在する場合、その存在を否定せず、必要な場合だけ対象範囲を補足する。アカウント登録条件が不明瞭になる一般的な「登録不要」「ログインなしで利用可能」という紹介にしない。紹介文の整合性を取るためにリンク先アプリの機能を削除しない。

### 4.3 Tennis Matchup App

日本語の追加・更新文面：

```markdown
## おすすめのユーザー

メンバー管理までは必要なく、その場の参加人数に合わせて組合せを作りたい人におすすめです。

## 利用条件・メンバー管理

アカウント登録は不要です。メンバー情報を保存・管理する機能はなく、当日の参加人数などの条件から組合せを作成します。

## 当日の変更への対応

組合せを作成した後からラウンドを追加し、参加人数を調整できます。
```

英語の対応文面：

```markdown
## Who this app is for

Recommended for people who do not need member management and want to create schedules for the participants attending that day.

## Account requirements and member management

No account registration is required. The app does not store or manage a member list; it creates match schedules from settings such as the participant count.

## Adjustments during a session

After creating a schedule, you can add rounds and adjust the participant count.
```

主な機能にも「作成後のラウンド追加・参加人数調整」を追加する。すでに同じ説明がある場合は重複させず統合する。参加人数調整による過去ラウンドの扱いや、すべての結果が保持されるといった挙動は、本指示から推測して記載しない。

## 5. 既存の改善指示との整合

### カテゴリ

3アプリの所属はスポーツ・対戦運営、category IDは`sports-competition`を維持する。カテゴリ改善指示書が未反映でも、本作業で別の再分類を行わない。

### 特徴チップと利用条件

利用者向け特徴の改善が実装済みの場合、MatchupLabとTennis Matchup Appの「登録不要」は今回のユーザー確認を根拠に表示できる。既存の`usageFeatures`等の形式に合わせる。

Tennis Organizing Appに無条件の「登録不要」チップを付けない。アカウント登録が必要であることと、クラウド管理・複数端末利用の説明は詳細ページで行う。

今回のためだけに新しいチップIDや比較用スキーマを増やす必要はない。特徴チップ改善が未実装の場合は、本文とdescriptionの改善を先に完了できる。新規チップ基盤の実装は別指示に従う。

利用条件をMarkdown本文と共通メタデータの両方で管理する実装になっている場合、既存の構成へ統合し、同じ内容を詳細ページに2回表示しない。

### 更新履歴と根拠

本作業は紹介内容の補足・整理である。アプリの`updatedAt`を進めず、アプリ機能の新規リリースとしてUpdatesへエントリを追加しない。

根拠の記録には「2026-10-02、ユーザー確認：アカウント条件・メンバー管理・おすすめユーザー・Tennis Matchup Appのラウンド追加と人数調整」を残す。アプリのcommitやリリース日を、この確認日から推測しない。

## 6. 主な変更ファイル

```text
src/content/apps/ja/matchup-lab.md
src/content/apps/en/matchup-lab.md
src/content/apps/ja/tennis-organizing-app.md
src/content/apps/en/tennis-organizing-app.md
src/content/apps/ja/tennis-matchup-app.md
src/content/apps/en/tennis-matchup-app.md
```

上記6ファイルを中心に変更する。現在のMarkdownレンダリングで説明と見出しを表示できるため、原則として新しい専用ページ、比較表コンポーネント、frontmatterの必須項目は追加しない。

根拠記録は既存の`docs/public-repositories.json`またはコンテンツ運用ドキュメントに合わせて更新する。アプリの公開URL、githubUrl、slug、技術構成、featured等は、この紹介改善を理由に変更しない。

## 7. 検証観点と受入条件

### 内容・データ

- 3アプリのdescriptionが第3節の意図を満たす。
- 両言語の詳細におすすめユーザー、アカウント条件、メンバー管理の有無と保存先を記載する。
- MatchupLabとTennis Matchup Appのアカウント登録不要、Tennis Organizing Appのクラウド管理には登録必要という条件が明確。
- Tennis Matchup Appにはメンバー管理機能がないことと、作成後のラウンド追加・参加人数調整の両方を記載する。
- 「アカウント登録」と「メンバー管理」を混同した表現がない。
- 他2アプリのラウンド追加・人数調整の有無を推測して断定しない。
- 日英で意味と条件が一致し、共通ID・category・URL・日付を維持する。
- 新たな必須frontmatterを設けず、他11アプリの既存コンテンツが引き続き表示される。

### UI・機能・非機能

- Homeのカード対象に入る場合、Apps一覧、スポーツカテゴリ一覧、詳細に更新したdescriptionが反映される。
- 各詳細の「おすすめのユーザー」は本文の見つけやすい位置にあり、適切なH2見出しで表示される。
- カードには詳細な利用条件や比較表を追加しない。
- 320px・390px・Desktopで日本語／英語の説明がはみ出さない。
- 一覧から詳細へ遷移し、同じアプリの英語／日本語ページへ切り替えられる。
- 既存の外部リンク、キーボード操作、最終更新日順を維持する。
- 新しいdescriptionがページdescription・OGへ反映される。

実装前に最新mainとAGENTS.mdを確認し、既存の検証を実行する。

```bash
npm run verify
```

リンク・言語設定・共通UIを変更した場合は、AGENTS.mdに従って`npm run verify:bases`も実行する。純粋な文章修正のためだけに実装をなぞる専用テストを大量に追加しない。

ブラウザー確認は3アプリの日本語／英語のカードと詳細に絞る。リンク先アプリのアカウント作成や実データ登録は今回の対象ではない。

## 8. 完了報告

以下を報告する。

1. 更新した3アプリのカード説明
2. 各アプリのおすすめユーザーと利用条件
3. Tennis Organizing Appの既存ゲスト説明をどう整理したか
4. Tennis Matchup Appのラウンド追加・参加人数調整を記載した箇所
5. 日英表示の検証結果と未確認範囲

本書は実装担当へ渡す改善指示書であり、紹介サイトの更新が実装・公開済みであることを示すものではない。
