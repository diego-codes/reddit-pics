import styled from 'styled-components'
import { getResponseTypeStyle, Size } from '../styles/typography'
import LayoutContainer from './LayoutContainer'
import StyledLink from './StyledLink'

const Container = styled.footer`
  ${getResponseTypeStyle(Size.Small)}
  padding-block-start: 1em;
  padding-block-end: 1em;
  background-color: ${props => props.theme.bg03};
  color: ${props => props.theme.text02};
`
const Footer = () => (
  <Container>
    <LayoutContainer>
      Handcrafted by{' '}
      <StyledLink href="https://diegohernandez.dev">Diego Hernandez</StyledLink>{' '}
      for Assembly
    </LayoutContainer>
  </Container>
)

export default Footer
