import  { useEffect, useState } from 'react';
import axios from 'axios';
import aboutImg from "../../assets/banner.jpg";
import "../../css/about.css";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/about');
        setAboutData(response.data);
      } catch (error) {
        console.error('Error fetching the about data:', error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="about-us-container">
      <h1 className='aboutText'>About Us</h1>
      <div className="content-wrapper">
        <div className="image-container">
          <img src={aboutImg} alt="Resume builder illustration" />
        </div>
        <div className="text-container">
          {aboutData?.sections.map((section, index) => (
            <div key={index}>
              <h2>{section?.title}</h2>
              {section?.content.map((item, idx) => (
                <div key={idx}>
                  {item?.subtitle && <h3>{item?.subtitle}</h3>}
                  <p>{item?.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
