import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BasicLayout } from '.';

export default function Item() {
  return (
    <div>
      <Head>
        <title>Basic/Item - Wireframe</title>
      </Head>
      <BasicLayout>
        <div className="mx-8 my-12">
          <h1>Item page</h1>
        </div>
      </BasicLayout>
    </div>
  );
}
