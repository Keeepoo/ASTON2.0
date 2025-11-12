import React from 'react';
import { useParams } from 'react-router-dom';
import { useAlbums } from '../features/Albums/model/hooks/useAlbums';
import PhotoList from '../widgets/PhotoList/PhotoList';

const AlbumPhotosPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { albums, loading, error } = useAlbums();

  if (loading) {
    return <div>Загрузка фотографий...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки фотографий: {error}</div>;
  }

  const album = albums.find(album => album.id === Number(id));

  if (!album) {
    return <div>Альбом не найден</div>;
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1>{album.title}</h1>
        {album.description && (
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            {album.description}
          </p>
        )}
      </div>
      
      <PhotoList photos={album.photos} />
    </div>
  );
};

export default AlbumPhotosPage;
