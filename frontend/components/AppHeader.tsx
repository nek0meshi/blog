import styled from 'styled-components'
import TopNav from '@/components/TopNav'
import * as commonCss from '@/styles/common'

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 ${commonCss.VERTICAL_PADDING};
`

const AppHeader = () => {
  return (
    <Header>
      <TopNav href="/" />
    </Header>
  )
}

export default AppHeader
