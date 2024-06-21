import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#795548',
    },
    secondary: {
      main: '#ffeb3b',
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
  },
  typography: {
    h5: {
      fontWeight: 600,
    },
  },
});

export default theme;
