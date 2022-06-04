import Layout, { siteName } from '../components/layout'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Layout home>
        <Head>
          <title>{siteName}</title>
        </Head>

      </Layout>
    </div>
  )
}
