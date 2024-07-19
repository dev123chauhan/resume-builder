const express = require('express');
const router = express.Router();
const features = [
    {
      title: "Easy to Use",
      description: "Our resume builder is user-friendly and easy to navigate. Simply enter your information, and the builder will take care of the rest."
    },
    {
      title: "Customizable Templates",
      description: "Choose from a variety of templates to match your style. Each template is fully customizable to ensure your resume stands out."
    },
    {
      title: "Download in Multiple Formats",
      description: "Download your resume in PDF, DOC, and more. We support various formats to ensure compatibility with different systems."
    },
    {
      title: "Auto-Save Feature",
      description: "Your progress is saved automatically, so you never have to worry about losing your data. Continue from where you left off, anytime."
    },
    {
      title: "Real-Time Preview",
      description: "See a real-time preview of your resume as you build it. This allows you to make instant adjustments and ensure everything looks perfect."
    },
    {
      title: "Professional Advice",
      description: "Get professional advice and tips on how to improve your resume. Our experts provide feedback to help you create the best resume possible."
    }
    // Add more feature items as necessary
  ];



// Route to get about content
router.get('/feature', (req, res) => {
  res.json(features);
});

module.exports = router;
