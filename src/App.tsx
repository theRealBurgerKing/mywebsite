// App.tsx
import { useState } from "react";
import { PageLayout } from "./components/PageLayout";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "blog":
        return <BlogPage />;
      case "about":
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <PageLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </PageLayout>
  );
}

export default App;
