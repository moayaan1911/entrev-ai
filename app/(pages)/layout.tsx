/** @format */

import React from 'react';
import Header from './(components)/Header';
import Footer from './(components)/Footer';

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className='flex flex-col items-center justify-center  md:h-[83vh] h-[85vh]'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
