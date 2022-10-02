import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import MainContainer from '@/components/MainContainer'

const H1 = styled.h1`
  margin-bottom: 1rem;
`

const Home: NextPage = () => {
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
    <MainContainer>
      <section>
        <H1>ブログ</H1>
        {links}
      </section>
    </MainContainer>
  )
}

export default Home
