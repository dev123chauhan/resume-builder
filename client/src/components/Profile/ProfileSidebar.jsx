import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import noProfile from "../../assets/noProfile.jpg";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Box,
} from "@mui/material";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
// import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
const ProfileSidebar = ({ activeTab, setActiveTab }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout(); // Call the logout function from useAuth
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Avatar
          src={
            user?.profileImage
              ? `http://localhost:5000/uploads/${user.profileImage}`
              : noProfile
          }
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="h6" sx={{ mt: 1 }}>
          {user?.username || "User Name"}
        </Typography>
      </Box>
      <List>
        <ListItem
          style={{textAlign:"center"}}
          button
          selected={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        >
          {/* <AccountCircleOutlinedIcon/> */}
          <ListItemText
            primary="User Profile"
          />
        </ListItem>
        <ListItem
           style={{textAlign:"center"}}
          button
          selected={activeTab === "update"}
          onClick={() => setActiveTab("update")}
        >
          {/* <EditOutlinedIcon /> */}
          <ListItemText
            primary="Update Profile"
          />
        </ListItem>
        <ListItem
           style={{textAlign:"center"}}
          button
          selected={activeTab === "picture"}
          onClick={() => setActiveTab("picture")}
        >
          {/* <CloudUploadOutlinedIcon /> */}
          <ListItemText
            primary="Upload Picture"
          />
        </ListItem>
        <ListItem
           style={{textAlign:"center"}}
          button
          selected={activeTab === "password"}
          onClick={() => setActiveTab("password")}
        >
          {/* <ChangeCircleOutlinedIcon /> */}
          <ListItemText
            primary="Change Password"
          />
        </ListItem>
      </List>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Button variant="contained" fullWidth onClick={handleLogout}>
        Log Out
      </Button>
    </Box>
  );
};

ProfileSidebar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default ProfileSidebar;


// import PropTypes from "prop-types";
// import useAuth from "../../hooks/useAuth";
// import noProfile from "../../assets/noProfile.jpg";
// import {
//   Avatar,
//   Button,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   Typography,
//   Box,
//   useMediaQuery,
//   useTheme,
//   Drawer,
//   IconButton,
// } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
// import { useState } from 'react';

// const ProfileSidebar = ({ activeTab, setActiveTab }) => {
//   const { user, logout } = useAuth();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//   };

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawerContent = (
//     <Box sx={{ p: 2 }}>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           mb: 2,
//         }}
//       >
//         <Avatar
//           src={
//             user?.profileImage
//               ? `http://localhost:5000/uploads/${user.profileImage}`
//               : noProfile
//           }
//           sx={{ width: 100, height: 100 }}
//         />
//         <Typography variant="h6" sx={{ mt: 1 }}>
//           {user?.username || "User Name"}
//         </Typography>
//       </Box>
//       <List>
//         {["profile", "update", "picture", "password"].map((tab) => (
//           <ListItem
//             key={tab}
//             button
//             selected={activeTab === tab}
//             onClick={() => {
//               setActiveTab(tab);
//               if (isMobile) setMobileOpen(false);
//             }}
//             sx={{ textAlign: "center" }}
//           >
//             <ListItemText
//               primary={tab.charAt(0).toUpperCase() + tab.slice(1)}
//             />
//           </ListItem>
//         ))}
//       </List>
//       <Divider sx={{ mt: 2, mb: 2 }} />
//       <Button variant="contained" fullWidth onClick={handleLogout}>
//         Log Out
//       </Button>
//     </Box>
//   );

//   return (
//     <>
//       {isMobile ? (
//         <>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { md: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Drawer
//             variant="temporary"
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//             sx={{
//               display: { xs: 'block', md: 'none' },
//               '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
//             }}
//           >
//             {drawerContent}
//           </Drawer>
//         </>
//       ) : (
//         <Box
//           sx={{
//             width: 240,
//             flexShrink: 0,
//             '& .MuiDrawer-paper': {
//               width: 240,
//               boxSizing: 'border-box',
//             },
//           }}
//         >
//           <Drawer
//             variant="permanent"
//             sx={{
//               display: { xs: 'none', md: 'block' },
//               '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
//             }}
//             open
//           >
//             {drawerContent}
//           </Drawer>
//         </Box>
//       )}
//     </>
//   );
// };

// ProfileSidebar.propTypes = {
//   activeTab: PropTypes.string.isRequired,
//   setActiveTab: PropTypes.func.isRequired,
// };

// export default ProfileSidebar;