import React, { useMemo, useCallback } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';
import { filterByLength } from '../../shared/lib/filterByLength';
import type { Post, User } from '../../features/PostList/model/hooks/usePosts';

interface PostListProps {
  posts: Post[];
  users: User[];
  minTitleLength?: number;
}

const PostList: React.FC<PostListProps> = ({ posts, users, minTitleLength = 0 }) => {

  const filteredPosts = useMemo(() => filterByLength(posts, minTitleLength), [posts, minTitleLength]);

  const getAuthor = useCallback((userId: number) => {
    return users.find(user => user.id === userId);
  }, [users]);

  const renderPost = useCallback((post: Post) => {
    const author = getAuthor(post.userId);
    return (
      <PostCard
        key={post.id}
        id={post.id}
        title={post.title}
        text={post.text}
        comments={post.comments}
        author={author}
      />
    );
  }, [getAuthor]);

  return (
    <div className={styles.postList}>
      {filteredPosts.map(renderPost)}
    </div>
  );
};

export default PostList;
