import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.a`
  color: inherit;
  text-decoration: none;
`

type ThumbnailProps = {
  src: string
  url: string
  children: string
}

const Thumbnail: FC<ThumbnailProps> = ({ src, url, children }) => {
  return (
    <Link href={url} passHref>
      <Container>
        <figure>
          <img src={src} alt={children} />
          <figcaption>{children}</figcaption>
        </figure>
      </Container>
    </Link>
  )
}

export default Thumbnail
