import React from 'react';
import { Box, Typography, Paper, Avatar } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    icon: <EmojiEmotionsIcon />,
    label: 'Satisfied Clients',
    value: '18',
    color: '#00B386',
  },
  {
    icon: <DesktopWindowsIcon />,
    label: 'Project Completed',
    value: '20',
    suffix: 'MI',
    color: '#FFA500',
  },
  {
    icon: <RocketLaunchIcon />,
    label: 'Project Lunched',
    value: '30',
    suffix: 'MI',
    color: '#6A35FF',
  },
  {
    icon: <CelebrationIcon />,
    label: 'Years Completed',
    value: '50',
    color: '#FF5E78',
  },
];

const Status = () => {
  return (
    <Box sx={{ backgroundColor: '#7D5FFF', height: '150px', marginBottom: '20px' }}>
      <Box
        className="container d-flex justify-content-center flex-wrap gap-4"
        sx={{
          gap: 3,
          pt: 5,
          mt: '-25px',
          mb: 5,
          position: 'relative',
          zIndex: 10,
        }}
      >
        {stats.map((stat, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.5,
          });

          return (
            <Paper
              elevation={4}
              key={index}
              ref={ref}
              sx={{
                width: 200,
                textAlign: 'center',
                padding: 3,
                borderRadius: 2,
                backgroundColor: '#fff',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', 
                },
              }}
            >
              <Avatar
                sx={{
                  margin: '0 auto',
                  bgcolor: stat.color,
                  width: 50,
                  height: 50,
                }}
              >
                {stat.icon}
              </Avatar>

              <Typography variant="subtitle1" sx={{ mt: 2, color: '#666', fontSize: '15px' }}>
                {stat.label}
              </Typography>

              <Typography variant="h4" sx={{ mt: 1, color: '#7D5FFF', fontWeight: 'bold' }}>
               <CountUp
               start={0}
               end={inView ? stat.value : 0}
               duration={4}
               suffix={stat.suffix || ''}
                />

              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
};

export default Status;
