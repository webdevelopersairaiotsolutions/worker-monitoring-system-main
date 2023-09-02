import React, { useState, useEffect } from "react";
import {
  FaWalking,
  FaVideo,
  FaPlay,
  FaBell,
  FaChartLine,
  FaCamera,
  FaShareAlt,
  FaStar,
  FaTrash,
  FaDownload,
} from "react-icons/fa";
import Navbar from "../../../../Navbar";
import Sidebar from "../../../../Sidebar";
import video1 from "../../../../../assets/8019 (video-converter.com).mp4";
import video2 from "../../../../../assets/8020 (video-converter.com).mp4";
import video3 from "../../../../../assets/channel4 (video-converter.com).mp4";
import video5 from "../../../../../assets/video1 (video-converter.com).mp4";

const cameras = [
  {
    name: "Camera 1",
    videoSource: video1,
    motionDetected: false,
    location: "Location 1",
  },
  {
    name: "Camera 2",
    videoSource: video2,
    motionDetected: false,
    location: "Location 2",
  },
  {
    name: "Camera 3",
    videoSource: video3,
    motionDetected: false,
    location: "Location 3",
  },
  {
    name: "Camera 4",
    videoSource: video5,
    motionDetected: false,
    location: "Location 4",
  },
];

function RTSPPersonDetectionComponent() {
  const [selectedCameraIndex, setSelectedCameraIndex] = useState(0);

  const handleCameraClick = (index) => {
    setSelectedCameraIndex(index);
  };

  const selectedCamera = cameras[selectedCameraIndex];

  const detectMotion = () => {
    return Math.random() < 0.5;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const motionDetected = detectMotion();
      cameras[selectedCameraIndex].motionDetected = motionDetected;
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedCameraIndex]);

  return (
    <div className="flex ml-custom-margin-left mt-20 min-h-screen font-customFont1">
      <Navbar />
      <Sidebar />

      <div className="flex-1 mx-8">
        <div className="flex items-center justify-between mb-4">
          {selectedCamera.motionDetected && (
            <span className="text-red-500 font-semibold">Motion Detected!</span>
          )}
        </div>
        <div className="aspect-w-16 aspect-h-9 sm:w-full">
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              src={selectedCamera.videoSource}
            >
              Your browser does not support the video tag.
            </video>
            {selectedCamera.motionDetected && (
              <div className="absolute inset-0 flex items-center justify-center bg-red-500 bg-opacity-75">
                <p className="text-white font-semibold text-lg">
                  Motion Detected!
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-2xl font-semibold">{selectedCamera.name}</p>
            <p className="text-sm text-gray-600">
              <span className="text-gray-800">Location:</span>{" "}
              {selectedCamera.location}
            </p>
            <p className="text-sm text-gray-600">
              <span className="text-gray-800">Status:</span>{" "}
              {selectedCamera.motionDetected ? (
                <span className="text-red-500 font-semibold">
                  Motion Detected!
                </span>
              ) : (
                <span className="text-green-500 font-semibold">No Motion</span>
              )}
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <FaShareAlt className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <FaStar className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <FaTrash className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <FaDownload className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/3 p-4 border-l border-gray-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <select className="w-full border border-gray-300 rounded p-2">
              {cameras.map((camera, index) => (
                <option key={index} value={index}>
                  {camera.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex space-x-4 pb-4">
          <button className="flex-grow px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none">
            Filter
          </button>
          <button className="flex-grow px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none">
            Manage
          </button>
        </div>
        {cameras.map((camera, index) => (
          <div
            key={index}
            className={`py-4 px-6 flex items-center space-x-4 cursor-pointer ${
              selectedCameraIndex === index ? "bg-blue-100" : ""
            } ${index === 0 ? "rounded-t-md" : ""} ${
              index === cameras.length - 1 ? "rounded-b-md" : ""
            } border border-gray-300 hover:bg-blue-50 transition duration-300`}
            onClick={() => handleCameraClick(index)}
          >
            <div className="flex items-center space-x-4 flex-grow">
              <div className="rounded-full bg-gray-200 p-2">
                <FaVideo className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{camera.name}</h3>
                <p className="text-sm text-gray-600">
                  <span className="text-gray-800">Location: </span>
                  {camera.location}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="text-gray-800">Status: </span>
                  {camera.motionDetected ? (
                    <span className="text-red-500">
                      <FaWalking className="inline-block h-4 w-4 text-red-500 mr-1" />
                      No Motion
                    </span>
                  ) : (
                    <span className="text-green-500">
                      <FaWalking className="inline-block h-4 w-4 text-green-500 mr-1" />
                      Motion Detected!
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className=" items-center space-y-2">
              <button className="text-blue-500 flex items-center">
                <FaBell className="h-5 w-5" />
              </button>
              <button className="text-blue-500 flex items-center">
                <FaChartLine className="h-5 w-5" />
              </button>
              <button className="text-blue-500 flex items-center">
                <FaCamera className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RTSPPersonDetectionComponent;
