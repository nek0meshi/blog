import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  font-size: 1.8em;
  text-decoration: none;
`

type Props = {
  href: string
}

const TopNav = ({ href }: Props) => {
  return <A href={href}>Blog</A>
}

export default TopNav
