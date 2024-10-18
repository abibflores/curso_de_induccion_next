// app/cart/page.tsx
import React from 'react';
import Link from 'next/link';
import { GoogleTagManager } from '@next/third-parties/google'

import styles from './styles/cart.module.css';
import { ButtonGoogleTagManager } from '@/components/ecommerce/ButtonGoogleTagManager/ButtonGoogleTagManager';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};
const GTM = process.env.NEXT_PUBLIC_GTM;

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products?sort=desc');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};

export default async function CartPage() {
  const products = await fetchProducts();

  return (
    <>
      {GTM && <GoogleTagManager gtmId={GTM} />}
      <div className={styles.container}>
        <h1 className={styles.title}>Your Shopping Cart</h1>
        <ul className={styles.cartList}>
          {products.map((product) => (
            <li key={product.id} className={styles.cartItem}>
              <img src={product.image} alt={product.title} className={styles.productImage} />
              <div className={styles.productDetails}>
                <h2 className={styles.productTitle}>{product.title}</h2>
                <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
                <Link href={`/e-commerce/${product.id}`}>
                  <ButtonGoogleTagManager value={product.title} className={styles.viewButton}>View Product</ButtonGoogleTagManager>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>

  );
}
