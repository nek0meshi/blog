import Image from 'next/image'
import styled from 'styled-components'
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '@/styles/common'
import { PostMatter } from '@/types/Post'
import SearchPostForm from './SearchPostForm'
import useSearchPostForm from '@/hooks/use-search-post-form'
import Link from 'next/link'

const imageSize = 100

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  flex-shrink: 0;
  width: 240px;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    width: 180px;
  }

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
  }

  * {
    margin: 0;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const H2 = styled.h2`
  margin-top: 0;
`

const StyleImage = styled(Image)`
  border-radius: 50%;
`

const Pre = styled.pre`
  white-space: pre-wrap;
`

const LatestLinkList = styled.ul`
  padding-inline-start: 0;
  font-size: 1.2rem;
  list-style-type: none;

  li {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
  }
`

type Props = {
  matters: PostMatter[]
}

const profileText = `
Webエンジニアのyushiです。
関西の企業で自社サービスを開発しています。
Backend・Frontendが主な専門範囲です。
`

const SideMenu = ({ matters }: Props) => {
  const links = [
    {
      text: 'プロフィールページ',
      href: 'https://nek0meshi.github.io/profile',
    },
  ].map((link) => (
    <Link href={link.href} key={link.text}>
      {link.text}
    </Link>
  ))
  const articles = matters
    // sortでは元配列を変更してしまうため、concatで事前にcloneする.
    .concat()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ slug, title }) => (
      <li key={slug}>
        <a href={'/posts/' + slug}>{title}</a>
      </li>
    ))

  const { searchText, onChangeSearchText, onSubmitSearchText } =
    useSearchPostForm()

  return (
    <Aside>
      <Section>
        <H2>Profile</H2>
        <StyleImage
          layout="fixed"
          src="/profile.png"
          alt="profile image"
          width={imageSize}
          height={imageSize}
        />
        <div>
          <Pre>{profileText}</Pre>
          {links}
        </div>
      </Section>
      <Section>
        <H2>Search</H2>
        <SearchPostForm
          value={searchText}
          onChange={onChangeSearchText}
          onSubmit={onSubmitSearchText}
        />
      </Section>
      <Section>
        <H2>Latest</H2>
        <LatestLinkList>{articles}</LatestLinkList>
      </Section>
    </Aside>
  )
}

export default SideMenu
