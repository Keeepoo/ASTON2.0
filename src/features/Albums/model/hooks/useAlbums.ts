import { useState, useEffect } from 'react';
import { albums } from '../../../../shared/lib/mocks/albums';

export interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: number;
}

export interface Album {
  id: number;
  title: string;
  description?: string;
  userId: number;
  photos: Photo[];
}

export interface UseAlbumsReturn {
  albums: Album[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useAlbums = (): UseAlbumsReturn => {
  const [albumsData, setAlbumsData] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAlbums = async () => {
    try {
      setLoading(true);
      setError(null);
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setAlbumsData(albums);
    } catch (err) {
      setError('Ошибка загрузки альбомов');
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchAlbums();
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return {
    albums: albumsData,
    loading,
    error,
    refetch
  };
};
