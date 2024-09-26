import PropTypes from "prop-types";
import {
  Typography,
  Grid,
//   Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";
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
const EighthTemplate = ({
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
  return (
    <div
      style={{ color: textColor }}
      className={`${classes.container} ${
        isTemplateDrawerOpen || isDesignPanelOpen || improvedTextOpen
          ? classes.containerShift
          : ""
      } ${getFontClass()}`}>
   
        <Grid container spacing={3}>
          {/* Header */}
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>Isabelle Todd</Typography>
            <Typography variant="subtitle1" color="primary">I solve problems and help people overcome obstacles.</Typography>
            <Typography variant="body2">+1 000 *** **** | isabelle.todd@gmail.com | www.linkedin.com/isabelle | London, UK</Typography>
          </Grid>

          {/* Experience */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>EXPERIENCE</Typography>
            <Box mb={2}>
              <Typography variant="subtitle1" fontWeight="bold">Internal Project Manager</Typography>
              <Typography variant="subtitle2">Sunrise HLP | 04/2012 - 03/2014 | Berlin, Germany</Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Planned, beta-tested and led the rollout of a new internal communications system to all 400+ employees in 6 locations" />
                </ListItem>
                {/* Add more list items for other responsibilities */}
              </List>
            </Box>
            {/* Add Product Owner section similarly */}
          </Grid>

          {/* Summary and Skills */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>SUMMARY</Typography>
            <Typography variant="body2" paragraph>
              Dynamic Product Marketing Professional with a strong concentration in project management and 5+ years of experience. Proven ability to lead teams and implement measurable change to improve efficiency and achieve customer satisfaction. Experience working with multimillion-dollar budgets that improved results within a dynamic environment.
            </Typography>

            <Typography variant="h6" gutterBottom>TECH STACK</Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {['Zoho Sprints', 'UserVoice', 'Intercom', 'VWO', 'Taboola', 'Stata', 'Maven', 'Jenkins', 'Oracle', 'Hotjar'].map((tech) => (
                <Chip key={tech} label={tech} size="small" />
              ))}
            </Box>
          </Grid>

          {/* Education */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>EDUCATION</Typography>
            <Typography variant="subtitle1">MSc Project and Process Management</Typography>
            <Typography variant="subtitle2">Van Hall Larenstein University | 10/2008 - 01/2010 | GPA: 8.7 / 10</Typography>
            {/* Add BSc Operations Management similarly */}
          </Grid>

          {/* Projects, Languages, Awards, Certifications */}
          {/* Add these sections similar to above */}

          {/* Time Distribution Chart */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>MY TIME</Typography>
            {/* Here you would add your circular chart component */}
            <Box sx={{ height: 200, bgcolor: 'lightgrey', borderRadius: '50%' }}>
              {/* Placeholder for the chart */}
            </Box>
          </Grid>
        </Grid>
  

    </div>
  );
};
EighthTemplate.propTypes = {
  isTemplateDrawerOpen: PropTypes.bool.isRequired,
  isDesignPanelOpen: PropTypes.bool.isRequired,
  improvedTextOpen: PropTypes.bool.isRequired,
  fontStyle: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default EighthTemplate;
