import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import footer2logo from "../../assets/footer2logo.png"
import "../../css/footer.css"
export default function Footer() {
  const resources = [
    { text: "Template", link: "#" },
    { text: "Pricing", link: "#" },
    { text: "Blog", link: "#" },
    { text: "Help", link: "#" },
  ];

  const company = [
    { text: "About Us", link: "#" },
    { text: "Careers", link: "#" },
    { text: "Contact", link: "#" },
    { text: "Review", link: "#" },
  ];

  const support = [
    { text: "FAQs", link: "#" },
    { text: "Terms", link: "#" },
    { text: "Privacy", link: "#" },
    { text: "Sitemap", link: "#" },
  ];

  const renderMenu = (title, items) => (
    <div className="footer-content-column">
      <div className="footer-menu">
        <h2 className="footer-menu-name">{title}</h2>
        <ul className="footer-menu-list">
          {items.map((item, index) => (
            <li key={index} className="menu-item">
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      <div className="pg-footer">
        <footer className="footer">
          <svg
            className="footer-wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              className="footer-wave-path"
              d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
            ></path>
          </svg>
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-logo">
                <a className="footer-logo-link" href="#">
                  <img src={footer2logo} className="logo" alt="" />
                </a>
                <h6>Craft Your Future, One Resume at a Time</h6>
              </div>
              <div className="social-icon">
                <Facebook className="fa-facebook" />
                <Instagram className="fa-instagram" />
                <YouTube className="fa-youtube" />
                <Twitter className="fa-twitter" />
              </div>
            </div>
            {renderMenu("Resources", resources)}
            {renderMenu("Company", company)}
            {renderMenu("Support", support)}
          </div>
          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <a className="footer-copyright-link" href="#" target="_self">
                  ©2020. | Designed By: Devesh Chauhan | All rights reserved.
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
