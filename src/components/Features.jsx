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
          <Typography sx={styles.subTitle}>FEATURES</Typography>
          <Typography sx={styles.title}>OUR WORK FLOW</Typography>

          {/* Workflow Step 1 */}
          <Box sx={styles.workflowStep}>
            <Box sx={{ ...styles.iconWrapper, borderColor: '#ff4a5c' }}>
              <Box sx={{ ...styles.iconInner, backgroundColor: '#fff' }}>
                <LightbulbIcon sx={{ ...styles.icon, color: '#ff4a5c' }} />
              </Box>
            </Box>
            <Box>
              <Typography sx={styles.stepTitle}>Idea & Analysis Gathering</Typography>
              <Typography sx={styles.stepText}>
                Mauris eleifend ipsum dolor, sit amet elementum tortor mattis interdum.
                Praesent ut lobortis purus.
              </Typography>
            </Box>
          </Box>

          {/* Workflow Step 2 */}
          <Box sx={{ ...styles.workflowStep, ml: 8 }}>
            <Box sx={{ ...styles.iconWrapper, borderColor: '#ffae00' }}>
              <Box sx={{ ...styles.iconInner, backgroundColor: '#fff' }}>
                <LaptopMacIcon sx={{ ...styles.icon, color: '#ffae00' }} />
              </Box>
            </Box>
            <Box sx={{ pl: 4 }}>
              <Typography sx={styles.stepTitle}>Designing & Developing</Typography>
              <Typography sx={styles.stepText}>
                Mauris eleifend ipsum dolor, sit amet elementum tortor mattis interdum.
                Praesent ut lobortis purus.
              </Typography>
            </Box>
          </Box>

          {/* Workflow Step 3 */}
          <Box sx={styles.workflowStep}>
            <Box sx={{ ...styles.iconWrapper, borderColor: '#00c7a5' }}>
              <Box sx={{ ...styles.iconInner, backgroundColor: '#fff' }}>
                <RocketLaunchIcon sx={{ ...styles.icon, color: '#00c7a5' }} />
              </Box>
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
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  left: {
    flex: '1 1 50%',
    minWidth: '500px',
    position: 'relative',
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
    marginBottom: '45px',
    position: 'relative',
  },

  iconWrapper: {
    borderRadius: '50%',
    border: '4px dashed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  iconInner: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 0 5px rgba(0, 0, 0, 0.05)',
  },

  icon: {
    fontSize: 30,
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
