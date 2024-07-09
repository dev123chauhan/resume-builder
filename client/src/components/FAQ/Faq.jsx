// import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Faq = () => {
  return (
    <Container style={{marginTop:"6rem"}}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is a resume builder?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A resume builder is an online tool that helps you create a professional resume quickly and easily.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How do I use the resume builder?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To use the resume builder, simply sign up, log in, and follow the step-by-step instructions to create your resume.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Is the resume builder free?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our resume builder offers both free and premium plans. The free plan provides basic features, while the premium plan offers advanced options and templates.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* Add more FAQ items as necessary */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography>How can I contact support?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can contact our support team via email at support@example.com or through the contact form on our website.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default Faq;
