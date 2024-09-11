// app/components/TopSellingProducts.tsx
import React from 'react';
import styles from './TopSellingProducts.module.css';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const fetchTopSellingProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products', { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};

const TopSellingProducts: React.FC = async () => {
  const response = await fetchTopSellingProducts();
    const products = response.slice(0, 5);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Top 5 Best Selling Products</h2>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image
              src={product.image}
              alt={product.title}
              className={styles.productImage}
              width={300}
              height={400}
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

export default TopSellingProducts;
