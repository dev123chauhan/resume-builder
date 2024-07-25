// import PropTypes from 'prop-types';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles(() => ({
//   editable: {
//     '&:hover': {
//       backgroundColor: '#f0f0f0',
//       cursor: 'text',
//     },
//     '&:focus': {
//       outline: 'none',
//       backgroundColor: '#e0e0e0',
//     },
//   },
// }));

// const EditableDiv = ({
//   content,
//   onEdit,
//   className = '',
//   placeholder = ''
// }) => {
//   const classes = useStyles();

//   const handleBlur = (e) => {
//     onEdit(e.target.textContent);
//   };

//   return (
//     <div
//       contentEditable
//       onBlur={handleBlur}
//       className={`${classes.editable} ${className}`}
//       data-placeholder={placeholder}
//     >
//       {content}
//     </div>
//   );
// };

// EditableDiv.propTypes = {
//   content: PropTypes.string.isRequired,
//   onEdit: PropTypes.func.isRequired,
//   className: PropTypes.string,
//   placeholder: PropTypes.string,
// };

// export default EditableDiv;






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

  const handleBlur = (e) => {
    onEdit(e.target.innerText); // Use innerText to avoid issues with HTML tags
  };

  return (
    <div
      contentEditable
      onBlur={handleBlur}
      className={`${classes.editable} ${className}`}
      data-placeholder={placeholder}
      suppressContentEditableWarning={true} // Suppress warning for contentEditable
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
