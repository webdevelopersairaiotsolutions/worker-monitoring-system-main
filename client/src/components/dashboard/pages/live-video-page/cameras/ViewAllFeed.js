import React, { useState, useEffect, useRef } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";
import { FiArrowLeft, FiMinimize, FiMaximize, FiX } from "react-icons/fi";
import Navbar from "../../../../Navbar";
import Sidebar from "../../../../Sidebar";

const ffmpegIP = "localhost";
const channels = [
  // ... channels data ...
  { id: 0, port: 6789, label: "GIRBAU-JENSEN-TUNNEL" },
  { id: 1, port: 6790, label: "BAY02-JENSEN-PRESS" },
  { id: 2, port: 6791, label: "TOWEL-FOLDERS" },
  { id: 3, port: 6792, label: "TLC-CAM08" },
  { id: 4, port: 6793, label: "VALET-AREA" },
  { id: 5, port: 6794, label: "IRONER-1" },
  { id: 6, port: 6795, label: "BAY-06-07" },
  { id: 7, port: 6797, label: "BOILER-ROOM" },
];

const Modal = ({ channel, onClose }) => {
  const modalPlayerRef = useRef(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    const videoUrl = `ws://${ffmpegIP}:${channel.port}/`;
    modalPlayerRef.current = new JSMpeg.VideoElement(
      `#video-canvas-popup`,
      videoUrl,
      {
        autoplay: true,
      }
    );

    return () => {
      // Clean up modal player when the modal is closed
      if (modalPlayerRef.current) {
        modalPlayerRef.current.destroy();
        modalPlayerRef.current = null;
      }
    };
  }, [channel]);

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleMaximize = () => {
    setIsMinimized(false);
    setIsMaximized(true);
  };

  const handleRestore = () => {
    setIsMinimized(false);
    setIsMaximized(false);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-90"
      style={{ zIndex: 9999 }}
    >
      <div
        className="relative bg-black rounded-[10px] overflow-hidden"
        style={{
          height: isMinimized ? "300px" : isMaximized ? "90vh" : "500px",
          width: isMinimized ? "440px" : isMaximized ? "80%" : "780px",
        }}
      >
        <div
          id="video-canvas-popup"
          style={{ height: "100%", width: "100%" }}
        ></div>
      </div>
      <div className="absolute top-8 right-8 flex gap-2">
        {isMaximized ? (
          <button className="text-white text-xl" onClick={handleRestore}>
            <FiMinimize />
          </button>
        ) : (
          <React.Fragment>
            {/* <button className="text-white text-xl" onClick={handleMinimize}>
              <FiMinimize />
            </button> */}
            <button className="text-white text-xl" onClick={handleMaximize}>
              <FiMaximize />
            </button>
          </React.Fragment>
        )}
        <button className="text-white text-xl" onClick={onClose}>
          <FiX />
        </button>
      </div>
    </div>
  );
};

const ViewAllFeed = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleVideoClick = (channelId) => {
    setSelectedChannel(channelId);
    setIsPopupOpen(true);
  };

  useEffect(() => {
    channels.forEach((channel) => {
      const videoUrl = `ws://${ffmpegIP}:${channel.port}/`;
      const gridPlayer = new JSMpeg.VideoElement(
        `#video-canvas${channel.id}`,
        videoUrl,
        { autoplay: true }
      );
      console.log(gridPlayer);
    });

    return () => {
      // Clean up grid players (if needed)
    };
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedChannel(null);
  };

  return (
    <div className="p-6 ml-72 mt-20">
      <Navbar />
      <Sidebar />
      {/* <div className="text-2xl font-semibold mb-4 flex flex-col items-center">
        Live Feed
      </div> */}
      <div className="flex flex-wrap w-full gap-3 justify-normal">
        
        {channels.map((channel) => (
          <div key={channel.id} className="flex ">
            <div
              className="flex flex-col items-center my-2 cursor-pointer relative"
              onClick={() => handleVideoClick(channel.id)}
            >
              <div
                id={`video-canvas${channel.id}`}
                className="relative bg-black rounded-[10px] overflow-hidden ml-[5px] mt-0"
                style={{ height: "240px", width: "375px" }}
              ></div>
              <div
                className="absolute bottom-0 left-0 ml-1.5 px-2 py-1 bg-black bg-opacity-50 text-white text-sm"
                style={{ zIndex: 1, borderRadius: "0 0 10px 10px" }}
              >
                <div className="">
                  {channel.label}
                </div>
              </div>
            </div>
            
          </div>
          
        ))}
      </div>
      {isPopupOpen && selectedChannel !== null && (
        <Modal
          channel={channels.find((ch) => ch.id === selectedChannel)}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default ViewAllFeed;
