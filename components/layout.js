import styles from './layout.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Potato'
export const siteName = 'My First Next.js App'

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link ref={'/favivon.ico'}></link>
            </Head>
            <header>
                {home ? (
                    <>
                        <Image
                            src={'/molcar_400x400.jpg'}
                            width={140}
                            height={140}
                        />
                        <h1>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href={'/'}>
                            <Image
                                src={'/molcar_400x400.jpg'}
                                width={100}
                                height={100}
                            />
                        </Link>
                        <h2>
                            <Link href={'/'}>
                                <a>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>
                { children }
            </main>
            {!home && (
                <div>
                    <Link href={'/'}>
                        <a>← Back to home</a>
                    </Link>
                </div>
            )

            }

        </div>
    ) 
}