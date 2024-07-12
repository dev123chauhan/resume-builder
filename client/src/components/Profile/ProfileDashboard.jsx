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



import { useState } from "react";
import "../../css/profiledashboard.css";
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
    <div className="containerProfileSection">
      <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="contentProfile">{renderContent()}</main>
    </div>
  );
};

export default ProfileDashboard;
