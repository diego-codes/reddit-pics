import axios from 'axios'
import { RedditComment, RedditListing } from '../types/RedditImage'

type RedditListingChildren<T> = {
  kind: string
  data: T
}

type RedditResponse<T = RedditListing | RedditComment> = {
  kind: string
  data: {
    children: RedditListingChildren<T>[]
  }
}

const filterNoThumbnailListings = ({
  data,
}: RedditListingChildren<RedditListing>): boolean =>
  data.thumbnail !== 'self' && data.thumbnail !== 'nsfw'

const BASE_URL = 'https://www.reddit.com/r/pics'
const EXTENSION = '.json'

export const fetchImages = (search?: string) =>
  axios
    .get(
      `${BASE_URL}/${
        search ? `search/${EXTENSION}?q=${search}&restrict_sr=1` : EXTENSION
      }`,
    )
    .then(({ data }: { data: RedditResponse<RedditListing> }) =>
      data.data.children
        .filter(filterNoThumbnailListings)
        .map(({ data }) => data),
    )

export const fetchImage = (id: string) =>
  axios
    .get(`${BASE_URL}/comments/${id}/${EXTENSION}`)
    .then(({ data }: { data: RedditResponse[] }) => ({
      listing: data[0].data.children[0].data as RedditListing,
      comments: data[1].data.children.map(
        ({ data }) => data,
      ) as RedditComment[],
    }))
