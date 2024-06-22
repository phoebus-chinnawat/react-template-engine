import { FC } from 'react';
import { Section } from '../components/Section';
import { Container, Grid, Typography } from '@mui/material';
import { ReviewCard } from '../components/ReviewCard';
import React from 'react';
import { BusinessData } from '../../../types';

interface IReviewersProps {
  data: BusinessData;
}

export const Reviewers: FC<IReviewersProps> = props => {
  return (
    <Section style={{ backgroundColor: '#f4f4f4' }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Customer Reviews
        </Typography>
        <Grid container spacing={4}>
          {props.data.reviewers.map((reviewer, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ReviewCard elevation={3}>
                <Typography variant="h6">{reviewer.name}</Typography>
                <Typography variant="body1">{reviewer.review}</Typography>
              </ReviewCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
