import React from 'react'

import { FaHome, FaSearch, FaUserCircle, FaCog, FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full bg-transparent py-4 px-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FaHome className="text-gray-400 text-lg" />
        <span className="text-gray-400 text-sm">/</span>
        <span className="font-bold text-gray-700 text-base">Dashboard</span>
      </div>

      <div className="flex items-center gap-6">
  <div className="flex items-center bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm w-[220px]">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Type here..."
            className="bg-transparent outline-none border-none w-full text-gray-700 placeholder-gray-400"
          />
        </div>
        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500 flex items-center gap-1">
          <FaUserCircle className="text-lg" /> Sign in
        </span>
        <FaCog className="text-gray-400 text-lg cursor-pointer hover:text-blue-500" />
        <FaBell className="text-gray-400 text-lg cursor-pointer hover:text-blue-500" />
      </div>
    </div>
  );
};

export default Navbar
