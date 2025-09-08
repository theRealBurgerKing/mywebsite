// components/TypewriterText.tsx
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

// Typewriter hook
function useTypewriter(text: string, speed: number = 100) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayText;
}

// Blinking cursor component
interface BlinkingCursorProps {
  color?: string;
}

function BlinkingCursor({ color = "#8b4513" }: BlinkingCursorProps) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        width: "3px",
        height: "0.9em",
        backgroundColor: color,
        marginLeft: "2px",
        animation: "blink 1s infinite",
        "@keyframes blink": {
          "0%, 50%": { opacity: 1 },
          "51%, 100%": { opacity: 0 },
        },
      }}
    />
  );
}

// Main TypewriterText component
interface TypewriterTextProps {
  text: string;
  speed?: number;
  variant?: "h1" | "h2" | "h3";
  showCursor?: boolean;
  color?: string;
  sx?: object;
}

export function TypewriterText({
  text,
  speed = 50,
  variant = "h1",
  showCursor = true,
  color = "#8b4513",
  sx = {},
}: TypewriterTextProps) {
  const displayText = useTypewriter(text, speed);
  const isComplete = displayText.length === text.length;

  return (
    <Typography
      variant={variant}
      sx={{
        fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
        fontWeight: "bold",
        color: color,
        mb: "0.5rem",
        lineHeight: 1.1,
        minHeight: "1.1em",
        ...sx,
      }}
    >
      {displayText}
      {showCursor && !isComplete && <BlinkingCursor color={color} />}
    </Typography>
  );
}
