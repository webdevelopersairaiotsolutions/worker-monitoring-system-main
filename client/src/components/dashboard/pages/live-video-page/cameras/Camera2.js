import React, { useEffect } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../../../../Navbar";
import Sidebar from "../../../../Sidebar";
import CameraButton from "../CameraButton";

const ffmpegIP = "localhost";
const channels = [{ id: 1, port: 6790, label: "Channel 2" }];

const Camera2 = () => {
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
      <div className="flex flex-col items-center mb-4">
        <div className="flex justify-center">
          <CameraButton />
        </div>
      </div>
      <div className="text-2xl font-semibold mb-4 flex flex-col items-center"> Camera 2</div>
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
              <div
                id={`video-canvas${channel.id}`}
                className="relative bg-black rounded-[10px] overflow-hidden ml-[5px] mt-0"
                style={{ height: "500px", width: "840px" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Camera2;
