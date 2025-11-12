import MainLayout from "../shared/layouts/MainLayout";
import { ThemeProvider } from "../shared/lib/theme";
import PostList from "../widgets/PostList/PostList";
import Title from "../widgets/PostList/Title/Title";
import { posts } from "../shared/lib/mocks/posts";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Title></Title>
        <PostList posts={posts} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
