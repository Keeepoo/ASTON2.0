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

export const albums: Album[] = [
  {
    id: 1,
    title: "Мои проекты",
    description: "Фотографии моих веб-проектов и достижений в программировании",
    userId: 1,
    photos: [
      {
        id: 1,
        title: "Первый React проект",
        url: "https://picsum.photos/800/600?random=1",
        thumbnailUrl: "https://picsum.photos/300/200?random=1",
        albumId: 1
      },
      {
        id: 2,
        title: "TypeScript приложение",
        url: "https://picsum.photos/800/600?random=2",
        thumbnailUrl: "https://picsum.photos/300/200?random=2",
        albumId: 1
      },
      {
        id: 3,
        title: "Веб-сайт портфолио",
        url: "https://picsum.photos/800/600?random=3",
        thumbnailUrl: "https://picsum.photos/300/200?random=3",
        albumId: 1
      }
    ]
  }
];
