// components/ErrorComponent.tsx
'use client'
import React from 'react';
import styles from './styles/error.module.css';

type ErrorComponentProps = {
  errorMessage: string;
  onRetry: () => void;
};

const ErrorComponent: React.FC<ErrorComponentProps> = ({ errorMessage, onRetry }) => {
  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorTitle}>Oops! Something went wrong.</h2>
      <p className={styles.errorMessage}>{errorMessage}</p>
      <button className={styles.retryButton} onClick={onRetry}>
        Retry
      </button>
    </div>
  );
};

export default ErrorComponent;
