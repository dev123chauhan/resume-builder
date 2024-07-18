
// import Sidebar from "./Sidebar";
// import EditableResume from "./EditResume";
// import { makeStyles } from "@mui/styles";



// const useStyles = makeStyles((theme) => ({
//   dashboard: {
//     display: "flex",
//     height: "100vh",
//   },
//   content: {
//     flexGrow: 1, 
//     padding: theme.spacing(3),
//     overflowY: "auto",
//   },
// }));

// export default function Dashboard() {
//   const classes = useStyles();

//   return (
//     <>

//     <div className={classes.dashboard}>
//       <Sidebar />
//       <main className={classes.content}>
//         <EditableResume />
//       </main>
//     </div>
//     </>
//   );
// }

// import React from 'react'
import MiniDrawer from "./Drawer";
export default function Dashboard() {
  return (
    <div>
      <MiniDrawer/>
    </div>
  )
}




