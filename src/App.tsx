// App.tsx
import { useState, useRef, useEffect } from "react";
import { PageLayout } from "./components/PageLayout";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeSection, setActiveSection] = useState("homepage");

  // 创建scrollToSection函数的引用
  const scrollToSectionRef = useRef<((sectionId: string) => void) | null>(null);

  // 当页面切换到about时，重置section为homepage
  useEffect(() => {
    if (currentPage === "about") {
      setActiveSection("homepage");
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "blog":
        return <BlogPage />;
      case "about":
        return <AboutPage 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
          onScrollToSectionRef={scrollToSectionRef}
        />;
      default:
        return <HomePage />;
    }
  };

  return (
    <PageLayout 
      currentPage={currentPage} 
      onPageChange={setCurrentPage}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      onScrollToSection={scrollToSectionRef.current || (() => {})}
    >
      {renderPage()}
    </PageLayout>
  );
}

export default App;
