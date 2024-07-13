// import PropTypes from "prop-types";
// import "../../css/profilesidebar.css";
// import noProfile from "../../assets/noProfile.jpg";
// import useAuth from "../../hooks/useAuth";
// import { MdOutlineAccountCircle } from "react-icons/md";
// import { CiEdit } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { IoCloudUploadOutline } from "react-icons/io5";
// import { TbArrowsExchange } from "react-icons/tb";
// import { CiLogout } from "react-icons/ci";
// const ProfileSidebar = ({ activeTab, setActiveTab }) => {
//   const { user, logout } = useAuth();

//   const handleLogout = () => {
//     logout(); // Call the logout function from useAuth
//   };
//   return ( 
//       <div className="profile-section">
//       <div className="profile-header">
//       <img
//          className="profile-pic"
//           src={
//             user?.profileImage
//               ? `http://localhost:5000/uploads/${user.profileImage}`
//               : noProfile
//           }
//           alt=""
//         />
//         <p className="username">{user?.username}</p>
//       </div>
//       <div className="profile-options">
//         <button
//           className={`${"profile-option"} ${
//             activeTab === "profile" ? "activeSidebar" : ""
//           }`}
//           onClick={() => setActiveTab("profile")}
//         >
//         <MdOutlineAccountCircle className="profileIcon"/>  User Profile
//         </button>
//         <button
//           className={`${"profile-option"} ${activeTab === "update" ? "activeSidebar" : ""}`}
//           onClick={() => setActiveTab("update")}
//         >
//         <CiEdit className="profileIcon"/>  Update Profile
//         </button>
//         <button
//           className={`${"profile-option"} ${
//             activeTab === "picture" ? "activeSidebar" : ""
//           }`}
//           onClick={() => setActiveTab("picture")}
//         >
//        <IoCloudUploadOutline className="profileIcon"/>   Upload Picture
//         </button>
//         <button
//           className={`${"profile-option"} ${
//             activeTab === "password" ? "activeSidebar" : ""
//           }`}
//           onClick={() => setActiveTab("password")}
//         >
//        <TbArrowsExchange className="profileIcon"/>   Change Password
//         </button>

//         <div style={{position:"relative", top:"50px"}}>
//         <Link to="/"  onClick={handleLogout}>
//         <button className="logoutButton"> <CiLogout className="profileIcon"/>Log Out</button>
//       </Link>
//         </div>
//       </div>
   
//       </div>

//   );
// };

// ProfileSidebar.propTypes = {
//   activeTab: PropTypes.string.isRequired,
//   setActiveTab: PropTypes.func.isRequired,
// };

// export default ProfileSidebar;




// import "../../css/profilesidebar.css";
// import PropTypes from "prop-types";
// import useAuth from "../../hooks/useAuth";
// import noProfile from "../../assets/noProfile.jpg";
// const ProfileSidebar = ({ activeTab, setActiveTab }) => {
//     const { user, logout } = useAuth();

//   const handleLogout = () => {
//     logout(); // Call the logout function from useAuth
//   };
//   return (
//     <div className="profile-sidebar">
//       <div className="profile-header">
//         <img className="profile-pic"
//            src={
//              user?.profileImage
//                ? `http://localhost:5000/uploads/${user.profileImage}`
//                : noProfile
//            }
//           />
//         <h3>User Name</h3>
//       </div>
//       <div className="profile-options">
//         <button className={`profile-option ${activeTab === "profile" ? "activeSidebar" : ""}`} onClick={() => setActiveTab("profile")}>
//           User Profile
//         </button>
//         <button className={`profile-option ${activeTab === "update" ? "activeSidebar" : ""}`} onClick={() => setActiveTab("update")}>
//           Update Profile
//         </button>
//         <button className={`profile-option ${activeTab === "picture" ? "activeSidebar" : ""}`} onClick={() => setActiveTab("picture")}>
//           Upload Picture
//         </button>
//         <button className={`profile-option ${activeTab === "password" ? "activeSidebar" : ""}`} onClick={() => setActiveTab("password")}>
//           Change Password
//         </button>
//       </div>
//       <div  style={{position:"relative", top:"120px"}}>

//       <button className="logoutButton" onClick={handleLogout}>
//         Log Out
//       </button>
//       </div>
//     </div>
//   );
// };

// ProfileSidebar.propTypes = {
//   activeTab: PropTypes.string.isRequired,
//   setActiveTab: PropTypes.func.isRequired,
// };

// export default ProfileSidebar;




import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import noProfile from "../../assets/noProfile.jpg";
import { Avatar, Button, List, ListItem, ListItemText, Divider, Typography, Box } from "@mui/material";

const ProfileSidebar = ({ activeTab, setActiveTab }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout(); // Call the logout function from useAuth
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
        <Avatar
          src={
            user?.profileImage
              ? `http://localhost:5000/uploads/${user.profileImage}`
              : noProfile
          }
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="h6" sx={{ mt: 1 }}>
          {user?.username || "User Name"}
        </Typography>
      </Box>
      <List>
        <ListItem button selected={activeTab === "profile"} onClick={() => setActiveTab("profile")}>
          <ListItemText primary="User Profile" />
        </ListItem>
        <ListItem button selected={activeTab === "update"} onClick={() => setActiveTab("update")}>
          <ListItemText primary="Update Profile" />
        </ListItem>
        <ListItem button selected={activeTab === "picture"} onClick={() => setActiveTab("picture")}>
          <ListItemText primary="Upload Picture" />
        </ListItem>
        <ListItem button selected={activeTab === "password"} onClick={() => setActiveTab("password")}>
          <ListItemText primary="Change Password" />
        </ListItem>
      </List>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Button variant="contained" color="secondary" fullWidth onClick={handleLogout}>
        Log Out
      </Button>
    </Box>
  );
};

ProfileSidebar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default ProfileSidebar;
