import { render, screen } from '@testing-library/react'
import GalleryTitle from '../GalleryTitle'

it('renders default title', () => {
  render(<GalleryTitle />)
  expect(screen.getByRole('heading')).toHaveTextContent('Images from r/pics')
})

it('renders search title', () => {
  render(<GalleryTitle search="pizza" />)
  expect(screen.getByRole('heading')).toHaveTextContent(
    'Pizza images from r/pics',
  )
})
