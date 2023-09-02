import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaUsers,
  FaVideo,
  FaCog,
  FaBell,
  FaAngleUp,
  FaAngleDown,
} from "react-icons/fa";
import Logo from "../assets/logo.png"; // Import your logo image

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Add a new function to close the dropdown when clicking outside of it
  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("usersdatatoken"); // Remove the token from local storage
    // setLoginData(null); // Reset the login data
    navigate("/"); // Navigate back to the login screen
  };

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = sidebarRef.current;
      if (sidebar) {
        const windowHeight = window.innerHeight;
        const sidebarTopOffset = sidebar.getBoundingClientRect().top;
        sidebar.style.height = `${windowHeight - sidebarTopOffset}px`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleOutsideClick); // Listen for clicks outside the sidebar
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleOutsideClick); // Cleanup the event listener
    };
  }, []);

  return (
    <aside
      className="bg-customColor font-customFont1 text-md text-white rounded-xl fixed top-0 left-0 m-2 ml-3 overflow-y-auto"
      ref={sidebarRef}
    >
      <div className="p-5 relative">
        {/* Sidebar Header */}
        <Link to="/dash">
          <div className="flex items-center mb-16">
            <img
              src={Logo}
              alt="Logo"
              className="w-16 h-16 mx-auto border border-white rounded-lg"
            />
          </div>
        </Link>

        <ul>
          <li className="mb-4">
            <Link
              to="/dash"
              className="flex items-center hover:bg-white hover:text-teal-500 px-4 py-3 rounded-r-full transition-colors"
            >
              <FaHome className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/employees"
              className="flex items-center hover:bg-white hover:text-teal-500  px-4 py-3 rounded-r-full transition-colors"
            >
              <FaUsers className="mr-2" />
              Employees
            </Link>
          </li>

          {/* Dropdown menu */}
          <li className="mb-4">
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:bg-white hover:text-teal-500  px-4 py-3 rounded-r-full transition-colors"
            >
              <FaVideo className="mr-2" />
              Video Management{" "}
              {showDropdown ? (
                <FaAngleUp className="ml-auto" />
              ) : (
                <FaAngleDown className="ml-auto" />
              )}
            </button>
            {showDropdown && (
              <ul className="ml-4">
                <li>
                  <Link
                    to="/live-video-feed"
                    className="flex items-center hover:bg-white hover:text-teal-500  px-4 py-3 rounded-r-full transition-colors"
                  >
                    <FaVideo className="mr-2" />
                    Live Video Feed
                  </Link>
                </li>
                <li>
                  <Link
                    to="/RTSPPersonDetectionComponent"
                    className="flex items-center hover:bg-white hover:text-teal-500  px-4 py-3 rounded-r-full transition-colors"
                  >
                    <FaVideo className="mr-2" />
                    AI People Detection
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* End of dropdown menu */}

          <li className="mb-4">
            <Link
              to="/alerts"
              className="flex items-center hover:bg-white hover:text-teal-500  px-4 py-3 rounded-r-full transition-colors"
            >
              <FaBell className="mr-2" />
              Alerts
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/statistics"
              className="flex items-center hover:bg-white hover:text-teal-500  px-4 py-3 rounded-r-full transition-colors"
            >
              <FaChartLine className="mr-2" />
              Statistics
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/settings"
              className="flex items-center hover:bg-white hover:text-teal-500  px-4 py-3 rounded-r-full transition-colors"
            >
              <FaCog className="mr-2" />
              Settings
            </Link>
          </li>

          {/* Add more sidebar options as needed */}
        </ul>
        

      </div>
      
      <button className="m-custom-margin-right fixed bottom-0 mt-36 mb-4">
        <a
          href="/saas-landing-page"
          onClick={handleLogout}
          className="relative inline-flex items-center justify-center p-4 px-6 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            Logout
          </span>
          <span className="relative invisible">Logout</span>
        </a>
      </button>
    </aside>
  );
};

export default Sidebar;
