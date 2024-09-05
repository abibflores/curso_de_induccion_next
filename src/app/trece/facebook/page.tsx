import Link from 'next/link';
import styles from './page.module.css';

export default function Page() {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className={styles.container}>
      {photos.map((id) => (
        <Link className={styles.buttom_link} key={id} href={`/trece/facebook/photo/${id}`} passHref>
          {id}
        </Link>
      ))}
    </section>
  );
}