



import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container style={{ marginTop: "6rem" }}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our Resume Builder web app! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We may collect information about you in a variety of ways, including:
        </Typography>
        <ul>
          <li>Personal Data: Name, email address, phone number, etc.</li>
          <li>Usage Data: Information about how you use our web app.</li>
          <li>Cookies and Tracking Technologies: We may use cookies to collect data.</li>
        </ul>
        <Typography variant="h5" component="h2" gutterBottom>
          2. Use of Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use the information we collect to:
        </Typography>
        <ul>
          <li>Provide and manage our services.</li>
          <li>Improve user experience.</li>
          <li>Communicate with you.</li>
        </ul>
        <Typography variant="h5" component="h2" gutterBottom>
          3. Disclosure of Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We may share information we have collected about you in certain situations:
        </Typography>
        <ul>
          <li>By Law or to Protect Rights: If required by law, we may disclose your information.</li>
          <li>Third-Party Service Providers: We may share information with third parties that perform services for us.</li>
        </ul>
        {/* Add more sections as necessary */}
        <Typography variant="h5" component="h2" gutterBottom>
          4. Security of Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use administrative, technical, and physical security measures to help protect your personal information.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          5. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy, please contact us.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
