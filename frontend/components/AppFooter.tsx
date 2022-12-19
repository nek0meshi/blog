import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`

type Props = {
  text: string
}

const AppFooter = ({ text }: Props) => {
  return <Footer>{text}</Footer>
}

export default AppFooter
