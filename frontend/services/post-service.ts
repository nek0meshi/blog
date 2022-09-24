import path from 'path'
import * as markdownUtils from '@/utils/markdown-utils'

export async function loadMarkdown(slug: string) {
  const postDir = path.join(process.cwd(), 'posts')
  const fullPath = path.join(postDir, `${slug}.md`)

  return markdownUtils.loadFile(fullPath)
}
