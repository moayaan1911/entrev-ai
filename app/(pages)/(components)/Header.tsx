/** @format */
'use client';
import { useEffect, useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  CircleHelp,
  Github,
  LayoutDashboard,
  Menu,
  MoonIcon,
  Rocket,
  SunIcon,
  X,
  Zap,
} from 'lucide-react'; // Import the Menu and X icons
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme('system');
  }, []);

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
            className={`hover:bg-blue-100 px-4 py-2 rounded-lg text-lg font-semibold flex items-center gap-2 hover:dark:text-black ${
              pathname === '/dashboard' ? 'text-purple-500' : ''
            }`}>
            <LayoutDashboard /> Dashboard
          </Link>
          <Link
            href='/questions'
            className={`hover:bg-green-100 px-4 py-2 rounded-lg text-lg font-semibold flex items-center gap-2 hover:dark:text-black ${
              pathname === '/questions' ? 'text-purple-500' : ''
            }`}>
            <CircleHelp /> Questions
          </Link>
          <Link
            href='/upgrade'
            className={`hover:bg-yellow-100 px-4 py-2 rounded-lg text-lg font-semibold flex items-center gap-2 hover:dark:text-black ${
              pathname === '/upgrade' ? 'text-purple-500' : ''
            }`}>
            <Rocket />
            Upgrade
          </Link>
          <Link
            href='/how-it-works'
            className={`hover:bg-red-100 px-4 py-2 rounded-lg text-lg font-semibold flex items-center gap-2 hover:dark:text-black ${
              pathname === '/how-it-works' ? 'text-purple-500' : ''
            }`}>
            <Zap /> How it Works?
          </Link>
          <Link
            href=''
            className={`hover:bg-gray-100 px-4 py-2 rounded-lg text-lg font-semibold flex items-center gap-2 hover:dark:text-black ${
              pathname === '/buy-code' ? 'text-purple-500' : ''
            }`}>
            <Github /> Buy Source Code
          </Link>
        </div>
        <div className='flex items-center gap-6 '>
          {theme === 'light' ? (
            <MoonIcon
              onClick={() => setTheme('dark')}
              className='cursor-pointer w-8 h-8'
            />
          ) : (
            <SunIcon
              onClick={() => setTheme('light')}
              className='cursor-pointer w-8 h-8'
            />
          )}
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
              className={`text-sm font-semibold flex items-center gap-2 ${
                pathname === '/dashboard' ? 'text-purple-500' : ''
              }`}>
              <LayoutDashboard /> Dashboard
            </Link>
            <Link
              href='/questions'
              className={`text-sm font-semibold flex items-center gap-2 ${
                pathname === '/questions' ? 'text-purple-500' : ''
              }`}>
              <CircleHelp /> Questions
            </Link>
            <Link
              href='/upgrade'
              className={`text-sm font-semibold flex items-center gap-2 ${
                pathname === '/upgrade' ? 'text-purple-500' : ''
              }`}>
              <Rocket />
              Upgrade
            </Link>
            <Link
              href='/how-it-works'
              className={`text-sm font-semibold flex items-center gap-2 ${
                pathname === '/how-it-works' ? 'text-purple-500' : ''
              }`}>
              <Zap /> How it Works?
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
