import type { Post } from '../../features/PostList/model/hooks/usePosts';

export function filterByLength(posts: Post[], minLength: number): Post[] {
  return posts
    .filter(post => post.title.length >= minLength)
    .sort((a, b) => b.title.length - a.title.length);
}