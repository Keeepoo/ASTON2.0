import styles from './PostCard.module.css';

type PostCardProps = {
    title: string;
    text: string;
  };
  
  function PostCard({ title, text }: PostCardProps) {
    return (
      <div className={styles.postCard}>
        <h2 className={styles.title}>
          {title}
        </h2>
        <p className={styles.text}>
          {text}
        </p>
      </div>
    );
  }
  
export default PostCard;