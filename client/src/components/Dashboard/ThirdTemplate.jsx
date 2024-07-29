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
  Divider,
  IconButton, Button
} from "@mui/material";
import { Phone, Email, LinkedIn, LocationOn, Star } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";
import useAuth from "../../hooks/useAuth";
import noProfile from "../../assets/noProfile.jpg";
import { useState } from "react";
import EditableDiv from "./EditableDiv";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddIcon from "@mui/icons-material/Add";
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

  const [layout, setLayout] = useState({
    // Initialize with the current static content
    name: "JAMES MOORE",
    title: "Experienced Project Manager",
    contact: {
      phone: "+1-921-389-0182",
      email: "name@gmail.com",
      linkedin: "linkedin.com/in/jonwrightjr",
      location: "New York City, NY",
    },
    summary: {
      title: "SUMMARY",
      content: `Result-oriented project team leader with 5 years of experience
                covering project and product management including developing, implementing and supporting
                complex infrastructures for fast growing startups. A fast and eager learner. I am detail oriented and adapt 
                to changing project requirements quickly to meet buisness goals comfortable with ambibuity and able to 
                thrive in a fast paced environment`,
    },
    skills: {
      title: "SKILLS",
      items: [
        "Budgeting",
        "Financial Analysis",
        "Project Management",
        "Stakeholder Management",
        "Excel",
        "VBA",
        "SQL",
        "QuickBooks",
        "Power BI",
        "Tableau",
        "Python",
      ],
    },
    experience: {
      title: "EXPERIENCE",
      items: [
        {
          role: "Senior IT Product Manager",
          company: "Rover Games",
          date: "2019-Ongoing",
          location: "Dallas, TX",
          desc: "Rover Games is a multi-play mobile game app development film that has successfully titles such as Drink Something. Trivia Tonight and King's Fight",
          responsibilities: [
            `Created new strategies to manage $2 million of accounts at risk,
        resulting in an increase of 4% in revenue in 6 months.`,
            `Led the effort to deploy an automated time & expense reporting
        system for more than 90 onsite and offsite personnel across 3
        locations.`,
            `Oversaw the budget and schedule of a project to recruit, hire, and
        train 150 new employees at five new locations.`,
          ],
        },
        {
          role: "Project Manager",
          company: "Tesla",
          date: "2013-2016",
          location: "Dallas, TX",
          desc:"Tesla is an electric vehicle manufacturer that is revolutionizing the automobile industry energy and transportation",
          responsibilities: [
            "Planned, beta-tested and led the rollout of a new internal communications system to all 400+ employees in 6 locations",
            "Led the research for building the personal development platform (Sunrise employees still use currently)",
            "Managed recruitment and resources training (more than 50 resources trained and onboarded)",
            "Managed the research and built the new pricing strategy",
            "Led a team of 16 engineers working on a new media library solution",
            "Cut Prospect application time in half, increased application submit rates by 30%, and improved approval rates by 20%",
          ],
        },
        {
          role: "Project Coordinator",
          company: "Wolf Industry",
          date: "2013-2016",
          location: "Dallas, TX",
          desc:"Wolf Industries is a home appliance part supplier to leading appliance manufacturers including GE",
          responsibilities: [
            "Planned, beta-tested and led the rollout of a new internal communications system to all 400+ employees in 6 locations",
            "Led the research for building the personal development platform (Sunrise employees still use currently)",
            "Managed recruitment and resources training (more than 50 resources trained and onboarded)",
            "Managed the research and built the new pricing strategy",
            "Led a team of 16 engineers working on a new media library solution",
            "Cut Prospect application time in half, increased application submit rates by 30%, and improved approval rates by 20%",
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
      ],
    },

    courses: {
      title: "COURSE AND CERTIFICATE",
      items: [
        "PMI Professional in Business Analysis (PBA) - PMI, 2019",
        "Certified Associate in Project Management (CAPM) - PMI, 2018",
        "High-Dimensional Data Analysis - Harvard, 2017",
      ],
    },
  });
  const handleDelete = (section, index) => {
    setLayout((prevLayout) => ({
      ...prevLayout,
      [section]: {
        ...prevLayout[section],
        items: prevLayout[section].items.filter((_, idx) => idx !== index),
      },
    }));
  };

  const handleAdd = (section) => {
    setLayout((prevLayout) => ({
      ...prevLayout,
      [section]: {
        ...prevLayout[section],
        items: [...(prevLayout[section]?.items || []), {}],
      },
    }));
  };
  const handleEdit = (section, field, value) => {
    setLayout((prevLayout) => ({
      ...prevLayout,
      [section]: {
        ...prevLayout[section],
        [field]: value,
      },
    }));
  };

  const getStringContent = (content) => {
    return typeof content === "string" ? content : "";
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
      <div elevation={3} style={{ paddingLeft: "30px", paddingTop: "30px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" gutterBottom>
              <span
                style={{ color: textColor }}
                className={`${getFontClass()}`}
              >
                <EditableDiv
                  content={getStringContent(layout.name)}
                  onEdit={(value) => handleEdit("name", value)}
                />
              </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <span className={`${getFontClass()}`}>
                <EditableDiv
                  content={getStringContent(layout.title)}
                  onEdit={(value) => handleEdit("title", value)}
                />
              </span>
            </Typography>
            <Box mt={2}>
              <Typography
                style={{ alignItems: "center", display: "flex" }}
                variant="body2"
              >
                <Phone />
                <span className={`${getFontClass()}`}>
                  <EditableDiv
                    content={layout.contact.phone}
                    onEdit={(value) => handleEdit("contact", "phone", value)}
                  />
                </span>
              </Typography>

              <Typography
                style={{ alignItems: "center", display: "flex" }}
                variant="body2"
              >
                <Email />
                <span className={`${getFontClass()}`}>
                  <EditableDiv
                    content={layout.contact.email}
                    onEdit={(value) => handleEdit("contact", "email", value)}
                  />
                </span>
              </Typography>

              <Typography
                style={{ alignItems: "center", display: "flex" }}
                variant="body2"
              >
                <LinkedIn />
                <span className={`${getFontClass()}`}>
                  <EditableDiv
                    content={layout.contact.linkedin}
                    onEdit={(value) => handleEdit("contact", "linkedin", value)}
                  />
                </span>
              </Typography>

      

              <Typography
                style={{ alignItems: "center", display: "flex" }}
                variant="body2"
              >
                <LocationOn />
                <span className={`${getFontClass()}`}>
                  <EditableDiv
                    content={layout.contact.location}
                    onEdit={(value) => handleEdit("contact", "location", value)}
                  />
                </span>
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h5" component="h3" className={`${getFontClass()}`}>
              {layout.summary?.title || ""}
              </Typography>
              <Divider style={{marginBottom:"5px"}}/>
              <Typography variant="body1">
              <span className={`${getFontClass()}`}>
            <EditableDiv
              content={getStringContent(layout.summary?.content)}
              onEdit={(value) => handleEdit("summary", "content", value)}
              className={classes.summary}
            />
          </span>
              </Typography>
            </Box>
            <Box mt={4}> 
              <Typography variant="h5" component="h3"  className={`${getFontClass()}`}>
              {layout.experience?.title || ""}
              </Typography>
              <Divider style={{marginBottom:"5px"}}/>
              {/* <Typography variant="h6" component="h4">
                Senior IT Product Manager
              </Typography>
              <Typography variant="body2">
                Rover Games | 02/2019 - Ongoing | San Francisco, CA
              </Typography>
              <Typography variant="body1">
                Rover Games is a multi-play mobile game app development firm
                that has successful titles such as Drink...
              </Typography> */}
              {layout.experience?.items?.map((item, index) => (
          <Box key={index} mb={2} display="flex" alignItems="center">
            <Box flexGrow={1}>
            <span style={{display:"flex", alignItems:"center", justifyContent:"space-between"}} className={`${getFontClass()}`}>
                <EditableDiv
                  content={getStringContent(item.role)}
                  onEdit={(value) =>
                    handleEdit(
                      "experience",
                      "items",
                      layout.experience.items.map((i, idx) =>
                        idx === index ? { ...i, role: value } : i
                      )
                    )
                  }
                
                />
                 <span>
              <Button
            style={{color:"black"}}
            startIcon={<AddIcon />}
            onClick={() => handleAdd("experience")}
          >
            Add
          </Button>
            <IconButton
              className={classes.deleteButton}
              onClick={() => handleDelete("experience", index)}
            >
              <RiDeleteBin6Line />
            </IconButton>
            </span>
              </span>
              <span  className={`${getFontClass()}`}>
                <EditableDiv
                  content={getStringContent(item.company)}
                  onEdit={(value) =>
                    handleEdit(
                      "experience",
                      "items",
                      layout.experience.items.map((i, idx) =>
                        idx === index ? { ...i, company: value } : i
                      )
                    )
                  }
                  className={classes.company}
                />
               
              </span>
          
              <span className={`${getFontClass()}`}>
                <EditableDiv
                  content={getStringContent(item.desc)}
                  onEdit={(value) =>
                    handleEdit(
                      "experience",
                      "items",
                      layout.experience.items.map((i, idx) =>
                        idx === index ? { ...i, desc: value } : i
                      )
                    )
                  }
                  className={classes.location}
                />
              </span>
              <span className={`${getFontClass()}`}>
                <EditableDiv
                  content={getStringContent(item.location)}
                  onEdit={(value) =>
                    handleEdit(
                      "experience",
                      "items",
                      layout.experience.items.map((i, idx) =>
                        idx === index ? { ...i, location: value } : i
                      )
                    )
                  }
                  className={classes.location}
                />
              </span>
              <span className={`${getFontClass()}`}>
                <EditableDiv
                  content={getStringContent(item.responsibilities)}
                  onEdit={(value) =>
                    handleEdit(
                      "experience",
                      "items",
                      layout.experience.items.map((i, idx) =>
                        idx === index ? { ...i, responsibilities: value } : i
                      )
                    )
                  }
                  className={classes.responsibilities}
                />
              </span>
            </Box>
       
          </Box>
        ))}
          
            </Box>
            <Box mt={4}>
              <Typography className={`${getFontClass()}`} variant="h5" component="h3">
              {layout.education?.title || ""}
              </Typography>
              <Divider style={{marginBottom:"5px"}}/>
              {layout.education?.items?.map((item, index) => (
          <Box key={index} mb={2} display="flex" alignItems="center">
            <Box flexGrow={1}>
              <span className={`${getFontClass()}`}>
                <EditableDiv
                  content={getStringContent(item.school)}
                  onEdit={(value) =>
                    handleEdit(
                      "education",
                      "items",
                      layout.education.items.map((i, idx) =>
                        idx === index ? { ...i, school: value } : i
                      )
                    )
                  }
                  className={classes.school}
                />
              </span>
              <span className={`${getFontClass()}`}>
                <EditableDiv
                  content={getStringContent(item.degree)}
                  onEdit={(value) =>
                    handleEdit(
                      "education",
                      "items",
                      layout.education.items.map((i, idx) =>
                        idx === index ? { ...i, degree: value } : i
                      )
                    )
                  }
                  className={classes.degree}
                />
              </span>
              <span className={`${getFontClass()}`}>
                <EditableDiv
                  content={getStringContent(item.location)}
                  onEdit={(value) =>
                    handleEdit(
                      "education",
                      "items",
                      layout.education.items.map((i, idx) =>
                        idx === index ? { ...i, location: value } : i
                      )
                    )
                  }
                  className={classes.location}
                />
              </span>
              <span className={`${getFontClass()}`}>
                <EditableDiv
                  content={getStringContent(item.duration)}
                  onEdit={(value) =>
                    handleEdit(
                      "education",
                      "items",
                      layout.education.items.map((i, idx) =>
                        idx === index ? { ...i, duration: value } : i
                      )
                    )
                  }
                  className={classes.duration}
                />
              </span>
            </Box>
            <Button
            style={{color:"black"}}
            startIcon={<AddIcon />}
            onClick={() => handleAdd("education")}
          >
            Add
          </Button>
            <IconButton
              className={classes.deleteButton}
              onClick={() => handleDelete("education", index)}
            >
              <RiDeleteBin6Line />
            </IconButton>
          </Box>
        ))}
            </Box>
            {/* <Box mt={4}>
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
            </Box> */}
          </Grid>

          <Grid item xs={12} sm={4}>
            <span
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Avatar
                src={
                  user?.profileImage
                    ? `http://localhost:5000/uploads/${user.profileImage}`
                    : noProfile
                }
                sx={{ width: 100, height: 100 }}
              />
            </span>
            <Box mb={4}>
              <Typography variant="h6" component="h4">
                Strengths
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Star className={classes.colorText} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Strategic Planner"
                    secondary="Developing steps along the way to achieve..."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Star className={classes.colorText} />
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
                    <Star className={classes.colorText} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Cost Saving Of $100M"
                    secondary="Through efficient project management..."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Star className={classes.colorText} />
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
              <Typography variant="h6" component="h4">
                Languages
              </Typography>
              <Typography className={classes.colorText} variant="body1">
                English · Native
              </Typography>
              <Typography className={classes.colorText} variant="body1">
                Spanish: Castilian · Advanced
              </Typography>
              <Typography className={classes.colorText} variant="body1">
                German · Intermediate
              </Typography>
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
