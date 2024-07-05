// import  { useState } from 'react';
// import {
//   Container,
//   Grid,
//   Paper,
//   TextField,
//   Button,
//   Typography,
// } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import InputAdornment from '@mui/material/InputAdornment';
// import { CiUser } from 'react-icons/ci';
// import { AiOutlineMail } from 'react-icons/ai';
// // import { RiMessage2Line } from 'react-icons/ri';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(4),
//     marginTop: '5rem',
//   },
//   formContainer: {
//     padding: theme.spacing(4),
//     backgroundColor: '#fff',
//   },
//   formField: {
//     marginBottom: "1rem !important",
//   },
//   mapContainer: {
//     padding: theme.spacing(4),
//     height: '100%',
//   },
//   title: {
//     marginBottom: "2rem !important",
//     color: '#027b9a',
//   },
//   getTitle:{
//     marginBottom: "1rem !important",
//     color:"#027b9a",
//     fontSize:"1rem !important"
//   },
//   iframe: {
//     border: 0,
//     width: '100%',
//     height: '400px',
//   },
// }));

// const Contact = () => {
//   const classes = useStyles();
//   const [isNameFocused, setIsNameFocused] = useState(false);
//   const [isEmailFocused, setIsEmailFocused] = useState(false);

//   return (
//     <Container className={classes.root}>
//       <Typography variant="h4" className={classes.title} align="center">
//         Contact Us
//       </Typography>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6}>
//           <Paper className={classes.formContainer}>
//           <Typography className={classes.getTitle} variant='h6'>Get In Touch</Typography>
//             <TextField
//               className={classes.formField}
//               label="Name"
//               fullWidth
//               variant="outlined"
//               onFocus={() => setIsNameFocused(true)}
//               onBlur={() => setIsNameFocused(false)}
//               InputProps={{
//                 startAdornment: isNameFocused ? (
//                   <InputAdornment position="start">
//                     <CiUser />
//                   </InputAdornment>
//                 ) : null,
//               }}
//             />
//             <TextField
//               className={classes.formField}
//               label="Email"
//               fullWidth
//               variant="outlined"
//               onFocus={() => setIsEmailFocused(true)}
//               onBlur={() => setIsEmailFocused(false)}
//               InputProps={{
//                 startAdornment: isEmailFocused ? (
//                   <InputAdornment position="start">
//                     <AiOutlineMail />
//                   </InputAdornment>
//                 ) : null,
//               }}
//             />

//             <TextField
//               className={classes.formField}
//               label="Message"
//               fullWidth
//               variant="outlined"
//               multiline
//               minRows={10}
//             />
//             <Button variant="contained" className="buttonColor">
//               Submit
//             </Button>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Paper className={classes.mapContainer}>
//             <iframe
//               className={classes.iframe}
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.1610989795715!2d37.618423316080634!3d55.751244980552364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5d5f5aeb0f%3A0x3601e6eb24f50811!2sMoscow!5e0!3m2!1sen!2sru!4v1614699395863!5m2!1sen!2sru"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Contact;

import { useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { CiUser } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";
import contactImg from "../../assets/contact.jpg"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    marginTop: "5rem",
  },
  formContainer: {
    padding: theme.spacing(4),
    backgroundColor: "#fff",
  },
  formField: {
    marginBottom: "1rem !important",
  },
  mapContainer: {
    padding: theme.spacing(4),
    height: "100%",
  },
  title: {
    marginBottom: "2rem !important",
    color: "#027b9a",
  },
  getTitle: {
    marginBottom: "1rem !important",
    color: "#027b9a",
    fontSize: "1rem !important",
  },
  iframe: {
    border: 0,
    width: "100%",
    height: "400px",
  },
  contactImg:{
      width:"100%"
  },
  iconSize:{
    fontSize:"1.5rem"
  }
}));

const Contact = () => {
  const classes = useStyles();
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      console.log(res.data);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      toast.success("Thanks for contact");
      setTimeout(() => {
        setLoading(false); 
      }, 1000);
    } catch (err) {
      console.error(err);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <Container className={classes.root}>
      <ToastContainer />
      <Typography variant="h4" className={classes.title} align="center">
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.formContainer}>
            <Typography className={classes.getTitle} variant="h6">
              Get In Touch
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                className={classes.formField}
                label="Name"
                fullWidth
                variant="outlined"
                name="name"
                value={name}
                onChange={handleChange}
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
                InputProps={{
                  startAdornment: isNameFocused ? (
                    <InputAdornment position="start">
                      <CiUser className={classes.iconSize}/>
                    </InputAdornment>
                  ) : null,
                }}
              />
              <TextField
                className={classes.formField}
                label="Email"
                fullWidth
                variant="outlined"
                name="email"
                value={email}
                onChange={handleChange}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                InputProps={{
                  startAdornment: isEmailFocused ? (
                    <InputAdornment position="start">
                      <AiOutlineMail className={classes.iconSize}/>
                    </InputAdornment>
                  ) : null,
                }}
              />
              <TextField
                className={classes.formField}
                label="Message"
                fullWidth
                variant="outlined"
                multiline
                minRows={10}
                name="message"
                value={message}
                onChange={handleChange}
              />
              <button type="submit"  className="buttonColor">
              {loading ? <ClipLoader size={20} color={"#fff"} /> : "SUBMIT"}
              </button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.mapContainer}>
            <img className={classes.contactImg} src={contactImg} alt="" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
