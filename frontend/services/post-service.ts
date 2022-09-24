import fs from 'fs'
import path from 'path'
import * as markdownUtils from '@/utils/markdown-utils'

export async function loadMarkdown(slug: string) {
  const fullPath = path.join(getPostDir(), `${slug}.md`)

  return markdownUtils.loadFile(fullPath)
}

export function getSlugs() {
  return fs
    .readdirSync(getPostDir())
    .map((fileName) => path.parse(fileName).name)
}

function getPostDir() {
  return path.join(process.cwd(), 'posts')
}
