import styles from "./page.module.css";
import { CardWithButton } from "@/components/trece/CardWithButton/CardWithButton";

export default async function ComponentPage() {
    const data = await fetch('https://rickandmortyapi.com/api/character/2').then(res => res.json())
    return (
        <div className={styles.section}>
            <CardWithButton data={data} />
        </div>
    )
}