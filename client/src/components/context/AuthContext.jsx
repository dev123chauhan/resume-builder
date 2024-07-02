// import  { createContext, useContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         try {
//           const response = await axios.get('http://localhost:5000/api/user', {
//             headers: { 'x-auth-token': token },
//           });
//           setUser(response.data);
//         } catch (error) {
//           console.error("Failed to fetch user", error);
//         }
//       }
//     };

//     fetchUser();
//   }, []);

//   const logout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, setUser, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };



import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:5000/api/user', {
            headers: { 'x-auth-token': token },
          });
          setUser(response.data);
        } catch (error) {
          console.error("Failed to fetch user", error);
        }
      }
    };

    fetchUser();
  }, []);

  const login = async (token) => {
    localStorage.setItem('token', token);
    try {
      const response = await axios.get('http://localhost:5000/api/user', {
        headers: { 'x-auth-token': token },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate("/login")
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
