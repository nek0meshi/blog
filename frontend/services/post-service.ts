import fs from 'fs'
import path from 'path'
import dayjs from '@/lib/dayjs'
import * as markdownUtils from '@/utils/markdown-utils'

export type PostMatter = {
  title: string
  date: string
}

export async function loadMarkdown(slug: string) {
  const fullPath = path.join(getPostDir(), `${slug}.md`)

  const rawContent = fs.readFileSync(fullPath, { encoding: 'utf8' })
  const postData = await markdownUtils.loadFile<PostMatter>(rawContent)

  return {
    content: postData.content,
    matter: {
      title: postData.matter.title,
      date: dayjs(postData.matter.date).format('YYYY-MM-DD'),
    },
  }
}

export function getSlugs() {
  return fs
    .readdirSync(getPostDir())
    .map((fileName) => path.parse(fileName).name)
}

function getPostDir() {
  return path.join(process.cwd(), 'posts')
}
