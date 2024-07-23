import { useEffect, useRef, useState } from "react";
import bannerImage from "../../assets/banner.jpg";
import { motion, useAnimation } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "../../css/banner.css";
import useAuth from "../../hooks/useAuth";

export default function Banner() {
  const { user } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();
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

  const handleGetStartedClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="banner">
      <div className={`content ${isVisible ? "animate" : ""}`} ref={contentRef}>
        <h1>Create Professional Resumes with Our Resume Builder</h1>
        <p>
          Easily create a professional-looking resume with our user-friendly
          resume builder. Customize templates, add your own content.
        </p>
        <button className="get-started" onClick={handleGetStartedClick}>
          <Link>Get Started</Link>
        </button>
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
