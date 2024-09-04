import { Header } from '@/components/Header/Header';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Header version='trece' />
        {children}
    </div>
  );
}