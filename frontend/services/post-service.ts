import fs from 'fs'
import path from 'path'
import dayjs from '@/lib/dayjs'
import * as markdownUtils from '@/utils/markdown-utils'
import { MarkdownContent, PostMatter } from '@/types/Post'

export async function loadMarkdown(slug: string): Promise<MarkdownContent> {
  const fullPath = path.join(getPostDir(), `${slug}.md`)

  const rawContent = fs.readFileSync(fullPath, { encoding: 'utf8' })
  const postData = await markdownUtils.loadFile<PostMatter>(rawContent)

  return {
    content: postData.content,
    matter: {
      slug,
      title: postData.matter.title,
      date: dayjs(postData.matter.date).format('YYYY-MM-DD'),
    },
  }
}

export async function getMatters(): Promise<PostMatter[]> {
  const slugs = getSlugs()

  const matters: PostMatter[] = []
  for (const slug of slugs) {
    const content = await loadMarkdown(slug)

    matters.push(content.matter)
  }

  return matters
}

export function getSlugs() {
  return fs
    .readdirSync(getPostDir())
    .map((fileName) => path.parse(fileName).name)
}

function getPostDir() {
  return path.join(process.cwd(), 'posts')
}
