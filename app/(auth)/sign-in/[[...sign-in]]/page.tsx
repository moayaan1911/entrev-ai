/** @format */

import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <section className='bg-white dark:bg-black'>
      <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
        <section className='relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6'>
          <Image
            src={'/banner.webp'}
            alt='Banner Image'
            width={1200}
            height={1200}
            className='absolute inset-0 h-full w-full object-cover opacity-80'
          />

          <div className='hidden lg:relative lg:block lg:p-12'>
            <h2 className='mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
              Welcome to Entrev AI 🤖🎓
            </h2>

            <p className='mt-4 leading-relaxed text-white/90'>
              🌟 Prepare for your next big opportunity with Entrev AI! Our
              platform offers comprehensive mock interviews, personalized
              feedback, and advanced AI-driven insights to help you shine in any
              interview. Whether you&apos;re a seasoned professional or just
              starting out, we&apos;ve got the tools you need to succeed. 🚀💼
            </p>
          </div>
        </section>
        <section className='flex items-center flex-col justify-center w-full px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 left-auto'>
          <SignIn />
        </section>
      </div>
    </section>
  );
}
