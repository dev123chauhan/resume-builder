import PropTypes from "prop-types";
import {
  Typography,
  Grid,
//   Paper,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Phone, Email } from "@mui/icons-material";
// import  ChatBubbleIcon from '@mui/icons-material/ChatBubble';
// import  GroupsIcon from '@mui/icons-material/GroupsIcon';
// import  LinkIcon from '@mui/icons-material/LinkIcon';

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
const SeventhTemplate = ({
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
      } ${getFontClass()}`}
    >
      {/* <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}> */}
        <Box textAlign="center" marginBottom="20px">
          <Typography variant="h4">ISABELLE TODD</Typography>
          <Typography variant="subtitle1">
            I solve problems and help people overcome obstacles.
          </Typography>
          <Box display="flex" justifyContent="center" marginTop="10px">
            <Box display="flex" alignItems="center" marginRight="15px">
              <Phone />
              <Typography variant="body1" style={{ marginLeft: "5px" }}>
                +1 000 *** *****
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" marginRight="15px">
              <Email />
              <Typography variant="body1" style={{ marginLeft: "5px" }}>
                isabelle.todd@gmail.com
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" marginRight="15px">
              {/* <LinkIcon /> */}
              <Typography variant="body1" style={{ marginLeft: "5px" }}>
                www.linkedin.com/isabelle
              </Typography>
            </Box>
          </Box>
        </Box>
    
          {/* <Grid item xs={12}> */}
            <Box marginBottom="20px">
              <Typography variant="h6">EXPERIENCE</Typography>
              <Typography>
                <Typography>
                  <ListItemText
                    primary="Product Owner, C Lab Services"
                    secondary="02/2010 - 04/2012, Hamburg, Germany"
                  />
                  <Typography variant="body2">
                    • Brought in the user perspective to 4 successfully launched
                    projects <br />
                    • Decisions affected a total user base of 400,000+ <br />•
                    Led the launch of a new invoicing software in just 4 months
                  </Typography>
                </Typography>
                <Typography>
                  <ListItemText
                    primary="Internal Project Manager, Sunrise HLP"
                    secondary="04/2012 - 03/2014, Berlin, Germany"
                  />
                  <Typography variant="body2">
                    • Planned, beta-tested and led the rollout of a new internal
                    communications system to all 400+ employees in 6 locations{" "}
                    <br />
                    • Led the research for building the personal development
                    platform Sunrise employees use currently <br />
                    • Managed recruitment and resources training (more than 50
                    resources trained and coached) <br />
                    • Created efficient working groups by enabling members to
                    excel with their individual specialized skill sets <br />•
                    Directed new product launch, boosting sales $20 million
                    while cutting customer costs
                  </Typography>
                </Typography>
              </Typography>
            </Box>
          {/* </Grid> */}
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box marginBottom="20px">
              <Typography variant="h6">EDUCATION</Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary="MSc Project Management, Van Hall Larenstein University"
                    secondary="10/2008 - 01/2010"
                  />
                  <Typography variant="body2">GPA: 8.7 / 10</Typography>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="BSc Operations Management, Technical University Berlin"
                    secondary="09/2005 - 05/2008"
                  />
                  <Typography variant="body2">GPA: 4.7 / 5.0</Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box marginBottom="20px">
              <Typography variant="h6">ACHIEVEMENTS</Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center">
                    {/* <GroupsIcon size="2x" /> */}
                    <Box marginLeft="10px">
                      <Typography variant="subtitle1">
                        Taking On Challenges
                      </Typography>
                      <Typography variant="body2">
                        Moved to the USA and headed a project no current team
                        leads wanted to work on, reaching 90% lead time
                        predictability.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center">
                    {/* <ChatBubbleIcon size="2x" /> */}
                    <Box marginLeft="10px">
                      <Typography variant="subtitle1">Mentoring</Typography>
                      <Typography variant="body2">
                        Implemented 1-on-1 meeting rhythm within my team,
                        reaching high employee happiness and the longest
                        retention rate.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box marginBottom="20px">
              <Typography variant="h6">TECH STACK</Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Zoho Sprints, UserVoice, Intercom, VWO, Taboola, Maven, Jenkins, Oracle, Hotjar, SQL, MS Tech Stack background, Zapier, Amplitude, Trello" />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      {/* </Paper> */}
    </div>
  );
};
SeventhTemplate.propTypes = {
  isTemplateDrawerOpen: PropTypes.bool.isRequired,
  isDesignPanelOpen: PropTypes.bool.isRequired,
  improvedTextOpen: PropTypes.bool.isRequired,
  fontStyle: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default SeventhTemplate;
