// import loginImage from "../../assets/loginImage.jpg";
// import TextField from "@mui/material/TextField";
// import { Checkbox, FormControlLabel, FormGroup, IconButton, InputAdornment } from "@mui/material";
// import { FcGoogle } from "react-icons/fc";
// import { Link } from "react-router-dom";
// import logo2image from "../../assets/logo2image.png";
// import { useState } from "react";
// import { Visibility, VisibilityOff } from "@material-ui/icons";
// import "../../css/login.css"
// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   return (
//     <div className="containerLogin">
//       <div className="left-side">
//         <img src={loginImage} alt="Left Side Image" />
//       </div>
//       <div className="right-side">
//         <img className="logoImage" src={logo2image} alt="" />
//         <form className="loginForm" action="#" method="POST">
//           <h2 className="loginFormText">Enter Your Credentials to Login</h2>
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
//             <FormControlLabel
//               control={<Checkbox />}
//               label="Remember Me"
//             />
//           </FormGroup>
//           <button className="loginBtn" type="submit">
//             LOGIN
//           </button>
//         </form>
//         <p>Or</p>
//         <div>
//           <button className="formBtn">
//             <FcGoogle className="googleIcon" />
//             Continue With Google
//           </button>
//           <p>
//             Don’t have an Account?{" "}
//             <Link  className="registerColor" to="/register">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import { useState } from "react";
import { TextField, Checkbox, FormControlLabel, FormGroup, IconButton, InputAdornment } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import loginImage from "../../assets/loginImage.jpg";
import logo2image from "../../assets/logo2image.png";
import "../../css/login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      console.log(response.data)
      toast.success('Successfully logged in!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
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
        <form className="loginForm" onSubmit={handleLogin}>
          <h2 className="loginFormText">Enter Your Credentials to Login</h2>
          <div className="form-group">
            <TextField
              id="email"
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Remember Me" />
          </FormGroup>
          <button className="loginBtn" type="submit">
            LOGIN
          </button>
        </form>
        <p>Or</p>
        <div>
          <button className="formBtn">
            <FcGoogle className="googleIcon" />
            Continue With Google
          </button>
          <p>
            Don’t have an Account?{" "}
            <Link className="registerColor" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
