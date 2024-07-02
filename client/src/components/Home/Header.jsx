import { useEffect } from "react";
import { useState } from "react";
import footer2logo from "../../assets/footer2logo.png";
import logo2image from "../../assets/logo2image.png";
import { Link } from "react-router-dom";
import "../../css/header.css"
import { useAuth } from "../context/AuthContext";
import { Menu, MenuItem, IconButton, Avatar } from '@mui/material';
export default function Header() {


  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const navLinks = [
    { name: "Home", url: "home" },
    { name: "About", url: "about" },
    { name: "Features", url: "features" },
    { name: "Contact", url: "contact" },
  ];

  return (
    <header id="header" className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="header-content">
          <Link to="/">
            <img
              src={isScrolled ? footer2logo : logo2image}
              id="logo" 
              className="logo"
              alt="Logo"
            />
          </Link>
          {/* <nav>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/login" className="loginButton">
            Login
          </Link> */}

          <nav>
      {user ? (
        <div>
          <IconButton onClick={handleMenuOpen}>
            <Avatar alt={user.name} src={user.profileImage || '../../assets/noProfile.jpg'} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem>{user.name}</MenuItem>
            <MenuItem>{user.email}</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <Link to="/login" className="loginButton">
          Login
        </Link>
      )}
    </nav>

          <div
            className="menu-icon"
            id="menu-icon"
            onClick={toggleSidebar}
            style={{ color: isScrolled ? "white" : "black" }}
          >
            {isSidebarOpen ? "✕" : "☰"}
          </div>
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <img className="footerLogo" src={footer2logo} alt="" />
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
     
      </div>
    </header>
  );
}
