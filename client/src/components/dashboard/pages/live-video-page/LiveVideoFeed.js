import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Navbar";
import Sidebar from "../../../Sidebar";
import CameraButton from "./CameraButton";

const LiveVideoFeed = () => {
  const navigate = useNavigate();

  const handleButtonClick = (page) => {
    navigate(page);
  };
  return (
    <div className="p-6 ml-80 mt-14">
      <h1>View all feeds.</h1>
      <button
        className="bg-customColorTwo hover:bg-customColor text-white font-bold py-2 px-4 rounded m-2 transition-colors duration-300"
        onClick={() => handleButtonClick("/view-all-feed")}
      >
        View all feed
      </button>
      <Navbar />
      <Sidebar />
      <CameraButton />
    </div>
  );
};

export default LiveVideoFeed;
