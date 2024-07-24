import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(
    (theme) => ({
      container: {
        padding: theme.spacing(4),
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease-in-out",
      },
      containerShift: {
        transform: "translateX(100px)",
      },
      header: {
        display: "flex",
        alignItems: "flex-start",
        marginBottom: theme.spacing(3),
      },
      avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginRight: theme.spacing(2),
      },
      headerInfo: {
        flexGrow: 1,
      },
      name: {
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: theme.spacing(1),
      },
      title: {
        fontSize: "18px",
        color: "#666",
        marginBottom: theme.spacing(1),
      },
      contactInfo: {
        display: "flex",
        flexWrap: "wrap",
        gap: theme.spacing(2),
        marginBottom: theme.spacing(3),
        "& > div": {
          flex: "1 1 auto",
          minWidth: "120px",
        },
      },
      section: {
        marginBottom: theme.spacing(3),
      },
      sectionTitle: {
        marginBottom: theme.spacing(2),
        borderBottom: "2px solid black",
        paddingBottom: theme.spacing(1),
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between"
      },
      addButton: {
        marginLeft: theme.spacing(2),
        color:"black !important",
        border:"none !important"
      },
      degree: {
        fontWeight: "bold",
      },
      school: {
        fontStyle: "italic",
      },
      date: {
        color: "#666",
      },
      gpa: {
        fontWeight: "bold",
      },
      role: {
        fontWeight: "bold",
      },
      company: {
        fontStyle: "italic",
      },
      location: {
        color: "#666",
      },
      responsibility: {
        marginLeft: theme.spacing(2),
        "&:before": {
          content: '"•"',
          marginRight: theme.spacing(1),
        },
      },
      summary: {
        lineHeight: 1.6,
      },
      techStack: {
        display: "flex",
        flexWrap: "wrap",
        gap: theme.spacing(1),
      },
      project: {
        marginBottom: theme.spacing(2),
      },
      projectName: {
        fontWeight: "bold !important",
      },
      projectDescription: {
        fontStyle: "italic",
      },
      projectDetail: {
        marginLeft: theme.spacing(2),
        "&:before": {
          content: '"•"',
          marginRight: theme.spacing(1),
        },
      },
      language: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: theme.spacing(1),
      },
      deleteButton: {
        marginLeft: theme.spacing(1),
      },
    }),
    { name: "EditableResume" }
  );
  export default useStyles;