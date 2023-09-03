import ArticleContent from '@/components/ArticleContent'
import dayjs from '@/lib/dayjs'
import MainContainer from '@/components/MainContainer'
import * as postService from '@/services/post-service'
import { PostMatter } from '@/types/Post'

export async function getStaticPaths() {
  return {
    paths: postService.getSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

type Params = {
  params: {
    slug: string
    matters: PostMatter[]
  }
}

export async function getStaticProps({ params }: Params) {
  const postData = await postService.loadMarkdown(params.slug)

  return {
    props: {
      content: postData.content,
      title: postData.matter.title,
      date: postData.matter.date,
      matters: await postService.getMatters(),
    },
  }
}

type Props = {
  content: string
  title: string
  date: string
  matters: PostMatter[]
}

const Slug = ({ content, title, date, matters }: Props) => {
  return (
    <MainContainer matters={matters}>
      <ArticleContent content={content} date={dayjs(date)} title={title} />
    </MainContainer>
  )
}

export default Slug
