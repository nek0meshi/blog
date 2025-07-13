import styled from 'styled-components'
import TopNav from '@/components/TopNav'

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 12px;
`

type Props = {
  text: string
}

const AppHeader = ({ text }: Props) => {
  return (
    <Header>
      <TopNav text={text} href="/" />
    </Header>
  )
}

export default AppHeader
