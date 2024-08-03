import { useState, useEffect, useRef } from 'react';
import { makeStyles, Step, Stepper, StepLabel, Typography, Container, Box } from '@material-ui/core';
import "../../css/howitworks.css";

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
    bgImage: 'https://img.freepik.com/free-vector/sharing-content-social-media_23-2148508446.jpg?t=st=1719493721~exp=1719497321~hmac=4a06640d9c970fc21dd063829489cc034259433ecc1517a786eaf568aae67e62&w=740',
  },
  {
    label: 'Customize Your Resume',
    bgImage: 'https://img.freepik.com/free-vector/online-certification-with-computer_23-2148571755.jpg?t=st=1719493871~exp=1719497471~hmac=aaa2e7d0dcf255e6eed0e618b22e32ea49c6e129eac04a75f5efde975964da8e&w=740',
  },
  {
    label: 'Download and Share',
    bgImage: 'https://img.freepik.com/free-vector/image-upload-concept-landing-page_23-2148298503.jpg?t=st=1719494061~exp=1719497661~hmac=9cffb7f81a8c8f230e775c091507020aba9763a8fbbd2a6f288e7d2f08ba554c&w=1060',
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


