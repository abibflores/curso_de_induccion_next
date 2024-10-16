// app/components/OfferBanner.tsx
import React from 'react';
import styles from './OfferBanner.module.css';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const fetchProduct = async (): Promise<Product> => {
  const res = await fetch('https://fakestoreapi.com/products/6');
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
};

const OfferBanner: React.FC = async () => {
  const product = await fetchProduct();

  const discountPrice = (product.price * 0.75).toFixed(2); // Simulamos un 25% de descuento

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          className={styles.productImage}
            width={300}
            height={400}
            loading='lazy'
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.offerTitle}>Special Offer!</h2>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.oldPrice}>${product.price.toFixed(2)}</p>
        <p className={styles.newPrice}>Now: ${discountPrice}</p>
        <button className={styles.buyButton}>Buy Now</button>
      </div>
    </div>
  );
};

export default OfferBanner;
