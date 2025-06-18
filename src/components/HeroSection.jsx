import React, { useEffect } from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import pic5 from "../assets/pic5.png";
import bg18 from "../assets/bg18.png";
import hero2 from "../assets/hero2.png";
import CustomButton from "./reusable/CustomButton";

function HeroSection() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .slide-up {
      opacity: 0;
      animation: slideUp 1.2s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; 
      animation-fill-mode: both;
    }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9ff",
        display: "flex",
        height: "80vh",
        marginTop: "80px",
        alignItems: "center",
        overflow: "hidden",
        backgroundImage: `url(${hero2}), url(${bg18})`,
        backgroundSize: "contain, cover",
        backgroundPosition: "right center, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <Container maxWidth="lg" className="d-flex">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
        >
          {/* Text Content */}
          <Box sx={{ flex: 1, width: "80%" }}>
            <Typography
              className="slide-up"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#7a7a7a",
                letterSpacing: "1px",
                mb: 1,
              }}
              style={{ animationDelay: "0.1s" }}
            >
              WE CREATE IDEAS
            </Typography>

            <Typography
              component="div"
              className="slide-up"
              sx={{
                fontSize: "48px",
                fontWeight: 800,
                color: "#0d0c22",
                lineHeight: 1.2,
                mb: 2,
              }}
              style={{ animationDelay: "0.3s" }}
            >
              HOW WE CAN HELP <br />
              YOUR{" "}
              <Box component="span" sx={{ color: "#8a6cff" }}>
                BUSINESS
              </Box>
            </Typography>

            <Typography
              className="slide-up"
              sx={{
                fontSize: "16px",
                color: "#555",
                mb: 4,
                lineHeight: 1.6,
                maxWidth: "90%",
              }}
              style={{ animationDelay: "0.5s" }}
            >
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque vitae ante at elit fringilla ac at purus.
            </Typography>

            <div className="slide-up" style={{ animationDelay: "0.7s" }}>
              <CustomButton variant="contained">Learn More</CustomButton>
            </div>
          </Box>
        </Stack>
        <Box
          component="img"
          src={pic5}
          alt="Hero Illustration"
          className="paneffect slide-in-right"
          sx={{
            width: "100%",
            maxWidth: "550px",
            height: "auto",
            objectFit: "contain",
            flexShrink: 0,
            p: 0,
            mt: 3,
          }}
        />
      </Container>
    </Box>
  );
}

export default HeroSection;
