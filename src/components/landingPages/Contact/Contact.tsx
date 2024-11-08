// app/components/Contact.tsx
import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section className={styles.contactContainer}>
      <h2 className={styles.title}>Contáctanos</h2>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Tu Nombre" className={styles.input} />
        <input type="email" placeholder="Tu Email" className={styles.input} />
        <textarea placeholder="Tu Mensaje" className={styles.textarea}></textarea>
        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
