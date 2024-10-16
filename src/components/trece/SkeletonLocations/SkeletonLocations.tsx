import styles from './SkeletonLocations.module.css';

export const SkeletonLocations = () => {
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Locations</h1>
          <ul className={styles.list}>
            {Array.from({ length: 5 }).map((_, index) => (
              <li className={styles.skeleton_item} key={index}>
                <div className={styles.skeleton_text}></div>
              </li>
            ))}
          </ul>
        </div>
      );
};
