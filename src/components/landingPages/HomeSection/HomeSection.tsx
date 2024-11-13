// app/components/HomeSection.tsx
import React from 'react';
import styles from './HomeSection.module.css';

export const HomeSection: React.FC = () => {
  return (
    <section className={styles.homeContainer}>
      <h1 className={styles.title}>Bienvenido a Nuestra Tienda</h1>
      <p className={styles.subtitle}>Los mejores productos para mejorar tu vida</p>
      <button className={styles.ctaButton}>Explorar Ahora</button>
    </section>
  );
};

