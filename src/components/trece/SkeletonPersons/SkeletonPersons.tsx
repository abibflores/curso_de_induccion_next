import styles from "./SkeletonPersons.module.css";

export const SkeletonPersons = () => {
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Persons</h1>
          <ul className={styles.list}>
            {Array.from({ length: 5 }).map((_, index) => (
              <li className={styles.skeleton_item} key={index}>
                <div className={styles.skeleton_img}></div>
                <div className={styles.skeleton_text}></div>
              </li>
            ))}
          </ul>
        </div>
      );
}