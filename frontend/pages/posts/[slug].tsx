import styled from 'styled-components'
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

const MOBILE_MAX_WIDTH = '768px'
const TABLET_MAX_WIDTH = '1024px'
const ArticleContainer = styled.div`
  width: ${TABLET_MAX_WIDTH};
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    width: ${MOBILE_MAX_WIDTH};
  }
  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
  }
`

type Props = {
  content: string
  title: string
  date: string
}

const Slug = ({ content, title, date }: Props) => {
  return (
    <ArticleContainer>
      <ArticleContent content={content} date={dayjs(date)} title={title} />
    </ArticleContainer>
  )
}

export default Slug
