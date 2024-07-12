// import  { useState } from 'react';
// import axios from 'axios';
// import { IconButton, Avatar, Box } from '@mui/material';
// import { Edit } from '@mui/icons-material';
// import useAuth from "../../hooks/useAuth";

// const UploadProfilePicture = () => {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const { user, setUser } = useAuth(); // Assuming useAuth hook provides user state

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result); // Read the file and set preview
//       };
//       reader.readAsDataURL(selectedFile); // Read file as data URL
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('profileImage', file);

//     try {
//       const token = localStorage.getItem('token'); // Adjust based on how you store the token
//       const res = await axios.post('http://localhost:5000/api/upload-profile-picture', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'x-auth-token': token, // Pass the token in headers
//         },
//       });

//       // Update the user context with the new profile image
//       setUser(res.data.user);

//       alert('Profile picture uploaded successfully');
//     } catch (err) {
//       console.error('Error Response:', err.response);
//       alert('Error uploading profile picture');
//     }
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center">
//       <form onSubmit={handleSubmit}>
//         <input
//           accept="image/*"
//           style={{ display: 'none' }}
//           id="profile-image-upload"
//           type="file"
//           onChange={handleFileChange}
//         />
//         <label htmlFor="profile-image-upload">
//           <IconButton color="primary" aria-label="upload picture" component="span">
//             <Avatar
//               alt="Profile Picture"
//               src={preview || (user && user.profileImage) ? preview || `http://localhost:5000/uploads/${user.profileImage}` : ""}
//               sx={{ width: 200, height: 200 }}
//             >
//               <Edit />
//             </Avatar>
//           </IconButton>
//         </label>
//         <h4 style={{textAlign:"center"}}>Upload a profile picture</h4>
//         <h5 style={{textAlign:"center",fontWeight:"lighter"}}>Make sure the image is below 10mb</h5>
//         <button type="submit" style={{ marginTop: '10px' }}>
//           Upload
//         </button>
//       </form>
//     </Box>
//   );
// };

// export default UploadProfilePicture;






import  { useState } from 'react';
import axios from 'axios';
import { IconButton, Avatar, Box } from '@mui/material';
import { CiEdit } from "react-icons/ci";
import useAuth from "../../hooks/useAuth";
import "../../css/uploadprofile.css"

const UploadProfilePicture = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const { user, setUser } = useAuth(); // Assuming useAuth hook provides user state
 
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Read the file and set preview
      };
      reader.readAsDataURL(selectedFile); // Read file as data URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('profileImage', file);

    try {
      const token = localStorage.getItem('token'); // Adjust based on how you store the token
      const res = await axios.post('http://localhost:5000/api/upload-profile-picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': token, // Pass the token in headers
        },
      });

      // Update the user context with the new profile image
      setUser(res.data.user);

      alert('Profile picture uploaded successfully');
    } catch (err) {
      console.error('Error Response:', err.response);
      alert('Error uploading profile picture');
    }
  };

  return (
    <Box  className='uploadPicture' display="flex" flexDirection="column" alignItems="center">
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
            style={{ position: 'relative', width: 'fit-content' }} // Ensure IconButton can be positioned relative
          >
            <Avatar
              alt="Profile Picture"
              src={preview || (user && user.profileImage) ? preview || `http://localhost:5000/uploads/${user.profileImage}` : ""}
              sx={{ width: 200, height: 200 }}
            />
           <CiEdit 
              style={{
                position: 'absolute',
                bottom: '33',
                right: '34',
                color:"white",
                backgroundColor: '#027b9a',
                borderRadius: '50%',
                padding: '10px',
                fontSize:"3rem"
              }}
            />
          </IconButton>
        </label>
        <h4 style={{ textAlign: "center" }}>Upload a profile picture</h4>
        <h5 style={{ textAlign: "center", fontWeight: "lighter" }}>Make sure the image is below 10mb</h5>
        <button type="submit" style={{ marginTop: '10px' }}>
          Upload
        </button>
      </form>
    </Box>
  );
};

export default UploadProfilePicture;


