// app/@modal/page.tsx
import Link from "next/link";
import styles from "./modal.module.css";
export default function ModalPage() {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <h1 className={styles.title}>Modal</h1>
        <p>Modal content.</p>
        <Link className={styles.close} href="/trece/inmuebles/mapa/condesa">Close</Link>
      </div>
    </div>
  );
}
