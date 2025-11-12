import React, { useState, useCallback } from 'react';
import CommentList from '../../../widgets/CommentList/ui/CommentList';
import styles from './PostCard.module.css';

type Comment = { id: number; text: string };

interface PostCardProps {
  title: string;
  text: string;
  comments?: Comment[];
}

const PostCard: React.FC<PostCardProps> = ({ title, text, comments = [] }) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = useCallback(() => {
    setShowComments(prev => !prev);
  }, []);

  return (
    <div className={styles.postCard}>
      <h2 className={styles.title}>{title}</h2>
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
