import Head from 'next/head'
import Layout from '../components/Layout'

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>Home</Layout>
    </>
  )
}
