import React, { useState } from "react";
import { FaHome, FaBell, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import profile_icon from "../assets/profile_icon.svg";
import Notification from "./Notification";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotification, setShowNotification] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleNavigate = (path) => {
    navigate(path);
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="h-[500px] p-6 bg-white flex flex-col items-center py-10 rounded-tr-[25px] rounded-br-[25px] shadow-lg">
        {/* Navigation Items */}
        <nav className="flex flex-col space-y-10">
          {/* Home Button */}
          <button
            onClick={() => handleNavigate("/")}
            className={`flex flex-col items-center ${
              isActive("/") ? "border-b-4 border-blue-500" : ""
            }`}
          >
            <FaHome
              className={`text-2xl ${
                isActive("/") ? "text-blue-500" : "text-gray-400"
              }`}
            />
          </button>

          {/* Notification Button */}
          <button
            onClick={toggleNotification}
            className={`flex flex-col items-center ${
              showNotification ? "border-b-4 border-blue-500" : ""
            }`}
          >
            <FaBell
              className={`text-2xl ${
                showNotification ? "text-blue-500" : "text-gray-400"
              }`}
            />
          </button>

          {/* Profile Button */}
          <button
            onClick={() => handleNavigate("/profile")}
            className={`flex flex-col items-center ${
              isActive("/profile") ? "border-b-4 border-blue-500" : ""
            }`}
          >
            <FaUser
              className={`text-2xl ${
                isActive("/profile") ? "text-blue-500" : "text-gray-400"
              }`}
            />
          </button>
        </nav>

        {/* Logout and Logo */}
        <div className="flex flex-col space-y-10 mt-auto">
          <button
            className="mt-auto flex flex-col items-center group"
          >
            <FaSignOutAlt className="text-2xl text-red-600 group-hover:text-blue-500" />
          </button>
          <div className="text-2xl font-bold">
            <img
              src={profile_icon}
              alt="Logo"
              className="w-14 h-14 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Background Blur when notification panel opens */}
      {showNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm z-40 transition-all duration-300" />
      )}

      {/* Notification */}
      <Notification
        showNotification={showNotification}
        toggleNotification={toggleNotification}
      />
    </div>
  );
};

export default Sidebar;
