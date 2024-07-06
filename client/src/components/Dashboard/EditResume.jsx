import  { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import EditableDiv from './EditableDiv';
import Section from './Section';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
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
    marginBottom: theme.spacing(1),
  },
  role: {
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
  addButton: {
    backgroundColor: '#8e44ad',
    color: 'white',
    '&:hover': {
      backgroundColor: '#6c3483',
    },
  },
  footer: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
    color: '#888',
    fontSize: '12px',
  },
  dialog: {
    padding: theme.spacing(2),
  },
}));

const EditableResume = () => {
  const classes = useStyles();
  const [name, setName] = useState('NAME');
  const [role, setRole] = useState('The role you are applying for?');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [location, setLocation] = useState('');
  const [sections, setSections] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newSectionTitle, setNewSectionTitle] = useState('');

  const handleEdit = (setter) => (e) => {
    setter(e.target.innerText);
  };

  const handleAddSection = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewSectionTitle('');
  };

  const handleSaveSection = () => {
    setSections([...sections, { title: newSectionTitle, content: '' }]);
    setOpenDialog(false);
    setNewSectionTitle('');
  };

  const handleEditSection = (index, field) => (e) => {
    const newSections = [...sections];
    newSections[index][field] = e.target.innerText;
    setSections(newSections);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.headerInfo}>
          <EditableDiv content={name} onEdit={handleEdit(setName)} className={classes.name} />
          <EditableDiv content={role} onEdit={handleEdit(setRole)} className={classes.role} />
        </div>
        <Avatar className={classes.avatar} />
      </div>
      <div className={classes.contactInfo}>
        <EditableDiv content={phone} onEdit={handleEdit(setPhone)} placeholder="Phone" />
        <EditableDiv content={email} onEdit={handleEdit(setEmail)} placeholder="Email" />
        <EditableDiv content={linkedin} onEdit={handleEdit(setLinkedin)} placeholder="LinkedIn/Portfolio" />
        <EditableDiv content={location} onEdit={handleEdit(setLocation)} placeholder="Location" />
      </div>
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          content={section.content}
          onEditTitle={handleEditSection(index, 'title')}
          onEditContent={handleEditSection(index, 'content')}
        />
      ))}
      <Button
        variant="contained"
        onClick={handleAddSection}
        className={classes.addButton}
      >
        Add new section
      </Button>
      <Dialog open={openDialog} onClose={handleCloseDialog} className={classes.dialog}>
        <DialogTitle>Add New Section</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Section Title"
            fullWidth
            value={newSectionTitle}
            onChange={(e) => setNewSectionTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveSection} color="primary">
            Add Section
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditableResume;
