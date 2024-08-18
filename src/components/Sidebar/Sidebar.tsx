// components/Sidebar.js
import Link from 'next/link';
import styles from './Sidebar.module.css';
export default function Sidebar() {
  return (
    <aside className={styles.container}>
      <nav>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/dashboard/analytics">Analytics</Link></li>
          <li><Link href="/dashboard/settings">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
