// pages/BlogPage.tsx
import { Box, Typography } from "@mui/material";
import { useTheme } from "../contexts/ThemeContext";

export function BlogPage() {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
          fontWeight: "bold",
          color: theme.colors.primary,
          textAlign: "center",
        }}
      >
        Blog is here
      </Typography>
    </Box>
  );
}
