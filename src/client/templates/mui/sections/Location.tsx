import { Container, Typography } from '@mui/material';
import React, { FC } from 'react';
import { BusinessData } from '../../../types';
import { Section } from '../components/Section';

interface ILocationProps {
  data: BusinessData;
}

export const Location: FC<ILocationProps> = props => {
  return (
    <Section>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6">{props.data.description}</Typography>
        <Typography variant="body1" paragraph>
          Located at: {props.data.location}
        </Typography>
      </Container>
    </Section>
  );
};
