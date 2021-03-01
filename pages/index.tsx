import Head from 'next/head'
import { useQuery } from 'react-query'
import GalleryGrid from '../components/GalleryGrid'
import LayoutContainer from '../components/LayoutContainer'
import PageLayout from '../components/PageLayout'
import { fetchImages } from '../services/reddit'
import RedditImage from '../types/RedditImage'

export default function Index() {
  const { data, isLoading } = useQuery<RedditImage[]>('images', fetchImages)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <LayoutContainer>
          <GalleryGrid images={data} isLoading={isLoading}></GalleryGrid>
        </LayoutContainer>
      </PageLayout>
    </>
  )
}
