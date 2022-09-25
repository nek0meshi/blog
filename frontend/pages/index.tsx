import type { NextPage } from 'next'
import Link from 'next/link'

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
    <section>
      <h1>ブログ</h1>
      {links}
    </section>
  )
}

export default Home
