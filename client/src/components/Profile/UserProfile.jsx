// import "../../css/userprofile.css";
// import useAuth from "../../hooks/useAuth";

// const UserProfile = () => {
//   const { user } = useAuth();
//   const formattedDateOfBirth = user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : 'N/A';

//   return (
//     <div className="userProfile">
//       <h2>User Profile</h2>
//       <section className="section">
//         <h3>Personal Information</h3>
//         <div className="infoGrid">
//           <div className="infoItem">
//             <span>Name</span>
//             <span>{user?.username || 'N/A'}</span>
//           </div>
//           <div className="infoItem">
//             <span>Email</span>
//             <span>{user?.email || 'N/A'}</span>
//           </div>
//           <div className="infoItem">
//             <span>Mobile Number</span>
//             <span>{user?.mobileNumber || 'N/A'}</span>
//           </div>
//           <div className="infoItem">
//             <span>Gender</span>
//             <span>{user?.gender || 'N/A'}</span>
//           </div>
//           <div className="infoItem">
//             <span>Date of Birth</span>
//             <span>{formattedDateOfBirth}</span>
//           </div>
//           <div className="infoItem">
//             <span>Address</span>
//             <span>{user?.address || 'N/A'}</span>
//           </div>
//         </div>
//         <div>
//           {/* <img
//             className="avatar"
//             alt={user?.username || 'No Profile'}
//             src={user?.profileImage ? `http://localhost:5000/uploads/${user.profileImage}` : noProfile}
//           /> */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default UserProfile;



import "../../css/userprofile.css";
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  const formattedDateOfBirth = user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : 'N/A';
 
  return (
    <div className="user-profile-section">
     <h2>User Profile</h2>
     <h3>Personal Information</h3>
      
      <div className="form-group-section">
      <label htmlFor="name">Name:</label>
      <div className='nameDiv'>{user?.username}</div>
      </div>
      <div className="form-group-section">
      <label htmlFor="email">Email:</label>
      <div className='nameDiv'>{user?.email}</div>
      </div>
      <div className="form-group-section">
      <label htmlFor="mobileNumber">Mobile Number</label>
      <div className='nameDiv'>{user?.mobileNumber || 'N/A'}</div>
      </div>
      <div className="form-group-section">
      <label htmlFor="dateOfBirth">Date of Birth:</label>
      <div className='nameDiv'>{formattedDateOfBirth || 'N/A'}</div>
      </div>
      <div className="form-group-section">
      <label htmlFor="gender">Gender</label>
      <div className='nameDiv'>{user?.gender || 'N/A'}</div>
      </div>
      <div className="form-group-section">
      <label htmlFor="address">Address</label>
      <div className='nameDiv'>{user?.address || 'N/A'}</div>
      </div>
    </div>
  );
};

export default UserProfile;


