import axios from 'axios'
import RedditImage from '../types/RedditImage'

type RedditListingChildren = {
  kind: string
  data: RedditImage
}

type RedditResponse = {
  kind: string
  data: {
    children: RedditListingChildren[]
  }
}

const processListing = ({ data }): RedditImage => ({
  ...data,
  permalink: data.permalink.replace(`r/${data.subreddit}/comments/`, ''),
})

const BASE_URL = 'http://www.reddit.com/r/pics'
const EXTENSION = '.json?jsonp='

export const fetchImages = () =>
  axios
    .get(`${BASE_URL}/${EXTENSION}`)
    .then(({ data }: { data: RedditResponse }) =>
      data.data.children.map(processListing),
    )

export const fetchImage = (username: string, post: string) =>
  axios
    .get(`${BASE_URL}/comments/${username}/${post}/${EXTENSION}`)
    .then(({ data }: { data: RedditResponse[] }) =>
      data[0].data.children.map(processListing),
    )
