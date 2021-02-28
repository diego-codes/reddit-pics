import { FC } from 'react'
import styled from 'styled-components'
import RedditImage from '../types/RedditImage'
import Thumbnail from './Thumbnail'

const Grid = styled.div``

type GalleryGridProps = {
  images: RedditImage[]
  isLoading: boolean
}
const GalleryGrid: FC<GalleryGridProps> = ({ images = [], isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Grid>
      {images.map(image => (
        <Thumbnail
          key={image.thumbnail}
          src={image.thumbnail}
          url={image.permalink}
        >
          {image.title}
        </Thumbnail>
      ))}
    </Grid>
  )
}

export default GalleryGrid
