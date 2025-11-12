export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "Денис Ганеев",
    email: "denis.ganeev@example.com",
    bio: "Студент ASTON, изучаю веб-разработку. Увлекаюсь React, TypeScript и современными технологиями фронтенда."
  },
  {
    id: 2,
    name: "Татьяна Фомичева", 
    email: "tatyana@example.com",
    bio: "HR-менеджер, ищу талантливых разработчиков"
  },
  {
    id: 3,
    name: "Олег Петров",
    email: "oleg@example.com", 
    bio: "Фотограф и путешественник"
  }
];
