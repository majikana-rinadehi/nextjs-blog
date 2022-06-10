import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Potato'
export const siteName = 'My First Next.js App'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link ref={'/favivon.ico'}></link>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            src={'/molcar_400x400.jpg'}
                            width={140}
                            height={140}
                            className={utilStyles.borderCircle}
                        />
                        <h1 className='font-black text-4xl'>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href={'/'}>
                            <Image
                                src={'/molcar_400x400.jpg'}
                                width={100}
                                height={100}
                                className={utilStyles.borderCircle}
                            />
                        </Link>
                        <h2>
                            <Link href={'/'}>
                                <a className='font-black text-2xl'>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <div className='mt-4'>
                    <Link href={'/'}>
                        <a className='text-indigo-400 underline'>← Back to home</a>
                    </Link>
                </div>
            )

            }

        </div>
    )
}