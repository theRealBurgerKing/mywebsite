// pages/HomePage.tsx
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { TypewriterText } from "../components/TypewriterText";

export function HomePage() {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [firstLineComplete, setFirstLineComplete] = useState(false);

  useEffect(() => {
    // 监听第一行完成
    const timeout = setTimeout(() => {
      setFirstLineComplete(true);
      setShowSecondLine(true);
    }, "Hey There".length * 50 + 500); // 计算第一行完成时间 + 延迟

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        pl: "100px",
        height: "100%",
      }}
    >
      <Box sx={{ pl: "5rem" }}>
        <TypewriterText
          text="Hey There"
          speed={50}
          variant="h1"
          showCursor={!firstLineComplete}
        />

        {showSecondLine && (
          <TypewriterText
            text="I'm Haotian Wang"
            speed={50}
            variant="h2"
            sx={{ marginBottom: "1rem" }}
          />
        )}
      </Box>
    </Box>
  );
}
