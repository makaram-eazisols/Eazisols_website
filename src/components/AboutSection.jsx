import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from './reusable/CustomButton';
import pic4 from '../assets/pic5.png';
import bg19 from '../assets/bg19.png';

const AboutSection = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.row}>
        <Box sx={styles.imageBox}
        className="slide-in-left">
          <img
            src={pic4}
            className="paneffect"
            alt="About"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>

        <Box sx={styles.contentBox}
        className="slide-in-right">
          <Typography component="h5" sx={styles.subTitle}>
            ABOUT US
          </Typography>

          <Typography component="h2" sx={styles.title}>
            HOW WE CAN <br />
            HELP YOUR <br />
            <Box component="span" sx={styles.highlight}>
              BUSINESS GOAL
            </Box>
          </Typography>

          <Typography sx={styles.text}>
            Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam,
            iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet,
            quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur ante eros id urna.
            Mauris luctus nulla ut pharetra tempor.
          </Typography>

          <Typography component="h4" sx={styles.ceo}>
            CEO Jhone Doe
          </Typography>

          <Box sx={styles.buttonWrapper}>
            <CustomButton variant="contained">Learn More</CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    padding: '115px 80px 85px 80px',
    backgroundColor: '#fff',
     backgroundImage: `url(${bg19})`,
    backgroundSize: 'cover',         
    backgroundPosition: 'center',   
    backgroundRepeat: 'no-repeat', 
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '50px',
  },
  imageBox: {
    flex: '1 1 50%',
    minWidth: '500px',
  },
  contentBox: {
    flex: '1 1 45%',
    minWidth: '450px',
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
    margin: '0 0 25px 0',
  },
  highlight: {
    color: '#7355f7',
  },
  text: {
    fontSize: '16px',
    color: '#888',
    lineHeight: 1.8,
    marginBottom: '30px',
  },
  ceo: {
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: '30px',
  },
  buttonWrapper: {
    marginTop: '10px',
  },
};

export default AboutSection;
