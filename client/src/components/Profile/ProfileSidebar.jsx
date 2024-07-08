import PropTypes from "prop-types";
import "../../css/profilesidebar.css";
import noProfile from "../../assets/noProfile.jpg";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
const ProfileSidebar = ({ activeTab, setActiveTab }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout(); // Call the logout function from useAuth
  };
  return (
    <aside className="sidbar">
      <div className="profile">
        <img
          className="avatar"
          src={
            user?.profileImage
              ? `http://localhost:5000/uploads/${user.profileImage}`
              : noProfile
          }
          alt=""
        />
        <p className="username">{user?.username}</p>
      </div>
      <nav className="nav">
        <button
          className={`${"navButton"} ${
            activeTab === "profile" ? "active" : ""
          }`}
          onClick={() => setActiveTab("profile")}
        >
          User Profile
        </button>
        <button
          className={`${"navButton"} ${activeTab === "update" ? "active" : ""}`}
          onClick={() => setActiveTab("update")}
        >
          Update Profile
        </button>
        <button
          className={`${"navButton"} ${
            activeTab === "picture" ? "active" : ""
          }`}
          onClick={() => setActiveTab("picture")}
        >
          Upload Picture
        </button>
        <button
          className={`${"navButton"} ${
            activeTab === "password" ? "active" : ""
          }`}
          onClick={() => setActiveTab("password")}
        >
          Change Password
        </button>
      </nav>
      <Link to="/" onClick={handleLogout}>
        <button className="logoutButton">Log Out</button>
      </Link>
    </aside>
  );
};

ProfileSidebar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default ProfileSidebar;
