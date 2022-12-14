import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

//
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Richard Li's Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Richard Li's Website!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        <div>
        <div className={styles.card}>
          <Link href='/portfolio'>Click here to see what I'm working on!</Link>
        </div>

        <div className={styles.card}>
          <Link href='/games'>Click here to find out what I'm playing!</Link>
        </div>

        <div className={styles.card}>
          <Link href='/portfolio'>This is a placeholder</Link>
        </div>

        <div className={styles.card}>
          <Link href='/about'>Click here to learn more about who I am!</Link>
        </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
