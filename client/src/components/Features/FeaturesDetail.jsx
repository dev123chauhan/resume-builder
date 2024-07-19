import  { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: "#f7fdff",
    minHeight: "100vh",
    marginTop: "5rem",
  },
  title: {
    color: "#027b9a",
    textAlign: "center",
    marginTop: "6rem !important",
    fontWeight: "bold !important",
  },
  accordion: {
    marginBottom: theme.spacing(4),
    backgroundColor: "white",
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
  },
  accordionSummary: {
    backgroundColor: "white",
    color: "black",
    "& .MuiIconButton-root": {
      color: "black",
    },
  },
  accordionDetails: {
    padding: theme.spacing(2),
    textAlign: "left",
  },
  featureTitle: {
    marginBottom: theme.spacing(2),
  },
}));

const FeaturesDetail = () => {
  const classes = useStyles();
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/feature');
        setFeatures(response.data);
      } catch (error) {
        console.error('Error fetching features:', error);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <>
      <Typography variant="h4" className={classes.title}>
        Features
      </Typography>
      <Container className={classes.root}>
        <Grid container spacing={4}>
          {features?.map((feature, index) => (
            <Grid item xs={12} key={index}>
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  className={classes.accordionSummary}
                >
                  <Typography variant="h5" className={classes.featureTitle}>
                    {feature?.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography variant="body1">{feature?.description}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default FeaturesDetail;
