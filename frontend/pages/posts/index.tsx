import Link from 'next/link'
import styled from 'styled-components'
import MainContainer from '@/components/MainContainer'
import * as postService from '@/services/post-service'

export async function getStaticProps() {
  return {
    props: {
      slugs: postService.getSlugs(),
    },
  }
}

const H1 = styled.h1`
  margin-bottom: 1rem;
`

type Props = {
  slugs: string[]
}

const Index = ({ slugs }: Props) => {
  const links = (
    <ul>
      {slugs.map((slug) => (
        <li key={slug}>
          <Link href={'/posts/' + slug}>{slug}</Link>
        </li>
      ))}
    </ul>
  )
  return (
    <MainContainer>
      <section>
        <H1>記事一覧</H1>
        {links}
      </section>
    </MainContainer>
  )
}

export default Index
