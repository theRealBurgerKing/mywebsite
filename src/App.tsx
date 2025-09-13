// App.tsx
import { useState, useRef, useEffect } from "react";
import { PageLayout } from "./components/PageLayout";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { WorkPage } from "./pages/WorkPage";
import { AboutPage } from "./pages/AboutPage";
import { ThemeProvider } from "./contexts/ThemeContext";
import { DraggableFloatingBlock } from "./components/DraggableFloatingBlock";

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
      case "work":
        return <WorkPage />;
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
  // 添加这个调试函数
  const handleScrollToSection = (sectionId: string) => {
    if (scrollToSectionRef.current) {
      scrollToSectionRef.current(sectionId);
    }
  };
  return (
    <ThemeProvider>
      <PageLayout 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onScrollToSection={handleScrollToSection}
      >
        {renderPage()}
      </PageLayout>
      <DraggableFloatingBlock />
    </ThemeProvider>
  );
}

export default App;
