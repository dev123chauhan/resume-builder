import  { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import axios from 'axios';

const TermsAndConditions = () => {
  const [terms, setTerms] = useState(null);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/terms-and-conditions');
        setTerms(response.data);
      } catch (error) {
        console.error('Error fetching terms and conditions:', error);
      }
    };

    fetchTerms();
  }, []);

  // if (!terms) return <div>Loading...</div>;

  return (
    <Container style={{ marginTop: "6rem" }}>
      <Box my={4}>
        <Typography style={{fontWeight:"bold"}} variant="h4" component="h1" gutterBottom>
          {terms?.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {terms?.introduction}
        </Typography>
        {terms?.sections.map((section, index) => (
          <div key={index}>
            <Typography variant="h5" component="h2" gutterBottom>
              {section?.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {section?.content}
            </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
