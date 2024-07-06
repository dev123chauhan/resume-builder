import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  editable: {
    '&:hover': {
      backgroundColor: '#f0f0f0',
      cursor: 'text',
    },
    '&:focus': {
      outline: 'none',
      backgroundColor: '#e0e0e0',
    },
  },
}));

const EditableDiv = ({ 
  content, 
  onEdit, 
  className = '', 
  placeholder = '' 
}) => {
  const classes = useStyles();

  return (
    <div
      contentEditable
      suppressContentEditableWarning
      onBlur={onEdit}
      className={`${classes.editable} ${className}`}
      data-placeholder={placeholder}
    >
      {content}
    </div>
  );
};

EditableDiv.propTypes = {
  content: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default EditableDiv;