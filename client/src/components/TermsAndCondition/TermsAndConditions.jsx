// import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';

const TermsAndConditions = () => {
  return (
    <Container style={{marginTop:"6rem"}}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our Resume Builder web app! Please read these terms and conditions carefully before using our service.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          1. Introduction
        </Typography>
        <Typography variant="body1" paragraph>
          By accessing or using our web app, you agree to be bound by these terms and conditions.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          2. User Responsibilities
        </Typography>
        <Typography variant="body1" paragraph>
          You are responsible for maintaining the confidentiality of your account and password.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          3. Use of the Service
        </Typography>
        <Typography variant="body1" paragraph>
          You agree not to use the service for any unlawful or prohibited activities.
        </Typography>
        {/* Add more sections as necessary */}
        <Typography variant="h5" component="h2" gutterBottom>
          4. Termination
        </Typography>
        <Typography variant="body1" paragraph>
          We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          5. Changes to Terms
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to modify or replace these terms at any time.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          6. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about these Terms, please contact us.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
