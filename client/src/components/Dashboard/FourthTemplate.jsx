import PropTypes from "prop-types";
import {
  Grid,
  Paper,
  ThemeProvider,
  createTheme,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  LinearProgress,

} from '@mui/material';
import { makeStyles } from "@material-ui/core";
const theme = createTheme({
  palette: {
    primary: {
      main: '#2c7d6e', // Dark green color
    },
  },
});
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
    colorText: {
      color: "white",
    },
  }),
  { name: "SecondTemplate" }
);

function FourthTemplate({isTemplateDrawerOpen,
  isDesignPanelOpen,
  improvedTextOpen,
  fontStyle,
  textColor}) {

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
    <ThemeProvider theme={theme}>
      <Grid container style={{color:textColor}} className={`${classes.container} ${
      isTemplateDrawerOpen || isDesignPanelOpen || improvedTextOpen
        ? classes.containerShift
        : ""
    } ${getFontClass()}`}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ backgroundColor: 'primary.main', color: 'white', height: '100%', p: 2 }}>
            {/* Header */}
            <Typography variant="h4" gutterBottom>TIMOTHY DUNCAN</Typography>

            {/* Contact Info */}
            <Box mb={2}>
              <Typography variant="body2">(862) 7345-425</Typography>
              <Typography variant="body2">timothy.duncan@gmail.com</Typography>
              <Typography variant="body2">linkedin.com/in/timothy-duncan-jr</Typography>
              <Typography variant="body2">Paterson, New Jersey</Typography>
            </Box>

            {/* Skills */}
            <Typography variant="h6" gutterBottom>SKILLS</Typography>
            <List dense>
              {['Communication', 'Customer-Oriented', 'Leadership', 'Team Coordination', 'Negotiation', 'Business Intelligence', 'Critical Thinking', 'Creativity', 'Sales & Marketing', 'Pricing Strategy', 'Time Management', 'Hubspot'].map((skill) => (
                <ListItem key={skill}>
                  <ListItemText primary={skill} />
                </ListItem>
              ))}
            </List>

            {/* Industry Expertise */}
            <Typography variant="h6" gutterBottom>INDUSTRY EXPERTISE</Typography>
            <Box mb={2}>
              <Typography variant="body2">Sales training</Typography>
              <LinearProgress variant="determinate" value={100} sx={{ backgroundColor: 'rgba(255,255,255,0.3)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
              <Typography variant="body2">Product-led growth</Typography>
              <LinearProgress variant="determinate" value={80} sx={{ backgroundColor: 'rgba(255,255,255,0.3)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
              <Typography variant="body2">Partnerships</Typography>
              <LinearProgress variant="determinate" value={60} sx={{ backgroundColor: 'rgba(255,255,255,0.3)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
            </Box>

            {/* Languages */}
            <Typography variant="h6" gutterBottom>LANGUAGES</Typography>
            <Box mb={2}>
              <Typography variant="body2">English</Typography>
              <LinearProgress variant="determinate" value={100} sx={{ backgroundColor: 'rgba(255,255,255,0.3)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
              <Typography variant="body2">Spanish</Typography>
              <LinearProgress variant="determinate" value={80} sx={{ backgroundColor: 'rgba(255,255,255,0.3)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
            </Box>

            {/* Quote */}
            <Typography variant="h6" gutterBottom>FAVOURITE QUOTE</Typography>
            <Typography variant="body2" gutterBottom>
              A person who is quietly confident makes the best leader
            </Typography>
            <Typography variant="body2">— Fred Wilson, Union Ventures</Typography>

            {/* Passions */}
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>PASSIONS</Typography>
            <Typography variant="body2" gutterBottom>
              Developing my team into biz dev stars
            </Typography>
            <Typography variant="body2" gutterBottom>
              Giving back to my community
            </Typography>
            <Typography variant="body2">
              Horse-riding & spending time in nature
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, height: '100%' }}>
            {/* Resume Profile */}
            <Typography variant="h5" gutterBottom>Director of Business Development</Typography>
            <Typography variant="body1" paragraph>
              Data-driven business development director with 10 years of experience working with
              SaaS companies. Successfully secured high-profile strategic partnerships that lead to
              a 130% increase in sales. Executed an 18-month marketing plan with a $250K budget,
              bringing in over 40 new customers. Excellent communicator and team leader. Seeking
              to leverage my business development expertise at HyperTarget.
            </Typography>

            {/* Key Achievements */}
            <Typography variant="h6" gutterBottom>KEY ACHIEVEMENTS</Typography>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Sales Training Expert"
                  secondary="Trained over 30 entry-level sales representatives and underperforming sales executives, leading to a 110% increase in year-over-year sales"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Negotiation"
                  secondary="Landed major business deals with market-leading companies across various industries, which boosted brand authority and increased revenue"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Leadership in Times of Crisis"
                  secondary="During a restructuring period, formed fully operational technical sales department with $3M annual sales within 6 months"
                />
              </ListItem>
            </List>

            {/* Experience */}
            <Typography variant="h6" gutterBottom>EXPERIENCE</Typography>
            <Box mb={2}>
              <Typography variant="subtitle1">Director of Business Development</Typography>
              <Typography variant="subtitle2">Esycron | New Jersey | 2016 - Ongoing</Typography>
              <Typography variant="body2" paragraph>
                Computer software company specializing in digital mapping solutions and GPS technologies
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Secured high-profile strategic partnerships that lead to a 130% increase in sales by representing Esycron in meetings with external parties and conferences" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Collaborated with product development teams and marketing specialists to improve our pricing structure and product design" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Negotiated and closed seven major deals with international clients and large US-based companies with a total value of $1.35M" />
                </ListItem>
              </List>
            </Box>

            <Box mb={2}>
              <Typography variant="subtitle1">Sales Representative</Typography>
              <Typography variant="subtitle2">ReloUnion | New Jersey | 2011 - 2016</Typography>
              <Typography variant="body2" paragraph>
                A fast-moving innovative SaaS company powering online branded payment systems and services.
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Developed and executed a customer-focused growth plan, leading to a 72% increase in annual revenue within two years" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Boosted sales performance by hiring 18 new sales representatives and coaching underperforming sales associates" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Led an 18-month marketing plan with a $250K budget, bringing in over 40 new customers and increasing brand awareness in the payment gateway market" />
                </ListItem>
              </List>
            </Box>

            {/* Education */}
            <Typography variant="h6" gutterBottom>EDUCATION</Typography>
            <Box>
              <Typography variant="subtitle1">MSc in Marketing Science</Typography>
              <Typography variant="subtitle2">Columbus University | 2006 - 2007</Typography>
            </Box>
            <Box mt={1}>
              <Typography variant="subtitle1">BSc in Marketing</Typography>
              <Typography variant="subtitle2">Rutgers University | 2002 - 2005</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
FourthTemplate.propTypes = {
  isTemplateDrawerOpen: PropTypes.bool.isRequired,
  isDesignPanelOpen: PropTypes.bool.isRequired,
  improvedTextOpen: PropTypes.bool.isRequired,
  fontStyle: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default FourthTemplate;