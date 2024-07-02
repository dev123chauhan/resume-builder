import bannerImage from  "../../assets/banner.jpg"
import "../../css/banner.css"
export default function Banner() {
  return (
      <div className="banner">
        <div className="content">
          <h1>Create Professional Resumes with Our Resume Builder</h1>
          <p>
            Easily create a professional-looking resume with our user-friendly
            resume builder. Customize templates, add your own content.
          </p>
          <a href="#" className="get-started">
            Get Started
          </a>
        </div>
        <div className="image">
          <img src={bannerImage} alt="Resume Builder Interface" />
        </div>
      </div>
  );
}
