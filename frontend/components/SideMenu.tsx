import Image from 'next/image'
import styled from 'styled-components'
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '@/styles/common'
import { PostMatter } from '@/types/Post'

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

const SearchText = styled.input`
  padding: 5px;
  border: 1px solid #444;
  border-radius: 5px;
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

const SideMenu = ({ matters }: Props) => {
  const articles = matters
    // sortでは元配列を変更してしまうため、concatで事前にcloneする.
    .concat()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ slug, title }) => (
      <li key={slug}>
        <a href={'/posts/' + slug}>{title}</a>
      </li>
    ))

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
        <p>This is a side menu.</p>
      </Section>
      <Section>
        <H2>Search</H2>
        <SearchText type="search" />
      </Section>
      <Section>
        <H2>Latest</H2>
        <LatestLinkList>{articles}</LatestLinkList>
      </Section>
    </Aside>
  )
}

export default SideMenu
