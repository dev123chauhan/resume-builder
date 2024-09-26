import { useState, useEffect, useRef } from 'react';
import { makeStyles, Step, Stepper, StepLabel, Typography, Container, Box } from '@material-ui/core';
import "../../css/howitworks.css";
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.jpg"

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
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: 'center',
    width: '300px',
    height: "250px",
    opacity: 0,
    transform: 'translateX(20px)',
    position: 'relative',
    overflow: 'hidden',
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
    opacity: 1,
    zIndex: -1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  stepTitle: {
    display: 'none', // Hide the title
  },
  stepDescription: {
    display: 'none', // Hide the description
  },
}));

const steps = [
  {
    label: 'Choose a Template',
    bgImage: image3,
  },
  {
    label: 'Customize Your Resume',
    bgImage: image2,
  },
  {
    label: 'Download and Share',
    bgImage:  image1,
  },
];

const HowItWorks = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeStep < steps.length) {
        setActiveStep(activeStep + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [activeStep]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Container ref={containerRef}>
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
              <div
                key={index}
                className={`${classes.stepCard} ${inView ? 'fadeInRight' : ''}`}
              >
                <div
                  className={classes.cardBgImage}
                  style={{ backgroundImage: `url(${step.bgImage})` }}
                />
                {/* The title and description have been removed */}
              </div>
            ))}
          </div>
        </Box>
      </div>
    </Container>
  );
};

export default HowItWorks;


