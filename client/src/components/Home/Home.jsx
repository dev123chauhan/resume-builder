import { useState } from "react";
import Banner from "./Banner";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import WhyChooseUs from "./WhyChooseUs";
import ResumeBuilder from "./ResumeBuilder";
import Template1 from "../../assets/template 1.jpg";
import Template2 from "../../assets/template 2.jpg";
import Template3 from "../../assets/template 3.jpg";
import Template4 from "../../assets/template 4.jpg";
import Template5 from "../../assets/template 5.jpg";
import Template6 from "../../assets/template 6.jpg";
import Template7 from "../../assets/template 7.jpg";
import Template8 from "../../assets/template 8.jpg";

import AddOn from "./AddOn";
export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  const resumes = [
    { id: 1, imageUrl: Template1, alt: "Resume 1" },
    { id: 2, imageUrl: Template2, alt: "Resume 2" },
    { id: 3, imageUrl: Template3, alt: "Resume 3" },
    { id: 4, imageUrl: Template4, alt: "Resume 4" },
    { id: 5, imageUrl: Template5, alt: "Resume 5" },
    { id: 6, imageUrl: Template6, alt: "Resume 6" },
    { id: 7, imageUrl: Template7, alt: "Resume 7" },
    { id: 8, imageUrl: Template8, alt: "Resume 8" },
    { id: 9, imageUrl: Template1, alt: "Resume 9" },
    { id: 10, imageUrl: Template2, alt: "Resume 10" },
    { id: 11, imageUrl: Template3, alt: "Resume 11" },
    { id: 12, imageUrl: Template4, alt: "Resume 12" },
    { id: 13, imageUrl: Template5, alt: "Resume 13" },
    { id: 14, imageUrl: Template6, alt: "Resume 14" },
    { id: 15, imageUrl: Template7, alt: "Resume 15" },
    { id: 16, imageUrl: Template8, alt: "Resume 16" },
  ];
  return (
    <div>
      <Banner />
      <Features />
      <HowItWorks activeStep={activeStep} setActiveStep={setActiveStep} />
      <WhyChooseUs />
      <ResumeBuilder resumes={resumes} />
      <AddOn />
    </div>
  );
}
