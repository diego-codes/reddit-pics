import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { fetchImage } from '../../services/reddit'
import GalleryGrid from '../../components/GalleryGrid'
import PageLayout from '../../components/PageLayout'

import RedditImage from '../../types/RedditImage'

type RouterQueryType = {
  username: string
  post: string
}

export default function Post() {
  const router = useRouter()
  const { username, post } = router.query as RouterQueryType

  const { data, isLoading } = useQuery<RedditImage[]>(
    ['image', { username, post }],
    () => username && post && fetchImage(username, post),
  )

  return (
    <>
      <Head>
        <title>Reddit Pics - {username}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <GalleryGrid images={data} isLoading={isLoading}></GalleryGrid>
      </PageLayout>
    </>
  )
}
