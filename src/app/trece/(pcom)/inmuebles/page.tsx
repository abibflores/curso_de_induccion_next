import Link from "next/link";
import styles from "./page.module.css"

export default async function ImnueblesPage() {
   return (
    <main className={styles.main}>
        <h1 className={styles.title}>Buscador</h1>
        <form className={styles.form}>
            <input className={styles.input} type="text" placeholder="Buscar" />
            <button className={styles.buttom}>Buscar</button>
        </form>

        <Link className={styles.buttom_link} href="/trece/inmuebles/mapa/condesa">colonia condesa</Link>
        <Link className={styles.buttom_link} href="/trece/inmuebles/mapa/granada/0001">mzn 001 Granada</Link>
        <Link className={styles.buttom_link} href="/trece/inmuebles/lope-de-vega-146-c00555">lope de vega 146</Link>
    </main>
   )
}