import { Box, Typography } from "@mui/material";

interface LeftSidebarProps {
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
}

const sidebarItems = [
  { key: "homepage", label: "Homepage", sectionId: "homepage" },
  { key: "qualification", label: "Qualification", sectionId: "qualification" },
  { key: "tech-stack", label: "Tech Stack", sectionId: "tech-stack" },
  { key: "projects", label: "Projects", sectionId: "projects" },
  { key: "contact", label: "Contact", sectionId: "contact" },
];

// Helper function to determine if a sidebar item is active
const isSidebarItemActive = (itemKey: string, activeSection: string) => {
  return itemKey === activeSection;
};

export function LeftSidebar({ activeSection, onScrollToSection }: LeftSidebarProps) {
  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    onScrollToSection(sectionId);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        left: "20px", // 距离左边20px
        top: "50%", // 垂直居中
        transform: "translateY(-50%)", // 确保完全居中
        width: "200px",
        height: "30vh",
        zIndex: 1001,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        //border: "1px solid #8b4513",
      }}
    >

      {/* Navigation Items */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "transparent",
        }}
      >
        {sidebarItems.map((item, index) => (
          <Box key={item.key + index}>
            <Box
              onClick={() => scrollToSection(item.sectionId)}
              sx={{
                padding: "12px 20px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backgroundColor: isSidebarItemActive(item.key, activeSection) ? "rgba(139, 69, 19, 0.1)" : "transparent",
                borderRadius: "8px",
                margin: "2px 0",
                "&:hover": {
                  backgroundColor: "rgba(139, 69, 19, 0.15)",
                  transform: "translateX(5px)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: isSidebarItemActive(item.key, activeSection) ? "600" : "400",
                  color: isSidebarItemActive(item.key, activeSection) ? "#8b4513" : "#6B4E30",
                  fontFamily: "Arial, sans-serif",
                  textAlign: "left",
                  lineHeight: 1.3,
                  textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)", // 添加文字阴影以提高可读性
                }}
              >
                {item.label}
              </Typography>
            </Box>
            {/* Separator line */}
            {index < sidebarItems.length - 1 && (
              <Box
                sx={{
                  height: "1px",
                  backgroundColor: "rgba(107, 78, 48, 0.2)", // 更微妙的颜色
                  margin: "4px 20px",
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
