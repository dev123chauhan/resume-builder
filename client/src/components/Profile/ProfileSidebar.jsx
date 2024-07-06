import PropTypes from 'prop-types';
import "../../css/profilesidebar.css";
import noProfile from "../../assets/noProfile.jpg"
const ProfileSidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="sidbar">
      <div className="profile">
        <img src={noProfile} alt="Profile" className="profileImage" />
        <p className="username">@usreProfile</p>
      </div>
      <nav className="nav">
        <button 
          className={`${"navButton"} ${activeTab === 'profile' ? "active" : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          User Profile
        </button>
        <button 
          className={`${"navButton"} ${activeTab === 'update' ? "active" : ''}`}
          onClick={() => setActiveTab('update')}
        >
          Update Profile
        </button>
        <button 
          className={`${"navButton"} ${activeTab === 'picture' ? "active" : ''}`}
          onClick={() => setActiveTab('picture')}
        >
          Upload Picture
        </button>
        <button 
          className={`${"navButton"} ${activeTab === 'password' ? "active" : ''}`}
          onClick={() => setActiveTab('password')}
        >
          Change Password
        </button>
      </nav>
      <button className="logoutButton">Log Out</button>
    </aside>
  );
};

ProfileSidebar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default ProfileSidebar;




