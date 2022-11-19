import styled from 'styled-components'
import SideMenu from '@/components/SideMenu'
import { VERTICAL_PADDING, Container } from '@/styles/common'
import { PostMatter } from '@/types/Post'

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  gap: 50px;
  padding: 0 ${VERTICAL_PADDING};
`

type Props = {
  matters: PostMatter[]
  children: React.ReactNode
}

const MainContainer = ({ children, matters }: Props) => {
  return (
    <StyledContainer>
      <main>{children}</main>
      <SideMenu matters={matters} />
    </StyledContainer>
  )
}

export default MainContainer
