// components/PageLayout.tsx
import { Box, CssBaseline } from "@mui/material";
import { Navigation } from "./Navigation";
import { LeftSidebar } from "./LeftSidebar";

interface PageLayoutProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  children: React.ReactNode;
  // About页面专用的props
  activeSection?: string;
  onSectionChange?: (sectionId: string) => void;
  onScrollToSection?: (sectionId: string) => void;
}

export function PageLayout({
  currentPage,
  onPageChange,
  children,
  activeSection,
  onScrollToSection,
}: PageLayoutProps) {
  return (
    <>
      <CssBaseline />
      <Box sx={{ overflow: "auto" }}>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            background: "#f5f5dc",
            fontFamily: "system-ui, -apple-system, sans-serif",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* 固定在顶部的导航栏 - 所有页面都显示 */}
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
              backgroundColor: "#deb887",
            }}
          >
            <Navigation currentPage={currentPage} onPageChange={onPageChange} />
          </Box>

          {/* 主要内容区域 - 在导航栏下方 */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              paddingTop: "80px", // 为顶部导航栏留出空间
              overflow: "hidden",
            }}
          >
            {/* About 页面的特殊布局：左侧边栏 + 右侧内容 */}
            {currentPage === "about" ? (
              <>
                {/* 左侧页内导航栏 */}
                <Box
                  sx={{
                    width: "250px",
                    flexShrink: 0,
                    overflow: "auto",
                  }}
                >
                  <LeftSidebar
                    activeSection={activeSection || "homepage"}
                    onScrollToSection={onScrollToSection || (() => {})}
                  />
                </Box>

                {/* 右侧主要内容区域 */}
                <Box
                  sx={{
                    flex: 1,
                    overflow: "auto",
                  }}
                >
                  {children}
                </Box>
              </>
            ) : (
              /* 其他页面的布局：全宽内容 */
              <Box
                sx={{
                  flex: 1,
                  overflow: "auto",
                }}
              >
                {children}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}