import Link from 'next/link'
import styled from 'styled-components'
import { convertToPlain } from '@/utils/markdown-utils'
import Image from 'next/image'

const Li = styled.li`
  margin-bottom: 3rem;
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
  }
`

const Title = styled.span`
  margin-bottom: 7px;
  font-size: 1.5rem;
`

const Date = styled.small`
  font-size: 0.8rem;
  color: #888;
`

const ContentBeginning = styled.div``

type Props = {
  slug: string
  title: string
  date: string
  content: string
}

const ArticleListItem = ({ slug, title, date, content }: Props) => {
  const contentText = convertToPlain(content)

  return (
    <Li key={slug}>
      <StyledLink href={'/posts/' + slug}>
        <Title>{title}</Title>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '4px',
            alignItems: 'center',
            marginBottom: '4px',
          }}
        >
          <Image
            src="/images/time.svg"
            width="10"
            height="10"
            alt="time"
            aria-hidden
          />
          <Date>{date}</Date>
        </div>
        <ContentBeginning>{contentText + '...'}</ContentBeginning>
      </StyledLink>
    </Li>
  )
}

export default ArticleListItem
