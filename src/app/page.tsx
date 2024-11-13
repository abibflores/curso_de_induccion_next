// app/page.tsx
import React from 'react';
import Link from 'next/link';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Bienvenido a mi Curso de Next.js 14</h1>
        <p className={styles.subtitle}>Aprende a crear una tienda en línea desde cero usando Next.js 14</p>
      </header>

      <section className={styles.aboutSection}>
        <h2 className={styles.aboutTitle}>Sobre mí</h2>
        <p className={styles.aboutText}>
          Hola, soy Abib Flores. Soy un desarrollador con experiencia en la creación de aplicaciones web modernas. En este curso, te guiaré a través de la construcción de una tienda en línea completa con Next.js 14.
        </p>
        <Link href="/e-commerce" className={styles.link}>
          Ir a la tienda en línea
        </Link>
      </section>
    </div>
  );
}
