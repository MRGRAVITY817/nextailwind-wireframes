import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Main - Wireframe</title>
      </Head>
      <div>
        <Link href="/basic">
          <a>Basic</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
