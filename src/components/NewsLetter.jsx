import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import img9 from "../assets/img9.png";

const NewsLetter = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #7b55ec 0%, #806bf7 100%)",
        py: 10,
        px: 2,
        mt: 10,
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flex: { xs: "100%", md: "0 0 41.6667%", lg: "0 0 33.3333%" },
              maxWidth: { xs: "100%", md: "41.6667%", lg: "33.3333%" },
              display: "flex",
              justifyContent: "center",
              mb: { xs: 4, md: 0 },
            }}
            className="slide-in-left"
          >
            <Box
              component="img"
              src={img9}
              alt="Icon Cluster"
              className="paneffect"
              sx={{ width: "100%", maxWidth: "360px", height: "auto" }}
            />
          </Box>

          {/* Right Text + Email Area */}
          <Box
            sx={{
              flex: { xs: "100%", md: "0 0 58.3333%", lg: "0 0 66.6667%" },
              maxWidth: { xs: "100%", md: "58.3333%", lg: "66.6667%" },
              px: { xs: 0, md: 2 },
            }}
            className="slide-in-right" 
          >
            {/* TEXT CONTENT */}
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                Newsletter
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "32px", md: "56px" },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  mb: 0,
                }}
              >
                SUBSCRIBE TO OUR
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "32px", md: "56px" },
                  fontWeight: 900,
                  mb: 3,
                }}
              >
                NEWSLETTER
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#e0dfff",
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                Curabitur eleifend nibh sit amet ex posuere, vel malesuada
                turpis pretium. Quisque et tincidunt risus, a tempor massa. Cras
                tempor egestas libero, eu laoreet enim pharetra non.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: "4px",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                maxWidth: "500px",
                height: "60px",
                overflow: "hidden",
              }}
            >
              <input
                type="email"
                placeholder="Email Address"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "0 20px",
                  fontSize: "16px",
                  fontFamily: "Arial, sans-serif",
                  height: "100%",
                  borderRadius: "2px",
                }}
              />
              <button
                style={{
                  backgroundColor: "#5e4edb",
                  color: "#fff",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "0 30px",
                  cursor: "pointer",
                  height: "80%",
                  marginRight: "7px",
                  borderRadius: "2px",
                  textTransform: "uppercase",
                }}
              >
                Subscribe Now
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetter;
