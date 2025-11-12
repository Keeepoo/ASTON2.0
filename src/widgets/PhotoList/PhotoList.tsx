import React, { useState } from 'react';
import PhotoCard from '../../entities/photo/ui/PhotoCard';
import PhotoViewer from '../PhotoViewer/PhotoViewer';
import type { Photo } from '../../features/Albums/model/hooks/useAlbums';
import styles from './PhotoList.module.css';

interface PhotoListProps {
  photos: Photo[];
}

const PhotoList: React.FC<PhotoListProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
    setSelectedPhoto(null);
  };

  if (photos.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>В этом альбоме пока нет фотографий.</p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.photoList}>
        {photos.map(photo => (
          <PhotoCard 
            key={photo.id} 
            photo={photo} 
            allPhotos={photos}
            onPhotoClick={handlePhotoClick}
          />
        ))}
      </div>

      {selectedPhoto && (
        <PhotoViewer
          photos={photos}
          currentPhoto={selectedPhoto}
          isOpen={isViewerOpen}
          onClose={handleCloseViewer}
        />
      )}
    </>
  );
};

export default PhotoList;
