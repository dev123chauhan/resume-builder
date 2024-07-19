const express = require('express');
const router = express.Router();
const termsAndConditions = {
    title: "Terms and Conditions",
    introduction: "Welcome to our Resume Builder web app! Please read these terms and conditions carefully before using our service.",
    sections: [
      {
        title: "1. Introduction",
        content: "By accessing or using our web app, you agree to be bound by these terms and conditions."
      },
      {
        title: "2. User Responsibilities",
        content: "You are responsible for maintaining the confidentiality of your account and password."
      },
      {
        title: "3. Use of the Service",
        content: "You agree not to use the service for any unlawful or prohibited activities."
      },
      {
        title: "4. Termination",
        content: "We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever."
      },
      {
        title: "5. Changes to Terms",
        content: "We reserve the right to modify or replace these terms at any time."
      },
      {
        title: "6. Contact Us",
        content: "If you have any questions about these Terms, please contact us."
      }
    ]
  };



// Route to get about content
router.get('/terms-and-conditions', (req, res) => {
  res.json(termsAndConditions);
});

module.exports = router;
