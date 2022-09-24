import fs from 'fs'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'

export async function convertToHtml(md: string) {
  const result = await remark().use(html).use(remarkGfm).process(md)

  return result.toString()
}

export async function loadFile(filePath: string) {
  const contents = await convertToHtml(
    fs.readFileSync(filePath, { encoding: 'utf8' })
  )

  return { contents }
}
