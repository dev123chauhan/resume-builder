import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Avatar, Box, Typography, IconButton, Button, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditableDiv from './EditableDiv';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease-in-out',
  },
  containerShift: {
    transform: 'translateX(100px)',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: theme.spacing(2),
  },
  headerInfo: {
    flexGrow: 1,
  },
  name: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: theme.spacing(1),
  },
  title: {
    fontSize: '18px',
    color: '#666',
    marginBottom: theme.spacing(1),
  },
  contactInfo: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
    '& > div': {
      flex: '1 1 auto',
      minWidth: '120px',
    },
  },
  section: {
    marginBottom: theme.spacing(3),
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    borderBottom: '2px solid black',
    paddingBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
  addButton: {
    marginLeft: theme.spacing(2),
  },
  degree: {
    fontWeight: 'bold',
  },
  school: {
    fontStyle: 'italic',
  },
  date: {
    color: '#666',
  },
  gpa: {
    fontWeight: 'bold',
  },
  role: {
    fontWeight: 'bold',
  },
  company: {
    fontStyle: 'italic',
  },
  location: {
    color: '#666',
  },
  responsibility: {
    marginLeft: theme.spacing(2),
    '&:before': {
      content: '"•"',
      marginRight: theme.spacing(1),
    },
  },
  summary: {
    lineHeight: 1.6,
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
  },
  project: {
    marginBottom: theme.spacing(2),
  },
  projectName: {
    fontWeight: 'bold',
  },
  projectDescription: {
    fontStyle: 'italic',
  },
  projectDetail: {
    marginLeft: theme.spacing(2),
    '&:before': {
      content: '"•"',
      marginRight: theme.spacing(1),
    },
  },
  language: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  deleteButton: {
    marginLeft: theme.spacing(1),
  },
// fontStyleDynamic: {
//     fontFamily: (props) => {
//       switch(props.fontStyle) {
//         case 'Rubik':
//           return "'Rubik', sans-serif";
//         case 'Arial':
//           return "Arial, sans-serif";
//         case 'Times New Roman':
//           return "'Times New Roman', serif";
//         default:
//           return "Arial, sans-serif";
//       }
//     },
//   },
}), { name: 'EditableResume' });

const EditableResume = ({ isTemplateDrawerOpen, isDesignPanelOpen, layout, setLayout,  fontStyle  }) => {
  const classes = useStyles({ fontStyle, });

  const getFontClass = () => {
    switch(fontStyle) {
      case 'Roboto': return 'font-roboto';
      case 'Open Sans': return 'font-open-sans';
      case 'Lato': return 'font-lato';
      case 'Montserrat': return 'font-montserrat';
      case 'Poppins': return 'font-poppins';
      case 'Raleway': return 'font-raleway';
      case 'Rubik': return 'font-rubik';
      case 'Arial': return 'font-arial';
      case 'Times New Roman': return 'font-times-new-roman';
      case 'Georgia': return 'font-georgia';
      case 'Courier New': return 'font-courier-new';
      default: return 'font-roboto';
    }
  };


  const handleEdit = (section, field, value) => {
    setLayout(prevLayout => ({
      ...prevLayout,
      [section]: {
        ...prevLayout[section],
        [field]: value
      }
    }));
  };

  const handleDelete = (section, index) => {
    setLayout(prevLayout => ({
      ...prevLayout,
      [section]: {
        ...prevLayout[section],
        items: prevLayout[section].items.filter((_, idx) => idx !== index)
      }
    }));
  };

  const handleAdd = (section) => {
    setLayout(prevLayout => ({
      ...prevLayout,
      [section]: {
        ...prevLayout[section],
        items: [...(prevLayout[section]?.items || []), {}] // Add an empty item
      }
    }));
  };

  // Function to ensure content is a string
  const getStringContent = (content) => {
    return Array.isArray(content) ? content.join(', ') : content || '';
  };

  return (
    <div className={`${classes.container} ${isTemplateDrawerOpen || isDesignPanelOpen ? classes.containerShift : ''} ${getFontClass()}`}>
      <div className={`${classes.header} ${classes.fontStyleDynamic}`}>
        <div className={classes.headerInfo}>
          <EditableDiv
            content={getStringContent(layout.header?.name)}
            onEdit={(value) => handleEdit('header', 'name', value)}
            className={classes.name}
          />
          <EditableDiv
            content={getStringContent(layout.header?.title)}
            onEdit={(value) => handleEdit('header', 'title', value)}
            className={classes.title}
          />
        </div>
        <Avatar className={classes.avatar} />
      </div>
      <div className={`${classes.contactInfo} ${classes.fontStyleDynamic}`}>
        <EditableDiv
          content={getStringContent(layout.header?.contact?.phone)}
          onEdit={(value) => handleEdit('header', 'contact', { ...layout.header.contact, phone: value })}
        />
        <EditableDiv
          content={getStringContent(layout.header?.contact?.email)}
          onEdit={(value) => handleEdit('header', 'contact', { ...layout.header.contact, email: value })}
        />
        <EditableDiv
          content={getStringContent(layout.header?.contact?.linkedin)}
          onEdit={(value) => handleEdit('header', 'contact', { ...layout.header.contact, linkedin: value })}
        />
        <EditableDiv
          content={getStringContent(layout.header?.contact?.location)}
          onEdit={(value) => handleEdit('header', 'contact', { ...layout.header.contact, location: value })}
        />
      </div>

      <Grid container spacing={3}>
        {/* Left Column: Education, Experience, Languages */}
        <Grid item xs={12} md={6}>
          {/* Education Section */}
          <div className={`${classes.section} ${classes.fontStyleDynamic}`}>
            <div className={classes.sectionTitle}>
              <Typography variant="h6">{layout.education?.title || ''}</Typography>
              <Button
                variant="outlined"
                color="primary"
                className={classes.addButton}
                startIcon={<AddIcon />}
                onClick={() => handleAdd('education')}
              >
                Add
              </Button>
            </div>
            {layout.education?.items?.map((item, index) => (
              <Box key={index} mb={2} display="flex" alignItems="center">
                <Box flexGrow={1}>
                  <EditableDiv
                    content={getStringContent(item.degree)}
                    onEdit={(value) => handleEdit('education', 'items', layout.education.items.map((i, idx) => idx === index ? { ...i, degree: value } : i))}
                    className={classes.degree}
                  />
                  <EditableDiv
                    content={getStringContent(item.school)}
                    onEdit={(value) => handleEdit('education', 'items', layout.education.items.map((i, idx) => idx === index ? { ...i, school: value } : i))}
                    className={classes.school}
                  />
                  <EditableDiv
                    content={getStringContent(item.date)}
                    onEdit={(value) => handleEdit('education', 'items', layout.education.items.map((i, idx) => idx === index ? { ...i, date: value } : i))}
                    className={classes.date}
                  />
                  <EditableDiv
                    content={getStringContent(item.gpa)}
                    onEdit={(value) => handleEdit('education', 'items', layout.education.items.map((i, idx) => idx === index ? { ...i, gpa: value } : i))}
                    className={classes.gpa}
                  />
                </Box>
                <IconButton
                  className={classes.deleteButton}
                  onClick={() => handleDelete('education', index)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </div>

          {/* Experience Section */}
          <div className={`${classes.section} ${classes.fontStyleDynamic}`}>
            <div className={classes.sectionTitle}>
              <Typography variant="h6">{layout.experience?.title || ''}</Typography>
              <Button
                variant="outlined"
                color="primary"
                className={classes.addButton}
                startIcon={<AddIcon />}
                onClick={() => handleAdd('experience')}
              >
                Add
              </Button>
            </div>
            {layout.experience?.items?.map((item, index) => (
              <Box key={index} mb={2} display="flex" alignItems="center">
                <Box flexGrow={1}>
                  <EditableDiv
                    content={getStringContent(item.role)}
                    onEdit={(value) => handleEdit('experience', 'items', layout.experience.items.map((i, idx) => idx === index ? { ...i, role: value } : i))}
                    className={classes.role}
                  />
                  <EditableDiv
                    content={getStringContent(item.company)}
                    onEdit={(value) => handleEdit('experience', 'items', layout.experience.items.map((i, idx) => idx === index ? { ...i, company: value } : i))}
                    className={classes.company}
                  />
                  <EditableDiv
                    content={getStringContent(item.location)}
                    onEdit={(value) => handleEdit('experience', 'items', layout.experience.items.map((i, idx) => idx === index ? { ...i, location: value } : i))}
                    className={classes.location}
                  />
                  <EditableDiv
                    content={getStringContent(item.responsibility)}
                    onEdit={(value) => handleEdit('experience', 'items', layout.experience.items.map((i, idx) => idx === index ? { ...i, responsibility: value } : i))}
                    className={classes.responsibility}
                  />
                </Box>
                <IconButton
                  className={classes.deleteButton}
                  onClick={() => handleDelete('experience', index)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </div>

          {/* Languages Section */}
          <div className={`${classes.section} ${classes.fontStyleDynamic}`}>
            <div className={classes.sectionTitle}>
              <Typography variant="h6">{layout.languages?.title || ''}</Typography>
              <Button
                variant="outlined"
                color="primary"
                className={classes.addButton}
                startIcon={<AddIcon />}
                onClick={() => handleAdd('languages')}
              >
                Add
              </Button>
            </div>
            {layout.languages?.items?.map((item, index) => (
              <Box key={index} mb={2} display="flex" justifyContent="space-between" alignItems="center">
                <EditableDiv
                  content={getStringContent(item.language)}
                  onEdit={(value) => handleEdit('languages', 'items', layout.languages.items.map((i, idx) => idx === index ? { ...i, language: value } : i))}
                />
                <IconButton
                  className={classes.deleteButton}
                  onClick={() => handleDelete('languages', index)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </div>
        </Grid>

        {/* Right Column: Summary, Tech Stack, Projects */}
        <Grid item xs={12} md={6}>
          {/* Summary Section */}
          <div className={`${classes.section} ${classes.fontStyleDynamic}`}>
            <div className={classes.sectionTitle}>
              <Typography variant="h6">{layout.summary?.title || ''}</Typography>
            </div>
            <EditableDiv
              content={getStringContent(layout.summary?.content)}
              onEdit={(value) => handleEdit('summary', 'content', value)}
              className={classes.summary}
            />
          </div>

          {/* Tech Stack Section */}
          <div className={`${classes.section} ${classes.fontStyleDynamic}`}>
            <div className={classes.sectionTitle}>
              <Typography variant="h6">{layout.techStack?.title || ''}</Typography>
            </div>
            <div className={classes.techStack}>
              {layout.techStack?.items?.map((item, index) => (
                <EditableDiv
                  key={index}
                  content={getStringContent(item)}
                  onEdit={(value) => handleEdit('techStack', 'items', layout.techStack.items.map((i, idx) => idx === index ? value : i))}
                />
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className={`${classes.section} ${classes.fontStyleDynamic}`}>
            <div className={classes.sectionTitle}>
              <Typography variant="h6">{layout.projects?.title || ''}</Typography>
              <Button
                variant="outlined"
                color="primary"
                className={classes.addButton}
                startIcon={<AddIcon />}
                onClick={() => handleAdd('projects')}
              >
                Add
              </Button>
            </div>
            {layout.projects?.items?.map((item, index) => (
              <Box key={index} mb={2}>
                <EditableDiv
                  content={getStringContent(item.name)}
                  onEdit={(value) => handleEdit('projects', 'items', layout.projects.items.map((i, idx) => idx === index ? { ...i, name: value } : i))}
                  className={classes.projectName}
                />
                <EditableDiv
                  content={getStringContent(item.description)}
                  onEdit={(value) => handleEdit('projects', 'items', layout.projects.items.map((i, idx) => idx === index ? { ...i, description: value } : i))}
                  className={classes.projectDescription}
                />
                <Box ml={2}>
                  {item.details?.map((detail, detailIndex) => (
                    <EditableDiv
                      key={detailIndex}
                      content={getStringContent(detail)}
                      onEdit={(value) => handleEdit('projects', 'items', layout.projects.items.map((i, idx) => idx === index ? { ...i, details: i.details.map((d, di) => di === detailIndex ? value : d) } : i))}
                      className={classes.projectDetail}
                    />
                  ))}
                </Box>
                <IconButton
                  className={classes.deleteButton}
                  onClick={() => handleDelete('projects', index)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

EditableResume.propTypes = {
  isTemplateDrawerOpen: PropTypes.bool.isRequired,
  isDesignPanelOpen: PropTypes.bool.isRequired,
  layout: PropTypes.object.isRequired,
  setLayout: PropTypes.func.isRequired,
  fontStyle: PropTypes.string.isRequired, 
};

export default EditableResume;




