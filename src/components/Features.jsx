import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Box, Typography } from "@mui/material";
import pic3 from "../assets/pic3.png";
import red from "../assets/red.png";
import yellow from "../assets/yellow.png";
import green from "../assets/green.png";
import pattern1 from "../assets/pattern1.png";

const Features = () => {
  return (
    <Box
      component="section"
      sx={{ padding: "100px 80px", backgroundColor: "#fff", marginTop: "80px" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            flex: "1 1 50%",
            minWidth: "500px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="slide-in-left"
        >
        
          <img
            src={pattern1}
            alt="curve"
            style={{
              position: "absolute",
              top: "276px",
              left: "151px",
              height: "281px", 
              zIndex: 1, 
              opacity: 1, 
              pointerEvents: "none",
                 
            }}
          />
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#888",
              marginBottom: "10px",
              textTransform: "uppercase",
            }}
          >
            FEATURES
          </Typography>
          <Typography
            sx={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#000",
              lineHeight: 1.2,
              margin: "0 0 30px 0",
            }}
          >
            OUR WORK FLOW
          </Typography>

          {/* Step 1 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              // marginBottom: "30px",
            }}
          >
            <Box
              className="image-container"
              sx={{
                width: "150px",
                height: "100px",
                position: "relative",
                marginLeft: "50px",
              }}
            >
              <Box
                className="background-rotator"
                sx={{
                  backgroundImage: `url(${red})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              />
              <Box
                className="icon-holder"
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                <LightbulbIcon sx={{ fontSize: 30, color: "#ff4a5c" }} />
              </Box>
              <Box
                className="icon-on-bg "
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  pointerEvents: "none",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <LightbulbIcon sx={{ fontSize: 30, color: "#fff" }} />
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#0c001c",
                  marginBottom: "8px",
                }}
              >
                Idea & Analysis Gathering
              </Typography>
              <Typography sx={{ fontSize: "16px", color: "#6c757d" }}>
                Mauris eleifend ipsum dolor, sit amet elementum tortor mattis
                interdum. Praesent ut lobortis purus.
              </Typography>
            </Box>
          </Box>

          {/* Step 2 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              // marginBottom: "px",
              marginLeft: "170px",
            }}
          >
            <Box
              className="image-container"
              sx={{ width: "150px", height: "100px", position: "relative" }}
            >
              <Box
                className="background-rotator"
                sx={{
                  backgroundImage: `url(${yellow})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              />

              <Box
                className="icon-holder"
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                <LaptopMacIcon sx={{ fontSize: 30, color: "#ffae00" }} />
              </Box>
              <Box
                className="icon-on-bg"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  pointerEvents: "none",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <LaptopMacIcon sx={{ fontSize: 30, color: "#fff" }} />
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#0c001c",
                  marginBottom: "8px",
                }}
              >
                Designing & Developing
              </Typography>
              <Typography sx={{ fontSize: "16px", color: "#6c757d" }}>
                Mauris eleifend ipsum dolor, sit amet elementum tortor mattis
                interdum. Praesent ut lobortis purus.
              </Typography>
            </Box>
          </Box>

          {/* Step 3 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "30px",
              marginLeft: "50px",
            }}
          >
            <Box
              className="image-container"
              sx={{ width: "150px", height: "100px", position: "relative" }}
            >
              <Box
                className="background-rotator"
                sx={{
                  backgroundImage: `url(${green})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              />
              <Box
                className="icon-holder"
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                <RocketLaunchIcon sx={{ fontSize: 30, color: "#00c7a5" }} />
              </Box>
              <Box
                className="icon-on-bg"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  pointerEvents: "none",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <RocketLaunchIcon sx={{ fontSize: 30, color: "#fff" }} />
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#0c001c",
                  marginBottom: "8px",
                }}
              >
                Testing & Launching
              </Typography>
              <Typography sx={{ fontSize: "16px", color: "#6c757d" }}>
                Mauris eleifend ipsum dolor, sit amet elementum tortor mattis
                interdum. Praesent ut lobortis purus.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Image */}
        <Box sx={{ flex: "1 1 45%", minWidth: "450px", textAlign: "center" }}
        className="slide-in-right">
          <img
            src={pic3}
            alt="Workflow"
            style={{ width: "100%", height: "auto" }}
            className="paneffect"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
