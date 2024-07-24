import { useState } from "react";
import Banner from "./Banner";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import WhyChooseUs from "./WhyChooseUs";
import ResumeBuilder from "./ResumeBuilder";


import AddOn from "./AddOn";
export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

 
  return (
    <div>
      <Banner />
      <Features />
      <HowItWorks activeStep={activeStep} setActiveStep={setActiveStep} />
      <WhyChooseUs />
      <ResumeBuilder  />
      <AddOn />
    </div>
  );
}
