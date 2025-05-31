// src/components/layouts.js

import Head from "next/head";
import styles from "@/styles/Layout.module.css";

 // Optional CSS module

export default function Layout({ children, title = "WCL Cricket Legends", description = "World Championship of Legends" }) {
  return (
    <div className={styles.layoutWrapper}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.siteTitle}>WCL Cricket Legends</h1>
      </header>

      <main className={styles.mainContent}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} World Championship of Legends</p>
      </footer>
    </div>
  );
}
