import PropTypes from "prop-types";
import {  Typography, Grid,  Box, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(
    () => ({
      container: {
        maxWidth: "800px",
        // margin: "0 auto",
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease-in-out",
      },
      containerShift: {
        transform: "translateX(300px)",
      },
    }),
    { name: "SecondTemplate" }
  );
const SixthTemplate = ({ isTemplateDrawerOpen,
    isDesignPanelOpen,
    improvedTextOpen,
    fontStyle,
    textColor}) => {
        const classes = useStyles({ fontStyle });
        const getFontClass = () => {
            switch (fontStyle) {
              case "Roboto":
                return "font-roboto";
              case "Open Sans":
                return "font-open-sans";
              case "Lato":
                return "font-lato";
              case "Montserrat":
                return "font-montserrat";
              case "Poppins":
                return "font-poppins";
              case "Raleway":
                return "font-raleway";
              case "Rubik":
                return "font-rubik";
              case "Arial":
                return "font-arial";
              case "Times New Roman":
                return "font-times-new-roman";
              case "Georgia":
                return "font-georgia";
              case "Courier New":
                return "font-courier-new";
              default:
                return "font-roboto";
            }
          };
  return (
    <div style={{ color: textColor }}
    className={`${classes.container} ${
      isTemplateDrawerOpen || isDesignPanelOpen || improvedTextOpen
        ? classes.containerShift
        : ""
    } ${getFontClass()}`}>
      {/* <Paper elevation={3} style={{ padding: '20px',  }}> */}
        <Box textAlign="center" marginBottom="20px">
          <Typography variant="h4">ANDREW CLARK</Typography>
          <Typography variant="subtitle1">Full Stack Developer</Typography>
          <Typography variant="body1">
            +1-234-253-6506 | andrew.clark.ji@gmail.com | github.io/andrew-clark-ji | San Francisco, CA
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Box marginBottom="20px">
              <Typography variant="h6">SKILLS</Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Client-Side" secondary="HTML, CSS, JS, Angular, React, Vue, Redux, TypeScript, Backbone, Bootstrap" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Server-side" secondary="Python, NumPy, SciPy, Scikit-learn, Keras, Eil5, TensorFlow, MySQL, NodeJS, Redis, AWS, MongoDB, Spark, HTTP/2" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Development & Operations" secondary="JUnit, NUnit, PyUnit, TestCafe, Mocha, Jest, Scrum, Agile, GIT, Azure DevOps" />
                </ListItem>
              </List>
            </Box>
            <Box marginBottom="20px">
              <Typography variant="h6">CERTIFICATES</Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="AWS Machine Learning – Professional" secondary="Amazon Web Services, 2018" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Certified Agile Practitioner" secondary="PMI, 2015" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="AWS Solutions Architect - Associate" secondary="Amazon Web Services, 2013" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Java Development Certified Professional" secondary="Oracle, 2010" />
                </ListItem>
              </List>
            </Box>
            <Box marginBottom="20px">
              <Typography variant="h6">PROJECTS</Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="OpenFlow based Firewall" secondary="Configured static rules using MD-SAL, Engineered proactive rule evaluation system at OSI layer 7 using POX controller" />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box marginBottom="20px">
              <Typography variant="h6">SUMMARY</Typography>
              <Typography variant="body1">
                Full Stack Developer with over 10 years of experience in Java/JS, Angular, Vue, React, Python, NumPy, SciPy, Scikit-learn. Led development of $500K research project which was deemed a gold standard by the client. Increased clients customer satisfaction 2-fold after fine-tuning AI/ML-based algorithms. Well-acquainted with HR methodologies.
              </Typography>
            </Box>
            <Box marginBottom="20px">
              <Typography variant="h6">EDUCATION</Typography>
              <Typography variant="body1">
                <strong>M.S. in Computer Science</strong><br />
                Stanford University, 2008 - 2009, Palo Alto, CA
              </Typography>
            </Box>
            <Box marginBottom="20px">
              <Typography variant="h6">EXPERIENCE</Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Senior Full Stack Developer, Boyle" secondary="2018 - Ongoing, San Francisco, CA" />
                  <Typography variant="body2">
                    Boyle is an international Technology and Management Consulting Group with a rapid pace development and innovative solutions for demanding projects. I work as a full-stack developer here, responsible for building, deploying and maintaining internal web applications.
                    <ul>
                      <li>Hired, trained and leading an Agile team of 7 full-stack developers</li>
                      <li>Developed indexed database architecture using SQL procedures and triggers for 10 different applications</li>
                      <li>Worked with Core Java to develop automated solutions like web interfaces using HTML, CSS, JavaScript and Web services</li>
                      <li>Worked with a committee of 6 members to organise fun-activities for the employees</li>
                    </ul>
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Full Stack Developer, Lauzon" secondary="2013 - 2018, San Francisco, CA" />
                  <Typography variant="body2">
                    Lauzon is a universal digital loyalty program that offers fun and reward partners at the places you love.
                    <ul>
                      <li>Hired, trained and lead Agile team of 7 full-stack developers</li>
                      <li>Simultaneously created & maintained database using SQL Server for space maintenance and daily backups of system and user databases for 10 clients</li>
                      <li>Increased company revenue by 30% within 2 months after developing and implementing business logic for over 20 features</li>
                      <li>Designed and Developed UI design for over 15 clients using CSS, HTML, ASP.NET, Vue</li>
                    </ul>
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Solution Architect, Keeling Group" secondary="2010 - 2013, Palo Alto, CA" />
                  <Typography variant="body2">
                    Keeling Group is a leading Digital Product Studio in California, helping companies to thrive on mobile apps, the web, VR/AR and IoT.
                    <ul>
                      <li>Shortened project timeline by 14 months for company’s largest studio project by managing relationship with 3rd party vendors, saving over $800K</li>
                      <li>Led development of $500K research project, deemed a gold standard by the client</li>
                      <li>Fine-tuned and developed AI/ML-based algorithms based on the results with Scikit-learn, increasing revenue 2-fold</li>
                    </ul>
                  </Typography>
                </ListItem>
              </List>
            </Box>
            <Box marginBottom="20px">
              <Typography variant="h6">VOLUNTEERING</Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Volunteer, Childrens Autism Fund" secondary="2017 - 2018" />
                  <Typography variant="body2">
                    Improved the CRM/MIS used to schedule work & resources, increasing the consultations & time spent with children by 15% without expanding the counselling team. Automated planning & reporting process, saving 100 hours of management time / month.
                  </Typography>
                </ListItem>
              </List>
            </Box>
            <Box marginBottom="20px">
              <Typography variant="h6">STRENGTHS</Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Team Leadership" secondary="Introduction to Leadership course by Harvard" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Communication" secondary="Attended a Communication course at Stanford" />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      {/* </Paper> */}
    </div>
  );
};
SixthTemplate.propTypes = {
    isTemplateDrawerOpen: PropTypes.bool.isRequired,
    isDesignPanelOpen: PropTypes.bool.isRequired,
    improvedTextOpen: PropTypes.bool.isRequired,
    fontStyle: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
  };

export default SixthTemplate;
