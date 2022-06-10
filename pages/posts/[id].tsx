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
        <Layout home={false}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className='mt-4'>
                <div className='text-2xl font-bold'>{postData.title}</div>
                <div>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
          {/** 
           * ↓↓↓this doesn't work 
           * <style jsx>...<style>
           * */}
          <style>{`
            ul {
              list-style: circle;
              margin: 16px auto;
              padding-left: 40px;
            }

            p {
              margin: 16px auto;
            }
          `}</style>
        </Layout>
    )
}

export default Post