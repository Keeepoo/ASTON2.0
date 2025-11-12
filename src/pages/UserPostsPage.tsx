import React from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../features/PostList/model/hooks/usePosts';
import PostList from '../widgets/PostList/PostList';
import Title from '../widgets/PostList/Title/Title';

const UserPostsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, users, loading, error } = usePosts();

  if (loading) {
    return <div>Загрузка постов пользователя...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки постов: {error}</div>;
  }

  // Фильтруем посты по пользователю (в реальном приложении это будет делаться на сервере)
  const userPosts = posts.filter(post => post.userId === Number(id));
  const user = users.find(u => u.id === Number(id));

  return (
    <div>
      <Title />
      <h2>Посты пользователя {user?.name || id}</h2>
      <PostList posts={userPosts} users={users} />
    </div>
  );
};

export default UserPostsPage;
