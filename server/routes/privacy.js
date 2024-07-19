const express = require('express');
const router = express.Router();
const privacyPolicy = {
    title: "Privacy Policy",
    introduction: "Welcome to our Resume Builder web app! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.",
    sections: [
      {
        title: "1. Information We Collect",
        content: "We may collect information about you in a variety of ways, including:",
        items: [
          "Personal Data: Name, email address, phone number, etc.",
          "Usage Data: Information about how you use our web app.",
          "Cookies and Tracking Technologies: We may use cookies to collect data."
        ]
      },
      {
        title: "2. Use of Your Information",
        content: "We use the information we collect to:",
        items: [
          "Provide and manage our services.",
          "Improve user experience.",
          "Communicate with you."
        ]
      },
      {
        title: "3. Disclosure of Your Information",
        content: "We may share information we have collected about you in certain situations:",
        items: [
          "By Law or to Protect Rights: If required by law, we may disclose your information.",
          "Third-Party Service Providers: We may share information with third parties that perform services for us."
        ]
      },
      {
        title: "4. Security of Your Information",
        content: "We use administrative, technical, and physical security measures to help protect your personal information."
      },
      {
        title: "5. Contact Us",
        content: "If you have any questions about this Privacy Policy, please contact us."
      }
    ]
  };



// Route to get about content
router.get('/privacy-policy', (req, res) => {
  res.json(privacyPolicy);
});

module.exports = router;
