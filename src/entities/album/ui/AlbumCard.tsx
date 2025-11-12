import React from 'react';
import { Link } from 'react-router-dom';
import type { Album } from '../../../features/Albums/model/hooks/useAlbums';
import styles from './AlbumCard.module.css';

interface AlbumCardProps {
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <div className={styles.albumCard}>
      <div className={styles.albumHeader}>
        <h3 className={styles.albumTitle}>{album.title}</h3>
        {album.description && (
          <p className={styles.albumDescription}>{album.description}</p>
        )}
      </div>
      
      <div className={styles.photosPreview}>
        {album.photos.slice(0, 3).map((photo) => (
          <div key={photo.id} className={styles.photoThumbnail}>
            <img 
              src={photo.thumbnailUrl} 
              alt={photo.title}
              className={styles.thumbnailImage}
            />
          </div>
        ))}
        {album.photos.length > 3 && (
          <div className={styles.morePhotos}>
            +{album.photos.length - 3} фото
          </div>
        )}
      </div>
      
      <div className={styles.albumFooter}>
        <span className={styles.photoCount}>
          {album.photos.length} {album.photos.length === 1 ? 'фото' : 'фотографий'}
        </span>
        <Link to={`/albums/${album.id}/photos`} className={styles.viewPhotosButton}>
          Посмотреть все
        </Link>
      </div>
    </div>
  );
};

export default AlbumCard;
