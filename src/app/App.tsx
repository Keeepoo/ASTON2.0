import MainLayout from "../shared/layouts/MainLayout";
import PostList from "../widgets/PostList/PostList";
import Title from "../widgets/PostList/Title/Title";
import { posts } from "../lib/mocks/posts";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <MainLayout>
        <Title></Title>
        <PostList posts={posts} />
      </MainLayout>
    </div>
  );
}

export default App;
