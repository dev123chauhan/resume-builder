// import { useState, useEffect } from "react";
// import axios from "axios";

// const UserInformation = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
   
//         const config = {
//           headers: {
//             "x-auth-token":
//               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODI1YTM5N2E5YWI0ZGQyNWIwZGM1NCIsImlhdCI6MTcxOTgyNTIwNywiZXhwIjoxNzIwMDg0NDA3fQ.nZluPz1lRxdM2r3INjrmNhScbAzBE2zIkuqiYeN-6fM",
//           },
//         };
//         const response = await axios.get(
//           "http://localhost:5000/api/user",
//           config
//         );
//         setUserData(response.data);
//         // console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         // Handle error (e.g., redirect to login page)
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (!userData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p>
//         <strong>Username:</strong> {userData.username}
//       </p>
//       <p>
//         <strong>Email:</strong> {userData.email}
//       </p>
//       <p>
//         <strong>Joined:</strong>{" "}
//         {new Date(userData.createdAt).toLocaleDateString()}
//       </p>
//       {/* Add more user information as needed */}
//     </div>
//   );
// };

// export default UserInformation;



//      // const token = localStorage.getItem('token');