import React, { useState } from 'react';
import type { Photo } from '../../../features/Albums/model/hooks/useAlbums';
import styles from './PhotoCard.module.css';

interface PhotoCardProps {
  photo: Photo;
  allPhotos?: Photo[];
  onPhotoClick?: (photo: Photo, allPhotos: Photo[]) => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, allPhotos = [], onPhotoClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handlePhotoClick = () => {
    if (onPhotoClick && allPhotos.length > 0) {
      onPhotoClick(photo, allPhotos);
    }
  };

  return (
    <div className={styles.photoCard}>
      <div className={styles.photoContainer}>
        {isLoading && (
          <div className={styles.loadingPlaceholder}>
            Загрузка...
          </div>
        )}
        <img
          src={photo.url}
          alt={photo.title}
          className={`${styles.photoImage} ${isLoading ? styles.hidden : ''}`}
          onLoad={handleImageLoad}
          onClick={handlePhotoClick}
        />
      </div>
      
      <div className={styles.photoInfo}>
        <h4 className={styles.photoTitle}>{photo.title}</h4>
      </div>
    </div>
  );
};

export default PhotoCard;
