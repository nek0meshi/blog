import React from 'react'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <AppHeader text="Yushi's Tech Blog" />
      {children}
      <AppFooter text="©︎ 2022-2024 YUSHI WATANABE" />
    </>
  )
}

export default Layout
