import React, { useState, useEffect, useCallback } from 'react';
import type { Photo } from '../../features/Albums/model/hooks/useAlbums';
import styles from './PhotoViewer.module.css';

interface PhotoViewerProps {
  photos: Photo[];
  currentPhoto: Photo;
  isOpen: boolean;
  onClose: () => void;
}

const PhotoViewer: React.FC<PhotoViewerProps> = ({ 
  photos, 
  currentPhoto, 
  isOpen, 
  onClose 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Находим индекс текущей фотографии
  useEffect(() => {
    const index = photos.findIndex(photo => photo.id === currentPhoto.id);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [currentPhoto, photos]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      const newIndex = prev === 0 ? photos.length - 1 : prev - 1;
      return newIndex;
    });
    
    setTimeout(() => setIsTransitioning(false), 300);
  }, [photos.length, isTransitioning]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      const newIndex = prev === photos.length - 1 ? 0 : prev + 1;
      return newIndex;
    });
    
    setTimeout(() => setIsTransitioning(false), 300);
  }, [photos.length, isTransitioning]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (event.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        goToPrevious();
        break;
      case 'ArrowRight':
        goToNext();
        break;
    }
  }, [isOpen, onClose, goToPrevious, goToNext]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhotoData = photos[currentIndex];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.viewerContainer} onClick={(e) => e.stopPropagation()}>
        {/* Кнопка закрытия */}
        <button className={styles.closeButton} onClick={onClose} aria-label="Закрыть просмотр">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Кнопка предыдущей фотографии */}
        {photos.length > 1 && (
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={goToPrevious}
            disabled={isTransitioning}
            aria-label="Предыдущее фото"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
        )}

        {/* Кнопка следующей фотографии */}
        {photos.length > 1 && (
          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={goToNext}
            disabled={isTransitioning}
            aria-label="Следующее фото"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        )}

        {/* Контейнер с фотографией */}
        <div className={styles.imageContainer}>
          <img
            src={currentPhotoData.url}
            alt={currentPhotoData.title}
            className={`${styles.image} ${isTransitioning ? styles.transitioning : ''}`}
          />
        </div>

        {/* Информация о фотографии */}
        <div className={styles.photoInfo}>
          <h3 className={styles.photoTitle}>{currentPhotoData.title}</h3>
          {photos.length > 1 && (
            <div className={styles.photoCounter}>
              {currentIndex + 1} из {photos.length}
            </div>
          )}
        </div>

        {/* Индикаторы фотографий */}
        {photos.length > 1 && (
          <div className={styles.indicators}>
            {photos.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => {
                  if (index !== currentIndex && !isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 300);
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoViewer;
