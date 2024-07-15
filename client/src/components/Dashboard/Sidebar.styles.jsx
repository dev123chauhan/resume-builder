// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     position: "relative",
//     height: "100vh",
//     overflow: "hidden",
//   },
//   sidebar: {
//     width: "250px",
//     // backgroundColor: "#f5f5f5",
//     height: "100%",
//     paddingTop: theme.spacing(2),
//     overflowY: "auto",
//     flexShrink: 0,
//     zIndex:"1000",

//   },
//   iconColor: {
//     color: "#027b9a !important",
//   },
//   listItem: {
//     "&:hover": {
//       backgroundColor: "#027b9a !important",
//       color: "white",
//       "& .MuiListItemIcon-root": {
//         color: "white !important",
//       },
//     },
//   },
//   activeItem: {
//     backgroundColor: "#027b9a !important",
//     color: "white !important",
//     "& .MuiListItemIcon-root": {
//       color: "white !important",
//     },
//   },
//   userInfo: {
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "column",
//     marginBottom: theme.spacing(2),
//   },
//   avatar: {
//     width: "60px",
//     height: "60px",
//     borderRadius: "50%",
//     marginBottom: theme.spacing(1),
//   },
//   username: {
//     fontWeight: "bold",
//     marginBottom: theme.spacing(0.5),
//   },
//   email: {
//     fontSize: "0.875rem",
//     color: "gray",
//     marginBottom: theme.spacing(1),
//   },
//   templatesContainer: {
//     width: "300px",
//     height: "100%",
//     backgroundColor: "white",
//     padding: theme.spacing(2),
//     position: "absolute",
//     left: "-300px",
//     opacity: 0,
//     transition: "left 0.3s ease-in-out, opacity 0.3s ease-in-out",
//     overflowY: "auto",
//   },
//   templatesContainerVisible: {
//     left: "250px",
//     opacity: 1,
//   },
//   gridContainer: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: theme.spacing(2),
//   },
//   templateItem: {
//     width: "100%",
//     height: "150px",
//     backgroundColor: "white",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     borderRadius: theme.spacing(1),
//     cursor: "pointer",
//   },
//   templateImage: {
//     width: "80%",
//     height: "80%",
//     objectFit: "cover",
//     borderRadius: theme.spacing(1),
//   },
//   activeTemplateItem: {
//     border: `2px solid ${theme.palette.primary.main}`,
//   },
//   selectedTemplateArea: {
//     flexGrow: 1,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f0f0f0",
//     padding: theme.spacing(2),
//     overflowY: "auto",
//   },
//   selectedTemplateImage: {
//     maxWidth: "100%",
//     maxHeight: "100%",
//     objectFit: "contain",
//   },
//   loginButtonSidebar:{
//     marginLeft:"1rem",
//     backgroundColor:"#027b9a",
//     paddingTop: "10px",
//     paddingBottom: "10px",
//     paddingLeft:"20px",
//     paddingRight:"20px",
//     borderRadius: "5px"
//   },
//   panelContainer: {
//     position: "fixed",
//     top: 0,
//     left: 250, // Width of the sidebar
//     width: 300,
//     height: "100%",
//     backgroundColor: "#fff",
//     boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
//     transform: "translateX(-100%)",
//     transition: "transform 0.3s ease-in-out",
//     overflow: "auto",
    
//   },
//   panelContainerVisible: {
//     transform: "translateX(0)",
//   },
// }));

// export default useStyles;



// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles(() => ({
//   container: {
//     display: "flex",
//     position: "relative",
//   },
//   sidebar: {
//     width: 250,
//     height: "100vh",
//     backgroundColor: "#f4f4f4",
//     position: "fixed",
//     top: 0,
//     left: 0,
//     zIndex: 1000,
//   },
//   userInfo: {
//     padding: 16,
//     textAlign: "center",
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: "50%",
//     marginBottom: 8,
//   },
//   username: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   email: {
//     fontSize: 14,
//     color: "#555",
//   },
//   listItem: {
//     "&:hover": {
//       backgroundColor: "#ddd",
//     },
//   },
//   activeItem: {
//     backgroundColor: "#027b9a",
//     color: "#fff",
//   },
//   iconColor: {
//     color: "#027b9a",
//   },
//   loginButtonSidebar: {
//     padding: 16,
//     textAlign: "center",
//     width: "100%",
//     display: "block",
//     backgroundColor: "#027b9a",
//     color: "#fff",
//     textDecoration: "none",
//     marginTop: 16,
//     cursor: "pointer",
//   },
//   templatesContainer: {
//     position: "fixed",
//     top: 0,
//     left: 250,
//     width: 300,
//     height: "100vh",
//     backgroundColor: "#fff",
//     zIndex: 999,
//     overflowY: "auto",
//     transition: "transform 0.3s ease-in-out",
//     transform: "translateX(-100%)",
//   },
//   templatesContainerVisible: {
//     transform: "translateX(0)",
//   },
//   gridContainer: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: 8,
//   },
//   templateItem: {
//     cursor: "pointer",
//     border: "1px solid transparent",
//     "&:hover": {
//       border: "1px solid #027b9a",
//     },
//   },
//   activeTemplateItem: {
//     border: "1px solid #027b9a",
//   },
//   templateImage: {
//     width: "100%",
//     height: "auto",
//   },
//   selectedTemplateArea: {
//     marginLeft: 250,
//     padding: 20,
//   },
//   selectedTemplateImage: {
//     maxWidth: "100%",
//     height: "auto",
//   },
//   panelContainer: {
//     position: "fixed",
//     top: 0,
//     right: 0,
//     width: 300,
//     height: "100vh",
//     backgroundColor: "#fff",
//     zIndex: 1000,
//     overflowY: "auto",
//     transition: "transform 0.3s ease-in-out",
//     transform: "translateX(100%)",
//   },
//   panelContainerVisible: {
//     transform: "translateX(0)",
//   },
// }));

// export default useStyles;



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
