import { getAllPostsIds, getPostData } from '../../utils/posts'
import { GetStaticProps, NextPage } from 'next'
import { PostsData } from '../../types/data'
import Layout from '../../components/layout'
import Date from '../../components/date'
import Head from 'next/head'

type Props = {
    postData: PostsData & { contentHtml: string }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const postData = await getPostData(params.id as string)

    return {
        props: {
            postData
        }
    }

}

export async function getStaticPaths() {
    const paths = getAllPostsIds()

    return {
        paths,
        fallback: false
    }
}

const Post: NextPage<Props> = ({ postData }) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <div>{postData.title}</div>
                <div>
                    <Date dateString={postData.date} />
                </div>
                <br />
                {postData.id}
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export default Post