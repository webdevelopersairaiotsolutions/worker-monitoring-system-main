import React, { useEffect } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../../../../Navbar";
import Sidebar from "../../../../Sidebar";

const ffmpegIP = "localhost";
const channels = [
  { id: 0, port: 6789, label: "Channel 1" },
  { id: 1, port: 6790, label: "Channel 2" },
  { id: 2, port: 6791, label: "Channel 3" },
  { id: 3, port: 6792, label: "Channel 4" },
  { id: 4, port: 6793, label: "Channel 5" },
  { id: 5, port: 6794, label: "Channel 6" },
  { id: 6, port: 6795, label: "Channel 7" },
];

const ViewAllFeed = () => {
  useEffect(() => {
    const players = channels.map((channel) => {
      const videoUrl = `ws://${ffmpegIP}:${channel.port}/`;
      const player = new JSMpeg.VideoElement(
        `#video-canvas${channel.id}`,
        videoUrl,
        { autoplay: true }
      );
      console.log(player);
      return player;
    });

    return () => {
      players.forEach((player) => {
        try {
          player.destroy();
        } catch (error) {
          console.error("Error occurred while destroying player:", error);
        }
      });
    };
  }, []);

  return (
    <div className="p-6 ml-80 mt-14">
      <Navbar />
      <Sidebar />
      <div className="text-2xl font-semibold mb-4 flex flex-col items-center">
        Live Feed
      </div>
      <Link
        to="/live-video-feed"
        className="absolute top-20 left-70 flex items-center bg-customColorTwo hover:bg-customColor text-white font-bold py-2 px-4 rounded m-2 transition-colors duration-300"
      >
        <FiArrowLeft className="text-xl" />
      </Link>
      <div className="flex flex-wrap w-full justify-evenly">
        {channels.map((channel) => (
          <div key={channel.id} className="flex justify-start">
            <div className="flex flex-col items-center mb-2">
              {" "}
              <div
                id={`video-canvas${channel.id}`}
                className="relative bg-black rounded-[10px] overflow-hidden ml-[5px] mt-0"
                style={{ height: "200px", width: "340px" }}
              ></div>
              <div className="mt-[10px] text-[16px] font-bold">
                {channel.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllFeed;
