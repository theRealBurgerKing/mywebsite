import { Box, Typography, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import avatarImage from "../assets/avatar.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import { Tooltip } from "@mui/material";
import { useTheme } from "../contexts/ThemeContext";

interface AboutPageProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  onScrollToSectionRef: React.MutableRefObject<((sectionId: string) => void) | null>;
}

export function AboutPage({ activeSection, onSectionChange, onScrollToSectionRef }: AboutPageProps) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Section配置
  const sections = [
    { id: "homepage", label: "Homepage" },
    { id: "qualification", label: "Qualification" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  
  // 添加时间计算函数
  const getTimeAgo = (targetDate: string) => {
    const now = new Date();
    const target = new Date(targetDate);
    const diffInMs = now.getTime() - target.getTime();

    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInYears > 0) {
      return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
    } else if (diffInMonths > 0) {
      return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
    } else if (diffInWeeks > 0) {
      return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;
    } else {
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    }
  };

  // Tech Stack 数据配置
  const techStackData = [
    {
      title: "Frontend",
      icon: CodeIcon,
      technologies: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "Material-UI"]
    },
    {
      title: "Backend", 
      icon: StorageIcon,
      technologies: ["Node.js", "Python", "PostgreSQL"]
    },
    {
      title: "Tools & Design",
      icon: BrushIcon,
      technologies: ["Git", "AWS", "Figma"]
    }
  ];

  // Tech Category 组件
  const TechCategory = ({ title, icon: IconComponent, technologies }: {
    title: string;
    icon: React.ComponentType<any>;
    technologies: string[];
  }) => (
    <Box
      sx={{
        textAlign: "center",
        p: 3,
        borderRadius: "12px",
        backgroundColor: theme.colors.background,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px",
          backgroundColor: theme.colors.primary,
          borderRadius: "50%",
          mx: "auto",
          mb: 3,
        }}
      >
        <IconComponent sx={{ fontSize: "2rem", color: "white" }} />
      </Box>
      <Typography
        sx={{
          fontSize: "1.4rem",
          fontWeight: "600",
          color: theme.colors.text,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
        }}
      >
        {technologies.map((tech) => (
          <Box
            key={tech}
            sx={{
              px: 2,
              py: 0.5,
              backgroundColor: "white",
              borderRadius: "20px",
              fontSize: "0.9rem",
              color: theme.colors.textSecondary,
              //border: `1px solid ${theme.colors.border}`,
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: theme.colors.primary,
                color: "white",
              },
            }}
          >
            {tech}
          </Box>
        ))}
      </Box>
    </Box>
  );
  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    if (sectionsRef.current) {
      sectionsRef.current[index] = el;
    }
  };

  // 滚动到指定section的函数
  // const scrollToSection = (sectionId: string) => {
  //   const sectionIndex = sections.findIndex(section => section.id === sectionId);
  //   if (sectionIndex !== -1 && sectionsRef.current[sectionIndex]) {
  //     onSectionChange(sectionId);
  //     setIsScrolling(true);
  //     sectionsRef.current[sectionIndex]?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //     // 防止过快滚动
  //     setTimeout(() => {
  //       setIsScrolling(false);
  //     }, 1000);
  //   }
  // };
    // 将scrollToSection函数设置到ref中，供外部调用
  useEffect(() => {
    onScrollToSectionRef.current = scrollToSection;
    return () => {
      onScrollToSectionRef.current = null;
    };
  }, [onScrollToSectionRef]);

  // 在 scrollToSection 函数中也添加调试
  const scrollToSection = (sectionId: string) => {
    const sectionIndex = sections.findIndex(section => section.id === sectionId);
    
    if (sectionIndex !== -1 && sectionsRef.current[sectionIndex]) {
      onSectionChange(sectionId);
      setIsScrolling(true);
      sectionsRef.current[sectionIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    } else {
      console.log('cant find section ref');
    }
  };
  // 将scrollToSection函数设置到ref中，供外部调用
  useEffect(() => {
    onScrollToSectionRef.current = scrollToSection;
    return () => {
      onScrollToSectionRef.current = null;
    };
  }, [onScrollToSectionRef]);

  // 当activeSection重置为homepage时，自动滚动到第一个section
  useEffect(() => {
    if (activeSection === "homepage" && sectionsRef.current[0]) {
      // 延迟一点时间确保组件完全渲染
      const timer = setTimeout(() => {
        sectionsRef.current[0]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeSection]);


  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
  
    const handleWheel = (e: WheelEvent) => {
      // 检查事件是否来自容器内部，且不在滚动状态
      if (!container.contains(e.target as Node) || isScrolling) return;
      
      e.preventDefault();
      setIsScrolling(true);
  
      const availableSections = sectionsRef.current.filter(Boolean);
      const delta = e.deltaY;
      
      // 找到当前活跃section的索引
      const currentIndex = sections.findIndex(section => section.id === activeSection);
      let nextIndex = currentIndex;
  
      if (delta > 0 && currentIndex < availableSections.length - 1) {
        // 向下滚动
        nextIndex = currentIndex + 1;
      } else if (delta < 0 && currentIndex > 0) {
        // 向上滚动
        nextIndex = currentIndex - 1;
      } else {
        // 没有变化，直接返回
        setIsScrolling(false);
        return;
      }
  
      // 更新活跃section
      if (sections[nextIndex]) {
        onSectionChange(sections[nextIndex].id);
      }
  
      // 滚动到目标区块
      availableSections[nextIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  
      // 防止过快滚动
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };
  
    // 延迟启用wheel事件监听，确保左侧导航完成初始化
    const timer = setTimeout(() => {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }, 300);
  
    return () => {
      clearTimeout(timer);
      container.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolling, sections, onSectionChange, activeSection]);

  // 添加滚动监听器来检测当前可见的section
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrolling) return; // 如果正在程序化滚动，不更新状态

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestSection = "";
      let minDistance = Infinity;

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const sectionRect = section.getBoundingClientRect();
          const sectionCenter = sectionRect.top + sectionRect.height / 2;
          const distance = Math.abs(containerCenter - sectionCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestSection = sections[index]?.id || "";
          }
        }
      });

      if (closestSection && closestSection !== activeSection) {
        onSectionChange(closestSection);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isScrolling, activeSection, sections, onSectionChange]);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        px: { xs: 3, sm: 6, md: 8 },
        py: 4,
        gap: 0,
        overflow: "hidden",
      }}
    >
      {/* 主要介绍块 */}
      <Box
        id="homepage"
        ref={setSectionRef(0)}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: "60vw",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: theme.colors.surface,
          borderRadius: "16px",
          p: { xs: 4, md: 6 },
          mt: 30,
          mb: "100vh",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          maxWidth: "1300px",
          minHeight: "60vh",
        }}
      >
        {/* 左侧文字内容 */}
        <Box
          sx={{
            flex: 1,
            maxWidth: "750px",
            textAlign: { xs: "center", md: "left" },
            pl: 10,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              fontWeight: "bold",
              color: theme.colors.text,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Hi, I'm{" "}
            <Box
              component="span"
              sx={{
                display: "block",
                color: theme.colors.primary,
                fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
                textTransform: "uppercase",
                letterSpacing: "0.02em",
              }}
            >
              HAOTIAN WANG
            </Box>
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
              fontWeight: "500",
              color: theme.colors.textSecondary,
              mb: 3,
            }}
          >
            Frontend Developer
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              color: theme.colors.textSecondary,
              lineHeight: 1.6,
              mb: 4,
              maxWidth: "600px",
              mx: { xs: "auto", md: 0 },
            }}
          >
            High level experience in web design and development knowledge,
            producing quality work with modern technologies and best practices.
          </Typography>
          {/* Github按钮 */}
          <Box>
            <Tooltip
              title="https://github.com/theRealBurgerKing"
              arrow
              placement="top"
              // sx={{
              //   "& .MuiTooltip-tooltip": {
              //     backgroundColor: "#333",
              //     color: "white",
              //     fontSize: "12px",
              //   },
              //   "& .MuiTooltip-arrow": {
              //     color: theme.colors.text,
              //   },
              // }}
            >
              <Box
                component="a"
                href="https://github.com/theRealBurgerKing"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  color: theme.colors.text,
                  borderRadius: "50%",
                  textDecoration: "none",
                  mx: { xs: "auto", md: 0 },
                  mt: 2,
                  mb: 6,
                  "&:hover": {
                    color: theme.colors.primary,
                  },
                }}
              >
                <GitHubIcon
                  sx={{
                    fontSize: "40px",
                    display: "block",
                  }}
                />
              </Box>
            </Tooltip>
          </Box>
          <Button
            sx={{
              backgroundColor: theme.colors.primary,
              color: "white",
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: "500",
              borderRadius: "8px",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              gap: 1,
              mx: { xs: "auto", md: 0 },
              "&:hover": {
                backgroundColor: theme.colors.hover,
                transform: "translateY(-2px)",
                transition: "all 0.3s ease",
              },
              "&:after": {
                content: '"→"',
                fontSize: "1.2rem",
                transition: "transform 0.3s ease",
              },
              "&:hover:after": {
                transform: "translateX(4px)",
              },
            }}
          >
            Contact Me
          </Button>
        </Box>

        {/* 右侧头像区域 */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "250px", sm: "300px", md: "350px" },
            height: { xs: "250px", sm: "300px", md: "350px" },
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src={avatarImage}
            alt="Haotian Wang"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid rgba(255, 255, 255, 0.9)",
            }}
          />
        </Box>
      </Box>

      {/* Qualification 块 */}
      <Box
        id="qualification"
        ref={setSectionRef(1)}
        sx={{
          width: "60vw",
          textAlign: "center",
          backgroundColor: theme.colors.surface,
          borderRadius: "16px",
          p: { xs: 4, md: 6 },
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          maxWidth: "1300px",
          mb: "100vh",
          minHeight: "54vh",
        }}
      >
        {/* Section Header */}
        <Typography
          variant="h2"
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: theme.colors.text,
            mb: 1,
            mt:3,
          }}
        >
          Qualification
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            color: "#666",
            mb: 6,
          }}
        >
          My personal journey
        </Typography>

        {/* Tabs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            mb: 4,
            mt:10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#8b4513",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            <SchoolIcon sx={{ fontSize: "1.5rem" }} />
            Education
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: theme.colors.textSecondary,
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            <WorkIcon sx={{ fontSize: "1.5rem" }} />
            Work
          </Box>
        </Box>

        {/* Timeline */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "800px",
            mx: "auto",
            textAlign: "left",
            mt: 6,
          }}
        >
          {/* Timeline Line */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              backgroundColor: theme.colors.primary,
              transform: "translateX(-50%)",
            }}
          />

          {/* Timeline Items */}
          {/* First one */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 8,
              position: "relative",
            }}
          >
            <Box
              sx={{
                flex: 1,
                textAlign: "right",
                pr: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  color: theme.colors.text,
                  mb: 1,
                }}
              >
                Bachlor of Cybersecurity
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: theme.colors.primary,
                  mb: 2,
                }}
              >
                Beijing Institute of Technology
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 1,
                  color: theme.colors.textSecondary,
                  fontSize: "0.9rem",
                }}
              >
                <CalendarTodayIcon sx={{ fontSize: "1rem" }} />
                2020 - 2024
              </Box>
            </Box>

            {/* Timeline Dot */}
            <Box
              sx={{
                width: "16px",
                height: "16px",
                backgroundColor: theme.colors.primary,
                borderRadius: "50%",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            />

            <Box sx={{ flex: 1 }} />
          </Box>

          {/* Second one */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 8,
              position: "relative",
            }}
          >
            <Box sx={{ flex: 1 }} />

            {/* Timeline Dot */}
            <Box
              sx={{
                width: "16px",
                height: "16px",
                backgroundColor: theme.colors.primary,
                borderRadius: "50%",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            />

            <Box
              sx={{
                flex: 1,
                textAlign: "left",
                pl: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  color: theme.colors.text,
                  mb: 1,
                }}
              >
                Master of Information Technology
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: theme.colors.primary,
                  mb: 2,
                }}
              >
                University of New South Wales
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: theme.colors.textSecondary,
                  fontSize: "0.9rem",
                }}
              >
                <CalendarTodayIcon sx={{ fontSize: "1rem" }} />
                2024-PRESENT
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Tech Stack 块 */}
      <Box
        id="tech-stack"
        ref={setSectionRef(2)}
        sx={{
          width: "60vw",
          textAlign: "center",
          backgroundColor: theme.colors.surface,
          borderRadius: "16px",
          p: { xs: 4, md: 6 },
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          maxWidth: "1300px",
          mb: "100vh",
          minHeight: "60vh",
        }}
      >
        {/* Section Header */}
        <Typography
          variant="h2"
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: theme.colors.text,
            mb: 1,
          }}
        >
          Tech Stack
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            color: "#666",
            mb: 6,
          }}
        >
          Technologies I work with
        </Typography>

        {/* Tech Categories */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            maxWidth: "1000px",
            mx: "auto",
          }}
        >
          {techStackData.map((category) => (
            <TechCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              technologies={category.technologies}
            />
          ))}
        </Box>
      </Box>
      {/* Projects 块 */}
      <Box
        id="projects"
        ref={setSectionRef(3)}
        sx={{
          width: "60vw",
          textAlign: "center",
          backgroundColor: theme.colors.surface,
          borderRadius: "16px",
          p: { xs: 4, md: 6 },
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          maxWidth: "1300px",
          mb: "100vh",
          minHeight: "60vh",
          // 添加原始CSS动画效果
          "& .post-module": {
            position: "relative",
            zIndex: 1,
            display: "block",
            background: "#FFFFFF",
            minWidth: "270px",
            height: "470px",
            boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
            transition: "all 0.3s linear 0s",
          },
          "& .post-module:hover": {
            boxShadow: "0px 1px 35px 0px rgba(0, 0, 0, 0.3)",
          },
          "& .post-module:hover .thumbnail img": {
            transform: "scale(1.1)",
            opacity: 0.6,
          },
          // 添加hover时description显示的动画
          "& .post-module:hover .description": {
            display: "block !important",
            height: "auto !important",
            opacity: "1 !important",
            animation: "fadeInUp 0.3s ease-out",
          },
          "& .post-module .thumbnail": {
            background: "#000000",
            height: "400px",
            overflow: "hidden",
          },
          "& .post-module .thumbnail .date": {
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 1,
            background: "#8b4513",
            width: "55px",
            height: "55px",
            padding: "12.5px 0",
            borderRadius: "100%",
            color: "#FFFFFF",
            fontWeight: 700,
            textAlign: "center",
            boxSizing: "border-box",
          },
          "& .post-module .thumbnail .date .day": {
            fontSize: "18px",
          },
          "& .post-module .thumbnail .date .month": {
            fontSize: "12px",
            textTransform: "uppercase",
          },
          "& .post-module .thumbnail img": {
            display: "block",
            width: "120%",
            transition: "all 0.3s linear 0s",
          },
          "& .post-module .post-content": {
            position: "absolute",
            bottom: 0,
            background: "#FFFFFF",
            width: "100%",
            padding: "30px",
            boxSizing: "border-box",
            transition: "all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s",
          },
          "& .post-module .post-content .category": {
            position: "absolute",
            top: "-34px",
            left: 0,
            background: "#8b4513",
            padding: "10px 15px",
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: 600,
            textTransform: "uppercase",
          },
          "& .post-module .post-content .title": {
            margin: 0,
            padding: "0 0 10px",
            color: "#333333",
            fontSize: "30px",
            fontWeight: 700,
          },
          "& .post-module .post-content .sub_title": {
            margin: 0,
            padding: "0 0 20px",
            color: "#8b4513",
            fontSize: "16px",
            fontWeight: 400,
          },
          "& .post-module:hover .post-content": {
            transform: "translateY(-60px)",
          },
          "& .post-module .post-content .description": {
            display: "none",
            color: "#666666",
            fontSize: "14px",
            lineHeight: "1.8em",
          },
          "& .post-module .post-content .post-meta": {
            margin: "30px 0 0",
            color: "#999999",
          },
          "& .post-module .post-content .post-meta .timestamp": {
            margin: "0 16px 0 0",
          },
          "& .post-module .post-content .post-meta a": {
            color: "#999999",
            textDecoration: "none",
          },
          "& .hover .post-content .description": {
            display: "block !important",
            height: "auto !important",
            opacity: "1 !important",
          },
          // 添加淡入动画
          "@keyframes fadeInUp": {
            "0%": {
              opacity: 0,
              transform: "translateY(20px)",
            },
            "100%": {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >
        {/* Section Header */}
        <Typography
          variant="h2"
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: theme.colors.text,
            mb: 1,
          }}
        >
          Projects
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            color: "#666",
            mb: 6,
          }}
        >
          My recent work
        </Typography>

        {/* Cards Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 6,
            justifyContent: "center",
            flexWrap: "nowrap",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          {/* Card 1 - Normal */}
          <Box
            component="a"
            href="https://github.com/theRealBurgerKing/bigbrain"
            target="_blank"
            rel="noopener noreferrer"
            className="post-module"
          >
            {/* Thumbnail */}
            <Box className="thumbnail">
              <Box
                component="img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"
              />
            </Box>

            {/* Post Content */}
            <Box className="post-content">
              <Box className="category">Web App</Box>
              <Typography component="h1" className="title">
                Bigbrain
              </Typography>
              <Typography component="h2" className="sub_title">
                A gamified online quiz platform
              </Typography>
              <Typography component="p" className="description">
                A full-stack e-commerce solution built with React and Node.js,
                featuring user authentication, payment processing, and inventory
                management.
              </Typography>
              <Box className="post-meta">
                <Box component="span" className="timestamp">
                  🕒 {getTimeAgo("2025-04-05")}
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Card 2 - Hover state示例 */}
          <Box
            component="a"
            href="https://github.com/theRealBurgerKing/lurkforwork"
            target="_blank"
            rel="noopener noreferrer"
            className="post-module"
          >
            {/* Thumbnail */}
            <Box className="thumbnail">
              <Box
                component="img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"
              />
            </Box>

            {/* Post Content */}
            <Box className="post-content">
              <Box className="category">Mobile App</Box>
              <Typography component="h1" className="title">
                lurkforwork
              </Typography>
              <Typography component="h2" className="sub_title">
                A LinkedIn-inspired social networking platform
              </Typography>
              <Typography component="p" className="description">
                A cross-platform mobile app for task management with real-time
                collaboration, built using React Native and Firebase.
              </Typography>
              <Box className="post-meta">
                <Box component="span" className="timestamp">
                  🕒 {getTimeAgo("2025-03-05")}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Contact Me 块 */}
      <Box
        id="contact"
        ref={setSectionRef(4)}
        sx={{
          width: "60vw",
          textAlign: "center",
          backgroundColor: theme.colors.surface,
          borderRadius: "16px",
          p: { xs: 4, md: 6 },
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          maxWidth: "1300px",
          mb: 30,
          minHeight: "35vh",
        }}
      >
        {/* Section Header */}
        <Typography
          variant="h2"
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: theme.colors.text,
            mb: 1,
          }}
        >
          Contact me
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            color: "#666",
            mb: 2,
          }}
        >
          Get in touch
        </Typography>

        {/* Contact Items */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "flex-start",
            maxWidth: "500px",
            mx: "auto",
          }}
        >
          {/* Call me */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "24px",
                height: "24px",
                color: theme.colors.primary,
                fontSize: "1.5rem",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PhoneIcon></PhoneIcon>
            </Box>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: theme.colors.text,
                  mb: 0.5,
                }}
              >
                Call me
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  color: theme.colors.textSecondary,
                }}
              >
                +61 0481239388
              </Typography>
            </Box>
          </Box>

          {/* E-mail */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "24px",
                height: "24px",
                color: theme.colors.primary,
                fontSize: "1.5rem",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MailOutlineIcon />
            </Box>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: theme.colors.text,
                  mb: 0.5,
                }}
              >
                E-mail
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  color: theme.colors.textSecondary,
                }}
              >
                haotianwang2001@gmail.com
              </Typography>
            </Box>
          </Box>

          {/* Location */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "24px",
                height: "24px",
                color: theme.colors.primary,
                fontSize: "1.5rem",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GpsFixedIcon />
            </Box>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: theme.colors.text,
                  mb: 0.5,
                }}
              >
                Location
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  color: theme.colors.textSecondary,
                }}
              >
                Sydney, Australia
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
