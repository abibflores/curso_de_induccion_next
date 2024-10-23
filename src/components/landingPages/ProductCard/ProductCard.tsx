// app/components/ProductCard.tsx
import React from 'react';
import styles from './ProductCard.module.css';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <p className={styles.description}>{product.description}</p>
      <button className={styles.buyButton}>Comprar Ahora</button>
    </div>
  );
};

