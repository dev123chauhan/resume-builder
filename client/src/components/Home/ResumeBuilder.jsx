import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../css/resumebuilder.css"
const ResumeBuilder = ({ resumes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const resumesPerSlide = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, resumes.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + resumesPerSlide >= resumes.length
        ? 0
        : prevIndex + resumesPerSlide
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(resumes.length - resumesPerSlide, 0)
        : prevIndex - resumesPerSlide
    );
  };

  const totalSlides = Math.ceil(resumes.length / resumesPerSlide);

  return (
    <>
    <h2 className="features-title">Templates</h2>
    <div className="resume-carousel">
      <div
        className="carousel-container"
        style={{
          transform: `translateX(-${(currentIndex / resumesPerSlide) * 100}%)`,
        }}
      >
        {resumes.map((resume, index) => (
          <div key={index} className="resume-card">
            <img
              src={resume.imageUrl}
              alt={`Resume of ${resume.name}`}
              className="resume-image"
            />
          </div>
        ))}
      </div>
      <button className="nav-button prev" onClick={goToPrevSlide}>
        &lt;
      </button>
      <button className="nav-button next" onClick={goToNextSlide}>
        &gt;
      </button>
      <div className="navigation-dots">
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`dot ${
              Math.floor(currentIndex / resumesPerSlide) === index
                ? "active"
                : ""
            }`}
            onClick={() => setCurrentIndex(index * resumesPerSlide)}
          />
        ))}
      </div>
    </div>
    </>
  );
};
ResumeBuilder.propTypes = {
  resumes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ResumeBuilder;
