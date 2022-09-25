import Link from 'next/link'
import * as postService from '@/services/post-service'

export async function getStaticProps() {
  return {
    props: {
      slugs: postService.getSlugs(),
    },
  }
}

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
    <section>
      <h1>記事一覧</h1>
      {links}
    </section>
  )
}

export default Index
