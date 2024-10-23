// app/components/Shop.tsx
import React from 'react';
import styles from './Shop.module.css';
import { ProductCard } from '../ProductCard/ProductCard';

// Datos simulados de productos
const products = [
  {
    id: 1,
    title: 'Producto Estrella 1',
    price: 199.99,
    description: 'Este es un producto excelente para mejorar tu vida diaria.',
    image: 'https://via.placeholder.com/300x300.png?text=Producto+1',
  },
  {
    id: 2,
    title: 'Producto Estrella 2',
    price: 249.99,
    description: 'Mejora tu salud con este increíble producto.',
    image: 'https://via.placeholder.com/300x300.png?text=Producto+2',
  },
  {
    id: 3,
    title: 'Producto Estrella 3',
    price: 299.99,
    description: 'La tecnología de este producto te sorprenderá.',
    image: 'https://via.placeholder.com/300x300.png?text=Producto+3',
  },
  {
    id: 4,
    title: 'Producto Estrella 4',
    price: 349.99,
    description: 'Una solución ideal para tu hogar.',
    image: 'https://via.placeholder.com/300x300.png?text=Producto+4',
  },
  {
    id: 5,
    title: 'Producto Estrella 5',
    price: 399.99,
    description: 'La elección perfecta para cualquier ocasión.',
    image: 'https://via.placeholder.com/300x300.png?text=Producto+5',
  },
  {
    id: 6,
    title: 'Producto Estrella 6',
    price: 449.99,
    description: 'Calidad y desempeño en un solo producto.',
    image: 'https://via.placeholder.com/300x300.png?text=Producto+6',
  },
];

const Shop: React.FC = () => {
  return (
    <section className={styles.shopContainer}>
      <h2 className={styles.title}>Nuestros Productos</h2>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
