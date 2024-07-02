import  { useState, useEffect } from 'react';
import { makeStyles, Step, Stepper, StepLabel, Typography, Container, Box } from '@material-ui/core';  // Import your CSS file
import "../../css/howitworks.css"
const useStyles = makeStyles(() => ({
  stepperRoot: {
    width: '100%',
    marginBottom: '40px',
  },
  stepContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepCards: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  stepCard: {
    background: '#e9ecef',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #027b9a',
    textAlign: 'center',
    width: '300px',
    height: "250px",
    opacity: 0,
    transform: 'translateY(20px)',
    animation: 'fadeInUp 0.5s forwards',
    position: 'relative', // Added for background image positioning
    overflow: 'hidden', // Ensure content doesn't overflow the card
  },
  activeStepIcon: {
    color: '#027b9a !important',
  },
  completedStepIcon: {
    color: '#027b9a !important',
  },
  cardBgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 1, // Adjust opacity as needed
    zIndex: -1, // Ensure it stays behind the text
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

const steps = [
  {
    label: 'Choose a Template',
    icon: 'fa fa-file-alt',
    description: 'Browse through our library of professional templates and choose the one that best suits your needs.',
    bgImage: 'https://img.freepik.com/free-vector/sharing-content-social-media_23-2148508446.jpg?t=st=1719493721~exp=1719497321~hmac=4a06640d9c970fc21dd063829489cc034259433ecc1517a786eaf568aae67e62&w=740', // Update with your image paths
  },
  {
    label: 'Customize Your Resume',
    icon: 'fa fa-edit',
    description: 'Fill in your details, customize the design, and add sections that highlight your skills and experience.',
    bgImage: 'https://img.freepik.com/free-vector/online-certification-with-computer_23-2148571755.jpg?t=st=1719493871~exp=1719497471~hmac=aaa2e7d0dcf255e6eed0e618b22e32ea49c6e129eac04a75f5efde975964da8e&w=740',
  },
  {
    label: 'Download and Share',
    icon: 'fa fa-download',
    description: 'Once you are satisfied with your resume, download it in your preferred format and start applying for jobs.',
    bgImage: 'https://img.freepik.com/free-vector/image-upload-concept-landing-page_23-2148298503.jpg?t=st=1719494061~exp=1719497661~hmac=9cffb7f81a8c8f230e775c091507020aba9763a8fbbd2a6f288e7d2f08ba554c&w=1060',
  },
];

const HowItWorks = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeStep < steps.length) {
        setActiveStep(activeStep + 1);
      }
    }, 1000); // Adjust timing as per your preference

    return () => clearTimeout(timer);
  }, [activeStep]);

  return (
    <Container>
      <Typography variant="h4" align="center" className="how-it-works-title">
        How It Works
      </Typography>
      <div className={classes.stepperRoot}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={index} className={`step-item ${activeStep === index ? 'active' : ''}`}>
              <StepLabel
                StepIconProps={{
                  classes: {
                    active: classes.activeStepIcon,
                    completed: classes.completedStepIcon,
                  },
                }}
              >
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box className={classes.stepContent}>
          <div className={classes.stepCards}>
            {steps.slice(0, activeStep + 1).map((step, index) => (
              <div key={index} className={classes.stepCard}>
                <div
                  className={classes.cardBgImage}
                  style={{ backgroundImage: `url(${step.bgImage})` }}
                />
                <div className={`step-icon ${step.icon}`} />
                <Typography variant="h6" className="step-title">
    
                </Typography>
                <Typography className="step-description">
           
                </Typography>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </Container>
  );
};

export default HowItWorks;
