import styled from 'styled-components'
import dayjs from '@/lib/dayjs'

const Div = styled.div`
  h1 {
    margin: 1.4rem 0 1rem;
  }

  h2 {
    margin: 1.2rem 0 0.8rem;
  }

  h3 {
    margin: 1rem 0 0.7rem;
  }
`

const H1 = styled.h1`
  margin-top: 0.5rem;
`

type Props = {
  content: string
  date: dayjs.Dayjs
  title: string
}

const ArticleContent = ({ content, title, date }: Props) => {
  return (
    <article>
      <small>{date.format('YYYY-MM-DD')}</small>
      <H1>{title}</H1>
      <Div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

export default ArticleContent
