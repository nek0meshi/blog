import React from 'react'
import styled from 'styled-components'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import {
  VERTICAL_PADDING,
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
} from '@/styles/common'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  gap: 50px;
  width: ${TABLET_MAX_WIDTH};
  padding: 0 ${VERTICAL_PADDING};
  margin: 2rem auto 0;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    width: ${MOBILE_MAX_WIDTH};
  }
  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    flex-direction: column;
    gap: 100px;
    width: 100%;
  }
`

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <AppHeader text="Yushi's Tech Blog" />
      {children}
      <AppFooter text="©︎ 2022 YUSHI WATANABE" />
    </>
  )
}

export default Layout
