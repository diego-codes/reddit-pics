import { FC } from 'react'
import styled from 'styled-components'

const BackgroundContainer = styled.div`
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  inline-size: 100%;
`
const Container = styled.div<{ fullBleed: boolean }>`
  max-inline-size: ${props => (props.fullBleed ? 'none' : '65rem')};
  inline-size: 100%;
`

type LayoutContainerProps = {
  fullBleed?: boolean
}
const LayoutContainer: FC<LayoutContainerProps> = ({ children, fullBleed }) => {
  return (
    <BackgroundContainer>
      <Container fullBleed={fullBleed}>{children}</Container>
    </BackgroundContainer>
  )
}
export default LayoutContainer
