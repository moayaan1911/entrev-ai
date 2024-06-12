/** @format */

import { Contact, Copyright, Github, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='flex md:flex-row flex-col items-center justify-between py-2 md:px-8 px-4 border-t dark:border-white'>
      <div className='flex gap-1 items-center'>
        Copyright <Copyright />
        {currentYear}
      </div>
      <div className='flex gap-4 items-center'>
        <Link
          href='/how-it-works'
          className={`hover:bg-gray-100 px-4 py-2 rounded-lg text-lg font-semibold flex items-center gap-2 hover:dark:text-black`}>
          <Zap /> How it Works?
        </Link>
        <Link
          href='/buy-code'
          className={`hover:bg-gray-100 px-4 py-2 rounded-lg text-lg font-semibold flex items-center gap-2 hover:dark:text-black`}>
          <Github /> Buy Source Code
        </Link>
        <Link
          href='/contact-us'
          className={`hover:bg-gray-100 px-4 py-2 rounded-lg text-lg font-semibold flex items-center gap-2 hover:dark:text-black`}>
          <Contact /> Contact us
        </Link>
      </div>
      <Image
        src={'/logo.webp'}
        width={50}
        height={50}
        alt='Logo'
        className='rounded-md'
      />
    </div>
  );
}
