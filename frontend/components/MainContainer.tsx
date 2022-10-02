import styled from 'styled-components'
import SideMenu from '@/components/SideMenu'
import {
  VERTICAL_PADDING,
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
} from '@/styles/common'
import { PostMatter } from '@/types/Post'

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
  matters: PostMatter[]
  children: React.ReactNode
}

const MainContainer = ({ children, matters }: Props) => {
  return (
    <Container>
      <main>{children}</main>
      <SideMenu matters={matters} />
    </Container>
  )
}

export default MainContainer
