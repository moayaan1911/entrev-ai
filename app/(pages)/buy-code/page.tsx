/** @format */

import React from 'react';
import { CreditCard, Bitcoin } from 'lucide-react'; // Importing necessary icons from lucide-react
import Link from 'next/link';

export default function BuyCode() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='text-3xl font-bold mb-4'>Buy the Source Code</h1>
      <p className='text-center mb-8 md:px-0 px-4'>
        Like the project? Buy the source code and customize it to fit your
        needs. Get access to all the features and make it your own! 📌
      </p>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border border-blue-500 hover:border-purple-500 dark:bg-gray-300'>
          <CreditCard
            size={48}
            className='mb-4 dark:text-black'
          />
          <Link
            href={'https://stripe.com'}
            target='_blank'
            className='bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-purple-400'>
            Buy with Card
          </Link>
        </div>
        <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border border-green-500 hover:border-purple-500 dark:bg-gray-300'>
          <Bitcoin
            size={48}
            className='mb-4 dark:text-black'
          />
          <Link
            href={'https://laborx.com'}
            target='_blank'
            className='bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-purple-400'>
            Buy with Crypto
          </Link>
        </div>
      </div>
    </div>
  );
}
