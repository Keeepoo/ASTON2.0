type Comment = { id: number; text: string };
type Post = { id: number; title: string; text: string; comments: Comment[] };

export function filterByLength(posts: Post[], minLength: number): Post[] {
  return posts
    .filter(post => post.title.length >= minLength)
    .sort((a, b) => b.title.length - a.title.length);
}