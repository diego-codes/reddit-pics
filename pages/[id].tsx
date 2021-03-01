import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { fetchImage } from '../services/reddit'
import PageLayout from '../components/PageLayout'

import RedditListing from '../types/RedditImage'
import ImageDetails from '../components/ImageDetails'
import LayoutContainer from '../components/LayoutContainer'

export default function Post() {
  const {
    query: { id },
  } = useRouter()

  const { data, isSuccess } = useQuery<RedditListing>(
    ['images', { id }],
    () => fetchImage(id as string),
    { enabled: !!id },
  )

  return (
    <>
      <Head>
        <title>Reddit Pics{isSuccess ? ` - ${data.title}` : ''}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <LayoutContainer>
          {isSuccess && <ImageDetails listing={data}></ImageDetails>}
        </LayoutContainer>
      </PageLayout>
    </>
  )
}
