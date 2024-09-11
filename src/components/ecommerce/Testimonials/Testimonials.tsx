// app/components/Testimonials.tsx
import React from 'react';
import styles from './Testimonials.module.css';
import Image from 'next/image';

type User = {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  username: string;
};

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('https://fakestoreapi.com/users?limit=3');
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
};

const Testimonials: React.FC = async () => {
  const users = await fetchUsers();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>What Our Customers Say</h2>
      <div className={styles.testimonialsGrid}>
        {users.map((user) => (
          <div key={user.id} className={styles.testimonialCard}>
            <div className={styles.userAvatar}>
              <Image
                src={`https://i.pravatar.cc/150?img=${user.id}`}
                alt={`${user.name.firstname} ${user.name.lastname}`}
                className={styles.avatarImage}
                width={150}
                height={150}
              />
            </div>
            <div className={styles.testimonialInfo}>
              <h3 className={styles.userName}>
                {user.name.firstname} {user.name.lastname}
              </h3>
              <p className={styles.testimonialText}>
                &quot;This is the best store I&apos;ve ever shopped at. The quality of the products and customer service are unmatched!&quot;
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
