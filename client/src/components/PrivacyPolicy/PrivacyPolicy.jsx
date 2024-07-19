import  { useEffect, useState } from 'react';
import { Container, Typography, Box, List, ListItem } from '@mui/material';
import axios from 'axios';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const PrivacyPolicy = () => {
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/privacy-policy');
        setPolicy(response.data);
      } catch (error) {
        console.error('Error fetching privacy policy:', error);
      }
    };

    fetchPolicy();
  }, []);

  // if (!policy) return <div>Loading...</div>;

  return (
    <Container style={{ marginTop: "7rem" }}>
      <Box my={4}>
        <Typography style={{fontWeight:"bold"}} variant="h4" component="h1" gutterBottom>
          {policy?.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {policy?.introduction}
        </Typography>
        {policy?.sections.map((section, index) => (
          <div key={index}>
            <Typography variant="h5" component="h2" gutterBottom>
              {section?.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {section?.content}
            </Typography>
            {section?.items && (
              <List>
                {section?.items.map((item, idx) => (
              <ListItem key={idx}> <ArrowRightAltIcon color='primary'/> {item}</ListItem>
                ))}
              </List>
            )}
          </div>
        ))}
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
