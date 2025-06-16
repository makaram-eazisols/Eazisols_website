import React from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  InputAdornment,
  Stack,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListIcon from "@mui/icons-material/List";
import MessageIcon from "@mui/icons-material/Message";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import contact from "../assets/contact.png";
import bg19 from "../assets/bg19.png";
import CustomButton from './reusable/CustomButton';

const ContactUs = () => {
  return (
    <Box className="container"  
    sx={{
    py: 5,
    px: 2,
    backgroundImage: `url(${bg19})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        className="slide-in-left"
      >
        {/* Left: Form Section */}
        <Box flex={1} maxWidth="600px" mr={{ md: 4 }}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="textSecondary"
          >
            CONTACT US
          </Typography>
          <Typography variant="h3" gutterBottom style={{ fontWeight: 900 }}>
            GET IN TOUCH
          </Typography>

          <form>
            <Stack spacing={2}>
              {/* First + Last Name */}
              <Box display="flex" gap={2}>
                <TextField
                  fullWidth
                  placeholder="First Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="Last Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Email + Phone */}
              <Box display="flex" gap={2}>
                <TextField
                  fullWidth
                  placeholder="Email Address"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="Phone No."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Project Title + Service */}
              <Box display="flex" gap={2}>
                <TextField
                  fullWidth
                  placeholder="Project Title"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AssignmentIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  select
                  fullWidth
                  defaultValue=""
                  placeholder="Choose Service"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ListIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value="">Choose Service</MenuItem>
                  <MenuItem value="design">Design</MenuItem>
                  <MenuItem value="development">Development</MenuItem>
                  <MenuItem value="marketing">Marketing</MenuItem>
                </TextField>
              </Box>

              {/* Message */}
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Message"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MessageIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Submit */}
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  alignSelf: "flex-start",
                  px: 4,
                  py: 1.5,
                  backgroundColor: "#7B61FF",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Submit Now
              </Button>
            </Stack>
            {/* <CustomButton variant="contained">SUBMIT NOW</CustomButton> */}
          </form>
        </Box>

        {/* Right: Illustration */}
        <Box
          flex={1}
          mt={{ xs: 4, md: 0 }}
          display="flex"
          justifyContent="center"
          className="slide-in-right"
        >
          <img
            src={contact}
            alt="Contact Illustration"
            className="paneffect"
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
