import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Basic = () => {
  return (
    <div>
      <Head>
        <title>Basic - Wireframe</title>
      </Head>
      <BasicLayout>
        <div className="mx-8 my-12">
          <div>
            <div className="flex flex-col items-center justify-center mb-8">
              <h1 className="mb-2 text-center">
                Vestibul Nib Velit Fusce Rutrum Mas Sagittis Orci
              </h1>
              <h3> Quisque Fermentum Turpis Semperta</h3>
            </div>
            <div className="tablet:grid-cols-2 grid grid-cols-1 gap-8 mb-8">
              <ItemWithTitle size="lg" />
              <ItemWithTitle size="lg" />
            </div>
            <div className="tablet:grid-cols-3 grid grid-cols-1 gap-6">
              <ItemWithTitle size="md" />
              <ItemWithTitle size="md" />
              <ItemWithTitle size="md" />
            </div>
          </div>
          <div className="mt-12">
            <div className="flex flex-col items-center justify-center mb-8">
              <h1 className="mb-2 text-center">
                Excepteur sint occaecat cupidatat non proident
              </h1>
              <h3> Quisque Fermentum Turpis Semperta</h3>
            </div>
            <div className="tablet:grid-cols-3 grid grid-cols-1 gap-6 mb-8">
              <ItemWithTitle size="md" />
              <ItemWithTitle size="md" />
              <ItemWithTitle size="md" />
            </div>
            <div className="laptop:grid-cols-6 tablet:grid-cols-3 grid grid-cols-2 gap-4">
              <ItemWithTitle size="sm" />
              <ItemWithTitle size="sm" />
              <ItemWithTitle size="sm" />
              <ItemWithTitle size="sm" />
              <ItemWithTitle size="sm" />
              <ItemWithTitle size="sm" />
            </div>
          </div>
        </div>
      </BasicLayout>
    </div>
  );
};

export default Basic;

const Item = () => {
  return (
    <div className="relative w-full h-full">
      <Image src="/static/assets/frame.png" alt="container" layout="fill" />
    </div>
  );
};

const ItemWithTitle: React.FC<{ size: 'lg' | 'md' | 'sm' }> = ({ size }) => {
  const height = (size: 'lg' | 'md' | 'sm') => {
    switch (size) {
      case 'lg':
        return 'h-[500px]';
      case 'md':
        return 'h-[400px]';
      case 'sm':
        return 'h-[300px]';
      default:
        return 'h-[500px]';
    }
  };
  return (
    <Link href="/basic/item">
      <a className={`flex flex-col items-center w-full ${height(size)}`}>
        <Item />
        {size === 'lg' && <p className="text-lg font-normal">Big item</p>}
        {size === 'md' && <p className="text-md font-light">Mid item</p>}
        {size === 'sm' && <p className="font-extralight text-sm">Small item</p>}
      </a>
    </Link>
  );
};

export const BasicLayout: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${
        open
          ? `laptop:-translate-x-96 tablet:-translate-x-72 -translate-x-36`
          : `translate-x-0`
      } transition-all`}
    >
      <header>
        <nav className="flex items-center justify-between w-screen px-8 py-4 border">
          <Link href="/basic">
            <a>
              <h3>Mi Casa</h3>
            </a>
          </Link>
          <button onClick={() => setOpen(!open)}>
            <h3>Shopping Cart</h3>
          </button>
        </nav>
      </header>
      {children}
    </div>
  );
};
