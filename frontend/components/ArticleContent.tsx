import dayjs from '@/lib/dayjs'

type Props = {
  content: string
  date: dayjs.Dayjs
  title: string
}

const ArticleContent = ({ content, title, date }: Props) => {
  return (
    <article>
      <small>{date.format('YYYY-MM-DD')}</small>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

export default ArticleContent
