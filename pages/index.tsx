import Layout, { siteName } from '../components/layout'
import Head from 'next/head'
import getSortedPostsData from '../utils/posts'
import { NextPage, GetStaticProps } from 'next'
import { PostsData } from '../types/data'
import utilStyles from '../styles/utils.module.css'

type Props = {
  sortedPostsData: PostsData[]
}

// ↓ this doesn't work
// const getStaticProps:GetStaticProps<Props> =
// `getStaticProps` must be exported separately from page

export const getStaticProps:GetStaticProps<Props> = async () => {
  const sortedPostsData = getSortedPostsData()
  return {
    props:{
      sortedPostsData
    }
  }
}

// this doesn't work
// export const Home: ...
// Component must be `default export`

const Home: NextPage<Props> = ({sortedPostsData}) => {
  return (
    <div className="container">
      <Layout home>
        <Head>
          <title>{siteName}</title>
        </Head>
        <section>
          <p className='mt-8'>Pui pui.</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {sortedPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

      </Layout>
    </div>
  )
}

export default Home
