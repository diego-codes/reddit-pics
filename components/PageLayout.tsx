import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Search from './Search'

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
  const {
    push,
    query: { s },
  } = useRouter()

  const handleSubmit = (value: string) => {
    push(`/?s=${value}`)
  }

  return (
    <Container>
      <HeaderWrapper>
        <Header>
          <Search
            key={s as string}
            initialValue={s as string}
            onSubmit={handleSubmit}
          />
        </Header>
      </HeaderWrapper>
      <main>{children}</main>
      <footer>Footer</footer>
    </Container>
  )
}
export default PageLayout
