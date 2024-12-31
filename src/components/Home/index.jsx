"use client";
import React from "react";
// import { useUser } from "../../context/userContext";

const Home = () => {
  // const { user } = useUser();
  return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
          <h1 className="text-3xl font-bold text-gray-800 items-end">Dashboard </h1>
          <h2 className="text-xl mt-4 text-cyan-600">
          Username: {localStorage.getItem('username')}
          </h2>
          <h2 className="text-xl mt-2 text-cyan-600">
          Email: {localStorage.getItem('email') }
          </h2>
        </div>
  );
}
export default Home;


//   if (!user || typeof user !== "object") {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//         <h1 className="text-3xl font-bold text-gray-800">
//           Dashboard 
//           Loading , No user is currently logged in.
//         </h1>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
//       <h2 className="text-xl mt-4">Username: {user.username}</h2>
//       <h2 className="text-xl mt-2">Email: {user.email || "No Email Provided"}</h2>
//     </div>
//   );
// };


// 'use client';
// import React from 'react';
// import {useUser} from "../../context/userContext";


// const Home = () => {
//   const {user} = useUser();
//   console.log(user);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//     <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
//     <h2 className="text-xl mt-4">
//       Username: {user}
//     </h2>
//     <h2 className="text-xl mt-2">
//       Email: {user || 'No Email Provided'}
//     </h2>
//   </div>
//   );
// };

// export default Home;