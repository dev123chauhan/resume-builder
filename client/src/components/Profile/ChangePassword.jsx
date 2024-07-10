import { useState } from 'react';
import axios from 'axios';
import '../../css/changepassword.css';
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (newPassword !== confirmPassword) {
      setLoading(false);
      toast.error('New passwords do not match');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/change-password',
        { currentPassword, newPassword },
        {
          headers: { 'x-auth-token': token },
        }
      );
      setSuccess(response.data.msg);
      toast.success('Password Changed Successfully');
    } catch (error) {
      setError(error.response?.data?.msg || 'Failed to change password');
      toast.error(error.response?.data?.msg || 'Failed to change password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="changePassword">
      <ToastContainer />
      <h2>Change Password</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="currentPassword">Current Password*</label>
          <input
            type="password"
            id="currentPassword"
            placeholder="Enter Your Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
      
          />
        </div>
        <div className="formGroup">
          <label htmlFor="newPassword">Set New Password*</label>
          <input
            type="password"
            id="newPassword"
            placeholder="Enter New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
      
          />
        </div>
        <div className="formGroup">
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter Your Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
       
          />
        </div>
        <button type="submit" className="updateButton" disabled={loading}>
          {loading ? <ClipLoader size={20} color={"#fff"} /> : "Update"}
        </button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default ChangePassword;
