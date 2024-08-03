import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Grid,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { styled } from "@mui/system";
import { makeStyles } from "@material-ui/core";

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#000080", // Dark blue
    },
    secondary: {
      main: "#FF8C00", // Orange
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});



const Name = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
  fontSize: "2rem",
  marginBottom: theme.spacing(1),
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const JobTitle = styled(Typography)(() => ({
  fontWeight: "bold",
}));

const Company = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: "bold",
}));
const useStyles = makeStyles(
    () => ({
      container: {
        maxWidth: "800px",
        // margin: "0 auto",
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease-in-out",
        padding:"30px"
      },
      containerShift: {
        transform: "translateX(300px)",
      },
      colorText: {
        color: "white",
      },
    }),
    { name: "SecondTemplate" }
  );

const FifthTemplate = ({
  isTemplateDrawerOpen,
  isDesignPanelOpen,
  improvedTextOpen,
  fontStyle,
  textColor,
}) => {
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
  const experiences = [
    {
      title: "Product Marketing Manager, Windows & Office",
      company: "Torphy",
      date: "11/2016 - NOW",
      location: "Lisbon, Portugal",
      descriptions: [
        "Leading the strategy, execution and experiment of all marketing activities to drive Windows & Office 365 growth.",
        "Contributed to grow Office 365 MAUs +20% through referrals, affiliates, Facebook and Instagram ads.",
        "Increased Windows 10 activations +350% YoY through video case studies, Youtube ads, and by pitching and closing A & B leads, resulting in 150% metric attainment.",
        "Grew Windows 10 new devices sales 25% YoY by doing partnerships, paid social, investing in partner growth opportunities, ensuring partner readiness, and launching a Windows e-commerce platform for students and schools.",
      ],
    },
    {
      title: "Marketing Manager",
      company: "Thompson Ltd",
      date: "02/2016 - 11/2016",
      location: "Lisbon, Portugal",
      descriptions: [
        "Joined Thompson Ltd to drive customer acquisition of Surface and Windows in the Education target segment. Encompassed email marketing, SEO, copywriting, paid social, content marketing & partnerships.",
        "Set up, managed & tracked a marketing plan budget of $25k across all digital and offline channels that generated an ROI of +620%.",
        "Accelerated Surface 3 sales growth rate 30% by launching, A/B testing and optimising paid social and email marketing campaigns.",
      ],
    },
    {
      title: "Analyst",
      company: "Drouin S.A.R.L.",
      date: "09/2013 - 08/2014",
      location: "Portugal & Africa",
      descriptions: [
        "Joined the Financial Services team to evaluate banks financials and suggest recommendations for improvement.",
        "Analysed, highlighted and reported potential areas of business improvements related to financial and key operational processes to company management.",
        "Performed credit risk evaluations of banking portfolios and gained valuable experience in financial analysis and investment decision evaluation.",
        "Heavily involved in workshops, recruiting, keynotes, customer support, launching new products and in developing projects with C-Level executives.",
      ],
    },
  ];

  const educations = [
    {
      degree: "MSc Strategic Marketing",
      school: "Cranfield School of Management",
      date: "09/2014 - 11/2015",
      location: "Cranfield, UK",
      details: "Graduated with distinction.",
    },
    {
      degree: "BSc Business & Management",
      school: "ISG Business & Economics School",
      date: "09/2010 - 07/2013",
      location: "Lisbon, Portugal",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ color: textColor }}
          className={`${classes.container} ${
            isTemplateDrawerOpen || isDesignPanelOpen || improvedTextOpen
              ? classes.containerShift
              : ""
          } ${getFontClass()}`}>
        <Box
          mb={3}
          
        >
          <Name variant="h1">ANDRÉ NUNES PEDRO</Name>
          <Title variant="h5">Growth Hacker</Title>
          <Grid container spacing={2}>
            <Grid item>+352-342-2341</Grid>
            <Grid item>person@example.com</Grid>
            <Grid item>www.medium.com/@andre_np</Grid>
          </Grid>
        </Box>

        {/* Experience */}
        <Box mb={3}>
          <SectionTitle variant="h5">EXPERIENCE</SectionTitle>
          {experiences.map((exp, index) => (
            <Box key={index} mb={2}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <JobTitle variant="h6">{exp.title}</JobTitle>
                  <Company variant="subtitle1">{exp.company}</Company>
                </Grid>
                <Grid item>
                  <Typography variant="body2">{exp.date}</Typography>
                  <Typography variant="body2">{exp.location}</Typography>
                </Grid>
              </Grid>
              <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
                {exp.descriptions.map((desc, i) => (
                  <li key={i}>
                    <Typography variant="body2">{desc}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Box>

        {/* Education */}
        <Box>
          <SectionTitle variant="h5">EDUCATION</SectionTitle>
          {educations.map((edu, index) => (
            <Box key={index} mb={2}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <JobTitle variant="h6">{edu.degree}</JobTitle>
                  <Company variant="subtitle1">{edu.school}</Company>
                </Grid>
                <Grid item>
                  <Typography variant="body2">{edu.date}</Typography>
                  <Typography variant="body2">{edu.location}</Typography>
                </Grid>
              </Grid>
              {edu.details && (
                <Typography variant="body2">{edu.details}</Typography>
              )}
            </Box>
          ))}
        </Box>
      </div>
    </ThemeProvider>
  );
};
FifthTemplate.propTypes = {
  isTemplateDrawerOpen: PropTypes.bool.isRequired,
  isDesignPanelOpen: PropTypes.bool.isRequired,
  improvedTextOpen: PropTypes.bool.isRequired,
  fontStyle: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default FifthTemplate;

