
import React from "react"
import { Card } from "@/components/Card/Card";
import { Character } from "@/types";
import styles from "./CardWithButton.module.css";

export const CardWithButton = ({ data }: { data: Character }) => {
    const handleClick = () => {
        console.log('Clicked')
    }

    return (
        <div className={styles.container}>
            <Card data={data} />
            <button onClick={handleClick} className={styles.button}>Click me</button>
        </div>
    )
}