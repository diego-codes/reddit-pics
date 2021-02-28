import { FC } from 'react'
import styled from 'styled-components'

const BackgroundContainer = styled.div<{
  padding: string
  backgroundColor: string
}>`
  padding: ${props => props.padding};
  display: flex;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  inline-size: 100%;
`
const Container = styled.div<{ narrow: boolean }>`
  inline-size: ${props => (props.narrow ? '38rem' : '100%')};
  max-inline-size: 65rem;
`

type LayoutContainerProps = {
  backgroundColor?: string
  padding?: string
  narrow?: boolean
}
const LayoutContainer: FC<LayoutContainerProps> = ({
  children,
  backgroundColor = 'inherit',
  padding = '1.5rem',
  narrow,
}) => {
  return (
    <BackgroundContainer backgroundColor={backgroundColor} padding={padding}>
      <Container narrow={narrow}>{children}</Container>
    </BackgroundContainer>
  )
}
export default LayoutContainer
