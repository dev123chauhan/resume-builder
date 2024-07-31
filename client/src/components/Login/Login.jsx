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
import { ClipLoader } from "react-spinners"; // Import the spinner component
import useAuth from "../../hooks/useAuth";
import WestIcon from '@mui/icons-material/West';
 
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading spinner
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true); // Show spinner
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      const token = response.data.token;
      login(token);
      toast.success('Successfully logged in!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
      setLoading(false); // Hide spinner
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
      setLoading(false); // Hide spinner
    }
  };

  return (
    <div className="containerLogin">
      <ToastContainer />
      <div className="left-side">
        <Link style={{color:"#027b9a", display:"flex", alignItems:"center", gap:"10px"}} to="/"><WestIcon  style={{color:"#027b9a"}} />Back to Home</Link>
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
          <button className="loginBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader size={20} color={"#fff"} /> : "LOGIN"}
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
