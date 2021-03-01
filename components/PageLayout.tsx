import Head from 'next/head'
import { FC } from 'react'
import styled from 'styled-components'
import Header from './Header'

const Container = styled.div``

const PageLayout: FC = ({ children }) => {
  return (
    <Container>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </Container>
  )
}
export default PageLayout
