/** @format */
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full md:p-0 p-6'>
      <Image
        src={'/404.webp'}
        alt='404'
        width={600}
        height={300}
      />
      <div className='text-center mt-6'>
        <h1 className='md:text-4xl font-bold mb-4'>🚫 Not Found 404 🚫</h1>
        <p className='text-lg mb-6'>
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href={'/'}>
          <Button className='px-6 py-3 text-lg font-semibold'>
            🏠 Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
