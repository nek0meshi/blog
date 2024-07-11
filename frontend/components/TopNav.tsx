import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-size: 1.8em;
  text-decoration: none;
`

type Props = {
  text: string
  href: string
}

const TopNav = ({ text, href }: Props) => {
  return <StyledLink href={href}>{text}</StyledLink>
}

export default TopNav
