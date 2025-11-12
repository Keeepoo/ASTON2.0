import React from 'react';
import { useParams } from 'react-router-dom';
import { useAlbums } from '../features/Albums/model/hooks/useAlbums';
import AlbumList from '../widgets/AlbumList/AlbumList';

const UserAlbumsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { albums, loading, error } = useAlbums();

  if (loading) {
    return <div>Загрузка альбомов...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки альбомов: {error}</div>;
  }

  // Фильтруем альбомы по пользователю
  const userAlbums = albums.filter(album => album.userId === Number(id));

  return (
    <div>
      <h1>Мои альбомы</h1>
      <AlbumList albums={userAlbums} />
    </div>
  );
};

export default UserAlbumsPage;
