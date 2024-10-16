// app/product/[id]/page.tsx
import React from 'react';
import styles from './styles/singleProduct.module.css';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const fetchProduct = async (productId: string): Promise<Product> => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 }
  }
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`,options);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
};

type ProductPageProps = {
  params: { productId: string };
};

export async function generateMetadata({ params }: ProductPageProps) {
    const product = await fetchProduct(params.productId);

    return {
        title: `${product.title} - E-commerce`,
        description: product.description
    }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProduct(params.productId);

  return (
    <div className={styles.container}>
      <div className={styles.productWrapper}>
        <Image src={product.image} alt={product.title} className={styles.productImage} width={300} height={400} />
        <div className={styles.productDetails}>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
          <p className={styles.productCategory}>Category: {product.category}</p>
          <p className={styles.productDescription}>{product.description}</p>
          <button className={styles.addToCartButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
