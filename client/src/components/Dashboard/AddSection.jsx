import PropTypes from 'prop-types';
import { Grid, Typography, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import SummarizeIcon from '@mui/icons-material/Summarize';
import BuildIcon from '@mui/icons-material/Build';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LanguageIcon from '@mui/icons-material/Language';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import Close from '@mui/icons-material/Close';

const AddSection = ({ onClose, onAddSection }) => { // Accept onAddSection as a prop
  const sections = [
    { name: 'Education', icon: <SchoolIcon /> },
    { name: 'Experience', icon: <WorkIcon /> },
    { name: 'Summary', icon: <SummarizeIcon /> },
    { name: 'Skills', icon: <BuildIcon /> },
    { name: 'Current Title', icon: <WorkHistoryIcon /> },
    { name: 'Languages', icon: <LanguageIcon /> },
    { name: 'Projects', icon: <EmojiEventsIcon /> },
    { name: 'Achievements', icon: <EmojiEventsIcon /> },
    { name: 'Strengths', icon: <BuildCircleIcon /> },
    { name: 'Volunteering', icon: <VolunteerActivismIcon /> },
    { name: 'Industry Expertise', icon: <BusinessCenterIcon /> },
    { name: 'Passions', icon: <FavoriteIcon /> },
    { name: 'My Time', icon: <AccessTimeIcon /> },
    { name: 'Find me online', icon: <PersonSearchIcon /> },
    { name: 'Certification', icon: <CardMembershipIcon /> },
    { name: 'Awards', icon: <EmojiObjectsIcon /> },
    { name: 'References', icon: <ContactMailIcon /> },
    { name: 'My Life Philosophy', icon: <MenuBookIcon /> },
    { name: 'Publications', icon: <AutoStoriesIcon /> },
    { name: 'Books', icon: <MenuBookIcon /> },
    { name: 'Additional Experience', icon: <AddCircleOutlineIcon /> },
    { name: 'Additional Skills', icon: <BuildIcon /> },
  ];

  const styles = {
    popupOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    popupContent: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '80%',
      maxHeight: '80%',
      overflow: 'auto',
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '10px',
      color:"#027b9a"
    },
    subtitle: {
      color: 'grey',
      marginBottom: '20px',

    },
    sectionButton: {
      width: '100%',
      justifyContent: 'flex-start',
      textTransform: 'none',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      padding: '10px',
      marginBottom: '10px',
      color:"#027b9a"
    },
    icon: {
      marginRight: '10px',
      color:"#027b9a"
    },
    closeButton: {
      cursor:"pointer",
      color:"#027b9a"
    },
  };

  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popupContent}>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <Typography variant="h6" style={styles.title}>
          Add a new section
        </Typography>
        <span onClick={onClose} style={styles.closeButton}>
         <Close/>
        </span>
      </div>
        <Typography variant="body2" style={styles.subtitle}>
          Click on a section to add it to your resume
        </Typography>
        <Grid container spacing={2}>
          {sections.map((section) => (
            <Grid item xs={12} sm={6} md={4} key={section.name}>
              <Button
                variant="outlined"
                style={styles.sectionButton}
                onClick={() => {
                  onAddSection({ title: section.name, content: '' }); // Pass the new section
                  onClose();
                }}
              >
                <span style={styles.icon}>{section.icon}</span>
                {section.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

AddSection.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAddSection: PropTypes.func.isRequired, // Define prop type for onAddSection
};

export default AddSection;
