// app/page.js
import React from 'react';
import { Metadata } from 'next'

import styles from '../styles/Home.module.css';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home | tutorial-app',
  viewport: 'width=device-width, initial-scale=1'
}; 

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Next.js 14 App</h1>
      <p>This is the home page.</p>
      <a>Go to the <a href="/dashboard">Dashboard</a></a>
    </div>
  );
}
