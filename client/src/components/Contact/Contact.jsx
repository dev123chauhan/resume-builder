
import { Container, Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    marginTop:"5rem",
  },
  formContainer: {
    padding: theme.spacing(4),
    backgroundColor: '#fff',
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  mapContainer: {
    padding: theme.spacing(4),
    height: '100%',
  },
  title: {
    marginBottom: theme.spacing(4),
    color: '#027b9a',
  },
  iframe: {
    border: 0,
    width: '100%',
    height: '400px',
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.title} align="center">
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.formContainer}>
            <TextField
              className={classes.formField}
              label="Name"
              fullWidth
              variant="outlined"
            />
            <TextField
              className={classes.formField}
              label="Email"
              fullWidth
              variant="outlined"
            />
            <TextField
              className={classes.formField}
              label="Message"
              fullWidth
              variant="outlined"
              multiline
              rows={10}
            />
            <Button className='buttonColor' variant="contained">
              Submit
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.mapContainer}>
            <iframe
              className={classes.iframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.1610989795715!2d37.618423316080634!3d55.751244980552364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5d5f5aeb0f%3A0x3601e6eb24f50811!2sMoscow!5e0!3m2!1sen!2sru!4v1614699395863!5m2!1sen!2sru"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
