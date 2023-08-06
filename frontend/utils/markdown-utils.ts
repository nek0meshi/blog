import matter from 'gray-matter'
import { convert } from 'html-to-text'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

export type FileContentBase = {
  content: string
}

export async function convertToHtml(md: string) {
  const result = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(md)

  return result.toString()
}

export function convertToPlain(html: string) {
  return convert(html)
}

export async function loadFile<MatterType>(
  rawContent: string
): Promise<FileContentBase & { matter: MatterType }> {
  const matterResult = matter(rawContent)
  const content = await convertToHtml(matterResult.content)

  return {
    content,
    matter: matterResult.data as MatterType,
  }
}
