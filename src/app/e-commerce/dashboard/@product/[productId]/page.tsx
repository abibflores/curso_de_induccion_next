// app/admin/dashboard/page.tsx
import React from 'react';
import styles from './styles/product.module.css';

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

const fetchProduct = async (productId: string): Promise<Product> => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        next: { revalidate: 3600 }
    }
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`, options);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
};

export default async function ProductDashboardPage({ params }: { params: { productId: string } }) {
  const product = await fetchProduct(params.productId);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product Dashboard</h1>
      <div className={styles.productCard}>
        <img src={product.image} alt={product.title} className={styles.productImage} />
        <div className={styles.productDetails}>
          <h2 className={styles.productTitle}>{product.title}</h2>
          <p className={styles.productPrice}>Price: ${product.price.toFixed(2)}</p>
          <p className={styles.productCategory}>Category: {product.category}</p>
          <p className={styles.productRating}>Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)</p>
          <p className={styles.productDescription}>{product.description}</p>
          <button className={styles.editButton}>Edit Product</button>
          <button className={styles.deleteButton}>Delete Product</button>
        </div>
      </div>
    </div>
  );
}
