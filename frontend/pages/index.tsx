import styled from 'styled-components'
import ArticleListItem from '@/components/ArticleListItem'
import MainContainer from '@/components/MainContainer'
import * as postService from '@/services/post-service'
import { PostMatter } from '@/types/Post'

const ArticleList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
`

export async function getStaticProps() {
  const posts = await Promise.all(
    (
      await postService.getMatters()
    )
      .slice()
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .map(async (matter) => ({
        content: (
          await postService.loadMarkdown(matter.slug)
        ).content.slice(0, 300),
        matter,
      }))
  )

  return {
    props: {
      posts,
    },
  }
}

type Props = {
  posts: {
    content: string
    matter: PostMatter
  }[]
}

const Index = ({ posts }: Props) => {
  const matters = posts.map(({ matter }) => matter)
  const links = (
    <ArticleList>
      {posts.map(({ content, matter }) => (
        <ArticleListItem
          key={matter.slug}
          slug={matter.slug}
          title={matter.title}
          date={matter.date}
          content={content}
        />
      ))}
    </ArticleList>
  )

  return (
    <MainContainer matters={matters}>
      <section>{links}</section>
    </MainContainer>
  )
}

export default Index
