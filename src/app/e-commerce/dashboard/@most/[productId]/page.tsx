// app/dashboard/page.tsx
import React from 'react';
import styles from './styles/most.module.css';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products?sort=desc');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};

export default async function ProductsReportPage() {
  const products = await fetchProducts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products Sales Report</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Reviews</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className={styles.row}>
              <td className={styles.product}>
                <img src={product.image} alt={product.title} className={styles.productImage} />
                {product.title}
              </td>
              <td className={styles.price}>${product.price.toFixed(2)}</td>
              <td className={styles.rating}>{product.rating.rate} / 5</td>
              <td className={styles.reviews}>{product.rating.count} reviews</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
