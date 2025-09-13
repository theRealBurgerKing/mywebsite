// components/Navigation.tsx
import { Box, Button } from "@mui/material";
import { useTheme } from "../contexts/ThemeContext";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navigationItems = [
  { key: "home", label: "Home" },
  { key: "blog", label: "Blog" },
  { key: "work", label: "Work" },
  { key: "about", label: "About Me" },
];

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: "20px",
        pl: "5vw",
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
            color: currentPage === key ? theme.colors.primary : theme.colors.secondary,
            fontWeight: "normal",
            textTransform: "none",
            border:
              currentPage === key
                ? `2px solid ${theme.colors.primary}`
                : `2px solid transparent`,
            borderRadius: "8px",
            padding: "8px 16px",
            "&:hover": {
              backgroundColor: theme.colors.hover,
              border: `2px solid ${theme.colors.secondary}`,
            },
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
}
