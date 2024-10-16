// components/SkeletonProductDetail.tsx
import React from 'react';
import styles from './styles/skeleton.module.css';

const SkeletonProductDetail: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productWrapper}>
        <div className={styles.skeletonImage}></div>
        <div className={styles.productDetails}>
          <div className={styles.skeletonTitle}></div>
          <div className={styles.skeletonPrice}></div>
          <div className={styles.skeletonCategory}></div>
          <div className={styles.skeletonDescription}></div>
          <div className={styles.skeletonButton}></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProductDetail;
