import { useState, useEffect } from "react";
import { Box, Typography, CssBaseline, Button } from "@mui/material";

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

function HomePage() {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const firstLineText = useTypewriter("Hey There", 50);
  const secondLineText = useTypewriter(
    showSecondLine ? "I'm Haotian Wang" : "",
    50
  );

  useEffect(() => {
    if (firstLineText === "Hey There") {
      const timeout = setTimeout(() => {
        setShowSecondLine(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [firstLineText]);

  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
          fontWeight: "bold",
          color: "#8b4513",
          marginBottom: "0.5rem",
          lineHeight: 1.1,
          minHeight: "1.1em",
        }}
      >
        {firstLineText}
        {firstLineText.length < "Hey There".length && (
          <Box
            component="span"
            sx={{
              display: "inline-block",
              width: "3px",
              height: "0.9em",
              backgroundColor: "#8b4513",
              marginLeft: "2px",
              animation: "blink 1s infinite",
              "@keyframes blink": {
                "0%, 50%": { opacity: 1 },
                "51%, 100%": { opacity: 0 },
              },
            }}
          />
        )}
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
          fontWeight: "bold",
          color: "#8b4513",
          marginBottom: "1rem",
          lineHeight: 1.1,
          minHeight: "1.1em",
        }}
      >
        {secondLineText}
        {showSecondLine &&
          secondLineText.length < "I'm Haotian Wang".length && (
            <Box
              component="span"
              sx={{
                display: "inline-block",
                width: "3px",
                height: "0.9em",
                backgroundColor: "#8b4513",
                marginLeft: "2px",
                animation: "blink 1s infinite",
                "@keyframes blink": {
                  "0%, 50%": { opacity: 1 },
                  "51%, 100%": { opacity: 0 },
                },
              }}
            />
          )}
      </Typography>
    </Box>
  );
}

function BlogPage() {
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
      Blog is here
    </Typography>
  );
}

function AboutPage() {
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

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "blog":
        return <BlogPage />;
      case "about":
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

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
        {/* Navigation Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            gap: "20px",
            flexShrink: 0,
          }}
        >
          <Button
            onClick={() => setCurrentPage("home")}
            sx={{
              fontSize: "1.2rem",
              color: currentPage === "home" ? "#8b4513" : "#a0522d",
              fontWeight: currentPage === "home" ? "bold" : "normal",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgba(139, 69, 19, 0.1)",
              },
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => setCurrentPage("blog")}
            sx={{
              fontSize: "1.2rem",
              color: currentPage === "blog" ? "#8b4513" : "#a0522d",
              fontWeight: currentPage === "blog" ? "bold" : "normal",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgba(139, 69, 19, 0.1)",
              },
            }}
          >
            Blog
          </Button>
          <Button
            onClick={() => setCurrentPage("about")}
            sx={{
              fontSize: "1.2rem",
              color: currentPage === "about" ? "#8b4513" : "#a0522d",
              fontWeight: currentPage === "about" ? "bold" : "normal",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgba(139, 69, 19, 0.1)",
              },
            }}
          >
            About Me
          </Button>
        </Box>

        {/* Page Content */}
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
          {renderPage()}
        </Box>
      </Box>
    </>
  );
}

export default App;
