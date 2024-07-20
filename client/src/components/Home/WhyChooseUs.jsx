// import "../../css/whychooseus.css"
// export default function WhyChooseUs() {
//   return (
//     <div>
//       <section className="why-choose-us">
//         <h2>Why Choose Us</h2>
//         <div className="content-box">
//           <p>
//             Our resume builder is designed to help you create a resume that
//             showcases your skills and experience
//           </p>
//         </div>
//         <button className="start-now">Start Now</button>
//       </section>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from 'react';
import "../../css/whychooseus.css";

export default function WhyChooseUs() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Store the current ref in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="why-choose-us" ref={sectionRef}>
      <h2 className={isInView ? "fade-in" : ""}>Why Choose Us</h2>
      <div className={`content-box ${isInView ? 'fade-in' : ''}`}>
        <p>
          Our resume builder is designed to help you create a resume that
          showcases your skills and experience.
        </p>
      </div>
      <button className="start-now">Start Now</button>
    </section>
  );
}

