# Blog

## 概要

Next.js、TypeScript、Markdownを使用した技術関連のブログプラットフォームです。

このプロジェクトは、Web開発、プログラミング言語、フレームワークなどの技術トピックに関する記事を共有することを目的としています。

### 主な機能
- Markdownによる記事作成と表示
- シンタックスハイライト付きのコードブロック
- レスポンシブデザイン
- 静的サイト生成（SSG）によるパフォーマンス最適化
- GitHub Pagesへのデプロイ対応

### 技術スタック
- Next.js
- TypeScript
- Styled Components
- Markdown (remark, rehype)
- SASS

## セットアップ

### 開発環境の準備

```bash
# frontendディレクトリに移動
cd frontend

# 依存関係のインストール
npm ci

# 開発サーバーの起動
npm run dev
```

開発サーバーは http://localhost:3000 で実行されます。

## 記事の作成

新しい記事を作成するには、`frontend/posts` ディレクトリに Markdown ファイルを追加します。
各 Markdown ファイルには以下のようなフロントマターを含める必要があります：

```markdown
---
title: '記事のタイトル'
date: 2023-04-01
---

ここに記事の本文を書きます...
```

## プロジェクト構造

```
frontend/
├── components/  # 再利用可能なUIコンポーネント
├── hooks/       # React Hooks
├── pages/       # ページコンポーネントとルーティング
├── **posts/**   # Markdownで書かれた記事
├── public/      # 静的ファイル
├── styles/      # グローバルスタイルとテーマ
├── lib/         # ユーティリティ関数
├── types/       # TypeScript型定義
└── utils/       # Utility
```

## デプロイ

GitHub Pages へのデプロイ:

```bash
git push origin gh-pages-release
```

## 参考

* A statically generated blog example using Next.js, Markdown, and TypeScript
  * https://github.com/vercel/next.js/tree/canary/examples/blog-starter
* Render Markdown
  * https://nextjs.org/learn/basics/dynamic-routes/render-markdown
* "Prop `className` did not match."への対処
  * https://zenn.dev/nbr41to/articles/c0c691653e3d55
