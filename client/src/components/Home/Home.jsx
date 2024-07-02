import { useState } from "react";
import Banner from "./Banner";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import WhyChooseUs from "./WhyChooseUs";
import ResumeBuilder from "./ResumeBuilder";
import Template1 from "../../assets/Template1.jpg";
import Template2 from "../../assets/Template2.jpg";
import Template3 from "../../assets/Template3.jpg";
import Footer from "./Footer";
import Header from "./Header";
import AddOn from "./AddOn";
export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  const resumes = [
    { id: 1, imageUrl: Template1, alt: "Resume 1" },
    { id: 2, imageUrl: Template2, alt: "Resume 2" },
    { id: 3, imageUrl: Template3, alt: "Resume 3" },
    { id: 4, imageUrl: Template1, alt: "Resume 1" },
    { id: 5, imageUrl: Template2, alt: "Resume 2" },
    { id: 6, imageUrl: Template3, alt: "Resume 3" },
    { id: 7, imageUrl: Template1, alt: "Resume 1" },
    { id: 8, imageUrl: Template2, alt: "Resume 2" },
    { id: 9, imageUrl: Template3, alt: "Resume 3" },
    { id: 10, imageUrl: Template1, alt: "Resume 1" },
    { id: 11, imageUrl: Template2, alt: "Resume 2" },
    { id: 12, imageUrl: Template3, alt: "Resume 3" },
  ];
  return (
    <div> 
      <Header />
      <Banner />
      <Features />
      <HowItWorks activeStep={activeStep} setActiveStep={setActiveStep} />
      <WhyChooseUs />
      <ResumeBuilder resumes={resumes} />
      <AddOn/>
      <Footer />
    </div>
  );
}
