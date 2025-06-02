import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.7),
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.18)',
        paddingX: 2,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left: Brand */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: '#2c3e50',
            letterSpacing: 1.5,
          }}
        >
          Eazisols
        </Typography>

        {/* Right: Nav Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {['Home', 'About', 'Services', 'Contact'].map((label) => (
            <Button
              key={label}
              sx={{
                color: '#2c3e50',
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: alpha('#2c3e50', 0.08),
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
