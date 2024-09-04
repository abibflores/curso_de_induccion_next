import Image from "next/image"
import styles from "./Card.module.css"

export const Card = ({ data }: { data: Character }) => {
    // crea un componente Card que recibe un objeto data de tipo Character con iamgen y todos los datos del personaje

    return (
        <div className={styles.container}>
            <Image className={styles.img} src={data.image} alt={data.name} width={250} height={250} />
            <h1 className={styles.title}>{data.name}</h1>
            <p className={styles.status}>{data.status}</p>
            <p className={styles.species}>{data.species}</p>
        </div>
    )
}