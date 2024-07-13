const express = require('express');
const router = express.Router();

// Sample about us content
// const aboutContent = {
//   title:'About Us',
//   description: "Our Resume Builder web app is a comprehensive tool designed to streamline the process of creating professional resumes. It features a user-friendly interface with customizable templates, allowing users to effortlessly input and format their personal and professional information. The app includes sections for work experience, education, skills, and achievements, along with tips and examples for each. Users can easily rearrange sections, choose from various design themes, and download their resumes in multiple formats (PDF, DOCX). Integrated with LinkedIn for easy import of professional details, our app also offers real-time previews and a built-in spell checker. Secure cloud storage ensures user data is protected and accessible anytime, anywhere.",
//   vision: "To empower individuals in their career journeys by providing a seamless and efficient resume-building experience.",
//   mission: "Our mission is to deliver a user-centric platform that simplifies resume creation while maintaining the highest standards of quality and design.",
//   uniqueFeatures: [
//     "Customizable templates tailored for different industries and roles.",
//     "Real-time previews to see your resume as you build it.",
//     "Integrated LinkedIn import for quick and accurate data entry.",
//     "Built-in spell checker to ensure error-free resumes.",
//     "Multiple download formats including PDF and DOCX.",
//     "Secure cloud storage for easy access and data protection."
//   ],
//   journey: "Our journey began with a simple idea: to make the process of creating resumes as straightforward and stress-free as possible. Over the years, we have listened to the feedback of our users and continuously improved our app to meet their needs. From introducing new templates to enhancing the user interface, our commitment to excellence has driven our progress.",
//   team: "We are a dedicated team of professionals with a passion for helping people achieve their career goals. Our team includes experienced software developers, UX/UI designers, and career advisors who work together to bring you the best resume-building experience. Each member brings a unique set of skills and a shared commitment to making resume building easy and accessible for everyone.",
//   impact: "We believe that a well-crafted resume is a key to unlocking career opportunities. Our app has helped thousands of users create professional resumes that stand out. We take pride in knowing that our tool has played a part in their success stories. Whether you're a recent graduate, a seasoned professional, or someone looking to change careers, our resume builder is designed to help you present your best self to potential employers."
// };


const aboutContent = {
  image: 'path-to-your-image.jpg', // Adjust this path based on your image storage
  sections: [
    {
      title: 'User-Friendly Interface',
      content: [
        {
          subtitle: 'Intuitive Design',
          text: 'The interface is designed to be easy to navigate, ensuring users of all technical abilities can create a professional resume with ease.',
        },
        {
          subtitle: 'Customizable Templates',
          text: 'We offer a wide range of beautifully designed templates that cater to various industries and job roles. Users can personalize these templates to reflect their unique style and professional brand.',
        },
      ],
    },
    {
      title: 'Comprehensive Sections',
      content: [
        {
          subtitle: 'Work Experience',
          text: 'Detailed sections allow users to chronicle their professional journey, including job titles, companies, employment periods, and key responsibilities and achievements.',
        },
        {
          subtitle: 'Education',
          text: 'Users can list their academic credentials, from high school diplomas to advanced degrees, along with pertinent details such as institutions, graduation dates, and notable accomplishments.',
        },
        {
          subtitle: 'Skills',
          text: 'A dedicated section for skills enables users to highlight their core competencies, both technical and soft skills, making it easy for potential employers to assess their qualifications.',
        },
        {
          subtitle: 'Achievements',
          text: 'Users can showcase their accolades, certifications, and any other significant achievements that underscore their professional prowess.',
        },
      ],
    },
    {
      title: 'Advanced Features',
      content: [
        {
          subtitle: 'Tips and Examples',
          text: 'Each section includes tips and real-life examples to guide users in crafting compelling and effective content.',
        },
        {
          subtitle: 'Section Rearrangement',
          text: 'Users can easily drag and drop sections to prioritize the information that best highlights their qualifications.',
        },
        {
          subtitle: 'Design Themes',
          text: 'Multiple design themes are available, allowing users to choose a style that best represents their personal brand and industry standards.',
        },
        {
          subtitle: 'Real-Time Previews',
          text: 'Users can see how their resume will look as they build it, with real-time previews that ensure every detail is perfect before downloading.',
        },
        {
          subtitle: 'Integrated Spell Checker',
          text: 'Our app includes a built-in spell checker to help users maintain a polished and professional appearance.',
        },
      ],
    },
    {
      title: 'Integration and Compatibility',
      content: [
        {
          subtitle: 'LinkedIn Integration',
          text: 'Users can import their professional details directly from LinkedIn, significantly reducing the time required to fill out their resume.',
        },
        {
          subtitle: 'Multiple Download Formats',
          text: 'Completed resumes can be downloaded in various formats, including PDF and DOCX, ensuring compatibility with all potential employers’ preferred formats.',
        },
      ],
    },
    {
      title: 'Security and Accessibility',
      content: [
        {
          subtitle: 'Secure Cloud Storage',
          text: 'All user data is stored securely in the cloud, providing peace of mind that their information is protected against unauthorized access.',
        },
        {
          subtitle: 'Anywhere, Anytime Access',
          text: 'Users can access their resumes from any device, at any time, making it easy to update and share their information as needed.',
        },
      ],
    },
    {
      title: 'Our Vision and Mission',
      content: [
        {
          subtitle: 'Vision',
          text: 'To empower individuals in their career journeys by providing a seamless, efficient, and enjoyable resume-building experience.',
        },
        {
          subtitle: 'Mission',
          text: 'Our mission is to deliver a user-centric platform that simplifies resume creation while maintaining the highest standards of quality and design.',
        },
      ],
    },
    {
      title: 'Unique Features',
      content: [
        {
          subtitle: 'Customizable Templates',
          text: 'Tailored for different industries and roles, ensuring every resume is both relevant and impactful.',
        },
        {
          subtitle: 'Real-Time Previews',
          text: 'Allows users to see their changes instantly, helping them perfect their resume before finalizing it.',
        },
        {
          subtitle: 'LinkedIn Import',
          text: 'Streamlines data entry by pulling professional information directly from LinkedIn profiles.',
        },
        {
          subtitle: 'Built-In Spell Checker',
          text: 'Ensures resumes are free from spelling errors, maintaining a professional appearance.',
        },
        {
          subtitle: 'Multiple Download Formats',
          text: 'Users can choose from PDF, DOCX, and more, providing flexibility in how they share their resumes.',
        },
        {
          subtitle: 'Secure Cloud Storage',
          text: 'Protects user data and provides easy access from any device.',
        },
      ],
    },
    {
      title: 'Our Journey',
      content: [
        {
          subtitle: '',
          text: 'Our journey began with a simple idea: to make the process of creating resumes as straightforward and stress-free as possible. Over the years, we have listened to user feedback and continuously improved our app to meet their evolving needs. From introducing new templates to enhancing the user interface, our commitment to excellence has driven our progress.',
        },
      ],
    },
    {
      title: 'Meet Our Team',
      content: [
        {
          subtitle: '',
          text: 'We are a dedicated team of professionals with a passion for helping people achieve their career goals. Our team includes experienced software developers, UX/UI designers, and career advisors who work together to bring you the best resume-building experience. Each member brings a unique set of skills and a shared commitment to making resume building easy and accessible for everyone.',
        },
      ],
    },
    {
      title: 'Our Impact',
      content: [
        {
          subtitle: '',
          text: 'We believe that a well-crafted resume is key to unlocking career opportunities. Our app has helped thousands of users create professional resumes that stand out. We take pride in knowing that our tool has played a part in their success stories. Whether you\'re a recent graduate, a seasoned professional, or someone looking to change careers, our resume builder is designed to help you present your best self to potential employers.',
        },
      ],
    },
  ],
};

// Route to get about content
router.get('/about', (req, res) => {
  res.json(aboutContent);
});

module.exports = router;
