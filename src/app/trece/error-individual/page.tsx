import { Card } from "@/components/Card/Card";
import styles from "./page.module.css";

export default async function Home() {
    // Error en el fecth de la API
    const data = await fetch('https://rickandmortyapi.com/api/character/2-4').then(res => res.json())
    // console.log(data.valor.noValid)
    return (
        <div className={styles.section}>
            <Card data={data} />
        </div>
    )
}