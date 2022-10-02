import React from 'react'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  )
}

export default Layout
