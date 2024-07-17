



import { useState } from 'react';
import axios from 'axios';
import { IconButton, Avatar, Box,  Typography } from '@mui/material';
import { CiEdit } from "react-icons/ci";
import useAuth from "../../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';
const UploadProfilePicture = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAuth();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('profileImage', file);

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/upload-profile-picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': token,
        },
      });

      setUser(res.data.user);
      setTimeout(() => {
        setLoading(false); // Hide spinner
      }, 1000);
      toast.success('Profile Uploaded Successfully');
    } catch (err) {
      console.error('Error Response:', err.response);
      toast.error('Please choose a file');
      setLoading(false);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ mt: 4, mb:12 }}>
          <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="profile-image-upload"
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="profile-image-upload">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            sx={{ position: 'relative', width: 'fit-content' }}
          >
            <Avatar
              alt="Profile Picture"
              src={preview || (user && user.profileImage) ? preview || `http://localhost:5000/uploads/${user.profileImage}` : ""}
              sx={{ width: 200, height: 200 }}
            />
            <CiEdit
              style={{
                position: 'absolute',
                bottom: 32,
                right: 31,
                color: "white",
                backgroundColor: '#027b9a',
                borderRadius: '50%',
                padding: '10px',
                fontSize: "3rem"
              }}
            />
          </IconButton>
        </label>
        <Typography variant="h6" align="center" sx={{ mt: 2 }}>
          Upload a profile picture
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary">
          Make sure the image is below 10MB
        </Typography>
        <button style={{borderRadius:"4px"}} type="submit">
        {loading ? <ClipLoader size={20} color={"#fff"} /> : "Upload"} 
        </button>
      </form>
    </Box>
  );
};

export default UploadProfilePicture;
