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
        <Navigation currentPage={currentPage} onPageChange={onPageChange} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: currentPage === "home" ? "flex-start" : "center",
            paddingLeft: currentPage === "home" ? "60px" : "0px",
            flex: 1,
            overflow: "hidden",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
