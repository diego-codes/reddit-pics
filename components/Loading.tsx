import { FC } from 'react'
import styled from 'styled-components'
import { getSingleResponsiveTypographyStyle, Size } from '../styles/typography'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em 0;
`
const Spinner = styled.div`
  animation: spin 1000ms infinite forwards;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ::before,
  ::after {
    content: '';
    display: inline-block;
    block-size: 1.5em;
    inline-size: 1.5em;
    border-radius: 100%;
    border: 2px solid ${props => props.theme.primary};
  }

  ::before {
    margin-inline-end: 0.2em;
  }

  ::after {
    margin-inline-start: 0.2em;
  }
`

const Message = styled.p`
  ${getSingleResponsiveTypographyStyle(Size.H1)}
  margin: 0;
  margin-inline-start: 1em;
`

const Loading: FC = ({ children }) => (
  <Container>
    <Spinner />
    <Message>{children}</Message>
  </Container>
)

export default Loading
