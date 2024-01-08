import styled from 'styled-components'
import dayjs from '@/lib/dayjs'
import styles from '../styles/article-content.module.scss'

const Div = styled.div`
  * {
    word-wrap: break-word;
  }

  h1 {
    margin: 1.4rem 0 1rem;
  }

  h2 {
    margin: 3rem 0 0.8rem;

    &:first-child {
      margin-top: 0.5rem;
    }

    + h3 {
      margin-top: 1rem;
    }
  }

  h3 {
    margin: 2.5rem 0 0.7rem;

    + h4 {
      margin-top: 0.7rem;
    }
  }

  h4 {
    margin: 2rem 0 0.5rem;
  }

  a,
  img,
  pre {
    margin: 1rem 0;
  }

  img {
    max-width: 100%;
  }

  pre {
    overflow: scroll;
  }
`

const H1 = styled.h1`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
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
      <Div
        className={styles.ArticleContent}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}

export default ArticleContent
