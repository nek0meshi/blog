import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  font-size: 1.8em;
  text-decoration: none;
`

type Props = {
  text: string
  href: string
}

const TopNav = ({ text, href }: Props) => {
  return (
    <Link href={href} passHref>
      <A>{text}</A>
    </Link>
  )
}

export default TopNav
