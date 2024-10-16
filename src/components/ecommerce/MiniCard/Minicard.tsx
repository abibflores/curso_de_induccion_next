// components/MiniCardImage.tsx
import React from 'react';

type User = {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  username: string;
};

type MiniCardImageProps = {
  user: User;
};

const MiniCardImage: React.FC<MiniCardImageProps> = ({ user }) => {
  // Usamos Lorem Picsum para generar una imagen aleatoria basada en el ID del usuario
  const imageUrl = `https://picsum.photos/seed/${user.id}/150/150`;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        padding: '20px',
        maxWidth: '1000px',
        width: '100%',
        height: '560px',
        color: '#333',
        gap: '20px',
      }}
    >
      <img
        src={imageUrl}
        alt="User Image"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '10px',
          objectFit: 'cover',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            margin: 0,
            color: '#333',
          }}
        >
          {user.name.firstname} {user.name.lastname}
        </h3>
        <p style={{ margin: '5px 0', fontSize: '1rem', color: '#555' }}>
          <strong>Username:</strong> {user.username}
        </p>
        <p style={{ margin: '5px 0', fontSize: '1rem', color: '#555' }}>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};

export default MiniCardImage;
