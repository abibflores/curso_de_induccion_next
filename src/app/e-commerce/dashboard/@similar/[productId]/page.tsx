// app/product/[id]/page.tsx
import React from 'react';
import styles from './styles/similar.module.css';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const fetchProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
};

const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  if (!res.ok) {
    throw new Error('Failed to fetch similar products');
  }
  return res.json();
};

type ProductPageProps = {
  params: { productId: string };
};

export default async function ProductPage({ params }: ProductPageProps) {
  console.log(params);
  const product = await fetchProductById(params.productId);
  console.log(product, 'product');
  const similarProducts = await fetchProductsByCategory(product.category);

  return (
    <div className={styles.container}>
      <div className={styles.similarProducts}>
        <h2>Similar Products</h2>
        <ul className={styles.productList}>
          {similarProducts
            .filter((similarProduct) => similarProduct.id !== product.id)
            .map((similarProduct) => (
              <li key={similarProduct.id} className={styles.productItem}>
                <Image
                  src={similarProduct.image}
                  alt={similarProduct.title}
                  className={styles.similarImage}
                  width={150}
                  height={150}    
                />
                <div className={styles.similarProductInfo}>
                  <h3 className={styles.similarTitle}>{similarProduct.title}</h3>
                  <p className={styles.similarPrice}>${similarProduct.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
