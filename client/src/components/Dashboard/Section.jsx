
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import EditableDiv from './EditableDiv';

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(2),
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  sectionContent: {
    minHeight: '100px',
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(1),
  },
}));

const Section = ({ title, content, onEditTitle, onEditContent }) => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <EditableDiv
        content={title}
        onEdit={onEditTitle}
        className={classes.sectionTitle}
        placeholder="Section Title"
      />
      <EditableDiv
        content={content}
        onEdit={onEditContent}
        className={classes.sectionContent}
        placeholder="Add content here"
      />
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onEditTitle: PropTypes.func.isRequired,
  onEditContent: PropTypes.func.isRequired,
};

export default Section;