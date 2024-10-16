// app/components/HeroProduct.tsx
import React from 'react';
import styles from './HeroProduct.module.css';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const fetchProduct = async (): Promise<Product> => {
  const res = await fetch('https://fakestoreapi.com/products/1');
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
};

const HeroProduct: React.FC = async () => {
  const product = await fetchProduct();

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          className={styles.heroImage}
          width={400}
          height={400}
        />
      </div>
      <div className={styles.heroDetails}>
        <h1 className={styles.heroTitle}>{product.title}</h1>
        <p className={styles.heroPrice}>${product.price.toFixed(2)}</p>
        <p className={styles.heroDescription}>{product.description}</p>
        <button className={styles.heroButton}>Buy Now</button>
      </div>
    </div>
  );
};

export default HeroProduct;
