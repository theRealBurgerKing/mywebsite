// pages/AboutPage.tsx
import { Typography } from "@mui/material";

export function AboutPage() {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
        fontWeight: "bold",
        color: "#8b4513",
        textAlign: "center",
      }}
    >
      About is here
    </Typography>
  );
}
