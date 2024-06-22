import { FC } from 'react';
import { Section } from '../components/Section';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { BusinessData } from '../../../types';

interface IContactUsProps {
  data: BusinessData;
}

export const ContactUs: FC<IContactUsProps> = props => {
  return (
    <Section>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1">Phone: {props.data.contacts.phone}</Typography>
        <Typography variant="body1">Email: {props.data.contacts.email}</Typography>
        <Box component="form" mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Section>
  );
};
