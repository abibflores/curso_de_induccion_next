// app/components/Team.tsx
import React from 'react';
import styles from './Team.module.css';

const Team: React.FC = () => {
  return (
    <section className={styles.teamContainer}>
      <h2 className={styles.title}>Conoce a Nuestro Equipo</h2>
      <div className={styles.teamMembers}>
        <div className={styles.member}>
          <img src="https://via.placeholder.com/150" alt="Juan" className={styles.memberImage} />
          <h4 className={styles.name}>Juan Pérez</h4>
          <p className={styles.role}>CEO</p>
        </div>
        <div className={styles.member}>
          <img src="https://via.placeholder.com/150" alt="Ana" className={styles.memberImage} />
          <h4 className={styles.name}>Ana Gómez</h4>
          <p className={styles.role}>CTO</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
