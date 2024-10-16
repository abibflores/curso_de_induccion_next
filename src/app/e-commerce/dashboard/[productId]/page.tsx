// app/product/[id]/page.tsx
import SidebarProducts from '@/components/ecommerce/SidebarProducts/SidebarProducts';
import React from 'react';

export async function generateMetadata() {
    return {
        title: 'Dashboard - E-commerce',
        description: 'E-commerce Dashboard Page'
    }
}

export default function ProductPage() {

  return (
    <>
      <SidebarProducts  />
    </>
  );
}
