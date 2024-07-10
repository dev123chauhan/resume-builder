import PropTypes from "prop-types";
import "../../css/profilesidebar.css";
import noProfile from "../../assets/noProfile.jpg";
import useAuth from "../../hooks/useAuth";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCloudUploadOutline } from "react-icons/io5";
import { TbArrowsExchange } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
const ProfileSidebar = ({ activeTab, setActiveTab }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout(); // Call the logout function from useAuth
  };
  return ( 
      <div className="profile-section">
      <div className="profile-header">
      <img
         className="profile-pic"
          src={
            user?.profileImage
              ? `http://localhost:5000/uploads/${user.profileImage}`
              : noProfile
          }
          alt=""
        />
        <p className="username">{user?.username}</p>
      </div>
      <div className="profile-options">
        <button
          className={`${"profile-option"} ${
            activeTab === "profile" ? "activeSidebar" : ""
          }`}
          onClick={() => setActiveTab("profile")}
        >
        <MdOutlineAccountCircle className="profileIcon"/>  User Profile
        </button>
        <button
          className={`${"profile-option"} ${activeTab === "update" ? "activeSidebar" : ""}`}
          onClick={() => setActiveTab("update")}
        >
        <CiEdit className="profileIcon"/>  Update Profile
        </button>
        <button
          className={`${"profile-option"} ${
            activeTab === "picture" ? "activeSidebar" : ""
          }`}
          onClick={() => setActiveTab("picture")}
        >
       <IoCloudUploadOutline className="profileIcon"/>   Upload Picture
        </button>
        <button
          className={`${"profile-option"} ${
            activeTab === "password" ? "activeSidebar" : ""
          }`}
          onClick={() => setActiveTab("password")}
        >
       <TbArrowsExchange className="profileIcon"/>   Change Password
        </button>
        <Link to="/"  onClick={handleLogout}>
        <button className="logoutButton"> <CiLogout className="profileIcon"/>Log Out</button>
      </Link>
      </div>
   
      </div>

  );
};

ProfileSidebar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default ProfileSidebar;



