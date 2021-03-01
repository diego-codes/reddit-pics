import { FC } from 'react'
import styled from 'styled-components'

const BackgroundContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  inline-size: 100%;
`
const Container = styled.div<{ fullBleed: boolean }>`
  inline-size: ${props => (!props.fullBleed ? '70rem' : '100%')};
  max-inline-size: 65rem;
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
