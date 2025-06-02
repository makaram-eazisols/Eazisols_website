import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
} from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web apps built with modern technologies.',
    icon: <WebIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
  },
  {
    title: 'Software Solutions',
    description: 'Tailor-made software to automate and scale your business.',
    icon: <CodeIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
  }
];

function ServicesSection() {
  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: '#f4f6f8' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          gutterBottom
          sx={{ color: '#2c3e50' }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 6, color: '#555' }}
        >
          Eazisols delivers modern, scalable, and secure digital services tailored to your needs.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(5px)',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', color: '#666' }}>
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServicesSection;
