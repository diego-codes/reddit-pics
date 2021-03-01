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
  images: RedditImage[]
  isLoading: boolean
}
const GalleryGrid: FC<GalleryGridProps> = ({ images = [], isLoading }) => {
  return (
    <Grid>
      {images.map((image, index) => (
        <Thumbnail
          key={image.id || index}
          src={image.thumbnail}
          url={image.permalink}
          isLoading={isLoading}
        >
          {image.title}
        </Thumbnail>
      ))}
    </Grid>
  )
}

export default GalleryGrid
