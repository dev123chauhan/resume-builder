// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import "../../css/resumebuilder.css"
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// const ResumeBuilder = ({ resumes }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const resumesPerSlide = 4;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNextSlide();
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [currentIndex, resumes.length]);

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + resumesPerSlide >= resumes.length
//         ? 0
//         : prevIndex + resumesPerSlide
//     );
//   };

//   const goToPrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0
//         ? Math.max(resumes.length - resumesPerSlide, 0)
//         : prevIndex - resumesPerSlide
//     );
//   };

//   const totalSlides = Math.ceil(resumes.length / resumesPerSlide);

//   return (
//     <>
//     <h2 className="features-title">Templates</h2>
//     <div className="resume-carousel">
//       <div
//         className="carousel-container"
//         style={{
//           transform: `translateX(-${(currentIndex / resumesPerSlide) * 100}%)`,
//         }}
//       >
//         {resumes.map((resume, index) => (
//           <div key={index} className="resume-card">
//             <img
//               src={resume.imageUrl}
//               alt={`Resume of ${resume.name}`}
//               className="resume-image"
//             />
//           </div>
//         ))}
//       </div>
//       <span className="nav-button prev" onClick={goToPrevSlide}>
//       <ChevronLeftIcon />
//       </span>
//       <span className="nav-button next" onClick={goToNextSlide}>
//       <ChevronRightIcon />
//       </span>
//       <div className="navigation-dots">
//         {[...Array(totalSlides)].map((_, index) => (
//           <span
//             key={index}
//             className={`dot ${
//               Math.floor(currentIndex / resumesPerSlide) === index
//                 ? "active"
//                 : ""
//             }`}
//             onClick={() => setCurrentIndex(index * resumesPerSlide)}
//           />
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };
// ResumeBuilder.propTypes = {
//   resumes: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       imageUrl: PropTypes.string.isRequired,
//       alt: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default ResumeBuilder;


import { useState, useEffect } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "../../css/resumebuilder.css";
import Template1 from "../../assets/template 1.jpg";
import Template2 from "../../assets/template 2.jpg";
import Template3 from "../../assets/template 3.jpg";
import Template4 from "../../assets/template 4.jpg";
import Template5 from "../../assets/template 5.jpg";
import Template6 from "../../assets/template 6.jpg";
import Template7 from "../../assets/template 7.jpg";
import Template8 from "../../assets/template 8.jpg";

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

const ResumeBuilder = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const resumesPerSlide = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 2000);

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
              <PhotoProvider>
                <PhotoView src={resume.imageUrl}>
                  <img
                    src={resume.imageUrl}
                    alt={`Resume of ${resume.name}`}
                    className="resume-image"
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
          ))}
        </div>
        <span className="nav-button prev" onClick={goToPrevSlide}>
          <ChevronLeftIcon />
        </span>
        <span className="nav-button next" onClick={goToNextSlide}>
          <ChevronRightIcon />
        </span>
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



export default ResumeBuilder;

