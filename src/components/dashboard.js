"use client";
import React from "react";
const Dashboard_page = () => {
  
  return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
          <h1 className="text-3xl font-bold text-gray-800 ">Dashboard </h1>
          <h2 className="text-xl mt-4 text-cyan-600">
          Username11: {localStorage.getItem('username')}
          </h2>
          <h2 className="text-xl mt-2 text-cyan-600">
          Email11: {localStorage.getItem('email') }
          </h2>
        </div>
  );
}
export default Dashboard_page;