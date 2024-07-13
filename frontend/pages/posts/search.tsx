import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'
import MainContainer from '@/components/MainContainer'
import SearchPostForm from '@/components/SearchPostForm'
import useSearchPostForm from '@/hooks/use-search-post-form'
import * as postService from '@/services/post-service'
import { PostMatter } from '@/types/Post'

const H1 = styled.h1`
  margin-bottom: 1rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export async function getStaticProps() {
  return {
    props: {
      matters: await postService.getMatters(),
      slugs: await postService.getSlugs(),
    },
  }
}

const StyledSearchPostForm = styled(SearchPostForm)`
  width: 100%;
`

type Props = {
  matters: PostMatter[]
}

const Search = ({ matters }: Props) => {
  const router = useRouter()

  const q: string = (() => {
    if (typeof router.query.q === 'undefined') {
      return ''
    }

    if (Array.isArray(router.query.q)) {
      return router.query.q.join('')
    }

    return router.query.q
  })()

  const { searchText, setSearchText, onChangeSearchText, onSubmitSearchText } =
    useSearchPostForm()

  // 初回定義時には、qは空文字列になるため、setTextで更新する必要がある.
  // 更新による無限ループを避けるため、useEffectで囲う.
  useEffect(() => {
    setSearchText(q)
  }, [setSearchText, q])

  const searchedList = matters
    .filter(({ title }) => title.includes(searchText))
    .sort((a, b) => (a.date < b.date ? -1 : 1))
    .map(({ title, slug }) => (
      <li key={slug}>
        <Link href={'/posts/' + slug}>{title}</Link>
      </li>
    ))

  return (
    <MainContainer matters={matters}>
      <section>
        <H1>検索</H1>
        <Content>
          <StyledSearchPostForm
            value={searchText}
            onChange={onChangeSearchText}
            onSubmit={onSubmitSearchText}
          />
          <ul>{searchedList}</ul>
        </Content>
      </section>
    </MainContainer>
  )
}

export default Search
