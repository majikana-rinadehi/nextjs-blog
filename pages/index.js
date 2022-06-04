import Layout, { siteName } from '../components/layout'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Layout home>
        <Head>
          <title>{siteName}</title>
        </Head>
        <section>
          <p className='mt-8'>Pui pui.</p>
        </section>

      </Layout>
    </div>
  )
}
