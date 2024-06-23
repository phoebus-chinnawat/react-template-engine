import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { FC } from 'react';
import { RenderData, WidgetData } from '../../../types';
import { renderWidgets } from '../../../widgets/utils/render';
import { Section } from '../components/Section';

interface IContactUsProps {
  data: RenderData;
}

export const ContactUs: FC<IContactUsProps> = props => {
  const widgets = props.data.section.contacts.widgets;
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
        {renderWidgets(widgets as WidgetData)}
      </Container>
    </Section>
  );
};
