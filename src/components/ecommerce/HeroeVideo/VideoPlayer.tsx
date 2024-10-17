// app/components/VideoPlayer.tsx
import React from 'react';
import styles from './HeroeVideo.module.css';

type VideoPlayerProps = {
  videoUrl: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <video controls autoPlay className={styles.videoPlayer}>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
