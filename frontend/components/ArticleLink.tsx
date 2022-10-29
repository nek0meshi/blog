import styled from 'styled-components'
import React from 'react'

const A = styled.a`
  text-decoration: none;
`

type Props = {
  children: React.ReactNode
  className?: string
  slug: string
}

const ArticleLink = ({ children, className, slug }: Props) => {
  return (
    <A className={className} href={'/posts/' + slug}>
      {children}
    </A>
  )
}

export default ArticleLink
