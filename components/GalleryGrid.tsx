import { FC } from 'react'
import styled from 'styled-components'
import { Breakpoint, mediaQuery } from '../styles/responsive'
import { RedditListing } from '../types/RedditImage'
import Thumbnail from './Thumbnail'

const Grid = styled.div`
  display: grid;
  gap: 1em;
  margin-block-end: 2em;

  ${mediaQuery(Breakpoint.SM)} {
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    gap: 2em;
  }

  ${mediaQuery(Breakpoint.MD)} {
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    gap: 2.5em;
  }
`

type GalleryGridProps = {
  listings: RedditListing[]
}
const GalleryGrid: FC<GalleryGridProps> = ({ listings = [] }) => {
  return (
    <Grid>
      {listings.map(listing => (
        <Thumbnail key={listing.id} listing={listing} />
      ))}
    </Grid>
  )
}

export default GalleryGrid
