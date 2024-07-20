import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Your custom CSS file for styles
import "../../css/features.css";
import { useEffect, useRef, useState } from "react";

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
  const features = [
    {
      title: "Easy to Use",
      description:
        "Our resume builder is user-friendly and intuitive, making it simple to create a professional resume.",
      icon: "fa fa-check",
    },
    {
      title: "Customizable Templates",
      description:
        "Choose from a variety of templates that you can customize to fit your personal style and job application.",
      icon: "fa-solid fa-book",
    },
    {
      title: "Expert Tips",
      description:
        "Get tips and examples from experts to make sure your resume stands out.",
      icon: "fa-solid fa-circle-question",
    },
    {
      title: "Mobile Optimized",
      description:
        "Create or edit your resume on the go, our app works seamlessly on mobile devices.",
      icon: "fa fa-mobile",
    },
    {
      title: "Downloadable PDF",
      description:
        "Download your resume in PDF format to easily share with employers.",
      icon: "fa fa-file-pdf",
    },
    {
      title: "Collaboration Tools",
      description:
        "Share and collaborate on resumes with team members or friends.",
      icon: "fa fa-users",
    },
    {
      title: "Integration with LinkedIn",
      description:
        "Import your LinkedIn profile data to populate your resume effortlessly.",
      icon: "fa fa-linkedin",
    },
    {
      title: "Feedback and Revision History",
      description:
        "Track changes and receive feedback to improve your resume over time.",
      icon: "fa fa-history",
    },
  ];

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
    <section className="features-section">
      <div className="container">
      <h2 className="features-title">Features</h2>
      <Slider {...sliderSettings}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-item ${visibleItems[index] ? 'animate' : ''}`}
            ref={(el) => featureRefs.current[index] = el}
          >
            <div className={`feature-icon fa ${feature.icon}`}></div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
}
