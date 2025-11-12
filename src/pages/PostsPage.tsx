import React from 'react';
import { usePosts } from '../features/PostList/model/hooks/usePosts';
import PostList from '../widgets/PostList/PostList';
import Title from '../widgets/PostList/Title/Title';

const PostsPage: React.FC = () => {
  const { posts, users, loading, error } = usePosts();

  if (loading) {
    return <div>Загрузка постов...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки постов: {error}</div>;
  }

  return (
    <div>
      <Title />
      <PostList posts={posts} users={users} />
    </div>
  );
};

export default PostsPage;
