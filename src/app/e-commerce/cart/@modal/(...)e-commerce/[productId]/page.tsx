// app/e-commerce/[productId]/page.tsx
import React from 'react';
import styles from './styles/modal.module.css'
import Image from 'next/image';
import { CloseModalButtom } from '@/components/ecommerce/CloseModalButtom/CloseModalButtom';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const fetchProductById = async (productId: string): Promise<Product> => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
};

type ProductPageProps = {
  params: { productId: string };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProductById(params.productId);

  return (
    <div className={styles.modal}>
        <div className={styles.modalContent}>
            <div className={styles.modalCloseButtom}><CloseModalButtom /></div>
            <h1 className={styles.modalTitle}>{product.title}</h1>
            <Image className={styles.modalImage} src={product.image} alt={product.title} width={250} height={300}  />
            <p className={styles.modalDescription}>{product.description}</p>
            <p className={styles.modalprice}>Price: ${product.price.toFixed(2)}</p>
        </div>
    </div>
  );
}
