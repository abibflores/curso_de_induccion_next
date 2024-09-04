import { Card } from "@/components/Card/Card";
import styles from "./page.module.css";

export async function generateMetadata({}) {
    const data = await fetch('https://rickandmortyapi.com/api/character/2').then(res => res.json())

    return {
        title: `${data.name} - SEO`,
        description: 'SEO Page'
    }
}

export default async function Home() {
    const data = await fetch('https://rickandmortyapi.com/api/character/2').then(res => res.json())
    return (
        <div className={styles.section}>
            <Card data={data} />
        </div>
    )
}