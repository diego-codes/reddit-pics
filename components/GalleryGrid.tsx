import { FC, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { debounce } from 'throttle-debounce'
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
  loadMore: () => void
}
const GalleryGrid: FC<GalleryGridProps> = ({ listings = [], loadMore }) => {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    const handleScroll = debounce(100, () => {
      if (
        grid &&
        grid.getBoundingClientRect().bottom - window.innerHeight < 1000
      ) {
        loadMore()
      }
    })

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [gridRef])
  return (
    <Grid ref={gridRef}>
      {listings.map(listing => (
        <Thumbnail key={listing.id} listing={listing} />
      ))}
    </Grid>
  )
}

export default GalleryGrid
