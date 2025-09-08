// components/Naagiinotv.tsx;
import { Box, Button } from "@mui/material";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navigationItems = [
  { key: "home", label: "Home" },
  { key: "blog", label: "Blog" },
  { key: "about", label: "About Me" },
];

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        gap: "20px",
        flexShrink: 0,
      }}
    >
      {navigationItems.map(({ key, label }) => (
        <Button
          key={key}
          onClick={() => onPageChange(key)}
          sx={{
            fontSize: "1.2rem",
            color: currentPage === key ? "#8b4513" : "#a0522d",
            fontWeight: currentPage === key ? "bold" : "normal",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(139, 69, 19, 0.1)",
            },
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
}
