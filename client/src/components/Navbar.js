import React, { useState } from "react";
import { FaUser, FaBell, FaSearch } from "react-icons/fa";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = currentDate.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const [showNotifications, setShowNotifications] = useState(false);
  const [isInputClicked, setInputClicked] = useState(false);
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleInputClick = () => {
    setInputClicked(true);
  };

  const handleInputBlur = () => {
    setInputClicked(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("usersdatatoken");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 ml-10 mr-6 my-2 rounded-xl left-64 right-0 z-10 bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="mr-4">
              <div className="text-black hidden sm:block">
                <span className="font-semibold">{formattedDate}</span>
                <span className="mx-2">|</span>
                <span>{formattedTime}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <div className="relative">
                <span
                  className={`absolute inset-y-0 left-0 pl-3 flex items-center ${
                    isInputClicked ? "text-blue-500" : "text-gray-500"
                  }`}
                >
                  <FaSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className={`bg-gray-200 text-gray-800 pl-10 pr-6 py-2 rounded-full transition-all duration-300 ease-in-out shadow-md focus:outline-none focus:ring ${
                    isInputClicked ? "focus:border-blue-300" : "focus:border-transparent"
                  }`}
                  onClick={handleInputClick}
                  onBlur={handleInputBlur}
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <a href="/profile">
                  <FaUser className="text-gray-400 hover:text-white" />
                </a>
              </div>
              <div onClick={handleNotificationClick}>
                <FaBell className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-black block sm:hidden mt-2">
          <span className="font-semibold">{formattedDate}</span>
          <span className="mx-2">|</span>
          <span>{formattedTime}</span>
        </div>
      </div>

      {showNotifications && (
        <div className="fixed right-4 top-20 z-50">
          <div className="max-w-sm w-full bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <Notification
                title="Alert"
                type="blue-500"
                message="Worker John Doe has exceeded working hours."
              />

              <Notification
                title="Warning"
                type="yellow-500"
                message="Worker Jane Smith is absent today."
              />

              {/* ... (Other notifications) ... */}

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
