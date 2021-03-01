import { FC } from 'react'

type GalleryTitleProps = {
  search?: string
}
const GalleryTitle: FC<GalleryTitleProps> = ({ search }) => {
  const title = `${search ? `${search} ` : ''}images from r/pics`
  return <h1>{`${title[0].toUpperCase()}${title.substr(1)}`}</h1>
}

export default GalleryTitle
