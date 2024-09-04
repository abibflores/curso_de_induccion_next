import { Card } from "@/components/Card/Card";
import styles from "./page.module.css";

export default async function Home() {
    const data = await fetch('https://rickandmortyapi.com/api/character/1').then(res => res.json())
    return (
        <div className={styles.section}>
            <Card data={data} />
        </div>
    )
}