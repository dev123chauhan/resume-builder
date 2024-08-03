import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import EditableDiv from "./EditableDiv";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button, IconButton, Dialog, DialogContent, DialogActions, } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SecondResume from "../Resumes/SecondResume";

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

export default function SecondTemplate({
  isTemplateDrawerOpen,
  isDesignPanelOpen,
  improvedTextOpen,
  fontStyle, textColor
}) {
  const classes = useStyles({ fontStyle });
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [layout, setLayout] = useState({
    // Initialize with the current static content
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
          role: "Lead Business Analyst & Project Manager",
          company: "Network Solutions LLC",
          date: "2019-Ongoing",
          location: "Dallas, TX",
          responsibilities: [
            `Created new strategies to manage $2 million of accounts at risk, resulting in an increase of 4% in revenue in 6 months.`,
            `Led the effort to deploy an automated time & expense reporting system for more than 90 onsite and offsite personnel across 3 locations.`,
            // `Oversaw the budget and schedule of a project to recruit, hire, and train 150 new employees at five new locations.`,
          ],
        },
        {
          role: "Buisness Analyst",
          company: "Lauzon",
          date: "2013-2016",
          location: "Dallas, TX",
          responsibilities: [
            "Planned, beta-tested and led the rollout of a new internal communications system to all 400+ employees in 6 locations",
            "Led the research for building the personal development platform (Sunrise employees still use currently)",
            // "Managed recruitment and resources training (more than 50 resources trained and onboarded)",
            // "Managed the research and built the new pricing strategy",
            // "Led a team of 16 engineers working on a new media library solution",
            // "Cut Prospect application time in half, increased application submit rates by 30%, and improved approval rates by 20%",
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
  });

  const handleEdit = (section, field, value) => {
    setLayout((prevLayout) => ({
      ...prevLayout,
      [section]: {
        ...prevLayout[section],
        [field]: value,
      },
    }));
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

  const getStringContent = (content) => {
    return typeof content === "string" ? content : "";
  };

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
  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <div
      className={`${classes.container} ${
        isTemplateDrawerOpen || isDesignPanelOpen || improvedTextOpen
          ? classes.containerShift
          : ""
      } ${getFontClass()}`}
    >
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          <span style={{color: textColor}} className={`${getFontClass()}`}>
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
            <EmailIcon />
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
            <LinkedInIcon />
            <span className={`${getFontClass()}`}>
              <EditableDiv
                content={layout.contact.linkedin}
                onEdit={(value) => handleEdit("contact", "linkedin", value)}
              />
            </span>
          </Typography>
        </div>
      </div>
       {/* summary */}
      <Grid item xs={12} md={8}>
        <SectionTitle style={{color: textColor}} className={`${getFontClass()}`}>
          {layout.summary?.title || ""}
        </SectionTitle>
        <hr style={{border:"0.5px solid black", marginBottom:"0.5rem"}}/>
        <SectionContent>
          <span className={`${getFontClass()}`}>
            <EditableDiv
              content={getStringContent(layout.summary?.content)}
              onEdit={(value) => handleEdit("summary", "content", value)}
              className={classes.summary}
            />
          </span>
        </SectionContent>


{/* skill  */}
        <SectionTitle style={{color: textColor}} className={`${getFontClass()}`}>{layout.skills?.title || ""}</SectionTitle>
        <hr style={{border:"0.5px solid black", marginBottom:"0.5rem"}}/>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {layout.skills?.items?.map((item, index) => (
            <span key={index} className={`${getFontClass()}`}>
              <EditableDiv
                content={getStringContent(item)}
                onEdit={(value) =>
                  handleEdit(
                    "skills",
                    "items",
                    layout.skills.items.map((i, idx) =>
                      idx === index ? value : i
                    )
                  )
                }
              />
            </span>
          ))}
        </Box>

      {/* experience  */}
          <SectionTitle style={{color: textColor}} className={`${getFontClass()}`}>{layout.experience?.title}</SectionTitle>
          <hr style={{border:"0.5px solid black", marginBottom:"0.5rem"}}/>
    
        {layout.experience?.items?.map((item, index) => (
          <Box key={index} mb={2} display="flex" alignItems="center">
            <Box flexGrow={1}>
              <span className={`${getFontClass()}`}>
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
              <span style={{fontWeight:"bold"}} className={`${getFontClass()}`}>
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
                  className={classes.role}
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
                />
              </span>
            </Box>
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
          </Box>
        ))}


  {/* education */}
     
          <SectionTitle style={{color: textColor}} className={`${getFontClass()}`}>{layout.education?.title || ""}</SectionTitle>
          <hr style={{border:"0.5px solid black", marginBottom:"0.5rem"}}/>
        
        

        
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
              <span style={{fontWeight:"bold"}} className={`${getFontClass()}`}>
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

        <SectionTitle style={{color: textColor}} className={`${getFontClass()}`}>{layout.courses?.title}</SectionTitle>
        <hr style={{border:"0.5px solid black", marginBottom:"0.5rem"}}/>
        {layout.courses?.items?.map((item, index) => (
          <span key={index} className={`${getFontClass()}`}>
            <EditableDiv
              content={getStringContent(item)}
              onEdit={(value) =>
                handleEdit(
                  "courses",
                  "items",
                  layout.courses.items.map((i, idx) =>
                    idx === index ? value : i
                  )
                )
              }
            />
          </span>
        ))}
        <Button
        style={{width:"100%", marginTop:"30px"}}
        variant="contained"
        onClick={() => setIsPreviewOpen(true)}
      >
        Preview Resume
      </Button>
      </Grid>
      <Dialog open={isPreviewOpen} onClose={handleClosePreview} fullWidth maxWidth="md">
        <DialogContent>
          <SecondResume
            fontStyle={fontStyle}
            textColor={textColor}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePreview} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

SecondTemplate.propTypes = {
  isTemplateDrawerOpen: PropTypes.bool.isRequired,
  isDesignPanelOpen: PropTypes.bool.isRequired,
  improvedTextOpen: PropTypes.bool.isRequired,
  fontStyle: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};




