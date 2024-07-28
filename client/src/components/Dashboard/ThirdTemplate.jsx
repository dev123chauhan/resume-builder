import PropTypes from "prop-types";
import {

  Grid,
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Phone, Email, LinkedIn, LocationOn, Star } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";
import useAuth from "../../hooks/useAuth";
import noProfile from "../../assets/noProfile.jpg";
const useStyles = makeStyles(
  () => ({
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      backgroundColor: "white",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease-in-out",
    },
    containerShift: {
      transform: "translateX(100px)",
    },
    colorText: {
      color: "white",
    },
  }),
  { name: "SecondTemplate" }
);
function ThirdTemplate({
  isTemplateDrawerOpen,
  isDesignPanelOpen,
  improvedTextOpen,
  fontStyle, 
  textColor,
}) {
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
  const { user } = useAuth();
  const classes = useStyles({ fontStyle });
  return (
    <div style={{color:textColor}} className={`${classes.container} ${
      isTemplateDrawerOpen || isDesignPanelOpen || improvedTextOpen
        ? classes.containerShift
        : ""
    } ${getFontClass()}`} >
      <div elevation={3} style={{ paddingLeft: "30px", paddingTop: "30px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" component="h1">
              James Moore
            </Typography>
            <Typography variant="h6" component="h2" color="primary">
              Experienced Project Manager
            </Typography>
            <Box mt={2}>
              <Typography variant="body1">
                <Phone /> +1 000 *******{" "}
              </Typography>
              <Typography variant="body1">
                <Email /> jamesmoore@gmail.com
              </Typography>
              <Typography variant="body1">
                <LinkedIn /> linkedin.com/james-moore
              </Typography>
              <Typography variant="body1">
                <LocationOn /> New York City, NY
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h5" component="h3">
                Summary
              </Typography>
              <Typography variant="body1">
                Result-oriented project team leader with 5 years of experience
                covering project and product management...
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h5" component="h3">
                Experience
              </Typography>
              <Typography variant="h6" component="h4">
                Senior IT Product Manager
              </Typography>
              <Typography variant="body2">
                Rover Games | 02/2019 - Ongoing | San Francisco, CA
              </Typography>
              <Typography variant="body1">
                Rover Games is a multi-play mobile game app development firm
                that has successful titles such as Drink...
              </Typography>
              {/* Add other experience entries here */}
            </Box>
            <Box mt={4}>
              <Typography variant="h5" component="h3">
                Education
              </Typography>
              <Typography variant="body1">
                Industrial Engineering, MSc | University of California, Berkeley
                | 2000 - 2002
              </Typography>
              <Typography variant="body1">
                Industrial Engineering, BSc | University of California, Berkeley
                | 1996 - 2000
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h5" component="h3">
                Education
              </Typography>
              <Typography variant="body1">
                Industrial Engineering, MSc | University of California, Berkeley
                | 2000 - 2002
              </Typography>
              <Typography variant="body1">
                Industrial Engineering, BSc | University of California, Berkeley
                | 1996 - 2000
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h5" component="h3">
                Education
              </Typography>
              <Typography variant="body1">
                Industrial Engineering, MSc | University of California, Berkeley
                | 2000 - 2002
              </Typography>
              <Typography variant="body1">
                Industrial Engineering, BSc | University of California, Berkeley
                | 1996 - 2000
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h5" component="h3">
                Education
              </Typography>
              <Typography variant="body1">
                Industrial Engineering, MSc | University of California, Berkeley
                | 2000 - 2002
              </Typography>
              <Typography variant="body1">
                Industrial Engineering, BSc | University of California, Berkeley
                | 1996 - 2000
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h5" component="h3">
                Education
              </Typography>
              <Typography variant="body1">
                Industrial Engineering, MSc | University of California, Berkeley
                | 2000 - 2002
              </Typography>
              <Typography variant="body1">
                Industrial Engineering, BSc | University of California, Berkeley
                | 1996 - 2000
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h5" component="h3">
                Education
              </Typography>
              <Typography variant="body1">
                Industrial Engineering, MSc | University of California, Berkeley
                | 2000 - 2002
              </Typography>
              <Typography sx={{ mb: 4 }} variant="body1">
                Industrial Engineering, BSc | University of California, Berkeley
                | 1996 - 2000
              </Typography>
            </Box>
          </Grid>
       
          <Grid item xs={12} sm={4}>
           <span  style={{alignItems:"center", justifyContent:"center", display:"flex"}}>
          <Avatar 
          src={
            user?.profileImage
              ? `http://localhost:5000/uploads/${user.profileImage}`
              : noProfile
          }
          sx={{ width: 100, height: 100,  }}
        />

           </span>
            <Box mb={4}>
              <Typography variant="h6" component="h4">
                Strengths
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Star className={classes.colorText}/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Strategic Planner"
                    secondary="Developing steps along the way to achieve..."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                  <Star className={classes.colorText}/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Flexible"
                    secondary="Comfortable with ambiguity and able to thrive..."
                  />
                </ListItem>
                {/* Add other strengths here */}
              </List>
            </Box>
            <Box mb={4}>
              <Typography variant="h6" component="h4">
                Achievements
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                  <Star className={classes.colorText}/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Cost Saving Of $100M"
                    secondary="Through efficient project management..."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                  <Star className={classes.colorText}/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Exceeded throughput target by 90%"
                    secondary="Cutting loading time & fixing key security..."
                  />
                </ListItem>
                {/* Add other achievements here */}
              </List>
            </Box>
            <Box mb={4}>
              <Typography variant="h6" component="h4">
                Skills
              </Typography>
              <Typography className={classes.colorText} variant="body1">
                Product Development · Scrum · SQL · Tableau · JIRA · Stakeholder
                Management
              </Typography>
            </Box>
            <Box mb={4}>
              <Typography  variant="h6" component="h4">
                Languages
              </Typography>
              <Typography className={classes.colorText} variant="body1">English · Native</Typography>
              <Typography className={classes.colorText} variant="body1">
                Spanish: Castilian · Advanced
              </Typography>
              <Typography className={classes.colorText} variant="body1">German · Intermediate</Typography>
            </Box>
            <Box mb={4}>
              <Typography variant="h6" component="h4">
                Passions
              </Typography>
              <Typography className={classes.colorText} variant="body1">
                Family · Adrenaline Sports · Composing music
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

ThirdTemplate.propTypes = {
  isTemplateDrawerOpen: PropTypes.bool.isRequired,
  isDesignPanelOpen: PropTypes.bool.isRequired,
  improvedTextOpen: PropTypes.bool.isRequired,
  fontStyle: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default ThirdTemplate;
