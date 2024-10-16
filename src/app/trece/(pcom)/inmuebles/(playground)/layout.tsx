// src/app/layout.tsx
'use client'

import { useSelectedLayoutSegments } from "next/navigation";
import styles from "./layout.module.css";
import { HeaderPcom } from "@/components/pcom/HeaderPcom";
export default function RootLayout({ children, modal, header, mapa, sidebar }: { children: React.ReactNode, modal: React.ReactNode, header: React.ReactNode, mapa: React.ReactNode, sidebar: React.ReactNode }) {
  const segment = useSelectedLayoutSegments();
  const isMap = segment && segment[0].includes("mapa");
  console.log(segment, "segment")
  console.log(isMap, "isMap")
  return (
    <html lang="en">
      <body>
        <div className={styles.grid}>
          <div className={styles.header}>
            <HeaderPcom />
          </div>
          <div className={styles.sidebar}>
            {sidebar}
          </div>
          <div className={styles.mapa}>
            {mapa}
          </div>
          <div>
            {children}
          </div>
            {!isMap && modal}
        </div>
      </body>
    </html>
  );
}