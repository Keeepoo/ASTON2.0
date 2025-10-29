import PostCard from "../../entities/post/ui/PostCard";
import styles from './PostList.module.css';

type Post = {
  id: number;
  title: string;
  text: string;
};

type PostListProps = {
  posts: Post[];
};

function PostList({ posts }: PostListProps) {
  return (
    <div className={styles.postList}>
      {posts.map(post => (
        <PostCard key={post.id} title={post.title} text={post.text} />
      ))}
    </div>
  );
}

export default PostList;