import Layout, { siteName } from '../components/layout'
import Date from '../components/date'
import Head from 'next/head'
import getSortedPostsData from '../utils/posts'
import { NextPage, GetStaticProps } from 'next'
import { PostsData } from '../types/data'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

type Props = {
    sortedPostsData: PostsData[]
}

// ↓ this doesn't work
// const getStaticProps:GetStaticProps<Props> =
// `getStaticProps` must be exported separately from page

export const getStaticProps: GetStaticProps<Props> = async () => {
    const sortedPostsData = getSortedPostsData()
    return {
        props: {
            sortedPostsData
        }
    }
}

// this doesn't work
// export const Home: ...
// Component must be `default export`

const Home: NextPage<Props> = ({ sortedPostsData }) => {
    return (
        <div className="container">
            <Layout home>
                <Head>
                    <title>{siteName}</title>
                </Head>
                <section>
                    <p className='mt-8'>Pui pui.</p>
                </section>
                <section className="mt-2 p-1">
                    <h2 className=" text-lg font-bold">Blog</h2>
                    <ul>
                        {sortedPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>
                                    <a className='text-indigo-500 underline'>{title}</a>
                                </Link>
                                <br />
                                <small>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>

            </Layout>
        </div>
    )
}

export default Home
