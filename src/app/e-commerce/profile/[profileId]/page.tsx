// app/users/[id]/page.tsx
import React from 'react';
import styles from './styles/singleProfile.module.css';
import MiniCard from '@/components/ecommerce/MiniCard/Minicard';

type User = {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  phone: string;
  username: string;
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
};

const fetchUser = async (id: string): Promise<User> => {
  const res = await fetch(`https://fakestoreapi.com/users/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }
  return res.json();
};

type UserPageProps = {
  params: { profileId: string };
};

export default async function UserProfilePage({ params }: UserPageProps) {
  const user = await fetchUser(params.profileId);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Profile</h1>
      <div className={styles.profileCard}>
        <h2 className={styles.userName}>
          {user.name.firstname} {user.name.lastname}
        </h2>
        <p className={styles.userInfo}><strong>Username:</strong> {user.username}</p>
        <p className={styles.userInfo}><strong>Email:</strong> {user.email}</p>
        <p className={styles.userInfo}><strong>Phone:</strong> {user.phone}</p>
        <h3 className={styles.addressTitle}>Address</h3>
        <p className={styles.userInfo}><strong>City:</strong> {user.address.city}</p>
        <p className={styles.userInfo}><strong>Street:</strong> {user.address.street}, {user.address.number}</p>
        <p className={styles.userInfo}><strong>Zipcode:</strong> {user.address.zipcode}</p>
      </div>
    </div>
  );
}
