---
title: 【自作ブログ 1】自作ブログを作りたい
date: 2023-02-06
---

※ https://yushi-dev.hatenablog.com/entry/2023/02/06/010419 の転載です。

現在はこちらのはてなブログで記事を書いていますが、ブログを自作してみたいなとも思いました。

実際に移設するかどうかは置いておいて、とりあえず作ってみます。

### 方針を考える

フロントエンドについては、最近のトレンドに倣って下記を採用します。

- TypeScript
- React
- Next.js
- Styled Components

記事管理について、バックエンドのシステムを組んだり、ヘッドレス CMS の導入も考えられますが、  
初期段階では一旦 Markdown ファイルで管理することとします。

デプロイ先は GitHub Pages とします。  
無料で利用できますし、ソース管理も GitHub で行うので、あとは少しの設定や yml ファイルを 1 つ用意するだけで済みます。  
楽ちんです。

https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages

### プロジェクト作成

プロジェクトの土台を作っていきます。

#### editorconfig

editorconfig を利用して、IDE が自動でフォーマットしてくれるようにします。

```
(.editorconfig)

# EditorConfig is awesome: https://EditorConfig.org

root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[Makefile]
indent_style = tab

[*.md]
trim_trailing_whitespace = false
```

#### asdf

node.js のバージョンは asdf で管理します。

https://asdf-vm.com/:embed

node.js の他にも複数の言語を一括で管理できることと、手順が簡略なことがメリットです。

```sh
asdf local nodejs [node.jsのバージョン]
```

#### Next.js のプロジェクト作成

npx を利用して Next.js のプロジェクトを作成します。  
typescript を適用します。

```sh
npx create-next-app@latest --typescript
```

#### Prettier の導入

ひとまず Formatter の Prettier だけ導入しておきます。  
これを入れれば、簡単にソースコードのフォーマットを綺麗に保つことができます。

https://prettier.io/:embed

```sh
npm i -D prettier
```

設定ファイルを用意します。

```yaml
(.prettierrc.yml)

singleQuote: true
semi: false
```

Next.js が自動生成するファイルを、Format 対象から除外しておきます。

```
(.prettier)

.next
```

実行コマンドを追加します。

```json
(package.json)
{
  ...
  "scripts: {
    ...
    "prettier": "prettier -c .",
    "prettier:fix": "prettier -w ."
    ...
  }
}
```

ここまでで、プロジェクトの土台が作れました。

### Pull Request

https://github.com/nek0meshi/blog/pull/2/commits

### あとがき

最近スノボに行ったんですが、あばらを折ったみたいです。
