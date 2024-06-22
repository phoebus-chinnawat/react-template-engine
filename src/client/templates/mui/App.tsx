import { ThemeProvider } from '@emotion/react';
import { createTheme, Theme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { AppProps } from '../../types';
import { Navbar } from './components/Navbar';
import { ContactUs } from './sections/ContactUs';
import LandingPageSection from './sections/LandingPageSection';
import { Location } from './sections/Location';
import { Reviewers } from './sections/Reviewers';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#795548',
    },
    secondary: {
      main: '#ffeb3b',
    },
  },
});

export const MuiTemplate: React.FC<AppProps> = props => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar data={props.business} />
      <LandingPageSection business={props.business} />
      <Location data={props.business} />
      <Reviewers data={props.business} />
      <ContactUs data={props.business} />
    </ThemeProvider>
  );
};
