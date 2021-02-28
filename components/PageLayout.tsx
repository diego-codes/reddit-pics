import { FC } from 'react'
import styled from 'styled-components'
import Header from './Header'

const Container = styled.div``

const PageLayout: FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </Container>
  )
}
export default PageLayout
