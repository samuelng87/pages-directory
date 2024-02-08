import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Link href="/contacts"> 

        <h1 className={styles.title}>
          Welcome to <div href="https://nextjs.org">contact</div>
        </h1>
        </Link>


        <Link href="/learn"> 
        <h2>
          Welcome to <div href="https://nextjs.org">topic</div>
        </h2>        
      </Link>
      </main>


 
    </Layout>
  )
}
