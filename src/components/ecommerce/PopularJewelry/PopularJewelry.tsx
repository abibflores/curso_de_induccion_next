// app/components/PopularJewelry.tsx
import React from 'react';
import styles from './PopularJewelry.module.css';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const fetchJewelryProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products?sort=desc&li');
  if (!res.ok) {
    throw new Error('Failed to fetch jewelry products');
  }
  return res.json();
};

const PopularJewelry: React.FC = async () => {
  const response = await fetchJewelryProducts();

  const products = response.filter((product) => product.category === 'jewelery').slice(0, 4);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Most Popular Jewelry</h2>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image
              src={product.image}
              alt={product.title}
              className={styles.productImage}
                width={300}
                height={400}
                loading='lazy'
            />
            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              <button className={styles.buyButton}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularJewelry;
