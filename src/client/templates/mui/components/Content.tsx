import { Container, styled } from '@mui/material';

export const Content = styled(Container)(({ theme }) => ({
  zIndex: 2,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));
