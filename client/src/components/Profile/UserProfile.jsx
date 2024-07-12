// import "../../css/userprofile.css";
// import useAuth from "../../hooks/useAuth";

// const UserProfile = () => { 
//   const { user } = useAuth();
//   const formattedDateOfBirth = user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : 'N/A';
 
//   return (
//     <div className="user-profile-section">
//      <h2>User Profile</h2>
//      <h3>Personal Information</h3>
      
//       <div className="form-group-section">
//       <label htmlFor="name">Name:</label>
//       <div className='nameDiv'>{user?.username}</div>
//       </div>
//       <div className="form-group-section">
//       <label htmlFor="email">Email:</label>
//       <div className='nameDiv'>{user?.email}</div>
//       </div>
//       <div className="form-group-section">
//       <label htmlFor="mobileNumber">Mobile Number</label>
//       <div className='nameDiv'>{user?.mobileNumber || 'N/A'}</div>
//       </div>
//       <div className="form-group-section">
//       <label htmlFor="dateOfBirth">Date of Birth:</label>
//       <div className='nameDiv'>{formattedDateOfBirth || 'N/A'}</div>
//       </div>
//       <div className="form-group-section">
//       <label htmlFor="gender">Gender</label>
//       <div className='nameDiv'>{user?.gender || 'N/A'}</div>
//       </div>
//       <div className="form-group-section">
//       <label htmlFor="address">Address</label>
//       <div className='nameDiv'>{user?.address || 'N/A'}</div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;



import "../../css/userprofile.css";
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  const formattedDateOfBirth = user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : "N/A";

  return (
    <div className="user-profile-section">
      <h2>User Profile</h2>
      <h3>Personal Information</h3>
      <div className="form-group-section">
        <label htmlFor="name">Name:</label>
        <div className="nameDiv">{user?.username}</div>
      </div>
      <div className="form-group-section">
        <label htmlFor="email">Email:</label>
        <div className="nameDiv">{user?.email}</div>
      </div>
      <div className="form-group-section">
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <div className="nameDiv">{user?.mobileNumber || "N/A"}</div>
      </div>
      <div className="form-group-section">
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <div className="nameDiv">{formattedDateOfBirth || "N/A"}</div>
      </div>
      <div className="form-group-section">
        <label htmlFor="gender">Gender:</label>
        <div className="nameDiv">{user?.gender || "N/A"}</div>
      </div>
      <div className="form-group-section">
        <label htmlFor="address">Address:</label>
        <div className="nameDiv">{user?.address || "N/A"}</div>
      </div>
    </div>
  );
};

export default UserProfile;
