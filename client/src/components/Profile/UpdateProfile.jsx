import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
  // InputLabel,
  // Select,
  // MenuItem,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio,
} from "@mui/material";
import { ClipLoader } from "react-spinners";

const UpdateProfile = () => {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
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
      setTimeout(() => {
        setLoading(false); // Hide spinner
      }, 1000);
      toast.success('User profile updated successfully');
    } catch (err) {
      console.error(
        "Error updating profile:",
        err.response?.data || err.message
      );
      toast.error('Please update a field');
      setLoading(false);
    }
    // setLoading(false);
  };

  return (
    // <Container maxWidth="sm">
    <Box>
          <ToastContainer />
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
            <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
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
            style={{width:"100%", borderRadius:"4px"}}
            type="submit"
          >
        {loading ? <ClipLoader size={20} color={"#fff"} /> : " Save Changes"}       
          </button>
        </Grid>
      </form>
    </Box>
    // </Container>
  );
};

export default UpdateProfile;
