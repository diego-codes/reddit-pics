import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useInfiniteQuery } from 'react-query'
import GalleryGrid from '../components/GalleryGrid'
import GalleryTitle from '../components/GalleryTitle'
import LayoutContainer from '../components/LayoutContainer'
import Loading from '../components/Loading'
import PageLayout from '../components/PageLayout'
import { fetchImages } from '../services/reddit'
import { RedditListing } from '../types/RedditImage'

export default function Index() {
  const {
    query: { s },
  } = useRouter()

  const search = s as string

  const { data, fetchNextPage, isLoading, hasNextPage } = useInfiniteQuery<{
    listings: RedditListing[]
    after?: string
  }>(['images', search], ({ pageParam }) => fetchImages(search, pageParam), {
    getNextPageParam: ({ after }) => after,
  })

  return (
    <>
      <Head>
        <title>Reddit Pics</title>
      </Head>

      <PageLayout>
        <LayoutContainer>
          <GalleryTitle search={search} />
          <GalleryGrid
            listings={data?.pages.map(page => page.listings).flat()}
            loadMore={fetchNextPage}
          ></GalleryGrid>
          {(isLoading || hasNextPage) && <Loading>Loading images</Loading>}
        </LayoutContainer>
      </PageLayout>
    </>
  )
}
