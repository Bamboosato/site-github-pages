export const locales = ['ja', 'en'] as const;
export type Locale = typeof locales[number];

export const categories = {
  'sports-competition': { ja: 'スポーツ・大会運営', en: 'Sports / Competition' },
  'visual-experimental': { ja: 'ビジュアル・実験', en: 'Visual / Experimental' },
  utilities: { ja: 'ユーティリティ', en: 'Utilities' },
  productivity: { ja: '生産性', en: 'Productivity' },
  other: { ja: 'その他', en: 'Other' },
} as const;
export type CategoryId = keyof typeof categories;
export const statuses = {
  active: { ja: '公開中', en: 'Active' },
  experimental: { ja: '実験中', en: 'Experimental' },
  maintenance: { ja: 'メンテナンス中', en: 'Maintenance' },
  archived: { ja: 'アーカイブ', en: 'Archived' },
} as const;

export const ui = {
  ja: {
    home: 'ホーム', apps: 'アプリ', updates: '更新履歴', about: 'このサイトについて',
    skip: '本文へ移動', navigation: 'メインナビゲーション', language: '表示言語', currentLanguage: '現在の言語',
    heroEyebrow: '小さな工夫から、使えるかたちへ。',
    heroTitle: 'つくる。試す。\n使いやすくする。',
    heroDescription: '日々の作業を少し楽にするツールや、視覚表現を楽しむ実験。個人開発のアプリと、その育ち方を紹介します。',
    browse: 'アプリを見てみる', readAbout: 'このサイトについて',
    featured: 'ピックアップ', featuredDescription: 'まずは、こちらから。',
    recent: '最近更新されたアプリ', recentDescription: '少しずつ、使いやすく。',
    categories: 'カテゴリから探す', categoriesDescription: '気になるテーマで見つける。',
    allApps: 'すべてのアプリ', allUpdates: '更新履歴を見る',
    appsDescription: '目的や興味から、気になるアプリを見つけてください。最近更新された順に紹介しています。',
    updatesDescription: '新しい機能や使い勝手の改善など、利用者に関わる変更を紹介します。',
    aboutDescription: 'Bamboosatoの個人開発プロジェクトを紹介するポートフォリオです。',
    aboutHeading: '小さな課題に、小さな道具を。',
    aboutBody: '身近な作業を助ける道具から、表現の可能性を探る実験まで。アイデアを動くものにし、使いながら少しずつ改善しています。',
    aboutSite: 'このサイトで紹介すること',
    aboutSiteBody: 'アプリができること、設計の特徴、使っている技術、利用者向けの更新情報をまとめます。興味を持ったアプリは、公開先やGitHubから詳しく確認できます。',
    aboutLanguages: '日本語と英語で読む',
    aboutLanguagesBody: '各ページは日本語と英語で読むことができます。上部の言語リンクで同じページの表示言語を切り替えられます。リンク先アプリの対応言語は、それぞれのアプリで確認してください。',
    sample: 'サンプル',
    sampleNotice: 'サンプル表示の紹介は、構成を確認するための仮データです。実際に公開されているアプリではありません。',
    sampleDetail: 'この紹介はサンプルです。機能・技術・更新履歴は、ページ構成を確認するための仮データです。',
    open: 'アプリを開く', details: '詳しく見る', github: 'GitHub',
    lastUpdated: '最終更新日', created: '作成日', technologies: '技術', status: '状態',
    recentChanges: '最近の主な変更', backToApps: 'アプリ一覧へ',
    noApps: 'このカテゴリのアプリは、まだありません。', noUpdates: '更新履歴は、まだありません。',
    homeDescription: 'Bamboosatoの個人開発アプリを紹介。主な機能、特徴、技術構成、更新履歴を日本語と英語で読むことができます。',
    count: '件', all: 'すべて', portfolio: '個人開発ポートフォリオ',
    selectedLabel: '01 / ピックアップ', progressLabel: '02 / 更新情報', discoverLabel: '03 / カテゴリ', makerLabel: 'つくり手について',
  },
  en: {
    home: 'Home', apps: 'Apps', updates: 'Updates', about: 'About',
    skip: 'Skip to content', navigation: 'Main navigation', language: 'Display language', currentLanguage: 'Current language',
    heroEyebrow: 'Small ideas. Useful things.',
    heroTitle: 'Build. Explore.\nMake it useful.',
    heroDescription: 'Tools that make everyday tasks a little easier, and experiments in visual expression. Explore independently built apps and how they evolve.',
    browse: 'Explore the apps', readAbout: 'About this portfolio',
    featured: 'Selected apps', featuredDescription: 'A few places to start.',
    recent: 'Recently updated', recentDescription: 'Getting a little better, one change at a time.',
    categories: 'Explore by category', categoriesDescription: 'Follow your interests.',
    allApps: 'View all apps', allUpdates: 'View updates',
    appsDescription: 'Find an app for your goals and interests. Projects are listed by their most recent meaningful update.',
    updatesDescription: 'New features and usability improvements that make a difference to people using the apps.',
    aboutDescription: 'A portfolio of independently built projects by Bamboosato.',
    aboutHeading: 'Small tools for everyday challenges.',
    aboutBody: 'From practical tools to experiments in expression, these projects turn ideas into working apps and improve through use.',
    aboutSite: 'What you will find here',
    aboutSiteBody: 'Learn what each app does, what makes its design distinctive, which technologies it uses, and what has changed for its users. Public app links and GitHub repositories are included when available.',
    aboutLanguages: 'Read in Japanese or English',
    aboutLanguagesBody: 'Each page is available in Japanese and English. The language links at the top take you to the same page in the other language. Check each linked app for the languages it supports.',
    sample: 'Sample',
    sampleNotice: 'Entries marked as samples are fictional data for reviewing the site structure, rather than apps available to use.',
    sampleDetail: 'This entry is a sample. Its features, technologies, and update history are fictional data used to demonstrate the page layout.',
    open: 'Open app', details: 'View details', github: 'GitHub',
    lastUpdated: 'Last updated', created: 'Created', technologies: 'Technologies', status: 'Status',
    recentChanges: 'Recent changes', backToApps: 'Back to apps',
    noApps: 'There are no apps in this category yet.', noUpdates: 'No updates yet.',
    homeDescription: 'Explore independently built apps by Bamboosato: their features, design, technologies, and update histories in Japanese and English.',
    count: 'apps', all: 'All', portfolio: 'Independent app portfolio',
    selectedLabel: '01 / SELECTED', progressLabel: '02 / IN PROGRESS', discoverLabel: '03 / DISCOVER', makerLabel: 'ABOUT THE MAKER',
  },
} as const;

export function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'ja' ? 'ja-JP' : 'en-US', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
