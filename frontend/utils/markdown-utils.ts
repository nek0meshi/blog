import matter from 'gray-matter'
import { convert } from 'html-to-text'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'

export type FileContentBase = {
  content: string
}

export async function convertToHtml(md: string) {
  const result = await remark().use(html).use(remarkGfm).process(md)

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
