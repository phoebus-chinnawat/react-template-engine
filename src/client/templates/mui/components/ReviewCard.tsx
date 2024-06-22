import { Paper, styled } from '@mui/material';

export const ReviewCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'left',
  marginBottom: theme.spacing(2),
}));
