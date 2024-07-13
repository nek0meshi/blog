import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { PostMatter } from '@/types/Post'
import SearchPostForm from './SearchPostForm'
import useSearchPostForm from '@/hooks/use-search-post-form'
import { url } from '@/utils/config-utils'

const imageSize = 100

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 50px;

  * {
    margin: 0;
  }
`

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  text-align: center;
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
  width: 100%;
  padding-inline-start: 0;
  font-size: 1.2rem;
  list-style-type: none;
  overflow: hidden;

  li {
    width: 100%;
  }

  a {
    display: inline-block;
    width: 100%;
    height: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-decoration: none;
    text-overflow: ellipsis;
  }
`

const profileText = `
Webエンジニアのyushiです。
関西の企業で自社サービスを開発しています。
Backend・Frontendが主な専門範囲です。
`

type Props = {
  className?: string
  matters: PostMatter[]
}

const SideMenu = ({ className, matters }: Props) => {
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
    <Aside className={className}>
      <Section>
        <H2>Profile</H2>
        <StyleImage
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
