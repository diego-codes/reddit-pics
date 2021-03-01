import { useRouter } from 'next/dist/client/router'
import { FC } from 'react'
import styled from 'styled-components'

import Footer from './Footer'
import Header from './Header'
import Search from './Search'

const Container = styled.div`
  min-block-size: 100vh;
  max-inline-size: 100%;
  display: grid;
  row-gap: 2em;
  grid-template-rows: min-content auto min-content;
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
      <Header>
        <Search
          key={s as string}
          initialValue={s as string}
          onSubmit={handleSubmit}
        />
      </Header>
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
export default PageLayout
