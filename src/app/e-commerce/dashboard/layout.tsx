// src/app/layout.tsx
'use client'

import { useSelectedLayoutSegments } from "next/navigation";
import styles from "./styles/layout.module.css";
import Header from "@/components/ecommerce/Header/Header";
export default function RootLayout({ children, product, similar, most, categories }: { children: React.ReactNode, product: React.ReactNode, similar: React.ReactNode, most: React.ReactNode, categories: React.ReactNode }) {
  const segment = useSelectedLayoutSegments();
  const isMap = segment && segment[0].includes("mapa");
  return (
    <html lang="en">
      <body>
        <div className={styles.grid}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.productDetail}>
            {product}
          </div>
          <div className={styles.similarProducts}>
            {similar}
          </div>
          <div className={styles.sidebar}>
            {children}
          </div>
          <div className={styles.categories}>
            {categories}
          </div>
            <div className={styles.mostSold}>
                {most}
            </div>
        </div>
      </body>
    </html>
  );
}