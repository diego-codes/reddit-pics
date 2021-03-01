import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Skeleton from './Skeleton'

const Container = styled.a`
  color: inherit;
  text-decoration: none;
  border: 1px solid ${props => props.theme.bg03};
  background-color: ${props => props.theme.bg01};
  border-radius: 3px;
`

const Figure = styled.figure`
  margin: 0;
`

const PictureContainer = styled.div`
  block-size: 16rem;
  inline-size: 100%;
  position: relative;
  background-color: ${props => props.theme.bg02};

  > * {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    block-size: 100%;
    inline-size: 100%;
  }
`
const Picture = styled.img`
  object-fit: cover;
  block-size: 100%;
  inline-size: 100%;
  image-rendering: crisp-edges;
`

const Caption = styled.figcaption`
  white-space: nowrap;
  overflow: hidden;
  max-inline-size: auto;
  text-overflow: ellipsis;
  padding: 0.6em;
`
type ThumbnailProps = {
  children: string
  src: string
  url: string
  isLoading: boolean
}

const Thumbnail: FC<ThumbnailProps> = ({ children, src, url, isLoading }) => {
  const content = (
    <Container>
      <Figure>
        <PictureContainer>
          {!isLoading ? <Picture src={src} alt={children} /> : <Skeleton />}
        </PictureContainer>
        {!isLoading ? (
          <Caption>{children}</Caption>
        ) : (
          <Skeleton blockSize="1.2em" inlineSize="100%" />
        )}
      </Figure>
    </Container>
  )

  if (isLoading) {
    return content
  }

  return (
    <Link href={url} passHref>
      {content}
    </Link>
  )
}

export default Thumbnail
