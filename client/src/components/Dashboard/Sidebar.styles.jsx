import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#f5f5f5",
    height: "100%",
    paddingTop: theme.spacing(2),
    overflowY: "auto",
    flexShrink: 0,
    zIndex:"1000",

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
  templatesContainer: {
    width: "300px",
    height: "100%",
    backgroundColor: "white",
    padding: theme.spacing(2),
    position: "absolute",
    left: "-300px",
    opacity: 0,
    transition: "left 0.3s ease-in-out, opacity 0.3s ease-in-out",
    overflowY: "auto",
  },
  templatesContainerVisible: {
    left: "250px",
    opacity: 1,
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(2),
  },
  templateItem: {
    width: "100%",
    height: "150px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.spacing(1),
    cursor: "pointer",
  },
  templateImage: {
    width: "80%",
    height: "80%",
    objectFit: "cover",
    borderRadius: theme.spacing(1),
  },
  activeTemplateItem: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  selectedTemplateArea: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: theme.spacing(2),
    overflowY: "auto",
  },
  selectedTemplateImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  loginButtonSidebar:{
    marginLeft:"1rem",
    backgroundColor:"#027b9a",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft:"20px",
    paddingRight:"20px",
    borderRadius: "5px"
  }
}));

export default useStyles;
