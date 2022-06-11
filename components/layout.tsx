import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { NextPage } from 'next'

const name = 'Potato'
export const siteName = 'My First Next.js App'

type Props = {
    children: any
    home: boolean
}

/**
 * 
 */
const Layout: NextPage<Props> = ({ children, home }) => {
    return (
        <div className={styles.container}>
            <Head>
                <link ref={'/favivon.ico'}></link>
            </Head>
            <header className='flex flex-col items-center'>
                {home ? (
                    <>
                        <Image
                            src={'/molcar_400x400.jpg'}
                            width={140}
                            height={140}
                            className='rounded-full'
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
                                className='rounded-full'
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

export default Layout