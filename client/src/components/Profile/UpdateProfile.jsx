// import { useState } from "react";
// import axios from "axios";
// import useAuth from "../../hooks/useAuth";
// import "../../css/updateprofile.css";
// const UpdateProfile = () => {
//   const { user, setUser } = useAuth();
//   const [formData, setFormData] = useState({
//     username: user?.username || "",
//     email: user?.email || "",
//     mobileNumber: user?.mobileNumber || "",
//     gender: user?.gender || "Male",
//     dateOfBirth: user?.dateOfBirth
//       ? new Date(user.dateOfBirth).toISOString().substr(0, 10)
//       : "",
//     address: user?.address || "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/update-profile",
//         formData,
//         {
//           headers: { "x-auth-token": token },
//         }
//       );
//       setUser(res.data.user);
//       alert("Profile updated successfully");
//     } catch (err) {
//       console.error(
//         "Error updating profile:",
//         err.response?.data || err.message
//       );
//       alert("Failed to update profile");
//     }
//   };

//   return (
//     <div className="updateProfile">
//       <h2>User Profile</h2>
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Mobile Number</label>
//           <input
//             type="tel"
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <label>Gender: </label>
//             <label style={{ marginRight: "10px" }}>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Male"
//                 checked={formData.gender === "Male"}
//                 onChange={handleChange}
//               />
//               Male
//             </label>
//             <label style={{ marginRight: "10px" }}>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Female"
//                 checked={formData.gender === "Female"}
//                 onChange={handleChange}
//               />
//               Female
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Other"
//                 checked={formData.gender === "Other"}
//                 onChange={handleChange}
//               />
//               Other
//             </label>
//           </div>
//         </div>

//         <div className="form-group">
//           <label>Date of Birth</label>
//           <input
//             type="date"
//             name="dateOfBirth"
//             value={formData.dateOfBirth}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </div>
//         <button className="saveButton" type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateProfile;

// import { useState } from "react";
// import axios from "axios";
// import useAuth from "../../hooks/useAuth";
// import {  TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Typography, Box } from "@mui/material";

// const UpdateProfile = () => {
//   const { user, setUser } = useAuth();
//   const [formData, setFormData] = useState({
//     username: user?.username || "",
//     email: user?.email || "",
//     mobileNumber: user?.mobileNumber || "",
//     gender: user?.gender || "Male",
//     dateOfBirth: user?.dateOfBirth ? new Date(user.dateOfBirth).toISOString().substr(0, 10) : "",
//     address: user?.address || "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/update-profile",
//         formData,
//         {
//           headers: { "x-auth-token": token },
//         }
//       );
//       setUser(res.data.user);
//       alert("Profile updated successfully");
//     } catch (err) {
//       console.error("Error updating profile:", err.response?.data || err.message);
//       alert("Failed to update profile");
//     }
//   };

//   return (
//     // <Container maxWidth="sm">
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h4" gutterBottom>
//           Update Profile
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Mobile Number"
//             name="mobileNumber"
//             type="tel"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//           />
//           <FormControl component="fieldset" margin="normal">
//             <FormLabel component="legend">Gender</FormLabel>
//             <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
//               <FormControlLabel value="Male" control={<Radio />} label="Male" />
//               <FormControlLabel value="Female" control={<Radio />} label="Female" />
//               <FormControlLabel value="Other" control={<Radio />} label="Other" />
//             </RadioGroup>
//           </FormControl>
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Date of Birth"
//             name="dateOfBirth"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             value={formData.dateOfBirth}
//             onChange={handleChange}
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Address"
//             name="address"
//             multiline
//             rows={4}
//             value={formData.address}
//             onChange={handleChange}
//           />
//           <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
//             Save Changes
//           </Button>
//         </form>
//       </Box>
//     // </Container>
//   );
// };

// export default UpdateProfile;

import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import {
  TextField,
  // Radio,
  // RadioGroup,
  // FormControlLabel,
  FormControl,
  // FormLabel,
  // Button,
  Typography,
  Box,
  Grid,
  // Paper,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

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
    // <Container maxWidth="sm">
    <Box>
      <Typography variant="h4" gutterBottom>
        Update Profile
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            {/* <Paper sx={{ p: 2 }}> */}
              <TextField
                fullWidth
                margin="normal"
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            {/* </Paper> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <Paper sx={{ p: 2 }}> */}
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            {/* </Paper> */}
          </Grid>
          {/* <TextField
            fullWidth
            margin="normal"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          /> */}

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Mobile Number"
              name="mobileNumber"
              type="tel"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl> */}

            <FormControl component="fieldset" margin="normal" fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender-select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                label="Gender"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <TextField
            fullWidth
            margin="normal"
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Address"
            name="address"
            multiline
            rows={4}
            value={formData.address}
            onChange={handleChange}
          />
          <button
            style={{width:"100%"}}
            type="submit"
          >
            Save Changes
          </button>
        </Grid>
      </form>
    </Box>
    // </Container>
  );
};

export default UpdateProfile;
