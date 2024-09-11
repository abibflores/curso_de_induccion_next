// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            E-Shop
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link className={styles.navLink} href="/user">
                mi cuenta
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} href="/e-commerce">
                Products
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} href="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
