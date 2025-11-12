import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import CommentList from '../../../widgets/CommentList/ui/CommentList';
import UserProfile from '../../user/ui/UserProfile';
import styles from './PostCard.module.css';
import type { Comment, User } from '../../../features/PostList/model/hooks/usePosts';

interface PostCardProps {
  id: number;
  title: string;
  text: string;
  comments?: Comment[];
  author?: User;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, text, comments = [], author }) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = useCallback(() => {
    setShowComments(prev => !prev);
  }, []);

  return (
    <div className={styles.postCard}>
      {author && (
        <div className={styles.author}>
          <UserProfile user={author} compact />
        </div>
      )}
      
      <Link to={`/posts/${id}`} className={styles.titleLink}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <p className={styles.text}>{text}</p>

      {comments.length > 0 && (
        <>
          <button className={styles.toggleCommentsButton} onClick={toggleComments}>
            {showComments ? 'Скрыть комментарии' : 'Показать комментарии'}
          </button>
          {showComments && <CommentList comments={comments} />}
        </>
      )}
    </div>
  );
};

export default PostCard;
