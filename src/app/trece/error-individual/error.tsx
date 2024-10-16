'use client' // Error boundaries must be Client Components
 
import Link from 'next/link'
import { useEffect } from 'react'
import styles from './error.module.css'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Something went wrong!</h2>
        <p className={styles.description}>
            <strong>Error:</strong> cargando personaje
        </p>
      <Link className={styles.button} href='/'>ver a Rick</Link>
    </div>
  )
}