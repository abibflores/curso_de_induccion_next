import Link from "next/link"
import styles from "./HeaderPcom.module.css"

export const HeaderPcom = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Propiedades.com</h1>
            <div>
                <Link className={styles.link} href="/trece/inmuebles">home</Link>
                <Link className={styles.link} href="/trece/inmuebles/mapa/condesa">colonia</Link>
                <Link className={styles.link} href="/trece/inmuebles/mapa/granada/mzn001">mzn</Link>
                <Link className={styles.link} href="/trece/inmuebles/lope-de-vega-146">lote 146</Link>
            </div>
        </header>
    )
}