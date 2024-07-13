// import { useState } from "react";
// import "../../css/profiledashboard.css";
// import ProfileSidebar from "./ProfileSidebar";
// import UserProfile from "./UserProfile";
// import UpdateProfile from "./UpdateProfile";
// import ChangePassword from "./ChangePassword";
// import UploadProfilePicture from "./UploadProfilePicture";
// export default function ProfileDashboard() {
//   const [activeTab, setActiveTab] = useState("profile");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "profile":
//         return <UserProfile />;
//       case "update":
//         return <UpdateProfile />;
//       case "password":
//         return <ChangePassword />;
//       case "picture":
//         return <UploadProfilePicture />;
//       default:
//         return <UserProfile />;
//     }
//   };
//   return (
//     <>
//       <div className="containerProfileSection">
//         <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
//         <main className="contentProfile">{renderContent()}</main>
//       </div>
//     </>
//   );
// }



// import { useState } from "react";
// import "../../css/profiledashboard.css";
// import ProfileSidebar from "./ProfileSidebar";
// import UserProfile from "./UserProfile";
// import UpdateProfile from "./UpdateProfile";
// import ChangePassword from "./ChangePassword";
// import UploadProfilePicture from "./UploadProfilePicture";

// const ProfileDashboard = () => {
//   const [activeTab, setActiveTab] = useState("profile");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "profile":
//         return <UserProfile />;
//       case "update":
//         return <UpdateProfile />;
//       case "password":
//         return <ChangePassword />;
//       case "picture":
//         return <UploadProfilePicture />;
//       default:
//         return <UserProfile />;
//     }
//   };

//   return (
//     <div className="containerProfileSection">
//       <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
//       <main className="contentProfile">{renderContent()}</main>
//     </div>
//   );
// };

// export default ProfileDashboard;



import { useState } from "react";
import { Container,  Grid, Paper } from "@mui/material";
import ProfileSidebar from "./ProfileSidebar";
import UserProfile from "./UserProfile";
import UpdateProfile from "./UpdateProfile";
import ChangePassword from "./ChangePassword";
import UploadProfilePicture from "./UploadProfilePicture";

const ProfileDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <UserProfile />;
      case "update":
        return <UpdateProfile />;
      case "password":
        return <ChangePassword />;
      case "picture":
        return <UploadProfilePicture />;
      default:
        return <UserProfile />;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <Paper>
            <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Paper sx={{ p: 2 }}>
            {renderContent()}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileDashboard;
