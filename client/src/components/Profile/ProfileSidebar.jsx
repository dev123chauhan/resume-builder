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


