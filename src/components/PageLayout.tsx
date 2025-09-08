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
          <Navigation currentPage={currentPage} onPageChange={onPageChange} />

          <Box
            sx={{
              flex: 1,
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
}
