import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { fetchImage } from '../services/reddit'
import PageLayout from '../components/PageLayout'

import { RedditComment, RedditListing } from '../types/RedditImage'
import ImageDetails from '../components/ImageDetails'
import LayoutContainer from '../components/LayoutContainer'
import Loading from '../components/Loading'

export default function Post() {
  const {
    query: { id },
  } = useRouter()

  const { data } = useQuery<{
    listing: RedditListing
    comments: RedditComment[]
  }>(['images', { id }], () => fetchImage(id as string), { enabled: !!id })

  return (
    <>
      <Head>
        <title>Reddit Pics{data ? ` - ${data?.listing.title}` : ''}</title>
      </Head>

      <PageLayout>
        <LayoutContainer>
          {data ? (
            <ImageDetails listing={data.listing} comments={data.comments} />
          ) : (
            <Loading>Loading image</Loading>
          )}
        </LayoutContainer>
      </PageLayout>
    </>
  )
}
