import styles from './Locations.module.css'

export const Locations = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/location').then(res => res.json())

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Locations</h1>
            <ul className={styles.list}>
                {data.results.map((location: any) => (
                    <li className={styles.item} key={location.id}>{location.name}</li>
                ))}
            </ul>
        </div>
    )
}