import Link from "next/link"
import styles from "./Header.module.css"
import React from "react"

export const HeaderNew = () => {
    console.log('Rendering Header')
    return (
        <header className={styles.container}>
            <Link className={styles.link} href={`/trece/fetch`}>fetch</Link>
            <Link className={styles.link} href={`/trece/streaming`}>personajes</Link>
        </header>
    )
}