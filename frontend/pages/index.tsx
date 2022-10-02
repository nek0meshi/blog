import Link from 'next/link'
import styled from 'styled-components'
import MainContainer from '@/components/MainContainer'
import * as postService from '@/services/post-service'
import { PostMatter } from '@/types/Post'

const H1 = styled.h1`
  margin-bottom: 1rem;
`

export async function getStaticProps() {
  return {
    props: {
      matters: await postService.getMatters(),
    },
  }
}

type Props = {
  matters: PostMatter[]
}

const Home = ({ matters }: Props) => {
  const linkData = [
    {
      path: 'posts',
      title: '記事一覧',
    },
  ]
  const links = (
    <ul>
      {linkData.map(({ path, title }) => (
        <li key={path}>
          <Link href={`/${path}`}>{title}</Link>
        </li>
      ))}
    </ul>
  )

  return (
    <MainContainer matters={matters}>
      <section>
        <H1>ブログ</H1>
        {links}
      </section>
    </MainContainer>
  )
}

export default Home
