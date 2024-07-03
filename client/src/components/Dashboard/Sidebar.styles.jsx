import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    position: "relative",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#f5f5f5",
    height: "100vh",
    paddingTop: theme.spacing(2),
    zIndex: "1000",
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
    height: "100vh",
    backgroundColor: "white",
    padding: theme.spacing(2),
    position: "absolute",
    left: "-300px", // Start off-screen to the left
    opacity: 0,
    transition: "left 0.3s ease-in-out, opacity 0.3s ease-in-out",
  },
  templatesContainerVisible: {
    left: "250px", // Align with the sidebar
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
  },
  templateImage: {
    width: "80%",
    height: "80%",
    objectFit: "cover",
    borderRadius: theme.spacing(1),
  },
}));

export default useStyles;
