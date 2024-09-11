// app/users/[id]/page.tsx
import React from 'react';
import styles from './styles/singleProfile.module.css';

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

export async function generateMetadata ({ params }: UserPageProps) {
  const user = await fetchUser(params.profileId);

  return {
    title: `${user.name.firstname} ${user.name.lastname}`,
    description: `User Profile: ${user.username}`,
    alternates: {
      canonical: `/e-commerce/profile/${params.profileId}`
    },
    openGraph: {
      title: `${user.name.firstname} ${user.name.lastname}`,
      description: `User Profile: ${user.username}`,
      url: `/e-commerce/profile/${params.profileId}`,
      siteName: 'E-commerce',
      images: [
        {
          url: `/api/og/${params.profileId}`,
          alt: 'user-profile'
        }
      ],
      locale: 'en_MX',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${user.name.firstname} ${user.name.lastname}`,
      description: `User Profile: ${user.username}`,
      siteId: '',
      creator: '@rifamania',
      creatorId: '',
      images: {
        url: `/api/og/${params.profileId}`,
        alt: 'user-profile'
      }
    }
  }
}

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
