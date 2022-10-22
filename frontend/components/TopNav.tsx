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
  return <A href={href}>{text}</A>
}

export default TopNav
