export type PostMatter = {
  slug: string
  title: string
  date: string
}

export type MarkdownContent = {
  content: string
  matter: PostMatter
}
