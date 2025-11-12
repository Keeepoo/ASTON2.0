import React from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../features/PostList/model/hooks/usePosts';
import UserProfile from '../entities/user/ui/UserProfile';

const PostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, users, loading, error } = usePosts();
  
  if (loading) {
    return <div>Загрузка поста...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки поста: {error}</div>;
  }

  const post = posts.find(p => p.id === Number(id));
  const author = post ? users.find(u => u.id === post.userId) : null;

  if (!post) {
    return <div>Пост не найден</div>;
  }

  return (
    <div>
      {author && (
        <div style={{ marginBottom: '1.5rem' }}>
          <UserProfile user={author} />
        </div>
      )}
      
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      
      {post.comments && post.comments.length > 0 && (
        <div>
          <h3>Комментарии:</h3>
          {post.comments.map(comment => (
            <div key={comment.id} style={{ 
              padding: '0.75rem', 
              marginBottom: '0.5rem', 
              backgroundColor: 'var(--bg-secondary, #f5f5f5)',
              borderRadius: '8px'
            }}>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostDetailPage;
