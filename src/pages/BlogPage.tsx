// pages/BlogPage.tsx
import { Box, Typography } from "@mui/material";

export function BlogPage() {
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
          color: "#8b4513",
          textAlign: "center",
        }}
      >
        Blog is here
      </Typography>
    </Box>
  );
}
