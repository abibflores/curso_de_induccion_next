// app/@modal/page.tsx
import styles from "./sidebar.module.css"
export default async function SidebarPage(props: any) {
  const data = await fetch('https://rickandmortyapi.com/api/location').then(res => res.json())
  console.log(props, "sidebar")
  return (
    <div className={styles.container}>
      { data.results.map((location: any) => (
        <div className={styles.card_item} key={location.id}>
          <h2 className={styles.card_item_name}>{location.name}</h2>
          <p className={styles.card_item_type}>{location.type}</p>
          <p className={styles.card_item_dimension}>{location.dimension}</p>
        </div>
      )) }
    </div>
  );
}
