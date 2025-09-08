import { Box, Typography, Button } from "@mui/material";
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

export function AboutPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100%",
        px: { xs: 3, sm: 6, md: 8 },
        py: 4,
        gap: 30,
      }}
    >
      {/* 主要介绍块 */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: "60vw",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#fff",
          borderRadius: "16px",
          p: { xs: 4, md: 6 },
          mt: 30,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          maxWidth: "1300px",
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
              color: "#333",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Hi, I'm{" "}
            <Box
              component="span"
              sx={{
                display: "block",
                color: "#8b4513",
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
              color: "#666",
              mb: 3,
            }}
          >
            Frontend Developer
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              color: "#777",
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
              sx={{
                "& .MuiTooltip-tooltip": {
                  backgroundColor: "#333",
                  color: "white",
                  fontSize: "12px",
                },
                "& .MuiTooltip-arrow": {
                  color: "#333",
                },
              }}
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
                  color: "black",
                  borderRadius: "50%",
                  textDecoration: "none",
                  mx: { xs: "auto", md: 0 },
                  mt: 2,
                  mb: 6,
                  "&:hover": {
                    color: "#8b4513",
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
              backgroundColor: "#8b4513",
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
                backgroundColor: "#6d3710",
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
        sx={{
          width: "60vw",
          textAlign: "center",
          backgroundColor: "#fff",
          borderRadius: "16px",
          p: { xs: 4, md: 6 },
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          maxWidth: "1300px",
        }}
      >
        {/* Section Header */}
        <Typography
          variant="h2"
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#333",
            mb: 1,
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
            mb: 6,
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
              color: "#666",
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
              backgroundColor: "#8b4513",
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
                  color: "#333",
                  mb: 1,
                }}
              >
                Bachlor of Cybersecurity
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#8b4513",
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
                  color: "#777",
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
                backgroundColor: "#8b4513",
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
                backgroundColor: "#8b4513",
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
                  color: "#333",
                  mb: 1,
                }}
              >
                Master of Information Technology
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#8b4513",
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
                  color: "#777",
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
        sx={{
          width: "60vw",
          textAlign: "center",
          backgroundColor: "#fff",
          borderRadius: "16px",
          p: { xs: 4, md: 6 },
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          maxWidth: "1300px",
        }}
      >
        {/* Section Header */}
        <Typography
          variant="h2"
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#333",
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
          {/* Frontend */}
          <Box
            sx={{
              textAlign: "center",
              p: 3,
              borderRadius: "12px",
              backgroundColor: "#f8f9fa",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 25px rgba(139, 69, 19, 0.1)",
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
                backgroundColor: "#8b4513",
                borderRadius: "50%",
                mx: "auto",
                mb: 3,
              }}
            >
              <CodeIcon sx={{ fontSize: "2rem", color: "white" }} />
            </Box>
            <Typography
              sx={{
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "#333",
                mb: 2,
              }}
            >
              Frontend
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                alignItems: "center",
              }}
            >
              {[
                "React",
                "TypeScript",
                "JavaScript",
                "Next.js",
                "Tailwind CSS",
                "Material-UI",
              ].map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    px: 2,
                    py: 0.5,
                    backgroundColor: "white",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    color: "#666",
                    border: "1px solid #e0e0e0",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "#8b4513",
                      color: "white",
                      borderColor: "#8b4513",
                    },
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Backend */}
          <Box
            sx={{
              textAlign: "center",
              p: 3,
              borderRadius: "12px",
              backgroundColor: "#f8f9fa",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 25px rgba(139, 69, 19, 0.1)",
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
                backgroundColor: "#8b4513",
                borderRadius: "50%",
                mx: "auto",
                mb: 3,
              }}
            >
              <StorageIcon sx={{ fontSize: "2rem", color: "white" }} />
            </Box>
            <Typography
              sx={{
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "#333",
                mb: 2,
              }}
            >
              Backend
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                alignItems: "center",
              }}
            >
              {["Node.js", "Python", "PostgreSQL"].map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    px: 2,
                    py: 0.5,
                    backgroundColor: "white",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    color: "#666",
                    border: "1px solid #e0e0e0",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "#8b4513",
                      color: "white",
                      borderColor: "#8b4513",
                    },
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Tools & Design */}
          <Box
            sx={{
              textAlign: "center",
              p: 3,
              borderRadius: "12px",
              backgroundColor: "#f8f9fa",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 25px rgba(139, 69, 19, 0.1)",
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
                backgroundColor: "#8b4513",
                borderRadius: "50%",
                mx: "auto",
                mb: 3,
              }}
            >
              <BrushIcon sx={{ fontSize: "2rem", color: "white" }} />
            </Box>
            <Typography
              sx={{
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "#333",
                mb: 2,
              }}
            >
              Tools & Design
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                alignItems: "center",
              }}
            >
              {["Git", "AWS", "Figma"].map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    px: 2,
                    py: 0.5,
                    backgroundColor: "white",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    color: "#666",
                    border: "1px solid #e0e0e0",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "#8b4513",
                      color: "white",
                      borderColor: "#8b4513",
                    },
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* ===========Contact Me 块 ===========*/}
      <Box
        sx={{
          width: "60vw",
          textAlign: "center",
          backgroundColor: "#fff",
          borderRadius: "16px",
          p: { xs: 4, md: 6 },
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          maxWidth: "1300px",
          mb: 30,
        }}
      >
        {/* Section Header */}
        <Typography
          variant="h2"
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#333",
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
                color: "#8b4513",
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
                  color: "#333",
                  mb: 0.5,
                }}
              >
                Call me
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  color: "#777",
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
                color: "#8b4513",
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
                  color: "#333",
                  mb: 0.5,
                }}
              >
                E-mail
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  color: "#777",
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
                color: "#8b4513",
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
                  color: "#333",
                  mb: 0.5,
                }}
              >
                Location
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  color: "#777",
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
