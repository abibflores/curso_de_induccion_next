// app/@modal/page.tsx
import { Maps } from "@/components/trece/Maps/Maps";
import styles from "./mapa.module.css"
export default function MapaPage() {
  return (
    <div className={styles.container}>
        <Maps />
    </div>
  );
}
