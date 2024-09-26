import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Your custom CSS file for styles
import "../../css/features.css";
import { useEffect, useRef, useState } from "react";
import { FaCheck, FaBook, FaQuestionCircle, FaMobileAlt, FaFilePdf, FaUsers, FaLinkedin, FaHistory } from "react-icons/fa";
export default function Features() {
  const [visibleItems, setVisibleItems] = useState([]);
  const featureRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const visible = featureRefs.current.map((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          return rect.top < window.innerHeight && rect.bottom > 0;
        }
        return false;
      });
      setVisibleItems(visible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // const features = [
  //   {
  //     title: "Easy to Use",
  //     description:
  //       "Our resume builder is user-friendly and intuitive, making it simple to create a professional resume.",
  //     icon: <FaCheck />,
  //   },
  //   {
  //     title: "Customizable Templates",
  //     description:
  //       "Choose from a variety of templates that you can customize to fit your personal style and job application.",
  //     icon: <FaBook />,
  //   },
  //   {
  //     title: "Expert Tips",
  //     description:
  //       "Get tips and examples from experts to make sure your resume stands out.",
  //     icon: <FaQuestionCircle />,
  //   },
  //   {
  //     title: "Mobile Optimized",
  //     description:
  //       "Create or edit your resume on the go, our app works seamlessly on mobile devices.",
  //     icon: <FaMobileAlt />,
  //   },
  //   {
  //     title: "Downloadable PDF",
  //     description:
  //       "Download your resume in PDF format to easily share with employers.",
  //     icon: <FaFilePdf />,
  //   },
  //   {
  //     title: "Collaboration Tools",
  //     description:
  //       "Share and collaborate on resumes with team members or friends.",
  //     icon: <FaUsers />,
  //   },
  //   {
  //     title: "Integration with LinkedIn",
  //     description:
  //       "Import your LinkedIn profile data to populate your resume effortlessly.",
  //     icon: <FaLinkedin />,
  //   },
  //   {
  //     title: "Feedback and Revision History",
  //     description:
  //       "Track changes and receive feedback to improve your resume over time.",
  //     icon: <FaHistory />,
  //   },
  // ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <section className="features-section">
    //   <div className="container">
    //   <h2 className="features-title">Features</h2>
    //   <Slider {...sliderSettings}>
    //     {features.map((feature, index) => (
    //       <div
    //         key={index}
    //         className={`feature-item ${visibleItems[index] ? 'animate' : ''}`}
    //         ref={(el) => featureRefs.current[index] = el}
    //       >
    //         <div className={`feature-icon ${feature.icon}`}></div>
    //         <h3 className="feature-title">{feature.title}</h3>
    //         <p className="feature-description">{feature.description}</p>
    //       </div>
    //     ))}
    //   </Slider>
    // </div>
    // </section>
    <section className="features-section">
    <div className="container">
      <h2 className="features-title">Features</h2>
      <Slider {...sliderSettings}>
        <div className={`feature-item ${visibleItems[0] ? 'animate' : ''}`} ref={(el) => featureRefs.current[0] = el}>
          <div className="feature-icon">
            <FaCheck/> {/* Custom icon */}
          </div>
          <h3 className="feature-title">Easy to Use</h3>
          <p className="feature-description">
            Our resume builder is user-friendly and intuitive, making it simple to create a professional resume.
          </p>
        </div>

        <div className={`feature-item ${visibleItems[1] ? 'animate' : ''}`} ref={(el) => featureRefs.current[1] = el}>
          <div className="feature-icon">
            <FaBook/> {/* Custom icon */}
          </div>
          <h3 className="feature-title">Customizable Templates</h3>
          <p className="feature-description">
            Choose from a variety of templates that you can customize to fit your personal style and job application.
          </p>
        </div>

        <div className={`feature-item ${visibleItems[2] ? 'animate' : ''}`} ref={(el) => featureRefs.current[2] = el}>
          <div className="feature-icon">
           <FaQuestionCircle/> {/* Custom icon */}
          </div>
          <h3 className="feature-title">Expert Tips</h3>
          <p className="feature-description">
            Get tips and examples from experts to make sure your resume stands out.
          </p>
        </div>

        <div className={`feature-item ${visibleItems[3] ? 'animate' : ''}`} ref={(el) => featureRefs.current[3] = el}>
          <div className="feature-icon">
           <FaMobileAlt/> {/* Custom icon */}
          </div>
          <h3 className="feature-title">Mobile Optimized</h3>
          <p className="feature-description">
            Create or edit your resume on the go, our app works seamlessly on mobile devices.
          </p>
        </div>

        <div className={`feature-item ${visibleItems[4] ? 'animate' : ''}`} ref={(el) => featureRefs.current[4] = el}>
          <div className="feature-icon">
            <FaFilePdf/> {/* Custom icon */}
          </div>
          <h3 className="feature-title">Downloadable PDF</h3>
          <p className="feature-description">
            Download your resume in PDF format to easily share with employers.
          </p>
        </div>

        <div className={`feature-item ${visibleItems[5] ? 'animate' : ''}`} ref={(el) => featureRefs.current[5] = el}>
          <div className="feature-icon">
          <FaUsers/>{/* Custom icon */}
          </div>
          <h3 className="feature-title">Collaboration Tools</h3>
          <p className="feature-description">
            Share and collaborate on resumes with team members or friends.
          </p>
        </div>

        <div className={`feature-item ${visibleItems[6] ? 'animate' : ''}`} ref={(el) => featureRefs.current[6] = el}>
          <div className="feature-icon">
           <FaLinkedin/> {/* Custom icon */}
          </div>
          <h3 className="feature-title">Integration with LinkedIn</h3>
          <p className="feature-description">
            Import your LinkedIn profile data to populate your resume effortlessly.
          </p>
        </div>

        <div className={`feature-item ${visibleItems[7] ? 'animate' : ''}`} ref={(el) => featureRefs.current[7] = el}>
          <div className="feature-icon">
           <FaHistory/> {/* Custom icon */}
          </div>
          <h3 className="feature-title">Feedback and Revision History</h3>
          <p className="feature-description">
            Track changes and receive feedback to improve your resume over time.
          </p>
        </div>
      </Slider>
    </div>
  </section>
  );
}
