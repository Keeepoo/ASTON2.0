import React from 'react';
import AlbumCard from '../../entities/album/ui/AlbumCard';
import type { Album } from '../../features/Albums/model/hooks/useAlbums';
import styles from './AlbumList.module.css';

interface AlbumListProps {
  albums: Album[];
}

const AlbumList: React.FC<AlbumListProps> = ({ albums }) => {
  if (albums.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>У вас пока нет альбомов. Создайте свой первый альбом!</p>
      </div>
    );
  }

  return (
    <div className={styles.albumList}>
      {albums.map(album => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumList;
