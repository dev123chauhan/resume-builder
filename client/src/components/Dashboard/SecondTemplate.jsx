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
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
      margin: "0 auto",
      backgroundColor: "white",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease-in-out",
    },
    containerShift: {
      transform: "translateX(100px)",
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
          role: "Buisness Analyst",
          company: "Lauzon",
          date: "2013-2016",
          location: "Dallas, TX",
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

        {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
          <SectionTitle style={{color: textColor}} className={`${getFontClass()}`}>{layout.experience?.title}</SectionTitle>
          <hr style={{border:"0.5px solid black", marginBottom:"0.5rem"}}/>
        {/* </div> */}
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
              <span className={`${getFontClass()}`}>
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
                  className={classes.responsibilities}
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
      </Grid>
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




// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// // import Paper from "@mui/material/Paper";
// import Divider from "@mui/material/Divider";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";

// const SectionTitle = styled(Typography)(() => ({
//   fontWeight: "bold",
//   fontSize: "1.25rem",
// }));

// const SectionContent = styled(Typography)(({ theme }) => ({
//   marginBottom: theme.spacing(1),
// }));

// const SkillItem = styled(Typography)(({ theme }) => ({
//   display: "inline-block",
//   margin: theme.spacing(0.5),
//   padding: theme.spacing(0.5, 1),
//   backgroundColor: theme.palette.primary.light,
//   borderRadius: theme.spacing(1),
//   color: theme.palette.primary.contrastText,
// }));

// const ExperienceItem = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(1),
//   marginBottom: theme.spacing(1),
//   borderLeft: `4px solid ${theme.palette.primary.main}`,
// }));

// const EducationItem = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(1),
//   marginBottom: theme.spacing(1),
// }));

// const Footer = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(2),
//   textAlign: "center",
//   backgroundColor: theme.palette.grey[200],
// }));

// export default function SecondTemplate() {
//   return (
//     <div>
//       <div style={{ textAlign: "center" }}>
//         <Typography variant="h4" gutterBottom>
//           JONATHAN WRIGHT
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           Lead Business Analyst
//         </Typography>

//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "20px",
//           }}
//         >
//           <Typography
//             style={{ alignItems: "center", display: "flex" }}
//             variant="body2"
//           >
//             {" "}
//             <PhoneIcon />
//             +1-921-389-0182
//           </Typography>

//           <Typography
//             style={{ alignItems: "center", display: "flex" }}
//             variant="body2"
//           >
//             {" "}
//             <EmailIcon />
//             name@gmail.com
//           </Typography>

//           <Typography
//             style={{ alignItems: "center", display: "flex" }}
//             variant="body2"
//           >
//             <LinkedInIcon /> linkedin.com/in/jonwrightjr
//           </Typography>
//         </div>
//       </div>

//       <Grid item xs={12} md={8}>
//         <SectionTitle style={{textAlign:"center"}}>Summary</SectionTitle>
//         <hr />
//         <SectionContent>
//           I am an experienced Business Analyst with a strong technical
//           background and great project management skills. I am able to work on
//           multiple projects at the same time, which over the years at Network
//           Solutions have lead to eight-digit efficiencies for the business.
//           Furthermore, I immensely enjoy the process of deriving critical
//           business insights using analytics, and then supporting or directly
//           managing the efficiency implementation projects. My ability to move
//           from analysis or leading a team of analysts to supporting or leading
//           the actual project is something that could help further accelerate the
//           velocity of work at lon Insights.
//         </SectionContent>

//         <SectionTitle>Skills</SectionTitle>
//         <Box sx={{ display: "flex", flexWrap: "wrap" }}>
//           <SkillItem>Budgeting</SkillItem>
//           <SkillItem>Financial Analysis</SkillItem>
//           <SkillItem>Project Management</SkillItem>
//           <SkillItem>Stakeholder Management</SkillItem>
//           <SkillItem>Business Strategy</SkillItem>
//           <SkillItem>Excel</SkillItem>
//           <SkillItem>VBA</SkillItem>
//           <SkillItem>SQL</SkillItem>
//           <SkillItem>QuickBooks</SkillItem>
//           <SkillItem>Power BI</SkillItem>
//           <SkillItem>Tableau</SkillItem>
//           <SkillItem>Python</SkillItem>
//         </Box>

//         <SectionTitle>Experience</SectionTitle>
//         <ExperienceItem>
//           <Typography variant="h6" gutterBottom>
//             Network Solutions LLC
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             Lead Business Analyst & Project Manager
//           </Typography>
//           <Typography variant="body2" gutterBottom>
//             Dallas, TX
//             <br />
//             2019-Ongoing
//           </Typography>
//           <ul>
//             <li>
//               Created new strategies to manage $2 million of accounts at risk,
//               resulting in an increase of 4% in revenue in 6 months.
//             </li>
//             <li>
//               Led the effort to deploy an automated time & expense reporting
//               system for more than 90 onsite and offsite personnel across 3
//               locations.
//             </li>
//             <li>
//               Oversaw the budget and schedule of a project to recruit, hire, and
//               train 150 new employees at five new locations.
//             </li>
//           </ul>
//         </ExperienceItem>
//         <ExperienceItem>
//           <Typography variant="h6" gutterBottom>
//             Senior Business Analyst
//           </Typography>
//           <Typography variant="body2" gutterBottom>
//             2017-2019
//           </Typography>
//           <ul>
//             <li>
//               Through an improved pricing model, increased gross revenue of 15%
//               in 2018 compared to 2017 with no change to fixed costs.
//             </li>
//             <li>
//               Reduced warehouse processing time by 30% in just 3 months while
//               industry norm is 10 months.
//             </li>
//             <li>
//               Achieved project milestones and deliverables with an internal and
//               external team of 10+ analysts.
//             </li>
//           </ul>
//         </ExperienceItem>
//         <ExperienceItem>
//           <Typography variant="h6" gutterBottom>
//             Lauzon
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             Business Analyst
//           </Typography>
//           <Typography variant="body2" gutterBottom>
//             Dallas, TX
//             <br />
//             2013-2016
//           </Typography>
//           <ul>
//             <li>
//               Lauzon is a 30-year-old limited company in the printing and
//               packaging field with over 150 employees.
//             </li>
//             <li>Prepared 2016 Budget with Variance analysis to prior years.</li>
//             <li>
//               Assisted merger in advanced electronics space, identifying synergy
//               opportunities of $ 60 M.
//             </li>
//             <li>
//               Reduced IPS (Customer Issues) by 2.2% while impacting merely 3% of
//               GMV.
//             </li>
//             <li>Designed and maintained 10+ data integration jobs.</li>
//           </ul>
//         </ExperienceItem>

//         <SectionTitle>Education</SectionTitle>
//         <EducationItem>
//           <Typography variant="h6" gutterBottom>
//             University of Wisconsin
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             M.Sc. in Finance
//           </Typography>
//           <Typography variant="body2" gutterBottom>
//             Wisconsin
//             <br />
//             2012-2013
//           </Typography>
//         </EducationItem>
//         <EducationItem>
//           <Typography variant="h6" gutterBottom>
//             University of Wisconsin
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             BBA: Business, Supply Chain Management
//           </Typography>
//           <Typography variant="body2" gutterBottom>
//             Wisconsin
//             <br />
//             2008-2012
//           </Typography>
//         </EducationItem>

//         <SectionTitle>Courses & Certificates</SectionTitle>
//         <SectionContent>
//           PMI Professional in Business Analysis (PBA) - PMI, 2019
//           <br />
//           Certified Associate in Project Management (CAPM) - PMI, 2018
//           <br />
//           High-Dimensional Data Analysis - Harvard, 2017
//         </SectionContent>
//       </Grid>
//       <Footer>
//         <Typography variant="body2">www.enhancv.com</Typography>
//         <Divider sx={{ margin: "1rem 0" }} />
//         <Typography variant="body2">Powered by Enhancu</Typography>
//       </Footer>
//     </div>
//   );
// }





// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import PropTypes from "prop-types";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import { makeStyles } from "@mui/styles";
// import { useState } from "react";
// import EditableDiv from "./EditableDiv";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { Button, IconButton } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// const SectionTitle = styled(Typography)(() => ({
//   fontWeight: "bold",
//   fontSize: "1.25rem",
// }));

// const SectionContent = styled(Typography)(({ theme }) => ({
//   marginBottom: theme.spacing(1),
// }));



// const useStyles = makeStyles(
//   (theme) => ({
//     container: {
//       padding: theme.spacing(4),
//       maxWidth: "800px",
//       margin: "0 auto",
//       backgroundColor: "white",
//       boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//       transition: "transform 0.3s ease-in-out",
//     },
//     containerShift: {
//       transform: "translateX(100px)",
//     },
//   }),
//   { name: "SecondTemplate" }
// );

// export default function SecondTemplate({
//   isTemplateDrawerOpen,
//   isDesignPanelOpen,
//   improvedTextOpen,
//   fontStyle,
// }) {
//   const classes = useStyles({ fontStyle });
  // const [layout, setLayout] = useState({
  //   // Initialize with the current static content
  //   name: "JONATHAN WRIGHT",
  //   title: "Lead Business Analyst",
  //   contact: {
  //     phone: "+1-921-389-0182",
  //     email: "name@gmail.com",
  //     linkedin: "linkedin.com/in/jonwrightjr",
  //   },
  //   summary: {
  //     title: "SUMMARY",
  //     content: `I am an experienced Business Analyst with a strong technical
  //     background and great project management skills. I am able to work on
  //     multiple projects at the same time, which over the years at Network
  //     Solutions have led to eight-digit efficiencies for the business.
  //     Furthermore, I immensely enjoy the process of deriving critical
  //     business insights using analytics, and then supporting or directly
  //     managing the efficiency implementation projects. My ability to move
  //     from analysis or leading a team of analysts to supporting or leading
  //     the actual project is something that could help further accelerate the
  //     velocity of work at Ion Insights.`,
  //   },
  //   skills: {
  //     title: "SKILLS",
  //     items: [
  //       "Budgeting",
  //       "Financial Analysis",
  //       "Project Management",
  //       "Stakeholder Management",
  //       "Excel",
  //       "VBA",
  //       "SQL",
  //       "QuickBooks",
  //       "Power BI",
  //       "Tableau",
  //       "Python",
  //     ],
  //   },
  //   experience: {
  //     title: "EXPERIENCE",
  //     items: [
  //       {
  //         role: "Lead Business Analyst & Project Manager",
  //         company: "Network Solutions LLC",
  //         date: "2019-Ongoing",
  //         location: "Dallas, TX",
  //         responsibilities: [
  //           `Created new strategies to manage $2 million of accounts at risk,
  //       resulting in an increase of 4% in revenue in 6 months.`,
  //           `Led the effort to deploy an automated time & expense reporting
  //       system for more than 90 onsite and offsite personnel across 3
  //       locations.`,
  //           `Oversaw the budget and schedule of a project to recruit, hire, and
  //       train 150 new employees at five new locations.`,
  //         ],
  //       },
  //       {
  //         role: "Buisness Analyst",
  //         company: "Lauzon",
  //         date: "2013-2016",
  //         location: "Dallas, TX",
  //         responsibilities: [
  //           "Planned, beta-tested and led the rollout of a new internal communications system to all 400+ employees in 6 locations",
  //           "Led the research for building the personal development platform (Sunrise employees still use currently)",
  //           "Managed recruitment and resources training (more than 50 resources trained and onboarded)",
  //           "Managed the research and built the new pricing strategy",
  //           "Led a team of 16 engineers working on a new media library solution",
  //           "Cut Prospect application time in half, increased application submit rates by 30%, and improved approval rates by 20%",
  //         ],
  //       },
  //     ],
  //   },
  //   education: {
  //     title: "EDUCATION",
  //     items: [
  //       {
  //         school: "University of Wisconsin",
  //         degree: "M.Sc. in Finance",
  //         location: "Wisconsin",
  //         duration: "2012-2013",
  //       },
  //       {
  //         school: "University of Wisconsin",
  //         degree: "BBA: Business, Supply Chain Management",
  //         location: "Wisconsin",
  //         duration: "2008-2012",
  //       },
  //     ]
  //   },
    
  //   courses: {
  //     title: "COURSE AND CERTIFICATE",
  //     items: [
  //       "PMI Professional in Business Analysis (PBA) - PMI, 2019",
  //       "Certified Associate in Project Management (CAPM) - PMI, 2018",
  //       "High-Dimensional Data Analysis - Harvard, 2017",
  //     ],
  //   },
  // });

//   const handleEdit = (section, field, value) => {
//     setLayout((prevLayout) => ({
//       ...prevLayout,
//       [section]: {
//         ...prevLayout[section],
//         [field]: value,
//       },
//     }));
//   };



//   const getStringContent = (content) => {
//     return typeof content === "string" ? content : "";
//   };

//   const handleDelete = (section, index) => {
//     setLayout((prevLayout) => ({
//       ...prevLayout,
//       [section]: {
//         ...prevLayout[section],
//         items: prevLayout[section].items.filter((_, idx) => idx !== index),
//       },
//     }));
//   };

//   const handleAdd = (section) => {
//     setLayout((prevLayout) => ({
//       ...prevLayout,
//       [section]: {
//         ...prevLayout[section],
//         items: [...(prevLayout[section]?.items || []), {}], // Add an empty item
//       },
//     }));
//   };

//   return (
//     <div
//       className={`${classes.container} ${
//         isTemplateDrawerOpen || isDesignPanelOpen || improvedTextOpen
//           ? classes.containerShift
//           : ""
//       } ${getFontClass()}`}
//     >
//       <div style={{ textAlign: "center" }}>
//         <Typography variant="h4" gutterBottom>
//           <EditableDiv
//             content={getStringContent(layout.name)}
//             onEdit={(value) => handleEdit("name", value)}
//             //  className={classes.name}
//           />
//         </Typography>
//         <Typography variant="p" gutterBottom>
//           <EditableDiv
//             content={getStringContent(layout.title)}
//             onEdit={(value) => handleEdit("title", value)}
//           />
//         </Typography>

//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "20px",
//           }}
//         >
//           <Typography
//             style={{ alignItems: "center", display: "flex" }}
//             variant="body2"
//           >
//             {" "}
//             <PhoneIcon />
//             <EditableDiv
//               content={layout.contact.phone}
//               onEdit={(value) => handleEdit("contact", "phone", value)}
//             />
//           </Typography>

//           <Typography
//             style={{ alignItems: "center", display: "flex" }}
//             variant="body2"
//           >
//             {" "}
//             <EmailIcon />
//             <EditableDiv
//               content={layout.contact.email}
//               onEdit={(value) => handleEdit("contact", "email", value)}
//             />
//           </Typography>

//           <Typography
//             style={{ alignItems: "center", display: "flex" }}
//             variant="body2"
//           >
//             <LinkedInIcon />{" "}
//             <EditableDiv
//               content={layout.contact.linkedin}
//               onEdit={(value) => handleEdit("contact", "linkedin", value)}
//             />
//           </Typography>
//         </div>
//       </div>

//       <Grid item xs={12} md={8}>
//         <SectionTitle style={{ textAlign: "center" }}>
//           {layout.summary?.title || ""}
//         </SectionTitle>
//         <hr />
//         <SectionContent>
//           <EditableDiv
//             content={getStringContent(layout.summary?.content)}
//             onEdit={(value) => handleEdit("summary", "content", value)}
//             className={classes.summary}
//           />
//         </SectionContent>

//         <SectionTitle>{layout.skills?.title || ""}</SectionTitle>
//         <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//           {layout.skills?.items?.map((item, index) => (
//             <EditableDiv
//               key={index}
//               content={getStringContent(item)}
//               onEdit={(value) =>
//                 handleEdit(
//                   "skills",
//                   "items",
//                   layout.skills.items.map((i, idx) =>
//                     idx === index ? value : i
//                   )
//                 )
//               }
//             />
//           ))}
//         </Box>

//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <SectionTitle>{layout.experience?.title}</SectionTitle>
//           <Button
//             variant="outlined"
//             color="primary"
//             startIcon={<AddIcon />}
//             onClick={() => handleAdd("experience")}
//           >
//             Add
//           </Button>
//         </div>
//         {layout.experience?.items?.map((item, index) => (
//           <Box key={index} mb={2} display="flex" alignItems="center">
//             <Box flexGrow={1}>
//               <EditableDiv
//                 content={getStringContent(item.company)}
//                 onEdit={(value) =>
//                   handleEdit(
//                     "experience",
//                     "items",
//                     layout.experience.items.map((i, idx) =>
//                       idx === index ? { ...i, company: value } : i
//                     )
//                   )
//                 }
//                 className={classes.company}
//               />
//               <EditableDiv
//                 content={getStringContent(item.role)}
//                 onEdit={(value) =>
//                   handleEdit(
//                     "experience",
//                     "items",
//                     layout.experience.items.map((i, idx) =>
//                       idx === index ? { ...i, role: value } : i
//                     )
//                   )
//                 }
//                 className={classes.role}
//               />

//               <EditableDiv
//                 content={getStringContent(item.location)}
//                 onEdit={(value) =>
//                   handleEdit(
//                     "experience",
//                     "items",
//                     layout.experience.items.map((i, idx) =>
//                       idx === index ? { ...i, location: value } : i
//                     )
//                   )
//                 }
//                 className={classes.location}
//               />
              
//               <EditableDiv
//                     content={getStringContent(item.responsibilities)}
//                     onEdit={(value) =>
//                       handleEdit(
//                         "experience",
//                         "items",
//                         layout.experience.items.map((i, idx) =>
//                           idx === index ? { ...i, responsibilities: value } : i
//                         )
//                       )
//                     }
//                     className={classes.responsibilities}
//                   />
           
//             </Box>
//             <IconButton
//               className={classes.deleteButton}
//               onClick={() => handleDelete("experience", index)}
//             >
//               <RiDeleteBin6Line />
//             </IconButton>
//           </Box>
//         ))}

    
  

//   <div style={{display:"flex", justifyContent:"space-between"}}>

//         <SectionTitle>     {layout.education?.title || ""}</SectionTitle>
//         <Button
//                 variant="outlined"
//                 color="primary"
//                 className={classes.addButton}
//                 startIcon={<AddIcon />}
//                 onClick={() => handleAdd("education")}
//               >
//                 Add
//               </Button>
//   </div>
   
        
//             {layout.education?.items?.map((item, index) => (
//               <Box key={index} mb={2} display="flex" alignItems="center">
//                 <Box flexGrow={1}>
//                 <EditableDiv
//                     content={getStringContent(item.school)}
//                     onEdit={(value) =>
//                       handleEdit(
//                         "education",
//                         "items",
//                         layout.education.items.map((i, idx) =>
//                           idx === index ? { ...i, school: value } : i
//                         )
//                       )
//                     }
//                     className={classes.school}
//                   />
//                   <EditableDiv
//                     content={getStringContent(item.degree)}
//                     onEdit={(value) =>
//                       handleEdit(
//                         "education",
//                         "items",
//                         layout.education.items.map((i, idx) =>
//                           idx === index ? { ...i, degree: value } : i
//                         )
//                       )
//                     }
//                     className={classes.degree}
//                   />
               
//                   <EditableDiv
//                     content={getStringContent(item.location)}
//                     onEdit={(value) =>
//                       handleEdit(
//                         "education",
//                         "items",
//                         layout.education.items.map((i, idx) =>
//                           idx === index ? { ...i, date: value } : i
//                         )
//                       )
//                     }
//                     className={classes.date}
//                   />
//                   <EditableDiv
//                     content={getStringContent(item.duration)}
//                     onEdit={(value) =>
//                       handleEdit(
//                         "education",
//                         "items",
//                         layout.education.items.map((i, idx) =>
//                           idx === index ? { ...i, gpa: value } : i
//                         )
//                       )
//                     }
//                     className={classes.gpa}
//                   />
//                 </Box>
//                 <IconButton
//                   className={classes.deleteButton}
//                   onClick={() => handleDelete("education", index)}
//                 >
//                   <RiDeleteBin6Line />
//                 </IconButton>
//               </Box>
//             ))}
       

//         <SectionTitle>{layout.courses?.title}</SectionTitle>
//         {/* <SectionContent> */}
//         {layout.courses?.items?.map((item, index) => (
//           <EditableDiv
//             key={index}
//             content={getStringContent(item)}
//             onEdit={(value) =>
//               handleEdit(
//                 "courses",
//                 "items",
//                 layout.courses.items.map((i, idx) =>
//                   idx === index ? value : i
//                 )
//               )
//             }
//           />
//         ))}
//       </Grid>
//     </div>
//   );
// }
// SecondTemplate.propTypes = {
//   isTemplateDrawerOpen: PropTypes.bool.isRequired,
//   isDesignPanelOpen: PropTypes.bool.isRequired,
//   improvedTextOpen: PropTypes.bool.isRequired,
//   fontStyle: PropTypes.string.isRequired,
// };



// const SkillItem = styled(Typography)(({ theme }) => ({
//   display: "inline-block",
//   margin: theme.spacing(0.5),
//   padding: theme.spacing(0.5, 1),
//   // backgroundColor: theme.palette.primary.light,
//   borderRadius: theme.spacing(1),
//   // color: theme.palette.primary.contrastText,
// }));

// const ExperienceItem = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(1),
//   marginBottom: theme.spacing(1),
//   // borderLeft: `4px solid ${theme.palette.primary.main}`,
// }));

// const EducationItem = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(1),
//   marginBottom: theme.spacing(1),
// }));



     {/* <EducationItem>
          <Typography variant="h6" gutterBottom>
            University of Wisconsin
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            M.Sc. in Finance
          </Typography>
          <Typography variant="body2" gutterBottom>
            Wisconsin
            <br />
            2012-2013
          </Typography>
        </EducationItem>
        <EducationItem>
          <Typography variant="h6" gutterBottom>
            University of Wisconsin
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            BBA: Business, Supply Chain Management
          </Typography>
          <Typography variant="body2" gutterBottom>
            Wisconsin
            <br />
            2008-2012
          </Typography>
        </EducationItem> */}

   
              {/* <Typography style={{fontWeight:"bold"}} className={`${getFontClass()}`} variant="h6">
                {layout.education?.title || ""}
              </Typography> */}



                  {/* <ExperienceItem>
          <Typography variant="h6" gutterBottom>
            Network Solutions LLC
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Lead Business Analyst & Project Manager
          </Typography>
          <Typography variant="body2" gutterBottom>
            Dallas, TX
            <br />
            2019-Ongoing
          </Typography>
          <ul>
            <li>
              Created new strategies to manage $2 million of accounts at risk,
              resulting in an increase of 4% in revenue in 6 months.
            </li>
            <li>
              Led the effort to deploy an automated time & expense reporting
              system for more than 90 onsite and offsite personnel across 3
              locations.
            </li>
            <li>
              Oversaw the budget and schedule of a project to recruit, hire, and
              train 150 new employees at five new locations.
            </li>
          </ul>
        </ExperienceItem>
        <ExperienceItem>
          <Typography variant="h6" gutterBottom>
            Senior Business Analyst
          </Typography>
          <Typography variant="body2" gutterBottom>
            2017-2019
          </Typography>
          <ul>
            <li>
              Through an improved pricing model, increased gross revenue of 15%
              in 2018 compared to 2017 with no change to fixed costs.
            </li>
            <li>
              Reduced warehouse processing time by 30% in just 3 months while
              industry norm is 10 months.
            </li>
            <li>
              Achieved project milestones and deliverables with an internal and
              external team of 10+ analysts.
            </li>
          </ul>
        </ExperienceItem>
        <ExperienceItem>
          <Typography variant="h6" gutterBottom>
            Lauzon
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Business Analyst
          </Typography>
          <Typography variant="body2" gutterBottom>
            Dallas, TX
            <br />
            2013-2016
          </Typography>
          <ul>
            <li>
              Lauzon is a 30-year-old limited company in the printing and
              packaging field with over 150 employees.
            </li>
            <li>Prepared 2016 Budget with Variance analysis to prior years.</li>
            <li>
              Assisted merger in advanced electronics space, identifying synergy
              opportunities of $ 60 M.
            </li>
            <li>
              Reduced IPS (Customer Issues) by 2.2% while impacting merely 3% of
              GMV.
            </li>
            <li>Designed and maintained 10+ data integration jobs.</li>
          </ul>
        </ExperienceItem> */}