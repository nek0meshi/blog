import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '@/styles/common'
import { PostMatter } from '@/types/Post'
import SearchPostForm from './SearchPostForm'
import useSearchPostForm from '@/hooks/use-search-post-form'
import { url } from '@/utils/config-utils'

const imageSize = 100

const Aside = styled.aside`
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

const ProfileText = styled.div`
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

const profileText = `
Webエンジニアのyushiです。
関西の企業で自社サービスを開発しています。
Backend・Frontendが主な専門範囲です。
`

type Props = {
  matters: PostMatter[]
}

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
    .slice(0, 5)
    .map(({ slug, title }) => (
      <li key={slug}>
        <Link href={'/posts/' + slug}>{title}</Link>
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
          src={url('/profile.png')}
          alt="profile image"
          width={imageSize}
          height={imageSize}
        />
        <ProfileText>
          {profileText}
          {links}
        </ProfileText>
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
