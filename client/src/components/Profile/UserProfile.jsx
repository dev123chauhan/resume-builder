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



// import "../../css/userprofile.css";
// import useAuth from "../../hooks/useAuth";

// const UserProfile = () => {
//   const { user } = useAuth();
//   const formattedDateOfBirth = user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : "N/A";

//   return (
//     <div className="user-profile-section">
//       <h2>User Profile</h2>
//       <h3>Personal Information</h3>
//       <div className="form-group-section">
//         <label htmlFor="name">Name:</label>
//         <div className="nameDiv">{user?.username}</div>
//       </div>
//       <div className="form-group-section">
//         <label htmlFor="email">Email:</label>
//         <div className="nameDiv">{user?.email}</div>
//       </div>
//       <div className="form-group-section">
//         <label htmlFor="mobileNumber">Mobile Number:</label>
//         <div className="nameDiv">{user?.mobileNumber || "N/A"}</div>
//       </div>
//       <div className="form-group-section">
//         <label htmlFor="dateOfBirth">Date of Birth:</label>
//         <div className="nameDiv">{formattedDateOfBirth || "N/A"}</div>
//       </div>
//       <div className="form-group-section">
//         <label htmlFor="gender">Gender:</label>
//         <div className="nameDiv">{user?.gender || "N/A"}</div>
//       </div>
//       <div className="form-group-section">
//         <label htmlFor="address">Address:</label>
//         <div className="nameDiv">{user?.address || "N/A"}</div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;



import useAuth from "../../hooks/useAuth";
import { Box, Typography, Grid, Paper } from "@mui/material";

const UserProfile = () => { 
  const { user } = useAuth();
  const formattedDateOfBirth = user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : "N/A";

  return (
    <Box sx={{ p: 2, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        User Profile
      </Typography>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <Typography variant="subtitle1">Name:</Typography>
            <Typography variant="body1">{user?.username || "N/A"}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <Typography variant="subtitle1">Email:</Typography>
            <Typography variant="body1">{user?.email || "N/A"}</Typography>
          </Paper>
        </Grid>
        <Grid item xxl={12} xl={12} lg={12} md={12} xs={12} sm={6}>
          <Paper sx={{ p: 2, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <Typography variant="subtitle1">Mobile Number:</Typography>
            <Typography variant="body1">{user?.mobileNumber || "N/A"}</Typography>
          </Paper>
        </Grid>
        <Grid item xxl={12} xl={12} lg={12} md={12} xs={12} sm={6}>
          <Paper sx={{ p: 2, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <Typography variant="subtitle1">Date of Birth:</Typography>
            <Typography variant="body1">{formattedDateOfBirth || "N/A"}</Typography>
          </Paper>
        </Grid>
        <Grid item xxl={12} xl={12} lg={12} md={12} xs={12} sm={6}>
          <Paper sx={{ p: 2, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <Typography variant="subtitle1">Gender:</Typography>
            <Typography variant="body1">{user?.gender || "N/A"}</Typography>
          </Paper>
        </Grid>
        <Grid item xxl={12} xl={12} lg={12} md={12} xs={12} sm={6}>
          <Paper sx={{ p: 2, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <Typography variant="subtitle1">Address:</Typography>
            <Typography variant="body1">{user?.address || "N/A"}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;
