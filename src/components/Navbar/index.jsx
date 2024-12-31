'use client'
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-cyan-500 text-white px-4 py-3 flex justify-between items-center">
      <div className="text-lg font-bold">Syncspace</div>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="hover:underline">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            Login History
          </a>
        </li>
        <li>
          <a href="#services" className="hover:underline">
          </a>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
