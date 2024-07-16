// import { Container, Typography, Grid, Paper } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: theme.spacing(4),
//     backgroundColor: '#f5f5f5',
//     minHeight: '100vh',
//     marginTop:"5rem"
//   },
//   featureBox: {
//     padding: theme.spacing(4),
//     textAlign: 'left',
//     color: 'black',
//     backgroundColor: 'white',
//     marginBottom: theme.spacing(4),
//   },
//   title: {
//     marginBottom: theme.spacing(4),
//     color: '#027b9a',
//     textAlign: 'center',
//   },
//   featureTitle: {
//     marginBottom: theme.spacing(2),
//   },
//   featureDescription: {
//     marginBottom: theme.spacing(2),
//     color:"black"
//   },
// }));

// const features = [
//   {
//     title: 'Easy to Use',
//     description: 'Our resume builder is user-friendly and easy to navigate. Simply enter your information, and the builder will take care of the rest.',
//   },
//   {
//     title: 'Customizable Templates',
//     description: 'Choose from a variety of templates to match your style. Each template is fully customizable to ensure your resume stands out.',
//   },
//   {
//     title: 'Download in Multiple Formats',
//     description: 'Download your resume in PDF, DOC, and more. We support various formats to ensure compatibility with different systems.',
//   },
//   {
//     title: 'Auto-Save Feature',
//     description: 'Your progress is saved automatically, so you never have to worry about losing your data. Continue from where you left off, anytime.',
//   },
//   {
//     title: 'Real-Time Preview',
//     description: 'See a real-time preview of your resume as you build it. This allows you to make instant adjustments and ensure everything looks perfect.',
//   },
//   {
//     title: 'Professional Advice',
//     description: 'Get professional advice and tips on how to improve your resume. Our experts provide feedback to help you create the best resume possible.',
//   },
//   // Add more features as needed
// ];

// const FeaturesDetail = () => {
//   const classes = useStyles();

//   return (
//     <Container className={classes.root}>
//       <Typography variant="h4" className={classes.title}>
//         Features
//       </Typography>
//       <Grid container spacing={4}>
//         {features.map((feature, index) => (
//           <Grid item xs={12} key={index}>
//             <Paper className={classes.featureBox}>
//               <Typography variant="h5" className={classes.featureTitle}>
//                 {feature.title}
//               </Typography>
//               <Typography variant="body1" className={classes.featureDescription}>
//                 {feature.description}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default FeaturesDetail;

import {
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: "#ebf9ff",
    minHeight: "100vh",
    marginTop: "5rem",
  },
  title: {
    color: "#027b9a",
    textAlign: "center",
    marginTop: "6rem !important",
    fontWeight:"bold !important"
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

const features = [
  {
    title: "Easy to Use",
    description:
      "Our resume builder is user-friendly and easy to navigate. Simply enter your information, and the builder will take care of the rest.",
  },
  {
    title: "Customizable Templates",
    description:
      "Choose from a variety of templates to match your style. Each template is fully customizable to ensure your resume stands out.",
  },
  {
    title: "Download in Multiple Formats",
    description:
      "Download your resume in PDF, DOC, and more. We support various formats to ensure compatibility with different systems.",
  },
  {
    title: "Auto-Save Feature",
    description:
      "Your progress is saved automatically, so you never have to worry about losing your data. Continue from where you left off, anytime.",
  },
  {
    title: "Real-Time Preview",
    description:
      "See a real-time preview of your resume as you build it. This allows you to make instant adjustments and ensure everything looks perfect.",
  },
  {
    title: "Professional Advice",
    description:
      "Get professional advice and tips on how to improve your resume. Our experts provide feedback to help you create the best resume possible.",
  },
];

const FeaturesDetail = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" className={classes.title}>
        Features
      </Typography>
      <Container className={classes.root}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} key={index}>
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  className={classes.accordionSummary}
                >
                  <Typography variant="h5" className={classes.featureTitle}>
                    {feature.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography variant="body1">{feature.description}</Typography>
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
