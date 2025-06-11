import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import img9 from '../assets/img9.png';

const NewsLetter = () => {
 return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #7b55ec 0%, #806bf7 100%)',
        py: 10,
        px: 2,
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Container */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        {/* Row */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {/* Left Image */}
          <Box
            sx={{
              flex: { xs: '100%', md: '0 0 41.6667%', lg: '0 0 33.3333%' },
              maxWidth: { xs: '100%', md: '41.6667%', lg: '33.3333%' },
              display: 'flex',
              justifyContent: 'center',
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              component="img"
              src={img9}
              alt="Icon Cluster"
              sx={{ width: '100%', maxWidth: '360px', height: 'auto' }}
            />
          </Box>

          {/* Right Text + Email Area */}
          <Box
            sx={{
              flex: { xs: '100%', md: '0 0 58.3333%', lg: '0 0 66.6667%' },
              maxWidth: { xs: '100%', md: '58.3333%', lg: '66.6667%' },
              px: { xs: 0, md: 2 },
            }}
          >
            {/* TEXT CONTENT */}
            <Box>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  mb: 1,
                }}
              >
                Newsletter
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '32px', md: '56px' },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  mb: 0,
                }}
              >
                SUBSCRIBE TO OUR
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '32px', md: '56px' },
                  fontWeight: 900,
                  mb: 3,
                }}
              >
                NEWSLETTER
              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#e0dfff',
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                Curabitur eleifend nibh sit amet ex posuere, vel malesuada turpis
                pretium. Quisque et tincidunt risus, a tempor massa. Cras tempor
                egestas libero, eu laoreet enim pharetra non.
              </Typography>
            </Box>

            {/* EMAIL FORM */}
           {/* EMAIL FORM */}
<Box
  sx={{
    backgroundColor: '#fff',
    borderRadius: '5px',
    display: 'flex',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    maxWidth: '550px',
    overflow: 'hidden',
  }}
>
  <TextField
    placeholder="Email Address"
    variant="outlined"
    fullWidth
    InputProps={{
      style: {
        padding: '20px',
        fontSize: '16px',
        fontFamily: 'Arial, sans-serif',
        height: '60px', 
      },
      disableUnderline: true,
    }}
    sx={{
      '& .MuiOutlinedInput-root': {
        '& fieldset': { border: 'none' },
        height: '60px',
      },
    }}
  />
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#5e4edb',
      fontWeight: 'bold',
      fontSize: '16px',
      px: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60px',
      borderBottomRightRadius: '4px',
      '&:hover': {
        backgroundColor: '#4a3cc7',
      },
    }}
  >
    SUBSCRIBE NOW
  </Button>
</Box>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetter;
