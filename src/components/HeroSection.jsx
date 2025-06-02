import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

function HeroSection() {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?technology)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        color: 'white',
      }}
    >
      {/* Glass Overlay */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'left',
          maxWidth: 'md',
        }}
      >
        <Typography variant="h2" fontWeight={700} gutterBottom>
          Welcome to Eazisols
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Building Innovative Software Solutions That Empower Businesses.
        </Typography>
        <Button variant="contained" size="large" sx={{ backgroundColor: '#1976d2' }}>
          Get Started
        </Button>
      </Container>
    </Box>
  );
}

export default HeroSection;
