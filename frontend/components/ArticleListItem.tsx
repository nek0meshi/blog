import styled from 'styled-components'
import { convertToPlain } from '@/utils/markdown-utils'

const Li = styled.li`
  margin-bottom: 3rem;
`

const StyledArticleLink = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

const Title = styled.span`
  margin-bottom: 7px;
  font-size: 1.5rem;
`

const Date = styled.small`
  margin-bottom: 2px;
  font-size: 0.6rem;
  color: #777;
`

const ContentBeginning = styled.div`
  position: relative;
  max-height: 9.3rem;
  overflow: hidden;

  /** 下部のblur */
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.9)
    );
  }
`

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
      <StyledArticleLink href={'/posts/' + slug}>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <ContentBeginning>{contentText}</ContentBeginning>
      </StyledArticleLink>
    </Li>
  )
}

export default ArticleListItem
