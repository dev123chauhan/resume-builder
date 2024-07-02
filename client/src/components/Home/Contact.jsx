
import { Container, Typography, Box, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 2),
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginBottom: theme.spacing(2),
    fontSize: '2.5rem',
    color: '#027b9a',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      maxWidth: '500px',
      color: '#027b9a',
    },
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#027b9a',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#025f75',
    },
  },
  inputLabel: {
    color: '#027b9a',
    '&.Mui-focused': {
      color: '#027b9a',
    },
  },
  inputOutlined: {
    '& fieldset': {
      borderColor: '#027b9a',
    },
    '&:hover fieldset': {
      borderColor: '#027b9a',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#027b9a',
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  const styleText ={
    fontWeight:"bolder"
  }

  return (
    <Box className={classes.root}>
      <Container>
        <Typography style={styleText} variant="h6" className={classes.title}>
          Contact Us
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            label="Name"
            variant="outlined"
            required
            InputLabelProps={{
              className: classes.inputLabel,
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.inputOutlined,
              },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            required
            InputLabelProps={{
              className: classes.inputLabel,
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.inputOutlined,
              },
            }}
          />
          <TextField
            label="Message"
            variant="outlined"
            required
            multiline
            rows={4}
            InputLabelProps={{
              className: classes.inputLabel,
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.inputOutlined,
              },
            }}
          />
          <Button
            variant="contained"
            className={classes.button}
          >
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
