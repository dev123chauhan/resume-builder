import  { useEffect } from "react";
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


export default function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <ScrollToTop
        className="scrollToTop"
        smooth
        component={<ArrowUpwardRounded className="upArrow" />} // Apply color to the arrow
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
        <Route path="/account" element={<ProfileDashboard />} />
      </Routes>
    </div>
  );
}
