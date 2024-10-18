'use client'
// app/components/HeroeVideo.tsx

import React, { useState } from 'react';
import styles from './HeroeVideo.module.css';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Cargamos el VideoPlayer dinámicamente al hacer click
const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
  loading: () => <div className={styles.skeleton}></div>, // Skeleton durante la carga
  ssr: false, // Evitar el SSR para cargar solo en cliente
});

export const HeroeVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoClick = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className={styles.heroContainer}>
      {isVideoLoaded ? (
        <VideoPlayer videoUrl="/videos/heroe-video.mp4" />
      ) : (
        <div className={styles.videoPoster} onClick={handleVideoClick}>
          <Image
            src="/images/heroe-video.png"
            alt="Product Preview"
            className={styles.posterImage}
            width={800}
            height={450}
          />
          <div className={styles.playIcon}>&#9658;</div> {/* Icono de play */}
        </div>
      )}
    </div>
  );
}
