import  { useEffect, useRef, useState } from 'react';
import bannerImage from "../../assets/banner.jpg";
import { motion, useAnimation } from 'framer-motion';
import { Link } from "react-router-dom";
import "../../css/banner.css";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const imageRefCurrent = imageRef.current;
    const contentRefCurrent = contentRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start({
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            },
          });
        } else {
          setIsVisible(false);
          controls.start({
            opacity: 0,
            scale: 0.5,
            transition: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
          });
        }
      },
      { threshold: 0.5 }
    );

    if (imageRefCurrent) {
      observer.observe(imageRefCurrent);
    }

    if (contentRefCurrent) {
      observer.observe(contentRefCurrent);
    }

    return () => {
      if (imageRefCurrent) {
        observer.unobserve(imageRefCurrent);
      }
      if (contentRefCurrent) {
        observer.unobserve(contentRefCurrent);
      }
    };
  }, [controls]);

  return (
    <div className="banner">
      <div className={`content ${isVisible ? 'animate' : ''}`} ref={contentRef}>
        <h1>Create Professional Resumes with Our Resume Builder</h1>
        <p>
          Easily create a professional-looking resume with our user-friendly
          resume builder. Customize templates, add your own content.
        </p>
        <Link className="get-started" to="/dashboard">
          Get Started
        </Link>
      </div>
      <motion.div
        className="image"
        ref={imageRef}
        animate={controls}
        initial={{ opacity: 0, scale: 0.5 }}
      >
        <img src={bannerImage} alt="Resume Builder Interface" />
      </motion.div>
    </div>
  );
}





