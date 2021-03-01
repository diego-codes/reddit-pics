import { FC } from 'react'
import styled from 'styled-components'
import RedditImage from '../types/RedditImage'
import Thumbnail from './Thumbnail'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  grid-auto-rows: 1fr;
  gap: 2.5em;
  margin-block-end: 2em;
`

type GalleryGridProps = {
  listings: RedditImage[]
  isLoading: boolean
}
const GalleryGrid: FC<GalleryGridProps> = ({ listings = [], isLoading }) => {
  return (
    <Grid>
      {listings.map(listing => (
        <Thumbnail key={listing.id} listing={listing} isLoading={isLoading} />
      ))}
    </Grid>
  )
}

export default GalleryGrid
