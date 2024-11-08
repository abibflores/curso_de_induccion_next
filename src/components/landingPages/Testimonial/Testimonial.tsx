// app/components/Testimonial.tsx
import React from 'react';
import styles from './Testimonial.module.css';

const Testimonial: React.FC = () => {
  return (
    <section className={styles.testimonialContainer}>
      <h2 className={styles.title}>Lo que dicen nuestros clientes</h2>
      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <p className={styles.text}>&quot;Excelente servicio y productos de calidad.&quot;</p>
          <h4 className={styles.author}>- Juan Pérez</h4>
        </div>
        <div className={styles.testimonial}>
          <p className={styles.text}>&quot;Totalmente recomendado.&quot;</p>
          <h4 className={styles.author}>- Ana Gómez</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
