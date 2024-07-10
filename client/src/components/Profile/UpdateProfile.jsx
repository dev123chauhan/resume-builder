// import "../../css/updateprofile.css";

// const UpdateProfile = () => {
//   return (
//     <div className="updateProfile">
//       <h2>Update Profile</h2>
//       <form className="form">
//         <div className="formGroup">
//           <label htmlFor="name">Name*</label>
//           <input type="text" id="name" placeholder="Enter Name" />
//         </div>
//         <div className="formGroup">
//           <label htmlFor="email">E-mail ID*</label>
//           <input type="email" id="email" placeholder="Enter Email ID" />
//         </div>
//         {/* Add more form fields */}
//         <button type="submit" className="saveButton">Save</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateProfile;

import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "../../css/updateprofile.css";
const UpdateProfile = () => {
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    mobileNumber: user?.mobileNumber || "",
    gender: user?.gender || "Male",
    dateOfBirth: user?.dateOfBirth
      ? new Date(user.dateOfBirth).toISOString().substr(0, 10)
      : "",
    address: user?.address || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/update-profile",
        formData,
        {
          headers: { "x-auth-token": token },
        }
      );
      setUser(res.data.user);
      alert("Profile updated successfully");
    } catch (err) {
      console.error(
        "Error updating profile:",
        err.response?.data || err.message
      );
      alert("Failed to update profile");
    }
  };

  return (
    <div className="updateProfile">
      <h2>User Profile</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select type="radio" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
