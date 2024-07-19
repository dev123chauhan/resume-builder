const express = require('express');
const router = express.Router();
const faqs = [
    {
      question: "What is a resume builder?",
      answer: "A resume builder is an online tool that helps you create a professional resume quickly and easily."
    },
    {
      question: "How do I use the resume builder?",
      answer: "To use the resume builder, simply sign up, log in, and follow the step-by-step instructions to create your resume."
    },
    {
      question: "Is the resume builder free?",
      answer: "Our resume builder offers both free and premium plans. The free plan provides basic features, while the premium plan offers advanced options and templates."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact our support team via email at support@example.com or through the contact form on our website."
    },
    {
      question: "Can I download my resume?",
      answer: "Yes, you can download your resume in various formats including PDF and Word."
    },
    {
      question: "Are my personal details safe?",
      answer: "Yes, we use advanced security measures to protect your personal information and ensure your privacy."
    },
    {
      question: "Can I edit my resume after creating it?",
      answer: "Yes, you can edit and update your resume anytime using our resume builder."
    },
    {
      question: "How many resumes can I create?",
      answer: "You can create multiple resumes, each tailored to different job applications or career goals."
    },
    {
      question: "Can I share my resume online?",
      answer: "Yes, you can share your resume directly from our platform via email or social media."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, our customer support team is available 24/7 to assist you with any issues or questions."
    }
    // Add more FAQ items as necessary
  ];



// Route to get about content
router.get('/faq', (req, res) => {
  res.json(faqs);
});

module.exports = router;
