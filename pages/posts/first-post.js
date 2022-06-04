import Layout from "../../components/layout"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

export default function FirstPost() {
    return (
        <Layout home>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Potato</h1>
            <Image
                src={'/molcar_400x400.jpg'}
                width={400}
                height={400}
                alt={'molcar'}
            />
            <h2>
                <Link href={'/'}>
                    <a>Back to Home</a>
                </Link>
            </h2>
            <h2>
                <pre>
                    <a href="/">Back to Home(by`&lt;a&gt;`tag)</a>
                </pre>
            </h2>
        </Layout>

    )
}