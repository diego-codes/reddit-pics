import Head from 'next/head'
import { useQuery } from 'react-query'
import GalleryGrid from '../components/GalleryGrid'
import LayoutContainer from '../components/LayoutContainer'
import PageLayout from '../components/PageLayout'
import { fetchImages } from '../services/reddit'
import RedditListing from '../types/RedditImage'

export default function Index() {
  const { data, isLoading } = useQuery<RedditListing[]>('images', fetchImages)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <LayoutContainer>
          <GalleryGrid listings={data} isLoading={isLoading}></GalleryGrid>
        </LayoutContainer>
      </PageLayout>
    </>
  )
}
