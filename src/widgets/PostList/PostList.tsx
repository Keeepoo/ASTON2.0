import React, { useMemo, useCallback } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';
import { filterByLength } from '../../shared/lib/filterByLength';

type Comment = { id: number; text: string };
type Post = { id: number; title: string; text: string; comments: Comment[] };

interface PostListProps {
  posts: Post[];
  minTitleLength?: number;
}

const PostList: React.FC<PostListProps> = ({ posts, minTitleLength = 0 }) => {

  const filteredPosts = useMemo(() => filterByLength(posts, minTitleLength), [posts, minTitleLength]);

  const renderPost = useCallback((post: Post) => (
    <PostCard
      key={post.id}
      title={post.title}
      text={post.text}
      comments={post.comments}
    />
  ), []);

  return (
    <div className={styles.postList}>
      {filteredPosts.map(renderPost)}
    </div>
  );
};

export default PostList;
