import Link from "next/link"
import styles from "./Header.module.css"
import React from "react"

export const Header = ({ version }: { version: string }) => {
    console.log('Rendering Header')
    return (
        <header className={styles.container}>
            <Link className={styles.link} href={`/${version}/fetch`}>fetch</Link>
            <Link className={styles.link} href={`/${version}/seo`}>seo</Link>
            <Link className={styles.link} href={`/${version}/layout/details`}>details</Link>
        </header>
    )
}