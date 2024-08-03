import  { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Avatar, Box, Typography, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, LinearProgress } from '@mui/material';
import noProfile from "../../assets/noProfile.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'white',
    transition: 'transform 0.3s ease-in-out',
  },
  containerShift: {
    transform: 'translateX(100px)',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    // marginBottom: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: theme.spacing(2),
    objectFit:"cover !important"
  },
  headerInfo: {
    flexGrow: 1,
  },
  name: {
    fontSize: '28px !important',
    fontWeight: 'bold !important',
    // marginBottom: theme.spacing(1),
  },
  title: {
    fontSize: '18px',
    color: 'blue',
    // marginBottom: theme.spacing(1),
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
    fontWeight: 'bold !important',
    color:"black !important"
  },
  school: {
    // fontStyle: 'italic',
    color:"blue"
  },
  date: {
    color: '#666',
  },
  gpa: {
    fontWeight: 'bold !important',
      color:"black !important"
  },
  role: {
    fontWeight: 'bold !important',
      color:"black !important"
  },
  company: {
    // fontStyle: 'italic',
       color:"blue"
    
  }, 
  location: {
    color: '#666',
  },
  responsibility: {
    // marginLeft: theme.spacing(2),
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
     fontWeight: 'bold !important',
      color:"black !important"
  },
  projectDescription: {
    // fontStyle: 'italic',
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
}), { name: 'EditableResume' });

const PDFResume = ({ layout, user, fontStyle, textColor }) => {
  const classes = useStyles({ fontStyle });
  const [open, setOpen] = useState(false);



  const handleClose = () => {
    setOpen(false);
  };

  const getFontClass = () => {
    switch (fontStyle) {
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
    }
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
    <div style={{ color: textColor }} className={`${classes.container} ${getFontClass()}`}>
      <div className={`${classes.header}`}>
        <div className={classes.headerInfo}>
          <Typography variant='h3'  className={`${classes.name} ${getFontClass()}`}>{layout.header?.name}</Typography>
          <Typography className={`${classes.title} ${getFontClass()}`}>{layout.header?.title}</Typography>
        </div>
        <Avatar    style={{ width: 80, height: 80 }} className={classes.avatar} src={user?.profileImage ? `http://localhost:5000/uploads/${user.profileImage}` : noProfile} />
      </div>
      <div className={`${classes.contactInfo}`}>
        <Typography className={`${getFontClass()}`}>{layout.header?.contact?.phone}</Typography>
        <Typography className={`${getFontClass()}`}>{layout.header?.contact?.email}</Typography>
        <Typography className={`${getFontClass()}`}>{layout.header?.contact?.linkedin}</Typography>
        <Typography className={`${getFontClass()}`}>{layout.header?.contact?.location}</Typography>
      </div>


      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          {/* Education Section */}
          <div className={`${classes.section}`}>
            <Typography variant="h6" className={`${classes.sectionTitle} ${getFontClass()}`}>{layout.education?.title}</Typography>
            {layout.education?.items?.map((item, index) => (
              <Box key={index} mb={2}>
                <Typography className={`${classes.degree} ${getFontClass()}`}>{item.degree}</Typography>
                <Typography className={`${classes.school} ${getFontClass()}`}>{item.school}</Typography>
                <Typography className={`${classes.date} ${getFontClass()}`}>{item.date}</Typography>
                <Typography className={`${classes.gpa} ${getFontClass()}`}>{item.gpa}</Typography>
              </Box>
            ))}
          </div>

          {/* Experience Section */}
          <div className={`${classes.section}`}>
            <Typography variant="h6" className={`${classes.sectionTitle} ${getFontClass()}`}>{layout.experience?.title}</Typography>
            {layout.experience?.items?.map((item, index) => (
              <Box key={index} mb={2}>
                <Typography className={`${classes.role} ${getFontClass()}`}>{item.role}</Typography>
                <Typography className={`${classes.company} ${getFontClass()}`}>{item.company}</Typography>
                <Typography className={`${classes.location} ${getFontClass()}`}>{item.location}</Typography>
                <Typography className={`${classes.responsibilities} ${getFontClass()}`}>{item.responsibilities}</Typography>
              </Box>
            ))}
          </div>

          {/* Languages Section */}
          <div className={`${classes.section}`}>
            <Typography variant="h6" className={`${classes.sectionTitle} ${getFontClass()}`}>{layout.languages?.title}</Typography>
            {layout.languages?.items?.map((item, index) => (
              <div key={index}>
              <Typography className={`${getFontClass()}`}>{item.language}</Typography>
              <LinearProgress      variant="determinate"
                  value={getLevelPercentage(item.level)}
                  sx={{ flexGrow: 1, height: 8, borderRadius: 5,  }}/>
              </div>
            ))}
          </div>
        </Grid>

        <Grid item xs={12} md={5}>
          {/* Summary Section */}
          <div className={`${classes.section}`}>
            <Typography variant="h6" className={`${classes.sectionTitle} ${getFontClass()}`}>{layout.summary?.title}</Typography>
            <Typography className={`${classes.summary} ${getFontClass()}`}>{layout.summary?.content}</Typography>
          </div>

          {/* Tech Stack Section */}
          <div className={`${classes.section}`}>
            <Typography variant="h6" className={`${classes.sectionTitle} ${getFontClass()}`}>{layout.techStack?.title}</Typography>
            <div className={`${classes.techStack} ${getFontClass()}`}>
              {layout.techStack?.items?.map((item, index) => (
                <Typography className={`${getFontClass()}`}  key={index}>{item}</Typography>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className={`${classes.section}`}>
            <Typography variant="h6" className={`${classes.sectionTitle} ${getFontClass()}`}>{layout.projects?.title}</Typography>
            {layout.projects?.items?.map((item, index) => (
              <Box key={index} mb={2}>
                <Typography className={`${classes.projectName} ${getFontClass()}`}>{item.name}</Typography>
                <Typography className={`${classes.projectDescription} ${getFontClass()}`}>{item.description}</Typography>
                <Box ml={2}>
                  {item.details?.map((detail, detailIndex) => (
                    <Typography key={detailIndex} className={`${classes.projectDetail} ${getFontClass()}`}>{detail}</Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </div>
        </Grid>
      </Grid>



      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Dialog Title"}</DialogTitle>
        <DialogContent>
          <Typography>
            This is a sample dialog content. You can place any information related to the resume here.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

PDFResume.propTypes = {
  layout: PropTypes.shape({
    header: PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      contact: PropTypes.shape({
        phone: PropTypes.string,
        email: PropTypes.string,
        linkedin: PropTypes.string,
        location: PropTypes.string,
      }),
    }),
    education: PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape({
        degree: PropTypes.string,
        school: PropTypes.string,
        date: PropTypes.string,
        gpa: PropTypes.string,
      })),
    }),
    experience: PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape({
        role: PropTypes.string,
        company: PropTypes.string,
        location: PropTypes.string,
        responsibility: PropTypes.string,
      })),
    }),
    languages: PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape({
        language: PropTypes.string,
      })),
    }),
    summary: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
    techStack: PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.string),
    }),
    projects: PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        details: PropTypes.arrayOf(PropTypes.string),
      })),
    }),
  }).isRequired,
  user: PropTypes.shape({
    profileImage: PropTypes.string,
  }),
  fontStyle: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default PDFResume;
