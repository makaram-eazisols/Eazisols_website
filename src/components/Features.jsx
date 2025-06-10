import React from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Box, Typography } from '@mui/material';
import pic3 from '../assets/pic3.png';

const Features = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.row}>
        <Box sx={styles.left}>
          <Typography sx={styles.subTitle}>FETURES</Typography>
          <Typography sx={styles.title}>OUR WORK FLOW</Typography>

          <Box sx={styles.workflowStep}>
            <Box sx={{ ...styles.iconBox, borderColor: '#ff4a5c', color: '#ff4a5c' }}>
              <LightbulbIcon sx={styles.icon} />
            </Box>
            <Box>
              <Typography sx={styles.stepTitle}>Idea & Analysis Gathering</Typography>
              <Typography sx={styles.stepText}>
                Mauris eleifend ipsum dolor, sit amet elementum tortor mattis interdum.
                Praesent ut lobortis purus.
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.workflowStep}>
            <Box sx={{ ...styles.iconBox, borderColor: '#ffae00', color: '#ffae00' }}>
              <LaptopMacIcon sx={styles.icon} />
            </Box>
            <Box>
              <Typography sx={styles.stepTitle}>Designing & Developing</Typography>
              <Typography sx={styles.stepText}>
                Mauris eleifend ipsum dolor, sit amet elementum tortor mattis interdum.
                Praesent ut lobortis purus.
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.workflowStep}>
            <Box sx={{ ...styles.iconBox, borderColor: '#00c7a5', color: '#00c7a5' }}>
              <RocketLaunchIcon sx={styles.icon} />
            </Box>
            <Box>
              <Typography sx={styles.stepTitle}>Testing & Launching</Typography>
              <Typography sx={styles.stepText}>
                Mauris eleifend ipsum dolor, sit amet elementum tortor mattis interdum.
                Praesent ut lobortis purus.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={styles.right}>
          <img src={pic3} alt="Workflow" style={{ width: '100%', height: 'auto' }} className='paneffect' />
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    padding: '100px 80px',
    backgroundColor: '#fff',
    // marginTop :'10px'
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '50px',
  },
  left: {
    flex: '1 1 50%',
    minWidth: '500px',
  },
  right: {
    flex: '1 1 45%',
    minWidth: '450px',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#888',
    marginBottom: '10px',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '48px',
    fontWeight: 900,
    color: '#000',
    lineHeight: 1.2,
    margin: '0 0 30px 0',
  },
  workflowStep: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '30px',
  },
  iconBox: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    border: '6px double',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 40,
  },
  stepTitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#0c001c',
    marginBottom: '8px',
  },
  stepText: {
    fontSize: '16px',
    color: '#6c757d',
  },
};

export default Features;
