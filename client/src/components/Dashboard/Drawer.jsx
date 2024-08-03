import { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
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
// import CheckIcon from "@mui/icons-material/Check";
import DownloadIcon from "@mui/icons-material/Download";
// import ShareIcon from "@mui/icons-material/Share";
import EditableResume from "./EditResume";
import AddSection from "./AddSection";
import DesignPanel from "./DesignPanel";
import ImprovedText from "./ImprovedText";
import Rearrange from "./Rearrange"; 
import PDFResume from "./Resume";
import noProfile from "../../assets/noProfile.jpg";
import "react-toastify/dist/ReactToastify.css";
import { usePDF } from "react-to-pdf";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import useAuth from "../../hooks/useAuth";
import SelectTemplates from "./SelectTemplates";
import SecondTemplate from "./SecondTemplate";
import ThirdTemplate from "./ThirdTemplate";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import FourthTemplate from "./FourthTemplate";
import FifthTemplate from "./FifthTemplate";
import SixthTemplate from "./SixthTemplate";
import SeventhTemplate from "./SeventhTemplate";
import EighthTemplate from "./EighthTemplate";

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
  height: "100vh",
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
  // { text: "Check", icon: <CheckIcon /> },
  { text: "Download", icon: <DownloadIcon /> },
  // { text: "Share", icon: <ShareIcon /> },
];

export default function MiniDrawer() {
  const { toPDF, targetRef } = usePDF({ filename: "resume.pdf" });
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [sections, setSections] = useState([]);
  const [isTemplateDrawerOpen, setIsTemplateDrawerOpen] = useState(false);
  const [isDesignPanelOpen, setIsDesignPanelOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [fontStyle, setFontStyle] = useState(() => {
    // Initialize from localStorage, default to 'Arial' if not found
    return localStorage.getItem("fontStyle") || "Arial";
  });
  const [isRearrangeOpen, setIsRearrangeOpen] = useState(false);
  const [improvedTextOpen, setImprovedTextOpen] = useState(false);

  const [resumeLayout, setResumeLayout] = useState({
    header: {},
    education: {},
    experience: {},
    summary: {},
    techStack: {},
    projects: {},
    languages: {},
  });
  const [textColor, setTextColor] = useState("#000000");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { user, logout } = useAuth();
  useEffect(() => {
    localStorage.setItem("fontStyle", fontStyle);
  }, [fontStyle]);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);

    // Close all other drawers/popups first
    setIsPopupOpen(false);
    setIsTemplateDrawerOpen(false);
    setIsDesignPanelOpen(false);
    setImprovedTextOpen(false);
    // setShowPDFResume(false)
    // Open the selected drawer/popup
    if (menuItems[index].text === "Add section") {
      setIsPopupOpen(true);
    } else if (menuItems[index].text === "Templates") {
      setIsTemplateDrawerOpen(true);
    } else if (menuItems[index].text === "Design & Font") {
      setIsDesignPanelOpen(true);
    } else if (menuItems[index].text === "Rearrange") {
      setIsRearrangeOpen(true);
    } else if (menuItems[index].text === "Improve text") {
      setImprovedTextOpen(true);
    } else if (menuItems[index].text === "Download") {
      setIsPreviewOpen(true);
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
  const [showSecondTemplate, setShowSecondTemplate] = useState(false);
  const [isThirdTemplateSelected, setIsThirdTemplateSelected] = useState(false);
  const [isFourthTemplateSelected, setIsFourthTemplateSelected] =
    useState(false);
  const [isFifthTemplateSelected, setIsFifthTemplateSelected] = useState(false);
  const [isSixthTemplateSelected, setIsSixthTemplateSelected] = useState(false);
  const [isSeventhTemplateSelected, setIsSevethTemplateSelected] = useState(false);
  const [isEighthTemplateSelected, setIsEighthTemplateSelected] = useState(false);

  const handleSelectTemplate = (template) => {
    const isSelected = template.id === selectedTemplate?.id;

    setSelectedTemplate(isSelected ? null : template);
    setShowSecondTemplate(template.id === 2 && !isSelected);
    setIsThirdTemplateSelected(template.id === 3 && !isSelected);
    setIsFourthTemplateSelected(template.id === 4 && !isSelected);
    setIsFifthTemplateSelected(template.id === 5 && !isSelected);
    setIsSixthTemplateSelected(template.id === 6 && !isSelected);
    setIsSevethTemplateSelected(template.id === 7 && !isSelected);
    setIsEighthTemplateSelected(template.id === 8 && !isSelected);
    if (template.id === 1 && !isSelected) {
      setResumeLayout({
        header: {
          name: "ISABELLE TODD",
          title: "I solve problems and help people overcome obstacles.",
          contact: {
            phone: "+1 000 *** ** **",
            email: "isabelle.todd@gmail.com",
            linkedin: "www.linkedin.com/isabelle",
            location: "London, UK",
          },
        },
        education: {
          title: "EDUCATION",
          items: [
            {
              degree: "MSc Project and Process Management",
              school: "Van Hall Larenstein University",
              date: "10/2008 - 01/2010",
              gpa: "8.7 / 10",
            },
            {
              degree: "BSc Operations Management",
              school: "Technical University Berlin",
              date: "09/2005 - 05/2008",
              gpa: "4.7 / 5.0",
            },
          ],
        },
        experience: {
          title: "EXPERIENCE",
          items: [
            {
              role: "Product Owner",
              company: "Lab Services",
              date: "02/2010 - 04/2012",
              location: "Hamburg, Germany",
              responsibilities: [
                "Brought in the user perspective to 4 successfully launched projects",
              ],
            },
            {
              role: "Internal Project Manager",
              company: "Sunrise HLP",
              date: "04/2012 - 03/2014",
              location: "Berlin, Germany",
              responsibilities: [
                "Planned, beta-tested and led the rollout of a new internal communications system to all 400+ employees in 6 locations",
              ],
            },
          ],
        },
        summary: {
          title: "SUMMARY",
          content:
            "Dynamic Product Marketing Professional with a strong concentration in project management and 5+ years of experience. Proven ability to lead teams and implement measurable change to improve efficiency and achieve customer satisfaction. Experience working with multimillion-dollar budgets that improved results within a dynamic environment.",
        },
        techStack: {
          title: "TECH STACK",
          items: [
            "Zoho Sprints",
            "UserVoice",
            "Intercom",
            "VWO",
            "Taboola",
            "Stata",
            "Maven",
            "Jenkins",
            "Oracle",
            "Hotjar",
          ],
        },
        projects: {
          title: "PROJECTS",
          items: [
            {
              name: "Get2Vote",
              description:
                "A web based gamification platform for improving voting turnout rates.",
              details: [
                "Researched, tested and devised full gamification framework",
              ],
            },
            {
              name: "New Horizons Adoption Days",
              description:
                "A series of events where shelter dogs meet potential families.",
              details: [
                "Planned event calendar & communications for 23 events",
                "On-site help and communications",
              ],
            },
          ],
        },
        languages: {
          title: "LANGUAGES",
          items: [
            { language: "German", level: "Native" },
            { language: "English", level: "Proficient" },
            { language: "Spanish", level: "Proficient" },
            { language: "Italian", level: "Beginner" },
          ],
        },
      });
    }
  };
  const handleClosePreview = () => {
    setIsPreviewOpen(false);
    // toast.success("Resume Downloaded successfully")
  };
  const navLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Features", url: "/features" },
    { name: "Contact", url: "/contact" },
  ];
  const settings = [
    {
      name: "Profile",
      url: "/account",
      icon: <MdOutlineAccountCircle style={{ fontSize: "2rem" }} />,
    },
    {
      name: "Logout",
      onClick: logout,
      icon: <IoIosLogOut style={{ fontSize: "2rem" }} />,
    },
  ];
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const TemplateComponent = () => {
    if(isEighthTemplateSelected){
      return (
        <EighthTemplate    isTemplateDrawerOpen={isTemplateDrawerOpen}
        isDesignPanelOpen={isDesignPanelOpen}
        improvedTextOpen={improvedTextOpen}
        fontStyle={fontStyle}
        textColor={textColor}/>
      )
    }
  else   if (isSeventhTemplateSelected) {
      return (
        <SeventhTemplate
          isTemplateDrawerOpen={isTemplateDrawerOpen}
          isDesignPanelOpen={isDesignPanelOpen}
          improvedTextOpen={improvedTextOpen}
          fontStyle={fontStyle}
          textColor={textColor}
        />
      );
    }
    else if (isSixthTemplateSelected) {
      return (
        <SixthTemplate
          isTemplateDrawerOpen={isTemplateDrawerOpen}
          isDesignPanelOpen={isDesignPanelOpen}
          improvedTextOpen={improvedTextOpen}
          fontStyle={fontStyle}
          textColor={textColor}
        />
      );
    } else if (isFifthTemplateSelected) {
      return (
        <FifthTemplate
          isTemplateDrawerOpen={isTemplateDrawerOpen}
          isDesignPanelOpen={isDesignPanelOpen}
          improvedTextOpen={improvedTextOpen}
          fontStyle={fontStyle}
          textColor={textColor}
        />
      );
    } else if (isFourthTemplateSelected) {
      return (
        <FourthTemplate
          isTemplateDrawerOpen={isTemplateDrawerOpen}
          isDesignPanelOpen={isDesignPanelOpen}
          improvedTextOpen={improvedTextOpen}
          fontStyle={fontStyle}
          textColor={textColor}
        />
      );
    } else if (isThirdTemplateSelected) {
      return (
        <ThirdTemplate
          isTemplateDrawerOpen={isTemplateDrawerOpen}
          isDesignPanelOpen={isDesignPanelOpen}
          improvedTextOpen={improvedTextOpen}
          fontStyle={fontStyle}
          textColor={textColor}
        />
      );
    } else if (showSecondTemplate) {
      return (
        <SecondTemplate
          isTemplateDrawerOpen={isTemplateDrawerOpen}
          isDesignPanelOpen={isDesignPanelOpen}
          improvedTextOpen={improvedTextOpen}
          fontStyle={fontStyle}
          textColor={textColor}
        />
      );
    } else {
      return (
        <EditableResume
          isTemplateDrawerOpen={isTemplateDrawerOpen}
          isDesignPanelOpen={isDesignPanelOpen}
          improvedTextOpen={improvedTextOpen}
          layout={resumeLayout}
          setLayout={setResumeLayout}
          fontStyle={fontStyle}
          textColor={textColor}
        />
      );
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ zIndex: 1300 }}>
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navLinks.map((link, index) => (
              <Button key={index}>
                <Link to={link.url}>{link.name}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  src={
                    user?.profileImage
                      ? `http://localhost:5000/uploads/${user.profileImage}`
                      : noProfile
                  }
                  alt=""
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((link, index) => (
                <MenuItem
                  key={index}
                  onClick={(e) => {
                    handleCloseUserMenu();
                    if (link.onClick) {
                      link.onClick(e);
                    }
                  }}
                >
                  {link.url ? (
                    <Link to={link.url}>
                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </Typography>
                    </Link>
                  ) : (
                    <Typography
                      sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          zIndex: 1200, // Higher than SelectTemplates
          "& .MuiDrawer-paper": {
            // position: 'relative',
            position: "fixed",
            whiteSpace: "nowrap",
            width: drawerWidth,
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: "border-box",
            ...(!open && {
              overflowX: "hidden",
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              width: theme.spacing(7),
              [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
              },
            }),
          },
        }}
      >
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
        {TemplateComponent()}

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
        onSelectTemplate={handleSelectTemplate}
        activeTemplateId={selectedTemplate ? selectedTemplate.id : null} // Add this prop if you want to highlight the active template
      />

      <DesignPanel
        open={isDesignPanelOpen}
        onClose={() => setIsDesignPanelOpen(false)}
        fontStyle={fontStyle}
        setFontStyle={setFontStyle}
        textColor={textColor}
        setTextColor={setTextColor}
      />

      <Rearrange
        open={isRearrangeOpen}
        onClose={() => setIsRearrangeOpen(false)}
      />
      <ImprovedText
        open={improvedTextOpen}
        onClose={() => setImprovedTextOpen(false)}
      />

      <Dialog
        open={isPreviewOpen}
        onClose={handleClosePreview}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <div ref={targetRef}>
            <PDFResume
              layout={resumeLayout}
              user={user}
              fontStyle={fontStyle}
              textColor={textColor}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ margin: "1rem", width: "100%" }}
            onClick={() => toPDF()}
            onClose={handleClosePreview}
            variant="contained"
          >
            Download As PDF
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}


