import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; 
import ArrowForwardIosIcon   from '@mui/icons-material/ArrowForwardIos';  
import logo from '../assets/logo.png';




const navItems = [                           
  { label: 'Home', active: true },
  { label: 'Pages' },
  { label: 'Services' },
  { label: 'Post Layout' },
  { label: 'Blog' },
  { label: 'Contact Us' },
];

function Navbar() {
  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.7),
        boxShadow: '0 8px 32px 0 rgba(31,38,135,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.18)',
        height: '130.25px',
        width: '100%',
        pr: '80px',
        pl: '80px',
        mr: 'auto',
        ml: 'auto',
        fontFamily: 'Roboto, sans-serif', 
         position: 'fixed',    
         top: 0,            
         zIndex: 1100,
        // lineHeight: 1.6,
       
      }}
    >
    
      <Toolbar className="container-fluid px-0" sx={{ justifyContent: 'center' ,height:"100%",}}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
  <img 
    src={logo}
    alt="eazisols"
    style={{ width: '40px', height: '40px', objectFit: 'contain' }}
  />
        <Typography variant="h5" 
        sx={{
       fontFamily: 'Poppins, sans-serif', 
       fontWeight: 700,                  
       fontSize: '32px',               
       color: '#0b0b2b',               
       letterSpacing: '-0.5px',   
        }}
        >
       Eazisols
        </Typography>
      </Box>

<<<<<<< Updated upstream
        {/* Right: Nav Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {['Home', 'About', 'Services', 'Contact Us'].map((label) => (
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
=======
       <Box className="d-none d-lg-flex" sx={{ gap: 3, justifyContent: 'end', ml: 35,}}>
  {navItems.map(({ label, active }) => (
    <Box className="nav-item-wrapper" key={label}>
      <Button
        disableRipple
        endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 16 }} />}
        sx={{
          px: 0,
          mt: 2,
          fontSize: '15px',
          fontWeight: 500,
          textTransform: 'none',
          color: active ? '#7c4dff' : '#0b0b2b',
          '& .MuiButton-endIcon': { ml: 0.5 },
          '&:hover': { backgroundColor: 'transparent', color: '#7c4dff' },
        }}
      >
        {label}
      </Button>
    </Box>
  ))}

  <Button
    variant="contained"
    endIcon={<ArrowForwardIosIcon sx={{ fontSize: 16 }} />}
    className="get-quote"
    sx={{
      fontSize: '14px',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontFamily: 'Roboto, sans-serif',
      padding: '20px 28px',
      minWidth: '150px',
      backgroundColor: '#7c4dff',
      '&:hover': {
        backgroundColor: '#6b3dff',
        boxShadow: 'none',
      },
    }}
  >
    Get a quote
  </Button>
</Box>
        
>>>>>>> Stashed changes
      </Toolbar>
 
    </AppBar>
  );
}

export default Navbar;
