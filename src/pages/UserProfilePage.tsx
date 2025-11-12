import React from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../features/PostList/model/hooks/usePosts';
import UserProfile from '../entities/user/ui/UserProfile';
import PostList from '../widgets/PostList/PostList';

const UserProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, users, loading, error } = usePosts();

  if (loading) {
    return <div>Загрузка профиля пользователя...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки данных: {error}</div>;
  }

  const userId = id ? Number(id) : 1;
  const user = users.find(u => u.id === userId);
  const userPosts = posts.filter(post => post.userId === userId);

  if (!user) {
    return <div>Пользователь не найден</div>;
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <UserProfile user={user} showBio />
      </div>
      
      <h2>Мои посты</h2>
      {userPosts.length > 0 ? (
        <PostList posts={userPosts} users={users} />
      ) : (
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--text-secondary, #666)', 
          fontStyle: 'italic',
          padding: '2rem'
        }}>
          У вас пока нет постов. Создайте свой первый пост!
        </p>
      )}
    </div>
  );
};

export default UserProfilePage;
