import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";
import { foo } from "../no-coverage-here/some-file";

export interface HomeProps {
  foo: string;
}

export default function Home({ foo }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js + Cypress</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} data-testid="landing_page">
        <h1 className={styles.title}>
          Welcome to the TypeScript <a href="https://nextjs.org">Next.js</a>{" "}
          Cypress example.
        </h1>

        <div className={styles.linkContainer}>
          <Link href="/about">
            <a data-testid="about_page_link">Try going to about page...</a>
          </Link>
          <>(you can't lol, idk)</>
          {foo}
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return { props: { foo: foo() } };
};
