// app/categories/page.tsx
import React from 'react';
import styles from './styles/categories.module.css';

const fetchCategories = async (): Promise<string[]> => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  return res.json();
};

export default async function CategoriesPage() {
  const categories = await fetchCategories();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product Categories</h1>
      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li key={category} className={styles.categoryItem}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
