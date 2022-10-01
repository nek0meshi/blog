import styled from 'styled-components'
import dayjs from '@/lib/dayjs'

const Article = styled.article`
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.2em;
  }
`

type Props = {
  content: string
  date: dayjs.Dayjs
  title: string
}

const ArticleContent = ({ content, title, date }: Props) => {
  return (
    <Article>
      <small>{date.format('YYYY-MM-DD')}</small>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Article>
  )
}

export default ArticleContent
