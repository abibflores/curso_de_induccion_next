import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react';

import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='body'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
