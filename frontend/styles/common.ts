import styled from 'styled-components'

export const MOBILE_MAX_WIDTH = '768px'
export const TABLET_MAX_WIDTH = '1024px'

export const Container = styled.div`
  width: ${TABLET_MAX_WIDTH};
  margin: 2rem auto 0;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    width: ${MOBILE_MAX_WIDTH};
  }

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    flex-direction: column;
    gap: 100px;
    width: 100%;
    padding: 0 12px;
  }
`
