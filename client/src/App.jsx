import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { ArrowUpwardRounded } from "@material-ui/icons";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Signup/Register";
import About from "./components/Home/About";
import Layout from "./components/Layout/Layout";
import FeaturesDetail from "./components/Features/FeaturesDetail";
import Contact from "./components/Contact/Contact";
import ProfileDashboard from "./components/Profile/ProfileDashboard";
import TermsAndConditions from "./components/TermsAndCondition/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Faq from "./components/FAQ/Faq";
import Blog from "./components/Blog/Blog";
import Review from "./components/Review/Review";
import Help from "./components/Help/Help";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let pageTitle = "Resume Builder"; // Default title

    switch (path) {
      case "/":
        pageTitle = "Home | Resume Builder";
        break;
      case "/features":
        pageTitle = "Features | Resume Builder";
        break;
      case "/about":
        pageTitle = "About | Resume Builder";
        break;
      case "/contact":
        pageTitle = "Contact | Resume Builder";
        break;
      case "/login":
        pageTitle = "Login | Resume Builder";
        break;
      case "/register":
        pageTitle = "Register | Resume Builder";
        break;
      case "/dashboard":
        pageTitle = "dashboard | Resume Builder";
        break;
      default:
        pageTitle = "Resume Builder";
    }

    document.title = pageTitle;
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <ScrollToTop
        className="scrollToTop"
        smooth
        component={<ArrowUpwardRounded className="upArrow" />}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/features"
          element={
            <Layout>
              <FeaturesDetail />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/account"
          element={
            <Layout>
                  <ProfileDashboard />
             </Layout> 
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <Layout>
              <TermsAndConditions />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <Faq />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/review"
          element={
            <Layout>
              <Review />
            </Layout>
          }
        />
        <Route
          path="/help"
          element={
            <Layout>
              <Help />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}
