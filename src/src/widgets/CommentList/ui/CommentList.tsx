import React from 'react';
import styles from './CommentList.module.css';

type Comment = { id: number; text: string };

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <ul className={styles.commentList}>
      {comments.map(comment => (
        <li key={comment.id} className={styles.commentItem}>
          <p className={styles.commentText}>{comment.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;