import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#1e1e2f',
        color: '#ffffff',
        pt: 6,
        pb: 4,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Eazisols
            </Typography>
            <Typography variant="body2" color="gray">
              Empowering businesses through modern technology and reliable solutions.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Services
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block">
              Web Development
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Software Solutions
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Cybersecurity
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Company
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block">
              About Us
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Contact
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Careers
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">Email: info@eazisols.com</Typography>
            <Typography variant="body2">Phone: +92 123 4567890</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        <Typography variant="body2" align="center" color="gray">
          © {new Date().getFullYear()} Eazisols. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
