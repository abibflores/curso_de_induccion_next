import { Character } from "@/types"
import Image from "next/image"
import styles from "./Persons.module.css"

export const Persons = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character/2').then(res => res.json())
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Persons</h1>
            <ul className={styles.list}>
                {data.results.map((person: Character) => (
                    <li className={styles.item} key={person.id}>
                        <Image className={styles.item_img} src={person.image} alt={person.name} width={250} height={250} />
                        <h2 className={styles.item_title}>{person.name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}