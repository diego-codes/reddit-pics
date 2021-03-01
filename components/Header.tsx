import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'
import LayoutContainer from './LayoutContainer'

const Container = styled.div`
  inset-block-start: 0;
  inset-inline-start: 0;
  inline-size: 100%;
  z-index: 2;
  background-color: ${props => props.theme.bg01};
  border-block-end: 1px solid ${props => props.theme.border01};
  padding-block-start: 0.5em;
  padding-block-end: 0.5em;
  position: sticky;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const Title = styled.h1`
  font-size: 1.2em;
  font-weight: 400;
  flex: 1 1 auto;
  margin: 0;
`

const TitleLink = styled.a`
  text-decoration: none;
`

const Header: FC = ({ children }) => {
  return (
    <Container>
      <LayoutContainer>
        <Content>
          <Title>
            <Link href="/" passHref>
              <TitleLink>Reddit Pics</TitleLink>
            </Link>
          </Title>
          {children && <div>{children}</div>}
        </Content>
      </LayoutContainer>
    </Container>
  )
}

export default Header
