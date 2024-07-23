// import { useEffect, useState, useRef } from "react";
// import footer2logo from "../../assets/footer2logo.png";
// import logo2image from "../../assets/logo2image.png";
// import { Link, useLocation } from "react-router-dom";
// import "../../css/header.css";
// import noProfile from "../../assets/noProfile.jpg";
// import { MdOutlineAccountCircle, MdOutlineSpaceDashboard } from "react-icons/md";
// import { IoIosLogOut } from "react-icons/io";
// import useAuth from "../../hooks/useAuth";

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const location = useLocation();

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const { user, logout } = useAuth();

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const navLinks = [
//     { name: "Home", url: "/" },
//     { name: "About", url: "/about" },
//     { name: "Features", url: "/features" },
//     { name: "Contact", url: "/contact" },
//   ];

//   return (
//     <header id="header" className={isScrolled ? "scrolled" : ""}>
//       <div className="container">
//         <div className="header-content">
        
//           <Link to="/">
//             <img
//               src={isScrolled ? footer2logo : logo2image}
//               id="logo"
//               className="logo"
//               alt="Logo"
//             />
//           </Link>
//           <nav>
//             <ul>
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link
//                     to={link.url}
//                     className={location.pathname === link.url ? "active" : ""}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <nav>
//             {user ? (
//               <div className="profile-menu" ref={dropdownRef}>
//                 <img
//                   className="avatar"
//                   alt={user.name}
//                   src={user?.profileImage ? `http://localhost:5000/uploads/${user.profileImage}` : noProfile}
//                   onClick={toggleDropdown}
//                 />
//                 <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
//                   <Link to="/account" className="dropdown-item"><MdOutlineAccountCircle className="profileIcon"/>Account</Link>
//                   <Link to="/dashboard" className="dropdown-item"><MdOutlineSpaceDashboard className="profileIcon"/>Dashboard</Link>
//                   <div className="dropdown-item" onClick={logout}>
//                     <IoIosLogOut className="profileIcon"/> Logout
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <Link to="/login" className="loginButton">
//                 Login
//               </Link>
//             )}
//           </nav>

//           <div
//             className="menu-icon"
//             id="menu-icon"
//             onClick={toggleSidebar}
//             style={{ color: isScrolled ? "white" : "black" }}
//           >
//             {isSidebarOpen ? "✕" : "☰"}
//           </div>
//         </div>
//       </div>
//       <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//         <img className="footerLogo" src={footer2logo} alt="" />
//         <ul>
//           {navLinks.map((link, index) => (
//             <li key={index}>
//               <Link to={link.url}>{link.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </header>
//   );
// }


// import { useEffect, useState, useRef } from "react";
// import footer2logo from "../../assets/footer2logo.png";
// import logo2image from "../../assets/logo2image.png";
// import { Link, useLocation } from "react-router-dom";
// import "../../css/header.css";
// import noProfile from "../../assets/noProfile.jpg";
// import { MdOutlineAccountCircle, MdOutlineSpaceDashboard } from "react-icons/md";
// import { IoIosLogOut } from "react-icons/io";
// import useAuth from "../../hooks/useAuth";

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const dropdownRef = useRef(null);
//   const location = useLocation();

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const { user, logout } = useAuth();

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const navLinks = [
//     { name: "Home", url: "/" },
//     { name: "About", url: "/about" },
//     { name: "Features", url: "/features" },
//     { name: "Contact", url: "/contact" },
//   ];

//   return (
//     <header id="header" className={isScrolled ? "scrolled" : ""}>
//       <div className="container">
//         <div className="header-content">
//           {isMobile ? (
//             <div
//               className="menu-icon"
//               id="menu-icon"
//               onClick={toggleSidebar}
//               style={{ color: isScrolled ? "white" : "black" }}
//             >
//               {isSidebarOpen ? "" : "☰"}
//             </div>
//           ) : (
//             <Link to="/">
//               <img
//                 src={isScrolled ? footer2logo : logo2image}
//                 id="logo"
//                 className="logo"
//                 alt="Logo"
//               />
//             </Link>
//           )}
//           <nav>
//             <ul>
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link
//                     to={link.url}
//                     className={location.pathname === link.url ? "active" : ""}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <nav>
//             {user ? (
//               <div className="profile-menu" ref={dropdownRef}>
//                 <img
//                   className="avatar"
//                   alt={user.name}
//                   src={user?.profileImage ? `http://localhost:5000/uploads/${user.profileImage}` : noProfile}
//                   onClick={toggleDropdown}
//                 />
//                 <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
//                   <Link to="/account" className="dropdown-item"><MdOutlineAccountCircle className="profileIcon"/>Account</Link>
//                   <Link to="/dashboard" className="dropdown-item"><MdOutlineSpaceDashboard className="profileIcon"/>Dashboard</Link>
//                   <div className="dropdown-item" onClick={logout}>
//                     <IoIosLogOut className="profileIcon"/> Logout
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <Link to="/login" className="loginButton">
//                 Login
//               </Link>
//             )}
//           </nav>
//         </div>
//       </div>
//       <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//         <img className="footerLogo" src={footer2logo} alt="" />
//         <ul>
//           {navLinks.map((link, index) => (
//             <li key={index}>
//               <Link to={link.url}>{link.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </header>
//   );
// }



import { useEffect, useState, useRef } from "react";
import footer2logo from "../../assets/footer2logo.png";
import logo2image from "../../assets/logo2image.png";
import { Link, useLocation } from "react-router-dom";
import "../../css/header.css";
import noProfile from "../../assets/noProfile.jpg";
import { MdOutlineAccountCircle, MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosLogOut, IoMdClose } from "react-icons/io";
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { user, logout } = useAuth();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Features", url: "/features" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <header id="header" className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="header-content">
          {isMobile ? (
            <div
              className="menu-icon"
              id="menu-icon"
              onClick={toggleSidebar}
              style={{ color: isScrolled ? "white" : "black" }}
            >
              ☰
            </div>
          ) : (
            <Link to="/">
              <img
                src={isScrolled ? footer2logo : logo2image}
                id="logo"
                className="logo"
                alt="Logo"
              />
            </Link>
          )}
          <nav>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className={location.pathname === link.url ? "active" : ""}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            {user ? (
              <div className="profile-menu" ref={dropdownRef}>
                <img
                  className="avatar"
                  alt={user.name}
                  src={user?.profileImage ? `http://localhost:5000/uploads/${user.profileImage}` : noProfile}
                  onClick={toggleDropdown}
                />
                <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                  <Link to="/account" className="dropdown-item"><MdOutlineAccountCircle className="profileIcon"/>Account</Link>
                  <Link to="/dashboard" className="dropdown-item"><MdOutlineSpaceDashboard className="profileIcon"/>Dashboard</Link>
                  <div className="dropdown-item" onClick={logout}>
                    <IoIosLogOut className="profileIcon"/> Logout
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="loginButton">
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img className="logoMenu" src={footer2logo} alt="" />
          <IoMdClose className="close-icon" onClick={toggleSidebar} />
        </div>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.url} onClick={toggleSidebar}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}