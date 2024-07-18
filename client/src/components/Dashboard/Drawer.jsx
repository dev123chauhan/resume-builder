import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import DescriptionIcon from "@mui/icons-material/Description";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import TextsmsIcon from "@mui/icons-material/Textsms";
import CheckIcon from "@mui/icons-material/Check";
import AssistantIcon from "@mui/icons-material/Assistant";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import EditableResume from "./EditResume";
import AddSection from "./AddSection";
import SelectTemplates from "./SelectTemplates";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const menuItems = [
  { text: "Add section", icon: <AddIcon /> },
  { text: "Rearrange", icon: <SwapVertIcon /> },
  { text: "Templates", icon: <DescriptionIcon /> },
  { text: "Design & Font", icon: <FontDownloadIcon /> },
  { text: "Improve text", icon: <TextsmsIcon /> },
  { text: "Check", icon: <CheckIcon /> },
  { text: "AI Assistant", icon: <AssistantIcon /> },
  { text: "Download", icon: <DownloadIcon /> },
  { text: "Share", icon: <ShareIcon /> },
];

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState();
  const [sections, setSections] = React.useState([]);
  const [isTemplateDrawerOpen, setIsTemplateDrawerOpen] = React.useState(false);
  // const [selectedTemplate, setSelectedTemplate] = React.useState(null);
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    if (menuItems[index].text === "Add section") {
      setIsPopupOpen(true);
    } else if (menuItems[index].text === "Templates") {
      setIsTemplateDrawerOpen(true);
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAddSection = (newSection) => {
    setSections([...sections, newSection]);
    setIsPopupOpen(false); // Close the popup after adding the section
  };

  // const handleSelectTemplate = (template) => {
  //   // Handle template selection logic here
  //   console.log("Selected template:", template);
  //   setSelectedTemplate(template);
  //   // Optionally, close the drawer after selecting a template
  //   // setIsTemplateDrawerOpen(false);
  // };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map(({ text, icon }, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    selectedIndex === index ? "#027b9a !important" : "inherit",
                  color: selectedIndex === index ? "white" : "inherit",
                  "&:hover": {
                    bgcolor: selectedIndex === index ? "#027b9a" : "#f0f0f0",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: selectedIndex === index ? "white" : "#027b9a",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <EditableResume />
      </Box>
      {isPopupOpen && (
        <AddSection
          onClose={() => setIsPopupOpen(false)}
          onAddSection={handleAddSection}
        /> // Pass onAddSection prop
      )}

      <SelectTemplates
        open={isTemplateDrawerOpen}
        onClose={() => setIsTemplateDrawerOpen(false)}
        onSelectTemplate={(template) => {
          // Handle template selection here
          console.log("Selected template:", template);
          setIsTemplateDrawerOpen(false);
        }}
      />
      {/* <SelectTemplates
        open={isTemplateDrawerOpen}
        onClose={() => setIsTemplateDrawerOpen(false)}
        onSelectTemplate={handleSelectTemplate}
        activeTemplateId={selectedTemplate ? selectedTemplate.id : null}
      /> */}
    </Box>
  );
}
