import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Article from '../components/Article/Article'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet" />
      </Head>
        <ul>
          <li>
            <Article />
          </li>
        </ul>
    </Layout>
  )
}
