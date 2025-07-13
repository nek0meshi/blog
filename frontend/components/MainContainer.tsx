import styled from 'styled-components'
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '@/styles/common'
import SideMenu from '@/components/SideMenu'
import { Container } from '@/styles/common'
import { PostMatter } from '@/types/Post'

const GAP = '50px'
const SIDE_MENU_FULL_SCREEN_WIDTH = '240px'
const SIDE_MENU_TABLET_WIDTH = '180px'

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  gap: ${GAP};
`

const StyledMain = styled.main`
  width: calc(100% - ${GAP} - ${SIDE_MENU_FULL_SCREEN_WIDTH});

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    width: calc(100% - ${GAP} - ${SIDE_MENU_TABLET_WIDTH});
  }

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
  }
`

const StyledSideMenu = styled(SideMenu)`
  width: 240px;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    width: ${SIDE_MENU_TABLET_WIDTH};
  }

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
  }
`

type Props = {
  matters: PostMatter[]
  children: React.ReactNode
}

const MainContainer = ({ children, matters }: Props) => {
  return (
    <StyledContainer>
      <StyledMain>{children}</StyledMain>
      <StyledSideMenu matters={matters} />
    </StyledContainer>
  )
}

export default MainContainer
