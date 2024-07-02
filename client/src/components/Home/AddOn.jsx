import "../../css/addon.css"
import template from "../../assets/template.png"
const AddOn = () => {
  return (
    <div className="resume-feature container">
      <div className="left-section">

        <div className="job-description">
          <h4>Job Description:</h4>
          <div className="job-lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <button className="apply-button">APPLY</button>
        </div>
        <div className="resume-preview">
          <img src={template} alt="Resume Preview" className="resume-image" />
        </div>
      </div>
      <div className="right-section">
        <h2>Resume tailoring based on the job  you are applying for</h2>
        <p>Quickly ensure that your resume covers key skills and experiences by pasting the job ad you are applying for</p>
        <ul className="feature-list">
          <li>Skills and experience section analysis</li>
          <li>Actionable checklist of what else to add to your resume</li>
          <li>Instant comparison between your resume and the job posting</li>
        </ul>
      
      </div>
    </div>
  );
};

export default AddOn;