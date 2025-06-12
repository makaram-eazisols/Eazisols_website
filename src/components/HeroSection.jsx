import React from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import pic5 from "../assets/pic5.png";
import CustomButton from "./reusable/CustomButton";

function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9ff",
        display: "flex",
        height: "80vh",
        marginTop:'80px',
        alignItems: "center",
        overflow: "hidden",
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
          <Box 
          sx={{ flex: 1, width:'80%', }}
          className="slide-in-left"
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#7a7a7a",
                letterSpacing: "1px",
                mb: 1,
              }}
            >
              WE CREATE IDEAS
            </Typography>

            <Typography
              component="div"
              sx={{
                fontSize: "48px",
                fontWeight: 800,
                color: "#0d0c22",
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              HOW WE CAN HELP <br />
              YOUR{" "}
              <Box component="span" sx={{ color: "#8a6cff" }}>
                BUSINESS
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#555",
                mb: 4,
                lineHeight: 1.6,
                maxWidth: "90%",
              }}
            >
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque vitae ante at elit fringilla ac at purus.
            </Typography>

            <CustomButton variant="contained" endIcon={<ArrowForwardIcon />}>
              Learn More
            </CustomButton>
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
        ></Box>
      </Container>
    </Box>
  );
}

export default HeroSection;
