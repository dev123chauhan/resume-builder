import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Typography,
  IconButton,
  Button,
  Grid, Dialog, DialogContent,
  DialogActions,
  LinearProgress
} from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddIcon from "@mui/icons-material/Add";
import EditableDiv from "./EditableDiv";
import useAuth from "../../hooks/useAuth";
import noProfile from "../../assets/noProfile.jpg";
import useStyles from "./Editable.styles";
import { useState } from "react";
import PDFResume from "./Resume";

const EditableResume = ({
  isTemplateDrawerOpen,
  isDesignPanelOpen,
  layout,
  setLayout,
  fontStyle,
  improvedTextOpen,
  textColor,
}) => {
  const classes = useStyles({ fontStyle });
  const { user } = useAuth();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
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

  const handleEdit = (section, field, value) => {
    setLayout((prevLayout) => ({
      ...prevLayout,
      [section]: {
        ...prevLayout[section],
        [field]: value,
      },
    }));
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
        items: [...(prevLayout[section]?.items || []), {}], // Add an empty item
      },
    }));
  };

  // Function to ensure content is a string
  const getStringContent = (content) => {
    return Array.isArray(content) ? content.join(", ") : content || "";
  };



  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  const getLevelPercentage = (level) => {
    switch (level.toLowerCase()) {
      case 'native': return 100;
      case 'proficient': return 80;
      case 'beginner': return 30;
      default: return 50; // डिफ़ॉल्ट मान
    }
  }; 

  return (
    <div
   
      className={`${classes.container} ${
        isTemplateDrawerOpen || isDesignPanelOpen || improvedTextOpen
          ? classes.containerShift
          : ""
      } ${getFontClass()}`}
    >
      <div className={`${classes.header} ${classes.fontStyleDynamic}`}>
        <div className={classes.headerInfo}>
        <div style={{ color: textColor }}>
          <EditableDiv
         
            content={getStringContent(layout.header?.name)}
            onEdit={(value) => handleEdit("header", "name", value)}
            className={classes.name}
          />
        </div>
          <EditableDiv
            content={getStringContent(layout.header?.title)}
            onEdit={(value) => handleEdit("header", "title", value)}
            className={classes.title}
          />
        </div>
        <Avatar
          style={{ width: 80, height: 80 }}
          className={classes.avatar}
          src={
            user?.profileImage
              ? `http://localhost:5000/uploads/${user.profileImage}`
              : noProfile
          }
        />
      </div>
      <div className={`${classes.contactInfo} ${classes.fontStyleDynamic}`}>
        <EditableDiv
          content={getStringContent(layout.header?.contact?.phone)}
          onEdit={(value) =>
            handleEdit("header", "contact", {
              ...layout.header.contact,
              phone: value,
            })
          }
        />
        <EditableDiv
          content={getStringContent(layout.header?.contact?.email)}
          onEdit={(value) =>
            handleEdit("header", "contact", {
              ...layout.header.contact,
              email: value,
            })
          }
        />
        <EditableDiv
          content={getStringContent(layout.header?.contact?.linkedin)}
          onEdit={(value) =>
            handleEdit("header", "contact", {
              ...layout.header.contact,
              linkedin: value,
            })
          }
        />
        <EditableDiv
          content={getStringContent(layout.header?.contact?.location)}
          onEdit={(value) =>
            handleEdit("header", "contact", {
              ...layout.header.contact,
              location: value,
            })
          }
        />
      </div>

      <Grid container spacing={3}>
        {/* Left Column: Education, Experience, Languages */}
        <Grid item xs={12} md={7}>
          {/* Education Section */}
          <div className={`${classes.section} ${classes.fontStyleDynamic}`}>
            <div    style={{ color: textColor }} className={classes.sectionTitle}>
              <Typography style={{fontWeight:"bold"}} className={`${getFontClass()}`} variant="h6">
                {layout.education?.title || ""}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                className={classes.addButton}
                startIcon={<AddIcon />}
                onClick={() => handleAdd("education")}
              >
                Add
              </Button>
            </div>
            {layout.education?.items?.map((item, index) => (
              <Box key={index} mb={2} display="flex" alignItems="center">
                <Box flexGrow={1}>
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
                  <EditableDiv
                    content={getStringContent(item.date)}
                    onEdit={(value) =>
                      handleEdit(
                        "education",
                        "items",
                        layout.education.items.map((i, idx) =>
                          idx === index ? { ...i, date: value } : i
                        )
                      )
                    }
                    className={classes.date}
                  />
                  <EditableDiv
                    content={getStringContent(item.gpa)}
                    onEdit={(value) =>
                      handleEdit(
                        "education",
                        "items",
                        layout.education.items.map((i, idx) =>
                          idx === index ? { ...i, gpa: value } : i
                        )
                      )
                    }
                    className={classes.gpa}
                  />
                </Box>
                <IconButton
                  className={classes.deleteButton}
                  onClick={() => handleDelete("education", index)}
                >
                  <RiDeleteBin6Line />
                </IconButton>
              </Box>
            ))}
          </div>

          {/* Experience Section */}
          <div className={`${classes.section}`}>
            <div  style={{ color: textColor }} className={classes.sectionTitle}>
              <Typography style={{fontWeight:"bold"}} className={`${getFontClass()}`} variant="h6">
                {layout.experience?.title || ""}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                className={classes.addButton}
                startIcon={<AddIcon />}
                onClick={() => handleAdd("experience")}
              >
                Add
              </Button>
            </div>
            {layout.experience?.items?.map((item, index) => (
              <Box key={index} mb={2} display="flex" alignItems="center">
                <Box flexGrow={1}>
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
                  <EditableDiv
                    content={getStringContent(item.responsibility)}
                    onEdit={(value) =>
                      handleEdit(
                        "experience",
                        "items",
                        layout.experience.items.map((i, idx) =>
                          idx === index ? { ...i, responsibility: value } : i
                        )
                      )
                    }
                    className={classes.responsibility}
                  />
                </Box>
                <IconButton
                  className={classes.deleteButton}
                  onClick={() => handleDelete("experience", index)}
                >
                  <RiDeleteBin6Line />
                </IconButton>
              </Box>
            ))}
          </div>

          {/* Languages Section */}
          <div className={`${classes.section} ${classes.fontStyleDynamic}`}>
            <div    style={{ color: textColor }} className={classes.sectionTitle}>
              <Typography style={{fontWeight:"bold"}} className={`${getFontClass()}`} variant="h6">
                {layout.languages?.title || ""}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                className={classes.addButton}
                startIcon={<AddIcon />}
                onClick={() => handleAdd("languages")}
              >
                Add
              </Button>
            </div>
            {/* {layout.languages?.items?.map((item, index) => (
              <Box
                key={index}
                mb={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <EditableDiv
                  content={getStringContent(item.language)}
                  onEdit={(value) =>
                    handleEdit(
                      "languages",
                      "items",
                      layout.languages.items.map((i, idx) =>
                        idx === index ? { ...i, language: value } : i
                      )
                    )
                  }
                />
                <IconButton
                  className={classes.deleteButton}
                  onClick={() => handleDelete("languages", index)}
                >
                  <RiDeleteBin6Line />
                </IconButton>
              </Box>
            ))} */}
            {/* {layout.languages?.items?.map((item, index) => (
        <Box
          key={index}
          mb={2}
          display="flex"
          flexDirection="column"
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <EditableDiv
              content={getStringContent(item.language)}
              onEdit={(value) =>
                handleEdit(
                  "languages",
                  "items",
                  layout.languages.items.map((i, idx) =>
                    idx === index ? { ...i, language: value } : i
                  )
                )
              }
            />
            <IconButton
              className={classes.deleteButton}
              onClick={() => handleDelete("languages", index)}
            >
              <RiDeleteBin6Line />
            </IconButton>
          </Box>
          <Box display="flex" alignItems="center" width="100%">
            <LinearProgress
              variant="determinate"
              value={getLevelPercentage(item.level)}
              sx={{ flexGrow: 1, height: 8, borderRadius: 5 }}
            />
            <EditableDiv
              content={getStringContent(item.level)}
              onEdit={(value) =>
                handleEdit(
                  "languages",
                  "items",
                  layout.languages.items.map((i, idx) =>
                    idx === index ? { ...i, level: value } : i
                  )
                )
              }
              sx={{ ml: 1, minWidth: 80 }}
            />
          </Box>
        </Box>
      ))} */}

      <Grid container spacing={2}>
        {layout.languages?.items?.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            {/* <Box 
              display="flex" 
              flexDirection="column" 
              border="1px solid #e0e0e0" 
              borderRadius={2} 
              p={2}
            > */}
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <EditableDiv
                  content={getStringContent(item.language)}
                  onEdit={(value) =>
                    handleEdit(
                      "languages",
                      "items",
                      layout.languages.items.map((i, idx) =>
                        idx === index ? { ...i, language: value } : i
                      )
                    )
                  }
                />
                <IconButton
                  className={classes.deleteButton}
                  onClick={() => handleDelete("languages", index)}
                >
                  <RiDeleteBin6Line />
                </IconButton>
              </Box>
              {/* <Box> */}
                <LinearProgress
                  variant="determinate"
                  value={getLevelPercentage(item.level)}
                  sx={{ flexGrow: 1, height: 8, borderRadius: 5,  }}
                />
                <EditableDiv
                  content={getStringContent(item.level)}
                  onEdit={(value) =>
                    handleEdit(
                      "languages",
                      "items",
                      layout.languages.items.map((i, idx) =>
                        idx === index ? { ...i, level: value } : i
                      )
                    )
                  }
                  sx={{ ml: 1, minWidth: 80 }}
                />
              {/* </Box> */}
            {/* </Box> */}
          </Grid>
        ))}
      </Grid>
          </div>
        </Grid>

        {/* Right Column: Summary, Tech Stack, Projects */}
        <Grid item xs={12} md={5}>
          {/* Summary Section */}
          <div
            style={{ marginTop: "4px" }}
            className={`${classes.section} ${classes.fontStyleDynamic}`}
          >
            <div    style={{ color: textColor }} className={classes.sectionTitle}>
              <Typography style={{fontWeight:"bold"}} className={`${getFontClass()}`} variant="h6">
                {layout.summary?.title || ""}
              </Typography>
            </div>
            <EditableDiv
              content={getStringContent(layout.summary?.content)}
              onEdit={(value) => handleEdit("summary", "content", value)}
              className={classes.summary}
            />
          </div>
 
          {/* Tech Stack Section */} 
          <div
            style={{ marginTop: "32px" }}
            className={`${classes.section} ${classes.fontStyleDynamic}`}
          >
            <div  style={{ color: textColor }} className={classes.sectionTitle}>
              <Typography style={{fontWeight:"bold"}} className={`${getFontClass()}`} variant="h6">
                {layout.techStack?.title || ""}
              </Typography>
            </div>
            <div className={classes.techStack}>
              {layout.techStack?.items?.map((item, index) => (
                <EditableDiv
                  key={index}
                  content={getStringContent(item)}
                  onEdit={(value) =>
                    handleEdit(
                      "techStack",
                      "items",
                      layout.techStack.items.map((i, idx) =>
                        idx === index ? value : i
                      )
                    )
                  }
                />
              ))}
            </div>
          </div>

          {/* Projects Section */}
          {/* Projects Section */}
          <div className={`${classes.section} ${classes.fontStyleDynamic}`}>
            <div  style={{ color: textColor }} className={classes.sectionTitle}>
              <Typography className={`${classes.projectName} ${getFontClass()}`} variant="h6">
                {layout.projects?.title || ""}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                className={classes.addButton}
                startIcon={<AddIcon />}
                onClick={() => handleAdd("projects")}
              >
                Add
              </Button>
            </div>
            {layout.projects?.items?.map((item, index) => (
              <Box key={index} mb={2}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <EditableDiv
                    content={getStringContent(item.name)}
                    onEdit={(value) =>
                      handleEdit(
                        "projects",
                        "items",
                        layout.projects.items.map((i, idx) =>
                          idx === index ? { ...i, name: value } : i
                        )
                      )
                    }
                    className={classes.projectName}
                  />
                  <IconButton
                    className={classes.deleteButton}
                    onClick={() => handleDelete("projects", index)}
                  >
                    <RiDeleteBin6Line />
                  </IconButton>
                </Box>
                <EditableDiv
                  content={getStringContent(item.description)}
                  onEdit={(value) =>
                    handleEdit(
                      "projects",
                      "items",
                      layout.projects.items.map((i, idx) =>
                        idx === index ? { ...i, description: value } : i
                      )
                    )
                  }
                  className={classes.projectDescription}
                />
                <Box ml={2}>
                  {item.details?.map((detail, detailIndex) => (
                    <EditableDiv
                      key={detailIndex}
                      content={getStringContent(detail)}
                      onEdit={(value) =>
                        handleEdit(
                          "projects",
                          "items",
                          layout.projects.items.map((i, idx) =>
                            idx === index
                              ? {
                                  ...i,
                                  details: i.details.map((d, di) =>
                                    di === detailIndex ? value : d
                                  ),
                                }
                              : i
                          )
                        )
                      }
                      className={classes.projectDetail}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </div>
        </Grid>
      </Grid>
      <Button
        style={{width:"100%"}}
        variant="contained"
        onClick={() => setIsPreviewOpen(true)}
      >
        Preview Resume
      </Button>

      <div>

      <Dialog open={isPreviewOpen} onClose={handleClosePreview} fullWidth maxWidth="md">
        <DialogContent>
          <PDFResume
            layout={layout}
            user={user}
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
    </div>
  );
};

EditableResume.propTypes = {
  isTemplateDrawerOpen: PropTypes.bool.isRequired,
  isDesignPanelOpen: PropTypes.bool.isRequired,
  improvedTextOpen: PropTypes.bool.isRequired,
  layout: PropTypes.object.isRequired,
  setLayout: PropTypes.func.isRequired,
  fontStyle: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default EditableResume;


















