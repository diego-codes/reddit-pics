import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.a`
  color: ${props => props.theme.text02};
  text-decoration: none;

  :focus,
  :hover {
    text-decoration: underline;
  }
`
const Author: FC<{ children: string }> = ({ children }) => {
  return (
    <Link href={`https://reddit.com/u/${children}`} passHref>
      <Container>u/{children}</Container>
    </Link>
  )
}
export default Author
