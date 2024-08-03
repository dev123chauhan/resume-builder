import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { makeStyles } from "@mui/styles";

const SectionTitle = styled(Typography)(() => ({
  fontWeight: "500",
  fontSize: "1.25rem",
  textAlign:"center",
  color:"black",
  marginTop:"2rem"
}));

const SectionContent = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const useStyles = makeStyles(
  (theme) => ({
    container: {
      padding: theme.spacing(4),
      maxWidth: "800px",
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

export default function SecondResume({
  fontStyle,
  textColor,
}) {
  const classes = useStyles({ fontStyle });
  const layout = {
    name: "JONATHAN WRIGHT",
    title: "Lead Business Analyst",
    contact: {
      phone: "+1-921-389-0182",
      email: "name@gmail.com",
      linkedin: "linkedin.com/in/jonwrightjr",
    },
    summary: {
      title: "SUMMARY",
      content: `I am an experienced Business Analyst with a strong technical
      background and great project management skills. I am able to work on
      multiple projects at the same time, which over the years at Network
      Solutions have led to eight-digit efficiencies for the business.
      Furthermore, I immensely enjoy the process of deriving critical
      business insights using analytics, and then supporting or directly
      managing the efficiency implementation projects. My ability to move
      from analysis or leading a team of analysts to supporting or leading
      the actual project is something that could help further accelerate the
      velocity of work at Ion Insights.`,
    },
    skills: {
      title: "SKILLS",
      items: [
        "Budgeting", "Financial Analysis", "Project Management",
        "Stakeholder Management", "Excel", "VBA", "SQL", "QuickBooks",
        "Power BI", "Tableau", "Python",
      ],
    },
    experience: {
      title: "EXPERIENCE",
      items: [
        {
          role: "Lead Business Analyst & Project Manager",
          company: "Network Solutions LLC",
          date: "2019-Ongoing",
          location: "Dallas, TX",
          responsibilities: [
            `Created new strategies to manage $2 million of accounts at risk, resulting in an increase of 4% in revenue in 6 months.`,
            `Led the effort to deploy an automated time & expense reporting system for more than 90 onsite and offsite personnel across 3 locations.`,
          ],
        },
        {
          role: "Business Analyst",
          company: "Lauzon",
          date: "2013-2016",
          location: "Dallas, TX",
          responsibilities: [
            "Planned, beta-tested and led the rollout of a new internal communications system to all 400+ employees in 6 locations",
            "Led the research for building the personal development platform (Sunrise employees still use currently)",
          ],
        },
      ],
    },
    education: {
      title: "EDUCATION",
      items: [
        {
          school: "University of Wisconsin",
          degree: "M.Sc. in Finance",
          location: "Wisconsin",
          duration: "2012-2013",
        },
        {
          school: "University of Wisconsin",
          degree: "BBA: Business, Supply Chain Management",
          location: "Wisconsin",
          duration: "2008-2012",
        },
      ]
    },
    courses: {
      title: "COURSE AND CERTIFICATE",
      items: [
        "PMI Professional in Business Analysis (PBA) - PMI, 2019",
        "Certified Associate in Project Management (CAPM) - PMI, 2018",
        "High-Dimensional Data Analysis - Harvard, 2017",
      ],
    },
  };

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
    <div className={`${classes.container} ${getFontClass()}`}>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          <span style={{color: textColor}} className={`${getFontClass()}`}>
            {layout.name}
          </span>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <span className={`${getFontClass()}`}>
            {layout.title}
          </span>
        </Typography>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography
            style={{ alignItems: "center", display: "flex" }}
            variant="body2"
          >
            <PhoneIcon />
            <span className={`${getFontClass()}`}>
              {layout.contact.phone}
            </span>
          </Typography>

          <Typography
            style={{ alignItems: "center", display: "flex" }}
            variant="body2"
          >
            <EmailIcon />
            <span className={`${getFontClass()}`}>
              {layout.contact.email}
            </span>
          </Typography>

          <Typography
            style={{ alignItems: "center", display: "flex" }}
            variant="body2"
          >
            <LinkedInIcon />
            <span className={`${getFontClass()}`}>
              {layout.contact.linkedin}
            </span>
          </Typography>
        </div>
      </div>
      
      <Grid item xs={12} md={8}>
        <SectionTitle style={{color: textColor}} className={`${getFontClass()}`}>
          {layout.summary?.title}
        </SectionTitle>
        <hr style={{border:"0.5px solid black", marginBottom:"0.5rem"}}/>
        <SectionContent>
          <span className={`${getFontClass()}`}>
            {layout.summary?.content}
          </span>
        </SectionContent>

        <SectionTitle style={{color: textColor}} className={`${getFontClass()}`}>{layout.skills?.title}</SectionTitle>
        <hr style={{border:"0.5px solid black", marginBottom:"0.5rem"}}/>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {layout.skills?.items?.map((item, index) => (
            <span key={index} className={`${getFontClass()}`}>
              {item}
            </span>
          ))}
        </Box>

        <SectionTitle style={{color: textColor}} className={`${getFontClass()}`}>{layout.experience?.title}</SectionTitle>
        <hr style={{border:"0.5px solid black", marginBottom:"0.5rem"}}/>
    
        {layout.experience?.items?.map((item, index) => (
          <Box key={index} mb={2}>
            <Box>
              <span className={`${getFontClass()}`}>{item.company}</span>
              <span style={{fontWeight:"bold"}} className={`${getFontClass()}`}>{item.role}</span>
              <span className={`${getFontClass()}`}>{item.location}</span>
              <ul>
                {item.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className={`${getFontClass()}`}>{resp}</li>
                ))}
              </ul>
            </Box>
          </Box>
        ))}

        <SectionTitle style={{color: textColor}} className={`${getFontClass()}`}>{layout.education?.title}</SectionTitle>
        <hr style={{border:"0.5px solid black", marginBottom:"0.5rem"}}/>
        
        {layout.education?.items?.map((item, index) => (
          <Box key={index} mb={2}>
            <Box>
              <span className={`${getFontClass()}`}>{item.school}</span>
              <span style={{fontWeight:"bold"}} className={`${getFontClass()}`}>{item.degree}</span>
              <span className={`${getFontClass()}`}>{item.location}</span>
              <span className={`${getFontClass()}`}>{item.duration}</span>
            </Box>
          </Box>
        ))}

        <SectionTitle style={{color: textColor}} className={`${getFontClass()}`}>{layout.courses?.title}</SectionTitle>
        <hr style={{border:"0.5px solid black", marginBottom:"0.5rem"}}/>
        {layout.courses?.items?.map((item, index) => (
          <span key={index} className={`${getFontClass()}`}>
            {item}
          </span>
        ))}
      </Grid>
    </div>
  );
}

SecondResume.propTypes = {
  fontStyle: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};


