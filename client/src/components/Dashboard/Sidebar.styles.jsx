


import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    position: "relative",
  },
  sidebar: {
    width: 250,
    height: "100vh",
    backgroundColor: "#f4f4f4",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  userInfo: {
    padding: 16,
    textAlign: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    marginBottom: 8,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#555",
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },
  activeItem: {
    backgroundColor: "#027b9a !important",
    color: "white !important",
    "& .MuiListItemIcon-root": {
      color: "white !important",
    },
  },
  iconColor: {
    color: "#027b9a",
  },
  loginButtonSidebar: {
    padding: 16,
    textAlign: "center",
    width: "100%",
    display: "block",
    backgroundColor: "#027b9a",
    color: "#fff",
    textDecoration: "none",
    marginTop: 16,
    cursor: "pointer",
  },
  templatesContainer: {
    position: "fixed",
    top: 0,
    left: 250,
    width: 300,
    height: "100vh",
    backgroundColor: "#fff",
    zIndex: 999,
    overflowY: "auto",
    transition: "transform 0.3s ease-in-out",
    transform: "translateX(-100%)",
  },
  templatesContainerVisible: {
    transform: "translateX(0)",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 8,
  },
  templateItem: {
    cursor: "pointer",
    border: "1px solid transparent",
    "&:hover": {
      border: "1px solid #027b9a",
    },
  },
  activeTemplateItem: {
    border: "1px solid #027b9a",
  },
  templateImage: {
    width: "100%",
    height: "auto",
  },
  selectedTemplateArea: {
    marginLeft: 250,
    padding: 20,
  },
  selectedTemplateImage: {
    maxWidth: "100%",
    height: "auto",
  },
  panelContainer: {
    position: "fixed",
    top: 0,
    left: 250,
    width: 300,
    height: "100vh",
    backgroundColor: "#fff",
    // zIndex: 1000,
    overflowY: "auto",
    transition: "transform 0.3s ease-in-out",
    transform: "translateX(-100%)",
  },
  panelContainerVisible: {
    transform: "translateX(0)",
  },
}));

export default useStyles;
