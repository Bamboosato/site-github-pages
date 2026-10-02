# このサイトの作業ルール

- 初期構築指示書は `docs/github-pages-portfolio-initial-build-instructions.md`。言語対応は第42節を優先する。
- 作業前に `git rev-parse --show-toplevel` と `git remote -v` を確認する。親リポジトリを変更しない。
- アプリ本文は `src/content/apps/{ja,en}/`、更新履歴は `src/content/updates/{ja,en}/` に置く。掲載対象はBamboosato所有のPublic repoすべて。ただしユーザー指定により `site-github-pages` 自体は除外する。Private repoの情報を掲載しない。
- コンテンツとUIを分離する。詳細なルールは `docs/content-maintenance.md`。
- カテゴリの最新方針は `docs/site-github-pages-category-improvement-instructions.md`。表示は指定順の4カテゴリ、既存ID・URLは維持する。名称と説明は共通辞書、所属は日英Markdownで管理し、大きな再分類や5つ目の追加はユーザーと検討する。
- テスト観点を機能・非機能・データ・UIで先に列挙し、正常・異常・境界・状態遷移を区別する。検証意図と前提条件を明示する。
- 環境差、実行順序、非同期処理、データ依存を確認する。同一ブラウザー／実機へのテストは逐次実行する。
- 変更に応じてE2E範囲を選び、選定理由と未実施範囲を報告する。全件を既定としない。
- `npm run verify` を実行する。URL・画像・言語・設定変更時は `npm run verify:bases` も実行する。
- 表示検証と実Deploy確認は別に報告し、未確認項目を完了扱いにしない。
- サイト専用remoteは `https://github.com/Bamboosato/site-github-pages.git`、baseは `/site-github-pages`。既存のmain履歴を保持する。
- 2026-10-02にユーザーがサイトrepoのPublic化・PRマージ・GitHub Pages公開まで進めることを承認した。公開URLは `https://bamboosato.github.io/site-github-pages/`。
- Public repo一覧と更新の根拠は `docs/public-repositories.json`。掲載追加・更新時はMarkdownと一緒に確認記録も更新する。定期的なGitHub同期は実装しない。
