import axios from 'axios'
import RedditListing from '../types/RedditImage'

type RedditListingChildren = {
  kind: string
  data: RedditListing
}

type RedditResponse = {
  kind: string
  data: {
    children: RedditListingChildren[]
  }
}

const filterNoThumbnailListings = ({
  data,
}: {
  data: RedditListing
}): boolean => data.thumbnail !== 'self' && data.thumbnail !== 'nsfw'

const BASE_URL = 'http://www.reddit.com/r/pics'
const EXTENSION = '.json?jsonp='

export const fetchImages = () =>
  axios
    .get(`${BASE_URL}/${EXTENSION}`)
    .then(({ data }: { data: RedditResponse }) =>
      data.data.children
        .filter(filterNoThumbnailListings)
        .map(({ data }) => data),
    )

export const fetchImage = (id: string) =>
  axios
    .get(`${BASE_URL}/comments/${id}/${EXTENSION}`)
    .then(
      ({ data }: { data: RedditResponse[] }) =>
        data[0].data.children.map(({ data }) => data)[0],
    )
