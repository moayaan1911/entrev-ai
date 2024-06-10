/** @format */
'use client';
import { useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Menu, X } from 'lucide-react'; // Import the Menu and X icons
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Medium and larger screens */}
      <div className='hidden md:flex md:flex-row justify-between px-6 py-2 items-center border-b-2 border-gray-300'>
        <Image
          src={'/logo.webp'}
          width={100}
          height={300}
          alt='Logo'
        />
        <div className='flex md:flex-row flex-col md:gap-8 gap-3'>
          <Link
            href='/dashboard'
            className={`hover:bg-blue-100 px-4 py-2 rounded-lg text-lg font-semibold ${
              pathname === '/dashboard' ? 'text-purple-500' : ''
            }`}>
            📊 Dashboard
          </Link>
          <Link
            href='/questions'
            className={`hover:bg-green-100 px-4 py-2 rounded-lg text-lg font-semibold ${
              pathname === '/questions' ? 'text-purple-500' : ''
            }`}>
            ❓ Questions
          </Link>
          <Link
            href='/upgrade'
            className={`hover:bg-yellow-100 px-4 py-2 rounded-lg text-lg font-semibold ${
              pathname === '/upgrade' ? 'text-purple-500' : ''
            }`}>
            🚀 Upgrade
          </Link>
          <Link
            href='/how-it-works'
            className={`hover:bg-red-100 px-4 py-2 rounded-lg text-lg font-semibold ${
              pathname === '/how-it-works' ? 'text-purple-500' : ''
            }`}>
            🛠️ How it Works?
          </Link>
        </div>

        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              userButton: {
                borderRadius: 9999,
              },
              avatarBox: {
                width: '48px',
                height: '48px',
              },
            },
          }}
        />
      </div>

      {/* Mobile screens */}
      <div className='md:hidden flex flex-col px-6 py-2 items-center border-b-2 border-gray-300'>
        <div className='flex justify-between w-full items-center'>
          <Image
            src={'/logo.webp'} // New image for mobile
            width={80}
            height={240}
            alt='Mobile Logo'
          />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='mr-4'>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <UserButton
            afterSignOutUrl='/'
            appearance={{
              elements: {
                userButton: {
                  borderRadius: 9999,
                },
                avatarBox: {
                  width: '40px', // Adjusted size for mobile
                  height: '40px', // Adjusted size for mobile
                },
              },
            }}
          />
        </div>

        {menuOpen && (
          <div className='flex flex-col gap-3 mt-4 w-full'>
            <Link
              href='/dashboard'
              className='hover:bg-blue-100 px-4 py-2 rounded-lg text-lg font-semibold'>
              📊 Dashboard
            </Link>
            <Link
              href='/questions'
              className='hover:bg-green-100 px-4 py-2 rounded-lg text-lg font-semibold'>
              ❓ Questions
            </Link>
            <Link
              href='/upgrade'
              className='hover:bg-yellow-100 px-4 py-2 rounded-lg text-lg font-semibold'>
              🚀 Upgrade
            </Link>
            <Link
              href='/how-it-works'
              className='hover:bg-red-100 px-4 py-2 rounded-lg text-lg font-semibold'>
              🛠️ How it Works?
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
