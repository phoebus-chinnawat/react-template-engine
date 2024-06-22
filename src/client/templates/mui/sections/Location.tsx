import { FC } from 'react';
import { Section } from '../components/Section';
import { Container, Typography } from '@mui/material';
import { BusinessData } from '../../../types';
import React from 'react';

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
