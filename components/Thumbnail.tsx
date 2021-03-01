import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Skeleton from './Skeleton'
import RedditListing from '../types/RedditImage'
import Card from './Card'

const LinkContainer = styled.a`
  color: inherit;
  text-decoration: none;
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
  listing: RedditListing
  isLoading: boolean
}

const Thumbnail: FC<ThumbnailProps> = ({ listing, isLoading }) => {
  const content = (
    <Card>
      <Figure>
        <PictureContainer>
          {!isLoading ? (
            <Picture src={listing.thumbnail} alt={listing.title} />
          ) : (
            <Skeleton />
          )}
        </PictureContainer>
        {!isLoading ? (
          <Caption>{listing.title}</Caption>
        ) : (
          <Skeleton blockSize="1.2em" inlineSize="100%" />
        )}
      </Figure>
    </Card>
  )

  if (isLoading) {
    return content
  }

  return (
    <Link href={`/${listing.id}`} passHref>
      <LinkContainer>{content}</LinkContainer>
    </Link>
  )
}

export default Thumbnail
