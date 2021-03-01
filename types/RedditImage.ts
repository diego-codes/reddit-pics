type RedditImage = {
  height: number
  width: number
}

export type RedditObject = {
  id: string
  author: string
  score: number
  permalink: string
  created: number
}

export type RedditListing = RedditObject & {
  url: string
  thumbnail: string
  title: string
  subreddit: string
  preview?: {
    images: {
      source: RedditImage
      resolutions: RedditImage[]
    }[]
  }
}

export type RedditComment = RedditObject & {
  body: string
}
