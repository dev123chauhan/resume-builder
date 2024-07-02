import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import TemplateIcon from "@mui/icons-material/Description";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import TextsmsIcon from "@mui/icons-material/Textsms";
import CheckIcon from "@mui/icons-material/Check";
import AssistantIcon from "@mui/icons-material/Assistant";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import HistoryIcon from "@mui/icons-material/History";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import { makeStyles } from "@mui/styles";
import { useAuth } from "../context/AuthContext";
import noProfile from "../../assets/noProfile.jpg";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: "250px",
    backgroundColor: "#f5f5f5",
    height: "100vh",
    paddingTop: theme.spacing(2),
  },
  iconColor: {
    color: "#027b9a !important",
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#027b9a !important",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white !important",
      },
    },
  },
  activeItem: {
    backgroundColor: "#027b9a !important",
    color: "white !important",
    "& .MuiListItemIcon-root": {
      color: "white !important",
    },
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
  },
  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    marginBottom: theme.spacing(1),
  },
  username: {
    fontWeight: "bold",
    marginBottom: theme.spacing(0.5),
  },
  email: {
    fontSize: "0.875rem",
    color: "gray",
    marginBottom: theme.spacing(1),
  },
}));

const menuItems = [
  { text: "Add section", icon: <AddIcon /> },
  { text: "Rearrange", icon: <SwapVertIcon /> },
  { text: "Templates", icon: <TemplateIcon /> },
  { text: "Design & Font", icon: <FontDownloadIcon /> },
  { text: "Improve text", icon: <TextsmsIcon /> },
  { text: "Check", icon: <CheckIcon /> },
  { text: "AI Assistant", icon: <AssistantIcon /> },
  { text: "Download", icon: <DownloadIcon /> },
  { text: "Share", icon: <ShareIcon /> },
  { text: "History", icon: <HistoryIcon /> },
  { text: "Branding", icon: <BrandingWatermarkIcon /> },
];

export default function Sidebar() {
  const classes = useStyles();
  const { user } = useAuth();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={classes.sidebar}>
      <div className={classes.userInfo}>
        <img
          className={classes.avatar}
          alt={user?.name}
          src={user?.profileImage || noProfile}
        />
        <div className={classes.username}>{user?.username}</div>
        <div className={classes.email}>{user?.email}</div>
      </div>
      <hr />
      <aside>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              className={`${classes.listItem} ${
                activeIndex === index ? classes.activeItem : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <ListItemIcon className={classes.iconColor}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </aside>
    </div>
  );
}
