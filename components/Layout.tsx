import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Layout: FC = ({ children }) => {
  return (
    <Container>
      <header>Header</header>
      <main>{children}</main>
      <footer></footer>
    </Container>
  )
}
export default Layout
