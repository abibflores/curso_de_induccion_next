// components/TopSellingProductsSkeleton.tsx
import React from 'react';
import styles from './TopSellingProductsSkeleton.module.css';

const TopSellingProductsSkeleton: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Top 5 Best Selling Products</h2>
      <div className={styles.productsGrid}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={styles.skeletonCard}>
            <div className={styles.skeletonImage}></div>
            <div className={styles.skeletonInfo}>
              <div className={styles.skeletonTitle}></div>
              <div className={styles.skeletonPrice}></div>
              <div className={styles.skeletonButton}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProductsSkeleton;
