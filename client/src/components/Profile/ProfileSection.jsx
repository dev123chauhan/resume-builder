// import  { useState } from 'react';
import '../../css/profilesection.css';
import noProfile from "../../assets/noProfile.jpg"
function ProfileSection() {
  // const [userData, setUserData] = useState({
  //   name: '',
  //   email: '',
  //   mobileNumber: '',
  //   dateOfBirth: '',
  //   gender: '',
  //   city: '',
  //   state: '',
  //   address: '',
  //   company: '',
  //   brand: '',
  //   userPreference: '',
  //   startupStage: '',
  //   problemStatement: '',
  // });

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  return (
    <div className="containerProfileSection">
      <div className="profile-section">
        <div className="profile-header">
          <h1>Profile</h1>
          <img src={noProfile} alt="Profile Picture" className="profile-pic" />
          <p>@usreProfile</p>
        </div>
        <div className="profile-options">
          <button className="profile-option">User Profile</button>
          <button className="profile-option">Notification</button>
          <button className="profile-option">Update Profile</button>
          <button className="profile-option">Upload Picture</button>
          <button className="profile-option">Change Password</button>
          <button className="log-out-button">Log Out</button>
        </div>
      </div>
      <div className="user-profile-section">
        <h2>User Profile</h2>
        <h3>Personal Information</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <div className='nameDiv'>name</div>
          {/* <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
          /> */}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          {/* <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          /> */}
          <div className='nameDiv'>email</div>
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          {/* <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={userData.mobileNumber}
            onChange={handleChange}
          /> */}
          <div className='nameDiv'>+917067529251</div>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          {/* <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={userData.dateOfBirth}
            onChange={handleChange}
          /> */}
          <div className='nameDiv'>07/09/24</div>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          {/* <select
            id="gender"
            name="gender"
            value={userData.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select> */}
          <div className='nameDiv'>Male</div>
        </div>
        <h3>Address Details</h3>
        {/* <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={userData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={userData.state}
            onChange={handleChange}
          />
        </div> */}
        {/* <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={userData.address}
            onChange={handleChange}
          />
        </div> */}
        {/* <h3>Company Details</h3>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={userData.company}
            onChange={handleChange}
          />
        </div> */}
        {/* <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={userData.brand}
            onChange={handleChange}
          />
        </div> */}
        {/* <h3>User Preference Select</h3>
        <div className="form-group">
          <label htmlFor="userPreference">User Preference:</label>
          <input
            type="text"
            id="userPreference"
            name="userPreference"
            value={userData.userPreference}
            onChange={handleChange}
          />
        </div> */}
        {/* <div className="form-group">
          <label htmlFor="startupStage">Startup Stage:</label>
          <input
            type="text"
            id="startupStage"
            name="startupStage"
            value={userData.startupStage}
            onChange={handleChange}
          />
        </div> */}
        {/* <div className="form-group">
          <label htmlFor="problemStatement">Problem Statement:</label>
          <input
            type="text"
            id="problemStatement"
            name="problemStatement"
            value={userData.problemStatement}
            onChange={handleChange}
          />
        </div> */}
        <div className='nameDiv'>07/09/24</div>
      </div>
    </div>
  );
}

export default ProfileSection;