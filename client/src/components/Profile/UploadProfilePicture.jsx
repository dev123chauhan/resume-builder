import  { useState } from 'react';
import axios from 'axios';
import useAuth from "../../hooks/useAuth"
const UploadProfilePicture = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const {  setUser } = useAuth(); // Get the user and setUser from context

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
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
      console.log(res.data);
      alert('Profile picture uploaded successfully');
    } catch (err) {
      console.error('Error Response:', err.response);
      alert('Error uploading profile picture');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        {preview && <img src={preview} alt="Preview" style={{ width: '100px', height: '100px' }} />}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadProfilePicture;









