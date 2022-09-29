import ArticleContent from '@/components/ArticleContent'
import dayjs from '@/lib/dayjs'
import * as postService from '@/services/post-service'

export async function getStaticPaths() {
  return {
    paths: postService.getSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const postData = await postService.loadMarkdown(params.slug)

  return {
    props: {
      content: postData.content,
      title: postData.matter.title,
      date: postData.matter.date,
    },
  }
}

type Props = {
  content: string
  title: string
  date: string
}

const Slug = ({ content, title, date }: Props) => {
  return (
    <>
      <ArticleContent content={content} date={dayjs(date)} title={title} />
    </>
  )
}

export default Slug
