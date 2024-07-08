// import "../../css/userprofile.css";
// import useAuth from "../../hooks/useAuth";
// const UserProfile = () => {
//   const { user } = useAuth();
//   return (
//     <div className="userProfile">
//       <h2>User Profile</h2>
//       <section className="section">
//         <h3>Personal Information</h3>
//         <div className="infoGrid">
//           <div className="infoItem">
//             <span>Name</span>
//             <span>{user?.username}</span>
//           </div>
//           <div className="infoItem">
//             <span>Email</span>
//             <span>{user?.email}</span>
//           </div>
//           <div className="infoItem">
//             <span>Mobile Number</span>
//             <span>+91 1234567895</span>
//           </div>
//           <div className="infoItem">
//             <span>Gender</span>
//             <span>Male</span>
//           </div>
//           <div className="infoItem">
//             <span>Date of Birth</span>
//             <span>15 August 2001</span>
//           </div>
//         </div>
//       </section>
//       {/* Add more sections for Address Details, Company Details, and User Preference Select */}
//     </div>
//   );
// };

// export default UserProfile;



import "../../css/userprofile.css";
import useAuth from "../../hooks/useAuth";
// import noProfile from '../../assets/noProfile.png'; // Adjust the path accordingly

const UserProfile = () => {
  const { user } = useAuth();
  const formattedDateOfBirth = user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : 'N/A';

  return (
    <div className="userProfile">
      <h2>User Profile</h2>
      <section className="section">
        <h3>Personal Information</h3>
        <div className="infoGrid">
          <div className="infoItem">
            <span>Name</span>
            <span>{user?.username || 'N/A'}</span>
          </div>
          <div className="infoItem">
            <span>Email</span>
            <span>{user?.email || 'N/A'}</span>
          </div>
          <div className="infoItem">
            <span>Mobile Number</span>
            <span>{user?.mobileNumber || 'N/A'}</span>
          </div>
          <div className="infoItem">
            <span>Gender</span>
            <span>{user?.gender || 'N/A'}</span>
          </div>
          <div className="infoItem">
            <span>Date of Birth</span>
            <span>{formattedDateOfBirth}</span>
          </div>
          <div className="infoItem">
            <span>Address</span>
            <span>{user?.address || 'N/A'}</span>
          </div>
        </div>
        <div>
          {/* <img
            className="avatar"
            alt={user?.username || 'No Profile'}
            src={user?.profileImage ? `http://localhost:5000/uploads/${user.profileImage}` : noProfile}
          /> */}
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
