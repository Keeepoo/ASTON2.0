import { BrowserRouter } from 'react-router-dom';
import MainLayout from "../shared/layouts/MainLayout";
import { ThemeProvider } from "../shared/lib/theme";
import { AppRouter } from "./providers/router";
import UserTabs from "../widgets/UserTabs/UserTabs";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout>
          <UserTabs />
          <AppRouter />
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
