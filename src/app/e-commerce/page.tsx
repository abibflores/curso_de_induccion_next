import React from 'react';
import styles from './styles/products.module.css';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export function generateMetadata({}) {

    return {
        title: 'Products - E-commerce',
        description: 'E-commerce Products Page'
    }
}

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fake Store Products</h1>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image src={product.image} alt={product.title} className={styles.productImage} width={250} height={250} />
            <div className={styles.productDetails}>
              <h2 className={styles.productTitle}>{product.title}</h2>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              <button className={styles.addToCartButton}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
