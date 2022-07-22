import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { NavBar } from '../NavBar/NavBar';

import styles from './MainLayout.module.css'

interface Props{
  children:ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Carlos</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
