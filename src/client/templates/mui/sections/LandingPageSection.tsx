import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { BusinessData } from '../../../types';
import { Content } from '../components/Content';

const BackgroundImage = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(https://i.pinimg.com/564x/8e/b8/71/8eb871e702b44fa39d4bae621a645672.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  textAlign: 'center',
  padding: theme.spacing(3),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
}));

interface LandingPageSection {
  business: BusinessData;
}

const LandingPageSection: React.FC<LandingPageSection> = props => {
  return (
    <BackgroundImage>
      <Content>
        <Typography variant="h2" component="h1" gutterBottom>
          {props.business.shopName}
        </Typography>
        <Typography variant="h5" paragraph>
          {props.business.description}
        </Typography>
        <Button variant="contained" color="primary">
          Explore Menu
        </Button>
      </Content>
    </BackgroundImage>
  );
};

export default LandingPageSection;
