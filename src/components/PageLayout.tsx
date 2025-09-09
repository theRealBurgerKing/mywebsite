// components/PageLayout.tsx
import { Box, CssBaseline } from "@mui/material";
import { Navigation } from "./Navigation";

interface PageLayoutProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  children: React.ReactNode;
}

export function PageLayout({
  currentPage,
  onPageChange,
  children,
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
            overflow: "auto",
          }}
        >
          {/* 固定在顶部的导航栏 */}
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

          {/* 主要内容区域*/}
          <Box
            sx={{
              flex: 1,
              paddingTop: "80px",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
}
