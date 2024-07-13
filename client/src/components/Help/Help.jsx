import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';

const Help = () => {
  const faqs = [
    {
      question: "How do I create a new resume?",
      answer: "To create a new resume, go to the 'Create Resume' section from the dashboard. Fill out the required fields and save your progress."
    },
    {
      question: "How can I edit my profile?",
      answer: "You can edit your profile by navigating to the 'Profile' section in the dashboard and clicking on 'Edit Profile'. Make the necessary changes and save."
    },
    {
      question: "How do I download my resume?",
      answer: "After creating or editing your resume, you can download it by clicking the 'Download' button at the bottom of the resume preview."
    }
  ];

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Help & Support
        </Typography>

        <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Frequently Asked Questions (FAQs)
          </Typography>
          <List>
            {faqs.map((faq, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={faq.question}
                    secondary={faq.answer}
                  />
                </ListItem>
                {index < faqs.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Paper>

        <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography>
            If you have any further questions or need assistance, please contact us:
          </Typography>
          <Typography>
            Email: support@resumebuilder.com
          </Typography>
          <Typography>
            Phone: (123) 456-7890
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h5" gutterBottom>
            General Guidance
          </Typography>
          <Typography>
            Our resume builder is designed to help you create a professional resume with ease. Follow the step-by-step instructions, and utilize the provided templates and examples to craft your resume.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Help;
