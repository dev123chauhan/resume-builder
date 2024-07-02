import ScrollToTop from "react-scroll-to-top";
import { ArrowUpwardRounded } from "@material-ui/icons";
import { Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home"
import Register from "./components/Signup/Register";
// import About from "./components/Home/About"
export default function App() {

  return (
    <div>
      <ScrollToTop
        className="scrollToTop"
        smooth
        component={<ArrowUpwardRounded className="upArrow" />} // Apply color to the arrow
      />
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/" element={<Home />}/>
      </Routes>

    </div>
  );
}
