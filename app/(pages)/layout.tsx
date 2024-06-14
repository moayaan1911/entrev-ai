/** @format */

import React from 'react';

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className='flex flex-col items-center justify-center flex-grow'>
        {children}
      </div>
    </div>
  );
}
