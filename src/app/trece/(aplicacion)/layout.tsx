import { HeaderNew } from '@/components/trece/Header/Header';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <HeaderNew />
        {children}
    </div>
  );
}
