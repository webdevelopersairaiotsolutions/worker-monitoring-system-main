import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Navbar";
import Sidebar from "../../../Sidebar";
import ViewAllFeed from "../live-video-page/cameras/ViewAllFeed";
import RTSPstream from "../RTSPstream";
const LiveVideoFeed = () => {
  const navigate = useNavigate();

  const handleButtonClick = (page) => {
    navigate(page);
  };
  return (
    <div className="p-6 ml-custom-margin-left mt-14">
      <Navbar />
      <Sidebar />
      <ViewAllFeed />
      <RTSPstream />
      {/* <button
        className="bg-customColorTwo hover:bg-customColor text-white font-customFont1 py-2 px-4 rounded m-2 transition-colors duration-300"
        onClick={() => handleButtonClick("/view-all-feed")}
      >
        View all Dlink camera feeds
      </button>
      <button
        className="bg-customColorTwo hover:bg-customColor text-white font-customFont1 py-2 px-4 rounded m-2 transition-colors duration-300"
        onClick={() => handleButtonClick("/rtsp-stream")}
      >
        View all reo link camera feeds
      </button> */}
    </div>
  );
};

export default LiveVideoFeed;
