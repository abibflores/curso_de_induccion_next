// app/components/About.tsx
import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.aboutContainer}>
      <h2 className={styles.title}>Acerca de Nosotros</h2>
      <p className={styles.description}>
        Somos una tienda dedicada a ofrecer productos de calidad que mejoran la vida de nuestros clientes.
      </p>
    </section>
  );
};

export default About;
