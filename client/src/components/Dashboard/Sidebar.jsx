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
import { useAuth } from "../context/AuthContext";
import noProfile from "../../assets/noProfile.jpg";
import template1 from "../../assets/template 1.jpg"
import template2 from "../../assets/template 2.jpg"
import template3 from "../../assets/template 3.jpg"
import template4 from "../../assets/template 4.jpg"
import template5 from "../../assets/template 5.jpg"
import template6 from "../../assets/template 6.jpg"
import template7 from "../../assets/template 7.jpg"
import template8 from "../../assets/template 8.jpg"
import useStyles from "./Sidebar.styles";

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

const Sidebar = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const [activeIndex, setActiveIndex] = useState(null);
  const [showTemplates, setShowTemplates] = useState(false);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    if (menuItems[index].text === "Templates") {
      setShowTemplates(!showTemplates);
    } else {
      setShowTemplates(false);
    }
  };

  return (
    <div className={classes.container}>
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

      {/* Templates section with conditional rendering and animation */}
      <div
        className={`${classes.templatesContainer} ${
          showTemplates ? classes.templatesContainerVisible : ""
        }`}
      >
         <div style={{ padding: "20px" }}>
          <p>Select Template</p>
          <div className={classes.gridContainer}>
            {[template1, template2, template3, template4, template5, template6, template7, template8].map((template, index) => (
              <div key={index} className={classes.templateItem}>
                <img
                  src={template}
                  alt={`Template ${index + 1}`}
                  className={classes.templateImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;




