// app/components/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () =>{
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksSection}>
          <Link href="/e-commerce" className={styles.link}>
            Home
          </Link>
          <Link href="/e-commerce/landing" className={styles.link}>
            Landing
          </Link>
          <Link href="/e-commerce/dashboard/1" className={styles.link}>
            Dashboard
          </Link>
          <Link href="/e-commerce/cart" className={styles.link}>
            Cart
          </Link>
          <Link href="/e-commerce/profile/1" className={styles.link}>
            Profile
          </Link>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} My FakeStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
