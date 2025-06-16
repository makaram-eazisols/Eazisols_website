import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logo from "../assets/logo.png";
import CustomButton from "./reusable/CustomButton";
import { useState } from "react";
import Fade from "@mui/material/Fade";

const navItems = [
  { label: "Home", active: true },
  { label: "Pages" },
  { label: "Services" },
  { label: "Post Layout" },
  { label: "Blog" },
  { label: "Contact Us" },
];

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (label) => setOpenDropdown(label);
  const handleMouseLeave = () => setOpenDropdown(null);

  const dropdownContent = {
    Home: ["Home 1", "Home 2", "Home 3", "Home 4", "Home 5"],
    Pages: [
      "About Us",
      "FAQ",
      "Pricing Table",
      "Team",
      "Team Details",
      "Company history",
      "Coming soon",
      "error 404",
      "Site Down",
    ],
    Services: ["Services", "Services Details"],
    "Post Layout": {
      "Side Bar": [
        "Post Left Sidebar",
        "Post Right Sidebar",
        "Post Both Sidebar NEW",
        "Post No Sidebar",
      ],
      "Post Types": [
        "Text Post NEW",
        "Image Post",
        "Post Video",
        "Post Link",
        "Post Audio",
        "Post Quote NEW",
        "Tutorial Post NEW",
        "Cateloge Post NEW",
      ],
      "Multiple Media": [
        "Banner",
        "Post Slide Show NEW",
        "Gallery",
        "Status Slider NEW",
      ],
      "Post Layout Type": ["Standard Post", "Side Post NEW", "Corner Post NEW"],
    },
    Blog: ["page Layout", "Blog Sidebar"],
    "Contact Us": ["Contact Us 1", "Contact Us 2", "Contact Us 3"],
  };

  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.7),
        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.18)",
        height: "130.25px",
        width: "100%",
        pr: "80px",
        pl: "80px",
        mr: "auto",
        ml: "auto",
        fontFamily: "Roboto, sans-serif",
        position: "fixed",
        top: 0,
        zIndex: 1100,
        // lineHeight: 1.6,
      }}
    >
      <Toolbar
        className="container-fluid px-0"
        sx={{ justifyContent: "center", height: "100%" }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src={logo}
            alt="eazisols"
            style={{ width: "40px", height: "40px", objectFit: "contain" }}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "32px",
              color: "#0b0b2b",
              letterSpacing: "-0.5px",
            }}
          >
            Eazisols
          </Typography>
        </Box>

        <Box
          className="d-none d-lg-flex"
          sx={{ gap: 3, justifyContent: "end", ml: 35 }}
        >
          {navItems.map(({ label, active }) => (
            <Box
              key={label}
              onMouseEnter={() => handleMouseEnter(label)}
              onMouseLeave={handleMouseLeave}
              sx={{ position: "relative" }}
            >
              <Button
                disableRipple
                endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 16 }} />}
                sx={{
                  px: 0,
                  mt: 2,
                  fontSize: "15px",
                  fontWeight: 500,
                  textTransform: "none",
                  color: active ? "#7c4dff" : "#0b0b2b",
                  "& .MuiButton-endIcon": { ml: 0.5 },
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#7c4dff",
                  },
                }}
              >
                {label}
              </Button>

              <Fade in={openDropdown === label} timeout={300}>
                <Box
                  sx={{
                    display: openDropdown === label ? "block" : "none",
                    position: "absolute",
                    top: "100%",
                    left: label === "Post Layout" ? "50%" : 0,
                    transform:
                      label === "Post Layout" ? "translateX(-50%)" : "none",
                    backgroundColor: "#fff",
                    // boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                    mt: 1,
                    py: 2,
                    px: 2,
                    minWidth: "180px",
                    zIndex: 1200,
                    transition: "all 0.3s ease",
                    width: label === "Post Layout" ? "1000px" : "auto",
                  }}
                >
                  {label === "Post Layout" ? (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 0,
                      }}
                    >
                      {Object.entries(dropdownContent["Post Layout"]).map(
                        ([section, items]) => (
                          <Box key={section} sx={{ minWidth: "220px" }}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: 600,
                                fontSize: "14px",
                                color: "#0b0b2b",
                                mb: 1,
                              }}
                            >
                              {section}
                            </Typography>
                            {items.map((item) => (
                              <Box
                                key={item}
                                sx={{
                                  py: 0.5,
                                  fontSize: "14px",
                                  color: "#0b0b2b",
                                  "&:hover": {
                                    backgroundColor: "#f0f0f0",
                                    cursor: "pointer",
                                    mb: 1.5,
                                  },
                                }}
                              >
                                {item.includes("NEW") ? (
                                  <>
                                    {item.replace(" NEW", "")}{" "}
                                    <Box
                                      component="span"
                                      sx={{
                                        fontSize: "10px",
                                        backgroundColor: "#ff4d4f",
                                        color: "#fff",
                                        borderRadius: "4px",
                                        px: 0.5,
                                        ml: 0.5,
                                      }}
                                    >
                                      NEW
                                    </Box>
                                  </>
                                ) : (
                                  item
                                )}
                              </Box>
                            ))}
                          </Box>
                        )
                      )}
                    </Box>
                  ) : (
                    dropdownContent[label]?.map((item) => (
                      <Box
                        key={item}
                        sx={{
                          px: 2,
                          py: 1,
                          color: "#0b0b2b",
                          fontSize: "14px",
                          "&:hover": {
                            backgroundColor: "#f0f0f0",
                            cursor: "pointer",
                          },
                        }}
                      >
                        {item}
                      </Box>
                    ))
                  )}
                </Box>
              </Fade>
            </Box>
          ))}

          <CustomButton variant="contained">Get a quote</CustomButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
