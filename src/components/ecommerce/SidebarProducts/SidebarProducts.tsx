// components/SidebarProducts.tsx
import React from 'react';
import Link from 'next/link';
import styles from './SidebarProducts.module.css';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  image: string;
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};

export default async function SidebarProducts() {
  const products = await fetchProducts();

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Products</h2>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <Image className={styles.img} src={product.image} alt={product.title} width={50} height={50} />
            <Link className={styles.productLink} href={`/e-commerce/dashboard/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
