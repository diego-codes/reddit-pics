import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { RedditListing } from '../types/RedditImage'
import Card from './Card'
import { Breakpoint, mediaQuery } from '../styles/responsive'

const LinkContainer = styled.a`
  color: inherit;
  text-decoration: none;
`

const Picture = styled.div<{ imageUrl: string }>`
  background: ${props => props.theme.bg03} url('${props => props.imageUrl}')
    no-repeat center;
  background-size: cover;
  padding-block-end: 60%;

  ${mediaQuery(Breakpoint.SM)} {
    padding-block-end: 80%;
  }
`

const Caption = styled.span`
  display: block;
  overflow: hidden;
  max-inline-size: 100%;
  text-overflow: ellipsis;
  padding: 0.6em 0.8em;

  ${mediaQuery(Breakpoint.SM)} {
    white-space: nowrap;
  }
`
type ThumbnailProps = {
  listing: RedditListing
}

const Thumbnail: FC<ThumbnailProps> = ({ listing }) => (
  <Link href={`/${listing.id}`} passHref>
    <LinkContainer>
      <Card title={listing.title}>
        <Picture imageUrl={listing.thumbnail} />
        <Caption>{listing.title}</Caption>
      </Card>
    </LinkContainer>
  </Link>
)

export default Thumbnail
