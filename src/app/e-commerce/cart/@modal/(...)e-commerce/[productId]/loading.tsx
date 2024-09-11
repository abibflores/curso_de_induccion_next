import React from 'react';
import styles from './styles/skeleton.module.css';

const SkeletonModal: React.FC = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalCloseButton}></div>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonImage}></div>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonPrice}></div>
      </div>
    </div>
  );
};

export default SkeletonModal;
