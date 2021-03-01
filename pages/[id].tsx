import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { fetchImage } from '../services/reddit'
import PageLayout from '../components/PageLayout'

import RedditListing from '../types/RedditImage'
import ImageDetails from '../components/ImageDetails'
import LayoutContainer from '../components/LayoutContainer'

export default function Post() {
  const router = useRouter()
  const { id } = router.query

  const { data, isLoading } = useQuery<RedditListing>(['image', { id }], () =>
    fetchImage(id as string),
  )

  return (
    <>
      <Head>
        <title>Reddit Pics{!isLoading ? ` - ${data.title}` : ''}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <LayoutContainer>
          {!isLoading && <ImageDetails listing={data}></ImageDetails>}
        </LayoutContainer>
      </PageLayout>
    </>
  )
}
