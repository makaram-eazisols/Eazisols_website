import React from 'react';
import { Avatar, IconButton, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import pic7 from '../assets/pic7.jpg';

const Clients = () => {
  return (
    <div
      style={{
        backgroundColor: '#f4f1ff',
        padding: '100px 0',
        fontFamily: "'Segoe UI', sans-serif",
        minHeight: '70vh',
        marginTop: '80px',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-6 slide-in-left">
            <Typography
              variant="subtitle1"
              sx={{
                color: '#5e5d5d',
                fontWeight: 600,
                fontSize: '18px',
                marginBottom: '16px',
              }}
            >
              TESTMONIAL
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#000',
                fontWeight: 900,
                fontSize: '52px',
                lineHeight: 1.2,
                marginBottom: '24px',
              }}
            >
              WHAT OUR <br /> CLIENTS SAY’S
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#5e5d5d',
                fontSize: '16px',
                maxWidth: '90%',
              }}
            >
              Nunc vel ligula ut erat scelerisque vehicula sit amet porttitor magna. Donec
              malesuada quis diam quis pellentesque.
            </Typography>
          </div>

          {/* Right Side */}
          <div className="col-md-6 slide-in-right" >
            <div
              style={{
                backgroundColor: '#fff',
                padding: '40px',
                marginTop: '32px',
                borderRadius: '12px',
                boxShadow: '0 8px 60px rgba(0, 0, 0, 0.07)',
                position: 'relative',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontStyle: 'italic',
                  color: '#4a4a4a',
                  fontSize: '16px',
                }}
              >
                Cras porttitor orci vel ex convallis congue. Aliquam et pharetra urna. Quisque
                auctor purus in nunc posuere, vitae condimentum odio mattis. Nulla hendrerit tellus
                tellus, sed pharetra dui vulputate sed.
              </Typography>

              <FormatQuoteIcon
                sx={{
                  position: 'absolute',
                  bottom: '100px',
                  left: '20px',
                  fontSize: '60px',
                  color: '#c5b3ff',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'center',
                  marginTop: '30px',
                }}
              >
                <div>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#000' }}>
                    Eity Akhter
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#6b5cff', fontSize: '14px', marginTop: '4px', marginLeft:"20%", }}
                  >
                    CEO & Founder
                  </Typography>
                </div>
                <Avatar
                  alt="Eity Akhter"
                  src={pic7}
                  sx={{
                    width: 60,
                    height: 60,
                    border: '3px solid #6b5cff',
                  }}
                />
              </div>
            </div>


            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '20px',
                marginTop: '30px',
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    backgroundColor: '#ece9ff',
                  },
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    backgroundColor: '#ece9ff',
                  },
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
