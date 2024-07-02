// import loginImage from "../../assets/loginImage.jpg";
// import TextField from "@mui/material/TextField";
// import {
//   FormGroup,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { FcGoogle } from "react-icons/fc";
// import { Link } from "react-router-dom";
// import logo2image from "../../assets/logo2image.png";
// import { useState } from "react";
// import { Visibility, VisibilityOff } from "@material-ui/icons";

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   return (
//     <div className="containerLogin">
//       <div className="left-side">
//         <img src={loginImage} alt="Left Side Image" />
//       </div>
//       <div className="right-side">
//         <img className="logoImage" src={logo2image} alt="" />
//         <form className="loginForm" action="#" method="POST">
//           <h2 className="loginFormText">Create your account</h2>
//           <div className="form-group">
//             <TextField
//               id="name"
//               label="Name"
//               name="name"
//               variant="outlined"
//               fullWidth
//               required
//               margin="normal"
//             />
//           </div>

//           <div className="form-group">
//             <TextField
//               id="email"
//               label="Email"
//               name="email"
//               variant="outlined"
//               fullWidth
//               required
//               margin="normal"
//             />
//           </div>

//           <div className="form-group">
//             <TextField
//               id="password"
//               label="Password"
//               name="password"
//               variant="outlined"
//               fullWidth
//               required
//               margin="normal"
//               type={showPassword ? "text" : "password"}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowPassword(!showPassword)}>
//                       {showPassword ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </div>
//           <FormGroup>
//           </FormGroup>
//           <button className="loginBtn" type="submit">
//             CREATE AN ACCOUNT
//           </button>
//         </form>
//         <p>Or</p>
//         <div>
//           <button className="formBtn">
//             <FcGoogle className="googleIcon" />
//             Continue With Google
//           </button>
//           <p>
//           Already have an account?{" "}
//             <Link className="registerColor" to="/login">
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;



import loginImage from "../../assets/loginImage.jpg";
import TextField from "@mui/material/TextField";
import { FormGroup, IconButton, InputAdornment } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import logo2image from "../../assets/logo2image.png";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    try {
      await axios.post("http://localhost:5000/api/register", {
        username: name,
        email,
        password,
      });
      toast.success("Successfully registered");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error("Registration failed");
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="containerLogin">
          <ToastContainer />
      <div className="left-side">
        <img src={loginImage} alt="Left Side Image" />
      </div>
      <div className="right-side">
        <img className="logoImage" src={logo2image} alt="" />
        <form className="loginForm" onSubmit={handleSubmit}>
          <h2 className="loginFormText">Create your account</h2>
          <div className="form-group">
            <TextField
              id="name"
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <TextField
              id="email"
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <TextField
              id="password"
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <FormGroup></FormGroup>
          <button className="loginBtn" type="submit">
            CREATE AN ACCOUNT
          </button>
        </form>
        <p>Or</p>
        <div>
          <button className="formBtn">
            <FcGoogle className="googleIcon" />
            Continue With Google
          </button>
          <p>
            Already have an account?{" "}
            <Link className="registerColor" to="/login">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

