import Head from 'next/head'
import { FC } from 'react'
import styled from 'styled-components'
import Header from './Header'

const Container = styled.div``

const HeaderWrapper = styled.div`
  position: sticky;
  inset-block-start: 0;
  inset-inline-start: 0;
  inline-size: 100%;
  margin-block-end: 2em;
  z-index: 2;
`

const PageLayout: FC = ({ children }) => {
  return (
    <Container>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <main>{children}</main>
      <footer>Footer</footer>
    </Container>
  )
}
export default PageLayout
