
import { Container, Typography, Paper, Grid, Button } from '@mui/material';

const Review = () => {
  const mockData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    experience: [
      {
        company: "Company A",
        position: "Software Engineer",
        duration: "Jan 2020 - Present",
        description: "Developed web applications using React and Node.js.",
      },
      {
        company: "Company B",
        position: "Junior Developer",
        duration: "Jun 2018 - Dec 2019",
        description: "Assisted in developing e-commerce platforms.",
      },
    ],
    education: [
      {
        institution: "University X",
        degree: "B.Sc. in Computer Science",
        duration: "2014 - 2018",
      },
    ],
  };

  return (
    <Container style={{marginTop:"100px"}}>
      <Typography variant="h4" gutterBottom>
        Review Your Resume
      </Typography>
      <Paper style={{ padding: '16px', marginBottom: '16px' }}>
        <Typography variant="h6">Personal Information</Typography>
        <Typography>Name: {mockData.name}</Typography>
        <Typography>Email: {mockData.email}</Typography>
        <Typography>Phone: {mockData.phone}</Typography>
        <Typography>Address: {mockData.address}</Typography>
      </Paper>
      <Paper style={{ padding: '16px', marginBottom: '16px' }}>
        <Typography variant="h6">Experience</Typography>
        {mockData.experience.map((job, index) => (
          <div key={index} style={{ marginBottom: '16px' }}>
            <Typography variant="subtitle1">{job.company}</Typography>
            <Typography>Position: {job.position}</Typography>
            <Typography>Duration: {job.duration}</Typography>
            <Typography>Description: {job.description}</Typography>
          </div>
        ))}
      </Paper>
      <Paper style={{ padding: '16px', marginBottom: '16px' }}>
        <Typography variant="h6">Education</Typography>
        {mockData.education.map((edu, index) => (
          <div key={index} style={{ marginBottom: '16px' }}>
            <Typography variant="subtitle1">{edu.institution}</Typography>
            <Typography>Degree: {edu.degree}</Typography>
            <Typography>Duration: {edu.duration}</Typography>
          </div>
        ))}
      </Paper>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary">
            Edit
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Review;
